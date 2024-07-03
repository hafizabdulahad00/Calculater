import inquirer from 'inquirer';
let result = await inquirer.prompt([
  { 
    message:"Enter Your First Number!",
   type:"number", 
   name:"FirstNumber"
  },
  { message:"Enter Your Second Number!",
   type:"number", 
   name:"SecondNumber",  
  },
  { message:"Select Your Operation!",
    type:"list",
    name:"Operation",   
    choices:["Addition","Substraction","Multliplication","Division"], 
  }
  ]);
  
  

if(result.Operation==="Addition"){
  console.log(result.FirstNumber + result.SecondNumber)
}
else if(result.Operation==="Substraction"){
  console.log(result.FirstNumber - result.SecondNumber)
}
else if(result.Operation==="Multliplication"){
  console.log(result.FirstNumber * result.SecondNumber)
}
else if(result.Operation==="Division"){
  console.log(result.FirstNumber / result.SecondNumber)
}
else{
  console.log("Choose a valid operation")
}

/*import inquirer from 'inquirer';

let result = await inquirer.prompt([
  {
    message: "Enter Your First Number!",
    type: "input",
    name: "firstNumber",
   // validate: (value) => !isNaN(value) || 'Please enter a valid number',
   // filter: Number
  },
  {
    message: "Enter Your Second Number!",
    type: "input",
    name: "secondNumber",
  //  validate: (value) => !isNaN(value) || 'Please enter a valid number',
   // filter: Number
  },
  {
    message: "Select Your Operation!",
    type: "list",
    name: "operation",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
  }
]);

if(result.operation === "Addition") {
  console.log(result.firstNumber + result.secondNumber);
} else if(result.operation === "Subtraction") {
  console.log(result.firstNumber - result.secondNumber);
} else if(result.operation === "Multiplication") {
  console.log(result.firstNumber * result.secondNumber);
} else if(result.operation === "Division") {
  console.log(result.firstNumber / result.secondNumber);
}*/

