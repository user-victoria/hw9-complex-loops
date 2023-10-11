// Написати цикли, які роблять наступне:

// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
for (let i = 20; i <= 30; i += 0.5) {
    if (i !== 30) {
        document.write(i + '<b>, </b>');
    }
    else {
        document.write(i);
    }
}
document.write('<br>');
document.write('<br>');

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let uah = 27;
for (let dollar = 10; dollar <= 100; dollar += 10) {
    let result = uah * dollar;
    if (result !== 2700) {
        document.write(result + ', ');
    }
    else {
        document.write(result);
    }
}
document.write('<br>');
document.write('<br>');

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
document.write('<button class="btn1">Click to enter the number</button>');
document.write('<br> Відповідь знаходиться в консолі <br>');
document.write('<br>');

document.querySelector(".btn1").addEventListener('click', function () {
    let givenNumber = +prompt('Введіть ціле число');
    console.log('Дане ціле число =', givenNumber);

    let numbers = 0;
    console.log('Числа які не перевищують квадрат:');
    for (let i = 1; i <= 100; i++) {
        if (i ** 2 <= givenNumber) {
            numbers += i;
            console.log(i);
        }
    }
});

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
document.write('<button class="btn2">Click to enter the number</button>');
document.write('<br> Відповідь знаходиться в консолі <br>');
document.write('<br>');

document.querySelector(".btn2").addEventListener('click', function () {
    let givenNumber = +prompt('Введіть ціле число');

    let isPrime = true;

    if (givenNumber === 1) {
        console.log('Ви ввели число 1');
    }
    else if (givenNumber > 1) {
        for (let i = 2; i < givenNumber; i++) {
            if (givenNumber % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${givenNumber} просте число`);
        }
        else {
            console.log(`${givenNumber} не просте число`);
        }
    }
    else {
        console.log('Ви ввели число менше 1');
    }
});

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
document.write('<button class="btn3">Click to enter the number</button>');
document.write('<br> Відповідь знаходиться в консолі <br>');
document.write('<br>');

document.querySelector(".btn3").addEventListener('click', function () {
    let givenNumber = +prompt('Введіть число');

    let result = 1;
    let i = 0;
    for (; result < givenNumber; i++) {
        result *= 3;
    }
    if (result === givenNumber) {
        console.log('Число 3 у ступені ' + i);
    }
    else {
        console.log(`Число ${givenNumber} не є ступенем числа 3`);
    }
});