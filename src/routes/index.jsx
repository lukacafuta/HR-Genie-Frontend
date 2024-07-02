import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import DefaultLayout  from "../layouts/DefaultLayout";
import ProtectedRoute from "../layouts/ProtectedRoute";


export default function Router() {

    return (
        <BrowserRouter>
            <Routes>

                <Route element={<DefaultLayout/>} >
                    <Route path ='/' element={<h1>Root page</h1>}/>
                    <Route path ='/login' element={<h1>Login page</h1>}/>
                </Route>

                <Route element={<ProtectedRoute/>}>
                    <Route element={<DefaultLayout/>} >
                        <Route path ='/dashboard' element={<h1>Dashboard page</h1>}/>
                    </Route>
                </Route>

                <Route path = '*' element = {<h1>404 - This page does not exist</h1>} />
            </Routes>
        </BrowserRouter>

    )

}