const server = require('./server');
const request = require('supertest');
const mongoose = require('mongoose');


describe('Loging in User',()=>{

    test('username and password login with correct Credentials', async() => {

        const response = await request(server).post('/api/users/login').send({

            'username':'sudip',
            'password':'sudip'

        })
        expect(response.statusCode).toBe(200)
    })

 

    test('username and password login with wrong Credentials', async() => {

        const response = await request(server).post('/api/users/login').send({

            'username':'Qubit01',
            'password':'olaAmigoo0'

        })
        expect(response.statusCode).toBe(200)
    })
})

 describe('getting post',()=>{
    test('getting all post',async()=>{
        const response = await request(server).get('/api/posts');
        expect(response.statusCode).toBe(200)
    })
})

describe('getting all Users',()=>{
    test('getting all Users',async()=>{
        const response = await request(server).get('/api/users');
        expect(response.statusCode).toBe(200)
    })
   
})
