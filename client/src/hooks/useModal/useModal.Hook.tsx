import { useState, useEffect } from 'react';
import { UseModalHook, IUseModalState } from './useModal.Hook.Types';

const useModal: UseModalHook = () => {

    const [modalOpen, setModalOpen] = useState<IUseModalState>(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        console.log('hit')
        setModalOpen(false);
    };

    const toggleModal = () => {
        const toggled = !modalOpen;

        setModalOpen(toggled);
    };

    useEffect(() => {
        console.log(modalOpen)
    }, [modalOpen])

    return { modalOpen, setModalOpen, handleModalOpen, handleModalClose, toggleModal }
}

export default useModal;