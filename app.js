//set initial count 
let count = 0;
const btns = document.querySelectorAll('.btn');
//console.log(btns);
const myValue = document.getElementById('value');

//EVENT LISTENERS
btns.forEach(function (btn) {
    //console.log(btn)
    btn.addEventListener('click', function (e) { //e is an event object which has properties like current target
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('reset')) {
            count = 0;

        } else {

            count++;
        }
        if (count > 0) {
            myValue.style.color = 'green';
        } else if (count < 0) {
            myValue.style.color = 'red';
        } else myValue.style.color = '#222';
        myValue.textContent = count;
    });
});