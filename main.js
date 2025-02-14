const decreseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document.getElementById('reset-btn');
const h1=document.getElementById('my-h1');
 let counter = 0;

 decreseBtn.onclick= function() {
    counter--;
    h1.textContent = counter;
 }
 increaseBtn.onclick= function() {
    counter++;
    h1.textContent = counter;
 }
 resetBtn.onclick= function() {
    counter=0;
    h1.textContent = counter;
 }

