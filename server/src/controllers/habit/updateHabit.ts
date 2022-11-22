import { Request, Response } from 'express'
import { handleHttp } from '../../utils/error.handle'
import { upadateHabitService } from '../../services/habit/updateHabit'

const updateHabit = async ({ params, body }: Request, res: Response) => {
    try {
        const {id} = params
        const response = await upadateHabitService(id, body)
        res.send(response)
    } catch(e) {
        handleHttp(res, 'ERROR_UPDATE_HABIT')
        console.log(e)
    }
}

export { updateHabit }