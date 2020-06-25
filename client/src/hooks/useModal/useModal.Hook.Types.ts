import Modal from '../../UI/Modal/Modal.UI.Types';

interface ModalHook {
    modalOpen: boolean,
    handleModalOpen: () => void,
    handleModalClose: () => void,
    toggleModal: () => void,
}

export type UseModalHook = () => ModalHook;

export type IUseModalState = boolean;