import axios from "axios";
import { useState } from "react";

const Form = () => {
    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post("http://127.0.0.1:8081/notas", {
                titulo: titulo,
                texto: texto,
            });
            console.log("Resposta da API: ", response.data)
            setTitulo("")
        } catch(error){
            console.error("Erro ao enviar nota:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-2 p-5 rounded w-96 items-center justify-center">
            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="border p-2 rounded" placeholder="Digite o título da nota"/>
            <label htmlFor="texto">Texto:</label>
            <input type="text" id="texto" name="texto" value={texto} onChange={(e) => setTexto(e.target.value)} className="border p-2 rounded" placeholder="Digite o título da nota"/>
            
            
            <button type="submit">Enviar</button>
        </form>
    )
}
export default Form;