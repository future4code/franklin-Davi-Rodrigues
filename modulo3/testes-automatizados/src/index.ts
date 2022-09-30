import { User } from "./models/User";

export const performPurchase = (user: User, valor: number): User | undefined => {
    if(user.saldo >= valor){
        const newUser: User = {
            nome: user.nome,
            saldo: user.saldo - valor
        }

        return newUser

    } else {
        return undefined
    }
}