import React, {useState} from "react";
import {Input} from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import {Card} from "../components/Card"


{/* this is the staring code for the landing page aka main page */}

interface Weather {
    temp: number;
    description: string;
}

interface Park {
    name: string;
    description: string;
}

const LandingPage: React.FC = () => {
    const [state, setState] = useState<string>("");
    const [parks, setParks] = useState<Park[]>([]);
    const [weather, setWeather] = useState<Weather | null>(null);

    const handleSearch = async () => {
        if (!state.trim()) return;
        

        try {
            // Fetch parks from parks api
            const parksResponse = await fetch(`/api/parks?state=${state}`);
            const parksData: Park[] = await parksResponse.json();
            setParks(parksData);

            // Fetch weather from weather api
            const weatherResponse = await fetch(`/api/weather?state=${state}`);
            const weatehrData: Weather = await weatherResponse.json();
            setWeather(weatehrData);
        } catch (error) {
            console.error("Error fetching data", error);
        } 
    };

    return (
        <div className="container">
            <h1 className="title"> Welcome to Parks and Weather</h1>
            <p className="descirption">
                Enter your destination state to find the top parks and get weather based product recomendations.
            </p>
            <div className="search-container">
                <Input
                type="text" 
                placeholder="Enter State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                />
             <Button onClick={handleSearch}>Search</Button>
            </div>
            <div className="cards-container">
                {parks.map((park, index) => (
                    <Card key={index} title={park.name} description={park.description} />
                ))}
            </div>
            {weather && (
                <div className="weather-box">
                    <h2>Weather Forecast</h2>
                    <p>Temperature: {weather.temp}F</p>
                    <p>condition: {weather.description}</p>
                </div>
            )}
        </div>
    );
}

export default LandingPage;