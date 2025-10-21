import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/legal/document-center")({
  component: LegalDocumentCenterWireframe,
});

export default function LegalDocumentCenterWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-purple-600">
        WF45 - TRUNG TÂM TÀI LIỆU PHÁP LÝ
      </h1>

      {/* Khung bố cục */}
      <div className="border-4 border-gray-800">
        {/* Đầu trang */}
        <div className="border-b-2 border-gray-800 p-4 bg-purple-900 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">📚 Kho Bản Quyền</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>Bảng điều khiển</div>
                <div>Hợp đồng</div>
                <div>Tranh chấp</div>
                <div className="font-semibold text-red-300">
                  Trung tâm pháp lý
                </div>
                <div>Tuân thủ</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (5)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">⚖️ Nhóm pháp lý ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Thanh bên */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50">
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <div className="text-sm">📊 Bảng điều khiển pháp lý</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                  <div className="text-sm font-semibold">
                    📄 Trung tâm tài liệu
                  </div>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      6
                    </div>
                    <div className="font-semibold text-red-600">📋 Mẫu</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      7
                    </div>
                    <div className="text-gray-600">📁 Thư viện tài liệu</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      8
                    </div>
                    <div className="text-gray-600">✅ Trung tâm tuân thủ</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      9
                    </div>
                    <div className="text-gray-600">📊 Phân tích pháp lý</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    10
                  </div>
                  <div className="text-sm">🔒 Quản lý hợp đồng</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
                  </div>
                  <div className="text-sm">⚖️ Giải quyết tranh chấp</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    12
                  </div>
                  <div className="text-sm">📊 Giám sát tuân thủ</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <div className="text-sm">⚙️ Cài đặt pháp lý</div>
                </div>
              </div>
            </div>
          </div>

          {/* Nội dung chính */}
          <div className="flex-1 p-6">
            {/* Tiêu đề trang */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <h1 className="text-2xl font-bold">
                    Trung tâm tài liệu pháp lý
                  </h1>
                </div>
                <p className="text-gray-600">
                  Kho lưu trữ tập trung cho hợp đồng, mẫu, tài liệu tuân thủ và
                  tài nguyên pháp lý
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <button
                    className="px-4 py-2 bg-purple-600 text-white text-sm rounded"
                    type="button"
                  >
                    📄 Tải lên tài liệu
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded"
                    type="button"
                  >
                    📋 Tạo Mẫu
                  </button>
                </div>
              </div>
            </div>

            {/* Thống kê tài liệu */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4 bg-purple-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">Tổng số tài liệu</div>
                </div>
                <div className="text-2xl font-bold text-purple-600">2,847</div>
                <div className="text-xs text-purple-600">
                  Tài liệu pháp lý đang hoạt động
                </div>
                <div className="text-xs text-gray-500 mt-1">+124 tháng này</div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm text-gray-600">Mẫu có sẵn</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">87</div>
                <div className="text-xs text-blue-600">
                  Mẫu sẵn sàng sử dụng
                </div>
                <div className="text-xs text-gray-500 mt-1">15 danh mục</div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm text-gray-600">
                    Tình trạng tuân thủ
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">98.5%</div>
                <div className="text-xs text-green-600">Tài liệu tuân thủ</div>
                <div className="text-xs text-gray-500 mt-1">
                  42 đang chờ xem xét
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    20
                  </div>
                  <div className="text-sm text-gray-600">
                    Hành động đang chờ
                  </div>
                </div>
                <div className="text-2xl font-bold text-orange-600">15</div>
                <div className="text-xs text-orange-600">⚠️ Cần chú ý</div>
                <div className="text-xs text-gray-500 mt-1">8 mục khẩn</div>
              </div>
            </div>

            {/* Mẫu pháp lý nổi bật */}
            <div className="bg-linear-to-r from-purple-50 to-blue-50 border border-purple-200 rounded p-4 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  21
                </div>
                <h3 className="font-semibold text-purple-800">
                  📋 Mẫu pháp lý nổi bật
                </h3>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded border border-purple-200">
                  <div className="text-sm font-medium mb-2">
                    📝 Mẫu Hợp đồng Cấp phép Bản quyền
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    Mẫu cấp phép chuẩn cho quyền sách
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-purple-600">
                      Phiên bản 3.2
                    </span>
                    <button
                      className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded"
                      type="button"
                    >
                      Sử dụng Mẫu
                    </button>
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200">
                  <div className="text-sm font-medium mb-2">
                    🤝 Thỏa thuận Hợp tác Xuất bản
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    Điều khoản hợp tác xuất bản toàn diện
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-blue-600">Phiên bản 2.8</span>
                    <button
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                      type="button"
                    >
                      Sử dụng Mẫu
                    </button>
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200">
                  <div className="text-sm font-medium mb-2">
                    💰 Mẫu Phân chia Doanh thu (Royalty)
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    Điều khoản phân chia doanh thu và thanh toán
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-green-600">
                      Phiên bản 4.1
                    </span>
                    <button
                      className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
                      type="button"
                    >
                      Sử dụng Mẫu
                    </button>
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200">
                  <div className="text-sm font-medium mb-2">
                    ⚖️ Thỏa thuận Giải quyết Tranh chấp
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    Khung hòa giải và trọng tài
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-orange-600">
                      Phiên bản 1.9
                    </span>
                    <button
                      className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded"
                      type="button"
                    >
                      Sử dụng Mẫu
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hành động nhanh & Phân tích pháp lý */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    22
                  </div>
                  <div className="text-sm font-semibold text-red-800">
                    🚨 Hành động pháp lý khẩn cấp
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">Contract DOC-2024-VN-445</div>
                    <div className="text-xs text-gray-600">
                      Hợp đồng gia hạn bản quyền sắp tới hạn
                    </div>
                    <div className="text-xs text-red-600">
                      ⏰ Hết hạn trong 7 ngày
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">Đánh giá tuân thủ</div>
                    <div className="text-xs text-gray-600">
                      Các sửa đổi IP mới có hiệu lực từ 1 Dec
                    </div>
                    <div className="text-xs text-orange-600">
                      📋 Xem xét 28 hợp đồng
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">Yêu cầu ý kiến pháp lý</div>
                    <div className="text-xs text-gray-600">
                      Thắc mắc cấp ý kiến pháp lý xuyên biên giới
                    </div>
                    <div className="text-xs text-blue-600">
                      💬 Từ đội hợp đồng
                    </div>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-red-600 text-white text-xs rounded"
                    type="button"
                  >
                    🚨 Xử lý tất cả
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    23
                  </div>
                  <div className="text-sm font-semibold text-blue-800">
                    📊 Phân tích pháp lý
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-blue-200">
                    <div className="font-medium">🌏 Cập nhật quy định</div>
                    <div className="text-xs text-gray-600">
                      Các sửa đổi Luật SHTT tại Việt Nam
                    </div>
                    <div className="text-xs text-blue-600">
                      Đã có đánh giá tác động
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-blue-200">
                    <div className="font-medium">📈 Xu hướng hợp đồng</div>
                    <div className="text-xs text-gray-600">
                      Điều khoản quyền số tăng +45% về tần suất sử dụng
                    </div>
                    <div className="text-xs text-green-600">
                      Khuyến nghị cập nhật mẫu
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-blue-200">
                    <div className="font-medium">⚖️ Cập nhật án lệ</div>
                    <div className="text-xs text-gray-600">
                      Các bản án về bản quyền gần đây
                    </div>
                    <div className="text-xs text-purple-600">
                      3 tiền lệ liên quan
                    </div>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded"
                    type="button"
                  >
                    📚 Nghiên cứu pháp lý
                  </button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    24
                  </div>
                  <div className="text-sm font-semibold text-green-800">
                    ✅ Công cụ tuân thủ
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <button
                    className="w-full px-3 py-2 bg-white border border-green-200 rounded text-left"
                    type="button"
                  >
                    <div className="font-medium">
                      📋 Kiểm tra tuân thủ hợp đồng
                    </div>
                    <div className="text-xs text-gray-600">
                      Quét tự động kiểm tra tuân thủ hợp đồng
                    </div>
                  </button>
                  <button
                    className="w-full px-3 py-2 bg-white border border-green-200 rounded text-left"
                    type="button"
                  >
                    <div className="font-medium">
                      🔍 Đánh giá rủi ro tài liệu
                    </div>
                    <div className="text-xs text-gray-600">
                      Phân tích rủi ro bằng AI
                    </div>
                  </button>
                  <button
                    className="w-full px-3 py-2 bg-white border border-green-200 rounded text-left"
                    type="button"
                  >
                    <div className="font-medium">
                      📊 Bảng điều khiển tuân thủ
                    </div>
                    <div className="text-xs text-gray-600">
                      Giám sát tuân thủ theo thời gian thực
                    </div>
                  </button>
                  <button
                    className="w-full px-3 py-2 bg-white border border-green-200 rounded text-left"
                    type="button"
                  >
                    <div className="font-medium">📅 Lịch pháp lý</div>
                    <div className="text-xs text-gray-600">
                      Hạn chót và ngày quan trọng
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Tìm kiếm tài liệu & bộ lọc */}
            <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-6">
              <div className="grid grid-cols-6 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <label
                      className="text-sm font-medium"
                      htmlFor="search-input-25"
                    >
                      Tìm tài liệu
                    </label>
                  </div>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    id="search-input-25"
                    placeholder="Tên tài liệu, nội dung..."
                    type="text"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      26
                    </div>
                    <label
                      className="text-sm font-medium"
                      htmlFor="doc-type-26"
                    >
                      Loại tài liệu
                    </label>
                  </div>
                  <select
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    id="doc-type-26"
                  >
                    <option>Tất cả loại</option>
                    <option>Hợp đồng</option>
                    <option>Mẫu</option>
                    <option>Ý kiến pháp lý</option>
                    <option>Tài liệu tuân thủ</option>
                    <option>Chính sách</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      27
                    </div>
                    <label
                      className="text-sm font-medium"
                      htmlFor="legal-category-27"
                    >
                      Danh mục pháp lý
                    </label>
                  </div>
                  <select
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    id="legal-category-27"
                  >
                    <option>Tất cả danh mục</option>
                    <option>Bản quyền & SHTT</option>
                    <option>Quyền xuất bản</option>
                    <option>Phân phối</option>
                    <option>Lao động</option>
                    <option>Quy định</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      28
                    </div>
                    <label className="text-sm font-medium" htmlFor="status-28">
                      Trạng thái
                    </label>
                  </div>
                  <select
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    id="status-28"
                  >
                    <option>Tất cả trạng thái</option>
                    <option>Hoạt động</option>
                    <option>Bản nháp</option>
                    <option>Đang xem xét</option>
                    <option>Đã phê duyệt</option>
                    <option>Lưu trữ</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      29
                    </div>
                    <label
                      className="text-sm font-medium"
                      htmlFor="timeframe-29"
                    >
                      Khoảng thời gian
                    </label>
                  </div>
                  <select
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    id="timeframe-29"
                  >
                    <option>Tất cả thời gian</option>
                    <option>7 ngày gần nhất</option>
                    <option>30 ngày gần nhất</option>
                    <option>90 ngày gần nhất</option>
                    <option>Năm nay</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center gap-1 w-full">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      30
                    </div>
                    <button
                      className="px-4 py-2 bg-purple-600 text-white text-sm rounded w-full"
                      type="button"
                    >
                      🔍 Tìm kiếm
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bảng thư viện tài liệu */}
            <div className="border border-gray-300 rounded">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      31
                    </div>
                    <h3 className="font-semibold">
                      Thư viện tài liệu pháp lý (2,847 tài liệu)
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded"
                      type="button"
                    >
                      🚨 Khẩn cấp (15)
                    </button>
                    <button
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                      type="button"
                    >
                      📋 Mẫu (87)
                    </button>
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Sắp xếp: Ngày cập nhật</option>
                      <option>Sắp xếp: Loại tài liệu</option>
                      <option>Sắp xếp: Độ ưu tiên</option>
                      <option>Sắp xếp: Trạng thái</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr className="border-b border-gray-300">
                      <th className="text-left p-3">
                        <div className="flex items-center gap-1">
                          <input type="checkbox" />
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            32
                          </div>
                          <div>Tài liệu & Loại</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Danh mục</th>
                      <th className="text-left p-3">Trạng thái</th>
                      <th className="text-left p-3">Cập nhật gần nhất</th>
                      <th className="text-left p-3">Phiên bản</th>
                      <th className="text-left p-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">
                            📝 Mẫu Cấp phép Bản quyền Tiêu chuẩn
                          </div>
                          <div className="text-sm text-gray-600">
                            📋 Mẫu hợp đồng
                          </div>
                          <div className="text-xs text-red-600">
                            🚨 KHẨN - Cần cập nhật tuân thủ
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          📖 Bản quyền & SHTT
                        </div>
                        <div className="text-xs text-gray-600">
                          Sở hữu trí tuệ
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                          ⚠️ Đang đánh giá tuân thủ
                        </span>
                        <div className="text-xs text-red-600 mt-1">
                          Hạn: Nov 25, 2024
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Oct 18, 2024</div>
                        <div className="text-xs text-gray-600">
                          bởi Nhóm pháp lý
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold">v3.2</div>
                        <div className="text-xs text-gray-600">Hiện tại</div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded"
                            type="button"
                          >
                            🚨 Xem xét
                          </button>
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            ✏️ Chỉnh sửa
                          </button>
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">
                            🤝 Thỏa thuận Hợp tác Xuất bản
                          </div>
                          <div className="text-sm text-gray-600">
                            📄 Hợp đồng đang hoạt động
                          </div>
                          <div className="text-xs text-blue-600">
                            ✅ Được cập nhật gần đây
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          📚 Quyền xuất bản
                        </div>
                        <div className="text-xs text-gray-600">
                          Phân phối & Bán hàng
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Đã phê duyệt
                        </span>
                        <div className="text-xs text-green-600 mt-1">
                          Tuân thủ
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Oct 20, 2024</div>
                        <div className="text-xs text-gray-600">
                          bởi Quản lý hợp đồng
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold">v2.8</div>
                        <div className="text-xs text-blue-600">Mới nhất</div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                            type="button"
                          >
                            📋 Sử dụng
                          </button>
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            📄 Sao chép
                          </button>
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">
                            ⚖️ Khuôn khổ Giải quyết Tranh chấp
                          </div>
                          <div className="text-sm text-gray-600">
                            📋 Tài liệu chính sách
                          </div>
                          <div className="text-xs text-gray-600">
                            Hướng dẫn thủ tục tiêu chuẩn
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          ⚖️ Thủ tục pháp lý
                        </div>
                        <div className="text-xs text-gray-600">
                          Quản lý tranh chấp
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          📝 Đang xem xét
                        </span>
                        <div className="text-xs text-blue-600 mt-1">
                          Đang được xem xét bởi pháp lý
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Oct 15, 2024</div>
                        <div className="text-xs text-gray-600">
                          bởi Cố vấn cấp cao
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold">v1.9</div>
                        <div className="text-xs text-gray-600">Bản nháp</div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            📝 Xem xét
                          </button>
                          <button
                            className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded"
                            type="button"
                          >
                            💬 Bình luận
                          </button>
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-green-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">
                            💰 Mẫu Phân chia Doanh thu
                          </div>
                          <div className="text-sm text-gray-600">
                            📋 Mẫu tài chính
                          </div>
                          <div className="text-xs text-green-600">
                            ✅ Đã được chứng nhận tuân thủ
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          💰 Điều khoản tài chính
                        </div>
                        <div className="text-xs text-gray-600">
                          Doanh thu & Thanh toán
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Hoạt động
                        </span>
                        <div className="text-xs text-green-600 mt-1">
                          Sẵn sàng sử dụng
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Oct 12, 2024</div>
                        <div className="text-xs text-gray-600">
                          bởi Pháp lý Tài chính
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold">v4.1</div>
                        <div className="text-xs text-green-600">Hiện tại</div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                            type="button"
                          >
                            📋 Sử dụng
                          </button>
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            📊 Phân tích
                          </button>
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Phân trang */}
              <div className="bg-gray-50 p-3 border-t border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Hiển thị 1 đến 20 trong 2,847 tài liệu
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      33
                    </div>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      disabled
                    >
                      Trước
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded text-sm">
                      1
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      2
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      3
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      ...
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      142
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      Tiếp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ghi chú */}
      <div className="mt-8 p-6 bg-purple-50 border border-purple-200 rounded">
        <h3 className="font-bold text-purple-800 mb-4">
          📝 WF45 - GHI CHÚ TRUNG TÂM TÀI LIỆU PHÁP LÝ
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-purple-600">
              ⚖️ Kho lưu trữ pháp lý
            </div>
            <div className="text-gray-700">
              <strong>❶-❸ Đầu trang:</strong> Điều hướng portal pháp lý và quyền
              truy cập nhóm
              <br />
              <strong>❹-⓭ Thanh bên:</strong> Điều hướng phòng pháp lý với trọng
              tâm Document
              <br />
              <strong>⓮-⓰ Hành động trang:</strong> Tải lên tài liệu và tạo mẫu
              <br />
              <strong>⓱-⓴ Thống kê tài liệu:</strong> Tổng tài liệu, mẫu, tuân
              thủ và hành động chờ
              <br />
              <strong>㉑ Mẫu nổi bật:</strong> Truy cập nhanh tới các mẫu pháp
              lý thường dùng
            </div>
          </div>
          <div>
            <div className="font-bold text-purple-600">
              📋 Tính năng quản lý
            </div>
            <div className="text-gray-700">
              <strong>㉒-㉔ Phân tích pháp lý:</strong> Hành động khẩn cấp, cập
              nhật quy định, công cụ tuân thủ
              <br />
              <strong>㉕-㉚ Tìm kiếm nâng cao:</strong> Lọc và tìm kiếm tài liệu
              nâng cao
              <br />
              <strong>㉛-㉝ Thư viện tài liệu:</strong> Kho lưu trữ đầy đủ với
              quản lý phiên bản và workflow
              <br />
              <strong>Giám sát tuân thủ:</strong> Kiểm tra tuân thủ tự động và
              theo dõi quy định
              <br />
              <strong>Quản lý mẫu:</strong> Mẫu có quản lý phiên bản và phân
              tích sử dụng
              <br />
              <strong>Phân tích pháp lý:</strong> Phân tích tài liệu bằng AI và
              cập nhật quy định
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
