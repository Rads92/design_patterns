import { WeaponInterface } from './WeaponInterface';

export class Axe implements WeaponInterface {
    use(): void {
        console.log('Im fighting with axe');
    }
}
