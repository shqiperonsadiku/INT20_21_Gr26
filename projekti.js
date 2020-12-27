function BMI() {
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
    var bmi = w / (h / 100 * h / 100);
    var bmio = (bmi.toFixed(2));

    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
}

document.getElementById('button-bmi').addEventListener('click',
    function () {
        document.querySelector('.pop-up-bmi').style.display = 'flex';
    });

    document.querySelector('.close').addEventListener('click',
    function(){
   document.querySelector('.pop-up-bmi').style.display = 'none';
   });