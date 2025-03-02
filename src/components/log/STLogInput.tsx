export default function STLogInput() {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="stlog-input">
            <textarea placeholder="Text here..." />
            <div className="submit-container">
                <input type="password" placeholder="Password" />
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
}
