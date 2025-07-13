export default function Website() {
  return (
    <div className="space-y-12 py-8">
      <h1 className="text-3xl font-bold text-cyan-600 mb-8">Website Development</h1>

      {/* Tech Stack */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Frontend Framework</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <span>• Next.js 15.2.4</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>• React 19.0.0</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>• TypeScript</span>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Styling</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <span>• Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>• Responsive Design</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>• Utility-first CSS</span>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Deployment</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <span>• PM2 Process Manager</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>• Node.js Environment</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>• Linux Server</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Architecture</h2>
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Project Structure</h3>
            <pre className="bg-gray-50 p-4 rounded-lg text-sm">
              {`project-root/
├── app/
│   ├── documentation/
│   ├── methodology/
│   ├── results/
│   ├── website/
│   ├── dataset/
│   ├── demo/
│   └── page.tsx
├── public/
│   └── files/
├── styles/
├── next.config.ts
└── package.json`}
            </pre>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Key Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Server-side rendering with Next.js</li>
              <li>• Type-safe development with TypeScript</li>
              <li>• Responsive design with Tailwind CSS</li>
              <li>• Modern component-based architecture</li>
              <li>• Efficient deployment with PM2</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Development */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Development</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            This website is built using modern web development practices and tools. 
          </p>
          <p>
            The use of Next.js enables server-side rendering and optimal performance, 
            while TypeScript ensures type safety and better development experience.
          </p>
          <p>
            The styling is implemented using Tailwind CSS, providing a utility-first 
            approach to styling and ensuring consistent design across all pages.
          </p>
          <p>
            The website is deployed using PM2 process manager, ensuring high availability 
            and efficient process management in production.
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Related Links</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-gray-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <a 
              href="https://github.com/cyhsdcs/capstone-website.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-600 transition-colors"
            >
              GitHub Repository
            </a>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"/>
            </svg>
            <a 
              href="http://47.242.127.80:3000/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-600 transition-colors"
            >
              Deployment Server
            </a>
          </div>
        </div>
      </section>

      {/* Development Log */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl text-cyan-600 font-bold mb-6">Development Log</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-600 pl-4">
            <h3 className="font-semibold text-lg mb-2">Technology Stack Selection</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Next.js for server-side rendering and routing</li>
              <li>React for component-based architecture</li>
              <li>TypeScript for type safety and robust development</li>
            </ul>
          </div>

          <div className="border-l-4 border-cyan-600 pl-4">
            <h3 className="font-semibold text-lg mb-2">Server Deployment</h3>
            <div className="space-y-2 text-gray-600">
              <p>Initial:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Explored options: Alibaba Cloud, Tencent Cloud, AWS</li>
                <li>Selected Alibaba Cloud for competitive pricing and Hong Kong region availability</li>
              </ul>
              <p className="mt-2">Problems:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Started with 1GB RAM server - insufficient for Next.js application</li>
                <li>Upgraded to 2GB RAM - resolved stability issues</li>
                <li>Used PM2 for process management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}