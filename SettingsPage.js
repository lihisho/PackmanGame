    /* Present rangeSlider value dynamically*/
    function showRangeSliderValue(val) {
        $('.range-slider span').text(val);
    }

    function catchUserChoise(button){
            button.addEventListener("keydown", function (e) {
                $("#key"+button.value).text(e.code);
            }, false);
    }

    function randomizeAll(){
        //randomize number of balls
        let randomNumOfBalls =50+ Math.floor(Math.random()*40);
        $('.range-slider span').text(randomNumOfBalls);
        $('.range-slider input[type=range]').val(randomNumOfBalls);
        //randomize balls color
        let firstColor=getRandomColor();
        $('input[name=5ptColor]').val(firstColor);
        let secondColor=getRandomColor();
        while(firstColor === secondColor)
            secondColor=getRandomColor();
        $('input[name=15ptColor]').val(secondColor);
        let thirdColor=getRandomColor();
        while(thirdColor === firstColor || thirdColor === secondColor)
            thirdColor=getRandomColor();
        $('input[name=25ptColor]').val(thirdColor);
        //randomize number of monsters
        let $options = $('select[name=numMonsters]').find('option'),
            random=Math.floor(Math.random() * $options.length)+1;
        $('select[name=numMonsters]').val(random);
        //randomize Game duration
        $('input[name=gameTime]').val(Math.floor(Math.random()*60)+60);
        //randomize Game keys
        $('#keyUp').text("ArrowUp");
        $('#keyDown').text("ArrowDown");
        $('#keyRight').text("ArrowRight");
        $('#keyLeft').text("ArrowLeft");
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function activateGame(){
        Start();
        toggle('Game');
    }
