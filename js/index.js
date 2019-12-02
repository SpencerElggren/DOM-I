const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// NAV SECTION
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let services = document.querySelector('nav a:nth-child(1)');
services.textContent = siteContent.nav["nav-item-1"];

let product = document.querySelector('nav a:nth-child(2)');
product.textContent = siteContent.nav["nav-item-2"];

let vision = document.querySelector('nav a:nth-child(3)');
vision.textContent = siteContent.nav["nav-item-3"];

let features = document.querySelector('nav a:nth-child(4)');
features.textContent = siteContent.nav["nav-item-4"];

let about = document.querySelector('nav a:nth-child(5)');
about.textContent = siteContent.nav["nav-item-5"];

let contact = document.querySelector('nav a:nth-child(6)');
contact.textContent = siteContent.nav["nav-item-6"];

let textnode = document.createTextNode("Testimonials");
let textNode2 = document.createTextNode("Bored?");

let navBar = document.querySelector("nav").appendChild(textnode);
let navbar2 = document.querySelector("nav").prepend(textNode2);

let multipleA = document.querySelectorAll("a");
multipleA.forEach(element => {element.style.color = "green";});

//CTA SECTION
let ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = siteContent.cta['h1'];

let button1 = document.querySelector('.cta-text button');
button1.textContent = siteContent.cta["button"];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

//MAIN CONTENT
let featureH4 = document.querySelector(".top-content .text-content:first-child h4").textContent = siteContent["main-content"]["features-h4"];


let featureCont = document.querySelector(".top-content .text-content:first-child p").textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector(".top-content .text-content:last-child h4").textContent = siteContent["main-content"]["about-h4"];

let aboutCont = document.querySelector(".top-content .text-content:last-child p").textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img").setAttribute("src" , siteContent["main-content"]["middle-img-src"]);

let serviceH4 = document.querySelector(".bottom-content .text-content:first-child h4").textContent = siteContent["main-content"]["services-h4"];

let serviceCont = document.querySelector(".bottom-content .text-content:first-child p").textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelector(".bottom-content .text-content:nth-child(2) h4").textContent = siteContent["main-content"]["product-h4"];

let productCont = document.querySelector(".bottom-content .text-content:nth-child(2) p").textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelector(".bottom-content .text-content:last-child h4").textContent = siteContent["main-content"]["vision-h4"];

let visionCont = document.querySelector(".bottom-content .text-content:last-child p").textContent = siteContent["main-content"]["vision-content"];

//CONTACT SECTION
let contactH4 = document.querySelector(".contact h4").textContent = siteContent.contact["contact-h4"];

let contAddress = document.querySelector(".contact p:first-child").textContent = siteContent.contact["address"];

let contPhone = document.querySelector(".contact p:nth-child(2)").textContent = siteContent.contact["phone"];

let contMail = document.querySelector(".contact p:last-child").textContent = siteContent.contact["email"];

//FOOTER
let copyright = document.querySelector(".container footer p").textContent = siteContent.footer["copyright"];