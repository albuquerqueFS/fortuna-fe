import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { store } from "./store";

import "./styles/global.sass";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
