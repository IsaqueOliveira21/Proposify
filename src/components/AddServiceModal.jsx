import { useState } from "react";
import { useDispatch } from "react-redux";
import { addService } from "../redux/proposalSlice";

const AddServiceModal = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleAddService = () => {
        if (!title || !price) return;
        dispatch(addService({
            id: Date.now(),
            title,
            description,
            price: parseFloat(price)
        }));

        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <div className="w-full bg-gray-200 p-4 mb-4 rounded-2xl shadow-lg">
            <h2 className="text-blue-600 font-semibold text-lg mb-3">Novo Serviço</h2>
            <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="col-span-1">
                    <input 
                        type="text" 
                        placeholder="Título..." 
                        className="text-blue-600 w-full px-5 py-2 outline-blue-600 outline-1 rounded-xl focus:outline-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="col-span-1">
                    <input 
                        type="number" 
                        placeholder="R$ 0,00" 
                        className="text-blue-600 w-full px-5 py-2 outline-blue-600 outline-1 rounded-xl focus:outline-2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-4">
                <textarea 
                    placeholder="Descrição..." 
                    className="text-blue-600 w-full px-5 py-2 outline-blue-600 outline-1 rounded-xl focus:outline-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className="flex justify-center items-center">
                <button
                    onClick={handleAddService}
                    className="bg-blue-600 text-white px-5 py-2 rounded-xl cursor-pointer hover:bg-blue-700 transition-all duration-300 shadow-lg"
                >
                    Adicionar Serviço
                </button>
            </div>
        </div>
    );
}

export default AddServiceModal