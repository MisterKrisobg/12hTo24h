function convertTime(String) {
    /*Thinking about adding wider acceptance   E.g.
    if (String.includes("AM") === true || String.includes("A.M.") === true || String.includes("am") === true || String.includes("a.m.") === true) {
        var AM = true
    }
    else if (String.includes("PM") === true || String.includes("P.M.") === true || String.includes("pm") === true || String.includes("p.m.") === true){
        var PM = true
    } Then again, I suppose it isn't really nessecary since if it is used it will most likely employ a selection dropdown to pick am or pm
    */
    let AM = String.includes("AM");
    let PM = String.includes("PM");
    // For Ante-Merridian (Sun hasn't went past the merridian yet AKA before noon)
    if (AM == true) {
        let time = String.replace("AM", "");
        time = time.replace (":", "");
        Time = +time
        if (Time <1300) {
            if (Time >= 1200) {
                Time -= 1200;
                Time = Time.toString();
                Time = Time.padStart(2, "0")
                Time = "00:" + Time
                console.log(Time);
            }
                else if (Time >= 1000 && Time <= 1159) {
                Time = Time.toString();
                T = ":" + time.slice(2, 4);
                Time = Time.slice(0, 2) + T;
                console.log(Time);
            }
            else {
                Time = Time.toString();
                T = ":" + time.slice (1, 3);
                Time = Time.slice (0, 1) + T;
                console.log(Time);
            }
        }
        else {
            console.log("Invalid input.");
        }
    }

    // For Post-Merridian (Sun has went past the middle of the merridian AKA afternoon)
    else if (PM == true) {
        let time = String.replace("PM", "");
        time = time.replace (":", "");
        time = +time
        if (time < 1300) {
            if (time >= 1200) {
                time = time.toString();
                Time = time.toString();
                T = ":" + time.slice(2, 4);
                Time = Time.slice(0, 2) + T;
                console.log(Time)
            }
            else {
                time += 1200
                time = time.toString();
                Time = time.toString();
                T = ":" + time.slice(2, 4);
                Time = Time.slice(0, 2) + T;
                console.log(Time)
            }
        }
        else {
            console.log("Invalid input.");
        }
    }
    else {
        console.log("The value you entered isn't valid or is already in the 24h time format.");
    }
}
// Example 
convertTime("11:59 AM")
// Expected result is 23:59

