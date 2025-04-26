
import { Container } from "@/components/container";
import { GameProps } from "../../../../../games";
import { Input } from "@/components/input";
import { GameCard } from "@/components/GameCards";



async function getData(title:string){
    try{
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`)
        return res.json();
    }catch(err){
        return null;
    }
}
export default async function Search({
     
    params: { title } 
}:{params: {title : string}}){

    const games : GameProps[] = await getData(title);

    return(
        
        <main className="w-full text-black">
            <Container>
                <Input/>
                <h2 className="font-bold text-xl mt-5 mb-8">Jogos Encontrados</h2>
                {!games && (
                    <p>Nenhum jogo encontrado...</p>
                )}
                <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {games && games.map((item) => (
                        <GameCard key={item.id} data={item}/>
                    ))}               
                </section>
            </Container>
        </main>
    )
} 