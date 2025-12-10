import html2pdf from "html2pdf.js";
import { useRef } from "react";
import { useSelector } from "react-redux";
import ServiceCard from "./ServiceCard";

const Preview = () => {
  const { clientInfo, services, theme } = useSelector(
    (state) => state.proposal
  );

  const total = services.reduce(
    (acc, service) => acc + Number(service.price),
    0
  );

  const pdfPreviewRef = useRef();

  const generatePDF = () => {
    const el = pdfPreviewRef.current;

    const options = {
      filename: `Proposta-${clientInfo.name || "Cliente"}.pdf`,
      margin: 10,
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(el).save();
  };

  return (
    <div>
      <div
        className={`${
          theme == "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } p-6 rounded-xl shadow-xl`}
      >
        <div className="flex justify-center items-center">
          <h2 className="md:text-xl text-md font-bold">
            {clientInfo.company
              ? "Proposta para " + clientInfo.company
              : "Defina o nome do cliente para a proposta"}
          </h2>
        </div>

        {/* Divider */}
        <div
          className="w-full my-5"
          style={{ borderBottom: "2px solid #d1d5db" }}
        ></div>

        <div
          className="p-3 md:flex md:justify-between md:items-center md:space-y-0 space-y-3"
          style={{ border: "2px solid #d1d5db" }}
        >
          <p>
            <strong>Cliente:</strong>{" "}
            {clientInfo.name ? clientInfo.name : "Nome do Cliente"}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            {clientInfo.email ? clientInfo.email : "E-mail do cliente"}
          </p>
          <p>
            <strong>Telefone:</strong>{" "}
            {clientInfo.phone ? clientInfo.phone : "(00) 9 0000-0000"}
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-full my-5"
          style={{ borderBottom: "2px solid #d1d5db" }}
        ></div>

        {/* Serviços */}
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-3">Serviços</h3>

          {(!services || services.length === 0) && (
            <p className="text-center font-semibold">
              Nenhum serviço adicionado...
            </p>
          )}

          {services.map((s) => (
            <div
              key={s.id}
              className={`${
                theme == "dark"
                  ? "bg-slate-700 text-white"
                  : "bg-gray-200 text-blue-600"
              } px-6 py-4 rounded-xl mb-3`}
            >
              <span className="text-lg font-semibold">{s.title}</span>
              <div
                className={`${
                  theme == "dark" ? "border-white" : "border-blue-600"
                } w-full my-1 border-b`}
              ></div>
              <p className="mb-3">{s.description}</p>
              <p>
                <strong>Valor:</strong> R$ {s.price}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full my-5"
          style={{ borderBottom: "2px solid #d1d5db" }}
        ></div>

        {/* Total */}
        <div
          className={`${
            theme == "dark" ? "bg-slate-700" : "bg-gray-200"
          } p-5 rounded-lg md:flex md:justify-between md:items-center md:space-y-0 space-y-2`}
        >
          <p className={`${theme == "dark" ? "" : ""}`}>
            <strong>Total:</strong> R$ {total.toFixed(2)}
          </p>
          <p className={`${theme == "dark" ? "" : ""}`}>
            <strong>Qtd. Serviços:</strong> {services.length}
          </p>
        </div>
      </div>
      <div className="w-full my-10 flex justify-center items-center">
        <button
          onClick={generatePDF}
          className="px-5 py-3 text-white font-semibold shadow-xl transition-all cursor-pointer rounded-xl uppercase text-sm bg-blue-600 hover:bg-blue-700"
        >
          Exportar Proposta
        </button>
      </div>

      {/* PDF GERADO PELO SISTEMA */}
      <div className="hidden">
        <div
          className={`bg-[#ffffff] text-[#111827] p-6 rounded-xl shadow-xl`}
          ref={pdfPreviewRef}
        >
          <div className="flex justify-center items-center">
            <h2 className="md:text-xl text-md font-bold">
              {clientInfo.company
                ? "Proposta para " + clientInfo.company
                : "Defina o nome do cliente para a proposta"}
            </h2>
          </div>

          {/* Divider */}
          <div
            className="w-full my-5"
            style={{ borderBottom: "2px solid #d1d5db" }}
          ></div>

          <div
            className="p-3 md:flex md:justify-between md:items-center md:space-y-0 space-y-3"
            style={{ border: "2px solid #d1d5db" }}
          >
            <p>
              <strong>Cliente:</strong>{" "}
              {clientInfo.name ? clientInfo.name : "Nome do Cliente"}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {clientInfo.email ? clientInfo.email : "E-mail do cliente"}
            </p>
            <p>
              <strong>Telefone:</strong>{" "}
              {clientInfo.phone ? clientInfo.phone : "(00) 9 0000-0000"}
            </p>
          </div>

          {/* Divider */}
          <div
            className="w-full my-5"
            style={{ borderBottom: "2px solid #d1d5db" }}
          ></div>

          {/* Serviços */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-3">Serviços</h3>

            {(!services || services.length === 0) && (
              <p className="text-center font-semibold">
                Nenhum serviço adicionado...
              </p>
            )}

            {services.map((s) => (
              <div
                key={s.id}
                className="px-6 py-4 rounded-xl mb-3"
                style={{ backgroundColor: "#e5e7eb", color: "#1e3a8a" }}
              >
                <span className="text-lg font-semibold">{s.title}</span>
                <div
                  className="w-full my-1"
                  style={{ borderBottom: "1px solid #1e3a8a" }}
                ></div>
                <p className="mb-3">{s.description}</p>
                <p>
                  <strong>Valor:</strong> R$ {s.price}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className="w-full my-5"
            style={{ borderBottom: "2px solid #d1d5db" }}
          ></div>

          {/* Total */}
          <div
            className="p-5 rounded-lg md:flex md:justify-between md:items-center md:space-y-0 space-y-2"
            style={{ backgroundColor: "#e5e7eb" }}
          >
            <p style={{ color: "#1e3a8a" }}>
              <strong>Total:</strong> R$ {total.toFixed(2)}
            </p>
            <p style={{ color: "#1e3a8a" }}>
              <strong>Qtd. Serviços:</strong> {services.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
