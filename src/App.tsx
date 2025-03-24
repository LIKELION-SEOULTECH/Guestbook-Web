import "@styles/App.css";
import STLogPageLayout from "./components/layout/STLogPageLayout";
import { Log } from "./types/Log";
import { useCallback, useState } from "react";
import STLogDetailModal from "./components/modals/STLogDetailModal";
import { useModal } from "./context/ModalContext";
import { postLog } from "./apis/posts";

function App() {
    const [logs, setLogs] = useState<Log[]>([]);
    const [selectedLogId, setSelectedLogId] = useState<number | null>(null);
    const [detailModalOpen, setDetailModalOpen] = useState(false);
    const { openModal } = useModal();

    const handleAddLog = useCallback(
        async (content: string, username: string, password: string) => {
            postLog(content, username, password)
                .then((newLog) => {
                    console.log(newLog);
                    setLogs((prevLogs) => [newLog, ...prevLogs]);
                    return true;
                })
                .catch((error) => {
                    const errorMessage = error.response.data.error;
                    openModal({
                        isSuccess: false,
                        title: errorMessage.code,
                        message: errorMessage.message,
                    });
                    return false;
                });
        },
        [openModal]
    );

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
