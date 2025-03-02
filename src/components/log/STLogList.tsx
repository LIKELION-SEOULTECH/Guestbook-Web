import { Log } from "@/types/Log";
import STLogItem from "./STLogItem";
import React from "react";

interface STLogListProps {
    logs: Log[];
    onSelectLog: (id: number) => void;
}

function STLogList({ logs, onSelectLog }: STLogListProps) {
    return (
        <div className="stlog-list">
            {logs.map((log) => (
                <div className="item-container" key={log.id}>
                    <STLogItem log={log} onSelectLog={onSelectLog} />
                </div>
            ))}
        </div>
    );
}

export default React.memo(STLogList);
