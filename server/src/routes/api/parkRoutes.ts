import express from 'express';
import Park from '../models/Park';
import { getParksData } from '../api/parksApi'; // Optionally, still fetch from an external API if needed

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const state = req.query.state as string;
    if (!state) return res.status(400).json({ error: "State is required" });

    // Option 1: Fetch from external API then store/update in DB
    const externalData = await getParksData(state);
    // You can add logic here to upsert parks into your database using Park.upsert(...)

    // Option 2: Query parks from the database directly
    const parks = await Park.findAll({ where: { state } });
    res.json(parks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch parks data' });
  }
});

export default router;
