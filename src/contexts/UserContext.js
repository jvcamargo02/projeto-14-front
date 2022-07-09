import { useState, createContext } from "react";

const UserContext = createContext();

export function UserContextProvider(props) {
    const { children } = props;

    const [token, setToken] = useState("1154a7b6-0987-41c0-a804-1833eeec9281");

    const locallyStoredToken = localStorage.getItem("token");

    if (locallyStoredToken === null && token !== null) {
        localStorage.setItem("token", token);
    } else if (locallyStoredToken !== null && token === null) {
        setToken(locallyStoredToken);
    }

    return (
        <UserContext.Provider value={{ token, setToken }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
