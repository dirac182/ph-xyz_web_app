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
            <div className="fixed inset-0 bg-gray-800 opacity-80"></div>
                <div onClick={onClose} className="fixed inset-0 flex items-center justify-center">
                    <div className="w-auto h-auto bg-white p-16 opacity-100">
                        <div className="flex text-xl flex-col text-center justify-between h-full">
                            {children}
                            <div className="flex justify-center p-4">
                                {actionBar}
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
        document.querySelector(".modal-container")
    );
}

export default Modal;