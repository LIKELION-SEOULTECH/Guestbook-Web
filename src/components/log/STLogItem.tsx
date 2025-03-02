import { Log } from "@/types/Log";
import formatDate from "@/utils/formatDate";
import React from "react";

interface STLogItemProps {
    log: Log;
    onSelectLog: (id: number) => void;
}

function STLogItem({ log, onSelectLog }: STLogItemProps) {
    return (
        <div className="stlog-item" onClick={() => onSelectLog(log.id)}>
            <div className="date">{formatDate(log.date)}</div>
            <div className="text">{log.text}</div>
        </div>
    );
}

export default React.memo(STLogItem);
