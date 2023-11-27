import React from "react"
import {Route, Routes } from "react-router-dom";

function News ({routes}){

    const templateRoutes = routes.map((elem,id)=>{
        return(
            <Route
                key={id}
                path={elem.path}
                element={elem.component}
            />
        )
    })

    return (
        <div>
            <Routes>
                {templateRoutes}
            </Routes>
        </div>
    )
}


export default News