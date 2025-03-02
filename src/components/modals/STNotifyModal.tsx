import STModalLayout from "./STModalLayout";

interface STNotifyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function STNotifyModal({ isOpen, onClose }: STNotifyModalProps) {
    if (!isOpen) return null;
    return (
        <STModalLayout size="s" onClickBackdrop={onClose}>
            <h2 className="small-modal-title">SUCCESS</h2>
            <div className="small-modal-content-text">Delete successfully</div>
            <button
                onClick={onClose}
                className={`small-modal-button button 
                ${true === true ? "success" : "fail"}
                `}
            >
                Close
            </button>
        </STModalLayout>
    );
}
