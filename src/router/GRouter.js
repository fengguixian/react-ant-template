import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import Page404 from "../pages/errors/Page404";

function createRoutes(route) {
    if(route.meta.isNeedLogin) {
        if(route.children) {
            return (
                <Route key={route.meta.key} path={route.path} exact element={<RequireAuth><route.component /></RequireAuth>}>
                    {
                        route.children.map(sub => {
                            return createRoutes(sub);
                        })
                    }
                </Route>
            )
        }else{
            return <Route key={route.meta.key} path={route.path} exact element={<RequireAuth><route.component /></RequireAuth>} />
        }
    }else{
        if(route.children) {
            return (
                <Route key={route.meta.key} path={route.path} exact element={<route.component />}>
                    {
                        route.children.map(sub => 
                            createRoutes(sub)
                        )
                    }
                </Route>
            )
        }else{
            return <Route key={route.meta.key} path={route.path} exact element={<route.component />}></Route>
        }
    }
}

function RequireAuth(props) {
    let token = window.localStorage.getItem('token');

    if (!token || token.length===0) {
      return <Navigate to="/login"/>;
    }
  
    return props.children;
}

const GRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((item) => 
                        createRoutes(item)
                    )
                    
                }
                <Route key='page404' path='/*' exact element={<Page404 />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default GRouter;
