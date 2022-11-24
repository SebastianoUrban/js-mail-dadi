
//DICE
const buttonLaunch = document.getElementById('launch');
const responseDice = document.getElementById('response-dice');

buttonLaunch.addEventListener('click', function(){
    let output = '';
    const userDice = Math.floor((Math.random() * 6) + 1);
    const pcDice = Math.floor((Math.random() * 6) + 1);
    console.log('user: ' + userDice + '\npc: ' + pcDice);

    if(userDice === pcDice){
        output = 'Pareggio!!';
    } else if (userDice > pcDice){
        output = "Vince l'Utente";
    } else {
        output = 'Vince il Pc';
    }

    responseDice.innerHTML = ('User: ' + userDice + '\   -   Pc: ' + pcDice + '     =>   ' + output);

});


//EMAIL
const defaultEmail = ['gino@gmail.com', 'pippo@gmail.com', 'pluto@gmail.com'];
const inputEmail = document.getElementById('user-email');
const buttonEmail = document.getElementById('search-email');
const responseEmail = document.getElementById('response-email');

buttonEmail.addEventListener('click', function(){
    let output = '';
    let find = false;
    for(let i = 0; i < defaultEmail.length; i++){

        if(inputEmail.value == defaultEmail[i]){
            find = true;
        }
    }

    if (find){
        output = 'Email trovata!'
    } else {
        output = 'Email non trovata!';
    }

    responseEmail.innerHTML = output;
});