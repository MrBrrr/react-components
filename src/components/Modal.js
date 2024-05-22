import reactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onCloseClick, children, actionBar }) {
  useEffect(() => {
    // this prevents the background from scrolling when modal is shown
    document.body.classList.add("overflow-hidden"); // tailwind.css clas that applys overflow: hidden to the element
    return () => {
      document.body.classList.remove("overflow-hidden");
    }; // enables back when its's hidden
  }, []);

  // return (
  //     <div>
  //         <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
  //         <div className="absolute inset-40 p-10 bg-white">
  //             I'm a modal
  //         </div>
  //     </div>
  // );

  return reactDOM.createPortal(
    // this method tells react to render the modal in a different place
    // JSX to be redered
    <div>
      {/* <div onClick={onCloseClick} className="absolute inset-0 bg-gray-300 opacity-80"></div> */}
      {/* <div className="absolute inset-40 p-10 bg-white"> */}
      {/* fixed is better than absoluet in case of button and {modal}'d be down the ModalPage (under paragraphs) */}
      <div
        onClick={onCloseClick}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">{children}</div>
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </div>,
    // location where render, inside index.html / (html?)DOM
    document.querySelector(".modal-container"),
  );
}

export default Modal;
