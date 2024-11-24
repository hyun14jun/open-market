import { useState } from 'react';

export default function Inquiry() {
  const [formData, setFormData] = useState({
    orderId: '',
    inquiryContent: '',
    // 추가적으로 필요한 필드 (예: 이름, 연락처, 이메일 등)
    name: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 서버로 데이터 전송 (예: fetch API 사용)
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('문의가 성공적으로 접수되었습니다.');
        // 성공 시 처리 (예: form 초기화 등)
      } else {
        alert('문의 접수에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('문의 접수 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">문의하기</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="orderId" className="block text-gray-700 text-sm font-bold mb-2">
            주문 ID
          </label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={formData.orderId}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="주문 ID를 입력해주세요"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inquiryContent" className="block text-gray-700 text-sm font-bold mb-2">
            문의 내용
          </label>
          <textarea
            id="inquiryContent"
            name="inquiryContent"
            value={formData.inquiryContent}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="문의 내용을 상세히 작성해주세요"
            required
          />
        </div>
        {/* 추가적인 필드 (예: 이름, 연락처, 이메일) */}
        <div className="mb-4">
          {/* ... */}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          문의하기
        </button>
      </form>
    </div>
  );
}