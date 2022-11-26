// Initialisation du jeu
init();

// dEclaration
var scores, ROUNDScore, Joueuractif, Joueraujeu;

// selection du boutton Nouveau jeu 
document.querySelector('.btn-new-game').addEventListener('click', init);
function init() {
    scores = [0, 0];
    Joueuractif = 0;
    ROUNDScore = 0;
    Joueraujeu = true;
    
    document.querySelector('.dE').style.display = 'none';
    document.getElementById('GLOBAL-0').textContent = '0';
    document.getElementById('GLOBAL-1').textContent = '0';
    document.getElementById('ROUND-0').textContent = '0';
    document.getElementById('ROUND-1').textContent = '0';
    document.getElementById('nom-0').textContent = 'Joueur 1';
    document.getElementById('nom-1').textContent = 'Joueur 2';
    document.querySelector('.joueur-0-panneau').classList.remove('Gagnant');
    document.querySelector('.joueur-1-panneau').classList.remove('Gagnant');
    document.querySelector('.joueur-0-panneau').classList.remove('active');
    document.querySelector('.joueur-1-panneau').classList.remove('active');
    document.querySelector('.joueur-0-panneau').classList.add('active');
}

// selection du boutton Lancer Dé
document.querySelector('.btn-lancer-dE').addEventListener('click', function() {
    if(Joueraujeu) {
        // 1. Random number
        var dE = Math.floor(Math.random() * 6) + 1;

        //2. affichage du résultat
        var dEDOM = document.querySelector('.dE');
        dEDOM.style.display = 'block';
        dEDOM.src = '../images/dE-' + dE + '.png';

        //3. Si diférent de 1, son score ROUND est perdu et c’est la fin de son tour.
        if (dE !== 1) {
            //Add score
            ROUNDScore += dE;
            document.querySelector('#ROUND-' + Joueuractif).textContent = ROUNDScore;
        } else {
            //Joueur suivant
            Joueursuivant();
        }
    }    
});

// selection du boutton hold
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (Joueraujeu) {
        // Addition du compteur dans score Global
        scores[Joueuractif] += ROUNDScore;

        // Ajouter le nbre dans le Global
        document.querySelector('#GLOBAL-' + Joueuractif).textContent = scores[Joueuractif];

        // Condition du gagnant s'il atteint le nmbre 100
        if (scores[Joueuractif] >= 100) {
            document.querySelector('#nom-' + Joueuractif).textContent = 'Gagnant(e)!';
            document.querySelector('.dE').style.display = 'none';
            document.getElementById('ROUND-0').textContent = '0';
            document.getElementById('ROUND-1').textContent = '0';
            document.querySelector('.joueur-' + Joueuractif + '-panneau').classList.add('Gagnant');
            document.querySelector('.joueur-' + Joueuractif + '-panneau').classList.remove('active');
            Joueraujeu = false;
        } else {
            //Joueur suivant
            Joueursuivant();
        }
    }
});

function Joueursuivant() {
    //tour de l’autre joueur.
    Joueuractif === 0 ? Joueuractif = 1 : Joueuractif = 0;
    ROUNDScore = 0;

    document.getElementById('ROUND-0').textContent = '0';
    document.getElementById('ROUND-1').textContent = '0';
    document.querySelector('.joueur-0-panneau').classList.toggle('active');
    document.querySelector('.joueur-1-panneau').classList.toggle('active');
    document.querySelector('.dE').style.display = 'none';
}









