export class ObserverClass {
    constructor(initialObservers = []) {
        this._observers = initialObservers;
    }
    get observers() {
        return this._observers;
    }
    set observers(newObservers) {
        this._observers = newObservers;
    }
}
;
