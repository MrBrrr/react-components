import {useState} from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }
    return (
        // relative here breakes the modal "silly" implementation
        <div className="relative"> 
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && <Modal onCloseClick={handleClose}/>}
        </div>
    )
}

export default ModalPage;
