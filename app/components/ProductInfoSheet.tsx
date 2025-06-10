'use client';

import { useState, useEffect } from 'react';

interface ProductInfo {
  product_pid: string;
  transaction_date: string;
  apply_amt: number;
  redeem_amt: number;
  net_in_amt: number;
  uv_fundown: number;
  uv_stableown: number;
  uv_fundopt: number;
  uv_fundmarket: number;
  uv_termmarket: number;
  during_days: number;
  total_net_value: number;
}

export default function ProductInfoSheet() {
  const [data, setData] = useState<ProductInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/product-info');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        // 只取前10条数据
        setData(jsonData.slice(0, 10));
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

  // 格式化数字为百分比
  const formatPercentage = (value: number) => {
    return `${(value * 100).toFixed(4)}%`;
  };

  // 格式化数字为千分位
  const formatNumber = (value: number) => {
    return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
  };

  return (
    <div className="h-[600px] flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th scope="col" className="w-[100px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Product ID
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Transaction Date
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Apply Amount
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Redeem Amount
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Net In Amount
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Fund Own
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Stable Own
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Fund Opt
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Fund Market
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Term Market
                  </th>
                  <th scope="col" className="w-[100px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    During Days
                  </th>
                  <th scope="col" className="w-[120px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Total Net Value
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="w-[100px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.product_pid}
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.transaction_date}
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatPercentage(row.apply_amt)}
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatPercentage(row.redeem_amt)}
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.net_in_amt >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {formatPercentage(row.net_in_amt)}
                      </span>
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatNumber(row.uv_fundown)}
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatNumber(row.uv_stableown)}
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatNumber(row.uv_fundopt)}
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatNumber(row.uv_fundmarket)}
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatNumber(row.uv_termmarket)}
                    </td>
                    <td className="w-[100px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.during_days}
                    </td>
                    <td className="w-[120px] px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {row.total_net_value ? formatNumber(row.total_net_value) : '-'}
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