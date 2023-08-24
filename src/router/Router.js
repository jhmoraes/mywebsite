import { Routes, Route, HashRouter } from "react-router-dom";
import Home from '../page/Home/Home'
import CareerPage from '../page/Career/CareerPage'
import ErrorPage from "../page/Error/ErrorPage";
import ProjectsPage from "../page/Projects/ProjectsPage";



const Router = () => {
    return (

        <HashRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={'/career'} element={< CareerPage />} />
                <Route path={'/projects'} element={<ProjectsPage />} />
                <Route element={<ErrorPage />} />
            </Routes>
        </HashRouter>

    )
}

export default Router
