"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class Character {
    constructor(name, health, strength, defense) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.defense = defense;
    }
    attack(opponent) {
        const damage = this.strength - opponent.defense;
        if (damage > 0) {
            opponent.health -= damage;
            console.log(`${this.name} atacou ${opponent.name} e deu ${damage} de dano. `);
        }
        else {
            console.log(`${this.name} atacou ${opponent.name} e não causou dano`);
        }
    }
}
class Game {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    start() {
        this.rl.question('dígite seu nome: ', (name1) => {
            var char1 = new Character(name1, 100, 50, 5);
            var char2 = new Character('Orc', 80, 85, 10);
            char1.attack(char2);
            console.log(`${char2.name} está com ${char2.health} de vida!`);
        });
    }
}
const game = new Game();
game.start();
