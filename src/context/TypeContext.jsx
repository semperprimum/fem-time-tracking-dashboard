import React, { useState, useContext } from "react";

const TypeContext = React.createContext();
const TypeUpdateContext = React.createContext();

export const useType = () => {
  return useContext(TypeContext);
};

export const useTypeUpdate = () => {
  return useContext(TypeUpdateContext);
};

export function TypeProvider({ children }) {
  const [type, setType] = useState("weekly");
  const updateType = (dataType) => {
    if (
      dataType === "daily" ||
      dataType === "weekly" ||
      dataType === "monthly"
    ) {
      setType(dataType);
    } else {
      console.error("Wrong data type used");
    }
  };
  return (
    <TypeContext.Provider value={type}>
      <TypeUpdateContext.Provider value={updateType}>
        {children}
      </TypeUpdateContext.Provider>
    </TypeContext.Provider>
  );
}
