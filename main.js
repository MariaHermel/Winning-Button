
function showMessage(text) {
    const box = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    messageText.textContent = text;
    box.classList.remove('hidden');
}
function closeMessage() {
    document.getElementById('messageBox').classList.add('hidden');
}

function createButtons () {
    const numberOfButtons = document.getElementById('numberOfButtons').value;
    const container = document.getElementById('buttonContainer');   
    container.innerHTML = '';
    const minim = 2;
    const maxim = 20
    if(numberOfButtons < minim || numberOfButtons > maxim){
        alert(`Please enter a number between ${minim} and ${maxim}.`);
        return;
    }       

    winnerIndex = Math.floor(Math.random() * numberOfButtons);

    for (let i = 0; i < numberOfButtons; i++) { 
        let button = document.createElement('button');
        button.textContent = `Button ${i + 1}`;
        button.className = 'btn btn-primary';
        button.onclick = function() {
            if (i === winnerIndex) {
                showMessage("Congratulations! You found the winner!");
                button.classList.replace('btn-primary', 'btn-success');
            } else {
                showMessage("Try again!");
                button.classList.replace('btn-primary', 'btn-looser');
            }
        };
        container.appendChild(button);
    }
}