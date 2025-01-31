import React, { useState } from 'react';
import { Printer, FileCheck } from 'lucide-react';

interface DriverInfo {
  firstName: string;
  lastName: string;
  VehiclePlate: string;
  licenseState: string;
}

function App() {
  const [driverInfo, setDriverInfo] = useState<DriverInfo>({
    firstName: '',
    lastName: '',
    VehiclePlate: '',
    licenseState: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.print();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDriverInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto p-6 space-y-8">
        {/* Form Section - Hidden when printing */}
        <div className="print:hidden">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileCheck className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Driver Information Form</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={driverInfo.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={driverInfo.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  />
                </div>

                <div>
                  <label htmlFor="VehiclePlate" className="block text-sm font-medium text-gray-700">Vehicle Plate</label>
                  <input
                    type="text"
                    id="VehiclePlate"
                    name="VehiclePlate"
                    required
                    value={driverInfo.VehiclePlate}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  />
                </div>

                <div>
                  <label htmlFor="licenseState" className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    id="licenseState"
                    name="licenseState"
                    required
                    value={driverInfo.licenseState}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    maxLength={2}
                    placeholder="CA"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Printer className="h-4 w-4 mr-2" />
                Print Pass
              </button>
            </form>
          </div>
        </div>

        {/* Receipt Section - Visible when printing */}
        <div className="hidden print:block">
          <div className="border-2 border-gray-200 p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">45th SFS Vehicle Pass</h2>
              <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 border-b pb-2">
                <span className="font-semibold">First Name:</span>
                <span>{driverInfo.firstName}</span>
              </div>

              <div className="grid grid-cols-2 border-b pb-2">
                <span className="font-semibold">Last Name:</span>
                <span>{driverInfo.lastName}</span>
              </div>

              <div className="grid grid-cols-2 border-b pb-2">
                <span className="font-semibold">Vehicle Plate:</span>
                <span>{driverInfo.VehiclePlate}</span>
              </div>

              <div className="grid grid-cols-2 border-b pb-2">
                <span className="font-semibold">State:</span>
                <span>{driverInfo.licenseState}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 border-b pb-2">
              <span className="font-semibold">Vehicle Code/Color:</span>
            </div>
          </div>

          <div className="grid grid-cols-2 border-b pb-2">
            <span className="font-semibold">Trip 1:</span>
          </div>

          <div className="grid grid-cols-2 border-b pb-2">
            <span className="font-semibold">Trip 2:</span>
          </div>

          <div className="grid grid-cols-2 border-b pb-2">
            <span className="font-semibold">Trip 3:</span>
          </div>

          <div className="grid grid-cols-2 border-b pb-2">
            <span className="font-semibold">Trip 4:</span>
          </div>

          <div className="grid grid-cols-2 border-b pb-2">
            <span className="font-semibold">Trip 5:</span>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Return receipt to SF memeber for each return tripS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;