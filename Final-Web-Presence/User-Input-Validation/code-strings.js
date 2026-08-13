function doFunction() { //wrap it in entire function, just like how i would do doing so with apple swift in middle school
    const fname = document.getElementById('fname').value; //define first name
    const lname = document.getElementById('lname').value; //define last time
    const Zcode = document.getElementById('Zcode').value; //define the zip code so all 3 varibles are defined
    const dehide = document.getElementById("HIDEME") //ironic how it is called HIDEME, when i failed putting a hidden html attribute, since we cant do actionlisteners
    const combinedname = fname + " " + lname //combine first name and last name
    let ifstatementtriggered = false; //we use let for some reason, because const means the value must never change, also defines a varible named "ifstatementtriggered" and it sets it to false
    if (combinedname.length > 20) { //so if combined name is greater than 30, display a message, and return
        console.log("WARNING, First/Lastname TOO BIG!"); //Too Big? Yeah you heard it!
        dehide.innerHTML = "Make sure You are not making First/Lastname Too big! Reload the browser to restart!" //what gets shown instead of the console
        ifstatementtriggered = true; //uh oh, its true now
        return //halt
    } 
    if (!/^\d{5}$/.test(Zcode)) { //that weird series of symbols there is so i dont have do define what "num" means, and not have to worry about "num" not being defined. it checks exactly 5 digits without using some range
        console.log("bruh"); //bruh meaning "bruh, the code did that, aka bad"
        dehide.innerHTML = "Make sure You are entering a valid zip code! Reload the browser to restart!" //what gets shown instead of the console
        ifstatementtriggered = true; //uh oh, its true now
        return //halt
    }
    if (!ifstatementtriggered) { //checks if the if "let ifstatementtriggered = false;" is still "false", for some reason.
        dehide.innerHTML = "Suprise! You have given the cat a treat!" //looks like you fed the cat all along!
    } else { //else statement
        return //should generally not return or crash the program, but i added this here just to be safe
    }
}
    ////PEMDBC. Please Excuse My Dear Broken Code. You could say these were me raging getting the code to work
    //if (Zcode.length == 5) {
    //    console.log("WARNING, First/Lastname TOO BIG!");
    //}
    //if (combinedname && combinedname2 == true) {
    //    combinedname.InnerHTML = document.getElementById('TheHiddenOne')
    //} else {
    //    throw
    //}
