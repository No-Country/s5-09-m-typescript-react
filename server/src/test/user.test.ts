import supertest from 'supertest'
import mongoose from 'mongoose'

import { app, server } from '../index'
import users from '../utils/mockups/users.json'

const { ..._user } = users[3]

describe('user', () => {
    afterAll(() => {
        mongoose.connection.close()
        server.close()
    })

    //POST /user/

    describe('POST /user/', () => {
        test('should respond with a 404 status code', async () => {
            const response = await supertest(app).post('/anotherRoute').send()
            expect(response.statusCode).toBe(404)
        })

        test('should respond with a 200 status code', async () => {
            const response = await supertest(app)
                .post('/user')
                .send(_user)
                .expect('Content-type', /json/)
            expect(response.statusCode).toBe(200)
            expect(response.body).toBeInstanceOf(Object)
        })
    })

    //GET /user/

    describe('GET /user/', () => {
        test('should return the users when called', async () => {
            const response = await supertest(app)
                .get('/user')
                .send()
                .expect('Content-type', /json/)
            expect(response.statusCode).toBe(200)
            expect(response.body).toBeInstanceOf(Object)
            expect(response.body).not.toBeNull()
            expect(response.body).not.toBeUndefined()
        })
        test('should not return users when called', async () => {
            const response = await supertest(app).get('/anotherRoute/').send()
            expect(response.statusCode).toBe(404)
            expect(response.body).not.toBeNull()
        })
    })

    //GET /user/findOne/:id
    describe('GET /user/findOne/:id', () => {
        test('should return one user when called', async () => {
            const response = await supertest(app)
                .get(`/user/findOne/${_user._id}`)
                .send()
                .expect('Content-type', /json/)
            expect(response.statusCode).toBe(200)
            expect(response.body).toBeInstanceOf(Object)
            expect(response.body).not.toBeNull()
            expect(response.body).not.toBeUndefined()
        })

        test('should not return one user when called', async () => {
            const response = await supertest(app)
                .get('/user/findOne/633ae6d494a22ed7eea30624')
                .send()
                .expect('Content-type', /json/)
            expect(response.statusCode).toBe(404)
            expect(response.body).not.toBeNull()
        })
    })

    //PUT /user/update/:id
    describe('PUT /user/update/:id', () => {
        test('should return one user when called', async () => {
            const response = await supertest(app)
                .put(`/user/update/${_user._id}`)
                .send()
                .expect('Content-type', /json/)
            expect(response.statusCode).toBe(200)
            expect(response.body).toBeInstanceOf(Object)
            expect(response.body).not.toBeNull()
            expect(response.body).not.toBeUndefined()
        })

        test('should not return one user when called', async () => {
            const response = await supertest(app)
                .put('/user/update/633ae6d494a22ed7eea30624')
                .send()
                .expect('Content-type', /json/)
            expect(response.statusCode).toBe(404)
            expect(response.body).not.toBeNull()
        })
    })

    //DELETE /user/delete/:id
    describe('DELETE /user/delete/:id', () => {
        test('should return one user when called', async () => {
            const response = await supertest(app)
                .delete(`/user/delete/${_user._id}`)
                .send()
            expect(response.statusCode).toBe(200)
            expect(response.body).toBeTruthy()
            expect(response.body).toBeInstanceOf(Object)
            expect(response.body).not.toBeNull()
            expect(response.body).not.toBeUndefined()
        })

        test('should not return one user when called', async () => {
            const response = await supertest(app)
                .delete('/user/delete/633ae6d494a22ed7eea30624')
                .send()
            expect(response.statusCode).toBe(404)
            expect(response.body).not.toBeNull()
        })
    })
})
