// test/.test.js
const request = require('supertest');
const app = require('../index'); // Import the app
const { expect } = require('chai'); // Import expect from chai


describe('API Tests', () => {
  
  // Test the root endpoint
  it('GET / should return a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message', 'Welcome to the API');
  });

  // Test the greet endpoint
  it('GET /greet/:name should return a greeting message', async () => {
    const name = 'John';
    const res = await request(app).get(`/greet/${name}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message', `Hello, ${name}!`);
  });

  // Test the data POST endpoint
  it('POST /data should return the received data', async () => {
    const data = { key: 'value' };
    const res = await request(app).post('/data').send(data);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('receivedData');
    expect(res.body.receivedData).to.deep.equal(data);
  });

  // Test the items endpoint
  it('GET /items should return a list of items', async () => {
    const res = await request(app).get('/items');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('items');
    expect(res.body.items).to.be.an('array');
    expect(res.body.items[0]).to.have.property('id');
    expect(res.body.items[0]).to.have.property('name');
  });

});
