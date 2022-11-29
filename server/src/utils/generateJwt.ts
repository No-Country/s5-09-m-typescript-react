import jwt from 'jsonwebtoken'
import { secretKey } from '../config/globals'

export const generateJwt = async (id: string, admin: boolean) => {
    const token = jwt.sign({ id, admin }, secretKey, {
        expiresIn: '24h',
    })
    return token
}
