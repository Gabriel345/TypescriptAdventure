"use strict";
class character {
    constructor(name, health, strenght, defense) {
        this.name = name;
        this.health = health;
        this.strenght = strenght;
        this.defense = defense;
    }
    atack(oponent) {
        const damage = this.strenght - oponent.defense;
        if (damage > 0) {
            oponent.health -= damage;
            console.log(`${this.name} atacou ${oponent.name} e deu ${damage} de dano. `);
        }
        else {
            console.log(`${this.name} atacou ${oponent.name} e não causou dano`);
        }
    }
}
class game {
    start() {
    }
}
var char1 = new character('Guerreiro', 100, 50, 5);
var char2 = new character('Orc', 80, 85, 10);
char1.atack(char2);
console.log(`${char2.name} está com ${char2.health} de vida!`);
