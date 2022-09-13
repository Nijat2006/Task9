function Show() {
    var value = document.getElementById('inp').value
    var text = document.getElementById('uname')
  text.innerHTML = value
  text.style.fontSize = value
  alert( 'DANGEROUS')
}

function Calculate(){
  let one = document.getElementById('onein').value;
let second = document.getElementById('secondin').value
}


function Count(){
  let res = 1;

  for(let i = 11; i < 15; i++){
    res*=i;
  }
  return res;
}



console.log(Count());
