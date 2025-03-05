import express, { Request, Response } from "express";
import axios from "axios";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // PostgreSQL connection
});

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/forecast";
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

// Type Definitions
interface Park {
    id: number;
    name: string;
    city: string;
    latitude: number;
    longitude: number;
}

interface WeatherForecast {
    date: string;
    temperature: number;
    weather: string;
    icon: string;
}

// To fetch park details and weather forecast
router.get("/parks/:parkId/weather", async (req: Request, res: Response) => {
    try {
        const { parkId } = req.params;

        // To fetch park details from PostgreSQL
        const parkQuery = await pool.query("SELECT * FROM parks WHERE id = $1", [parkId]);

        if (parkQuery.rows.length === 0) {
            return res.status(404).json({ error: "Park not found" });
        }

        const park: Park = parkQuery.rows[0];

        // To fetch weather data
        const weatherResponse = await axios.get(WEATHER_API_URL, {
            params: {
                lat: park.latitude,
                lon: park.longitude,
                units: "metric",
                cnt: 24, // 5-day forecast
                appid: WEATHER_API_KEY,
            },
        });

        // To format weather data
        const weatherData: WeatherForecast[] = weatherResponse.data.list.map((forecast: any) => ({
            date: forecast.dt_txt,
            temperature: forecast.main.temp,
            weather: forecast.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`,
        }));

        res.json({ park, weather: weatherData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching data" });
    }
});

export default router;
