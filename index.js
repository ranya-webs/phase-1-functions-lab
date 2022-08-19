/* 
* This function takes in a pickup location for a passenger, and returns the number of
blocks from Scuber headquarters on 42nd Street.
* It also calculates the distance left to reach the 42nd street when the passenger enters a number
below 42.
*/
function distanceFromHqInBlocks(currentLocation) {
    return currentLocation >= 42 ? currentLocation - 42 : 42 - currentLocation;
}

/*
* This function translates the number of blocks from headquarters to the distance in feet. 
* Each block in Manhattan is 264 feet long.
 */
function distanceFromHqInFeet(currentLocation) {
    return distanceFromHqInBlocks(currentLocation) * 264;
}


/*
* This function takes in both the start and destination blocks, and returns the number of feet travelled.
* It also returns the distance in feet needed to reach the destination if the start number is greater than the
destination number.
 */
function distanceTravelledInFeet(start, destination) {
    return destination > start ? (destination - start) * 264 : (start - destination) * 264;
}


/*

 * This function is given the same starting and ending block as the distanceTravelledInFeet function. 
 * The first four hundred feet are free.
 * For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). 
 * A flat fare for a distance over 2000 feet and under 2500 feet is charged.
 *the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

 */
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if(distance > 2500) {
        return "cannot travel that far"
    } else {
        if(distance <= 400) {
            return 0;
        } else if(distance > 400 && distance <= 2000) {
            return (distance - 400) * 0.02;
        } else if(distance > 2000) {
            return 25;
        }
    } 
}