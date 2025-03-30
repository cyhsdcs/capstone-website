export default function Methodology() {
  return (
    <div className="space-y-12">
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