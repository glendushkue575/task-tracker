/*
Filename: AdvancedWebApp.js
Description: This code is an advanced web application that simulates a virtual pet. It consists of various features such as feeding, playing, cleaning, and more. The application utilizes object-oriented programming concepts and asynchronous event handling.
*/

class VirtualPet {
  constructor(name) {
    this.name = name;
    this.hunger = 50;
    this.energy = 100;
    this.happiness = 75;
    this.hygiene = 100;

    // Initializing DOM elements
    this.nameElement = document.getElementById("pet-name");
    this.hungerElement = document.getElementById("hunger");
    this.energyElement = document.getElementById("energy");
    this.happinessElement = document.getElementById("happiness");
    this.hygieneElement = document.getElementById("hygiene");

    // Updating initial DOM values
    this.updateDOM();
  }

  // Feed the pet
  feed() {
    if (this.hunger >= 10) {
      this.hunger -= 10;
      this.happiness += 5;
      this.updateDOM();
      console.log(`${this.name} has been fed.`);
    }
  }

  // Play with the pet
  play() {
    if (this.energy >= 20 && this.hunger >= 5) {
      this.energy -= 20;
      this.hunger -= 5;
      this.happiness += 10;
      this.hygiene -= 5;
      this.updateDOM();
      console.log(`${this.name} is playing happily.`);
    }
  }

  // Clean the pet
  clean() {
    if (this.hygiene <= 90) {
      this.hygiene += 10;
      this.happiness += 2;
      this.updateDOM();
      console.log(`${this.name} has been cleaned.`);
    }
  }

  // Sleep to restore energy
  sleep() {
    if (this.energy <= 80) {
      this.energy += 20;
      this.happiness += 5;
      this.updateDOM();
      console.log(`${this.name} is sleeping.`);
    }
  }

  // Update the DOM elements
  updateDOM() {
    this.nameElement.textContent = this.name;
    this.hungerElement.textContent = this.hunger;
    this.energyElement.textContent = this.energy;
    this.happinessElement.textContent = this.happiness;
    this.hygieneElement.textContent = this.hygiene;
  }
}

// Create a new VirtualPet and initialize it
const pet = new VirtualPet("Max");

// Event listeners for buttons
document.getElementById("feed-button").addEventListener("click", () => {
  pet.feed();
});

document.getElementById("play-button").addEventListener("click", () => {
  pet.play();
});

document.getElementById("clean-button").addEventListener("click", () => {
  pet.clean();
});

document.getElementById("sleep-button").addEventListener("click", () => {
  pet.sleep();
});
...

// This code snippet showcases only a part of the extensive functionality of the AdvancedWebApp.js.
// Implementations of other features such as timed events, interactive user interface, etc., can be included to make the code more complex.