document.addEventListener("DOMContentLoaded", function () {
  // Counters
  let heartCount = 0;
  let coinCount = 100;
  let copyCount = 0;

  // Elements
  const heartBtns = document.getElementsByClassName("heartBtn");
  const copyBtns = document.getElementsByClassName("copyBtn");
  const callBtns = document.getElementsByClassName("callBtn");
  const heartCountEl = document.getElementById("heartCount");
  const coinCountEl = document.getElementById("coinCount");
  const copyCountEl = document.getElementById("copyCount");
  const historyList = document.getElementById("historyList");
  const clearHistoryBtn = document.getElementById("clearHistory");

  // Heart Btn
  for (let i = 0; i < heartBtns.length; i++) {
    heartBtns[i].addEventListener("click", function () {
      heartCount++;
      heartCountEl.textContent = heartCount;
    });
  }

  // Copy Btn
  for (let i = 0; i < copyBtns.length; i++) {
    copyBtns[i].addEventListener("click", function (e) {
      e.preventDefault();
      let number = this.parentElement.previousElementSibling.textContent.trim();
      navigator.clipboard.writeText(number);
      copyCount++;
      copyCountEl.textContent = copyCount;
      alert("Copied Number: " + number);
    });
  }

// Call Btn
  for (let i = 0; i < callBtns.length; i++) {
    callBtns[i].addEventListener("click", function (e) {
      e.preventDefault();
      let number = this.parentElement.parentElement.querySelector("p.text-3xl").textContent.trim();
      let name = this.parentElement.parentElement.querySelector("h3").textContent.trim();

      if (coinCount < 20) {
        alert("Not enough coins! Need at least 20 coins.");
        return;
      }

      coinCount -= 20;
      coinCountEl.textContent = coinCount;

      alert("Calling " + name + " (" + number + ") ...");
      let li = document.createElement("li");
      li.className = " rounded-md p-2 mb-2 shadow-sm bg-gray-100";
      li.innerHTML = `
        <p class="font-bold text-gray-800">${name}</p>
        <p class="font-bold text-gray-700">${number}</p>
      `;
      historyList.appendChild(li);
    });
  }

// Clear History
    clearHistoryBtn.addEventListener("click", function () {
      historyList.innerHTML = "";
    });



});
