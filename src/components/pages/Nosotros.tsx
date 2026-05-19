import fotoLuis from "../../assets/foto-luis.jpeg";
import fotoFatima from "../../assets/foto-fatima.jpeg";
import fotoValentin from "../../assets/Foto-mia.jpg";

const Nosotros = () => {
  return (
    <section className="bg-black py-10">
      <article className="flex flex-col py-4 container mx-auto border px-5 rounded-4xl border-green-500 shadow-[0_0_15px] shadow-green-500/80">
        <div className="text-center border-b w-fit mx-auto text-green-500 font-semibold text-2xl">
          <h1> 🛒Quienes Somos 🛒</h1>
        </div>
        <div className="flex flex-col gap-4 mt-3 text-center">
          <p>
            Somos Luis, Fátima y Valentín, tres estudiantes de Rolling Code unidos por una misma pasión: la tecnología y el deseo constante de superarnos.
          </p>
          <p>
            Nuestro proyecto MultiClick nace como proyecto del final de segund módulo del curso de FullStack Developer, pero representa mucho más que una simple práctica académica, es el reflejo de nuestro esfuerzo, dedicación y compromiso por insertarnos en el mundo del desarrollo profesional.  
          </p>
          <p>
            Fátima, con 27 años, es estudiante de Ingeniería en Sistemas y aporta una base sólida de conocimientos técnicos y una mirada analítica al equipo. Luis, con 30 años, está dando sus primeros pasos en el mundo de la programación, apostando al cambio y nuevas oportunidades en el sector tecnológico. Valentín, de 26 años, estudiante de la Tecnicatura en Programación, busca el aprendizaje continuo de nuevas tecnologías para así crecer profesionalmente en el ámbito del desarrollo y poder trabajar de lo que le apasiona. 
          </p>
        </div>
        <div className="container mx-auto mt-5 pb-3 grid grid-cols-3 gap-6 px-4 ">
          <div className="flex flex-col items-center">
            <img
              src={fotoLuis}
              alt="foto-luis"
              className="w-full aspect-square object-cover object-top rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h4 className=" text-green-500 font-semibold mt-3 text-xl">Luis</h4>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={fotoFatima}
              alt="foto-fatima"
              className="w-full aspect-square object-cover object-top rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h4 className="text-green-500 font-semibold mt-3 text-xl">Fátima</h4>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={fotoValentin}
              alt="foto-valentin"
              className="w-full aspect-square object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h4 className="text-green-500 font-semibold mt-3 text-xl">Valentín</h4>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Nosotros;
