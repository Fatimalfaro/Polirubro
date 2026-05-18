import Swal from "sweetalert2";
const Error404 = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "No pudimos completar la acción que intentaste.",
    footer: `<Link to={'/'}>Volver al Inicio</Link> `,
  });
  return <div></div>;
};

export default Error404;
