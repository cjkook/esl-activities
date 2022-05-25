$(document).ready(function () {
  scramble(words);
});

let board = document.getElementById("board");
board.innerHTML = "test";

function scramble(arr) {
  let scrambled = [];
  let shuffled = arr
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  shuffled.forEach((w,i)=>{
    scrambled[i] = w.split('').sort(function(){return 0.5-Math.random()}).join('');

  })
  console.log(shuffled[0])
  makeCard(scrambled[0],shuffled[0]);
}

function makeCard(word,ans) {
  $("#board").html(`<div class="card w-50">
  <div class="card-body">
    <h3 class="card-title"><strong>${word}</strong></h3>
    <h4 class="card-text">${ans}</h4>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>`);
}
