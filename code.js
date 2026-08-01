function doFunction() { //do function, self explainatory, wrapping it in a function again
    const Words1 = document.getElementById(`Words`).value; //using template literals is something i wanted to use, and it works. this one defines a const named Words1
    const FIXED = Words1.toLowerCase().replace(/[^a-z0-9]/g, ''); //FIXED is the regex pattern for toLowerCase and then replacing it, also removing spaces
    const INVERSIONS = FIXED.split('').reverse().join(''); //we then call put fixed in a const value named INVERSIONS which basically splits and reverse the text to check if its a plaindrome
    if (FIXED == "") { //check to make sure your not just entering blank text
        document.getElementById(`whatistheresult`).innerHTML = "Enter Some text please!" //bruh, yeah this happens
        doFunction(); //try again by repeating
    }
    if (FIXED == INVERSIONS) { //so if FIXED is checking against strictly double equals to INVERSIONS
        document.getElementById("whatistheresult").innerHTML = `We got the plaindrome for "${Words1}"` //words1 victory!
        setTimeout(() => { //setTimeout to clear these two value 1 and value 2
            document.getElementById("Words").value = ""; //value 1 
            document.getElementById("whatistheresult").innerHTML = ""; //value 2
        }, 2000); //but hey! it replaces a for loop!
    } else { //otherwise
        document.getElementById("whatistheresult").innerHTML = `We dont got the plaindrome for "${Words1}"` //words1 Defeat message!
        setTimeout(() => { //settimeout to clear these two value 1 and value 2
            document.getElementById("Words").value = ""; //value 1 
            document.getElementById("whatistheresult").innerHTML = ""; //value 2
        }, 2000); //but hey! it replaces a for loop!
    } 

}