import STModalLayout from "./STModalLayout";
import CloseIcon from "@assets/svgs/close.svg?react";

interface STConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function STConfirmModal({
    isOpen,
    onClose,
}: STConfirmModalProps) {
    if (!isOpen) return null;
    return (
        <STModalLayout size="s" onClickBackdrop={onClose}>
            <div className="small-modal-header">
                <h2 className="small-modal-title">DELETE </h2>
                <CloseIcon className="button" />
            </div>

            <div className="small-modal-content">
                <div className="small-modal-content-text">
                    Delete successfully
                </div>
                <input
                    type="password"
                    placeholder="Password"
                    className="password"
                />
            </div>

            <button
                onClick={onClose}
                className="small-modal-button button fail"
            >
                Delete
            </button>
        </STModalLayout>
    );
}
