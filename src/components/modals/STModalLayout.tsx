interface STModalLayoutProps {
    children: React.ReactNode;
    backdrop?: boolean;
    size: "s" | "l";
}

export default function STModalLayout({
    children,
    backdrop = true,
    size,
}: STModalLayoutProps) {
    return (
        <div className="st-modal-layout">
            {backdrop && <div className="backdrop" />}
            <div
                className={`modal-content`}
                style={{
                    width: size === "s" ? "496px" : "1200px",
                    height: size === "s" ? "270px" : "",
                    minHeight: size === "s" ? "" : "300px",
                    maxHeight: size === "s" ? "" : "800px",
                    padding: size === "s" ? "20px 24px" : "30px",
                }}
            >
                {children}
            </div>
        </div>
    );
}
