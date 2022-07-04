const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

chai.use(chaiHttp);

describe('Task API Teste', () => {
  describe('Sucesso no GET', () => {
    it('a requisição seja respondida com status 200', async () => {
      const response = await chai.request(app).get('/')

      expect(response).to.have.status(200);
    });
  });
});