import { Log } from "@/types/Log";
import STModalLayout from "./STModalLayout";

import formatDate from "@/utils/formatDate";

import CloseIcon from "@/assets/svgs/close.svg?react";
import DeleteIcon from "@/assets/svgs/delete.svg?react";

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
                    <b>{formatDate(log.date)}</b>
                    <CloseIcon onClick={onClose} className="button" />
                </div>
                <div className="detail-modal-content">{log.text}</div>
            </div>
            <div className="detail-modal-bottom">
                <div className="emotion-result">
                    <b>텍스트 감정 분석 결과</b>
                    <Positive />
                </div>
                <div className="delete-button button">
                    <DeleteIcon onClick={() => {}} />
                </div>
            </div>
        </STModalLayout>
    );
}

function Positive() {
    return <div className="emotion positive">😀</div>;
}

function Negative() {
    return <div className="emotion negative">😡</div>;
}

function Neutral() {
    return <div className="emotion">😶</div>;
}
