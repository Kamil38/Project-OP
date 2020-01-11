const navSlide = ()=>{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	//Toggle Nav
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');

			//Animate links
	 		navLinks.forEach((link, index)=>{
			if(link.style.animation){
				link.style.animation = ''
			}else{
				link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
			}
	  	});
	 	//Burger
	 	burger.classList.toggle('toggle');	

	});

}

navSlide();


function myFunction() {
  window.open('https://www.ma-web.nl/over-ma/wat-is-Ma/', '_blank')
}

function myFunction2() {
  window.open('https://www.ma-web.nl/?gclid=Cj0KCQiAgebwBRDnARIsAE3eZjReePmpPKNIAdqKKrUmyFyqBhHdE2NYZukj1F5pcRVBYYShin35XPsaAqNfEALw_wcB', '_blank')
}

function myFunction3() {
  window.open('https://www.ma-web.nl/aanmelden/', '_blank')
}