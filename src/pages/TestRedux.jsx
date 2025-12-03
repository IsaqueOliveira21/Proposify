import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../redux/proposalSlice";

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
        </div>
      );
}

export default TestRedux