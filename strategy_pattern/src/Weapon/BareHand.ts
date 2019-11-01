import { WeaponInterface } from './WeaponInterface';

export class BareHand implements WeaponInterface {
    use(): void {
        console.log('Im fighting with bare hands');
    }
}
