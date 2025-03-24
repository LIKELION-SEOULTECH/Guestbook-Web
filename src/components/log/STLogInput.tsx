import { useState } from "react";

interface STLogInputProps {
    handleAddLog: (text: string, username: string, password: string) => void;
}

export default function STLogInput({ handleAddLog }: STLogInputProps) {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const onSumbit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() === "") return;
        handleAddLog(text, username, password);
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
                    type="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="submit-input"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="submit-input"
                />
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
}
