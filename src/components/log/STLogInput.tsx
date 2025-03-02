import { useState } from "react";

interface STLogInputProps {
    handleAddLog: (text: string) => void;
}

export default function STLogInput({ handleAddLog }: STLogInputProps) {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");

    const onSumbit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() === "") return;
        handleAddLog(text);
        setText("");
    };

    return (
        <form onSubmit={onSumbit} className="stlog-input">
            <textarea
                placeholder="Text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="submit-container">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="password"
                />
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
}
