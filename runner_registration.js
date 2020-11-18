let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;// registration of contestant

let runnerAge = 18; //age of contestant

if (registeredEarly && runnerAge) {
    console.log (raceNumber += 1000);
} else {
    console.log (false);
}

if (registeredEarly && runnerAge > 18) {
    console.log (`${raceNumber} will start the race at 9:30 am.`);
} else if (runnerAge > 18 && !registeredEarly) {
    console.log (`${raceNumber} will start the race at 11:00 am.`);
} else if (runnerAge < 18) {
    console.log (`${raceNumber} will start the race at 12:30 am.`)
} else if (runnerAge === 18) {
    console.log (`${raceNumber} to see the registration desk.`)
}

function printAge (runnerAge) {
    switch (runnerAge) {
        case runnerAge > 18:
            console.log('You are old.');
            break;
        case 18:
            console.log('You are exactly 18 years old.');
            break;
        case 21:
            console.log('You are older that 18');
            break;
        default:
            console.log('We cannot define your age.');
    }

}
printAge (16);