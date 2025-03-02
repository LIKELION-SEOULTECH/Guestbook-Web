import STLogInput from "../log/STLogInput";
import Header from "./Header";

export default function STLogPageLayout() {
    return (
        <div className="stlog-page-layout">
            <Header />

            <main className="main">
                <STLogInput />
            </main>
        </div>
    );
}
