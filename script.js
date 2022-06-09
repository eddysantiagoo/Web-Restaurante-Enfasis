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
  sr.reveal('.inner-services',{ delay:800, origin:'bottom' })
  sr.reveal('.inner-company',{ delay:800, origin:'top' })
  sr.reveal('.company-text',{ delay:800, origin:'left' })
  sr.reveal('.company-text-2',{ delay:800, origin:'right' })
  sr.reveal('.footer',{ delay:50, origin:'bottom' })
