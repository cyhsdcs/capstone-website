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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold text-lg mb-2">MAE</h3>
            <p className="text-3xl font-bold text-blue-600">0.0324</p>
            <p className="text-sm text-gray-600">Mean Absolute Error</p>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold text-lg mb-2">RMSE</h3>
            <p className="text-3xl font-bold text-blue-600">0.0456</p>
            <p className="text-sm text-gray-600">Root Mean Square Error</p>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold text-lg mb-2">R²</h3>
            <p className="text-3xl font-bold text-blue-600">0.892</p>
            <p className="text-sm text-gray-600">R-squared Score</p>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold text-lg mb-2">Direction</h3>
            <p className="text-3xl font-bold text-blue-600">87.5%</p>
            <p className="text-sm text-gray-600">Direction Accuracy</p>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MAE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RMSE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">R²</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Direction Accuracy</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Transformer</td>
                <td className="px-6 py-4 whitespace-nowrap">0.0324</td>
                <td className="px-6 py-4 whitespace-nowrap">0.0456</td>
                <td className="px-6 py-4 whitespace-nowrap">0.892</td>
                <td className="px-6 py-4 whitespace-nowrap">87.5%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">LSTM</td>
                <td className="px-6 py-4 whitespace-nowrap">0.0356</td>
                <td className="px-6 py-4 whitespace-nowrap">0.0489</td>
                <td className="px-6 py-4 whitespace-nowrap">0.878</td>
                <td className="px-6 py-4 whitespace-nowrap">85.2%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">XGBoost</td>
                <td className="px-6 py-4 whitespace-nowrap">0.0378</td>
                <td className="px-6 py-4 whitespace-nowrap">0.0512</td>
                <td className="px-6 py-4 whitespace-nowrap">0.865</td>
                <td className="px-6 py-4 whitespace-nowrap">83.8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Visualization */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Prediction Visualization</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-4">Time Series Prediction</h3>
            <div className="bg-white p-4 rounded border">
              [Time Series Prediction Chart Placeholder]
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-4">Error Distribution</h3>
            <div className="bg-white p-4 rounded border">
              [Error Distribution Chart Placeholder]
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