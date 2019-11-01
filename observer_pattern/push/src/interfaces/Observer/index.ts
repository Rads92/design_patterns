export interface ObserverInterface {
    update: (object: {[key: string]: any; }) => void;
};
