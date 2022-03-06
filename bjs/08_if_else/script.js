
let initialInput = 1

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
    
document.getElementById('btnGame').addEventListener('click', function () {

    if (initialInput === 1) {
        minValue = parseInt(inputWindow.value);
        if (isNaN(minValue) || minValue < - 999) {minValue = -999};
        console.log('min:', minValue);
        document.querySelector('input').value = '';
        document.querySelector('input').placeholder = 'Введите максимальное значение';
        initialInput = 2;
        return;
    }

    if (initialInput === 2) {
        maxValue = parseInt(inputWindow.value);
        if (isNaN(maxValue) || maxValue > 999) {maxValue = 999};
        console.log('max:', maxValue);
        document.getElementById('inputWindow').hidden = true;
        document.getElementById('secondWindow').hidden = false;
        //document.getElementById("#btngame").innerHTML = 'Старт игры';
        initialInput = 3;
        document.getElementById('secondWindow').innerHTML = `Ну посмотрим`;
        document.getElementById('mainWindow').innerHTML = `Диапазон число от ${minValue} до ${maxValue}`;
        return;
    }

    if (initialInput === 3) {
        answerNumber = Math.floor((minValue + maxValue) / 2);
        orderNumber = 1;
        gameRun = true;
        $('#collapseStartGame').collapse('show');
        $("#collapseStart").collapse('hide');
        orderNumberField.innerHTML = orderNumber;
        answerField.innerHTML = `Вы загадали число ${answerNumber}?`;
    } 
})



document.getElementById('btnRetry').addEventListener('click', function () {
    $('#collapseStartGame').collapse('hide');
    $('#collapseStart').collapse('show');
    document.getElementById("inputWindow").hidden = false;
    document.getElementById("secondWindow").hidden = true;
    initialInput = 1;
    document.querySelector('input').placeholder = 'Введите минимальное значение';
    document.querySelector('btnGame').placeholder = 'Дальше';
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue === answerNumber) {
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerHTML = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerHTML = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 0) ? `Вы загадали число ${answerNumber}?` :
				(phraseRandom === 1) ? `Да это легко! Ты загадал ${answerNumber}!` :
					`Наверное, это число ${answerNumber}.`;
			answerField.innerHTML = answerPhrase;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerHTML = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerHTML = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 0) ? `Вы загадали число ${answerNumber}?` :
				(phraseRandom === 1) ? `Да это легко! Ты загадал ${answerNumber}!` :
					`Наверное, это число ${answerNumber}.`;
			answerField.innerHTML = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerHTML = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})
