let flag = 0;
slideshow(flag);

//slides changes using prevarrow and nextarrow//

function controller(x){
    flag = flag + x ;
    slideshow(flag);
 }


function slideshow(num){
    let slides = document.getElementsByClassName("slides");  
    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;

    }
    for(let y of slides){
          y.style.display="none";
    }
    slides[num].style.display = "block";
}
  //automatic slideChanges//
function changeslider(){
    let slides = document.getElementsByClassName("slides");  
   
     if( flag < slides.length-1){
        flag++ ;
     }
     else{
        flag = 0;
     }
     for(let z of slides){
        z.style.display="none";
  }
  slides[flag].style.display = "block";
    setTimeout("changeslider()",3000);
   
}
window.onload = changeslider() ;
