// 12 hour to US Military Time converter
function convertTimeUS(String) {
    let AM = String.includes("AM");
    let PM = String.includes("PM");
    if (AM == true) {
        let timE = String.replace("AM", "");
        timE = timE.replace(":", "");
        timE = +timE
        let Time = timE
        if (timE < 1000) {
            timE = timE.toString();
            timE = "0" + timE;
            Time = timE;
        }
        console.log(Time);
    }
    else if (PM == true) {
        let time = String.replace("PM", "");
        time = time.replace(":", "");
        Time = +time;
        Time += 1200;
        console.log(Time);
    }
    else {
        console.log("The value you entered isn't valid or is already in the 24h time or US military time format.");
    }
}
// Example
convertTimeUS("11:34 AM");
// Expected result is 1134
