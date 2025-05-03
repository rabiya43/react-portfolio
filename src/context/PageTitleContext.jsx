// src/context/PageTitleContext.jsx

import React, { createContext, useState } from 'react';

export const PageTitleContext = createContext();

export const PageTitleProvider = ({ children }) => {
  const [title, setTitle] = useState("Home");

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};
