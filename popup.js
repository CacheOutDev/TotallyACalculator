// Flush any message on reload
clearMessage();

function raceGame() {
    window.open(www.google.com, '_blank').focus();
}

function spaceBattleGame() {
    window.open(www.google.com, '_blank').focus();
}

function jumpGame() {
    window.open(www.google.com, '_blank').focus();
}

// Function to Show Message
function showMessage(message){
    if(message){
        document.getElementById('message').innerHTML = message;
    }
    else{
        clearMessage();
    }
}

// Function to Clear Message
function clearMessage() {
    document.getElementById('message').innerHTML = " ";
}

// Event Listeners
document.getElementById('raceBtn').addEventListener('click', raceGame);
document.getElementById('spaceBattleBtn').addEventListener('click', spaceBattleGame);
document.getElementById('jumpBtn').addEventListener('click', jumpGame);