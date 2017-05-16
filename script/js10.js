btnAdd.addEventListener("click", function () {
    var text = document.getElementById("text");
   var lista = document.getElementById("lista");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(text.value));
    lista.appendChild(li);
    text.value = "";
})
btnDelete.addEventListener("click", deleteElement)
btnChange.addEventListener("click", changeText);
lista.addEventListener("click", listClick);
var select;
function listClick(e) {
    select = e.target;
    var text = document.getElementById("text")
    text.value = e.target.innerHTML;
    e.target.style.backgroundColor = 'red';
}
function changeText() {
    var text = document.getElementById("text");
    select.innerHTML = text.value;
    select.style.backgroundColor = "green";
}
function deleteElement() {
    lista.removeChild(select);
}
