import STNotifyModal from "@/components/modals/STNotifyModal";
import { createContext, useContext, useState } from "react";

interface ModalProps {
    isSuccess: boolean;
    title: string;
    message: string;
}

interface ModalContextProps {
    openModal: (props: ModalProps) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modalProps, setModalProps] = useState<ModalProps | null>(null);

    const openModal = (props: ModalProps) => {
        setModalProps(props);
    };

    const closeModal = () => {
        setModalProps(null);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {modalProps && (
                <STNotifyModal
                    isSuccess={modalProps.isSuccess}
                    title={modalProps.title}
                    message={modalProps.message}
                    onClose={closeModal}
                />
            )}
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
