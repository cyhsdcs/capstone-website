import YieldCurveChart from '../components/YieldCurveChart';
import TimeInfoSheet from '../components/TimeInfoSheet';
import ProductInfoSheet from '../components/ProductInfoSheet';

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

      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Yield Curve Information</h2>
        <YieldCurveChart />
      </section>

      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Time Information Example</h2>
        <TimeInfoSheet />
      </section>

      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Product Information Example</h2>
        <ProductInfoSheet />
      </section>
    </div>
  );
} 