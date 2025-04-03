export default function Documentation() {
  return (
    <div className="space-y-12 py-8">
      <h1 className="text-3xl font-bold text-cyan-600 mb-8">Documentation</h1>
      
      <div className="space-y-6">
        {/* Project Documents */}
        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl text-cyan-600 font-bold mb-6">Project Documents</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Detailed Project Proposal</h3>
                  <p className="text-gray-600 mt-1">Comprehensive project proposal including methodology, timeline, and deliverables</p>
                  <div className="text-sm text-gray-500 mt-2">
                    <span className="mr-4">Format: PDF</span>
                    <span>Last updated: March 30, 2024</span>
                  </div>
                </div>
                <a 
                  href="/files/CS_Project_Proposal.pdf" 
                  download
                  className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors flex items-center space-x-2"
                >
                  <span>Download</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 可以在这里添加更多文档 */}
            {/* 示例：
            <div className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Weekly Progress Report</h3>
                  <p className="text-gray-600 mt-1">Weekly updates on project progress and achievements</p>
                  <div className="text-sm text-gray-500 mt-2">
                    <span className="mr-4">Format: PDF</span>
                    <span>Last updated: April 5, 2024</span>
                  </div>
                </div>
                <a 
                  href="/files/progress_report.pdf" 
                  download
                  className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors flex items-center space-x-2"
                >
                  <span>Download</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            */}
          </div>
        </section>
      </div>
    </div>
  );
}
