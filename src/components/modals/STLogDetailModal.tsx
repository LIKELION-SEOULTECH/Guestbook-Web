import { Log } from "@/types/Log";
import STModalLayout from "./STModalLayout";

import formatDate from "@/utils/formatDate";

import CloseIcon from "@/assets/svgs/close.svg?react";
import DeleteIcon from "@/assets/svgs/delete.svg?react";
import { EmotionIcon } from "../emotion/EmotionIcon";
import { useState } from "react";
import STDeleteModal from "./STDeleteModal";

interface STLogDetailModalProps {
    log: Log;
    onClose: () => void;
}

export default function STLogDetailModal({
    log,
    onClose,
}: STLogDetailModalProps) {
    const [isDeleting, setIsDeleting] = useState(false);

    if (isDeleting) {
        return (
            <STDeleteModal
                id={log.id}
                onClose={() => setIsDeleting(false)}
                onDelete={() => {
                    setIsDeleting(false);
                    onClose();
                }}
            />
        );
    }

    return (
        <STModalLayout size="l" onClickBackdrop={onClose}>
            <div className="detail-modal-top">
                <div className="detail-modal-header">
                    <b>{formatDate(log.createdAt)}</b>
                    <CloseIcon onClick={onClose} className="button" />
                </div>
                <div className="detail-modal-content">{log.content}</div>
            </div>
            <div className="detail-modal-bottom">
                <div className="emotion-result">
                    <b>텍스트 감정 분석 결과</b>
                    <EmotionIcon emotion={log.emotion} />
                </div>
                <div className="delete-button button">
                    <DeleteIcon onClick={() => setIsDeleting(true)} />
                </div>
            </div>
        </STModalLayout>
    );
}
