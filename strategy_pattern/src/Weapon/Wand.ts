import { WeaponInterface } from './WeaponInterface';

export class Wand implements WeaponInterface {
    use(): void {
        console.log('Im making magic with wand');
    }
}
