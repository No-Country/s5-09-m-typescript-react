import { Request, Response } from 'express'
import { handleHttp } from '../../utils/error.handle'
import { createHabitService } from '../../services/habit/createHabit'

const createHabit = async ({ body }: Request, res: Response) => {
    try {
        const response = await createHabitService(body)
        res.send(response)
    } catch(e) {
        handleHttp(res, 'ERROR_POST_HABIT')
        console.log(e)
    }
}

export { createHabit }