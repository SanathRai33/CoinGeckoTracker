import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { CurrencyContext } from "./Context/CurrencyContext";

function App() {

  const [currency, setCurrency] = useState('usd');

  return (<>
    <CurrencyContext.Provider value={{ currency, setCurrency}}>
      <Home />
    </CurrencyContext.Provider>
  </>
  );
}

export default App;
