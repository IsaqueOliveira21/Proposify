import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../redux/proposalSlice";

const ClientForm = () => {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.proposal.clientInfo);
  const { theme } = useSelector((state) => state.proposal);

  const handleChange = (field, value) => {
    dispatch(
      updateField({
        section: "clientInfo",
        field,
        value,
      })
    );
  };

  return (
    <div
      className={`${
        theme == "dark"
          ? "bg-slate-900 border-white"
          : "bg-gray-100 border-blue-600"
      } w-full border rounded-2xl p-4`}
    >
      <h2
        className={`${
          theme == "dark" ? "text-white" : "text-blue-600"
        } font-semibold text-lg mb-3`}
      >
        Informações do Cliente
      </h2>
      <div className="mb-3">
        <div>
          <label
            className={`${
              theme == "dark" ? "text-white" : "text-blue-600"
            }  font-semibold`}
            htmlFor="company"
          >
            Empresa
          </label>
          <input
            type="text"
            id="company"
            className={`${
              theme == "dark"
                ? "outline-white focus:outline-gray-200 text-white"
                : "outline-blue-600 focus:outline-blue-600"
            } w-full outline-1 rounded-xl px-4 py-2 focus:outline-2`}
            value={client.company}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </div>
        <div>
          <label
            className={`${
              theme == "dark" ? "text-white" : "text-blue-600"
            }  font-semibold`}
            htmlFor="name"
          >
            Nome do Cliente
          </label>
          <input
            type="text"
            id="name"
            className={`${
              theme == "dark"
                ? "outline-white focus:outline-gray-200 text-white"
                : "outline-blue-600 focus:outline-blue-600"
            } w-full outline-1 rounded-xl px-5 py-2 focus:outline-2`}
            value={client.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mb-3 gap-3">
        <div className="col-span-1">
          <label
            className={`${
              theme == "dark" ? "text-white" : "text-blue-600"
            }  font-semibold`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`${
              theme == "dark"
                ? "outline-white focus:outline-gray-200 text-white"
                : "outline-blue-600 focus:outline-blue-600"
            } w-full outline-1  rounded-xl px-5 py-2 focus:outline-2 `}
            value={client.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div className="col-span-1">
          <label
            className={`${
              theme == "dark" ? "text-white" : "text-blue-600"
            }  font-semibold`}
            htmlFor="phone"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            className={`${
              theme == "dark"
                ? "outline-white focus:outline-gray-200 text-white"
                : "outline-blue-600 focus:outline-blue-600"
            } w-full outline-1 rounded-xl px-5 py-2 focus:outline-2`}
            value={client.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientForm;
