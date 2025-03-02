import STModalLayout from "./STModalLayout";

interface STNotifyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function STNotifyModal({ isOpen, onClose }: STNotifyModalProps) {
    if (!isOpen) return null;
    return (
        <STModalLayout size="s" onClickBackdrop={onClose}>
            <h2 className="notify-title">SUCCESS</h2>
            <div className="notify-content">Delete successfully</div>
            <button
                onClick={onClose}
                className={`notify-button button 
                ${true === true ? "success" : "fail"}
                `}
            >
                Close
            </button>
        </STModalLayout>
    );
}
