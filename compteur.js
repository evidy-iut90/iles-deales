var count = 0;
var counterElement = document.getElementById('counter');

function increment() {
    count++;
    counterElement.innerHTML = count;
}

function decrement() {
    if (count > 0) {
        count--;
        counterElement.innerHTML = count;
    }
}