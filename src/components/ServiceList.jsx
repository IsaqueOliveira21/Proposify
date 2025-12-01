import { useSelector, useDispatch } from "react-redux";
import { removeService } from "../redux/proposalSlice";

const ServiceList = () => {
    const dispatch = useDispatch();

    const services = useSelector(state => state.proposal.services);

    return (
        <div className='w-full bg-gray-200 rounded-2xl p-4'>
            <h2 className='text-blue-600 font-semibold text-lg mb-3'>Lista de Serviços</h2>
            <div className="w-full my-3">
            {services && services.length > 0 ? (
                services.map(service => (
                    <div className="px-4 py-3 bg-gray-300 rounded-xl mb-2 flex justify-between items-center" key={service.id}>
                        <div>
                            <p className="font-semibold">{service.title}</p>
                            <p className="text-sm text-gray-700">{service.description}</p>
                            <p className="font-bold mt-1">R$ {Number(service.price).toFixed(2)}</p>
                        </div>

                        <button onClick={() => dispatch(removeService(service.id))} className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-all flex justify-center items-center cursor-pointer">x</button>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">Nenhum serviço adicionado.</p>
            )}
            </div>
        </div>
    );
}

export default ServiceList