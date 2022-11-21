import { Request, Response } from 'express'
import { handleHttp } from '../../utils/error.handle'
import { createCategoryService } from '../../services/category/createCategory'

const createCategory = async ({ body }: Request, res: Response) => {
    try {
        const response = await createCategoryService(body)
        res.send(response)
    } catch(e) {
        handleHttp(res, 'ERROR_POST_CATEGORY')
        console.log(e)
    }
}

export { createCategory }