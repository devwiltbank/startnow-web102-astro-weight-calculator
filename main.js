// Planet array
var planets = [
    {planet: 'Pluto', gravity: 0.06},
    {planet: 'Neptune', gravity: 1.148},
    {planet: 'Uranus', gravity: 0.917},
    {planet: 'Saturn', gravity: 1.139},
    {planet: 'Jupiter', gravity: 2.640},
    {planet: 'Mars', gravity: 0.3895},
    {planet: 'Moon', gravity: 0.1655},
    {planet: 'Earth', gravity: 1},
    {planet: 'Venus', gravity: 0.9032},
    {planet: 'Mercury', gravity: 0.377},
    {planet: 'Sun', gravity: 27.9}
  ];

// Click event handler  
document.getElementById('calculate-button').addEventListener('click', calculateWeight);

// Loop to reference the array

var worlds = document.getElementById("planets");

for(var i = 0; i < planets.length; i++){
    var planetNames = planets[i].planet;
    var opt = document.createElement('option');
    opt.innerHTML = planetNames;
    opt.value = planets[i].planet;
    worlds.appendChild(opt);
  
}

// Calculate button to find results
  function calculateWeight() {
    var theWeight = document.getElementById("user-weight").value;
    var thePlanet = document.getElementById("planets").selectedIndex;
    var theGravity = planets[thePlanet].gravity;
    var planetName = planets[thePlanet].planet;
    var results = theWeight * theGravity;
    var totalWeight = results;
    document.getElementById("output").innerHTML= "If you were on " + planetName + ", you would weigh " + totalWeight + "lbs!";

}

/*
console.log(userWeight);
//console.log(gravityFactor);
console.log(planetChoice);
//console.log(weightOnNewPlanet);      
//console.log(planets[planetArray]);
    


    // planets[5][1] ;//01 is the gravity factor for pluto ".06"
    //00 is "pluto"
    //10 is "Neptune"
                            
                


/* Add planets using .forEach
    var select = document.getElementById('planets');
    var el = document.createElement("option");
    planets.forEach(el => {
    el.innerText = el;
    select.appendChild(el);
    console.log(el);
    });
*/

/* Add planets using a for() loop
    function addPlanetsToList() {
        for(var i = 0; i < planets.length; i++) {
        var opt = planets[i];
        var el = document.createElement("option");
        el.innerText = opt;
        select.appendChild(el);

    }   }
*/