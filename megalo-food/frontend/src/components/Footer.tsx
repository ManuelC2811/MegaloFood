import { useState } from "react";
import Modal from "react-modal";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(undefined);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="bg-red-500 opacity-95 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold font-raleway tracking-tight">
          MegaloFood
        </span>
        <span className="text-white font-bold font-raleway tracking-tight flex gap-4">
          <button onClick={() => openModal(<PrivacyPolicy />)}>
            Política de Privacidad
          </button>
          <button onClick={() => openModal(<TermsOfService />)}>
            Términos de Nuestro Servicio
          </button>
        </span>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Información adicional"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "50%",
            height: "80%",
            margin: "auto",
            borderRadius: "8px",
            padding: "20px",
          },
        }}
        closeTimeoutMS={0}
      >
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {modalContent && modalContent}
      </Modal>
    </div>
  );
};

export default Footer;
