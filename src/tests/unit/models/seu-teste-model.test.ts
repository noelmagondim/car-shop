import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Model } from 'mongoose';
import CarModel from '../../../models/CarModel';
import { ICar } from '../../../interfaces/ICar';

const carTest:ICar = {
  model: "Fiat Uno",
  year: 2012,
  color: "white",
  buyValue: 31500,
  doorsQty: 2,
  seatsQty: 5,
};

const carWithIdTest:ICar & { _id:string } = {
  _id: "5fee51c97873f1gc23111114",
  model: "Fiat Uno",
  year: 2012,
  color: "white",
  buyValue: 31500,
  doorsQty: 2,
  seatsQty: 5,
};

describe('Camada CarModel.ts', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carWithIdTest);
  });

  after(()=>{
    sinon.restore();
  })
  
  it('Criando carro', async () => {
    const result = await carModel.create(carTest);
    expect(result).to.be.deep.equal(carWithIdTest);
  });
});