
function display() {
  var x = document.getElementById("nav-items");
  if (window.innerWidth > 600) {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
}

function show() {
  var x = document.getElementById("nav-items");
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
