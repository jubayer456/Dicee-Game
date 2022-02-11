var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var ran1 = 'images/dice' + randomNumber1 + '.png';
var ran2 = 'images/dice' + randomNumber2 + '.png';
document.getElementsByClassName('img1')[0].setAttribute('src', ran1);
document.getElementsByClassName('img2')[0].setAttribute('src', ran2);
if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName('h1')[0].innerText = '🚩 player 1 wins!';
}
else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName('h1')[0].innerText = 'player 2 wins! 🚩';
}
else {
    document.getElementsByTagName('h1')[0].innerText = 'Dreaw!';
}
