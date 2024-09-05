import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Categoria from "./Pages/Categoria";
import Productos from "./Pages/Productos";

function App() {
    return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path={`category/:categoryId`} element={<Categoria/>} />
        <Route path={`item/:productId`} element={<Productos/>} />
        <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
}

export default App;