import React, { useReducer } from "react";

const initState = {
  menus: [],
  register: (menu) => {},
  show: (id, position) => {},
  hide: (id) => {},
  hideAll: () => {},
  deregister: (id) => {},
  getMenu: (id) => {},
};

const MenuContext = React.createContext(initState);
const [REGISTER, SHOW, HIDE, HIDE_ALL, DEREGISTER] = [
  "REGISTER",
  "SHOW",
  "HIDE",
  "HIDE_ALL",
  "DEREGISTER",
];

const menuReducer = (state, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        menus: [...state.menus, action.menu],
      };
    case SHOW:
      return {
        ...state,
        menus: state.menus.map((menu) => {
          menu.visible = menu.id === action.id || menu.visible;
          menu.position = action.position || menu.position;
          return menu;
        }),
      };
    case HIDE:
      return {
        ...state,
        menus: state.menus.map((menu) => {
          menu.visible = menu.id === action.id ? false : menu.visible;
          return menu;
        }),
      };
    case HIDE_ALL:
      return {
        ...state,
        menus: state.menus.map((menu) => {
          menu.visible = false;
          return menu;
        }),
      };
    case DEREGISTER:
      return {
        ...state,
        menus: state.menus.filter((menu) => menu.id !== action.id),
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

  return (
    <MenuContext.Provider value={contextValue}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
