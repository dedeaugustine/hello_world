"use scripts"


//create some variables we need for our calculations

//this is the hourly rate for the employee
let payRate = 12.50;
let hoursWorked = 25;

//determine how many hours are normal hours vs overtime hours
let regularHours = 0;
let overtimeHours = 0;

//if the hours are greater than 40, we know they worked overtime
if (hoursWorked > 40) {
    //this is where we need to figure out the overtime hours
    regularHours = 40;
    overtimeHours = hoursWorked - regularHours;
}esle{
    //code for folks who didn't work overtime
    regularHours = hoursWorked;
}

//create some variables to represent the normal pay and the overtime pay
let normalPay = payRate * regularHours;
let overtimePay = (payRate * 1.5) * overtimeHours;

//figure out what we got pay after normal and overtime hours (pay before taxes)
let grossPay = normalPay + overtimePay;

//display the result to the user
console.log("I got paid $" + normalPay + "for my regular hours");
console.log("I got paid $" + overtimePay + "for my overtime hours");
console.log("I got paid $" + grossPay + "for my gross pay");