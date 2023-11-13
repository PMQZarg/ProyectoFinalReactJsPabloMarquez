import Cart from "../Components/Pages/cart/Cart";

import CheckOutOficial from "../Components/Pages/checkOutOficial/CheckOutOficial";
import ItemDetailContainer from "../Components/Pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../Components/Pages/itemListContainer/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/" ,
        Element: ItemListContainer  
    },
    {
        id: "category",
        path: "/category/:categoryName",
        Element : ItemListContainer 
    },
    {
        id: "cart",
        path: "/cart",
        Element : Cart
    },
    {
        id: "detalle",
        path: "/itemDetail/:id",
        Element : ItemDetailContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element : CheckOutOficial
    },
   
]
