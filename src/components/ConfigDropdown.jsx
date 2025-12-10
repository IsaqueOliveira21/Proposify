import ThemeSelector from "./ThemeSelector";

const ConfigDropdown = () => {
  return (
    <div className="text-white flex justify-center items-center">
      <span className="px-2 py-1 bg-gray-400/50 rounded-lg">
        <i className="bi bi-moon-fill"></i>
      </span>
      <ThemeSelector />
    </div>
  );
};

export default ConfigDropdown;
