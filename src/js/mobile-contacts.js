var menuToggle = document.querySelector('.cmn-toggle-switch');
var menuMobile = document.querySelector('#mobile-menu');
var menuLinks = menuMobile.children;


menuToggle.onclick = function(){
  if( window.innerWidth < 992 ){
   menuMobile.classList.toggle('show');

  }
}

for (var i = 0; i < menuLinks.length;   i++) {

      menuLinks[i].onclick = function() {

        if( window.innerWidth < 992 ){
        menuMobile.classList.toggle('show');
        menuToggle.classList.remove("active");

      };
    }
}

var toggleMenuClass = function(){
  if( window.innerWidth >=992 ){
      // menuMobile.classList.remove('nav-menu');

  } else {
    // menuMobile.classList.add('nav-menu');
  }
}
 toggleMenuClass();

window.onresize = function(event) {

  menuMobile.classList.remove('show');
  menuToggle.classList.remove("active")
  toggleMenuClass();
}
//---------
var menuToggle2 = document.querySelector('#mobileMenuShow');
var menuMobile2 = document.querySelector('#mobile-menu2');
var menuLinks2 = menuMobile2.children;


menuToggle2.onclick = function(){
  if( window.innerWidth < 992 ){
   menuMobile2.classList.toggle('show2');

  }
}

for (var i = 0; i < menuLinks2.length;   i++) {

      menuLinks2[i].onclick = function() {

        if( window.innerWidth < 992 ){
        menuMobile2.classList.toggle('show2');
        menuToggle2.classList.remove("active");

      };
    }
}

var toggleMenuClass = function(){
  if( window.innerWidth >=992 ){
      // menuMobile.classList.remove('nav-menu');
      console.log("removeClass");
  } else {
    // menuMobile.classList.add('nav-menu');
  }
}
 toggleMenuClass();

window.onresize = function(event) {

  menuMobile2.classList.remove('show2');
  menuToggle2.classList.remove("active")
  toggleMenuClass();
}




