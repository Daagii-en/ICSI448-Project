export const mapState = (state) => {
    return {
        modal: state.passwordModal,
        mode: state.files.mode
    };
};

export const mapDispatch = (dispatch) => {
    return {
        onReset() {
            dispatch({
                type: "RESET",
                payload: {}
            });
        },
        updateFileInfo(password) {
            dispatch({
                type: "ADD_FORM_DATA",
                payload: {
                    password
                }
            });
        }
    };
};