import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function MyStore() {
  const router = useRouter();
  const [storeInfo] = useState({
    storeName: '싱싱 상회',
    sellerName: '이현준',
    contact: '010-6687-2088'

  });
 

  const [products] = useState([
    {
      id: '1',
      name: '상큼한 딸기 1kg',
      description: '국내산 고품질 딸기',
      price: 25000,
      imageUrl: '/images/strawberry.jpg'
      
    },
    // 더미 데이터 추가 가능
  ]);




  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold text-gray-900">오픈마켓</a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">
          홈
        </a>
        <a href="/mystore" className="text-gray-700 hover:text-gray-900 px-3 py-2">
          내 스토어
        </a>
        <a href="/register-seller" className="text-gray-700 hover:text-gray-900 px-3 py-2">
          판매자 등록
        </a>
        <a href="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2">
          로그인
        </a>
      </div>
    </div>
  </nav>
</header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl font-bold mb-8 text-black">내 스토어 관리</h2>
          
          {/* 스토어 정보 섹션 */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h3 className="text-black font-medium mb-4">스토어 기본 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">스토어명</label>
                <div className="mt-1 text-gray-900">{storeInfo.storeName}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">판매자명</label>
                <div className="mt-1 text-gray-900">{storeInfo.sellerName}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">연락처</label>
                <div className="mt-1 text-gray-900">{storeInfo.contact}</div>
              </div>
            </div>
          </div>

          {/* 내 상품 목록 섹션 */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-black">내 상품 목록</h3>
              <button
                onClick={() => {/* 상품 추가 로직 */}}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                + 상품 추가
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div key={product.id} className="bg-white border rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      sizes="100%"
                      
                    
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900">{product.name}</h4>
                    <p className="mt-1 text-gray-500">{product.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-medium text-black">₩{product.price.toLocaleString()}</span>
                      <button className="text-blue-500 hover:text-blue-700">
                        수정하기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}