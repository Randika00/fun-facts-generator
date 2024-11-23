function generateFunFact() {
    const funFacts = [
        'Did you know that honey never spoils?',
        'Bananas are berries, but strawberries aren’t.',
        'A group of flamingos is called a "flamboyance".',
        'Octopuses have three hearts.',
        'The Eiffel Tower can be 15 cm taller during the summer.',
        'A day on Venus is longer than a year on Venus.',
        'Wombat poop is cube-shaped.',
        'There are more stars in the universe than grains of sand on all the world’s beaches.',
        'A bolt of lightning contains enough energy to toast 100,000 slices of bread.',
        'The unicorn is the national animal of Scotland.',
        'A single strand of spaghetti is called a "spaghetto".',
        'The inventor of the frisbee was turned into a frisbee after he died.',
        'Cows have best friends and get stressed when separated.',
        'The heart of a shrimp is located in its head.',
        'Sloths can hold their breath longer than dolphins can.',
        'A jiffy is an actual unit of time: 1/100th of a second.',
        'Butterflies taste with their feet.',
        'The longest wedding veil was longer than 63 football fields.',
        'Some cats are allergic to humans.',
        'The inventor of the Pringles can is now buried in one.',
		'Sharks existed before trees were a thing.',
		'There’s a species of jellyfish that can technically live forever.'
    ];
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    
    const randomFunFact = funFacts[randomIndex];
    const funFactsDisplay = funFacts.join('\n');
    document.getElementById('funFact').innerText = randomFunFact;
}