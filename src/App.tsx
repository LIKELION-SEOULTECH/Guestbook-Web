import "@styles/App.css";
import STLogPageLayout from "./components/layout/STLogPageLayout";
import { Log } from "./types/Log";
import { useCallback, useState } from "react";
import STLogDetailModal from "./components/modals/STLogDetailModal";
import STConfirmModal from "./components/modals/STConfirmModal";

function App() {
    const [logs, setLogs] = useState<Log[]>([]);
    const [selectedLogId, setSelectedLogId] = useState<number | null>(null);
    const [detailModalOpen, setDetailModalOpen] = useState(false);

    const handleAddLog = useCallback((text: string) => {
        const newLog: Log = {
            id: Date.now(),
            date: new Date(),
            text,
        };
        setLogs((prevLogs) => [newLog, ...prevLogs]);
    }, []);

    const handleSelectLog = useCallback((id: number) => {
        setSelectedLogId(id);
        setDetailModalOpen(true);
    }, []);

    const closeDetailModal = useCallback(() => {
        setDetailModalOpen(false);
    }, []);

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
