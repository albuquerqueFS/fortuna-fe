import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

import "./styles/global.sass";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
