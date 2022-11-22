import { Request, Response } from 'express'
import { handleHttp } from '../../utils/error.handle'
import { deleteHabitService } from '../../services/habit/deleteHabit'

const deleteHabit = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await deleteHabitService(id)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_HABIT')
        console.log(e)
    }
}

export { deleteHabit }
