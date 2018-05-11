const request = require('supertest');
const expect = require('expect');

// import express app in server.js
var { app } = require('./../server');

// coordinates for simulation
var coordinates = {
    latitude: "23.7612372",
    longitude: "90.4322414"
};

describe('POST /api/simloc', () => {
    it('should check if request contains numbers', (done) => {
        request(app)
            .post('/api/simloc')
            .send(coordinates)
            .expect((res) => {
                expect(res.body.latitude).toBeA('number');
                expect(res.body.longitude).toBeA('number');
            })
            .end((err) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });


    it('should return status code 200 and success on valid request', (done) => {
        request(app)
            .post('/api/simloc')
            .send(coordinates)
            .expect(200)
            .expect((res) => {
                expect(res.body.message).toBe('success');
            })
            .end((err) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});

describe('GET /', () => {
    it('should return the messages specified for index', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    message: 'RT Tracker API Index',
                    github: 'https://github.com/ShawonAshraf/RTTracker-API'
                });
            })
            .end((err) => {
                if (err) {
                    done(err);
                }
                done();
            });
    });
});