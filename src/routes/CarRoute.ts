import { Router, Request, Response } from 'express';
import CarController from '../controllers/CarController';
import CarService from '../services/CarService';
import CarModel from '../models/CarModel';

const carRoute = Router();
const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

carRoute.post('/cars', (req: Request, res: Response) => carController.create(req, res)); 
carRoute.get('/cars', (req: Request, res: Response) => carController.read(req, res));
carRoute.get('/cars/:id', (req: Request, res: Response) => carController.readOne(req, res));
export default carRoute;