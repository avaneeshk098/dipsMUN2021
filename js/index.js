const toggleButton = document.getElementById("burger")
const navbar = document.getElementById("menu")

toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("active")
})

let currDate = new Date()
let eventDate = new Date(2021, 5, 7, 22, 0, 0);
setInterval(() => {
    currDate = new Date()
    let delta = eventDate.getTime() - currDate.getTime();
    if (delta > 0) {
        days = Math.floor(delta / (1000 * 3600 * 24));
        hours = Math.floor(delta % (1000 * 3600 * 24) / (1000 * 3600))
        minutes = Math.floor(delta % (1000 * 3600) / (1000 * 60))
        seconds = Math.floor(delta % (1000 * 60) / (1000))
        document.getElementById("days").innerHTML = days
        document.getElementById("hours").innerHTML = hours
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("seconds").innerHTML = seconds
    } else {
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "Event"
        document.getElementById("minutes").innerHTML = "Started!"
        document.getElementById("seconds").innerHTML = ""
        let items = document.getElementsByClassName("timer__daysd")
        for (let i = 0; i < items.length; i++) {
            items[i].classList.add("disabled")
        }
    }
}, 1000)