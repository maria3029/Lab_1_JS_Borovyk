// Завдання 1: Записати трицифрове натуральне число в зворотньому порядку
// Функція для обертання трицифрового числа
function reverseNumber() {
    let number = document.getElementById("numberInput").value;

    // Перевірка, чи введене значення є трицифровим числом
    if (number < 100 || number > 999 || isNaN(number)) {
        console.log("Будь ласка, введіть коректне трицифрове число.");
        return;
    }

    let numString = number.toString();
    let reversedString = numString.split('').reverse().join('');
    let reversedNumber = parseInt(reversedString);
    console.log("Зворотнє число: " + reversedNumber);
}



// Завдання 2: Перевірити компланарність векторів
function checkCoplanarity() {
    // Отримуємо координати векторів, введені користувачем
    let vectorA = document.getElementById("vectorA").value.split(',').map(Number);
    let vectorB = document.getElementById("vectorB").value.split(',').map(Number);
    let vectorC = document.getElementById("vectorC").value.split(',').map(Number);

    // Перевірка правильності введених даних
    if (vectorA.length !== 3 || vectorB.length !== 3 || vectorC.length !== 3) {
        console.log("Будь ласка, введіть три координати для кожного вектора.");
        return;
    }

    // Обчислюємо визначник матриці з координатами векторів
    let determinant = vectorA[0] * (vectorB[1] * vectorC[2] - vectorB[2] * vectorC[1]) -
        vectorA[1] * (vectorB[0] * vectorC[2] - vectorB[2] * vectorC[0]) +
        vectorA[2] * (vectorB[0] * vectorC[1] - vectorB[1] * vectorC[0]);

    // Перевіряємо, чи визначник дорівнює нулю для визначення компланарності
    if (determinant === 0) {
        console.log("Вектори компланарні");
    } else {
        console.log("Вектори не компланарні");
    }
}

// Завдання 3: Знайти кількість чотиризначних чисел
function countFourDigitNumbers() {
    // отримує значення суми і переводить його у числове значення
    let sum = parseInt(document.getElementById("sumInput").value);
    if (isNaN(sum) || !Number.isInteger(sum) || sum < 0) {
        console.log("Будь ласка, введіть додатнє ціле число.");
        return;
    }

    let count = 0;
    for (let i = 1000; i <= 9999; i++) {
        let digitsSum = i.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
        if (digitsSum === sum) {
            count++;
        }
    }
    console.log("Кількість чотиризначних чисел з сумою цифр " + sum + ": " + count);
}

// Завдання 4: Розкласти на прості множники
function factorize() {
    let number = parseInt(document.getElementById("factorizeInput").value);
    if (isNaN(number) || !Number.isInteger(number) || number <= 1) {
        console.log("Будь ласка, введіть додатнє ціле число більше за 1.");
        return;
    }

    let factors = [];
    for (let i = 2; i <= number; i++) {
        while (number % i === 0) {
            factors.push(i);
            number /= i;
        }
    }
    console.log("Прості множники: " + factors.join(' '));
}


