export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-cyan-600 mb-4">
          A Machine Learning-Based Model for Predicting Fund Transactions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Developing a predictive model to accurately forecast daily fund subscription and redemption amounts using advanced machine learning techniques.
        </p>
      </section>

      {/* Project Overview */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl text-cyan-600 font-bold mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          The primary objective of this project is to develop a robust predictive
          model for forecasting daily fund subscriptions and redemptions. By
          accurately forecasting daily fund flows, we will help optimize inventory
          management, reduce investment risks for fund managers, and maximize
          market demand satisfaction. The system will incorporate financial
          market insights, product characteristics, and user behavior patterns to
          predict subscription and redemption amounts during both normal and
          abnormal market conditions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Data Collection</h3>
            <ul className="text-sm space-y-2">
              <li>• Historical fund transactions</li>
              <li>• Fund characteristics</li>
              <li>• Market indicators</li>
              <li>• Temporal features</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Feature Engineering</h3>
            <ul className="text-sm space-y-2">
              <li>• Lag features</li>
              <li>• Technical indicators</li>
              <li>• Market sentiment</li>
              <li>• Volatility measures</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Model Development</h3>
            <ul className="text-sm space-y-2">
              <li>• XGBoost</li>
              <li>• CNN</li>
              <li>• Transformer</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-2">Evaluation</h3>
            <ul className="text-sm space-y-2">
              <li>• Quantitative metrics</li>
              <li>• Cross-validation</li>
              <li>• Historical backtesting</li>
              <li>• Anomaly analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section>
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Project Timeline</h2>
        <div className="space-y-4">
          {[
            { date: '2025-03-10', task: 'Project Initialization and Planning' },
            { date: '2025-03-31', task: 'Website Framework Construction' },
            { date: '2025-04-15', task: 'Data Collection and Exploration' },
            { date: '2025-05-15', task: 'Feature Engineering' },
            { date: '2025-06-15', task: 'Base Model Development' },
            { date: '2025-06-30', task: 'Advanced Model Development' },
            { date: '2025-07-15', task: 'System Integration and Optimization' },
            { date: '2025-07-31', task: 'Evaluation and Refinement' },
            { date: '2025-08-15', task: 'Documentation' }
          ].map((milestone, index, array) => {
            const targetDate = new Date(milestone.date);
            const today = new Date();
            
            // 找到第一个未完成的任务的索引
            const firstPendingIndex = array.findIndex(item => new Date(item.date) >= today);
            
            // 确定状态
            const status = today > targetDate ? 'completed' : 
                          index === firstPendingIndex ? 'current' : 
                          'pending';
            
            const formatDate = (dateString: string) => {
              const date = new Date(dateString);
              const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                            'July', 'August', 'September', 'October', 'November', 'December'];
              const day = date.getDate();
              const month = months[date.getMonth()];
              const year = date.getFullYear();
              return `${day} ${month} ${year}`;
            };

            return (
              <div key={index} className="flex items-center">
                <div className="w-1/4 text-right pr-4">
                  {formatDate(milestone.date)}
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white
                  ${status === 'completed' ? 'bg-green-500' : 
                    status === 'current' ? 'bg-blue-500' : 
                    'bg-gray-300'}`}>
                  {status === 'completed' ? '✓' : '⋯'}
                </div>
                <div className="pl-4">{milestone.task}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Key Features</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Integration of multiple data sources for comprehensive analysis</li>
          <li>Advanced machine learning models including Transformer architectures</li>
          <li>Real-time market trend analysis</li>
          <li>Interactive visualization of predictions</li>
          <li>Robust evaluation metrics for model performance</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Participants</h2>
        <ul className="flex justify-between items-center space-x-4 text-gray-700">
          <li className="flex-1 text-center hover:text-cyan-600 transition-colors duration-300 cursor-pointer hover:scale-210 transform">Chen Yuanhong</li>
          <li className="flex-1 text-center hover:text-cyan-600 transition-colors duration-300 cursor-pointer hover:scale-210 transform">Chen Peng</li>
          <li className="flex-1 text-center hover:text-cyan-600 transition-colors duration-300 cursor-pointer hover:scale-210 transform">Zhang Wenhao</li>
        </ul>
      </section>
    </div>
  );
}
