// Part 1 of the Joke

// document.getElementById("button-part1").classList.add("show");




// Part 2 of the Joke

document.getElementById("button-part2").classList.add("hide");
document.getElementById("joke-part2").classList.add("hide");
document.getElementById("button-part1").addEventListener("click", function() {

  document.getElementById("joke-part2").classList.add("show");
  document.getElementById("button-part2").classList.add("show");
});


//Part 3 of the Joke

document.getElementById("joke-part3").classList.add("hide");
document.getElementById("button-part2").addEventListener("click", function() {

  document.getElementById("joke-part3").classList.add("show");

});
