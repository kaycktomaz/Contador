 var num = document.querySelector('input#num')
 var lis = document.querySelector('select#lista')
 var res = document.querySelector('div#res')
 var valores = []

 function isnumero(n){
    if(Number(n) >=1  && Number(n) <= 100){
        alert('tudo OK')
        return true
    } else {
        return false 
    }


 }

 function nalista(n, l) {
    if (l,indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
 }




 function adicionar() {
    if ( isnumero(num.value) && !nalista(num.value, valores)) {
       
    } else {
        alert ('Valor ja existente ou inválido na lista')
    }
  

 }