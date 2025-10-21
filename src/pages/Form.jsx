import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8081/notas", {
                titulo: titulo,
                texto: texto,
            });
            console.log("Resposta da API: ", response.data);
            setTitulo("");
            setTexto("");
            navigate("/");
        } catch (error) {
            console.error("Erro ao enviar nota:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-96 border border-gray-300 rounded-lg p-6 text-center"
            >
                <h2 className="text-2xl font-semibold mb-2">✏️ Criar nova nota</h2>

                <label htmlFor="titulo" className="text-left font-medium">
                    Título:
                </label>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Digite o título"
                />

                <label htmlFor="texto" className="text-left font-medium">
                    Texto:
                </label>
                <textarea
                    id="texto"
                    name="texto"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    className="border border-gray-300 p-2 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                    placeholder="Digite o texto da nota"
                ></textarea>

                <button
                    type="submit"
                    className="bg-black text-white font-medium py-2 rounded hover:bg-gray-800 transition"
                >
                    Enviar
                </button>

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
                >
                    Voltar
                </button>
            </form>
        </div>
    );
};

export default Form;
