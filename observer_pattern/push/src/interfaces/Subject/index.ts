import { ObserverInterface } from "../Observer/index";

export class ObserverClass {
    protected _observers: ObserverInterface[];

    constructor(initialObservers = []) {
        this._observers = initialObservers;
    }

    get observers() {
        return this._observers;
    }

    set observers(newObservers: ObserverInterface[]) {
        this._observers = newObservers;
    }
}
export interface SubjectInterface extends ObserverClass {
    registerObserver: (observer: ObserverInterface | ObserverInterface[]) => void;
    notifyObserver: () => void;
    removeObserver: (observer: ObserverInterface) => void;
};
