let container = document.querySelector('.container');
let firstId = document.getElementById('myfirst');
let divElem = document.createElement('div');
divElem.setAttribute('id', 'elem');
divElem.setAttribute('style', 'border: 2px solid red; width: 150px; margin: 10px height: 100px;');
let Text = document.createTextNode('This is my text node create using js')

divElem.appendChild(Text);
container.insertBefore(divElem, firstId);


// now add eventn listener
divElem.addEventListener('click', () => {
    let notextarea = document.getElementsByClassName('form-control').length;
 if(notextarea == 0){
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea">${html}</textarea>`
}

let textarea = document.getElementById('floatingTextarea');
textarea.addEventListener('blur', () =>{
    elem.innerHTML = textarea.value;
})
})