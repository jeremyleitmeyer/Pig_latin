function pigLatinize(input){
  const vowels = ["a", "e", "i", "o", "u"];
  sliceIndex = 0;
  while(!vowels.includes(input[sliceIndex])) {
    sliceIndex++;
  }
  return input.slice(sliceIndex) + input.slice(0, sliceIndex) +"ay";
}

var button = document.querySelector("button")

button.addEventListener("click", function(){
  var input = document.querySelector("input").value
  var resultsContainer = document.getElementById("results_container")
  var results = document.getElementById("results")

results.innerText = pigLatinize(input) 
  resultsContainer.classList.remove("hidden")
  
})