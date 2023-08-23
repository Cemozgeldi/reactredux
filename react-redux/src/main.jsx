import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
  //app içinde ki her componente ulaşmak ve isteklerimizi gönderebilmek adına provider ile sarmalıyoruz.
);
