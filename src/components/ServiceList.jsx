import { useSelector, useDispatch } from "react-redux";
import { removeService } from "../redux/proposalSlice";

const ServiceList = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.proposal);

  const services = useSelector((state) => state.proposal.services);

  return (
    <div
      className={`${
        theme == "dark" ? "bg-slate-800" : "bg-gray-100 border-blue-600"
      } w-ful border rounded-2xl p-4`}
    >
      <h2
        className={`${
          theme == "dark" ? "text-gray-300" : "text-blue-600"
        }  font-semibold text-lg mb-3`}
      >
        Lista de Serviços
      </h2>
      <div className="w-full my-3">
        {services && services.length > 0 ? (
          services.map((service) => (
            <div
              className={`${
                theme == "dark" ? "bg-slate-700" : "bg-gray-300"
              } px-4 py-3 rounded-xl mb-2 flex justify-between items-center`}
              key={service.id}
            >
              <div>
                <p
                  className={`${
                    theme == "dark" ? "text-gray-300" : ""
                  } font-semibold`}
                >
                  {service.title}
                </p>
                <p
                  className={`${
                    theme == "dark" ? "text-gray-400" : "text-gray-700"
                  } text-sm`}
                >
                  {service.description}
                </p>
                <p
                  className={`${
                    theme == "dark" ? "text-gray-300" : ""
                  } font-bold mt-1`}
                >
                  R$ {Number(service.price).toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => dispatch(removeService(service.id))}
                className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700 transition-all flex justify-center items-center cursor-pointer"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Nenhum serviço adicionado.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceList;
