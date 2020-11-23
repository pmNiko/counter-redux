import { createStore } from "redux";

// inicializador de estado
const initialState = 0;

//---- acciones de dispacher  ----//
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

/*  función reducer /función pura  
    afecta el store con este tipo de
    funcion porque el store es inmutable  
    action : {type : 'ACTION',...}
*/
//----- Reducer ------//
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

//----- Disparadores de acciones ----//
// las exporto para poderla llamar desde el componente
export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

// ---- creación del store a partir de los reducer ---//
const store = createStore(counter);

// ------ ----- Dispachers ------ -------- //
//---- metodo encargado de ejecutar las acciones ----//
// store.dispatch(increment());

// ----- ----- Subscriber ----- ----- //
// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
