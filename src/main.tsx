import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.css";
import App from "./App.tsx";
import { ModalProvider } from "./context/ModalContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ModalProvider>
            <App />
        </ModalProvider>
    </StrictMode>
);
