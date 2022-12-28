function insert(num){
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean(){
    document.getElementById('result').innerHTML = '';
}

function calculate(){
    let resultado = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(resultado);
    } else{
        document.getElementById('result').innerHTML = String('0');
    }
}