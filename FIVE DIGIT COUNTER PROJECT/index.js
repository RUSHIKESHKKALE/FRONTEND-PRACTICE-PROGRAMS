var countInterval;

var onclick = document.getElementById("onclick");

onclick.addEventListener("click", startCounter);

function startCounter() {
  var number = parseInt(document.getElementById("number").value);

  if (isNaN(number)) {
    alert("Please enter a number");
    clearInterval(countInterval); // This is important for the condition when a counter is running and you entered a wrong input for a new counter
    return;
  }
  if (number < 1 || number > 99999) {
    alert("Range out of bounds");
    clearInterval(countInterval);
    return;
  }

  var currentTens = document.querySelector(".counter .currentTens");
  var nextTens = document.querySelector(".counter .nextTens");
  var currentOnes = document.querySelector(".counter .currentOnes");
  var nextOnes = document.querySelector(".counter .nextOnes");
  var currentHundreds = document.querySelector(".counter .currentHundreds");
  var nextHundreds = document.querySelector(".counter .nextHundreds");
  var currentThousands = document.querySelector(".counter .currentThousands");
  var nextThousands = document.querySelector(".counter .nextThousands");
  var currentTenThousands = document.querySelector(
    ".counter .currentTenThousands"
  );
  var nextTenThousands = document.querySelector(".counter .nextTenThousands");

  var count = 0;
  var ones = 0;
  var tens = 0;
  var hundreds = 0;
  var thousands = 0;
  var tenThousands = 0;
  // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
  resetNumbers(
    currentOnes,
    nextOnes,
    currentTens,
    nextTens,
    currentHundreds,
    nextHundreds,
    currentThousands,
    nextThousands,
    currentTenThousands,
    nextTenThousands
  );

  // Clears the previous interval that was running
  clearInterval(countInterval);

  countInterval = setInterval(function () {
    if (count === number) {
      clearInterval(countInterval);
      alert("Counter has stopped");
      return;
    }
    if (ones < 10) {
      increaseCount(currentOnes, nextOnes);
      ones++;
    }
    if (ones == 10 && tens < 10) {
      ones = 0;
      tens++;
      increaseCount(currentTens, nextTens);
    }
    if (tens == 10 && hundreds < 10) {
      tens = 0;
      hundreds++;
      increaseCount(currentHundreds, nextHundreds);
    }
    if (hundreds == 10 && thousands < 10) {
      hundreds = 0;
      thousands++;
      increaseCount(currentThousands, nextThousands);
    }
    if (thousands == 10 && tenThousands < 10) {
      thousands = 0;
      tenThousands++;
      increaseCount(currentTenThousands, nextTenThousands);
    }

    count++;
  }, 1000);
}

function resetNumbers(
  currentOnes,
  nextOnes,
  currentTens,
  nextTens,
  currentHundreds,
  nextHundreds,
  currentThousands,
  nextThousands,
  currentTenThousands,
  nextTenThousands
) {
  currentOnes.innerText = 0;
  nextOnes.innerText = 1;

  currentTens.innerText = 0;
  nextTens.innerText = 1;
  currentHundreds.innerText = 0;
  nextHundreds.innerText = 1;

  currentTenThousands.innerText = 0;
  nextTenThousands.innerText = 1;

  currentThousands.innerText = 0;
  nextThousands.innerText = 1;
}

function increaseCount(currentNo, nextNo) {
  nextNo.classList.add("animate");

  setTimeout(function () {
    currentNo.innerText = nextNo.innerText;
    nextNo.classList.remove("animate");
    if (nextNo.innerText == 9) {
      nextNo.innerText = 0;
    } else {
      nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }
  }, 500);
}
