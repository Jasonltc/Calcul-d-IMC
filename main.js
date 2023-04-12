const BMIData = [
    {name: 'Maigreur', color: 'midnightblue',range: [0, 18.5]},
    {name: 'Bonne sante', color: 'green',range: [19.5, 25]},
    {name: 'Surpoids', color: 'lightcoral',range: [25, 30]},
    {name: 'Obesite moderee', color: 'orange',range: [30, 35]},
    {name: 'Obesite severe', color: 'crimson',range: [35, 40]},
    {name: 'Obesite morbide', color: 'purple',range: [40]},
]

const form = document.querySelector('form');

form.addEventListener('submit', handleForm);

function handleForm(e) {
    e.preventDefault();
    calculateBMI();
}

const inputs = document.querySelectorAll('input')
// console.log(inputs)

function calculateBMI(){
  const height = inputs[0].value;
  const weight = inputs[1].value;
  // console.log(height, weight);

  if(!height || !weight || height <= 0 || weight <= 0) {
    handleError()
    return;
  }

  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  console.log(BMI)
  showResult(BMI);
}

const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

function handleError() {
  displayBMI.textContent = 'Wops'
  displayBMI.style.color = 'inherit'
  result.textContent = "Remplissez correctement les inputs. "
}

/*
The find() method returns the value of the first element that passes a test.
The find() method executes a function for each array element.
The find() method returns undefined if no elements are found.
The find() method does not execute the function for empty elements.
The find() method does not change the original array.
*/

function showResult(BMI){
  const rank = BMIData.find(data => {
    if(BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  });

  displayBMI.textContent = BMI;
  displayBMI.style.color = `${rank.color}`
  result.textContent = `Resultant : ${rank.name}`;
}

