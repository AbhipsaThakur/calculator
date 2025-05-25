function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function toggleSign() {
  let display = document.getElementById("display");
  if (display.value.charAt(0) === '-') {
    display.value = display.value.substring(1);
  } else {
    display.value = '-' + display.value;
  }
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}
