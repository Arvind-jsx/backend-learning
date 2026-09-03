import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");

  return (
    <DataContext.Provider value={{ data, setData, message, setMessage }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
