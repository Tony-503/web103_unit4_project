import express from 'express';
import * as PCcustomeController from '../controllers/PCcustome.js';

const router = express.Router();

router.get('/cpu', PCcustomeController.getcpu);

router.get('/gpu', PCcustomeController.getgpu);

router.get('/ram', PCcustomeController.getram);

router.get('/storage', PCcustomeController.getstorage);
router.get('/case', PCcustomeController.getcase);

router.get('/builds', PCcustomeController.getbuilds);
router.post('/builds', PCcustomeController.createBuild);
router.get('/builds/:id', PCcustomeController.getbuildById);
router.put('/builds/:id', PCcustomeController.updateBuild);













export default router;