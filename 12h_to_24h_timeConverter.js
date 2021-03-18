
function convertTime(String) {
    let AM = String.includes("AM");
    let PM = String.includes("PM");
    if (AM == true) {
        let Time = String.replace("AM", "");
        console.log(Time)
    }
    else if (PM == true) {
        let time = String.replace("PM", "");
        time = time.replace (":", "");
        time = +time
        time += 1200
        time = time.toString();
        Time = time.toString();
        T = ":" + time.slice(2, 4);
        Time = Time.slice(0, 2) + T
    }
    else {
        console.log("The value you entered isn't valid or is already in the 24h time format");
    }
    console.log(Time)
}
// Example
convertTime("1:39 PM")
// Result is 13:39
