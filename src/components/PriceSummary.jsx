import { useSelector } from "react-redux";

const PriceSummary = () => {
  const services = useSelector((state) => state.proposal.services);
  const { theme } = useSelector((state) => state.proposal);

  const total = services.reduce(
    (acc, service) => acc + Number(service.price),
    0
  );

  return (
    <div
      className={`${
        theme == "dark" ? "bg-slate-800 text-gray-300" : "bg-gray-300"
      } w-full px-4 py-2 shadow-lg rounded-lg`}
    >
      <p className="font-bold">Total: R$ {total.toFixed(2)}</p>
      <p className="font-bold">Qtd. Serviços: {services.length}</p>
    </div>
  );
};

export default PriceSummary;
