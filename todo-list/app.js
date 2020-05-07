// Select the elements
const clear = document.querySelector(".clear")
const dateElement = document.getElementById("date")
const list = document.getElementById("list")
const input = document.getElementById("input")

// Classes names
const CHECK = "far fa-check-circle"
const UNCHECK = "fa fa-circle"
const LINE_THROUGH = "lineThrough"

// Show today's date
const options = {weekday: "long", month: "short", day: "numeric"}
const today = new Date()

dateElement.innerHTML = today.toLocaleDateString("en-US", options)