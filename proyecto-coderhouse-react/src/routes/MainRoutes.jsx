import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponents/NavBarComponent";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Item from "../pages/Item";

const MainRoutes = () => {
    return  (
        <BrowserRouter>
               <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/category/:categoryId" element={<Category  />}/>
                <Route path="/item/:id" element={<Item  />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoutes;