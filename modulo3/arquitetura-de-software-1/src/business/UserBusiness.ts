import { User } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import UserDatabase from "../database/UserDatabase";
import { Authenticator, ITokenPayload } from "../services/Authenticator";

export class UserBusiness {
    public signup = async (input: any) => {
        const {name, email, password} = input

        // Verificação 10/10
        if(!name || !email || !password){
            throw new Error("Algo de errado não está certo")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User (id, name, email, hashPassword)


        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            token
        }

        return response
    }

    public login = async (input: any) => {
        const {email, password} = input

        // Verificação 10/10
        if(!email || !password){
            throw new Error("Algo de errado não está certo")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.selectUser(email)

        if(user.password !== password){
            throw new Error("email ou senha incorretos")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            token
        }

        return response
    }
}