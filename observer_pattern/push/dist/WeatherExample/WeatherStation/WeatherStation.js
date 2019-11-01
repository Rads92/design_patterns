import { ObserverClass } from '../../interfaces/Subject/index';
class WeatherStation extends ObserverClass {
    constructor(_temperature, _humidity, _wind) {
        super();
        this._temperature = _temperature;
        this._humidity = _humidity;
        this._wind = _wind;
    }
    removeObserver(observer) {
        this._observers = this._observers
            .filter(obs => obs !== observer);
    }
    registerObserver(observer) {
        if (Array.isArray(observer)) {
            this._observers = [...this._observers, ...observer];
        }
        else {
            this._observers = [...this._observers, observer];
        }
    }
    notifyObserver() {
        console.log('I\'m about to notify observers!');
        this._observers.forEach(observer => {
            observer.update({
                temperature: this.temperature,
                humidity: this.humidity,
                wind: this.wind,
            });
        });
        console.log('I notified observers!');
    }
    get temperature() {
        return this._temperature;
    }
    set temperature(newTemperature) {
        this._temperature = newTemperature;
    }
    get humidity() {
        return this._humidity;
    }
    set humidity(newHumidity) {
        if (newHumidity >= 0 && newHumidity <= 100) {
            this._humidity = newHumidity;
        }
    }
    get wind() {
        return this._wind;
    }
    set wind(newWind) {
        this._wind = newWind;
    }
}
export { WeatherStation };
