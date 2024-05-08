import reactDOM from 'react-dom';
import Button from './Button';

function Modal({ onCloseClick }) {
    // return (
    //     <div>
    //         <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
    //         <div className="absolute inset-40 p-10 bg-white">
    //             I'm a modal
    //         </div>
    //     </div>
    // );

    return reactDOM.createPortal( // this method tells react to render the modal in a different place
        // JSX to be redered
        <div>   
            <div onClick={onCloseClick} className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-40 p-10 bg-white">
                I'm a modal
                <Button danger onClick={onCloseClick}>Close Modal</Button>
            </div>
        </div>,
        // location where render, inside index.html / (html?)DOM
        document.querySelector(".modal-container")
    )
}

export default Modal;
