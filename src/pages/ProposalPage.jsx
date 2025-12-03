// Components
import ClientForm from "../components/ClientForm";
import AddServiceModal from "../components/AddServiceModal";
import ServiceList from "../components/ServiceList";
import PriceSummary from "../components/PriceSummary";
import ThemeSelector from "../components/ThemeSelector";
import Preview from "../components/Preview";

const ProposalPage = () => {
  return (
    <div>
        <div className="w-full p-8 text-center bg-blue-600 flex justify-center items-center shadow-lg">
            <h2 className="font-bold text-white text-2xl shadow">Proposify</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
            <div>
                <div className="mb-4">
                    <ClientForm/>
                </div>
                <div className="mb-4">
                    <AddServiceModal/>
                </div>
                <div className="mb-4">
                    <ServiceList/>
                </div>
                <div className="mb-4">
                    <PriceSummary/>
                </div>
                <div className="mb-4">
                    <ThemeSelector/>
                </div>
            </div>
            <div>
                <Preview/>
            </div>
        </div>
    </div>
  )
}

export default ProposalPage