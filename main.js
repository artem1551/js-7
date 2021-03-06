window.addEventListener('load', function() {
    const number = document.querySelector('[type="number"]');
    const slider = document.querySelector('[type="range"]');
    const red = document.querySelector('.block_red');
    const green = document.querySelector('.block_green');

    slider.addEventListener('mousedown', function () {
        this.addEventListener('mousemove', change);
        slider.addEventListener('mouseup', refresh);
    });
    const val = +(slider.max);

    number.addEventListener('blur', function () {
        slider.value = this.value;
        diagremmaGreen (slider.value, green);
        diagrammaRed (slider.value, red);
    });

    number.addEventListener('click', function () {
        slider.value = this.value;
        diagremmaGreen (slider.value, green);
        diagrammaRed (slider.value, red);
    });
    
    function change() {
        number.value = this.value;
        diagremmaGreen (number.value,green);
        diagrammaRed (number.value,red);
    }

    function refresh() {
        slider.removeEventListener('mousemove', change);
    }

    function diagremmaGreen (value, block) {
        block.style.height = value + 'px';
    }

    function diagrammaRed(value, block) {
        if (value > 0 && value <= 20 ) {
            block.style.height = commission(val, 2) + 'px';
        } 
        else if (value > 20 && value <= 50) {
            block.style.height = commission(val, 4) + 'px';
        } 
        else if (value > 50 && value <= 75) {
            block.style.height = commission(val, 6) + 'px';
        } 
        else if (value > 75 && value <= 100){
            block.style.height = commission(val, 8) + 'px';
        }
    }

    function commission(val, percent){
        let result = val/100*percent;
        return result
    }
})