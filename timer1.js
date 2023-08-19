/*
Challenge
Implement an alarm clock / timer which will beep after a specified amount of
time has passed. The user can specify an unlimited number of alarms using command
line arguments

Example usage:
node timer1.js 10 3 5 15 9 

This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

For this app, we can think of at least these three:

1. No numbers are provided: Easy. It should just not beep at all and end immediately
since no beeps should get scheduled.
2. An input is a negative number: Ignore/skip any numbers that are negative.
We can't schedule anything in the past.
3. An input is not a number: Ignore/skip these as well, instead of attempting to
call setTimeout with a non-number.

*/

process.stdout.write('\x07');

const arguments = process.argv.slice(2);

const timer = function(arguments) {
    for (const argument of arguments) {
        // if argument is greater than zero + is a number 
        if (argument > 0 && !isNaN(argument)) {
            // set timer to beep after argument seconds
        setTimeout(() => {
            process.stdout.write('\x07');
        }, argument * 1000);
        // if argument is negative/less than zero, or not a number
        } else {
            // skip argument
        continue;
        }
    }
};

timer(arguments);
