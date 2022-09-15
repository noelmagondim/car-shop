import IService from '../interfaces/IService';
import { ICar, ICarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

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

  public async read():Promise<ICar[]> {
    const result = await this._car.read();
    return result;
  }

  public async readOne(_id:string):Promise<ICar> {
    const result = await this._car.readOne(_id);
    if (!result) throw new Error(ErrorTypes.EntityNotFoudnd);
    return result;
  }

  public async update(_id:string, obj:ICar):Promise<ICar | null> {
    const result = ICarZodSchema.safeParse(obj);
    if (!result.success) throw result.error;
    await this.readOne(_id);
    return this._car.update(_id, obj);
  }

  public async delete(_id:string):Promise<ICar | null> {
    const result = await this._car.delete(_id);
    if (!result) throw new Error(ErrorTypes.EntityNotFoudnd);
    return result;
  }
}