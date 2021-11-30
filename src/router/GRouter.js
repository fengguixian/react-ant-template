import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import Page404 from "../pages/errors/Page404";

function createRoutes(route) {
    if(route.children) {
        return (
            <Route 
            key={route.meta.key} 
            path={route.path}  
            element={route.meta.isNeedLogin ? <RequireAuth><route.component /></RequireAuth> : <route.component />}
            >
                {
                    route.children.map(sub => {
                        return createRoutes(sub);
                    })
                }
            </Route>
        )
    }else{
        return (
            <Route 
            key={route.meta.key} 
            path={route.path}  
            element={route.meta.isNeedLogin ? <RequireAuth><route.component /></RequireAuth> : <route.component />} 
            />
        )
    }
}

function RequireAuth(props) {
    let token = window.localStorage.getItem('token');

    if (!token || token.length===0) {
      return <Navigate to="login"/>;
    }
  
    return props.children;
}

const GRouter = () => {
    let mRoutes = routes.map((item) => 
        createRoutes(item)
    );
    return (
        <BrowserRouter>
            <Routes>
                {mRoutes}
                <Route key='page404' path='/*' element={<Page404 />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default GRouter;
