function toggleLight() {
    let lightbulb = document.getElementById("lightbulb");
    if (lightbulb.src.includes("media/onNew.png")) {
        lightbulb.src = "media/offnew.png";
    } else {
        lightbulb.src = "media/onNew.png";
    }
}
