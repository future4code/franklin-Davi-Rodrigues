import { Request, response, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export default class UserController {
    public signup = async (req: Request, res: Response) => {
        const {name, email, password} = req.body

        const input: any = {
            name: name,
            email: email,
            password: password
        }

        const userBusiness = new UserBusiness()
        const response = await userBusiness.signup(input)

        res.send(response)
    }

    public login = async (req: Request, res: Response) => {
        const {email, password} = req.body

        const input = {
            email: email,
            password: password
        }

        const userBusiness = new UserBusiness()
        const response = await userBusiness.login(input)
    }
}