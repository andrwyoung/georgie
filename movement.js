window.onload = docReady()

function leftArrowPressed() {
    var element = document.getElementById("man");
    var body = document.getElementById("body");
    element.style.left = parseInt(element.style.left || 0) - 15 + 'px';
    element.style.transform = 'scaleX(-1)'
    let positionX = parseInt(element.style.backgroundPositionX || 0)
    if( positionX < -128) {
      element.style.backgroundPositionX =  '0px'
    }
    else {
      element.style.backgroundPositionX = positionX - 32 + 'px'
    }
    body.style.backgroundPositionX = parseInt(body.style.backgroundPositionX || 0) + 10 + 'px'
}

function rightArrowPressed() {
    var element = document.getElementById("man");
    var body = document.getElementById("body");

    element.style.transform = 'scaleX(1)'
    element.style.left = parseInt(element.style.left || 0) + 15 + 'px';
    let positionX = parseInt(element.style.backgroundPositionX || 0)
    if( positionX < -128) {
      element.style.backgroundPositionX =  '0px'
    }
    else {
      element.style.backgroundPositionX = positionX - 32 + 'px'
    }
    body.style.backgroundPositionX = parseInt(body.style.backgroundPositionX || 0) - 10 + 'px'
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
    }
}

function docReady() {
    for (let i = 0; i < 20; i++) {
      var tree = document.createElement("div");
      tree.setAttribute('id', 'tree')

      tree.style.left = (Math.floor(Math.random() * Math.floor(50))) + '%';

      tree.style.zIndex = (Math.floor(Math.random() * Math.floor(6))) + 7;
      document.body.insertBefore(tree, document.getElementById('block'))
    }
    window.addEventListener("keydown", moveSelection);
}
