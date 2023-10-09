import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setIsAuth } from "../../store/actions/routerActions";

/**
 * Промежуточный компонент отслеживания приватных маршрутов
 * @param path
 * @param exact
 * @param element
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */

function PrivateRoute ({
    path,
    exact,
    element,
    children,
    userRoles,
    ...rest
}){
    const navigate  = useNavigate()
    const dispatcher = useDispatch()
    const url = useLocation()
    

    useEffect(()=>{
        if (!localStorage.getItem('token') || localStorage.getItem('token')==='undefined') {
            dispatcher(setIsAuth())
            return navigate('/')
        }
    },[localStorage.getItem('token'), url])



    return children

}

export default PrivateRoute