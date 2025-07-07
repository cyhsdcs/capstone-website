'use client';

import { useState, useEffect } from 'react';

export default function Demo() {
  const [products, setProducts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedModel, setSelectedModel] = useState('Transformer');
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [confirmResult, setConfirmResult] = useState<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://47.242.127.80:8000/product');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.product);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getApiPath = () => {
    switch (selectedModel) {
      case 'Transformer':
        return `http://47.242.127.80:8000/transformer/?pid=${selectedProduct}`;
      case 'LSTM':
        return `http://47.242.127.80:8000/lstm/?pid=${selectedProduct}`;
      case 'XGBoost':
        return `http://47.242.127.80:8000/xgboost/?pid=${selectedProduct}`;
      case 'CNN':
        return `http://47.242.127.80:8000/cnn/?pid=${selectedProduct}`;
      default:
        return '';
    }
  };

  const handleConfirm = async () => {
    setConfirmLoading(true);
    setConfirmResult(null);
    try {
      const apiPath = getApiPath();
      if (!apiPath) throw new Error('Invalid model selection');
      const response = await fetch(apiPath);
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      setConfirmResult(data);
    } catch (err) {
      setConfirmResult('请求失败');
    } finally {
      setConfirmLoading(false);
    }
  };

  // 渲染预测结果表格
  const renderPredictionTable = (result: any) => {
    if (!result || typeof result !== 'object' || !result.apply_amt_pred) return null;
    const len = Math.max(
      result.apply_amt_pred?.length || 0,
      result.redeem_amt_pred?.length || 0,
      result.net_in_amt_pred?.length || 0
    );
    return (
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full border border-gray-200 rounded">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Apply Amount Pred</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Redeem Amount Pred</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Net In Amount Pred</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: len }).map((_, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2 whitespace-nowrap">{result.time_list?.[i] ?? '-'}</td>
                <td className="px-4 py-2 whitespace-nowrap">{result.apply_amt_pred?.[i]?.toFixed(4) ?? '-'}</td>
                <td className="px-4 py-2 whitespace-nowrap">{result.redeem_amt_pred?.[i]?.toFixed(4) ?? '-'}</td>
                <td className="px-4 py-2 whitespace-nowrap">{result.net_in_amt_pred?.[i]?.toFixed(4) ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

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
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={selectedModel}
                onChange={e => setSelectedModel(e.target.value)}
              >
                <option>Transformer</option>
                <option>LSTM</option>
                <option>XGBoost</option>
                <option>CNN</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product ID
              </label>
              {loading ? (
                <div className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
                  Loading products...
                </div>
              ) : error ? (
                <div className="w-full border border-red-300 rounded-md px-3 py-2 bg-red-50 text-red-600">
                  {error}
                </div>
              ) : (
                <select
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={selectedProduct}
                  onChange={e => setSelectedProduct(e.target.value)}
                >
                  <option value="">Select a product</option>
                  {products.map((id) => (
                    <option key={id} value={id}>
                      {id}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <button
                className="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                onClick={handleConfirm}
                disabled={!selectedProduct || confirmLoading}
              >
                {confirmLoading ? 'Confirming...' : 'Confirm'}
              </button>
              {typeof confirmResult === 'string' ? (
                <div className="mt-2 text-sm text-gray-700 break-all">
                  {confirmResult}
                </div>
              ) : (
                renderPredictionTable(confirmResult)
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 