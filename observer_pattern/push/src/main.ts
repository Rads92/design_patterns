import { WeatherStation } from "./WeatherExample/WeatherStation/WeatherStation";
import { MobileDevice } from './WeatherExample/DisplayDevices/MobileDevice';

const weatherStation = new WeatherStation(-2, 20, 10);
const mobileDevice = new MobileDevice({
    temperature: 3,
    wind: 0,
    humidity: 80,
});
const secondMobileDevice = new MobileDevice({
    temperature: 30,
    wind: 100,
    humidity: 0,
});
weatherStation.registerObserver(mobileDevice);
weatherStation.registerObserver(secondMobileDevice);

mobileDevice.display();
secondMobileDevice.display();

weatherStation.notifyObserver();

mobileDevice.display();
secondMobileDevice.display();

weatherStation.removeObserver(mobileDevice);

console.log(weatherStation.observers);

weatherStation.removeObserver(secondMobileDevice);
console.log(weatherStation.observers);