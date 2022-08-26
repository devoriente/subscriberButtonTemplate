//Je sélectionne et je stocke
//icone contient le premier élément <i> trouvé dans le code
const icone = document.querySelector('i');
console.log(icone);
//btnButton contient le premier élément avec la classe btn
const btnButton = document.querySelector('.btn');
console.log(btnButton);
//je soumets l'icône à une action au clic
icone.addEventListener('click', function(){
    console.log('icône cliquée !');
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
});
//je soumets l'icône à une action au clic
btnButton.addEventListener('click', function(){
    console.log('bouton cliqué !');
    //A chaque clic, on alterne le style
    btnButton.classList.toggle('abonne');
    //On vérifie le texte du bouton
    if(btnButton.innerText === "Abonné"){
        //Action à réaliser si condition est vrai
        btnButton.innerText = "Abonnez-vous";
    }else{
        console.log('else');
        //Action à réaliser si condition est fausse
    btnButton.innerText = "Abonné";
    };
});
