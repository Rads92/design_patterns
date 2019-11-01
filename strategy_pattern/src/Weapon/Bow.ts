import { WeaponInterface } from './WeaponInterface';

export class Bow implements WeaponInterface {
    use(): void {
        console.log('Im using bow and arrows');
    }
}
