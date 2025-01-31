import React, { useState } from 'react';
import { Printer, FileCheck } from 'lucide-react';

interface DriverInfo {
  firstName: string;
  lastName: string;
  licenseNumber: string;
  licenseState: string;
}

function App() {
  const [driverInfo, setDriverInfo] = useState<DriverInfo>({
    firstName: '',
    lastName: '',
    licenseNumber: '',
    licenseState: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.print();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDriverInfo((prev) => ({
      ...prev,
      [name]: value,
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
              <h1 className="text-2xl font-bold text-gray-800">
                Driver Information Form
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
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
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
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
                  <label
                    htmlFor="licenseNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Driver's License Number
                  </label>
                  <input
                    type="text"
                    id="licenseNumber"
                    name="licenseNumber"
                    required
                    value={driverInfo.licenseNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  />
                </div>

                <div>
                  <label
                    htmlFor="licenseState"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
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
                Print Receipt
              </button>
            </form>
          </div>
        </div>

        {/* Receipt Section - Visible when printing */}
        <div className="hidden print:block receipt-container">
          <div className="receipt-header">
            <h2>Driver Information Receipt</h2>
            <p>{new Date().toLocaleDateString()}</p>
          </div>

          <div className="receipt-body">
            <div>
              <span className="font-semibold">First Name:</span>
              <span>{driverInfo.firstName}</span>
            </div>

            <div>
              <span className="font-semibold">Last Name:</span>
              <span>{driverInfo.lastName}</span>
            </div>

            <div>
              <span className="font-semibold">License Number:</span>
              <span>{driverInfo.licenseNumber}</span>
            </div>

            <div>
              <span className="font-semibold">State:</span>
              <span>{driverInfo.licenseState}</span>
            </div>
          </div>

          <div className="receipt-footer">
            <p>This receipt was generated on {new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
