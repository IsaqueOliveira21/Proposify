import { useSelector } from "react-redux";

// Components
import ServiceCard from "./ServiceCard";

const Preview = () => {
    const { clientInfo, services, pricing, notes, theme } = useSelector(state => state.proposal);
    const total = services.reduce((acc, service) => acc + Number(service.price), 0);

    const containerStyle = theme == "dark" ? "bg-slate-900 text-white" : "bg-white text-gray-900"
    return (
        <div className={`${containerStyle} p-6 rounded-xl shadow-xl`}>
            <div className="flex justify-center items-center">
                <h2 className="md:text-xl text-md font-bold">{clientInfo.company ? "Proposta para " + clientInfo.company : "Defina o nome do cliente para a proposta"}</h2>
            </div>
            <div className="w-full border-b-2 border-gray-300 my-5"></div>
            <div className="p-3 border-2 border-gray-300 md:flex md:justify-between md:items-center md:space-y-0 space-y-3">
                <p><span>Cliente:</span> {clientInfo.name ? clientInfo.name : 'Nome do Cliente'}</p>
                <p><span>Email:</span> {clientInfo.email ? clientInfo.email : 'E-mail do cliente'}</p>
                <p><span>Telefone:</span> {clientInfo.phone ? clientInfo.phone : '(00) 9 0000-0000'}</p>
            </div>
            <div className="w-full border-b-2 border-gray-300 my-5"></div>
            <div className="w-full">
                <h3 className="text-lg font-semibold mb-3">Serviços</h3>
                {(!services || services.length === 0) && (
                    <p className="text-center">Nenhum serviço adicionado...</p>
                )}
                { services && services.map(s => (
                    <ServiceCard key={s.id} serviceTitle={s.title} serviceDescription={s.description} serviceValue={s.price}/>
                )) }
            </div>
            <div className="w-full border-b-2 border-gray-300 my-5"></div>
            <div className="p-5 bg-gray-300 rounded-lg md:flex md:justify-between md:items-center md:space-y-0 space-y-2">
                <p className="text-blue-800"><span className="font-bold">Total:</span> R$ {total.toFixed(2)}</p>
                <p className="text-blue-800"><span className="font-bold">Qtd. Serviços:</span> {services.length}</p>
            </div>
        </div>
    );
}

export default Preview