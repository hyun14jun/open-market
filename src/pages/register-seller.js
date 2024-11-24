import { useState } from 'react';
import { useRouter } from 'next/router';

export default function RegisterSeller() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    sellerId: '',
    name: '',
    contact: '',
    licenseNo: '',
    storeName: '',
    storeDescription: '',
    storeContact: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-6">
            <button
              onClick={() => router.push('/')}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              뒤로 가기
            </button>
          </div>

          <h2 className="text-2xl font-bold mb-8 text-black">판매자 등록</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">판매자 ID</label>
                <input
                  type="text"
                  value={formData.sellerId}
                  onChange={(e) => setFormData({...formData, sellerId: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">판매자명</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">연락처</label>
                <input
                  type="tel"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">사업자등록번호</label>
                <input
                  type="text"
                  value={formData.licenseNo}
                  onChange={(e) => setFormData({...formData, licenseNo: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-gray-900 mb-4">스토어 정보</h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">스토어명</label>
                <input
                  type="text"
                  value={formData.storeName}
                  onChange={(e) => setFormData({...formData, storeName: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">스토어 연락처</label>
                <input
                  type="tel"
                  value={formData.storeContact}
                  onChange={(e) => setFormData({...formData, storeContact: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">주소</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">스토어 설명</label>
                <textarea
                  value={formData.storeDescription}
                  onChange={(e) => setFormData({...formData, storeDescription: e.target.value})}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  rows={4}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                등록하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}