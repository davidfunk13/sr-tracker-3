import TankIcon from '../assets/icons/roles/Tank.png';
import SupportIcon from '../assets/icons/roles/Support.png';
import DamageIcon from '../assets/icons/roles/Damage.png';
import ErrorIcon from '../assets/icons/other/loss.png';
import { RoleKey } from '../App.Types';

export default function convertRoleKey(role: RoleKey): { name: string, icon: string } {
    switch (role) {
        case 0:
            return { name: 'Tank', icon: TankIcon };
        case 1:
            return { name: 'Damage', icon: DamageIcon };
        case 2:
            return { name: 'Support', icon: SupportIcon };
        default:
            return { name: 'Error!', icon: ErrorIcon };
    }
};