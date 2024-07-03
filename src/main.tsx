import React from "react";
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "thirdweb/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);


/*
________  ________      ___    ___ ________  _________  ___     ___    ___ 
|\   ____\|\   __  \    |\  \  /  /|\   __  \|\___   ___\\  \   |\  \  /  /|
\ \  \___|\ \  \|\  \   \ \  \/  / | \  \|\  \|___ \  \_\ \  \  \ \  \/  / /
 \ \  \    \ \   _  _\   \ \    / / \ \   ____\   \ \  \ \ \  \  \ \    / / 
  \ \  \____\ \  \\  \|   \/  /  /   \ \  \___|    \ \  \ \ \  \  /     \/  
   \ \_______\ \__\\ _\ __/  / /      \ \__\        \ \__\ \ \__\/  /\   \  
    \|_______|\|__|\|__|\___/ /        \|__|         \|__|  \|__/__/ /\ __\ 
                       \|___|/                                  |__|/ \|__|                                                                                                                                                         
*/