import "@styles/App.css";
import STLogPageLayout from "./components/layout/STLogPageLayout";
import { Log } from "./types/Log";
import { useState } from "react";
import STLogDetailModal from "./components/modals/STLogDetailModal";

function App() {
    const [logs, setLogs] = useState<Log[]>([]);
    const [selectedLogId, setSelectedLogId] = useState<number | null>(null);
    const [detailModalOpen, setDetailModalOpen] = useState(false);

    const handleAddLog = (text: string) => {
        const newLog: Log = {
            id: logs.length + 1,
            date: new Date(),
            text,
        };
        setLogs([newLog, ...logs]);
    };

    const handleSelectLog = (id: number) => {
        setSelectedLogId(id);
        setDetailModalOpen(true);
    };

    const closeDetailModal = () => {
        setDetailModalOpen(false);
    };

    const selectedLog = logs.find((log) => log.id === selectedLogId) || null;

    return (
        <>
            <STLogPageLayout
                logs={logs}
                handleAddLog={handleAddLog}
                handleSelectLog={handleSelectLog}
            />
            {selectedLog && (
                <STLogDetailModal
                    isOpen={detailModalOpen}
                    log={selectedLog}
                    onClose={closeDetailModal}
                />
            )}
        </>
    );
}

export default App;
