import Alert from "@mui/material/Alert";
import { Fragment, useState } from "react";
import './Alert.css';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Confirm } from "../../../commponents/confirm";
import Button from "../../../commponents/button";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


const ChildModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <button onClick={handleOpen}>자식 모달</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">자식 모달 Alert</h2>
                    <Alert variant="outlined" severity="info">
                        This is an outlined info Alert.
                    </Alert>
                    <Button onClick={handleClose}>자식모달 닫기</Button>
                </Box>

            </Modal>

        </Fragment>
    );
}


export const ComAlert = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    }

    const handleModalClose = () => {
        setModalOpen(false);
    }

    return (
        <>
            <Button />
            <h2>model / Alert / confirm</h2>
            <br/>
            <button className="button-green" onClick={handleModalOpen}>
                {modalOpen ? "modal 닫기" : "modal 열기"}
            </button>
            <br />
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="success-modal-title"
                aria-describedby="success-modal-description"
            >
                <Box className="modal-content">
                    <Alert variant="outlined" severity="success">
                        This is an outlined success Alert.
                    </Alert>
                    <button className="button-red" onClick={handleModalClose} style={{ marginTop: '10px' }}>
                        닫기
                    </button>
                    <ChildModal />
                </Box>
            </Modal>

            <br />
            <Alert variant="outlined" severity="warning">
                This is an outlined warning Alert.
            </Alert>
            <br />
            <Alert variant="outlined" severity="error">
                This is an outlined error Alert.
            </Alert>
            <br />
            <Confirm />

        </>
    );
}
