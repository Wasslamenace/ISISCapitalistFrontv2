import "./style/blank.scss";
import {transform} from "../utils";
import {World,Product} from "../world";
import {services} from "../Services";


const Blank = () => {
    return <div><div class="header">
    <div class="argent"><span dangerouslySetInnerHTML={{__html: transform(World.money)}}></span></div>

    <div><button class="button"><span>x 1</span></button></div>
    <div class="username"> <img src={services.server + World.logo}/> <span>{World.name}</span> </div>
    </div>

    <div class="titre"><h1>Home</h1></div>
        <div class="desc"> Recrute tes joueurs afin de monter ton club !</div>

    <div class="main">
    
    <Product prod={ World.products.product[1] } services={ services }/>
    <Product prod={ World.products.product[2] } services={ services }/>
    <Product prod={ World.products.product[3] } services={ services }/>
    <Product prod={ World.products.product[4] } services={ services }/>
    <Product prod={ World.products.product[5] } services={ services }/>
    <Product prod={ World.products.product[6] } services={ services }/>

    </div>
   </div>;
};

export default Blank;
