import { Lutador } from "./models/Lutador";
import { validateCharacter } from "./validateCharacter";

// export const performAttack = (attacker: Lutador, defender: Lutador) => {
//     if(!validateCharacter(attacker) || !validateCharacter(defender)){
//         throw new Error("Lutador inválido")
//     }

//     if(attacker.ataque > defender.defesa){
//         defender.vida -= defender.ataque - defender.defesa 
//     }
// }

export const performAttack = (attacker: Lutador, defender: Lutador, validator: (input: Lutador) => boolean) => {
    if(!validator(attacker) || !validator(defender)){
        throw new Error("Lutador inválido")
    }

    if(attacker.ataque > defender.defesa){
        defender.vida -= defender.ataque - defender.defesa 
    }
}
