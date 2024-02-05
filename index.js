let homePoints = document.getElementById("home-points-el");
let guestPoints = document.getElementById("guest-points-el");
let homePointsNum = 0;
let guestPointsNum = 0;

function homeAdd1() {
    homePointsNum += 1;
    homePoints.textContent = homePointsNum;
}

function homeAdd2() {
    homePointsNum += 2;
    homePoints.textContent = homePointsNum;
}

function homeAdd3() {
    homePointsNum += 3;
    homePoints.textContent = homePointsNum;
}

function guestAdd1() {
    guestPointsNum += 1;
    guestPoints.textContent = guestPointsNum;
}

function guestAdd2() {
    guestPointsNum += 2;
    guestPoints.textContent = guestPointsNum;
}

function guestAdd3() {
    guestPointsNum += 3;
    guestPoints.textContent = guestPointsNum;
}