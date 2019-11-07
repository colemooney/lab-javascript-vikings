// Soldier
class Soldier {
    constructor(healthArg, strengthArg){
        this.health = healthArg
        this.strength = strengthArg
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg){
        super(healthArg, strengthArg)
        this.name = nameArg
    }
    receiveDamage(damage){
        this.health -= damage
        if (this.health <= 0){
           return `${this.name} has died in act of combat`
        } else {
           return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon {}

// War
class War {}