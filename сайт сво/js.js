function showBlueLine() {
  const blueLine = document.getElementById("blue-line");
  if (!blueLine) return; // Проверка на существование элемента

  // Задаем начальную ширину 0 (на всякий случай)
  blueLine.style.width = "0";

  // Запускаем анимацию с помощью requestAnimationFrame
  let start = null;

  function animate(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;

    // Рассчитываем ширину линии в зависимости от времени
    let width = Math.min((progress / 1000) * 100, 100); // 1000ms = 1 секунда
    blueLine.style.width = width + "%";

    // Если линия еще не заполнилась, продолжаем анимацию
    if (width < 100) {
      requestAnimationFrame(animate);
    }
  }

  // Запускаем анимацию
  requestAnimationFrame(animate);
}

function hideBlueLine() {
    const blueLine = document.getElementById("blue-line");
    if (!blueLine) return;
    blueLine.style.width = "0";
}


function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const blueLineContainer = document.getElementById("blue-line-container");
  if (!blueLineContainer) return; // Проверка на существование элемента

  if (isElementInViewport(blueLineContainer)) {
    //  Запускаем анимацию, только если контейнер в поле зрения
    showBlueLine();
  } else {
      hideBlueLine();
  }
}

// Добавляем прослушиватель события на прокрутку страницы
window.addEventListener("scroll", handleScroll);

// Проверяем видимость при загрузке (на случай, если элемент уже в поле зрения)
handleScroll();

 
   
  document.addEventListener('DOMContentLoaded', function() {
    const whiteOverlay = document.getElementById('white-overlay');
    let isScrolled = false;

    function checkScroll() {
        const scrollPosition = window.scrollY;
        const punct4Top = document.getElementById('punct4').offsetTop;
        const punct4Height = document.getElementById('punct4').offsetHeight;

        if (scrollPosition > punct4Top + punct4Height / 2 && !isScrolled) { //Пролистываем вниз, и видим нижнюю часть
            whiteOverlay.style.bottom = '0';
            isScrolled = true;
        } else if (scrollPosition < punct4Top + punct4Height / 2 && isScrolled) { //Пролистываем вверх, закрываем
            whiteOverlay.style.bottom = '0';
            isScrolled = false;
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Вызываем один раз при загрузке страницы, чтобы учесть начальное состояние
});

document.addEventListener('DOMContentLoaded', function() {
  const whiteOverlay = document.getElementById('white-overlay');
  const punct4 = document.getElementById('punct4');

  function checkScroll() {
    const scrollPosition = window.scrollY;
    const punct4Top = punct4.offsetTop;
    const punct4Height = punct4.offsetHeight;
    const overlayHeight = punct4Height / 2;

    if (scrollPosition > punct4Top + overlayHeight) {
      // Прокрутили ниже середины, опускаем полосу вниз
      whiteOverlay.style.top = punct4Height + 'px';  // Опускаем полосу вниз
    } else {
      // Прокрутили обратно вверх, возвращаем полосу наверх
      whiteOverlay.style.top = '50%'; // Возвращаем полосу наверх
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Вызываем один раз при загрузке страницы
});

function revealOnScroll() {
  const images = document.querySelectorAll(".feature-img");

  for (let i = 0; i < images.length; i++) {
    if (isElementInViewport(images[i])) {
      images[i].classList.add("visible");
    } else {
      images[i].classList.remove("visible"); // Добавлено удаление класса
    }
  }
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();