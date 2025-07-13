import { BlockMath } from 'react-katex';
import Image from 'next/image';

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
              We employ XGBoost as our primary predictive framework due to its proven efficacy in handling tabular financial data. The model captures complex nonlinear relationships through gradient-boosted decision trees, with three specialized instances trained separately for each target variable:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>apply_amt prediction model</li>
              <li>redeem_amt prediction model</li>
              <li>net_in_amt prediction model</li>
            </ul>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Feature Structure</h4>
                <p className="mb-2">
                  Contrary to sliding-window time-series approaches, our implementation processes each product-timepoint as an independent observation. The feature vector for product i at time t is constructed as:
                </p>
                <BlockMath math="F_{i,t} = [\phi_{meta},\ \phi_{stat}]" />
                <p className="text-sm text-gray-600 mb-2">where:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Product metadata:</strong> PID-encoded features, category</li>
                  <li><strong>Cross-sectional features:</strong> user traffic metrics, yield indicators, time descriptors</li>
                  <li><strong>Notably excludes:</strong> Any historical values of target variables</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Regularization Configuration</h4>
                <p className="mb-2">Hyperparameters were tuned for financial data characteristics:</p>
                <div className="bg-white p-3 rounded border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-1">Hyperparameter</th>
                        <th className="text-left py-1">Value</th>
                        <th className="text-left py-1">Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-1">max_depth</td>
                        <td className="py-1">6</td>
                        <td className="py-1">Controls tree complexity</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1">min_child_weight</td>
                        <td className="py-1">5</td>
                        <td className="py-1">Prevents overfitting to sparse regimes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1">gamma</td>
                        <td className="py-1">0.1</td>
                        <td className="py-1">Increases splitting conservatism</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1">subsample</td>
                        <td className="py-1">0.8</td>
                        <td className="py-1">Introduces instance sampling randomness</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1">colsample_bytree</td>
                        <td className="py-1">0.7</td>
                        <td className="py-1">Enables feature subsampling</td>
                      </tr>
                      <tr>
                        <td className="py-1">eta</td>
                        <td className="py-1">0.05</td>
                        <td className="py-1">Shrinkage learning rate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Training Protocol</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Early stopping triggered after 10 non-improving rounds</li>
                  <li>Global models trained across all products (no product-specific instances)</li>
                  <li>Feature importance analysis validates predictor relevance</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Multi-target Forecasting</h4>
                <p className="mb-2">
                  Each model outputs single-step predictions for its designated target. Ensemble predictions for future periods are generated through:
                  <BlockMath math="y^{t} + h(i) = f_h(F_i, t) \\for all\ h \in \{1, 2, \ldots, 10\}" />
                  where separate models fh trained for each forecast horizon h.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">CNNs</h3>
            <Image 
                src="https://www.helloimg.com/i/2025/07/13/687385bb8e330.jpg" 
                alt="Model Performance Comparison" 
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />
            <p className="mb-4">
              We adapt Convolutional Neural Networks (CNNs), originally designed for computer vision, to time series and numerical forecasting by restructuring the input data into a 2D “image-like” format. This enables convolutional kernels to scan across both temporal and feature dimensions, effectively capturing localized patterns within specific time windows.
            </p>
            <div className="mb-4">
              <strong>Input Representation:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>The input is transformed into a tensor of shape <code>(batch_size, 1, feature_size, num_features)</code>, where:</li>
                <ul className="list-disc list-inside ml-8">
                  <li><code>feature_size</code>: temporal window length (e.g., 10 days)</li>
                  <li><code>num_features</code>: number of feature dimensions (e.g., user traffic, time features, returns)</li>
                  <li>Each sample is treated as a single-channel image</li>
                </ul>
              </ul>
            </div>
            <div className="mb-4">
              <strong>Network Architecture:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Two convolutional-pooling blocks:
                  <ul className="list-disc list-inside ml-8">
                    <li><strong>First block (conv1):</strong> <br/>
                      Conv2d (extracts local patterns), BatchNorm2d (normalization), ReLU (non-linearity), MaxPool2d (downsampling)
                    </li>
                    <li><strong>Second block (conv2):</strong> <br/>
                      Further refines features and reduces spatial dimensions
                    </li>
                  </ul>
                </li>
                <li>After convolution and pooling, the 4D feature map is flattened and passed through:
                  <ul className="list-disc list-inside ml-8">
                    <li>Fully connected layer (fc1) + BatchNorm1d + ReLU for feature integration</li>
                    <li>Dropout for regularization</li>
                    <li>Final output layer (fc2) with output dimension <code>num_labels × 10</code> for multi-step forecasting</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <strong>Key Adaptations:</strong>
              <ul className="list-disc list-inside ml-6">
                <li><strong>Input:</strong> Uses single-channel 2D data (temporal × feature axes) instead of RGB images</li>
                <li><strong>Output:</strong> Predicts multiple future time steps, not classification categories</li>
              </ul>
            </div>
            <p>
              This design allows the model to learn and leverage localized temporal patterns, which are essential for accurate numerical forecasting.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">Transformer</h3>
            <p className="mb-4">
              The Transformer architecture, pioneered by the paper <em>"Attention is All You Need"</em>, represents a paradigm shift in sequence modeling by exclusively utilizing attention mechanisms. Unlike traditional recurrent (RNN) and convolutional (CNN) structures, the Transformer employs self-attention to model interdependencies between sequence elements, enabling efficient and effective long-range dependency modeling.
            </p>
            <div className="mb-4">
              <strong>Core Components:</strong>
              <ul className="list-disc list-inside ml-6">
                <li><strong>Multi-head self-attention:</strong> Parallelized feature extraction across multiple representation subspaces</li>
                <li><strong>Positional encoding:</strong> Injects sequential order information via sinusoidal waveforms</li>
                <li><strong>Feed-forward networks:</strong> Nonlinear feature transformations</li>
              </ul>
            </div>
            <p className="mb-4">
              These elements collectively empower the model to capture complex temporal patterns and long-range dependencies—capabilities critically aligned with financial time-series forecasting requirements. Compared to RNNs/LSTMs, the Transformer's self-attention mechanism achieves constant-time complexity for modeling distant relationships, resolving the vanishing gradient problem and enabling efficient processing of long sequences. Sinusoidal positional embeddings encode order information, while multi-head attention enhances representational capacity.
            </p>
            <div className="mb-4">
              <strong>Domain-Specific Implementation:</strong>
              <ul className="list-disc list-inside ml-6">
                <li><strong>Positional Encoding Layer:</strong> Generates reusable sinusoidal embeddings to preserve chronological order</li>
                <li><strong>Transformer Encoder Blocks:</strong> Each block integrates:
                  <ul className="list-disc list-inside ml-8">
                    <li>Multi-head self-attention for cross-temporal information flow</li>
                    <li>Layer normalization and residual connections for stable gradient propagation</li>
                    <li>Feed-forward networks for expanded feature representation</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <strong>Product-Aware Architecture:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Dual-input design processes:
                  <ul className="list-disc list-inside ml-8">
                    <li>Time-series features capturing temporal dynamics</li>
                    <li>Product ID (PID) embeddings encoding instrument-specific characteristics</li>
                  </ul>
                </li>
                <li>Learnable PID embeddings provide global context, enabling differentiation between financial products</li>
              </ul>
            </div>
            <p className="mb-4">
              After encoding, temporal dimensions are condensed via global average pooling to generate fixed-length representations. These are concatenated with PID embeddings, creating a unified representation that synthesizes temporal patterns and product attributes. This enriched representation undergoes dropout regularization before the final dense layer, enabling multi-step forecasting of financial targets.
            </p>
            <div className="mb-4">
              <strong>Financial Forecasting Advantages:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Cross-instrument generalization through shared encoder architecture with PID conditioning</li>
                <li>Robustness to irregular sampling via absolute positional encoding</li>
                <li>Interpretable temporal dependencies revealed through attention weight visualization</li>
                <li>Computational efficiency for long historical windows exceeding 100 time steps</li>
              </ul>
            </div>
            <p>
              This architecture establishes a new standard for financial sequence prediction, simultaneously addressing temporal modeling challenges and product heterogeneity through its novel integration of attention mechanisms and domain-specific embeddings. The PID conditioning mechanism enables knowledge transfer across financial instruments while preserving unique product characteristics.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-bold mb-2">LSTM + Attention</h3>
            <p className="mb-4">
              The Long Short-Term Memory (LSTM) network excels at capturing long-range dependencies in sequential data through its gating mechanisms, effectively mitigating gradient vanishing or explosion issues. This architecture demonstrates significant advantages for modeling financial time-series characterized by extended temporal dependencies. In contrast, Transformer architectures leverage self-attention and multi-head attention mechanisms to holistically capture sequence dependencies, simultaneously considering all positions within the input sequence. This enables superior contextual relationship modeling and highly efficient parallel computation.
            </p>
            <div className="mb-4">
              <strong>Hybrid Model Architecture</strong>
              <ul className="list-decimal list-inside ml-6">
                <li>
                  <strong>LSTM Encoding Layer</strong><br/>
                  An LSTM network processes the input sequence, generating both hidden states and cell states at each timestep. Crucially:
                  <ul className="list-disc list-inside ml-6">
                    <li>The layer returns full sequence hidden states <code>(batch_size, time_steps, hidden_dim)</code></li>
                    <li>The final timestep yields a consolidated state vector <code>(batch_size, hidden_dim)</code></li>
                  </ul>
                  This dual-output design preserves granular temporal dynamics while capturing cumulative sequence information.
                </li>
                <li>
                  <strong>Attention Mechanism</strong><br/>
                  The attention layer processes all LSTM hidden states as keys and values. By computing similarity scores between a trainable query and each key, it generates:
                  <ul className="list-disc list-inside ml-6">
                    <li>Context-dependent attention weights highlighting critical timesteps</li>
                    <li>A context vector via weighted summation of value states</li>
                    <li>Versus standalone LSTM: Dynamically focuses on salient market events during prediction</li>
                    <li>Versus pure attention models: Inherits LSTM's inherent temporal structure modeling</li>
                  </ul>
                </li>
                <li>
                  <strong>Feature Fusion</strong><br/>
                  The context vector merges with the LSTM's final hidden state through concatenation or additive fusion. This synthesis:
                  <ul className="list-disc list-inside ml-6">
                    <li>Preserves global sequence semantics from LSTM</li>
                    <li>Amplifies critical temporal features via attention weighting</li>
                  </ul>
                </li>
                <li>
                  <strong>PID Embedding Integration</strong><br/>
                  For multi-entity forecasting (e.g., distinct financial products):
                  <ul className="list-disc list-inside ml-6">
                    <li>PID embeddings encode entity-specific characteristics</li>
                    <li>These embeddings fuse with the combined temporal representation (context vector + final state)</li>
                  </ul>
                  This enables joint modeling of shared temporal patterns and entity-specific behaviors.
                </li>
                <li>
                  <strong>Prediction Layer</strong><br/>
                  The integrated feature vector feeds into fully-connected layers for multi-step forecasting:
                  <ul className="list-disc list-inside ml-6">
                    <li>Output dimensions: <code>(batch_size, forecast_horizon, target_dim)</code></li>
                    <li>Supports both regression (fund flows) and classification (market regime) tasks</li>
                    <li>Dropout regularization enhances generalization during this final transformation</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          
        </div>
      </section>

      {/* Training Process */}
      {/* <section className="bg-white p-8 rounded-lg shadow">
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
      </section> */}
    </div>
  );
} 