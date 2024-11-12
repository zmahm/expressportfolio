// test/api.test.js
const request = require('supertest');
const app = require('../index'); // Import the app

let expect;

// Dynamically import chai for compatibility with ESM
before(async () => {
  const chai = await import('chai');
  expect = chai.expect;
});

describe('API Tests', () => {
  it('GET / should return a welcome message', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message', 'Welcome to the API');
        done();
      });
  });

  it('GET /greet/:name should return a greeting message', (done) => {
    const name = 'John';
    request(app)
      .get(`/greet/${name}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('message', `Hello, ${name}!`);
        done();
      });
  });
});
