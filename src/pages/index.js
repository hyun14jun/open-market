import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const products = [
    {
      id: '1',
      name: '돌쇠가 말아주는 딸기 농장',
      description: '새콤달콤한 딸기 1kg',
      price: 25000,
      imageUrl: '/images/strawberry.jpg',
    },
    {
      id: '2',
      name: '김갑순 여사의 성공한 감자 농장',
      description: '달달하니 맛있는 감자 1kg',
      price: 2900,
      imageUrl: '/images/potato.jpg',
    },
    {
      id: '3',
      name: '두팔이네 양파',
      description: '양파.맛있읍니다.1kg',
      price: 3900,
      imageUrl: '/images/onion.jpg',
    },
  ];

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
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">오늘의 인기 상품</h2>
            <p className="mt-4 text-xl text-gray-500">신선한 농산물을 직접 만나보세요</p>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link 
                href={`/product/${product.id}`} 
                key={product.id}
                className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative h-48">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">
                      ₩{product.price.toLocaleString()}
                    </span>
                    <button 
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={(e) => {
                        e.preventDefault();
                        // 장바구니 담기 로직
                      }}
                    >
                      장바구니 담기
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-black border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-lg font-medium text-white">고객 서비스</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/customer-service" className="text-base text-gray-500 hover:text-gray-300">
                    고객 서비스 안내
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white">문의 사항</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/inquiry" className="text-base text-gray-500 hover:text-gray-300">
                    문의하기
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-base text-gray-500 hover:text-gray-300">
                    자주 묻는 질문
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white">배송 조회</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/shipping" className="text-base text-gray-500 hover:text-gray-300">
                    배송 조회하기
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}