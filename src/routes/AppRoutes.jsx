import Homepage from "../pages/Homepage";
import OrderPage from "../pages/OrderPage";
import OrderOnline from "../pages/OrderOnline";
import ReservationPage from "../pages/ReservationPage";
import CartPage from "../pages/CartPage";
import {Routes, Route, } from 'react-router-dom';
import Login from "../components/Login";
import Loading from "../pages/Loading";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/reservation" element={<ReservationPage />}></Route>
                <Route path="/order-online" element={<OrderOnline />}></Route>
                <Route path="/order-online/order/:dish" element={<OrderPage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/loading" element={<Loading/>}></Route>
                <Route path="*" element={<Homepage />}></Route>
            </Routes>
        </>
    );
};

export default AppRoutes;