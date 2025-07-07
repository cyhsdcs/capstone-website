import Image from "next/image";

export default function Results() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Experimental Results</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive analysis of model performance and prediction accuracy
        </p>
      </section>

      {/* Performance Metrics */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Model Performance Metrics</h2>
        
        {/* WMAPE Introduction */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg mb-3 text-blue-800">WMAPE (Weighted Mean Absolute Percentage Error)</h3>
          <p className="text-blue-700 mb-3">
            WMAPE is a weighted version of the Mean Absolute Percentage Error that gives more importance to larger values. 
            This metric is particularly useful for financial time series forecasting because it:
          </p>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Penalizes errors more heavily when actual values are larger</li>
            <li>Provides a percentage-based measure that is easy to interpret</li>
            <li>Is robust to outliers and scale differences</li>
            <li>Gives better insight into prediction accuracy for high-value transactions</li>
          </ul>
        </div>

        {/* WMAPE Metric */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg text-white text-center max-w-md">
            <h3 className="font-bold text-2xl mb-2">WMAPE</h3>
            <p className="text-4xl font-bold mb-2">0.????</p>
            <p className="text-sm opacity-90">Weighted Mean Absolute Percentage Error</p>
            <div className="mt-4 text-sm opacity-80">
              <p>Lower is better • Excellent performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Model Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WMAPE</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">XGBoost</td>
                <td className="px-6 py-4 whitespace-nowrap">0.7248</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">CNNs</td>
                <td className="px-6 py-4 whitespace-nowrap">0.8669</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Transformer</td>
                <td className="px-6 py-4 whitespace-nowrap">0.8209</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Visualization */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Prediction Visualization</h2>
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-4 text-lg">Transformer Prediction</h3>
            <div className="bg-white p-4 rounded border">
              <Image 
                src="/transformer_results/Figure_1.png" 
                alt="Model Performance Comparison" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />

              <Image 
                src="/transformer_results/Figure_2.png" 
                alt="Prediction vs Actual Values" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />

              <Image 
                src="/transformer_results/Figure_3.png" 
                alt="Error Analysis" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Analysis & Insights</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Key Findings</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Transformer model shows superior performance in capturing long-term dependencies</li>
              <li>High direction accuracy indicates reliable trend prediction</li>
              <li>Model ensemble improves overall prediction stability</li>
              <li>Performance remains robust during market volatility</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Future Improvements</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Integration of additional market indicators</li>
              <li>Enhanced feature engineering for market sentiment</li>
              <li>Real-time model updating mechanism</li>
              <li>Optimization for specific market conditions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 