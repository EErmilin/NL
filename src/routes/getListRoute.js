import React from "react";
import {Route} from "react-router-dom";
import WrapperComponent from "../components/Wrappers/WrapperComponent/WrapperComponent";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



/**
 * На входе массив с инфой о роутах и список ролей юзера
 * на выходе список роутов
 * @param routes
 * @param userRoles
 * @param url
 * @param rest
 * @returns {*}
 */


export function getListRoute (routes, userRoles, url = '', ...rest){
    return routes.map(({path='',component,privateUrl,exact,routes,bodyType,footerType},key)=>{
           return privateUrl
        ?
        (
            <Route
                path={path}
                exact={exact}
                element={
                    <PrivateRoute
                        exact={exact}
                        path={path}
                        key={key}
                    ><WrapperComponent bodyType={bodyType}>{component}</WrapperComponent></PrivateRoute>
                }
                key={key}
            />
        )
        :
        <Route
        
            path={path}
            exact={exact}
            element={(<WrapperComponent bodyType={bodyType}>{component}</WrapperComponent>)}
            key={key}
        />
    })
}