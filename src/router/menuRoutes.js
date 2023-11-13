import Cart from "../Components/Pages/cart/Cart";

import CheckOutOficial from "../components/pages/checkOutOficial/CheckOutOficial";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/" ,
        Element: ItemListContainer  ,
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
