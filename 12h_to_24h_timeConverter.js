function convertTime(input) {
    /* REMINDER: Thinking about adding wider acceptance   e.g.
    if (input.includes("AM") === true || input.includes("A.M.") === true || input.includes("am") === true || input.includes("a.m.") === true) {
        var AM = true
    }
    else if (input.includes("PM") === true || input.includes("P.M.") === true || input.includes("pm") === true || input.includes("p.m.") === true){
        var PM = true
    } Then again, I suppose it isn't really nessecary since if it is used it will most likely employ a selection dropdown to pick am or pm
    */
    let AM = input.includes("AM");
    let PM = input.includes("PM");
    // Input check
    if (!AM && !PM) {
        console.log("Make sure the value you enter contains AM or PM.");
        return;
    }
    if (AM && PM) {
        console.log("Make sure the value you enter does not contain both AM or PM.");
        return;
    }
    // For Ante Meridiem 
    if (AM) {
        // Removes time formatting so the value can be turned into an int
        // and then have its validity verified
        let time = input.replace("AM", "");
        time = time.replace (":", "");
        time = +time;
        // AM and PM can't go past 12:59 (i.e. in this case 1259)
        if (time >= 1300 || time <= 59) {
            console.log("Invalid input.");
            return;
        }
        // In my code 12:00 - 12:59 AM is 00:00 - 00:59 in the 24h format
        if (time >= 1200) {
            time -= 1200;
            time = time.toString();
            time = time.padStart(2, "0")
            time = "00:" + time
         }
        else {
            time = time.toString();
            time = time.slice(0, (time.length - 2)) + ":" + time.slice((time.length - 2), time.length);
        }
        console.log(time);
        return time;
    }
    // For Post Meridiem
    else if (PM) {
        // Removes time formatting so the value can be turned into an int
        // and then have its validity verified
        let time = input.replace("PM", "");
        time = time.replace (":", "");
        time = +time;
        // AM and PM can't go past 12:59 (i.e. in this case 1259)
        if (time >= 1300 || time <= 59) { 
            console.log("Invalid input.");
            return;
        }
        if (!(time >= 1200 && time <= 1300)) {
        // adds 12 hours if time isn't 12 PM
        time += 1200;
        }
        time = time.toString();
        time = time.slice(0, (time.length - 2)) + ":" + time.slice((time.length - 2), time.length);
        console.log(time);
        return time;
    }
}
// Example 
convertTime("12:59 PM")
// Expected output is 23:59 
