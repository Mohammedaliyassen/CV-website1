
const about= document.querySelector('#about');
const isthere = Math.floor(about.getBoundingClientRect().top);
let contant = document.getElementById('icon0');
const see = function(linker){
    linker.style.cssText='font-size:20px; padding-top:33px';
}
const bye = function(linker){
    linker.style.cssText='font-size:auto; color:black';
}

//scroll and chenge header bar and his elements
window.addEventListener('scroll' , function(){
        var scrollpos = document.documentElement.scrollTop;
        var bodywidth = document.body.offsetWidth;
        if(420 < scrollpos && bodywidth > 511){
            document.querySelector('#img1').style.cssText = 'transform: translate(0px, 0px);; width:100px; height:100px;';
            document.querySelector('header').style.cssText = 'height:100px;';
            document.querySelector('ul').style.cssText = 'height:100px;';
            

            for(let i = 1 ; i <= 6 ; i++){
            document.getElementById('link'+[i]).setAttribute('onmouseover' , 'see(this)');
            }
            for(let i = 1 ; i <= 6 ; i++){
            document.getElementById('link'+[i]).setAttribute('onmouseleave' , 'bye(this)');
            }
        }
        else if (420 > scrollpos && bodywidth > 511 ){
            document.querySelector('#img1').style.cssText = 'bottom:80; width:245px; height:285px;';
            document.querySelector('header').style.cssText = 'height:170px;';
            document.querySelector('ul').style.cssText = 'height:170px;';
            for(let i = 1 ; i <= 6 ; i++){
                document.getElementById('link'+[i]).removeAttribute('onmouseover');
                }
        }
    }
);


const hover = function(){
        contant.style.cssText='visibility: hidden;transform: rotateZ(360deg) '
        document.getElementById('icon3').setAttribute('style' , 'visibility: visible;');
        document.getElementById('icon1').setAttribute('style' , 'transform:translate(50px , 0px) rotateZ(360deg); visibility: visible;transition: .5s;');
         document.getElementById('icon2').setAttribute('style' , 'transform:translate(-50px , 0px) rotateZ(360deg); visibility: visible;transition: .5s;');
}
const unhover = function(){
        contant.style.cssText='visibility: hidden; '
        document.getElementById('icon3').setAttribute('style' , 'visibility: hidden;');
        document.getElementById('icon0').setAttribute('style' , 'visibility: visible;transition-delay: .5s;');
        document.getElementById('icon1').setAttribute('style' , 'transform:translate(0px , 50px) rotateZ(-360deg); visibility: hidden;transition: .5s;');
         document.getElementById('icon2').setAttribute('style' , 'transform:translate(0px , 50px) rotateZ(-360deg); visibility: hidden;transition: .5s;');
}

const menu = document.getElementById('menu');
const closemenu = document.getElementById('close');

menu.addEventListener('click',()=>{
    document.querySelector('header').style.cssText = 'height:100vh;';
    menu.style.display ='none';
    closemenu.style.display ='inherit';
    document.querySelector('#headerul').style.cssText='display: grid;';
})
closemenu.addEventListener('click',()=>{
    document.querySelector('header').style.cssText = 'height:100px;';
    menu.style.display ='inherit';
    closemenu.style.display ='none';
    document.querySelector('#headerul').style.cssText='display: none; transition: .0s;';

})
document.querySelector('#img1').style.cssText = 'transform:translate(0px , 0px)';

