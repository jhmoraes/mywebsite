import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from '../page/Home/Home'
import ContatsPage from '../page/Contats/ContatsPage'
import ErrorPage from "../page/Error/ErrorPage";


const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={'/contats'} element={<ContatsPage />} />
                <Route element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default Router
