import React from 'react'

const ServiceCard = ({ serviceTitle, serviceDescription, serviceValue }) => {
    return (
        <div className="px-6 py-4 bg-gray-300 rounded-xl text-blue-600 mb-3">
            <span className="text-lg font-semibold">{serviceTitle}</span>
            <div className="border-b border-blue-600 w-full my-1"></div>
            <p className="mb-3">{serviceDescription}</p>
            <div className="mt-5">
                <p><span className="font-semibold">Valor:</span> R$ {serviceValue}</p>
            </div>
        </div>
    );
}

export default ServiceCard