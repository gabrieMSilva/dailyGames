import Link from "next/link"
import Image from "next/image"
import { GameProps } from "../../../games"
import {BsArrowRightCircle} from "react-icons/bs"


// async function GetGameProps(){
//     try{
//         const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games` , {next: {revalidate: 320}})
//         return res.json();
//     }catch(err){
//         throw new Error ("failed do get a new game")
//     }
// }

interface GetGameProps{
    data: GameProps
}

export function GameCard({data} : GetGameProps){ 
    return(
        <Link href={`/game/${data.id}`}>
            <section className="bg-slate-200 w-full rounde-lg p-4 mb-5">
                <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
                    <Image 
                        className="rounde-lg object-cover"
                        src={data.image_url}
                        alt={data.title}
                        fill={true}
                        quality={100}
                        sizes="(max-width: 768px) 100vw , (max-width: 1200px) 44vw"
                    />
                </div>
                <div className="flex items-center justify-between mt-4 ">
                    <p className="text-sm font-bold text-black text-ellipsis truncate overflow-hidden whitespace-nowrap">{data.title}</p>
                    <BsArrowRightCircle size={24}/>
                </div>
           </section>
        </Link>
    )
}