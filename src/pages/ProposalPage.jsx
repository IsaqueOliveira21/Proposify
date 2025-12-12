import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components
import ClientForm from "../components/ClientForm";
import AddServiceModal from "../components/AddServiceModal";
import ServiceList from "../components/ServiceList";
import PriceSummary from "../components/PriceSummary";
import Preview from "../components/Preview";
import ConfigDropdown from "../components/ConfigDropdown";
import ThemeSelector from "../components/ThemeSelector";

const ProposalPage = () => {
  const { theme } = useSelector((state) => state.proposal);

  return (
    <div className={`${theme == "dark" ? "bg-slate-900" : "bg-white"}`}>
      <div className="w-full p-8 text-center bg-blue-600 flex justify-between items-center shadow-lg">
        <div className="md:w-1/3"></div>

        <h2 className="font-bold text-white text-2xl">
          <Link to={"/"}>Proposify</Link>
        </h2>

        <div className="md:w-1/3 flex md:justify-end md:mt-0">
          <ConfigDropdown />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
        <div>
          <h2 className="text-center w-full text-2xl font-bold uppercase mb-4 text-blue-600">
            Dados da Proposta
          </h2>
          <div className="mb-4">
            <ClientForm />
          </div>
          <div className="mb-4">
            <ServiceList />
          </div>
          <div className="mb-4">
            <AddServiceModal />
          </div>
          <div className="mb-4">
            <PriceSummary />
          </div>
        </div>
        <div>
          <h2 className="text-center w-full text-2xl font-bold uppercase mb-4 text-blue-600">
            Resumo da Proposta
          </h2>
          <Preview />
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;
