import { WeatherForecastRes } from "../types";
import "./style.css";
import { getWeather } from "./weather";

const renderWeather = ({ current, daily, hourly }: WeatherForecastRes) => {
	console.log(current, daily, hourly);
};

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)
	.then(renderWeather)
	.catch(() => alert("Error getting weather data: "));
