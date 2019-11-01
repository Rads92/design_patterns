export class MobileDevice {
    constructor(weatherObject) {
        this.update = (data) => {
            this._weatherData = data;
        };
        this.display = () => {
            Object.keys(this._weatherData).forEach(key => {
                console.log(`${key} => ${this._weatherData[key]}`);
            });
        };
        this._weatherData = weatherObject;
    }
}
