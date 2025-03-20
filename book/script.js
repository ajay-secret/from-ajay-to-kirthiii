let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if(e.className.includes(toggleClassName)) {
    e.className = e.className.replace(' ' + toggleClassName, '');
  } else {
    e.className += ' ' + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage+=2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
    
  }
  else if (page == currentPage - 1) {
    currentPage-=2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
  
}
document.addEventListener("touchstart", function (e) {
  let target = e.target.closest(".page");
  if (target) {
    let pageNum = parseInt(target.getAttribute("onclick").match(/\d+/)[0]);
    movePage(target, pageNum);
  }
});
