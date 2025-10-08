import React, { createContext, useContext, useState } from "react";
const AppContext = createContext();
export function useAppContext() { return useContext(AppContext); }
export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [crops, setCrops] = useState([]);
  const [tasks, setTasks] = useState([]);
  return (
    <AppContext.Provider value={{ user, setUser, crops, setCrops, tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
}
