export type CurrentWeather = {
	currentTemp: number;
	highTemp: number;
	lowTemp: number;
	highFeelsLike: number;
	lowFeelsLike: number;
	windSpeed: number;
	precip: number;
	iconCode: number;
};
export type DailyWeather = {
	timestamp: number;
	iconCode: number;
	maxTemp: number;
};
export type HourlyWeather = {
	timestamp: number;
	iconCode: number;
	temp: number;
	feelsLike: number;
	windSpeed: number;
	precip: number;
};
export type WeatherForecastRes = {
	current: CurrentWeather;
	daily: DailyWeather[];
	hourly: HourlyWeather[];
};
