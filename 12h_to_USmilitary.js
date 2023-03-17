// 12 hour to US Military Time converter
function convertTimeUS(input) 
{
    let AM = input.includes("AM");
    let PM = input.includes("PM");
    if (!AM && !PM) 
    {
        console.log("Make sure the value you enter contains AM or PM.");
        return;
    }
    if (AM && PM) 
    {
        console.log("Make sure the value you enter does not contain both AM or PM.");
        return;
    }
    if (AM) 
    {
        // enables time's conversion into an int for validty checks
        let time = input.replace("AM", "");
        time = time.replace(":", "");
        time = +time;
        // AM and PM can't be above 12:59 or under 1:00
        if (time > 1259 || time <= 59) 
        {
            console.log("Invalid input");
            return;
        }

        if (time < 1000) 
        {
            time = time.toString();
            time = "0" + time;
        }
        // 12AM is interperted as 0000
        else if (time >= 1200) 
        {
            time = time.toString();
            time = time.slice(2, 4);
            time = "00" + time; 
        }
        console.log(time);
        return time;
    } 
    else if (PM) 
    {
        // enables time's conversion into an int for validty checks
        let time = input.replace("PM", "");
        time = time.replace(":", "");
        time = +time;
    // AM and PM can't be above 12:59 or under 1:00
        if (time > 1259 || time <= 59) 
        {
            console.log("Invalid input");
            return;
        }
        // Don't add 1200 if it's 12PM
        if (time <= 1159) 
        {
            time += 1200;
        }
        console.log(time);
    }
}
// Example
convertTimeUS("12:00 AM");
// Expected output: 1200
