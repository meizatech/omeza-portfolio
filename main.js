/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


// <<<<<<<<< Email js >>>>>>>>>>>>>>>>>>>>>
const contactForm = document.getElementById('contact-form')
   contactMessage = document.getElementById('contact-message')
   const sendEmail= (e) =>{
         e.preventDefault()

        //  serviceID- templateID- #form- publickey
        emailjs.send('service_0qcyhjo', 'template_1hijnzp', '#contact-form', 'LXl3B4Qj5JV7cbUym')
                .then(() => {
                    //show message
                    contactMessage.textContent = 'message send successfully✅'

                    //remove message after 5 sec 
                    setTimeout(() =>{
                        contactMessage.textContent = ''
                    }, 5000)
                    //clear fields
                    contactForm.reset()

                    
                }).catch(
                    err=>{
                        contactMessage.textContent = 'message not sent'
                    }
                )

                //  () => {
                    // show error message
                    // contactMessage.textContent= "message not sent (service error)❌ "
                // })
   }
   contactForm.addEventListener('submit', sendEmail)


   /*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)




// add mine in scroll reveal.animation

const sr = scrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //  reset: true  Animation repeat   
})
sr.reveal('.home__data .experience, .skill, .contact__container')
sr.reveal('.home__img',{delay: 600})
sr.reveal('.home__scroll',{delay: 800})
sr.reveal('.home__card' .services__card,{interval: 100})
sr.reveal('.about__content',{origin: right})
sr.reveal('.about__img',{origin: left})

//    >>>>>>>
   
  /* Hello {{to_name}},

You got a new message from {{from_name}}:

{{message}}

Best wishes,
EmailJS team */
