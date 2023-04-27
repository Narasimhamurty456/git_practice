// get a random number between 1 and 12
const getRand = Math.floor(Math.random()*13);
console.log(getRand);

// map the random number to corresponding horo-sign

const horoscopeObj = {
    signs: ["Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"],
    results: ['You will experience a sudden shift in your perspective today',
        'You may receive a gift or a surprise today',
        'You will meet someone who will become an important part of your life today',
        'You may find yourself in a situation that requires you to be diplomatic today',
        'Your hard work and dedication will pay off today',
        'You will have an opportunity to learn something new today',
        'You will be faced with a difficult decision today',
        'You may need to take some time for self-care today',
        'Your creativity and imagination will be heightened today',
        'You may be feeling more serious and focused than usual today',
        'You may feel a strong urge to break free from routine today',
        'You may have a deep realization about yourself or your life path today'],
        reactions: ['Be visilent',
        'Enjoy the day',
        'Make love',
        'Be mindful',
        'Congratulations',
        'Learning is growing',
        'Make your own decision wisely',
        'Take self care',
        'Be creative and make change',
        'Stay focussed',
        'Do something different',
        'Dont get dissappointed keep rocking']
};

// function that accepts a random number and returns the result

const horoscopeToDay = num => {
    const indexArr = num;
    const sign = horoscopeObj.signs[indexArr];
    const result = horoscopeObj.results[indexArr];
    const reaction = horoscopeObj.reactions[indexArr];
    return `Hey your horoscope sign is ${sign} and horoscope result for  ${sign} is  ${result}, you should ${reaction}`;
    
}
const myHoroscope = horoscopeToDay(getRand);
console.log(myHoroscope);