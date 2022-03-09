import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Managers from './pages/Managers';
import Cashupgrades from './pages/Cashupgrades';
import Angelupgrades from './pages/Angelupgrades';
import Unlocks from './pages/Unlocks';
import React, {useEffect, useState} from "react";
import { Services } from './Services';
import { World } from './world';


function App(): JSX.Element {
  
    const [services, setServices] = useState(new Services(""))
    const [world, setWorld] = useState(new World())  
  
    useEffect(() => {
        
      let services = new Services("")
      setServices(services)
      services.getWorld().then(response => {
      setWorld(response.data)
      }
      )
  }, [])

  
  

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Blank />} />
                    <Route path='/unlocks' element={<Unlocks />} />
                    <Route path='/cashupgrades' element={<Cashupgrades />} />
                    <Route path='/angelupgrades' element={<Angelupgrades />} />
                    <Route path='/managers' element={<Managers />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;