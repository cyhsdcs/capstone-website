export default function Methodology() {
  const csvFiles = [
    { 
      name: 'Time Information Dataset',
      description: 'Historical time-based transaction and market data',
      file: 'time_info_final.csv',
      format: 'CSV',
      size: '32KB',
      lastUpdated: 'April 6, 2025'
    },
    { 
      name: 'Product Information Dataset',
      description: 'Comprehensive product details and attributes',
      file: 'product_info_simple_final_train.csv',
      format: 'CSV',
      size: '5.3MB',
      lastUpdated: 'April 6, 2025'
    },
    { 
      name: 'Prediction Table Dataset',
      description: 'Model predictions and analysis results',
      file: 'predict_table.csv',
      format: 'CSV',
      size: '34KB',
      lastUpdated: 'April 6, 2025'
    },
    { 
      name: 'Yield Curve Information',
      description: 'Financial yield curve data and metrics',
      file: 'cbyieldcurve_info_final.csv',
      format: 'CSV',
      size: '9.9KB',
      lastUpdated: 'April 6, 2025'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Download Section */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Dataset Files</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {csvFiles.map((csv) => (
            <div key={csv.file} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors h-full">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{csv.name}</h3>
                  <p className="text-gray-600 mt-1">{csv.description}</p>
                  <div className="text-sm text-gray-500 mt-2">
                    <span className="mr-4">Format: {csv.format}</span>
                    <span className="mr-4">Size: {csv.size}</span>
                    <span>Last updated: {csv.lastUpdated}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <a 
                    href={`/data/${csv.file}`}
                    download
                    className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors flex items-center space-x-2 w-full justify-center"
                  >
                    <span>Download</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Original sections */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Research Methodology</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our approach combines advanced machine learning techniques with comprehensive financial data analysis
        </p>
      </section>

      {/* Data Processing */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Data Processing Pipeline</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Data Collection</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Historical fund transaction records</li>
              <li>Market indicators and indices</li>
              <li>Economic indicators</li>
              <li>Fund-specific metrics</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Preprocessing Steps</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Data cleaning and normalization</li>
              <li>Feature engineering</li>
              <li>Time series alignment</li>
              <li>Missing data handling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Model Architecture */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Model Architecture</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Transformer Model</h3>
            <p className="mb-4">
              Utilizing attention mechanisms to capture long-term dependencies in time series data
            </p>
            <div className="bg-white p-4 rounded border">
              [Transformer Architecture Diagram Placeholder]
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">LSTM Network</h3>
            <p className="mb-4">
              Processing sequential data and maintaining long-term memory of market patterns
            </p>
            <div className="bg-white p-4 rounded border">
              [LSTM Architecture Diagram Placeholder]
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">XGBoost Model</h3>
            <p className="mb-4">
              Enhancing prediction accuracy through gradient boosting
            </p>
            <div className="bg-white p-4 rounded border">
              [XGBoost Architecture Diagram Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Training Process</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Training Strategy</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Multi-objective optimization</li>
              <li>Cross-validation approach</li>
              <li>Hyperparameter tuning</li>
              <li>Model ensemble techniques</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Evaluation Metrics</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Mean Absolute Error (MAE)</li>
              <li>Root Mean Square Error (RMSE)</li>
              <li>R-squared Score</li>
              <li>Direction Accuracy</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 