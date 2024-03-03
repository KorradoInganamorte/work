const back_registration = (e) => {
  e.preventDefault();
  window.location.pathname = "../register";
};

export { back_registration };

const back_presentation_page = (e) => {
  e.preventDefault();
  window.location.pathname = "../";
};

export { back_presentation_page };

const login = (e)=>{
    e.preventDefault();
    window.location.pathname = "../login";
}

export {login}

const bodyElement = document.querySelector('body');


function disableScroll() {
  window.scrollTo({
    top: 0
  });
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  bodyElement.style.overflow = 'hidden';
  bodyElement.style.position = 'fixed';
  bodyElement.style.top = `-${scrollPosition}px`;
  bodyElement.style.width = '100%';
}

export{disableScroll}


function enableScroll() {

  const scrollPosition = Math.abs(parseFloat(bodyElement.style.top));
  bodyElement.style.overflow = '';
  bodyElement.style.position = '';
  bodyElement.style.top = '';
  bodyElement.style.width = '';
  window.scrollTo(0, scrollPosition);
}

export {enableScroll}