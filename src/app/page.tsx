import { Container } from "@/components/container";
import { GameProps } from "../../games";
import Link from "next/link";
import Image from "next/image";
import {BsArrowRightSquare} from "react-icons/bs"
import { Input } from "@/components/input";
import {GameCard} from '@/components/GameCards'

// FUNÇAO PARA PEGAR A API
async function getApi(){
  try{
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next: {revalidate: 320}})//PEGA A URL NA VARIAVEL DE AMBIENTE
    return res.json();
  }catch(err){ //PEGA O ERRO E JOGA UMA MENSAGENS SE DER ERRADO
    throw new Error("failed to fetch data")
  }
}

async function GetGames(){
  try{
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games` , {next: {revalidate: 320}})
    return res.json();
  }catch(err){
    throw new Error ("failed to fetch data")
  }
}
// TEM QUE SER ASICRONA PORQUE A FUNÇAO DE PEGAR A API É ASSICRONA
export default async function Home() {
  const dalygames : GameProps = await getApi();
  const data : GameProps[] = await GetGames();
  return (
    <main className="w-full">
      <Container>
        <h1 className="font-semibold text-center text-lg mt-8 mb-5">Todo dia um jogo exclusivo para você</h1>
        <Link href={`/game/${dalygames.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative">

              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-3">
                <p className="font-bold text-lg text-white">{dalygames.title}</p>
                <BsArrowRightSquare size={24} color="#fff"/>
              </div>
              <Image src={dalygames.image_url}
              alt={dalygames.title}
              priority={true}
              fill={true}
              sizes="(max-width: 768px) 100vw , (max-width: 1200px) 44vw"
              className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
              />
            </div>     
          </section>
        </Link>
        <Input/>

        <h2 className="font-bold mt-8 mb-5">Jogos para conhecer</h2>
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <GameCard key={item.title} data={item}/>
          ))}
        </section>
      </Container> 
    </main>
  );
}
