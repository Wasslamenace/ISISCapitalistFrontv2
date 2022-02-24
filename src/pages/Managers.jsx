import "./style/managers.scss"

const Managers = () => {
    return <div> 
        <div class="titre"><h1>Managers</h1></div>
        <div class="desc"> Recrute des managers afin d'automatiser tes achats !</div>

    <div class="manager">
    <div> <span class="namemanager"> Lucas Abitbol </span></div>
    <div><button class="prix3"><h1>50000$</h1></button></div>
    <div class="description">Mr Abibtol est un spécialiste et un amoureux du football amateur, il recrutera automatiquement vos joueurs amateurs</div>
    </div> 

    <div class="manager">
    <div> <span class="namemanager"> Wassim Ait Youcef </span></div>
    <div><button class="prix3"><h1>120000$</h1></button></div>
    <div class="description">Mr Ait Youcef est un tacticien qui sait trouver les pépites nationales, il recrutera automatiquement vos joueurs professionels</div>
    </div> 

    <div class="manager">
    <div> <span class="namemanager"> José Mourinho </span></div>
    <div><button class="prix3"><h1>340000$</h1></button></div>
    <div class="description">Mr Mourinho est un grand entraîneur à fort caractère de classe européenne, il recrutera automatiquement vos joueurs d'Europa League</div>
    </div> 
    
    
    </div>;
    
};

export default Managers;
