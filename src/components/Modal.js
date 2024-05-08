import reactDOM from 'react-dom';

function Modal() {
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
            <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-40 p-10 bg-white">I'm a modal</div>
        </div>,
        // location where render, inside index.html / (html?)DOM
        document.querySelector(".modal-container")
    )
}

export default Modal;
