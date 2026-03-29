import express from 'express';
import * as PCcustomeController from '../controllers/PCcustome.js';

const router = express.Router();

router.get('/cpu', PCcustomeController.getcpu);

router.get('/gpu', PCcustomeController.getgpu);

router.get('/ram', PCcustomeController.getram);

router.get('/storage', PCcustomeController.getstorage);
router.get('/case', PCcustomeController.getcase);
router.post('/builds', PCcustomeController.createBuild);













export default router;