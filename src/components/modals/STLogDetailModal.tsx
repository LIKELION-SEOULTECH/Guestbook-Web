import { Log } from "@/types/Log";
import STModalLayout from "./STModalLayout";

import formatDate from "@/utils/formatDate";

import CloseIcon from "@/assets/svgs/close.svg?react";
import DeleteIcon from "@/assets/svgs/delete.svg?react";
import { EmotionIcon } from "../emotion/EmotionIcon";

interface STLogDetailModalProps {
    isOpen: boolean;
    log: Log;
    onClose: () => void;
}

export default function STLogDetailModal({
    isOpen,
    log,
    onClose,
}: STLogDetailModalProps) {
    if (!isOpen) return null;
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
                    <DeleteIcon onClick={() => {}} />
                </div>
            </div>
        </STModalLayout>
    );
}
