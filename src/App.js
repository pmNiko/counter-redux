import "./redux/store";
import Contador from "./Components/Counter";
/*indica que todos los elementos hijos van 
  a estar subscriptos al mismo estado*/
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    // recibe una prop = store
    <Provider store={store}>
      <Contador />
    </Provider>
  );
}

export default App;

/*
  npm i redux para generar el store de la aplicación
  npm i react-redux para que los componentes se
  comuniquen con el store
*/
