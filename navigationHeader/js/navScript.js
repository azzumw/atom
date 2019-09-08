// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    var a = document.getElementsByTagName("a");
    var p = document.getElementsByTagName("p");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.height='30px';
    document.getElementById("logo").style.width='30px';
    // document.getElementById("logo").style.marginTop='0px';
    // document.getElementById("logo").style.marginBottom='0px';


    p[0].style.fontSize = "17px";
    p[0].style.marginTop = "5px";
    p[0].style.marginBottom = "0px";

    a[0].style.marginTop='0px';
    a[1].style.marginTop='0px';
    a[2].style.marginTop='0px';
    a[3].style.marginTop='0px';
    a[4].style.marginTop='0px';

    a[0].style.marginBottom='0px';
    a[1].style.marginBottom='0px';
    a[2].style.marginBottom='0px';
    a[3].style.marginBottom='0px';
    a[4].style.marginBottom='0px';

    a[0].style.paddingTop='5px';
    a[1].style.paddingTop='5px';
    a[2].style.paddingTop='5px';
    a[3].style.paddingTop='5px';
    a[4].style.paddingTop='5px';

    a[0].style.paddingBottom='5px';
    a[1].style.paddingBottom='5px';
    a[2].style.paddingBottom='5px';
    a[3].style.paddingBottom='5px';
    a[4].style.paddingBottom='5px';



  } else {
    // document.getElementById("navbar").style.padding = "80px 10px";
    // document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.display='block';
    document.getElementById("logo").style.height='90px';
    document.getElementById("logo").style.width='81px';

    a[0].style.marginTop='25px';
    a[1].style.marginTop='25px';
    a[2].style.marginTop='25px';
    a[3].style.marginTop='25px';
    a[4].style.marginTop='25px';

    a[0].style.marginBottom='25px';
    a[1].style.marginBottom='25px';
    a[2].style.marginBottom='25px';
    a[3].style.marginBottom='25px';
    a[4].style.marginBottom='25px';

    p[0].style.fontSize = "25px";
    p[0].style.marginTop = "25px";
    // p[0].style.marginBottom = "25px";
  }
}
