const sumar = document.getElementById('sum');
const resta = document.getElementById('rest');
const reinicio = document.getElementById('reset');
const mult = document.getElementById('mult');
const div = document.getElementById('div');

sumar.onclick = function(){
    var valueA = parseInt(document.getElementById('valueA').value);
    var ValueB = parseInt(document.getElementById('valueB').value);
    var result = document.getElementById('result');

    var resultado = valueA + ValueB;

    result.textContent = resultado;

}

resta.onclick = function(){
    var valueA = document.getElementById('valueA').value;
    var ValueB = document.getElementById('valueB').value;
    var result = document.getElementById('result');

    
    var resultado = valueA - ValueB;

    result.textContent = resultado;

}

div.onclick = function(){
    var valueA = document.getElementById('valueA').value;
    var ValueB = document.getElementById('valueB').value;
    var result = document.getElementById('result');

    
    var resultado = valueA / ValueB;

    result.textContent = resultado;

}

mult.onclick = function(){
    var valueA = document.getElementById('valueA').value;
    var ValueB = document.getElementById('valueB').value;
    var result = document.getElementById('result');

    
    var resultado = valueA * ValueB;

    result.textContent = resultado;

}

reinicio.onclick = function(){
    var result = document.getElementById('result');
    var inputA = document.getElementById('valueA');
    var inputB = document.getElementById('valueB');

    inputB.value = "";
    inputA.value = "";
    result.textContent = "";
}