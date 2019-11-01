
import { ObserverInterface } from '../../interfaces/Observer/index';

interface WeatherData {
    temperature: number;
    humidity: number;
    wind: number;
}

export class MobileDevice implements ObserverInterface {
    private _weatherData;

    constructor(weatherObject: WeatherData) {
        this._weatherData = weatherObject;
    }

    update = (data: WeatherData) => {
        this._weatherData = data;
    }

    display = () => {
        Object.keys(this._weatherData).forEach(key => {
            console.log(`${key} => ${this._weatherData[key]}`)
        });
    }
}
