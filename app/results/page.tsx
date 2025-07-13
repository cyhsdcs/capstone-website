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
        
        {/* Metrics Introduction */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* WMAPE Introduction */}
          <div className="bg-blue-50 p-6 rounded-lg">
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
          {/* MAE Introduction */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-800">MAE (Mean Absolute Error)</h3>
            <p className="text-green-700 mb-3">
              MAE measures the average magnitude of errors in a set of predictions, without considering their direction. It is calculated as the average absolute difference between predicted and actual values.
            </p>
            <ul className="list-disc list-inside text-green-700 space-y-1">
              <li>Simple to understand and interpret</li>
              <li>Treats all errors equally, regardless of their direction</li>
              <li>Useful for understanding the typical size of prediction errors</li>
              <li>Not sensitive to outliers</li>
            </ul>
          </div>
          {/* MSE Introduction */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-yellow-800">MSE (Mean Squared Error)</h3>
            <p className="text-yellow-700 mb-3">
              MSE measures the average of the squares of the errors—that is, the average squared difference between the estimated values and the actual value. It is more sensitive to large errors than MAE.
            </p>
            <ul className="list-disc list-inside text-yellow-700 space-y-1">
              <li>Penalizes larger errors more than smaller ones</li>
              <li>Useful for highlighting significant prediction mistakes</li>
              <li>Commonly used in regression and forecasting tasks</li>
              <li>Can be influenced by outliers</li>
            </ul>
          </div>
        </div>

        {/* WMAPE, MAE, MSE Metrics */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {/* WMAPE Metric */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg text-white text-center max-w-xs min-w-[220px]">
            <h3 className="font-bold text-2xl mb-2">WMAPE</h3>
            <p className="text-4xl font-bold mb-2">?.????%</p>
            <p className="text-sm opacity-90">Weighted Mean Absolute Percentage Error</p>
            <div className="mt-4 text-sm opacity-80">
              <p>Lower is better • Excellent performance</p>
            </div>
          </div>
          {/* MAE Metric */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-8 rounded-lg text-white text-center max-w-xs min-w-[220px]">
            <h3 className="font-bold text-2xl mb-2">MAE</h3>
            <p className="text-4xl font-bold mb-2">?.????</p>
            <p className="text-sm opacity-90">Mean Absolute Error</p>
            <div className="mt-4 text-sm opacity-80">
              <p>Lower is better</p>
            </div>
          </div>
          {/* MSE Metric */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg text-white text-center max-w-xs min-w-[220px]">
            <h3 className="font-bold text-2xl mb-2">MSE</h3>
            <p className="text-4xl font-bold mb-2">??.????</p>
            <p className="text-sm opacity-90">Mean Squared Error</p>
            <div className="mt-4 text-sm opacity-80">
              <p>Lower is better</p>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MAE</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MSE</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">XGBoost</td>
                <td className="px-6 py-4 whitespace-nowrap">0.6455</td>
                <td className="px-6 py-4 whitespace-nowrap">2.3115</td>
                <td className="px-6 py-4 whitespace-nowrap">23.8405</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">CNNs</td>
                <td className="px-6 py-4 whitespace-nowrap">0.7581</td>
                <td className="px-6 py-4 whitespace-nowrap">2.7238</td>
                <td className="px-6 py-4 whitespace-nowrap">31.9216</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Transformer</td>
                <td className="px-6 py-4 whitespace-nowrap">0.7796</td>
                <td className="px-6 py-4 whitespace-nowrap">2.6706</td>
                <td className="px-6 py-4 whitespace-nowrap">21.5467</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">LSTM+Attention</td>
                <td className="px-6 py-4 whitespace-nowrap">0.6282</td>
                <td className="px-6 py-4 whitespace-nowrap">2.1521</td>
                <td className="px-6 py-4 whitespace-nowrap">16.2097</td>
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
            <h3 className="font-bold mb-4 text-lg">XGBoost Prediction</h3>
            <div className="bg-white p-4 rounded border">
              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871d0c38f280.png" 
                alt="Model Performance Comparison" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />

              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871d0c404ba4.png" 
                alt="Prediction vs Actual Values" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />

              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871d0c3aa7e3.png" 
                alt="Error Analysis" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-4 text-lg">CNN Prediction</h3>
            <div className="bg-white p-4 rounded border">
              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871d18f4699f.png" 
                alt="Model Performance Comparison" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />

              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871d18f15f67.png" 
                alt="Prediction vs Actual Values" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />

              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871d1998cd8d.png" 
                alt="Error Analysis" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />

              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871d18fcc069.png" 
                alt="Error Analysis" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-4 text-lg">Transformer Prediction</h3>
            <div className="bg-white p-4 rounded border">
              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871cebe60e44.png" 
                alt="Model Performance Comparison" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />

              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871cebe6ad96.png" 
                alt="Prediction vs Actual Values" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />

              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871cebe7352a.png" 
                alt="Error Analysis" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />

              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871cecc07efb.png" 
                alt="Error Analysis" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-4 text-lg">LSTM Prediction</h3>
            <div className="bg-white p-4 rounded border">
              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871ca3677fe2.png" 
                alt="LSTM Loss" 
                width={800} 
                height={400} 
                className="w-full h-auto rounded" 
              />
              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871ca36b740c.png" 
                alt="LSTM Loss" 
                width={800} 
                height={400} 
                className="w-full h-auto rounded" 
              />
              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871ca36778bb.png" 
                alt="LSTM Loss" 
                width={800} 
                height={400} 
                className="w-full h-auto rounded" 
              />
              <Image 
                src="https://www.helloimg.com/i/2025/07/12/6871ca36863f9.png" 
                alt="LSTM Loss" 
                width={800} 
                height={400} 
                className="w-full h-auto rounded" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analysis */}
      {/* <section className="bg-white p-8 rounded-lg shadow">
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
      </section> */}
    </div>
  );
} 