/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// /* ----- Dark Mode Toggle ----- */
// // Select the toggle and the body element
// const darkModeToggle = document.getElementById("darkModeToggle");
// const body = document.body;

// // Check if dark mode was previously enabled (using localStorage)
// if (localStorage.getItem("dark-mode") === "enabled") {
//     body.classList.add("dark-mode");
//     darkModeToggle.checked = true; // Keep the toggle on
// }

// // Add event listener to the toggle
// darkModeToggle.addEventListener("change", () => {
//     if (darkModeToggle.checked) {
//         body.classList.add("dark-mode");
//         localStorage.setItem("dark-mode", "enabled"); // Save preference
//     } else {
//         body.classList.remove("dark-mode");
//         localStorage.setItem("dark-mode", "disabled"); // Save preference
//     }
// });



/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Developer","Cloud Enthusiast", "DevOps Engineer", "Problem Solver"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- EMAILJS CONTACT FORM ----- */
window.onload = function () {
  emailjs.init("kuy1rPZubShWEaBuR"); // Initialize with your EmailJS Public Key
};

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  // Send the email using EmailJS
  emailjs.send("service_zwnd4k5", "template_0hywsfz", templateParams)
    .then(function (response) {
      console.log("Message sent successfully", response);
      alert("Your message has been sent!");
      // Clear the form fields after successful submission
      document.getElementById("contact-form").reset();
    }, function (error) {
      console.error("Error sending message", error);
      alert("There was an error sending your message. Please try again.");
    });
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 80 });
sr.reveal(".featured-text-info", { delay: 80 });
sr.reveal(".featured-text-btn", { delay: 80 });
sr.reveal(".social_icons", { delay: 80 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 80 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 1000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 80 });
srLeft.reveal(".contact-info", { delay: 80 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 1000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 80 });
srRight.reveal(".form-control", { delay: 80 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
