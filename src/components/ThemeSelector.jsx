import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/proposalSlice";

const ThemeSelector = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.proposal.theme);

  return (
    <div className="bg-gray-200 rounded-lg px-4 py-2 flex items-center">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={theme === "dark"}
          onChange={() => dispatch(switchTheme())}
        />
        <div
          className="relative w-9 h-5 
                    bg-gray-300
                    peer-checked:bg-blue-600
                    peer-focus:outline-none 
                    peer-focus:ring-brand-soft 
                    dark:peer-focus:ring-brand-soft 
                    rounded-full 
                    peer 
                    peer-checked:after:translate-x-full 
                    rtl:peer-checked:after:-translate-x-full 
                    peer-checked:after:border-buffer 
                    after:content-[''] 
                    after:absolute 
                    after:top-[2px] 
                    after:start-[2px] 
                    after:bg-white 
                    after:rounded-full 
                    after:h-4 
                    after:w-4 
                    after:transition-all
                "
        ></div>
        <span className="select-none ms-3 text-sm font-medium text-heading">
          Modo Escuro
        </span>
      </label>
    </div>
  );
};

export default ThemeSelector;
