import React, { useRef } from 'react';
import NavBar from "../../components/Navbar";
import "./style.css";
import { Link } from "react-router-dom";

const handleAbrir = (videoRef) => {
  // Solicita permissão para acessar a câmera
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      // Define o stream de vídeo como a fonte do elemento de vídeo
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    })
    .catch(err => {
      console.error("Erro ao acessar a câmera: ", err);
    });
}

export const IA = () => {
  const videoRef = useRef(null);

  return (
    <div className="pagina">
      <NavBar />
      <div className="paginaIA">
        <h1>Abra sua câmera.</h1>
        <div className="botoes">
          <button onClick={() => handleAbrir(videoRef)}>Abrir</button>
        </div>
      </div>
      <video ref={videoRef} width="640" height="480" autoPlay></video>
    </div>
  );
};

export default IA;
