import App from "../App";
import Cart from "../components/cart";
import Home from "../components/home";
import Store from "../components/store";

const ConfigRoutes= [
    {
        path: "/",
        element: <App/>
    },
    {
        path: "store",
        element: <Store/>
    },
    {
        path: "cart",
        element: <Cart/>
    },
]


export default ConfigRoutes;