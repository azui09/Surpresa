import Cake from "./components/Cake";
import { motion } from "framer-motion";
import { memoriesData } from "./components/Cards";
import Cards from "./components/Cards";

function App() {
  const frase = "FELIZ ANIVERSÁRIO";
  const letras = frase.split("");

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-orange-50 via-red-100 to-rose-300 text-[#4a2c2a] flex flex-col">
      <section className="h-[70vh] w-full flex flex-col items-center relative">
        <h1 className="mt-8 text-7xl font-bold text-center z-10 drop-shadow-md flex justify-center">
          {letras.map((letra, index) => (
            <motion.span
              key={index}
              style={{ display: "inline-block" }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            >
              {letra === " " ? "\u00A0" : letra}
            </motion.span>
          ))}
        </h1>

        <div className="flex-1 w-full flex justify-center items-center">
          <div className="w-full h-full max-w-4xl">
            <Cake />
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <p className="mt-8 text-2xl font-semibold drop-shadow-md max-w-[70%]">
          Oiiiii Mari!!! Primeiramente, gostaria de desejar feliz aniversário.
          Hoje é um dia muito especial e espero que você goste dessa surpresa
          que estou fazendo agora. Confesso que virei quase duas madrugadas para
          poder fazer isso aqui, e pode apostar que foi feito com muito amor.
          Mesmo com dificuldades no futuro, tenho certeza de que nós iremos
          permanecer juntos, e cada vez mais unidos. Eu não poderia ter tido
          mais sorte em ter encontrado uma mulher tão incrível quanto você, ou
          seja, quando eu digo que todos os dias sou grato por você, realmente é
          verdade. Eu amo muito você e espero poder comemorar muitos mais
          aniversários!
        </p>
      </section>

      <section className="w-full py-20 px-4 flex flex-col items-center gap-8 min-h-screen overflow-hidden">
        <div className="w-24 border-t-2 border-rose-300/50 mb-6"></div>
        <h2 className="text-4xl font-bold text-center mb-16 text-[#4a2c2a]">
          Algumas das nossas fotos importantes!
        </h2>

        <div className="w-full max-w-5xl flex flex-col gap-y-24 relative px-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-rose-300/30 -translate-x-1/2 z-0 hidden md:block"></div>

          {memoriesData.map((memory, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={memory.id}
                className={`relative z-10 flex ${
                  isEven ? "justify-start md:ml-12" : "justify-end md:mr-12"
                }`}
              >
                <div className={`${isEven ? "md:-mt-12" : "md:mt-12"}`}>
                  <Cards memory={memory} index={index} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default App;
