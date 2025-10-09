import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [notas, setNotas] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const buscarNotas = async () => {
            try{
                const response = await axios.get('http://127.0.0.1:8081/notas');
                setNotas(response.data.notas);
            } catch(error){
                console.error('Erro ao buscar notas: ', error);
            } finally{
                setCarregando(false)
            }
        }

        buscarNotas();
    }, [])

    return (
        <div className="flex gap-10 flex-col p-5 items-center justify-center w-screen">
            <h1>Você está na página inicial!</h1>
            
            <h2 className="text-3xl">Notas</h2>
            {carregando && (
                <p>Carregando ...</p>
            )}
            <ul className="flex flex-col border-2 gap-3">
                {!carregando && notas.map((nota) => (
                    <li key={nota.id}>{nota.titulo}</li>
                ))}
            </ul>
    
        </div>
    )
}
export default Home;