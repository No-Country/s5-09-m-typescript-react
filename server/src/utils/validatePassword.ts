import bcrypt from 'bcryptjs'

export const validatePassword = async (
    password: string,
    userPassword: string
) => {
    const validPassword = bcrypt.compareSync(password, userPassword)

    return validPassword
}
