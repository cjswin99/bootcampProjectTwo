import express from 'express';
import { getWeatherData } from '../api/weatherApi';
import Weather from '../models/Weather';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const location = req.query.location as string;
    if (!location)
      return res.status(400).json({ error: "Location is required" });

    // Attempt to find an existing weather record for the given park
    let weatherRecord = await Weather.findOne({ where: { park_id: location } });

    // If not found, fetch from external API and create a new record
    if (!weatherRecord) {
      const data = await getWeatherData(location);
      weatherRecord = await Weather.create({
        park_id: location,
        forecast: data,
      });
      return res.json(data);
    } else {
      // Option 1: Return the cached weather data
      // return res.json(weatherRecord.forecast);

      // Option 2: Refresh the data if needed
      const data = await getWeatherData(location);
      weatherRecord.forecast = data;
      await weatherRecord.save();
      return res.json(data);
    }
  } catch (error) {
    console.error('Weather route error:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

export default router;
