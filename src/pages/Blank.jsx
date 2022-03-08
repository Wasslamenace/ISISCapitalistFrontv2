import "./style/blank.scss"

const Blank = () => {
    return <div><div class="header">
    <div class="argent"> argent </div>
    <div><button class="button"><span>x 1</span></button></div>
    <div class="username"> ID du joueur </div>
    </div>

    <div class="titre"><h1>Home</h1></div>
        <div class="desc"> Recrute tes joueurs afin de monter ton club !</div>

    <div class="main">
    
    <div class="product2">
    <div> <span class="nameprod">JOUEUR AMATEUR</span></div>
    <div><button class="prix"><h1>3$</h1></button></div>
    <div class="description"> Boulanger et footballer à ses heures perdues, joueur du dimanche</div>
    </div>
    
    <div class="product2">
    <div> <span class="nameprod">JOUEUR PROFESSIONNEL</span></div>
    <div><button class="prix"><h1>6$</h1></button></div>
    <div class="description"> Joueur pro, joue dans un bon club de niveau national</div>
    </div>
    
    <div class="product">
    <div> <span class="nameprod">JOUEUR D'UEFA EL</span></div>
    <div><button class="prix2"><h1>3500$</h1></button></div>
    <div class="description"> Joueur d'Europa League, joue à un bon niveau Européen</div>
    </div>

    <div class="product">
    <div> <span class="nameprod">JOUEUR D'UEFA CL </span></div>
    <div><button class="prix2"><h1>10000$</h1></button></div>
    <div class="description"> Joueur de Champions League,fait partie de l'élite européenne</div>
    </div>

    <div class="product3">
    <div> <span class="nameprod2">JOUEUR STAR</span></div>
    <div><button class="prix2"><h1>200000$</h1></button></div>
    <div class="description2"> Joueur d'une classe et d'une renommée rarement atteinte, une légende à en devenir</div>
    </div>

    <div class="product3">
    <div> <span class="nameprod2">JOUEUR DE LEGENDE </span></div>
    <div><button class="prix2"><h1>500000$</h1></button></div>
    <div class="description2"> Légende du football, joueur ayant marqué l'histoire du sport</div>
    </div>


    </div>
   </div>;
};

export default Blank;
