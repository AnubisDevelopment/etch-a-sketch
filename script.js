
// For each iteration of loop, create element, add class, add styling (width and height),
//add hover effect, and append to parent container.
let containerDiv = document.querySelector('.container-div')

function createDivs(x) {
    containerDiv.innerHTML = ''
    for (let i = 0; i < x * x; i++){
        let div = document.createElement('div')
        //add class list to every div
        div.classList.add('div-elem')
        //create div element that is _ px size
        div.style.width = `${currentPixels}px`
        div.style.height = `${currentPixels}px`
        //hover effect over divs
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = 'blue'
        })
        containerDiv.appendChild(div)
    } 
}

//button prompting user how many pixels one side of grid should have
let buttonAmount = document.querySelector('.amountButton')

buttonAmount.addEventListener('click', function(){
    let value = prompt('Enter amount of pixels one side should have.', '')
    divPixels(value);
    value <= 100 ? createDivs(value) : alert('Number must be less than 100');
})

// container div is 960px and gap is 10px. Equation figures out div width & height
let currentPixels = 0
let divPixels = function getPixelSize(x){
    currentPixels = (960 - (x * 10)) / x;
}
