import * as readline from 'readline';
class Character {
    name: string;
    health: number;
    defense: number;
    strength: number;

    constructor(name: string, health: number, strength: number, defense: number) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.defense = defense;
    }
    attack(opponent: Character): void {
        const damage = this.strength - opponent.defense

        if (damage > 0) {
            opponent.health -= damage;
            console.log(`${this.name} atacou ${opponent.name} e deu ${damage} de dano. `)
        } else {
            console.log(`${this.name} atacou ${opponent.name} e não causou dano`)
        }

    }
}
class Game {
    private rl:readline.Interface;
    constructor(){
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }
    start() {
        this.rl.question('dígite seu nome: ',(name1)=>{

            var char1 = new Character(name1, 100, 50, 5);
            var char2 = new Character('Orc', 80, 85, 10);
            char1.attack(char2);
            console.log(`${char2.name} está com ${char2.health} de vida!`);
        })


    }
}

const game = new Game();
game.start();

