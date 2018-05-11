const request = require('supertest');
const expect = require('expect');

// import express app in server.js
var app = require('./../server');

// coordinates for simulation
var coordinates = {
    longitude: "23.7612372",
    lattitude: "90.4322414"
};

describe('POST /api/simloc', () => {
    it('should return status code 200 and success on valid request', (done) => {
        request(app)
            .post('/api/simloc')
            .send(coordinates)
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe('success');
            });
    });
});