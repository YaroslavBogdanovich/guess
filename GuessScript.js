var number = Math.floor(100*Math.random()) + 1;
console.log(number);
var count = 9;

document.getElementById('check').onclick = function() {
    if (count > 0) {
        var inptnum = document.getElementById ('inputNum').value;
        inptnum = parseInt(inptnum);
        var out = document.getElementById ('show');

        if (inptnum == number) {
            out.innerHTML = 'Вы угадали';
            if (confirm("Очень хорошо! Попробуете снова")) {
                location.reload();
              } else {
                alert("увы");
              }
        } 

        if (inptnum < number) {
            out.innerHTML = 'Неправильно! число больше';
        }

        if (inptnum > number) {
            out.innerHTML = 'Нет! число меньше';
        }
        
        document.getElementById ('tries').innerHTML = 'Осталось попыток: '+ count;
        count = count - 1;
    }
     else {
        if (confirm("LOSE TRY AGAIN")) {
              location.reload();
            } else {
              alert("YOU LOSE");
            }
    
     }
     

}