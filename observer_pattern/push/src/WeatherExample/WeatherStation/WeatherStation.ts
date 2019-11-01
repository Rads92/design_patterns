
import { SubjectInterface, ObserverClass } from '../../interfaces/Subject/index';
import { ObserverInterface } from '../../interfaces/Observer/index';

class WeatherStation extends ObserverClass implements SubjectInterface {

    constructor(
        private _temperature: number,
        private _humidity: number,
        private _wind: number
    ) {
        super();
    }

    removeObserver(observer: ObserverInterface) {
        this._observers = this._observers
            .filter(obs => obs !== observer);
    }

    registerObserver(observer: ObserverInterface | ObserverInterface[]) {
        if (Array.isArray(observer)) {
            this._observers = [...this._observers, ...observer];    
        } else {
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

    set temperature(newTemperature: number) {
        this._temperature = newTemperature;
    }

    get humidity() {
        return this._humidity;
    }

    set humidity(newHumidity: number) {
        if (newHumidity >= 0 && newHumidity <= 100) {
            this._humidity = newHumidity;
        }
    }

    get wind() {
        return this._wind;
    }

    set wind(newWind: number) {
        this._wind = newWind;
    }
}

export { WeatherStation };
