const body = document.querySelector('body'),
  sidebar = body.querySelector('aside'),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

const helpBlock = document.querySelector('.help');



toggle.addEventListener("click" , () =>{
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains('close')) {
    helpBlock.classList.add('hide');
  } else {
    helpBlock.classList.remove('hide');
  }

})

