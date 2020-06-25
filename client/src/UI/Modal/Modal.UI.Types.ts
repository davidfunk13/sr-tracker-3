export default interface Modal {
    modalOpen: boolean,
    handleModalOpen?: () => void,
    handleModalClose: () => void,
    toggleModal?: () => void,
}