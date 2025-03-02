// STLogItem.tsx 예시 (div 사용)
import { Log } from "@/types/Log";
import formatDate from "@/utils/formatDate";

interface STLogItemProps {
    log: Log;
    onSelectLog: (id: number) => void;
}

export default function STLogItem({ log, onSelectLog }: STLogItemProps) {
    return (
        <div className="stlog-item" onClick={() => onSelectLog(log.id)}>
            <div className="date">{formatDate(log.date)}</div>
            <div className="text">{log.text}</div>
        </div>
    );
}
