import { Request, Response } from 'express'
import { handleHttp } from '../../utils/error.handle'
import { deleteCategoryService } from '../../services/category/deleteCategory'

const deleteCategory = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await deleteCategoryService(id)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_CATEGORY')
        console.log(e)
    }
}

export { deleteCategory }