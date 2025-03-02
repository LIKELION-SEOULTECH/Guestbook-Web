import STLogInput from "../log/STLogInput";
import STLogList from "../log/STLogList";
import Header from "./Header";

export default function STLogPageLayout() {
    return (
        <div className="stlog-page-layout">
            <Header />

            <main className="main">
                <STLogInput />
                <STLogList />
            </main>
        </div>
    );
}
