console.log("Js loaded")

console.log(
    document.querySelector("div.first-div").innerText,
    "\n",
    document.querySelector("div.first-div + div").innerText
)

const firstDiv = Array.from(document.getElementsByClassName("first-div"))

console.log("firstDiv", firstDiv.length)


firstDiv.forEach(console.log);

const divs = Array.from(document.querySelectorAll("div"));

console.log(divs.length)

divs.forEach(console.log)

const secondDiv = document.getElementById("second-div")

console.log("SeCoNd: ",secondDiv)

// --------------- test for equality---------

const cards = Array.from(document.getElementsByClassName("card"))
console.log(
    divs[0] === cards[0]
)





// ----------------------selecting on a branch (element inside document) --------------

// document.getElementsByTagName("div")[0].querySelector("p")
console.log("chain: ", divs[0].querySelector("p"))
