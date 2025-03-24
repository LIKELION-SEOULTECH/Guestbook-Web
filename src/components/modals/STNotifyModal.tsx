import STModalLayout from "./STModalLayout";

interface STNotifyModalProps {
    onClose: () => void;
    isSuccess: boolean;
    title: string;
    message: string;
}

export default function STNotifyModal({
    onClose,
    isSuccess,
    title,
    message,
}: STNotifyModalProps) {
    return (
        <STModalLayout size="s" onClickBackdrop={onClose}>
            <h2 className="small-modal-title">{title}</h2>
            <div className="small-modal-content-text">{message}</div>
            <button
                onClick={onClose}
                className={`small-modal-button button 
                ${isSuccess ? "success" : "fail"}
                `}
            >
                Close
            </button>
        </STModalLayout>
    );
}
