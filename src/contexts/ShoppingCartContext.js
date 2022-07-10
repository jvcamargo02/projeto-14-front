import { useState, createContext } from "react";

const ShoppingCartList = createContext();

export function ShoppingCartListProvider(props) {
    const { children } = props;

    const [shoppingCartList, setShoppingCartList] = useState([]);

    return (
        <ShoppingCartList.Provider value={{ shoppingCartList, setShoppingCartList }}>
            {children}
        </ShoppingCartList.Provider>
    );
}

export default ShoppingCartList;
