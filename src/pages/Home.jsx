import { Link } from "react-router-dom";

// components
import HomeMenu from "../components/HomeMenu";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <HomeMenu />
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crie propostas profissionais com rapidez.
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Um sistema simples e direto para gerar propostas em PDF, organizar
            serviços e impressionar clientes sem dor de cabeça.
          </p>

          <Link
            to={"/proposal"}
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Começar Agora
          </Link>
        </div>

        <div className="flex-1">
          <img
            className="rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1681505531034-8d67054e07f6?q=80&w=1170"
            alt="Preview"
          />
        </div>
      </div>
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center" id="sobre">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Por que usar o Proposify?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Criação Rápida</h3>
              <p className="text-gray-600">
                Monte propostas profissionais em poucos minutos com layout
                consistente.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">PDF Impecável</h3>
              <p className="text-gray-600">
                Gere PDFs elegantes de forma automática, sem precisar ajustar
                nada.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Organização Fácil</h3>
              <p className="text-gray-600">
                Armazene serviços, preços e clientes num só lugar.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Antes vs Depois</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="text-xl font-bold text-red-600 mb-4">Antes</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• PDF desalinhado</li>
                <li>• Layout improvisado</li>
                <li>• Muito tempo perdido</li>
                <li>• Clientes confusos</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded shadow">
              <h3 className="text-xl font-bold text-green-600 mb-4">Depois</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Propostas profissionais</li>
                <li>• Layout automático</li>
                <li>• Agilidade real</li>
                <li>• Mais conversão de clientes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Dúvidas frequentes
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 text-center">
                O Proposify é gratuito?
              </h3>
              <p className="text-gray-600 text-center">
                Sim, você pode criar propostas à vontade sem pagar nada durante
                o período inicial.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-center text-gray-900">
                O PDF fica com boa qualidade?
              </h3>
              <p className="text-gray-600 text-center">
                Claro. Usamos renderização em alta resolução para garantir
                nitidez e alinhamento perfeito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
