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
    resetForm();
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDriverInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setDriverInfo({
      firstName: '',
      lastName: '',
      VehiclePlate: '',
      licenseState: '',
    });
  };

  return (
    <div
      className="min-h-screen !bg-gray-100"
      style={{
        backgroundImage: 'url(/src/public/images/flash.png)',  // Your background image
        backgroundPosition: 'center',
        backgroundSize: '58%',  // Zoom out the image
        backgroundRepeat: 'no-repeat',  // Prevent the image from repeating
      }}
    >
      <div className="max-w-3xl mx-auto p-8 space-y-8"> {/* Increased padding around the form */}
        {/* Form Section - Hidden when printing */}
        <div className="print:hidden">
          <div className="bg-white rounded-lg shadow-md p-8"> {/* Increased padding inside the form */}
            <div className="flex items-center gap-2 mb-8"> {/* Increased margin */}
              <FileCheck className="h-8 w-8 text-blue-600" /> {/* Increased icon size */}
              <h1 className="text-3xl font-bold text-gray-800">Driver Information Form</h1> {/* Increased font size */}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6"> {/* Increased space between fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Increased gap between form elements */}
                <div>
                  <label htmlFor="firstName" className="block text-base font-medium text-gray-700">First Name</label> {/* Increased label font size */}
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={driverInfo.firstName}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4 border"
                  />
                </div>


                <div>
                  <label htmlFor="lastName" className="block text-base font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={driverInfo.lastName}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4 border"
                  />
                </div>

                <div>
                  <label htmlFor="VehiclePlate" className="block text-base font-medium text-gray-700">Vehicle Plate</label>
                  <input
                    type="text"
                    id="VehiclePlate"
                    name="VehiclePlate"
                    required
                    value={driverInfo.VehiclePlate}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4 border"
                  />
                </div>

                <div>
                  <label htmlFor="licenseState" className="block text-base font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    id="licenseState"
                    name="licenseState"
                    required
                    value={driverInfo.licenseState}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4 border"
                    maxLength={2}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Printer className="h-5 w-5 mr-2" /> {/* Increased icon size */}
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
              <p className="text-gray-600">
                {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-x-2 border-b pb-2">
                <label className="font-semibold text-left">First Name:</label>
                <input
                  type="text"
                  className="border px-2 py-1 text-sm"
                  value={driverInfo.firstName}
                  readOnly
                />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-x-2 border-b pb-2">
                  <label className="font-semibold text-left">Last Name:</label>
                  <input
                    type="text"
                    className="border px-2 py-1 text-sm"
                    value={driverInfo.lastName}
                    readOnly
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-x-2 border-b pb-2">
                  <label className="font-semibold text-left">Vehicle Plate:</label>
                  <input
                    type="text"
                    className="border px-2 py-1 text-sm"
                    value={driverInfo.VehiclePlate}
                    readOnly
                  />
                </div>
              </div>


              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-x-2 border-b pb-2">
                  <label className="font-semibold text-left">State:</label>
                  <input
                    type="text"
                    className="border px-2 py-1 text-sm"
                    value={driverInfo.licenseState}
                    readOnly
                  />
                </div>
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
            <p>Return receipt to SF member</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;