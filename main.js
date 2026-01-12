const minimum = 2;
const maximum = 20

function showMessage(text) {
    const box = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    messageText.textContent = text;
    box.classList.remove('hidden');
}
function closeMessage() {
    document.getElementById('messageBox').classList.add('hidden');
}

function isWinner(i, button, winnerIndex) {
    if (i === winnerIndex) {
        showMessage("Congratulations! You found the winner!");
        button.classList.replace('btn-primary', 'btn-success');
    } else {
        showMessage("Try again!");
        button.classList.replace('btn-primary', 'btn-looser');
    }
}

function createButtons () {  
    const numberOfButtons = document.getElementById('numberOfButtons').value;
    const container = document.getElementById('buttonContainer'); 
    container.innerHTML = '';   
    
    winnerIndex = Math.floor(Math.random() * numberOfButtons);
    
    if(numberOfButtons < minimum || numberOfButtons > maximum){
        showMessage(`Please enter a number between ${minim} and ${maxim}.`);
        return;
    }     
    for (let i = 0; i < numberOfButtons; ++i) { 
        let button = document.createElement('button');
        button.textContent = `Button ${i + 1}`;
        button.className = 'btn btn-primary';
        button.onclick = () => isWinner(i, button, winnerIndex);
        container.appendChild(button);
    }
}
