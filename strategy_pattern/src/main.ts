import { Human } from './Character/Human';
import { Axe } from './Weapon/Axe';
import { Elf } from './Character/Elf';
import { Bow } from './Weapon/Bow';

const axe = new Axe();
const human = new Human();
human.fight();
human.weapon = axe;
human.fight();

const elf = new Elf(new Bow());
elf.fight();