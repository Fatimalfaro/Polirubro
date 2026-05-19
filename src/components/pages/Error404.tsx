import { Link } from "react-router";
import error from '../../assets/error404.png'
const Error404 = () => {
    return (
      <div className="bg-black py-6">
        <div className="flex flex-col justify-center items-center pb-5 mx-auto max-w-sm w-full">
          <img src={error} alt="Error 404" className="h-45"/>
          <h3>¡Ocurrió un error!</h3>
          <p>No pudimos completar la acción que intentaste</p>
          <Link to={'/'} className="text-xl font-semibold mt-5 py-3 px-8 bg-green-600 text-black rounded-xl hover:text-gray-100 duration-500 ">Volver al inicio</Link>
        </div>
      </div>
    );
};

export default Error404;