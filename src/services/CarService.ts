import IService from '../interfaces/IService';
import { ICar, ICarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarService implements IService<ICar> {
  private _car: IModel<ICar>;
  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    const result = ICarZodSchema.safeParse(obj);
    if (!result.success) throw result.error;
    return this._car.create(obj);
  }
}