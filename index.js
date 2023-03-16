// Code your solution in this file!
const distanceFromHqInBlocks = function(num){
    if (num >=42){
        return num-42;
    } else {
        return 42 - num;
    }
}

const distanceFromHqInFeet = function(num){
    let blocks = distanceFromHqInBlocks(num);
    return blocks*264;
}

const distanceTravelledInFeet = function(start, destination){
    if (destination >= start){
        return (destination - start)*264;
    } else {
        return (start - destination)*264;
    }
}

const calculatesFarePrice = function(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start,destination) >= 400 && distanceTravelledInFeet(start,destination) < 2000){
        return Math.round((distanceTravelledInFeet(start,destination)*0.02 - (8))*100)/100;
    } else if (distanceTravelledInFeet(start,destination) >= 2000 && distanceTravelledInFeet(start,destination) < 2500){
        return 25;
    } else {
        return "cannot travel that far";
    }
}