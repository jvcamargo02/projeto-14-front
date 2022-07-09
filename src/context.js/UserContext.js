import { useState, createContext } from "react";

const UserContext = createContext();

export function UserContextProvider(props) {
    const { children } = props;

    const [token, setToken] = useState("")

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        selectPlanId: '',
        userPaymentData: {
            number: "",
            cardName: "",
            expiry: "",
            cvc: "",
        },
    });

    const [progress, setProgress] = useState(0)

    return (
        <UserContext.Provider value={{ userData, setUserData, progress, setProgress, token, setToken }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
