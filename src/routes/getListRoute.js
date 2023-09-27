import React from "react";
import {Route} from "react-router-dom";
import WrapperComponent from "../components/Wrappers/WrapperComponent/WrapperComponent";



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
    return routes.map(({path='',component,privateUrl,exact,routes,headerType,footerType},key)=>{
        return  <Route
                path={path}
                exact={exact}
                element={(<WrapperComponent headerType={headerType} footerType={footerType} >{component}</WrapperComponent>)}
                key={key}
            />
    })
}