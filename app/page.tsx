import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          A Machine Learning-Based Model for Predicting Fund Transactions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Developing a predictive model to accurately forecast daily fund subscription and redemption amounts using advanced machine learning techniques.
        </p>
      </section>

      {/* Project Overview */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          This project aims to develop a sophisticated predictive model that integrates historical time-series data, 
          fund characteristics, and financial market trends to enhance decision-making capabilities in fund management.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Data Analysis</h3>
            <p>Processing historical fund transaction data and market indicators</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Model Development</h3>
            <p>Implementing Transformer, LSTM, and XGBoost models</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Evaluation</h3>
            <p>Testing and comparing model performance in various market conditions</p>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Project Timeline</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-1/4 text-right pr-4">March 2024</div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
            <div className="pl-4">Project Initialization and Planning</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 text-right pr-4">April 2024</div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">⋯</div>
            <div className="pl-4">Data Collection and Preprocessing</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 text-right pr-4">May 2024</div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">⋯</div>
            <div className="pl-4">Model Development and Training</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 text-right pr-4">June 2024</div>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">⋯</div>
            <div className="pl-4">Testing and Optimization</div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Integration of multiple data sources for comprehensive analysis</li>
          <li>Advanced machine learning models including Transformer architectures</li>
          <li>Real-time market trend analysis</li>
          <li>Interactive visualization of predictions</li>
          <li>Robust evaluation metrics for model performance</li>
        </ul>
      </section>
    </div>
  );
}
