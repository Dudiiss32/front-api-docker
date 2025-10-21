import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [notas, setNotas] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const buscarNotas = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8081/notas");
                setNotas(response.data.notas);
            } catch (error) {
                console.error("Erro ao buscar notas: ", error);
            } finally {
                setCarregando(false);
            }
        };

        buscarNotas();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full text-center w-screen">
            <h1 className="text-4xl font-bold mb-6">📘 Página Inicial</h1>

            <h2 className="text-2xl font-semibold mb-4">Notas</h2>

            {carregando ? (
                <p className="text-gray-600">Carregando...</p>
            ) : (
                <ul className="flex flex-col gap-3 w-96 border border-gray-300 rounded-lg p-4">
                    {notas.length > 0 ? (
                        notas.map((nota) => (
                            <li
                                key={nota.id}
                                className="p-3 border-b last:border-none hover:bg-gray-100 rounded transition"
                            >
                                {nota.titulo}
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">Nenhuma nota encontrada 😕</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Home;
