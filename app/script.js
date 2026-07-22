function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateMetrics() {

    const cpu = randomValue(20, 90);
    const memory = randomValue(30, 85);
    const disk = randomValue(40, 95);

    document.querySelector(".cpu").style.width = cpu + "%";
    document.querySelector(".memory").style.width = memory + "%";
    document.querySelector(".disk").style.width = disk + "%";

    document.querySelector(".cpu").innerHTML = cpu + "%";
    document.querySelector(".memory").innerHTML = memory + "%";
    document.querySelector(".disk").innerHTML = disk + "%";
}

function updateTime() {

    const now = new Date();

    const time = now.toLocaleTimeString();

    let clock = document.getElementById("clock");

    if(clock){

        clock.innerHTML = time;

    }

}

setInterval(updateMetrics,3000);

setInterval(updateTime,1000);

updateMetrics();

updateTime();
