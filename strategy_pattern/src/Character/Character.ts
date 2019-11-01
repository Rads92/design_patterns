import { WeaponInterface } from '../Weapon/WeaponInterface';
import { BareHand } from '../Weapon/BareHand';

export abstract class Character {
    constructor(private _weapon: WeaponInterface = new BareHand) {}

    fight() {
        this._weapon.use();
    }

    get weapon(): WeaponInterface {
        return this._weapon;
    }
    
    set weapon(newWeapon: WeaponInterface) {
        this._weapon = newWeapon;
    }

}