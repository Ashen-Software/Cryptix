
type Ticket = {
    id: number;
    precio: string;
    titulo: string;
    subtitulo: string;
    imagen: string;
    hora: string; // Add the missing 'hora' property
    descripcion: string; // Add the missing 'descripcion' property
    ciudad: string; // Add the missing 'ciudad' property
    fecha: string; // Add the missing 'fecha' property
    cantidad: number;
  };

const ticketsCarrito: Ticket[] = [];
export default ticketsCarrito;
