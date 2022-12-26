import { CurrentWeather, DailyWeather, WeatherForecastRes } from "../types";
import { ICON_MAP } from "./iconMap";
import "./style.css";
import { setValue } from "./utils";
import { getWeather } from "./weather";

const currentIcon: HTMLImageElement = document.querySelector(
	"[data-current-icon]"
)!;
const renderCurrentWeather = (current: CurrentWeather) => {
	currentIcon.src = `icons/${ICON_MAP.get(current.iconCode)}.svg` || "";
	setValue("current-temp", current.currentTemp);
	setValue("current-high", current.highTemp);
	setValue("current-low", current.lowTemp);
	setValue("current-fl-high", current.highFeelsLike);
	setValue("current-fl-low", current.lowFeelsLike);
	setValue("current-wind", current.windSpeed);
	setValue("current-precip", current.precip);
};

const dailySection: HTMLElement = document.querySelector("[data-day-section]")!;
const dayCardTemplate = document.getElementById("day-card-template")!;

const renderDailyWeather = (daily: DailyWeather[]) => {
	dailySection.innerHTML = "";
	dayCardTemplate.innerHTML = "";
};

const renderWeather = ({ current, daily, hourly }: WeatherForecastRes) => {
	renderCurrentWeather(current);
	renderDailyWeather(daily);
	document.body.classList.remove("blurred");
};

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)
	.then(renderWeather)
	.catch(() => alert("Error getting weather data: "));
