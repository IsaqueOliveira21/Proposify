import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addService } from "../redux/proposalSlice";

const AddServiceModal = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.proposal);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleAddService = () => {
    if (!title || !price) return;
    dispatch(
      addService({
        id: Date.now(),
        title,
        description,
        price: parseFloat(price),
      })
    );

    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <div
      className={`${
        theme == "dark"
          ? "bg-slate-900 border-white"
          : "bg-gray-200 border-blue-600"
      } w-full p-4 mb-4 border rounded-2xl shadow-lg`}
    >
      <h2
        className={`${
          theme == "dark" ? "text-white" : "text-blue-600"
        } font-semibold text-lg mb-3`}
      >
        Novo Serviço
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-3">
        <div className="col-span-1">
          <input
            type="text"
            placeholder="Título..."
            className={`${
              theme == "dark"
                ? "text-white outline-white"
                : "text-blue-600 outline-blue-600"
            } w-full px-5 py-2 outline-1 rounded-xl focus:outline-2`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-span-1">
          <input
            type="number"
            placeholder="R$ 0,00"
            className={`${
              theme == "dark"
                ? "text-white outline-white"
                : "text-blue-600 outline-blue-600"
            } w-full px-5 py-2 outline-1 rounded-xl focus:outline-2`}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Descrição..."
          className={`${
            theme == "dark"
              ? "text-white outline-white"
              : "text-blue-600 outline-blue-600"
          } w-full px-5 py-2 outline-1 rounded-xl focus:outline-2 placeholder:text-gray-400`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleAddService}
          className={`${
            theme == "dark" ? "" : ""
          } bg-blue-600 text-white px-5 py-2 rounded-xl cursor-pointer hover:bg-blue-700 transition-all duration-300 shadow-lg`}
        >
          Adicionar Serviço
        </button>
      </div>
    </div>
  );
};

export default AddServiceModal;
