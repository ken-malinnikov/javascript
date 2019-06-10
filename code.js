function getElement(elementId) {
    let element = document.getElementById(elementId);
    return element;
}

function fillData() {

    getElement("firstName").innerText = "Иннокентий";
    getElement("lastName").innerText = "Малинников";
    getElement("age").innerText = "13";
}

function askData() {

    let firstName = prompt("Как вас зовут?");
    let lastName = prompt("Какая у вас фамилия?");
    let age = prompt("Сколько вам лет?");

    if (age === null) {

        alert("Вы не ввели возраст.");
        return
    }

    let result = "несовершеннолетний";

    if (age >= 16) {
        result = "совершеннолетний";
    }

    let message = firstName + " " + lastName + " (" + age + "): " + result;
    alert(message);
}

function sumOfNumbers(from, to) {

    var result = 0;

    for (var i = from; i <= to; i++) {
        result += i;
    }

    getElement("result1").innerText = result;

}

function filterArray(array, from, to) {

    var result = "";

    for (var i = 0; i < array.length; i++) {

        var nextNumber = array[i];

        if (nextNumber > from && nextNumber < to) {
           result = result + nextNumber + ",";
        }
    }

    getElement("result2").innerText = result;
}

function searchNumber(array, numberToSearch) {

    var result = "Нет";

    for (var i = 0; i < array.length; i++) {

        var nextNumber = array[i];

        if (nextNumber === numberToSearch) {

            result = "Есть!";
            break;
        }
    }

    getElement("result3").innerText = result;
}