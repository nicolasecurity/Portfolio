const themes = {
    light: {
      background: 'white',
      firstColor: 'hsl(var(--hue-color), 54.17%, 52.94%)',
      secondColor: 'hsl(var(--hue-color), 56%, 12%)',
    },
    dark: {
      background: 'hsl(var(--hue-color), 0%, 11%, 100%)',
    //   firstColor: 'hsl(var(--hue-color), 54.17%, 52.94%)',
    //   secondColor: 'hsl(var(--hue-color), 56%, 12%)',
      firstColor: 'hsl(var(--hue-color), 54.17%, 52.94%)',
      secondColor: 'hsl(var(--hue-color), 56%, 12%)',
    }
  };
  
  const html = document.querySelector('html')

  function setTheme(newTheme) {
    const themeColors = themes[newTheme]; // Seleciona o tema para aplicar
    console.log(themeColors);
    
    Object.keys(themeColors).map(function(key) {
      html.style.setProperty(`--${key}`, themeColors[key]); // Altera as variáveis no css
    });
  }
  
  const darkModeToggle = document.querySelector('input[name=theme]');
    darkModeToggle.addEventListener('change', function({ target }) {
    setTheme(target.checked ? 'dark' : 'light');
    });




/*===== MOSTRANDO MENU =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== ESCONDENDO MENU NO RESPONSIVO ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CONFIGURAÇÕES DE SCROLL ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== REVELANDO ANIMAÇÃO NO SCROLL =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200, 
//     reset: true
});


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text, .l-header',{}); 
sr.reveal('.icon__img', {origin: 'right', delay: 1000, distance: '190px', rotate: { x: 10, y: 40, z: 110 }});
sr.reveal('.section-title', {origin: 'right', delay: 600});
sr.reveal('.footer', {origin: 'bottom', delay: 400})
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .sub-title',{delay: 400});

sr.reveal('.home__social-icon',{ interval: 300}); 
sr.reveal('.skills__data, .work__img, .contact__input, .contact__button',{interval: 200}); 
