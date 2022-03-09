
import 'App.tsx';
import React, {ChangeEvent, useEffect, useState} from 'react';
import 'pages/style/Blank.scss'
import ProgressBar from './ProgressBar';
import {Box} from '@mui/system';
import { Services } from './Services';
import { Product } from './world';

type ProductProps = {
prod: Product
services: Services
}
    export default function ProductComponent({ prod, services } : ProductProps) 
    {  const [progress, setProgress] = useState(0)


        
            


        

        
   return (
    
    <div> 
        <div className="product2">
    <div> <span className="nameprod">Product.name</span></div>
    <div className="prix"><button><h1>Product.cout</h1></button></div>
    <div className='progressbar'> 
        <Box sx={{width: '100%'}}>
        <ProgressBar transitionDuration={"0.1s"} customLabel={" "}
        completed={progress}/>
        </Box>
</div>

    </div>
    </div>
   );
};