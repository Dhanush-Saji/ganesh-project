/* Hero slider */
const slides = document.querySelectorAll(".custom-slider");
var counter = 0;
let isChange = false;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
const goNext = () => {
  if (counter > 1) {
    return;
  }
  counter++;
  slideImage();
};
const goPrev = () => {
  if (counter == 0) {
    return;
  }
  counter--;
  slideImage();
};
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
function slideImageFn() {
  setInterval(() => {
    if (counter == 2) {
      isChange = true;
    } else if (counter == 0) {
      isChange = false;
    }
    if (isChange) {
      goPrev();
    } else {
      goNext();
    }
  }, 3000);
}
// slideImageFn()
/* Hero slider */

/* Navbar handler */
// let hamburger = document.querySelector('.custom-hamburger')
// hamburger.addEventListener('click',()=>{
//     let navbar = document.querySelector('.custom-nav')
//     navbar.classList.toggle('active')
// })
/* Navbar handler */

/* Image upload viewer */
function previewImage(event) {
  var input = event.target;
  var image = document.getElementById('preview');
  if (input.files && input.files[0]) {
     var reader = new FileReader();
     reader.onload = function(e) {
        image.src = e.target.result;
     }
     reader.readAsDataURL(input.files[0]);
  }
  const closeBtn = document.querySelector('#imageClearBtn')
  closeBtn.style.display = 'block'
}
function removeImage() {
  var image = document.getElementById('preview');
  image.src = ""; // Clears the src attribute to remove the image
  const closeBtn = document.querySelector('#imageClearBtn')
  closeBtn.style.display = 'none'
}
/* Image upload viewer */

/* Others */
function clickUploader(){
  let uploader = document.querySelector('#custom-upload-input')
  uploader.click()
}

function toggleUserSignup(userType) {
  const tab = document.querySelectorAll('.custom-tabs > div')
  tab.forEach((tabElement)=>{
    tabElement.classList.toggle('active')
  })
  const elements = document.querySelectorAll('[data-participant="participant"]');
  console.log(elements)

  elements.forEach((element) => {
    if (userType === 'voter') {
      element.style.display = 'none'; 
    } else {
      element.style.display = 'flex'; 
    }
  });
}

// Add a click event listener to the button
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleDisplayFlex);


window.addEventListener('scroll',function(){
  console.log('hi')
})
/* Others */
