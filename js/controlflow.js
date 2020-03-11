// Control Flow

// Ternary Operator
// Condition ? true : false;

function isUserValid(bool){
    return bool
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

// Switch Statement
// Break - break out from that point
function moveCommand(direction){
    var whatHappens;

    switch(direction){
        case "forward":
            whatHappens = "You move forward";
            break;
        case "back":
            whatHappens = "You move backward";
            break;
        case "right":
            whatHappens = "You move right";
            break;
        case "left":
            whatHappens = "You move left";
            break;
        default:
            whatHappens = "Not valid direction";
    }

    return whatHappens;
}