const Cinema = require('../src/Cinema');
const Film = require('../src/Film.js');
// variables Cinema and Film require a string that ends in /src/[variablename]. Require is a built in function used to load modules. It is a way to split applications into separate files. I think we are declaring a class here

describe('Cinema', () => {
    let moonlight;
    let bladeRunner;
    let dunkirk;
    let blackPanther;
    let trainspotting;
    let films;
    let cinema;

    // beforeEach runs before EACH test. An arrow function is also declared
    beforeEach(() => {
        // each variable receives an array/object signed to it. New creates a new and unique instance whenever it is used. I think we are using new here because we are using a class of "Film". Objects?
        moonlight = new Film('Moonlight', 'drama', 2016, 111);
        bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
        dunkirk = new Film('Dunkirk', 'history', 2017, 96);
        blackPanther = new Film('Black Panther', 'action', 2018, 134);
        trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

        // assigning an array of object names to films
        films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
        // assigning the new class of cinema which contains all of the film objects
        cinema = new Cinema(films);
    });

    /*
    plan for getting collection of films:
    
    */
    it('should have a collection of films', () => {
        expect(cinema.films).toBe(films);
    });

    xit('should be able to get a list of film titles', () => {

    });

    xit('should be able to find a film by title', () => {

    });

    xit('should be able to filter films by genre', () => {

    });

    xit('should return true if there are some films from a particular year', () => {

    });

    xit('should return false if there there are no films from a particular year', () => {

    });

    xit('should return true if every film is over a particular length', () => {

    });

    xit('should be able to calculate total running time of all films', () => {

    });
});