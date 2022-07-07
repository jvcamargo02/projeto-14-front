import { useState, createContext } from "react";

const UserContext = createContext();

export function UserContextProvider(props) {
    const { children } = props;

    const [token, setToken] = useState(null);

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
