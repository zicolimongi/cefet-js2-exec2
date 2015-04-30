var servidorDasImagens = 'http://fegemo.github.io/cefet-web/images/',
    todasAsImagens = ['philae-parts.jpg',
        'philae-rosetta.jpg',
        'philae-separation.jpg',
        'philae-67-picture.jpg',
        'philae-collecting.jpg'],
        currentIndex = 0,
        previous = document.getElementById('anterior'),
        next = document.getElementById('proximo'),
        image = document.getElementById('slide');

previous.addEventListener('click',function(e){
    if(currentIndex === 0){
        currentIndex = 4;
    }
    else{
        currentIndex = Math.abs((currentIndex - 1) % 5);
    }
    image.src = servidorDasImagens + todasAsImagens[currentIndex];
});

next.addEventListener('click',function(e){
    currentIndex = (currentIndex + 1) % 5;
    image.src = servidorDasImagens + todasAsImagens[currentIndex];
});

