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

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        selectPlanId: "",
        capsules: 7,
        userAddress: {
            address: "",
            city: "",
            state: "",
            zip: ""
        },
        userPaymentData: {
            number: "",
            cardName: "",
            expiry: "",
            cvc: ""
        }
    });

    const [progress, setProgress] = useState(0);

    const [newPassword, setNewPassword] = useState("")
   

    return (
        <UserContext.Provider
            value={{
                userData,
                setUserData,
                progress,
                setProgress,
                token,
                setToken,
                newPassword,
                setNewPassword
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
