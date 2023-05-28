// Math.random()
function aleatorio() {
  const number = 10;
  document.getElementById("resultado").innerHTML = Math.floor(
    Math.random() * number
  );
}

// Math.min()
function minimo() {
  document.getElementById("resultado").innerHTML = Math.min(
    1,
    -5,
    10,
    15,
    20,
    25
  );
}

// Math.max()
function maximo() {
  document.getElementById("resultado").innerHTML = Math.max(
    1,
    5,
    10,
    15,
    20,
    -25
  );
}

// Math.pow()
function potencia() {
  const num1 = 10;
  const num2 = 2;
  document.getElementById("resultado").innerHTML = Math.pow(num1, num2);
}
