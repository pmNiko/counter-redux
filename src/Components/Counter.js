import React from "react";
// conecta el componente al store
import { connect } from "react-redux";
import { increment, decrement } from "./../redux/store";

// hago una destructuracion de las props
const Counter = ({ state, increment, decrement }) => {
  console.log(state);

  return (
    <>
      <h2>Contador de clicks </h2>
      <h3>Clicks: {state} </h3>
      <button
        type="button"
        onClick={() => increment()}
        className="btn btn-outline-primary ml-2"
      >
        +
      </button>
      <button
        type="button"
        onClick={() => decrement()}
        className="btn btn-outline-primary ml-2"
      >
        -
      </button>
    </>
  );
};

/*  mapping de react-redux para convertir 
    el state global de la app y pasarselo 
    al componente. Comunica el estado hacia 
    un componente */
const mapStateToProps = (state) => {
  return { state };
};

/*  redefino la manera de llamar las acciones 
    del dispacher que me llega en las props  
*/
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

/*  HOC -> High order component connect()
   es como un decorador de Angular
   Función que envuelve un componente
   connect(mapStateToProps) indica a Counter que 
   lo que le llegue del store lo va a traducir en props */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
