'use client';

import { useState, useEffect } from 'react';

interface TimeInfo {
  stat_date: string;
  is_trade: number;
  next_trade_date: string;
  last_trade_date: string;
  is_week_end: number;
  is_month_end: number;
  is_quarter_end: number;
  is_year_end: number;
  trade_day_rank: number;
}

export default function TimeInfoSheet() {
  const [data, setData] = useState<TimeInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/time-info');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-center p-4">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="h-[600px] flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Date
                  </th>
                  <th scope="col" className="w-[150px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Trading Day
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Next Trading Day
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Last Trading Day
                  </th>
                  <th scope="col" className="min-w-[200px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Period End
                  </th>
                  <th scope="col" className="w-[100px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Trade Day Rank
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.stat_date}
                    </td>
                    <td className="w-[150px] px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.is_trade === 1 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {row.is_trade === 1 ? 'Trading Day' : 'Non-Trading Day'}
                      </span>
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.next_trade_date}
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.last_trade_date}
                    </td>
                    <td className="min-w-[200px] px-6 py-4 whitespace-nowrap text-sm">
                      <div className="space-y-1">
                        {row.is_week_end === 1 && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                            Week End
                          </span>
                        )}
                        {row.is_month_end === 1 && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2">
                            Month End
                          </span>
                        )}
                        {row.is_quarter_end === 1 && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                            Quarter End
                          </span>
                        )}
                        {row.is_year_end === 1 && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Year End
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="w-[100px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.trade_day_rank}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
