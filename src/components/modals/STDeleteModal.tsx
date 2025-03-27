import { deleteLog } from "@/apis/posts";
import STModalLayout from "./STModalLayout";
import CloseIcon from "@assets/svgs/close.svg?react";
import { useModal } from "@/context/ModalContext";
import { useState } from "react";

interface STDeleteModalProps {
    id: number;
    onClose: () => void;
    onDelete: () => void;
}

export default function STDeleteModal({
    id,
    onClose,
    onDelete,
}: STDeleteModalProps) {
    const { openModal } = useModal();
    const [password, setPassword] = useState("");
    async function onDeleteLog(id: number, password: string) {
        const res = await deleteLog(id, password);

        if (res === 204) {
            openModal({
                isSuccess: true,
                title: "SUCCESS",
                message: "Delete successfully",
                onClose: () => window.location.reload(),
            });
        } else {
            openModal({
                isSuccess: false,
                title: "FAILURE",
                message: "Wrong Password!",
            });
        }
        onDelete();
    }

    return (
        <STModalLayout size="s" onClickBackdrop={onClose}>
            <div className="small-modal-header">
                <div style={{ width: "30px" }} />
                <h2 className="small-modal-title">DELETE </h2>
                <CloseIcon className="button" onClick={onClose} />
            </div>

            <div className="small-modal-content">
                <div className="small-modal-content-text">
                    Enter your password
                </div>
                <input
                    type="password"
                    placeholder="Password"
                    className="submit-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                onClick={() => onDeleteLog(id, password)}
                className="small-modal-button button fail"
            >
                Delete
            </button>
        </STModalLayout>
    );
}
