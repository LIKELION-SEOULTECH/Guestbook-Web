import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        proxy: {
            "/api/v1": {
                target: "http://localhost:8080",
            },
        },
    },
    resolve: {
        alias: {
            "@": "/src/",
            "@components": "/src/components/",
            "@styles": "/src/styles/",
            "@utils": "/src/utils/",
            "@pages": "/src/pages/",
            "@hooks": "/src/hooks/",
            "@assets": "/src/assets/",
            "@services": "/src/services/",
            "@types": "/src/types/",
        },
    },
});
