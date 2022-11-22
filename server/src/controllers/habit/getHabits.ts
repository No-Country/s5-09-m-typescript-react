import { Request, Response } from 'express'
import { handleHttp } from '../../utils/error.handle'
import { getHabitsService } from '../../services/habit/getHabits'

const getHabits = async (_: Request, res: Response) => {
    try {
        const response = await getHabitsService()
        res.send(response)
    } catch(e) {
        handleHttp(res, 'ERROR_GET_HABITS')
        console.log(e)
    }
}

export { getHabits }
