function getElement(elementId) {
    let element = document.getElementById(elementId);
    return element;
}

function fillData() {

    getElement("firstName").innerText = "Иннокентий";
    getElement("lastName").innerText = "Малинников";
    getElement("age").innerText = "13";
}