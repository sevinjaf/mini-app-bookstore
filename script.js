// 1. Hero Slider Logic
let currentIdx = 0;
const slides = document.querySelectorAll('.single-slide');
const dots = document.querySelectorAll('.hero-slider-section .dot');
let autoSlide;

function showSlide(index) {
    if (index >= slides.length) currentIdx = 0;
    if (index < 0) currentIdx = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active-slide'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentIdx].classList.add('active-slide');
    dots[currentIdx].classList.add('active');
}

function nextSlide() {
    currentIdx++;
    showSlide(currentIdx);
}

function setSlide(index) {
    currentIdx = index;
    showSlide(currentIdx);
    resetInterval();
}

function resetInterval() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 4000);
}

autoSlide = setInterval(nextSlide, 4000);


// 2. Product Tab Slider Logic
let prodSlideIdx = 0;
const prodSlides = document.querySelectorAll('.product-slide');
const prodDots = document.querySelectorAll('.product-tab-section .dot');

function setProductSlide(index) {
    prodSlideIdx = index;
    prodSlides.forEach((slide, idx) => {
        if(idx === prodSlideIdx) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
    prodDots.forEach((dot, idx) => {
        if(idx === prodSlideIdx) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}


// 3. Deal Products Carousel Logic
let dealSlideIdx = 0;
const dealSlides = document.querySelectorAll('.deal-slide');
const dealDots = document.querySelectorAll('.deal-products-section .dot');

function setDealSlide(index) {
    dealSlideIdx = index;
    dealSlides.forEach((slide, idx) => {
        if(idx === dealSlideIdx) {
            slide.style.display = "flex";
        } else {
            slide.style.display = "none";
        }
    });
    dealDots.forEach((dot, idx) => {
        if(idx === dealSlideIdx) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}


// 4. Best Seller Slider Logic
let sellerSlideIdx = 0;
const sellerSlides = document.querySelectorAll('.seller-slide');
const sellerDots = document.querySelectorAll('.best-seller-section .dot');

function setSellerSlide(index) {
    sellerSlideIdx = index;
    sellerSlides.forEach((slide, idx) => {
        if(idx === sellerSlideIdx) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
    sellerDots.forEach((dot, idx) => {
        if(idx === sellerSlideIdx) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}


// 5. Arts & Photography Carousel Logic
let childSlideIdx = 0;
const childSlides = document.querySelectorAll('.children-slide');
const childDots = document.querySelectorAll('.children-books-section .dot');

function setChildSlide(index) {
    childSlideIdx = index;
    childSlides.forEach((slide, idx) => {
        if(idx === childSlideIdx) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
    childDots.forEach((dot, idx) => {
        if(idx === childSlideIdx) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}


// 6. Latest Blogs Slider Logic
let blogSlideIdx = 0;
const blogSlides = document.querySelectorAll('.blog-slide');
const blogDots = document.querySelectorAll('.latest-blogs-section .dot');

function setBlogSlide(index) {
    blogSlideIdx = index;
    blogSlides.forEach((slide, idx) => {
        if(idx === blogSlideIdx) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
    blogDots.forEach((dot, idx) => {
        if(idx === blogSlideIdx) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}