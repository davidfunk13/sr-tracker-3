interface FormComponentObject  {
    label: string; component: () => JSX.Element;
}

export default interface Modal {
    modalOpen: boolean,
    handleModalOpen?: () => void,
    handleModalClose: () => void,
    toggleModal?: () => void,
    components: FormComponentObject[];
}