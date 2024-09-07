import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import E01 from "./pages/e01";
import E11 from "./pages/e11";
import E02 from "./pages/e02"
import E04 from "./pages/e04"
import E05 from "./pages/e05"

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/e01' element={<E01 />} />
                <Route path='/e11' element={<E11 />} />
                <Route path ='/e02' element={<E02/>}/>
                <Route path = '/e04' element={<E04/>}/> 
                <Route path='/e05' element={<E05/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export { Navigation }