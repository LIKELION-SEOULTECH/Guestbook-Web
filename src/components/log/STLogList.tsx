import { Log } from "@/types/Log";
import STLogItem from "./STLogItem";

export default function STLogList() {
    const now = new Date();
    const logs: Log[] = [
        {
            id: 1,
            date: now,
            text: "First log First log First log First log First log First log First log First log First log First log First log ",
        },
        {
            id: 2,
            date: now,
            text: "Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log ",
        },
        { id: 3, date: now, text: "Third log" },
        {
            id: 4,
            date: now,
            text: "Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log ",
        },
        { id: 5, date: now, text: "Fifth log" },
        {
            id: 6,
            date: now,
            text: "Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log ",
        },
        {
            id: 7,
            date: now,
            text: "Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log ",
        },
        { id: 8, date: now, text: "Eighth log" },
        { id: 9, date: now, text: "Ninth log" },
        { id: 10, date: now, text: "Tenth log" },
        {
            id: 1,
            date: now,
            text: "First log First log First log First log First log First log First log First log First log First log First log ",
        },
        {
            id: 2,
            date: now,
            text: "Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log ",
        },
        { id: 3, date: now, text: "Third log" },
        {
            id: 4,
            date: now,
            text: "Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log ",
        },
        { id: 5, date: now, text: "Fifth log" },
        {
            id: 6,
            date: now,
            text: "Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log ",
        },
        {
            id: 7,
            date: now,
            text: "Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log Second log ",
        },
        { id: 8, date: now, text: "Eighth log" },
        { id: 9, date: now, text: "Ninth log" },
        { id: 10, date: now, text: "Tenth log" },
    ];

    return (
        <div className="stlog-list">
            {logs.map((log) => (
                <div className="item-container" key={log.id}>
                    <STLogItem log={log} onSelectLog={() => {}} />
                </div>
            ))}
        </div>
    );
}
