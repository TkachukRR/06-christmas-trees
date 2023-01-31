
 // возвращает число и слово
 const declOfNum = (n, titles) => {
     return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
         0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
 }


const timer = () => {
    const timer = document.createElement('div');
    const timerText = document.createElement('p');
    const timerCount = document.createElement('span');

    timer.classList.add('timer');
    timerText.classList.add('timer__text');
    timerCount.classList.add('timer__count');


    timerText.textContent = 'До кінця розпродажу лишилось: ';


    timerText.append(timerCount);
    timer.append(timerText);
    document.body.prepend(timer);

    const startTimer = () => {
        const deadLine = new Date(2024, 0, 1, 0, 0, 0)
        const now = new Date();
        const timeRemaning = (deadLine - now) / 1000;
        const seconds = Math.floor(timeRemaning % 60);
        const minutes = Math.floor(timeRemaning / 60 % 60);
        const hours = Math.floor(timeRemaning / 60 / 60 % 24);
        const days = Math.floor(timeRemaning / 60 / 60 / 24);
        
        const s = declOfNum(seconds,['секунда', 'секунди', 'секунд'])
        const m = declOfNum(minutes,['хвилина', 'хвилини', 'хвилин'])
        const h = declOfNum(hours,['година', 'години', 'годин'])
        const d = declOfNum(days,['день', 'дні', 'днів'])

        timerCount.textContent = `${d} ${h} ${m} ${s}`;

        if (timeRemaning > 0) {
            setTimeout(startTimer, 1000);
        } else {
            timer.remove();
        }
        
    }



//     const arr = ['рік', 'роки', 'років']

// { // 1 пример склонение слова
// 	const onlyWord = document.querySelectorAll('.only_word');

// 	// возвращает только слово
// 	const declOfNum = (n, titles) => {
// 		return titles[n % 10 === 1 && n % 100 !== 11 ?
// 			0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
// 	}

// 	onlyWord[0].textContent = declOfNum(1, arr);
// 	onlyWord[1].textContent = declOfNum(33, arr);
// 	onlyWord[2].textContent = declOfNum(49, arr);
// }

// { // 2 пример склонение слова + число
// 	const numAndWord = document.querySelectorAll('.num_and_word');

// 	// возвращает число и слово
// 	const declOfNum = (n, titles) => {
// 		return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
// 			0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
// 	}

// 	numAndWord[0].textContent = declOfNum(49, arr);
// 	numAndWord[1].textContent = declOfNum(53, arr);
// 	numAndWord[2].textContent = declOfNum(71, arr);
// }

// { // 3 пример возвращает число и слово в родительном падеже если передать true
// 	const numAndWordFrom = document.querySelectorAll('.num_and_word-from');
	
// 	const declOfNum = (n, titles, from) => {
// 		return n + ' ' + titles[from ? n % 10 === 1 && n % 100 !== 11 ? 1 : 2 : n % 10 === 1 && n % 100 !== 11 ?
// 			0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
// 	}

// 	numAndWordFrom[0].textContent = 'От ' + declOfNum(49, arr, true);
// 	numAndWordFrom[1].textContent = 'От ' + declOfNum(53, arr, true);
// 	numAndWordFrom[2].textContent = 'От ' + declOfNum(71, arr, true);
// }


    startTimer();
}


timer();
