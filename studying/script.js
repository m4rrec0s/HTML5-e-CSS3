let timer;
let totalHours = {
    portugues: 0,
    matematica: 0,
    'conhecimentos-bancarios': 0
};
let initialSeconds; 

function confirmDisciplina() {
    const selectedDisciplina = document.getElementById('disciplina').value;
    const minutosDesejados = parseInt(document.getElementById('minutos').value, 10);

    const confirmButton = document.getElementById('confirm');
    const pauseButton = document.getElementById('pauseButton');

    if (confirmButton.textContent === 'Confirmar') {
        if (confirm(`Quer começar a estudar ${selectedDisciplina.charAt(0).toUpperCase() + selectedDisciplina.slice(1)}?`)) {
            startTimer(selectedDisciplina, minutosDesejados * 60);
            confirmButton.innerHTML = 'Encerrar';
            pauseButton.style.display = 'inline-block';
            document.getElementById('botoes').style.display = 'flex';
        }
    } else {
        stopTimer();
        confirmButton.textContent = 'Confirmar';
        pauseButton.style.display = 'none';
        document.getElementById('botoes').style.display = 'none';
    }
}


function startTimer(selectedDisciplina, segundosDesejados) {
    if (timer) {
        clearInterval(timer);
    }

    const cronometroElement = document.getElementById('cronometro');
    const pauseButton = document.getElementById('pauseButton');

    let seconds = segundosDesejados;

    initialSeconds = segundosDesejados;
    timer = setInterval(function () {
        seconds--;

        if (seconds < 0) {
            clearInterval(timer);
            stopTimer();
        } else {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const remainingSeconds = seconds % 60;

            
            cronometroElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`.substring(0, 8);
        }
    }, 1000);

    function pad(number) {
        return number < 10 ? '0' + number : number;
    }

    document.getElementById('disciplina').disabled = true;
    document.getElementById('minutos').disabled = true;
    document.getElementById('resumo').style.display = 'none';

    pauseButton.style.display = 'inline-block';
    document.getElementById('botoes').style.display = 'flex';

    const pauseButtonIcon = document.createElement('i');
    pauseButtonIcon.className = 'fas fa-pause';
    pauseButton.innerHTML = '';
    pauseButton.appendChild(pauseButtonIcon);

    pauseButton.onclick = function () {
        clearInterval(timer);
        const continueButtonIcon = document.createElement('i');
        continueButtonIcon.className = 'fas fa-play';
        pauseButton.innerHTML = '';
        pauseButton.appendChild(continueButtonIcon);

        pauseButton.onclick = function () {
            startTimer(selectedDisciplina, seconds); 
        };
    };

    document.getElementById('disciplina').addEventListener('change', stopTimer);
    document.getElementById('encerrarButton').addEventListener('click', function () {
        stopTimer();
        document.getElementById('confirm').textContent = 'Confirmar';
    });
}

document.getElementById('simulado').addEventListener('click', function() {
    startTimer('simulado', 4 * 60 * 60); 
});

function stopTimer() {
    clearInterval(timer);
    document.getElementById('disciplina').disabled = false;
    document.getElementById('minutos').disabled = false;
    document.getElementById('resumo').style.display = 'block';

    const pauseButton = document.getElementById('pauseButton');
    pauseButton.style.display = 'none';
    document.getElementById('botoes').style.display = 'none';

    const selectedDisciplina = document.getElementById('disciplina').value;
    const minutosDesejados = parseInt(document.getElementById('minutos').value, 10);

    const tempoTotal = initialSeconds / 60 - timer / 60;  
    totalHours[selectedDisciplina] += tempoTotal / 60;
    document.getElementById(`${selectedDisciplina}-hours`).textContent = `${selectedDisciplina.charAt(0).toUpperCase() + selectedDisciplina.slice(1)}: ${totalHours[selectedDisciplina].toFixed(2)} horas`;

    document.getElementById('cronometro').textContent = '00:00:00';
}

function updateTimer() {
    if (timer) {
        clearInterval(timer);
        document.getElementById('cronometro').textContent = '00:00:00';
    }
}
