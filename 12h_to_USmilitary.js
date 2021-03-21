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
            console.log(Time);
        }
        else if (timE >= 1200 && timE <=1259) {
            timE = timE.toString();
            timE = timE.slice(2, 4);
            timE = "00" + timE;
            Time = timE;
            console.log(Time);
        }
        else if (timE > 1259){
            console.log("Invalid time entered.")
        }
    } 
    else if (PM == true) {
        let time = String.replace("PM", "");
        time = time.replace(":", "");
        Time = +time;
        if (Time <= 1159) {
            Time += 1200;
            console.log(Time);
        }
        else if (Time >=1200 && Time <= 1259) {
            console.log(Time);
        }
        else {
            console.log("Invalid time entered.")
        }
    }
    else {
        console.log("The value you entered isn't valid.");
    }
}
// Example
convertTimeUS("11:34 AM");
// Expected result is 1134
