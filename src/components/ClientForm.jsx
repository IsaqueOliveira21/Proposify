import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../redux/proposalSlice";

const ClientForm = () => {

    const dispatch = useDispatch();
    const client = useSelector(state => state.proposal.clientInfo);

    const handleChange = (field, value) => {
        dispatch(updateField({
            section: "clientInfo",
            field,
            value,
        }));
    };

    return (
        <div className="w-full bg-gray-200 rounded-2xl p-4">
            <h2 className="text-blue-600 font-semibold text-lg mb-3">Informações do Cliente</h2>
            <div className="grid grid-cols-2 mb-3 gap-3">
                <div className="col-span-1">
                    <label className="text-blue-600 font-semibold" htmlFor="name">Nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="w-full outline-1 outline-blue-600 rounded-xl px-5 py-2 focus:outline-2 focus:outline-blue-600" 
                        value={client.name}
                        onChange={e => handleChange("name", e.target.value)}
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-blue-600 font-semibold" htmlFor="phone">Telefone</label>
                    <input 
                        type="tel" id="phone" className="w-full outline-1 outline-blue-600 rounded-xl px-5 py-2 focus:outline-2 focus:outline-blue-600" 
                        value={client.phone}
                        onChange={e => handleChange("phone", e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-3">
                <div>
                    <label className="text-blue-600 font-semibold" htmlFor="email">Email</label>
                    <input 
                        type="email" id="email" className="w-full outline-1 outline-blue-600 rounded-xl px-5 py-2 focus:outline-2 focus:outline-blue-600" 
                        value={client.email}
                        onChange={e => handleChange("email", e.target.value)}
                    />
                </div>
                <div>
                    <label className="text-blue-600 font-semibold" htmlFor="company">Empresa</label>
                    <input 
                        type="text" id="company" className="w-full outline-1 outline-blue-600 rounded-xl px-4 py-2 focus:outline-2 focus:outline-blue-600" 
                        value={client.company}
                        onChange={e => handleChange("company", e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-3 flex w-full justify-center items-center">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl cursor-pointer hover:bg-blue-700 transition-all duration-300 shadow-lg">Salvar</button>
            </div>
        </div>
    );
}

export default ClientForm