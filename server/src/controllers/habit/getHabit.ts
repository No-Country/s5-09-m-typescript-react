import { Request, Response } from 'express'
import { getHabitService } from '../../services/habit/getHabit'
import { handleHttp } from '../../utils/error.handle'

const getHabit = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await getHabitService(id)
        console.log(response) 
        const data = response ? response : 'NOT_FOUND'
        console.log(data)
        res.send(data)
    } catch(e) {
        handleHttp(res, 'ERROR_GET_HABIT')
    }
}

export { getHabit }