function slider(){
    document.querySelector('.slider').addEventListener('mousemove', (event) => {
        let x = event.offsetX;

        document.querySelector('.slider-after').style.width = x + 'px';
        });    
} 

slider();