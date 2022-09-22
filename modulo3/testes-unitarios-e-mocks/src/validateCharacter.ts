import { Lutador } from "./models/Lutador";

export const validateCharacter = (lutador: Lutador):boolean => {
    if (!lutador.nome || !lutador.vida || !lutador.defesa || !lutador.ataque) {
        return false
    }

    if (lutador.vida <= 0 || lutador.defesa <= 0 || lutador.ataque <= 0) {
        return false
    }

    return true
}