import React, { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [sidebar, setsidebar] = useState(true);

  return (
    <AccountContext.Provider
      value={{
        sidebar,
        setsidebar,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
