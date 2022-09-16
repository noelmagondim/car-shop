import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { ICar  } from '../../../interfaces/ICar';
import CarController from '../../../controllers/CarController';
import { Request, Response } from 'express';

const carTest:ICar = {
  model: "Fiat Uno",
  year: 2012,
  color: "white",
  buyValue: 31500,
  doorsQty: 2,
  seatsQty: 5,
};

describe('Camada CarController.ts', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carTest);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })
  
  it('Criando carro', async () => {
    req.body = carTest;
    await carController.create(req, res);
    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carTest)).to.be.true;
  });
});