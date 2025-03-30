export default function Demo() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Interactive Demo</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience our fund transaction prediction model in action
        </p>
      </section>

      {/* Model Selection */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Model Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Model
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Transformer</option>
                <option>LSTM</option>
                <option>XGBoost</option>
                <option>Ensemble</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prediction Horizon
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>1 Day</option>
                <option>3 Days</option>
                <option>1 Week</option>
                <option>2 Weeks</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fund Type
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Equity Fund</option>
                <option>Bond Fund</option>
                <option>Mixed Fund</option>
                <option>Money Market Fund</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Market Condition
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Normal</option>
                <option>High Volatility</option>
                <option>Bull Market</option>
                <option>Bear Market</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Prediction */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Real-time Prediction</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-4">Prediction Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-medium text-gray-700 mb-2">Subscription Prediction</h4>
                <p className="text-2xl font-bold text-blue-600">¥ 1,234,567</p>
                <p className="text-sm text-gray-500">Predicted for next business day</p>
              </div>
              <div className="bg-white p-4 rounded border">
                <h4 className="font-medium text-gray-700 mb-2">Redemption Prediction</h4>
                <p className="text-2xl font-bold text-red-600">¥ 987,654</p>
                <p className="text-sm text-gray-500">Predicted for next business day</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-4">Prediction Visualization</h3>
            <div className="bg-white p-4 rounded border h-64">
              [Interactive Chart Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Metrics */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Prediction Confidence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Confidence Score</h3>
            <p className="text-3xl font-bold text-green-600">92%</p>
            <p className="text-sm text-gray-600">Based on historical accuracy</p>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Error Margin</h3>
            <p className="text-3xl font-bold text-yellow-600">±3.2%</p>
            <p className="text-sm text-gray-600">Expected deviation range</p>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Market Stability</h3>
            <p className="text-3xl font-bold text-blue-600">Stable</p>
            <p className="text-sm text-gray-600">Current market condition</p>
          </div>
        </div>
      </section>

      {/* Historical Performance */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Historical Performance</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-4">Accuracy Trend</h3>
            <div className="bg-white p-4 rounded border h-48">
              [Historical Accuracy Chart Placeholder]
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="font-bold mb-2">Best Performance</h3>
              <p className="text-lg">96.8% accuracy</p>
              <p className="text-sm text-gray-600">During stable market conditions</p>
            </div>
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="font-bold mb-2">Challenging Scenarios</h3>
              <p className="text-lg">82.4% accuracy</p>
              <p className="text-sm text-gray-600">During high volatility periods</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 