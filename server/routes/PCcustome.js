import express from 'express';
import * as PCcustomeController from '../controllers/PCcustome.js';

const router = express.Router();

router.get('/cpu', PCcustomeController.getcpu);

router.get('/gpu', PCcustomeController.getgpu);

router.get('/ram', PCcustomeController.getram);












export default router;