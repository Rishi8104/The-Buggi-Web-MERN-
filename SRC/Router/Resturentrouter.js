import express from "express";
import { DelateResturent, FatchResturent, SaveRestruent } from "../controllerr/ResturentController.js";


const ResturentRouter = express.Router();

ResturentRouter.post('/Resturent',SaveRestruent);
ResturentRouter.get('/Resturent', FatchResturent);
ResturentRouter.delete('/AlldeleteResturent', DelateResturent);

export default ResturentRouter;