import "./style/blank.scss"

const Blank = () => {
    return <div><div class="header">
    <div class="argent"> argent </div>
    <div><button class="button"><span>x 1</span></button></div>
    <div class="username"> ID du joueur </div>
    </div>
    <div class="main">
    
    <div class="product">
    <div> <span class="nameprod">JOUEUR DE LIGUE 1</span></div>
    <div><button class="prix"><h1>3$</h1></button></div>
    <div class="description"> Joueur de base du championnat de Ligue 1</div>
    </div>
    
    <div class="product">
    <div> <span class="nameprod">JOUEUR DE LIGA</span></div>
    <div><button class="prix"><h1>6$</h1></button></div>
    <div class="description"> Joueur de base du championnat de Liga</div>
    </div>
    
    <div class="product">
    <div> <span class="nameprod">JOUEUR D'EUROPA LEAGUE</span></div>
    <div><button class="prix2"><h1>3500$</h1></button></div>
    <div class="description"> Joueur d'un club de haut niveau Européen</div>
    </div>

    <div class="product">
    <div> <span class="nameprod">JOUEUR DE CHAMPIONS LEAGUE </span></div>
    <div><button class="prix2"><h1>10000$</h1></button></div>
    <div class="description"> Joueur d'un club de l'élite européenne</div>
    </div>

    </div>
   </div>;
};

export default Blank;
