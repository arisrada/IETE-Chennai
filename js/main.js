function openNav(){
    document.getElementById("side_nav").style.width = "100%";
}

function closeNav(){
    document.getElementById("side_nav").style.width = "0";
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}



// animation 1//
var i = 0;
var txt1 = "Chennai Centre of IETE is committed to attain commanding heights and achieve the status of 'Centre of Excellence' in Technical, Engineering & Management education by harnessing the best practices in educational innovation and through its concerted endeavors like quality teaching, industrial consultancy and training to the aspirants including corporate training.";
var speed1 = 10;

// Call the typeWriter function when the page loads
window.onload = function() {
  typeWriter();
};

function typeWriter() {
  if (i < txt1.length) {
    document.getElementById("demo1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed1);
  }
}

//number count
function animateNumber(target, finalValue, duration) {
  let current = 0;
  let step = (finalValue - current) / (duration / 50);

  function updateNumber() {
    if (current <= finalValue) {
      document.getElementById(target).textContent = Math.floor(current);
      current += step;
      setTimeout(updateNumber, 5);
    } else {
      document.getElementById(target).textContent = finalValue;
    }
  }

  updateNumber();
}

function checkIfVisible(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumber("number1", 12060, 13000);
      animateNumber("number2", 13592, 14000);
      animateNumber("number3", 42, 500);
      animateNumber("number4", 15, 300);
      observer.unobserve(entry.target); 
    }
  });
}

const observer = new IntersectionObserver(checkIfVisible, { root: null, rootMargin: "0px", threshold: 0.5 });
const countdownContainer = document.getElementById("countdownContainer");

observer.observe(countdownContainer);

