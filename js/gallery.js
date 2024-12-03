window.onload = addTabIndex;

 function upDate(previewPic){
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = 'url(\'' + previewPic.src + '\')';
   
    imageDiv.innerHTML = previewPic.alt;
}

function unDo(){
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = 'none';

    imageDiv.innerHTML = 'Hover over an image below to display here.';
}

function addTabIndex() {
    console.log('Adding tabindex to images');
    
    let images = document.getElementsByClassName('preview');
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log(`Añadido tabindex a imagen ${i + 1}`);
    }
}

