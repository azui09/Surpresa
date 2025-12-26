import { motion } from "framer-motion";

export interface Memory {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export const memoriesData: Memory[] = [
  {
    id: 1,
    imageUrl: "./public/images/Pedido.jpeg",
    title: "O pedido de namoro",
    description:
      "O dia na qual eu pedi você em namoro, lá na roda gigante. Depois fomos passear mais no parque, andamos naquele carrinho de pedalar.",
  },
  {
    id: 2,
    imageUrl: "./public/images/Museu.jpeg",
    title: "O dia em que fomos no museu",
    description:
      "O dia na qual eu cortei o cabelo e nós se encontramos lá no museu, foi um dia complicado, mas no final das contas, foi muito divertido",
  },
  {
    id: 3,
    imageUrl: "./public/images/Baile.jpeg",
    title: "O dia do baile",
    description:
      "O dia onde nós tinhamos ido para o baile de formatura. Tenho que confessar que você estava muito linda.",
  },
  {
    id: 4,
    imageUrl: "./public/images/viagemsocorro.jpeg",
    title: "A viagem para Socorro",
    description:
      "Os dias na qual fomos para uma viagem juntos, foi divertido demais. Eu pude visitar diversos lugares, e o melhor de tudo, foi com você.",
  },
];

interface MemoryProps {
  memory: Memory;
  index: number;
}

export default function Cards({ memory, index }: MemoryProps) {
  const xOffset = index % 2 === 0 ? -50 : 50;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        x: xOffset,
        rotate: index % 2 === 0 ? -2 : 2,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        rotate: index % 2 === 0 ? -1 : 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: 0.1,
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer w-full max-w-md h-100"
    >
      <img
        src={memory.imageUrl}
        alt={memory.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 },
        }}
        className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end text-white"
      >
        <h3 className="text-2xl font-bold mb-2">{memory.title}</h3>
        <p className="text-gray-200 text-sm leading-relaxed">
          {memory.description}
        </p>
      </motion.div>
    </motion.div>
  );
}
