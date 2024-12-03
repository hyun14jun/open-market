import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 실제 환경에서는 API를 호출하여 상품 정보를 가져옵니다.
    // 여기서는 임시 데이터를 사용합니다.
    if (productId) {
      const products = {
        '1': {
          id: '1',
          name: '겨울철 기모 맨투맨',
          description: '색깔 12종',
          price: 25000,
          imageUrl: '/images/strawberry.jpg',
          seller: '돌쇠네 농장',
          origin: '국내산',
          shippingFee: 3000,
          details: '당도 높은 국내산 딸기입니다. 산지 직송으로 더욱 신선합니다.'
        },
        '2': {
          id: '2',
          name: '김갑순 여사의 성공한 감자 농장',
          description: '달달하니 맛있는 감자 1kg',
          price: 2900,
          imageUrl: '/images/potato.jpg',
          seller: '김갑순네 농장',
          origin: '국내산',
          shippingFee: 3000,
          details: '식감이 좋은 국내산 감자입니다. 찌거나 구워서 드시면 좋습니다.'
        },
        '3': {
          id: '3',
          name: '두팔이네 양파',
          description: '양파.맛있읍니다.1kg',
          price: 3900,
          imageUrl: '/images/onion.jpg',
          seller: '두팔이네',
          origin: '국내산',
          shippingFee: 3000,
          details: '아삭하고 단맛이 나는 양파입니다.'
        }
      };
      
      setProduct(products[productId]);
    }
  }, [productId]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">로딩중...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                  오픈마켓
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                홈
              </Link>
              <Link href="/mystore" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                내 스토어
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                로그인
              </Link>
              <Link href="/register-seller" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                판매자 등록
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <div className="bg-white shadow rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="relative h-96">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
              
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">판매자</span>
                    <span className="text-black">{product.seller}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">원산지</span>
                    <span className="text-black">{product.origin}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">배송비</span>
                    <span className="text-black">₩{product.shippingFee.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="text-3xl font-bold text-gray-900 mb-6">
                    ₩{product.price.toLocaleString()}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700">
                    장바구니 담기
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">상품 상세 정보</h2>
                <p className="text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
