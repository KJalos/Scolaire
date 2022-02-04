import React, { useReducer } from "react";

const initState = {
  menus: [],
  register: (menu) => {},
  setPosition: (menuId, position) => {},
  show: (id) => {},
  hide: (id) => {},
  hideAll: () => {},
  deregister: (id) => {},
  getMenu: (id) => {},
  whitelistElement: (menuId, element) => {},
  whitelistElementRec: (menuId, element) => {},
  blacklistElement: (menuId, element) => {},
  blacklistElementRec: (menuId, element) => {},
  cleanupMenu: (menuId) => {},
};

const MenuContext = React.createContext(initState);
const [
  REGISTER,
  SHOW,
  SET_POSITION,
  HIDE,
  HIDE_ALL,
  DEREGISTER,
  ADD_EXEMPT,
  REMOVE_EXEMPT,
  CLEAN,
] = [
  "REGISTER",
  "SHOW",
  "SET_POSITION",
  "HIDE",
  "HIDE_ALL",
  "DEREGISTER",
  "ADD_EXEMPT",
  "REMOVE_EXEMPT",
  "CLEAN",
];

const menuReducer = (state, action) => {
  // console.log(action.type, "\nPayload:", action);
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        menus: [...state.menus, action.menu],
      };
    case SHOW:
      //console.log("Show menu:", action.id);
      return {
        ...state,
        menus: state.menus.map((menu) => {
          const updatedMenu = {
            ...menu,
            visible: menu.id === action.id || menu.visible,
          };
          return updatedMenu;
        }),
      };
    case SET_POSITION:
      // console.log(action.type, "\nPayload:", action);
      return {
        ...state,
        menus: state.menus.map((menu) => {
          return {
            ...menu,
            position: menu.id === action.menuId ? action.position : menu.position,
          };
        }),
      };
    case HIDE:
      return {
        ...state,
        menus: state.menus.map((menu) => {
          return {
            ...menu,
            visible: menu.id === action.id ? false : menu.visible,
          };
        }),
      };
    case HIDE_ALL:
      return {
        ...state,
        menus: state.menus.map((menu) => {
          return { ...menu, visible: false };
        }),
      };
    case DEREGISTER:
      return {
        ...state,
        menus: state.menus.filter((menu) => menu.id !== action.id),
      };
    case ADD_EXEMPT:
      // //console.log("Whitelisting", action.element);
      return {
        ...state,
        menus: state.menus.map((menu) => {
          return {
            ...menu,
            whitelist:
              menu.id === action.menuId
                ? [...menu.whitelist, action.element]
                : menu.whitelist,
          };
        }),
      };
    case REMOVE_EXEMPT:
      // //console.log("Blacklisting", action.element);
      return {
        ...state,
        menus: state.menus.map((menu) => {
          menu.whitelist =
            menu.id === action.menuId
              ? menu.whitelist.filter(
                  (whitelistedElement) => whitelistedElement !== action.element
                )
              : menu.whitelist;
          return menu;
        }),
      };
    case CLEAN:
      return {
        ...state,
        menus: state.menus.map((menu) => {
          console.log("Clean", action.menuId);
          console.log("Whitelist before", menu.whitelist);
          return {
            ...menu,
            whitelist:
              menu.id === action.menuId
                ? menu.whitelist.filter((whitelistedElement) => {
                    let exists = true;
                    console.log(document.children);
                    return exists;
                  })
                : menu.whitelist,
          };
        }),
      };
    default:
      return state;
  }
};

export function MenuContextProvider(props) {
  const [contextValue, dispatch] = useReducer(menuReducer, {
    menus: [],
    register: handleRegister,
    setPosition: handleSetPosition,
    show: handleShow,
    hide: handleHide,
    hideAll: handleHideAll,
    deregister: handleDeregister,
    getMenu: handleGetMenu,
    whitelistElement: handleWhitelistElement,
    whitelistElementRec: handleWhitelistElementRec,
    blacklistElement: handleBlacklistElement,
    blacklistElementRec: handleBlacklistElementRec,
    cleanupMenu: handleCleanupMenu,
  });

  function handleRegister(menu) {
    dispatch({
      type: REGISTER,
      menu,
    });
  }

  function handleShow(id) {
    dispatch({
      type: SHOW,
      id,
    });
  }

  function handleHide(id) {
    dispatch({
      type: HIDE,
      id,
    });
  }

  function handleHideAll() {
    console.log("Hiding all");
    dispatch({
      type: HIDE_ALL,
    });
  }

  function handleDeregister(id) {
    dispatch({
      type: DEREGISTER,
      id,
    });
  }

  function handleGetMenu(id) {
    return contextValue.menus.find((menu) => menu.id === id);
  }

  function handleWhitelistElement(menuId, element) {
    //console.log("Whitelisting",element,"in",menuId);
    dispatch({
      type: ADD_EXEMPT,
      menuId,
      element,
    });
  }

  function handleBlacklistElement(menuId, element) {
    //console.log("Blacklisting",element,"in",menuId);
    dispatch({
      type: REMOVE_EXEMPT,
      menuId,
      element,
    });
  }

  function handleWhitelistElementRec(menuId, element) {
    const children = element.children;

    if (children) {
      // Recursively whitelist children
      for (let i = 0; i < children.length; i++) {
        handleWhitelistElementRec(menuId, children[i]);
      }
    }
    // console.log("Whitelisting:",element,"to",menuId);
    handleWhitelistElement(menuId, element);
  }

  function handleBlacklistElementRec(menuId, element) {
    const children = element.children;

    if (children) {
      // Recursively whitelist children
      for (let i = 0; i < children.length; i++) {
        handleBlacklistElementRec(menuId, children[i]);
      }
    }
    // console.log("Blacklisting:",element,"from",menuId);
    handleBlacklistElement(menuId, element);
  }

  function handleCleanupMenu(menuId) {
    const menu = contextValue.menus.find((menu) => menuId === menu.id);

    // console.log(menuId,menu);
    // Temp fix for empty menus list when cleanup is run
    if (contextValue.menus.length > 0)
      for (let i = 0; i < menu.whitelist.length; i++) {
        let elementFoundInDoc = false;
        (function checkChildren(element) {
          const children = element.children;
          if (children) {
            for (let j = 0; j < children.length; j++) {
              checkChildren(children[j]);
            }
          }
          if (element === menu.whitelist[i]) {
            elementFoundInDoc = true;
          }
        })(document);

        if (!elementFoundInDoc) {
          handleBlacklistElementRec(menuId, menu.whitelist[i]);
        }
      }
  }

  function handleSetPosition(menuId, position) {
    dispatch({
      type: SET_POSITION,
      menuId,
      position,
    });
  }

  return (
    <MenuContext.Provider value={contextValue}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
