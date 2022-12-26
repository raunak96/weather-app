import {
	CurrentWeather,
	DailyWeather,
	HourlyWeather,
	WeatherForecastRes,
} from "../types";
import "./style.css";
import { DAY_FORMATTER, getIconUrl, HOUR_FORMATTER, setValue } from "./utils";
import { getWeather } from "./weather";

const currentIcon: HTMLImageElement = document.querySelector(
	"[data-current-icon]"
)!;
const renderCurrentWeather = (current: CurrentWeather) => {
	currentIcon.src = getIconUrl(current.iconCode);
	setValue("current-temp", current.currentTemp);
	setValue("current-high", current.highTemp);
	setValue("current-low", current.lowTemp);
	setValue("current-fl-high", current.highFeelsLike);
	setValue("current-fl-low", current.lowFeelsLike);
	setValue("current-wind", current.windSpeed);
	setValue("current-precip", current.precip);
};

const dailySection: HTMLElement = document.querySelector("[data-day-section]")!;
const dayCardTemplate = document.getElementById(
	"day-card-template"
)! as HTMLTemplateElement;

const renderDailyWeather = (daily: DailyWeather[]) => {
	dailySection.innerHTML = "";
	daily.forEach(day => {
		// Clone the template content
		const element = dayCardTemplate.content.cloneNode(
			true
		) as HTMLDivElement;
		setValue("temp", day.maxTemp, { parent: element });
		setValue("date", DAY_FORMATTER.format(day.timestamp), {
			parent: element,
		});
		const dayIcon = element.querySelector(
			"[data-icon]"
		) as HTMLImageElement;
		dayIcon.src = getIconUrl(day.iconCode);
		dailySection.append(element);
	});
};

const hourlySection: HTMLTableSectionElement = document.querySelector(
	"[data-hour-section]"
)!;
const hourRowTemplate = document.getElementById(
	"hour-row-template"
)! as HTMLTemplateElement;
function renderHourlyWeather(hourly: HourlyWeather[]) {
	hourlySection.innerHTML = "";
	hourly.forEach(hour => {
		const element = hourRowTemplate.content.cloneNode(true) as HTMLElement;
		setValue("temp", hour.temp, { parent: element });
		setValue("fl-temp", hour.feelsLike, { parent: element });
		setValue("wind", hour.windSpeed, { parent: element });
		setValue("precip", hour.precip, { parent: element });
		setValue("day", DAY_FORMATTER.format(hour.timestamp), {
			parent: element,
		});
		setValue("time", HOUR_FORMATTER.format(hour.timestamp), {
			parent: element,
		});
		const hourIcon: HTMLImageElement =
			element.querySelector("[data-icon]")!;
		hourIcon.src = getIconUrl(hour.iconCode);
		hourlySection.append(element);
	});
}

const renderWeather = ({ current, daily, hourly }: WeatherForecastRes) => {
	renderCurrentWeather(current);
	renderDailyWeather(daily);
	renderHourlyWeather(hourly);
	document.body.classList.remove("blurred");
};

const positionSuccess = ({ coords }: GeolocationPosition) => {
	getWeather(
		coords.latitude,
		coords.longitude,
		Intl.DateTimeFormat().resolvedOptions().timeZone
	)
		.then(renderWeather)
		.catch(err => {
			alert("Error getting weather data: ");
			console.log(err);
		});
};

navigator.geolocation.getCurrentPosition(positionSuccess, error => {
	alert(
		"There was an error getting your location. Please allow us to use your location and refresh the page."
	);
	console.log(error);
});
