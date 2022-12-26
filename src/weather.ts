import axios from "axios";
import {
	CurrentWeather,
	DailyWeather,
	HourlyWeather,
	WeatherForecastRes,
} from "../types";
const mockResponse = {
	latitude: 10,
	longitude: 10,
	generationtime_ms: 0.867009162902832,
	utc_offset_seconds: 18000,
	timezone: "Asia/Calcutta",
	timezone_abbreviation: "IST",
	elevation: 512,
	current_weather: {
		temperature: 19.6,
		windspeed: 13.9,
		winddirection: 25,
		weathercode: 0,
		time: 1672041600,
	},
	hourly_units: {
		time: "unixtime",
		temperature_2m: "°C",
		apparent_temperature: "°C",
		precipitation: "mm",
		weathercode: "wmo code",
		windspeed_10m: "km/h",
	},
	hourly: {
		time: [
			1671994800, 1671998400, 1672002000, 1672005600, 1672009200,
			1672012800, 1672016400, 1672020000, 1672023600, 1672027200,
			1672030800, 1672034400, 1672038000, 1672041600, 1672045200,
			1672048800, 1672052400, 1672056000, 1672059600, 1672063200,
			1672066800, 1672070400, 1672074000, 1672077600, 1672081200,
			1672084800, 1672088400, 1672092000, 1672095600, 1672099200,
			1672102800, 1672106400, 1672110000, 1672113600, 1672117200,
			1672120800, 1672124400, 1672128000, 1672131600, 1672135200,
			1672138800, 1672142400, 1672146000, 1672149600, 1672153200,
			1672156800, 1672160400, 1672164000, 1672167600, 1672171200,
			1672174800, 1672178400, 1672182000, 1672185600, 1672189200,
			1672192800, 1672196400, 1672200000, 1672203600, 1672207200,
			1672210800, 1672214400, 1672218000, 1672221600, 1672225200,
			1672228800, 1672232400, 1672236000, 1672239600, 1672243200,
			1672246800, 1672250400, 1672254000, 1672257600, 1672261200,
			1672264800, 1672268400, 1672272000, 1672275600, 1672279200,
			1672282800, 1672286400, 1672290000, 1672293600, 1672297200,
			1672300800, 1672304400, 1672308000, 1672311600, 1672315200,
			1672318800, 1672322400, 1672326000, 1672329600, 1672333200,
			1672336800, 1672340400, 1672344000, 1672347600, 1672351200,
			1672354800, 1672358400, 1672362000, 1672365600, 1672369200,
			1672372800, 1672376400, 1672380000, 1672383600, 1672387200,
			1672390800, 1672394400, 1672398000, 1672401600, 1672405200,
			1672408800, 1672412400, 1672416000, 1672419600, 1672423200,
			1672426800, 1672430400, 1672434000, 1672437600, 1672441200,
			1672444800, 1672448400, 1672452000, 1672455600, 1672459200,
			1672462800, 1672466400, 1672470000, 1672473600, 1672477200,
			1672480800, 1672484400, 1672488000, 1672491600, 1672495200,
			1672498800, 1672502400, 1672506000, 1672509600, 1672513200,
			1672516800, 1672520400, 1672524000, 1672527600, 1672531200,
			1672534800, 1672538400, 1672542000, 1672545600, 1672549200,
			1672552800, 1672556400, 1672560000, 1672563600, 1672567200,
			1672570800, 1672574400, 1672578000, 1672581600, 1672585200,
			1672588800, 1672592400, 1672596000,
		],
		temperature_2m: [
			21.2, 20.2, 19.4, 18.5, 17.6, 16.8, 16.2, 15.6, 15, 14.5, 14, 13.8,
			16.3, 19.6, 21.9, 24.1, 26.4, 28.1, 29.2, 29.7, 29.5, 28.8, 26.5,
			23.7, 22.1, 21.3, 20.6, 20.1, 19.1, 18, 17.3, 16.5, 15.8, 15.1,
			14.5, 14.1, 16.6, 20.1, 22.5, 24.7, 26.7, 28.4, 29.5, 30, 29.9, 29,
			26.6, 23.9, 22.6, 21.6, 20.5, 19.5, 18.5, 17.6, 17, 16.4, 16, 15.2,
			14.4, 13.8, 16.6, 19.6, 22.1, 24.4, 26.4, 28.1, 29.3, 29.8, 29.7,
			28.8, 26.4, 23.4, 22.2, 21, 20, 19.1, 18.2, 17.5, 17, 16.2, 15.5,
			14.9, 14.4, 13.9, 15.7, 18.5, 22.1, 24.2, 26.2, 28.1, 29, 29.5,
			29.2, 27.8, 25.7, 23, 21.8, 20.9, 19.7, 18.6, 17.5, 16.3, 15.6, 15,
			14.3, 13.4, 12.4, 12.4, 14.1, 16.9, 20.5, 22.6, 24.5, 26.5, 27.5,
			28.1, 27.8, 26.4, 24.1, 21.3, 19.9, 18.8, 17.5, 16.6, 15.9, 15,
			14.4, 13.8, 13.1, 12.4, 11.6, 11.8, 13.7, 16.6, 20.4, 22.6, 24.6,
			26.6, 27.7, 28.3, 28.1, 26.8, 24.8, 22.2, 21, 19.9, 18.8, 18.2,
			17.8, 17, 16.2, 15.2, 14, 13.1, 12.2, 12.3, 14.2, 17.1, 20.9, 23.2,
			25.3, 27.4, 28.4, 29, 28.8, 27.5, 25.4, 23,
		],
		apparent_temperature: [
			18.5, 17.5, 16.6, 15.8, 15, 14.5, 13.9, 13.3, 12.8, 12.3, 11.7,
			11.6, 14.3, 16.1, 18.2, 21.4, 24.3, 26, 26.9, 26.7, 25.7, 25.1,
			23.5, 21.3, 19.7, 18.7, 18, 17.4, 16.6, 15.6, 14.9, 14.2, 13.5,
			12.9, 12.3, 12, 14.5, 16.5, 18.7, 21.8, 24.3, 26.2, 27.3, 27.1, 26,
			25.1, 23.3, 21.1, 19.8, 18.9, 17.9, 17, 16.1, 15.3, 14.5, 13.9,
			13.3, 12.6, 11.9, 11.2, 13.9, 15.8, 18, 21.1, 23.9, 26.1, 27.1,
			26.9, 25.9, 25.2, 23.3, 20.6, 19.4, 18.2, 17.3, 16.4, 15.6, 15,
			14.5, 13.9, 13.1, 12.5, 12.1, 11.7, 13.1, 15.3, 18, 20.9, 23.5,
			25.7, 26.3, 26.2, 25, 23.7, 21.9, 19.6, 18.4, 17.4, 16.2, 15.2,
			14.3, 13.1, 12.5, 11.8, 11.2, 10.3, 9.4, 9.4, 10.8, 13, 15.8, 18.8,
			21.3, 23.7, 24.4, 24.4, 23.2, 21.9, 20.1, 17.6, 16.4, 15.4, 14.2,
			13.4, 12.7, 11.8, 11.2, 10.6, 10, 9.3, 8.6, 8.8, 10.4, 12.8, 16,
			19.1, 21.7, 24.1, 25.1, 25.1, 24.1, 22.9, 21, 18.7, 17.6, 16.5,
			15.4, 14.7, 14.2, 13.4, 12.7, 11.9, 10.9, 10.1, 9.3, 9.4, 11, 13.3,
			16.4, 19.6, 22.3, 24.8, 25.7, 25.6, 24.7, 23.7, 21.9, 19.7,
		],
		precipitation: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0,
		],
		weathercode: [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
			0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0,
		],
		windspeed_10m: [
			8.6, 8.1, 8, 7.8, 6.9, 6.1, 5.8, 5.4, 5.2, 5.4, 5.8, 5.4, 6.1, 13.9,
			16.5, 16.1, 15.8, 15.8, 15.6, 15.5, 15.3, 14.5, 9.8, 7.4, 7.8, 8,
			8.5, 9, 8.2, 7.9, 7.6, 6.8, 6.5, 6.1, 6.1, 5.1, 6.7, 14.5, 17.4,
			17.4, 17.1, 16.7, 16, 15.9, 16.4, 16.1, 12, 9.7, 9.2, 8.8, 8.4, 8,
			7.6, 7.6, 7.6, 7.9, 7.9, 7.2, 6.5, 7, 8.7, 15.6, 18.4, 18.7, 17.5,
			16.5, 15.6, 15.4, 15.6, 14.6, 10.3, 9, 8.3, 8.1, 7.5, 7.3, 7.3, 7.2,
			7.2, 6.1, 6.5, 7.2, 6.8, 6.1, 8.9, 13.7, 18.4, 19.2, 18.6, 17.8,
			17.7, 17.7, 16.8, 14.8, 12.4, 9.7, 9.1, 9, 8.8, 8.4, 7.6, 7.2, 7.2,
			7.6, 7.6, 6.9, 6.3, 6.2, 8.7, 12.9, 17.3, 17.9, 17.2, 16.1, 16.1,
			15.9, 15.3, 13.7, 11.3, 8.8, 7.5, 6.6, 6.2, 6.1, 6.5, 6.9, 6.9, 6.6,
			6.2, 6.2, 5.9, 6.9, 9.1, 12.7, 16.2, 16.9, 16.6, 15.6, 15.3, 15.2,
			14.5, 13, 11.3, 9.5, 8.8, 8.4, 8.6, 8.7, 8.6, 8.6, 8.3, 7.2, 6.5,
			5.8, 5.2, 5.9, 8.7, 12.6, 16.8, 17, 16.5, 15.8, 15.9, 16.1, 15.5,
			13.5, 11.3, 8.9,
		],
	},
	daily_units: {
		time: "unixtime",
		weathercode: "wmo code",
		temperature_2m_max: "°C",
		temperature_2m_min: "°C",
		apparent_temperature_max: "°C",
		apparent_temperature_min: "°C",
		precipitation_sum: "mm",
	},
	daily: {
		time: [
			1671994800, 1672081200, 1672167600, 1672254000, 1672340400,
			1672426800, 1672513200,
		],
		weathercode: [0, 0, 0, 1, 1, 0, 0],
		temperature_2m_max: [29.7, 30, 29.8, 29.5, 28.1, 28.3, 29],
		temperature_2m_min: [13.8, 14.1, 13.8, 13.9, 12.4, 11.6, 12.2],
		apparent_temperature_max: [26.9, 27.3, 27.1, 26.3, 24.4, 25.1, 25.7],
		apparent_temperature_min: [11.6, 12, 11.2, 11.7, 9.4, 8.6, 9.3],
		precipitation_sum: [0, 0, 0, 0, 0, 0, 0],
	},
};

