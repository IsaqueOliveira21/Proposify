import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../redux/proposalSlice";

import ClientForm from "../components/ClientForm";
import ServiceList from "../components/ServiceList";
import AddServiceModal from "../components/AddServiceModal";
import PriceSummary from "../components/PriceSummary";
import ThemeSelector from "../components/ThemeSelector";

const TestRedux = () => {
    const client = useSelector(state => state.proposal.clientInfo);
    const dispatch = useDispatch();
    return (
        <div className="p-4">
          <input
            className="border"
            placeholder="Nome"
            value={client.name}
            onChange={e =>
              dispatch(updateField({
                section: "clientInfo",
                field: "name",
                value: e.target.value
              }))
            }
          />
    
          <p className="mt-2">Nome atual: {client.name}</p>
          <hr className="my-5"/>
          <ThemeSelector/>
          <br />
          <ServiceList/>
          <br />
          <PriceSummary/>
          <br />
          <AddServiceModal />
        </div>
      );
}

export default TestRedux