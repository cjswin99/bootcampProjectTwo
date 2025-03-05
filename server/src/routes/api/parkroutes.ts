import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import ParkService from '../../service/parkService.js';

router.get('/:state', async (req: Request, res: Response) => {
  try {
    const stateName = req.params.state;
    const stateCode = await ParkService.convertStateNameToCode(stateName);
    const parks = await ParkService.getParksByState(stateCode);
    //ensures saved data has proper casing regardless of input
    const sanitizedStateName = await ParkService.convertStateCodeToName(
      stateCode
    );
    await HistoryService.addState(sanitizedStateName);
    res.json(parks);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;