import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({onClose, children, actionBar}) {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [])
    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-800 opacity-80">
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="w-1/4 h-1/4 bg-white p-10">
                        <div className="flex flex-col text-center justify-between h-full">
                            {children}
                            <div className="flex justify-center">
                                {actionBar}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container")
    );
}

export default Modal;