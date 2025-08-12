import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { CurrencyContext } from "./Context/CurrencyContext";
import Router from "./Components/Router/Router";

function App() {

  const [currency, setCurrency] = useState('usd');

  return (<>
    <CurrencyContext.Provider value={{ currency, setCurrency}}>
      <Router />
    </CurrencyContext.Provider>
  </>
  );
}

export default App;
