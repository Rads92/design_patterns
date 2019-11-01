import { BareHand } from '../Weapon/BareHand';
export class Character {
    constructor(_weapon = new BareHand) {
        this._weapon = _weapon;
    }
    fight() {
        this._weapon.use();
    }
    get weapon() {
        return this._weapon;
    }
    set weapon(newWeapon) {
        this._weapon = newWeapon;
    }
}
