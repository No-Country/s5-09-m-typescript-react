import { Request, Response } from 'express'
import { handleHttp } from '../../utils/error.handle'
import { upadateCategoryService } from '../../services/category/updateCategory'

const updateCategory = async ({ params, body }: Request, res: Response) => {
    try {
        const {id} = params
        const response = await upadateCategoryService(id, body)
        res.send(response)
    } catch(e) {
        handleHttp(res, 'ERROR_UPDATE_CATEGORY')
        console.log(e)
    }
}

export { updateCategory }