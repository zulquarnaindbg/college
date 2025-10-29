// ====== Menu Toggle ======
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

if (menuBtn && mainNav) {
  menuBtn.addEventListener('click', () => {
    if (mainNav.style.display === 'flex') {
      mainNav.style.display = 'none';
    } else {
      mainNav.style.display = 'flex';
      mainNav.style.flexDirection = 'column';
      mainNav.style.gap = '8px';
    }
  });
}

// ====== Quiz ======
const checkBtn = document.getElementById('checkBtn');
const resultDiv = document.getElementById('result');

if (checkBtn) {
  checkBtn.addEventListener('click', () => {
    const choices = document.getElementsByName('q1');
    let selected = null;

    for (const choice of choices) {
      if (choice.checked) {
        selected = choice.value;
      }
    }

    if (!selected) {
      resultDiv.style.display = 'block';
      resultDiv.textContent = 'Pehle koi option choose karo.';
      return;
    }

    if (selected === 'yes') {
      resultDiv.style.display = 'block';
      resultDiv.textContent = '✅ Sahi jawab! Plastic bottles ko recycle karna chahiye.';
    } else {
      resultDiv.style.display = 'block';
      resultDiv.textContent = '❌ Galat — plastic bottles ko recycle karna chahiye.';
    }
  });
}

// ====== Footer Year ======
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
