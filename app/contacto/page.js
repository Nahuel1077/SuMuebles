
import { Tinos } from 'next/font/google'
 
const tinos = Tinos({
  weight:'400',
  subsets: ["latin"],
})

export default function Home() {
  return (
    <section>
        <h2 className={`${tinos.className} text-center text-6xl max-xl:text-2xl p-12`}>Contacto</h2>
        <div className="flex flex-col p-12 items-center">
        <div className="flex flex-col m-4 sm:flex-row bg-[url(/wood-pattern.jpg)] bg-cover rounded-2xl w-full h-full sm:h-[400px] items-center sm:w-5/6">
          <div className="content-center sm:w-1/2 flex justify-center">
            <h2 className={`${tinos.className} text-2xl`}>Quiénes somos:</h2>
          </div>
          <ol className="text-center flex flex-col items-center w-4/5 sm:w-[50%]">
            <li className="mb-2 sm:w-3/4 text-justify">
              Somos una fábrica de muebles ubicada en Buenos Aires con más de 30 años en el rubro. Nos gusta seguir renovándonos para poder satisfacer al máximo las necesidades de nuestros clientes ofreciendo lo mejor en diseño y calidad.
            </li>
            <li><a href="mailto:sumueblesshop@hotmail.com?subject=Presupuesto&body=Hola, me contacto luego de ver su página sumuebles.com. Me gustaría solicitar un presupuesto para muebles de cocina/placard/muebles de baño. Saludos." className="bg-[#a48a7e] rounded-3xl shadow-black shadow-md text-center content-center block w-[180px] h-[40px] sm:h-[70px] border border-black hover:scale-75 transition-transform">Solicitar presupuesto</a></li>
          </ol>
          </div>
            <h6 className='sm:w-2/4 text-center'>Si te encontrás en Buenos Aires, contactanos por correo, o WhatsApp en los siguientes links:</h6>
        </div>
    </section>
  )
}