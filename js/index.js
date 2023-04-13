const buttons = document.querySelectorAll('.buttons .button');
const result = document.querySelector('#result h1');

function displayVal(e) {
  let pushed = e.innerHTML;

  if (pushed == '=') {
    result.innerHTML = eval(result.innerHTML);
  } else if (pushed == 'C') {
    result.innerHTML = '0';
  } else if (pushed === 'DEL') {
    result.innerHTML = result.innerHTML.slice(0, -1);
  } else {
    if (result.innerHTML == '0') {
      result.innerHTML = pushed;
    } else {
      result.innerHTML += pushed;
    }
  }
}

function handleToggle() {
  const element = document.body;

  element.classList.toggle('dark');
}
