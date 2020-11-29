var phrase = [];
var j = 0;
var time = 4000;
var div = document.getElementById("container");
var images = [];
images[0] = 'images/img (4).jpg';
images[1] = 'images/img (5).jpg';
images[2] = 'images/img (6).jpg';
images[3] = 'images/img (7).jpg';
images[4] = 'images/img (8).jpg';
var p = document.getElementById("paragraph");
phrase[0] = 'Developing for you';
phrase[1] = 'Totally responsive websites';
phrase[2] = 'Really cool mobile apps';
phrase[3] = 'Custom built softwares';
phrase[4] = 'Custom built robots';
var body = document.getElementsByTagName('body');
function carousel(){
    p.innerHTML = phrase[j];
    if(j < phrase.length - 1){
        j++;
    }else{
        j=0;
    }
    setTimeout("carousel()" , 12000);
    setInterval (1500);
}

window.onload = carousel();