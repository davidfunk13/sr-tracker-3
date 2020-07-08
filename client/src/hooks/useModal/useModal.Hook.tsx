import { useState, useEffect } from 'react';
import { UseModalHook, IUseModalState } from './useModal.Hook.Types';

const useModal: UseModalHook = () => {

    const [modalOpen, setModalOpen] = useState<IUseModalState>(false);

    useEffect(() => {
        console.log(modalOpen)
    }, [modalOpen])

    return [modalOpen, setModalOpen];
}

export default useModal;