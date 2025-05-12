import Image from "next/image";
import Link from "next/link";
import { Tinos } from 'next/font/google'
 
const tinos = Tinos({
  weight:'400',
  subsets: ["latin"],
})

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-16 sm:px-20">
      {/* <div className="flex flex-col items-center justify-items-center max-w-[1000px] w-full bg-[#ff5e0073] rounded-3xl transition-all sm:hover:bg-[#ff5e0000]">
        <Image
          className="object-scale-down -z-10 rounded-3xl sm-w-screen sm-h-[400px] "
          src="/cocina25.jpeg"
          alt="portada"
          width={1000}
          height={500}
        />
        <div className={`${tinos.className} absolute top-[15%] sm:top-[30%] gap-12 flex flex-col items-center text-xl lg:text-5xl lg:gap-60`}>
          <h3>Tus muebles ideales a medida</h3>
          <a href="mailto:sumueblesshop@hotmail.com?subject=Presupuesto&body=Hola, me contacto luego de ver su página sumuebles.com. Me gustaría solicitar un presupuesto para muebles de cocina/placard/muebles de baño. Saludos." className="bg-[#c3a269c4] rounded-3xl shadow-black shadow-md w-full text-center content-center h-10 lg:h-[70px] border border-black hover:scale-75 transition-transform">Solicitar presupuesto</a>
        </div>
      </div> */}

    {/* PRUEBA */}
        <div className={`${tinos.className} relative top-[15%] sm:top-[22%] gap-12 flex flex-col items-center text-xl lg:text-5xl lg:gap-60`}>
          <h3 className="absolute top-[20%] z-[1]">Tus muebles ideales a medida</h3>
          <a href="mailto:sumueblesshop@hotmail.com?subject=Presupuesto&body=Hola, me contacto luego de ver su página sumuebles.com. Me gustaría solicitar un presupuesto para muebles de cocina/placard/muebles de baño. Saludos." className="bg-[#c3a269c4] rounded-3xl shadow-black shadow-md absolute top-[70%] text-center content-center h-10 lg:h-[70px] border border-black hover:scale-75 transition-transform z-[1] w-[80%] lg:w-[45%]">Solicitar presupuesto</a>
        <div id="mask" className="md:bg-cover bg-contain">
        </div>
      </div>

      <h1 className={`${tinos.className} text-6xl max-xl:text-2xl text-center sm:pt-8`}>LOS DETALLES SÍ MARCAN LA DIFERENCIA</h1>
      <main className="flex flex-col gap-8 items-center">
        <div className="flex flex-row gap-3 max-sm:flex-col">
          <Link 
            className="flex flex-col items-center justify-center" href="/cocinas">
            <Image
              className="object-cover opacity-50 sm:opacity-100 sm:hover:opacity-50 ease-linear duration-150 w-screen sm:w-full sm:h-full rounded-3xl sm:rounded-[20px_0px_0px_20px]"
              src="/cocina19.jpeg"
              alt="Sumuebles logo"
              width={700}
              height={300}
              priority
            />
            <h4 className= {`${tinos.className} absolute -z-10 font-semibold text-3xl`}>Cocinas</h4>
          </Link>
          <Link className="flex flex-col items-center justify-center" href="/placares">  
            <Image
              className="object-cover opacity-50 sm:opacity-100 sm:hover:opacity-50 ease-linear duration-150 w-screen sm:w-full rounded-3xl sm:rounded-[0px_20px_20px_0px]"
              src="/placard2.jpeg"
              alt="Sumuebles logo"
              width={300}
              height={300}
              priority
            />
            <h4 className= {`${tinos.className} absolute -z-10 font-semibold text-3xl`}>Placares</h4>
          </Link>
        </div>
        <div className="flex flex-col m-4 sm:flex-row bg-[#c3a269c4] rounded-2xl h-full sm:h-[400px] items-center bg-[url(/cocina5.jpeg)] bg-[10%_95%] bg-blend-darken bg-cover sm:max-w-[1146px]">
          <div className="content-center sm:w-1/2 flex justify-center">
            <h2 className={`${tinos.className} text-2xl`}>Quiénes somos:</h2>
          </div>
          <ol className="text-center flex flex-col items-center w-4/5 sm:w-[50%]">
            <li className="mb-2 sm:w-3/4 text-justify">
              Somos una fábrica de muebles ubicada en Buenos Aires con más de 30 años en el rubro. Nos gusta seguir renovándonos para poder satisfacer al máximo las necesidades de nuestros clientes ofreciendo lo mejor en diseño y calidad.
            </li>
            <li><h3 className="text-3xl p-6">¡Consultanos!</h3></li>
          </ol>
          </div>
      </main>
    </div>
  );
}
