let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
  
}

const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
  })

  sr.reveal('.home-content',{ delay:200, origin:'left' })
  sr.reveal('.home-text-content',{ delay:350, origin:'right' })
  sr.reveal('.inner-services',{ delay:500, origin:'bottom' })
  sr.reveal('.inner-company',{ delay:500, origin:'top' })
  sr.reveal('.company-text',{ delay:500, origin:'left' })
  sr.reveal('.company-text-2',{ delay:500, origin:'right' })
  sr.reveal('.contact',{ delay:500, origin:'bottom' })
