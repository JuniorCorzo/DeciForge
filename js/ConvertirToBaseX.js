function binaryToDeci() {
  let binary = document.getElementById("binary");
  let numDeci = 0;
  let numBinary = binary.value;

  for (let i = 0; i < numBinary.length; i++) {
    if (numBinary[i] === "1") {
      numDeci += Math.pow(2, numBinary.length - (i + 1));
    }
  }

  let text = document.getElementById("resultado-binary");
  text.innerText = "Resultado: " + numDeci;
}

function hexToDeci() {
  let numHex = document.getElementById("hexadecimal").value;
  let numDeci = 0;
  const LETTER_NUMBER = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };

  for (let i = 0; i < numHex.length; i++) {
    if (LETTER_NUMBER.hasOwnProperty(numHex[i])) {
      numDeci +=
        LETTER_NUMBER[numHex[i]] * Math.pow(16, numHex.length - (i + 1));
      continue;
    }
    numDeci += numHex[i] * Math.pow(16, numHex.length - (i + 1));
  }
  document.getElementById("resultado-hexadecimal").innerText =
    "Resultado: " + numDeci;
}

function porcentajeToDeci() {
  let porcentaje = document.getElementById("porcentaje").value;
  document.getElementById("resultado-porcentaje").innerText =
    "Resultado: " + porcentaje / 100;
}

function octaToDeci() {
  const NUM_PERMITED = ["0", "1", "2", "3", "4", "5", "6", "7"];
  let octaNum = document.getElementById("octa").value;
  let numDeci = 0;

  for (let i = 0; i < octaNum.length; i++) {
    if (!NUM_PERMITED.includes(octaNum[i])) {
      document.getElementById("resultado-octa").innerText =
        "No es un numero Octadecimal";
      return;
    }

    numDeci += octaNum[i] * Math.pow(8, octaNum.length - (i + 1));
    document.getElementById("resultado-octa").innerText =
      "Resultado: " + numDeci;
  }
}
