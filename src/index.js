console.log('Hello Webpack Project.');


var button = document.getElementById('button').addEventListener('click', showText);

function showText(){
    
    var p =document.createElement('p');
    var ptext =document.createTextNode('it worked!');
    p.appendChild(ptext);
    document.getElementById('hiddenMessage').appendChild(p)
}




