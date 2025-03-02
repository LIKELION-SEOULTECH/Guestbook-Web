import { Log } from "@/types/Log";
import STLogInput from "../log/STLogInput";
import STLogItem from "../log/STLogItem";
import Header from "./Header";

export default function STLogPageLayout() {
    const now = new Date();
    const logs: Log[] = [
        { id: 1, date: now, text: "First log" },
        { id: 2, date: now, text: "Second log" },
        { id: 3, date: now, text: "Third log" },
    ];
    return (
        <div className="stlog-page-layout">
            <Header />

            <main className="main">
                <STLogInput />
                <STLogItem
                    log={logs[0]}
                    onSelectLog={(id) => console.log(id)}
                />
            </main>
        </div>
    );
}
