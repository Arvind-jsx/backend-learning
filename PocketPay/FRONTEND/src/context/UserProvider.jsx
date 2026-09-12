import { useState } from 'react';
import { UserContext } from './UserContext';

export function UserProvider({ children }) {
  const [currentUser, setCurrentUserState] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");

    if (!savedUser) {
      return null;
    }

    try {
      return JSON.parse(savedUser);
    } catch {
      localStorage.removeItem("currentUser");
      return null;
    }
  });

  const setCurrentUser = (user) => {
    setCurrentUserState(user);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}