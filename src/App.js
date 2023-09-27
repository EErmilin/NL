import React, {useEffect} from 'react'
import { Routes, useLocation, useSearchParams } from "react-router-dom"
import { routes } from "./routes/routes";
import { getListRoute } from "./routes/getListRoute";
import { useDispatch } from 'react-redux';
import { getChannel } from './store/actions/routerActions';

function App() {
  
    const url = useLocation()
    const dispatcher= useDispatch()

    useEffect(() => {
            document.body.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
    }, [url.pathname])

    useEffect(()=>{
dispatcher(getChannel())
    }, [])

    
    const listRoutes = getListRoute(routes)

    return (
        <div className="App">
            <Routes>
                {listRoutes}
            </Routes>
        </div>
    );
}

export default App;
