import connection from "./connection"

export const findUserByEmail = async (email: string) => {
    const result = await connection.select('*').from('User').where({email})
    return result[0];
    
}