export type WeatherForecast = typeof mockResponse;
export const getWeather = async (
	lat: number,
	lng: number,
	timezone: string
): Promise<WeatherForecastRes> => {
	const res = await axios.get(
		"https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime",
		{
			params: {
				latitude: lat,
				longitude: lng,
				timezone,
			},
		}
	);
	const data: WeatherForecast = res.data;
	return {
		current: parseCurrentWeather(data),
		daily: parseDailyWeather(data),
		hourly: parseHourlyWeather(data),
	};
};

const parseCurrentWeather = ({
	current_weather,
	daily,
}: WeatherForecast): CurrentWeather => {
	const {
		temperature: currentTemp,
		windspeed: windSpeed,
		weathercode: iconCode,
	} = current_weather;
	const {
		temperature_2m_max: [maxTemp],
		temperature_2m_min: [minTemp],
		apparent_temperature_max: [maxFeelsLike],
		apparent_temperature_min: [minFeelsLike],
		precipitation_sum: [precip],
	} = daily;

	return {
		currentTemp: Math.round(currentTemp),
		highTemp: Math.round(maxTemp),
		lowTemp: Math.round(minTemp),
		highFeelsLike: Math.round(maxFeelsLike),
		lowFeelsLike: Math.round(minFeelsLike),
		windSpeed: Math.round(windSpeed),
		precip: Math.round(precip * 100) / 100,
		iconCode,
	};
};

const parseDailyWeather = ({ daily }: WeatherForecast): DailyWeather[] => {
	return daily.time.map((time, index) => {
		return {
			timestamp: time * 1000,
			iconCode: daily.weathercode[index],
			maxTemp: Math.round(daily.temperature_2m_max[index]),
		};
	});
};

const parseHourlyWeather = ({
	hourly,
	current_weather,
}: WeatherForecast): HourlyWeather[] => {
	return hourly.time
		.map((time, index) => {
			return {
				timestamp: time * 1000,
				iconCode: hourly.weathercode[index],
				temp: Math.round(hourly.temperature_2m[index]),
				feelsLike: Math.round(hourly.apparent_temperature[index]),
				windSpeed: Math.round(hourly.windspeed_10m[index]),
				precip: Math.round(hourly.precipitation[index] * 100) / 100,
			};
		})
		.filter(({ timestamp }) => timestamp >= current_weather.time * 1000);
};
