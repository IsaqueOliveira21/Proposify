import { useSelector } from "react-redux";

const ServiceCard = ({ serviceTitle, serviceDescription, serviceValue }) => {
  const { theme } = useSelector((state) => state.proposal);

  return (
    <div
      className={`${
        theme == "dark"
          ? "bg-slate-800 text-white"
          : "bg-gray-300 text-blue-600"
      } rounded-xl px-6 py-4 mb-3`}
    >
      <span className="text-lg font-semibold">{serviceTitle}</span>
      <div className="border-b border-blue-600 w-full my-1"></div>
      <p className="mb-3">{serviceDescription}</p>
      <div className="mt-5">
        <p>
          <span className="font-semibold">Valor:</span> R$ {serviceValue}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
