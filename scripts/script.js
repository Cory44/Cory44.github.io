
// Change navigation style depending on device
function display() {
  var x = document.getElementById("nav-items");
  if (window.innerWidth > 600) {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
}

// Show menu items in mobile view
function show() {
  var x = document.getElementById("nav-items");
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

// Dislpay year for the copyright in the footer
function year() {
  var date = new Date();
  var year = date.getYear() + 1900;
  document.getElementById("year").innerHTML = year;
}

