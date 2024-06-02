const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    //const newLitext = document.createTextNode(fruitToAdd.value);
    //newLi.appendChild(newLitext);
    //newLi.className = 'fruit';
    //const delBtn = document.createElement('button');
    //const delBtnTxt = document.createTextNode('x');
    //delBtn.appendChild(delBtnTxt);
    //delBtn.className = 'delete - btn';
    //newLi.appendChild(delBtn);
    //fruits.appendChild(newLi)
    newLi.innerHTML = fruitToAdd.value + '<button class = "delete-btn">x<button>';
    fruits.appendChild(newLi)
});
fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDel= event.target.parentElement;
        fruits.removeChild(fruitToDel);
    };
});
