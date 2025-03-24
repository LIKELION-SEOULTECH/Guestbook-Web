import { Log } from "@/types/Log";
import STLogInput from "../log/STLogInput";
import STLogList from "../log/STLogList";
import Header from "./Header";

interface STLogPageLayoutProps {
    logs: Log[];
    handleAddLog: (content: string, username: string, password: string) => void;
    handleSelectLog: (id: number) => void;
}

export default function STLogPageLayout({
    logs,
    handleAddLog,
    handleSelectLog,
}: STLogPageLayoutProps) {
    return (
        <div className="stlog-page-layout">
            <Header />

            <main className="main">
                <STLogInput handleAddLog={handleAddLog} />
                <STLogList logs={logs} onSelectLog={handleSelectLog} />
            </main>
        </div>
    );
}
