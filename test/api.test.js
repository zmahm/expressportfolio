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
  
  // Test the root endpoint
  it('GET /api should return a welcome message', async () => {
    const res = await request(app).get('/api');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message', 'Welcome to the API');
  });

  // Test the greet endpoint
  it('GET /api/greet/:name should return a greeting message', async () => {
    const name = 'John';
    const res = await request(app).get(`/api/greet/${name}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message', `Hello, ${name}!`);
  });

  // Test the data POST endpoint
  it('POST /api/data should return the received data', async () => {
    const data = { key: 'value' };
    const res = await request(app).post('/api/data').send(data);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('receivedData');
    expect(res.body.receivedData).to.deep.equal(data);
  });

  // Test the items endpoint
  it('GET /api/items should return a list of items', async () => {
    const res = await request(app).get('/api/items');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('items');
    expect(res.body.items).to.be.an('array');
    expect(res.body.items[0]).to.have.property('id');
    expect(res.body.items[0]).to.have.property('name');
  });

});
