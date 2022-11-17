import User from '../../models/User'

export const loginService = async (email: string) => {
    try {
        const user = await User.findOne({ email, status: 'Active' })

        if (!user) {
            const response = {
                ok: false,
                status: 404,
                msg: 'El email no esta registrado',
            }
            return response
        }

        const response = { ok: true, status: 200, user }
        return response
    } catch (error) {
        return console.log('catch')
    }
}
