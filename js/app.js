const lightIcon = document.getElementById('sun-icon')
const darkIcon = document.getElementById('moon-icon')

window.addEventListener('load', () => {
  if(document.body.classList.contains("dark")){
      darkIcon.style.opacity = "1";
      lightIcon.style.opacity = "0.5";
  }else{
    lightIcon.style.opacity = "1";
    darkIcon.style.opacity = "0.5";

  }
});



darkIcon.addEventListener('click', function() {
  document.body.classList.add('dark');
  darkIcon.style.opacity = "1";
  lightIcon.style.opacity = "0.5";
});

lightIcon.addEventListener('click', function() {
  document.body.classList.remove('dark');
  lightIcon.style.opacity = "1";
  darkIcon.style.opacity = "0.5";
})

const historyValue = document.getElementById('history-value');
const outputValue = document.getElementById('output-value');

// getHistory
function getHistory() {
  return historyValue.innerText ;
}

// printHistory
function printHistory(num) {
  historyValue.innerText = num;
}

// getOutput
function getOutput() {
  return outputValue.innerText;
}

// printOutput
function printOutput(num) {
  if(num == ""){
    outputValue.innerText = num;
  }else{
    outputValue.innerText = getFormattedNumber(num);
  }

}


// getFormattedNumber function
function getFormattedNumber(num) {

  if(num == "-"){
    return "";
  }

  let n = Number(num);
  let  value = n.toLocaleString("eg");
  return value;
}


// reverseFormattedNumber function
function reverseFormattedNumber(num) {
  return Number(num.replace(/,/g,''));
}

const operator = document.getElementsByClassName('operator');

// run a for loop
for (let i = 0; i < operator.length; i++){
  operator[i].addEventListener('click', function() {
    if(this.id == 'clear'){
      printOutput("");
      printHistory("");
    }else if(this.id == 'backspace'){
      let output = reverseFormattedNumber(getOutput()).toString();
      // if output has a value
      if(output) {
        output = output.substring(0, output.length - 1);
        printOutput(output);
        printHistory("");
      }
    }else{
      let history = getHistory();
      let output = getOutput();

      if(output == "" && history != ""){
        if(isNaN(history[history.length - 1])){
          history = history.substring(0, history.length - 1);
        }
      }
 
      if(output != "" || history != ""){
        output = output == "" ? output : reverseFormattedNumber(output);
        history += output;

        if(this.id == "="){
          let result = eval(history);
          printOutput(result);
          printHistory("");
        }else{
          history += this.id;
          printHistory(history);
          printOutput("");
        }

      }

    }
  })
}


const  number = document.getElementsByClassName('number');

// run a for loop
for  (let i = 0; i < number.length; i++){
  number[i].addEventListener('click', function() {
    let output = reverseFormattedNumber(getOutput());
    // if output has a number
    if(output != NaN){
      output += this.id;
      printOutput(output);
    }
  })
}