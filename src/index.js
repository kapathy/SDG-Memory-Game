import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MemoryGame from "./MemoryGame";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<MemoryGame />, document.getElementById("root"));

serviceWorker.unregister();
