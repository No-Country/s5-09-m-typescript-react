import { Request, Response } from 'express'
import { handleHttp } from '../../utils/error.handle'
import { getCategoriesService } from '../../services/category/getCategories'

const getCategories = async (_: Request, res: Response) => {
    try {
        const response = await getCategoriesService()
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_CATEGORIES')
        console.log(e)
    }
}

export { getCategories }
