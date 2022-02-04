import React, { useReducer } from "react";

const initState = {
  menus: [],
  register: (menu) => {},
  show: (id, position) => {},
  hide: (id) => {},
  hideAll: () => {},
  deregister: (id) => {},
  getMenu: (id) => {},
  whitelistElement: (menuId, element) => {},
  blacklistElement: (menuId, element) => {},
  whitelistElementRec: (menuId, element) => {},
  blacklistElementRec: (menuId, element) => {},
  cleanupMenu: (menuId) => {},
};

const MenuContext = React.createContext(initState);
const [REGISTER, SHOW, HIDE, HIDE_ALL, DEREGISTER, ADD_EXEMPT, REMOVE_EXEMPT] =
  [
    "REGISTER",
    "SHOW",
    "HIDE",
    "HIDE_ALL",
    "DEREGISTER",
    "ADD_EXEMPT",
    "REMOVE_EXEMPT",
  ];

const menuReducer = (state, action) => {
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
          return {
            ...menu,
            visible: menu.id === action.id || menu.visible,
            position:
              menu.id === action.id
                ? action.position || menu.position
                : menu.position,
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
    default:
      return state;
  }
};

export function MenuContextProvider(props) {
  const [contextValue, dispatch] = useReducer(menuReducer, {
    menus: [],
    register: handleRegister,
    show: handleShow,
    hide: handleHide,
    hideAll: handleHideAll,
    deregister: handleDeregister,
    getMenu: handleGetMenu,
    whitelistElement: handleWhitelistElement,
    blacklistElement: handleBlacklistElement,
    whitelistElementRec: handleWhitelistElementRec,
    blacklistElementRec: handleBlacklistElementRec,
    cleanupMenu: handleCleanupMenu,
  });

  function handleRegister(menu) {
    dispatch({
      type: REGISTER,
      menu,
    });
  }

  function handleShow(id, position) {
    dispatch({
      type: SHOW,
      id,
      position,
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
    // console.log(contextValue);
    // console.log(menuId,menu);
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

  return (
    <MenuContext.Provider value={contextValue}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
