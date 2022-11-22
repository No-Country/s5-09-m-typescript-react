import { Request, Response } from 'express'
import { getCategoryService } from '../../services/category/getCategory'
import { handleHttp } from '../../utils/error.handle'

const getCategory = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await getCategoryService(id)
        const data = response ? response : 'NOT_FOUND'
        res.send(data)
    } catch(e) {
        handleHttp(res, 'ERROR_GET_CATEGORY')
    }
}

export { getCategory }