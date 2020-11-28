var i = 0;
var images = [];
var time = 8000;

images[0] = 'images/img (1).jpg';
images[1] = 'images/img (2).jpg';
images[2] = 'images/img (3).jpg';
images[3] = 'images/img (4).jpg';
images[4] = 'images/img (5).jpg';
images[5] = 'images/img (6).jpg';
images[6] = 'images/img (7).jpg';
images[7] = 'images/img (8).jpg';
//change images
function change(){
    document.image.src = images[i];
    
        if(i < images.length - 1){
            i++;
        }else{
            i = 0;
        }

setTimeout("change()" , time);
}

window.onload = change();
