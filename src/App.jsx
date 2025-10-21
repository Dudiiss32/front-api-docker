import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
    return (
        <BrowserRouter>
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-300">
                <h1 className="text-xl font-semibold">🗒️ Minhas Notas</h1>
                <div className="flex gap-4">
                    <Link
                        to={"/"}
                        className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 transition"
                    >
                        Ver notas
                    </Link>
                    <Link
                        to="/form"
                        className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 transition"
                    >
                        Adicionar Nota
                    </Link>
                </div>
                
            </nav>

            {/* Conteúdo principal */}
            <main className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/form" element={<Form />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
