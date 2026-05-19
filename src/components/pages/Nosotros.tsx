import fotoLuis from '../../assets/foto-luis.jpeg'
import fotoFatima from '../../assets/foto-fatima.jpeg'
import fotoValentin from '../../assets/Foto-mia.jpg'

const Nosotros = () => {
  return (
      <section className="bg-black">
        <article className="flex flex-col py-4 container mx-auto">
          <div className="text-center border-b w-fit mx-auto">
          <h1> Quienes Somos 🖥</h1>
          </div>
          <div className="flex flex-col gap-4 mt-3">
          <p>
            En Multiclick estamos dando nuestros primeros pasos en el mundo del
            e-commerce con el objetivo de brindar una experiencia de compra
            online simple, segura y accesible. Nacimos con la idea de acercar
            productos de calidad y ofrecer una atención cercana, transparente y
            confiable para cada cliente.
          </p>
          <p>
            Trabajamos día a día para crecer, incorporar nuevas opciones y
            mejorar constantemente nuestro servicio, apostando a la innovación y
            al compromiso con quienes nos eligen. Creemos que cada compra es una
            oportunidad para generar confianza y construir una comunidad que
            acompañe nuestro crecimiento.
          </p>
          </div>
        </article>
        <article className="">
          <div className='flex flex-col items-center'>
            <img src={fotoLuis} alt="foto-luis" className=''/>
            <h4 className="">LUIS</h4>
          </div>
          <div className='h-screen'>
            <img src={fotoFatima} alt="foto-fatima" />
            <h4 className="text-center">FATIMA</h4>
          </div>
          <div>
            <img src={fotoValentin} alt="foto-valentin" />
            <h4 className="text-center">VALENTIN</h4>
          </div>
        </article>
      </section>
  );
};

export default Nosotros;
