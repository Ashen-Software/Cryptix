import { useState } from 'react';
import Evento from "../Evento/Evento.js";
import tickets from "../../assets/tickets/ticketsDisponibles.js";
import "./eventos.css";

const Eventos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust this number as needed

  const totalPages = Math.ceil(tickets.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = tickets.slice(startIndex, endIndex);

  return (
    <div className="contenedor">
      <div className="titulos">
        <h2 className="titulo">New Events</h2>
        <p className="subtitulo">Check out the latest events</p>
      </div>
      <div className="eventos">
        {currentItems.map((ticket) => (
          <Evento
            key={ticket.id}
            {...ticket}
          />
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          &#10094;
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Eventos;
