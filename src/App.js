// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AccountProvider from "./context/AccountContext";
// import "@shopify/polaris/dist/styles.css";

// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <AppProvider>
      <AccountProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AccountProvider>
    </AppProvider>
  );
};

export default App;
