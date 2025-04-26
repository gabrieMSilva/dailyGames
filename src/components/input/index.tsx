"use client"

import {FaSearch} from 'react-icons/fa'
import {FormEvent, useState} from 'react'
import { useRouter } from 'next/navigation';



export function Input(){
    const [input , setInput] = useState("");
    const router  = useRouter();

    function HandlerSubmit(e : FormEvent){
        e.preventDefault();

        if(input === ""){
            alert("Digite algum jogo");
            return;     
        }
        router.push(`/game/search/${input}`)
    }


    return(
        <form 
            onSubmit={HandlerSubmit}
            className='w-full bg-slate-200 my-4 flex items-center justify-between gap-2 rounded-lg p-2'
        >
            <input 
                type="text"
                placeholder='Procurando algum jogo?...'
                value={input}
                onChange={(event) => setInput(event.target.value) }
                className='bg-slate-200 outline-none w-11/12'
            />
            <button>
                <FaSearch size={24} color='#ea580c' className='cursor-pointer'/>
            </button>
        </form>
    )
}