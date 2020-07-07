import { SetStateAction } from 'react';

export type UseModalHook = () => [boolean, React.Dispatch<SetStateAction<boolean>>];

export type IUseModalState = boolean;