let leftImg = 0, numberImg = 1, widthCaruesel, widthCarueselWrapper
function clickLeftSlider(param) {
    if ((numberImg - param) > 1) clickImg(numberImg - param)
    else clickImg(1)
    if ((54 - numberImg) * 75 > widthCarueselWrapper) {
        leftImg = (numberImg - 1) * (-75)
        document.getElementById('imgs').style.left = leftImg +'px'
    }
}
function clickRightSlider(param) {
    widthCaruesel = document.getElementById('imgs').offsetWidth
    widthCarueselWrapper = document.getElementById('imgWrapper').offsetWidth
    console.log(widthCaruesel);
    console.log(widthCarueselWrapper);
    if ((numberImg + param) < 54) {
        clickImg(numberImg+param)
    } else clickImg(54)
    if ((numberImg * 75) > widthCarueselWrapper) {
        leftImg = (numberImg - 1) * (-75)
        document.getElementById('imgs').style.left = leftImg +'px'
    }
    if (((54 - (numberImg)) * 75) < widthCarueselWrapper) {
        document.getElementById('imgs').style.left=(widthCaruesel-widthCarueselWrapper)*(-1)+ 'px'
    }
}
function clickImg(numberClickImg) {
    document.getElementById('img' + numberImg).classList.remove('checked')
    numberImg = numberClickImg
    document.getElementById('img' + numberImg).classList.add('checked')
    document.getElementById('viewer').style.backgroundImage = 'url(img/slider_img2/' + numberImg +'.jpg)'
}
function viewerClickLeft() {
    if ((numberImg - 1) > 0) {
        clickImg(numberImg - 1)
    }
}
function viewerClickRight() {
    if ((numberImg + 1) < 55) {
        clickImg(numberImg + 1)
    }
}
