
export default function Methodology() {

  return (
    <div className="space-y-12">

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
              <li>From Kaggle</li>
              <li>Fund Redemption Data and Fund Characteristics Information Dataset</li>
              <li>Market Information Dataset</li>
              <li>Time Information Dataset</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Data Preprocessing</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Converted string-formatted dates (e.g., transaction_date, end_date, stat_date) into datetime types for consistency in time-based analysis.</li>
              <li>Removed invalid date rows to ensure temporal uniformity and validity, crucial for time-series modeling.</li>
              <li>Aggregated the three datasets into a single dataframe for streamlined processing.</li>
              <li>Filled missing values in key features (e.g., during_days, total_net_value) using the median under PID grouping.</li>
              <li>minimizes the impact of sparse and anomalous data distributions.</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Feature Engineering</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Time Feature Extraction 
                <ul className="list-disc list-inside space-y-2">
                <li>Extracted year, month, day, and week from transaction_date to capture periodic trends.</li>
                <li>Encoded cyclical time patterns using sine/cosine functions (for weekly/monthly cycles).</li>
                <li>Added a weekend indicator based on weekday values.</li>
                <li>Converted dates into numeric format (days since 20210104) to preserve temporal continuity.</li>
                </ul>
              </li>
              <li>Lagged Features for Temporal Dependencies
                <ul className="list-disc list-inside space-y-2">
                  <li>Created lagged features (1-day, 3-day, 7-day) for financial metrics.</li>
                  <li>Helps model capture historical trends, seasonality, and autocorrelation.</li>
                </ul>
              </li>
              <li>Feature Scaling & Transformation
                <ul className="list-disc list-inside space-y-2">
                  <li>Applied min-max normalization to browse-type UV features to handle scale disparities.</li>
                  <li>Used log transformation on yield features to reduce skewness.</li>
                </ul>
              </li>
              <li>Product ID (PID) Encoding
                <ul className="list-disc list-inside space-y-2">
                  <li>Applied Label Encoding to product_pid to treat each PID as a unique time series.</li>
                  <li>Encoded PIDs serve as inputs to the Transformer embedding layer, enabling distinct pattern learning per product.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Data Segmentation</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Temporal Filtering & Outlier Handling
                <ul className="list-disc list-inside space-y-2">
                  <li>Defined training start/end dates to focus on recent data, discarding outdated records.</li>
                  <li>Detected outliers in target features via visualization and applied IQR-based truncation to stabilize data distribution and improve model robustness.</li>
                </ul>
              </li>
              <li>Feature Scaling & Data Leakage Prevention
                <ul className="list-disc list-inside space-y-2">
                  <li>Used MinMaxScaler for normalization, fitted only on training data to avoid leakage.</li>
                  <li>Applied the same scaling parameters to validation/test sets for consistency.</li>
                </ul>
              </li>
              <li>Sliding Window Approach for Sequential Data
                <ul className="list-disc list-inside space-y-2">
                  <li>Created input-output samples using a 10-day sliding window (aligned with test requirements).</li>
                  <li>Reserved the first 10 days of test data for validation to ensure alignment.</li>
                </ul>
              </li>
              <li>Consistency Across Splits 
                <ul className="list-disc list-inside space-y-2">
                  <li>Maintained identical preprocessing for training, validation, and test sets.</li>
                  <li>Ensured temporal continuity and fair evaluation.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Model Architecture */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Model Architecture</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">XGBoost</h3>
            <p className="mb-4">
              Primary choice for financial time-series forecasting (e.g., stock prices, fund flows).<br/>
              Strengths:<br/>
              Learns complex nonlinear relationships autonomously.<br/>
              L1/L2 regularization reduces overfitting, critical for noisy financial data.<br/>
            </p>
            <div className="bg-white p-4 rounded border">
              [XGBoost Architecture Diagram Placeholder]
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">CNNs</h3>
            <p className="mb-4">
              Advantages:<br/>
              Parameter-sharing kernels extract reusable feature patterns.<br/>
              Adapted for time-series via temporal & feature-wise convolutions.<br/>
              Expected Benefit: Captures localized patterns within specific time windows.<br/>
            </p>
            <div className="bg-white p-4 rounded border"> 
              [CNNs Architecture Diagram Placeholder]
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Transformer</h3>
            <p className="mb-4">
            Key Strengths:
              Self-attention mechanism identifies long-term dependencies (e.g., market trends, user behavior).<br/>
              Handles multi-modal data (numerical + time-series) for holistic analysis.<br/>
              Interpretability: Attention weights highlight prediction drivers, aiding decision-making.<br/>
            </p>
            <div className="bg-white p-4 rounded border">
              [Transformer Architecture Diagram Placeholder]
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