//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");

    function getInitialArray() {
        return new Promise((resolve) => {
            setTimeout(() => resolve([1, 2, 3, 4]), 3000);
        });
    }

    function filterEvenNumbers(array) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = array.filter(num => num % 2 === 0);
                outputDiv.textContent = evenNumbers.join(", ");
                resolve(evenNumbers);
            }, 1000);
        });
    }

    function multiplyByTwo(array) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = array.map(num => num * 2);
                outputDiv.textContent = multipliedNumbers.join(", ");
                resolve(multipliedNumbers);
            }, 2000);
        });
    }

    getInitialArray()
        .then(filterEvenNumbers)
        .then(multiplyByTwo)
        .catch(error => console.error("Error:", error));
});
