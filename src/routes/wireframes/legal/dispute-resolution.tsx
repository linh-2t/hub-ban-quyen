import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/legal/dispute-resolution")({
  component: ContractDisputeWireframe,
});

export default function ContractDisputeWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-red-600">
        WF46 - GIAO DIỆN GIẢI QUYẾT TRANH CHẤP HỢP ĐỒNG
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-red-900 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">
                  📚 Trung tâm Bản quyền
                </div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>Bảng điều khiển</div>
                <div>Hợp đồng</div>
                <div className="font-semibold text-red-300">Tranh chấp</div>
                <div>Trung tâm pháp lý</div>
                <div>Hòa giải</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (3)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">⚖️ Nhóm Giải quyết Tranh chấp ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50">
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <div className="text-sm">📊 Bảng Tranh chấp</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                  <div className="text-sm font-semibold">
                    ⚖️ Tranh chấp đang hoạt động
                  </div>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      6
                    </div>
                    <div className="font-semibold text-red-600">
                      🚨 Trường hợp khẩn cấp
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      7
                    </div>
                    <div className="text-gray-600">🤝 Hòa giải</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      8
                    </div>
                    <div className="text-gray-600">⚖️ Trọng tài</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      9
                    </div>
                    <div className="text-gray-600">📋 Trung tâm Bằng chứng</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    10
                  </div>
                  <div className="text-sm">📄 Quản lý vụ việc</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
                  </div>
                  <div className="text-sm">📊 Phân tích Kết quả</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    12
                  </div>
                  <div className="text-sm">🏛️ Tài liệu Pháp lý</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <div className="text-sm">⚙️ Cài đặt</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Page Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <h1 className="text-2xl font-bold">
                    Giải quyết Tranh chấp Hợp đồng
                  </h1>
                </div>
                <p className="text-gray-600">
                  Quản lý tranh chấp toàn diện, công cụ hòa giải và theo dõi kết
                  quả
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <button
                    className="px-4 py-2 bg-red-600 text-white text-sm rounded"
                    type="button"
                  >
                    ➕ Nộp Tranh chấp Mới
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
                    📊 Tạo Báo cáo
                  </button>
                </div>
              </div>
            </div>

            {/* Dispute Statistics */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4 bg-red-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">
                    Tranh chấp đang hoạt động
                  </div>
                </div>
                <div className="text-2xl font-bold text-red-600">23</div>
                <div className="text-xs text-red-600">
                  ⚖️ Vụ việc đang tiến hành
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  8 ưu tiên khẩn cấp
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm text-gray-600">Đang hòa giải</div>
                </div>
                <div className="text-2xl font-bold text-orange-600">15</div>
                <div className="text-xs text-orange-600">
                  🤝 Quy trình hòa giải
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Thời gian trung bình: 21 ngày
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm text-gray-600">
                    Vụ việc đã giải quyết
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">187</div>
                <div className="text-xs text-green-600">
                  ✅ Giải quyết thành công
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Tỷ lệ thành công 87%
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    20
                  </div>
                  <div className="text-sm text-gray-600">
                    Thời gian giải quyết trung bình
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600">28 ngày</div>
                <div className="text-xs text-blue-600">
                  ⏱️ Hiệu quả quy trình
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Nhanh hơn mục tiêu 15%
                </div>
              </div>
            </div>

            {/* Dispute Resolution Pipeline */}
            <div className="bg-linear-to-r from-red-50 to-blue-50 border border-red-200 rounded p-4 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  21
                </div>
                <h3 className="font-semibold text-red-800">
                  ⚖️ Quy trình Giải quyết Tranh chấp
                </h3>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-red-200">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    23
                  </div>
                  <div className="text-xs text-red-600 mt-1">Đã nộp</div>
                  <div className="text-xs text-gray-500">📋 Vụ mới</div>
                </div>
                <div className="flex-1 mx-3">
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-red-500 rounded w-3/4"></div>
                  </div>
                  <div className="text-xs text-center text-gray-500 mt-1">
                    75% chuyển sang hòa giải
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    15
                  </div>
                  <div className="text-xs text-orange-600 mt-1">Hòa giải</div>
                  <div className="text-xs text-gray-500">🤝 Đàm phán</div>
                </div>
                <div className="flex-1 mx-3">
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-orange-500 rounded w-4/5"></div>
                  </div>
                  <div className="text-xs text-center text-gray-500 mt-1">
                    80% hòa giải thành công
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div className="text-xs text-blue-600 mt-1">Trọng tài</div>
                  <div className="text-xs text-gray-500">
                    ⚖️ Quy trình chính thức
                  </div>
                </div>
                <div className="flex-1 mx-3">
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-500 rounded w-5/6"></div>
                  </div>
                  <div className="text-xs text-center text-gray-500 mt-1">
                    85% thành công qua trọng tài
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    187
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    Đã giải quyết
                  </div>
                  <div className="text-xs text-gray-500">✅ Đóng</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-600 text-center">
                Tổng Tỷ lệ Giải quyết: 87% • Thời gian Trung bình: 28 ngày •
                Hiệu quả Chi phí: +22%
              </div>
            </div>

            {/* Critical Alerts & Actions */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    22
                  </div>
                  <div className="text-sm font-semibold text-red-800">
                    🚨 Vụ việc Khẩn cấp
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">DSP-2024-VN-089</div>
                    <div className="text-xs text-gray-600">
                      Yêu cầu xâm phạm bản quyền
                    </div>
                    <div className="text-xs text-red-600">
                      ⏰ Thời hạn phản hồi trong 24 giờ
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">DSP-2024-VN-087</div>
                    <div className="text-xs text-gray-600">
                      Tranh chấp thanh toán tiền bản quyền
                    </div>
                    <div className="text-xs text-orange-600">
                      💰 ₫280M đang tranh chấp
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">DSP-2024-VN-084</div>
                    <div className="text-xs text-gray-600">
                      Cáo buộc vi phạm hợp đồng
                    </div>
                    <div className="text-xs text-blue-600">
                      📋 Đang chờ xem xét bằng chứng
                    </div>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-red-600 text-white text-xs rounded"
                    type="button"
                  >
                    🚨 Xử lý Khẩn cấp
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    23
                  </div>
                  <div className="text-sm font-semibold text-blue-800">
                    🤝 Lịch Hòa giải
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-blue-200">
                    <div className="font-medium">Hôm nay - 14:00</div>
                    <div className="text-xs text-gray-600">
                      DSP-2024-VN-085 • Quyền dịch thuật
                    </div>
                    <div className="text-xs text-blue-600">
                      📹 Phiên hòa giải trực tuyến
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-blue-200">
                    <div className="font-medium">Ngày mai - 10:00</div>
                    <div className="text-xs text-gray-600">
                      DSP-2024-VN-082 • Điều khoản phân phối
                    </div>
                    <div className="text-xs text-green-600">
                      🏢 Hòa giải trực tiếp
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-blue-200">
                    <div className="font-medium">25 Tháng 11 - 15:30</div>
                    <div className="text-xs text-gray-600">
                      DSP-2024-VN-081 • Phạm vi cấp phép
                    </div>
                    <div className="text-xs text-purple-600">
                      🎯 Lần hòa giải cuối cùng
                    </div>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded"
                    type="button"
                  >
                    📅 Xem Lịch
                  </button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    24
                  </div>
                  <div className="text-sm font-semibold text-green-800">
                    📊 Phân tích Kết quả
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Tỷ lệ thành công (Tháng này)</span>
                    <span className="font-bold text-green-600">89%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Thời gian hòa giải trung bình</span>
                    <span className="font-bold text-blue-600">21 ngày</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Chi phí cho mỗi giải quyết</span>
                    <span className="font-bold text-orange-600">₫18M</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Mức độ hài lòng khách hàng</span>
                    <span className="font-bold text-purple-600">4.7/5</span>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-green-600 text-white text-xs rounded"
                    type="button"
                  >
                    📈 Phân tích Đầy đủ
                  </button>
                </div>
              </div>
            </div>

            {/* Dispute Case Filters */}
            <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-6">
              <div className="grid grid-cols-6 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <label
                      className="text-sm font-medium"
                      htmlFor="searchCases"
                    >
                      Tìm kiếm Vụ việc
                    </label>
                  </div>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    id="searchCases"
                    placeholder="ID vụ, tên bên liên quan..."
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
                      htmlFor="disputeType"
                    >
                      Loại Tranh chấp
                    </label>
                  </div>
                  <select
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    id="disputeType"
                  >
                    <option>Tất cả loại</option>
                    <option>Xâm phạm bản quyền</option>
                    <option>Vi phạm hợp đồng</option>
                    <option>Tranh chấp bản quyền</option>
                    <option>Vấn đề cấp phép</option>
                    <option>Tranh chấp thanh toán</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      27
                    </div>
                    <label
                      className="text-sm font-medium"
                      htmlFor="statusFilter"
                    >
                      Trạng thái
                    </label>
                  </div>
                  <select
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    id="statusFilter"
                  >
                    <option>Tất cả</option>
                    <option>Đã nộp</option>
                    <option>Đang xem xét</option>
                    <option>Đang hòa giải</option>
                    <option>Trong trọng tài</option>
                    <option>Đã giải quyết</option>
                    <option>Đóng</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      28
                    </div>
                    <label
                      className="text-sm font-medium"
                      htmlFor="priorityFilter"
                    >
                      Độ ưu tiên
                    </label>
                  </div>
                  <select
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    id="priorityFilter"
                  >
                    <option>Tất cả</option>
                    <option>KHẨN CẤP</option>
                    <option>CAO</option>
                    <option>TRUNG BÌNH</option>
                    <option>THẤP</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      29
                    </div>
                    <label className="text-sm font-medium" htmlFor="dateFiled">
                      Ngày nộp
                    </label>
                  </div>
                  <select
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    id="dateFiled"
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
                      className="px-4 py-2 bg-red-600 text-white text-sm rounded w-full"
                      type="button"
                    >
                      🔍 Lọc
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Dispute Cases Table */}
            <div className="border border-gray-300 rounded">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      31
                    </div>
                    <h3 className="font-semibold">
                      Vụ tranh chấp đang hoạt động (38 vụ)
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded"
                      type="button"
                    >
                      🚨 Khẩn cấp (8)
                    </button>
                    <button
                      className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded"
                      type="button"
                    >
                      🤝 Hòa giải (15)
                    </button>
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Sắp xếp theo: Độ ưu tiên</option>
                      <option>Sắp xếp theo: Ngày nộp</option>
                      <option>Sắp xếp theo: Loại vụ</option>
                      <option>Sắp xếp theo: Trạng thái</option>
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
                          <div>Vụ & Các Bên</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Loại Tranh chấp</th>
                      <th className="text-left p-3">Trạng thái</th>
                      <th className="text-left p-3">Ưu tiên</th>
                      <th className="text-left p-3">Số tiền tranh chấp</th>
                      <th className="text-left p-3">Hành động tiếp theo</th>
                      <th className="text-left p-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">DSP-2024-VN-089</div>
                          <div className="text-sm text-gray-600">
                            📚 NXB Tổng Hợp vs. Kim Đồng
                          </div>
                          <div className="text-xs text-gray-600">
                            Tranh chấp quyền dịch thuật
                          </div>
                          <div className="text-xs text-red-600">
                            🚨 Hạn phản hồi: Ngày mai
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          📖 Xâm phạm bản quyền
                        </div>
                        <div className="text-xs text-gray-600">
                          Dịch không được phép
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                          🚨 Xem xét Khẩn cấp
                        </span>
                        <div className="text-xs text-red-600 mt-1">
                          Cần phản hồi pháp lý
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded font-bold">
                          KHẨN CẤP
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-red-600">
                          ₫450,000,000
                        </div>
                        <div className="text-xs text-gray-600">
                          Yêu cầu bồi thường
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-red-600">
                          Phản hồi pháp lý
                        </div>
                        <div className="text-xs text-gray-600">
                          Hạn: 22 Tháng 11, 2024
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded"
                            type="button"
                          >
                            🚨 Khẩn
                          </button>
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            📋 Bằng chứng
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
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-orange-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">DSP-2024-VN-085</div>
                          <div className="text-sm text-gray-600">
                            🏢 Fahasa vs. Alpha Books
                          </div>
                          <div className="text-xs text-gray-600">
                            Tranh chấp khu vực phân phối
                          </div>
                          <div className="text-xs text-orange-600">
                            🤝 Hòa giải lịch hôm nay
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          📋 Vi phạm hợp đồng
                        </div>
                        <div className="text-xs text-gray-600">
                          Vi phạm khu vực
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          🤝 Đang hòa giải
                        </span>
                        <div className="text-xs text-orange-600 mt-1">
                          Phiên hôm nay 14:00
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          CAO
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-orange-600">
                          ₫280,000,000
                        </div>
                        <div className="text-xs text-gray-600">
                          Yêu cầu doanh thu bị mất
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-orange-600">
                          Phiên hòa giải
                        </div>
                        <div className="text-xs text-gray-600">
                          Hôm nay: 14:00
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded"
                            type="button"
                          >
                            🤝 Tham gia
                          </button>
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            📄 Hồ sơ
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
                          <div className="font-medium">DSP-2024-VN-082</div>
                          <div className="text-sm text-gray-600">
                            💼 Tech Books vs. University Press
                          </div>
                          <div className="text-xs text-gray-600">
                            Tranh chấp thanh toán tiền bản quyền
                          </div>
                          <div className="text-xs text-blue-600">
                            ⏳ Giai đoạn thu thập bằng chứng
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          💰 Tranh chấp bản quyền
                        </div>
                        <div className="text-xs text-gray-600">
                          Lỗi tính toán thanh toán
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          📋 Đang xem xét
                        </span>
                        <div className="text-xs text-blue-600 mt-1">
                          Rà soát bằng chứng
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          TRUNG BÌNH
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-blue-600">
                          ₫125,000,000
                        </div>
                        <div className="text-xs text-gray-600">
                          Tiền bản quyền bị trả thiếu
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-blue-600">
                          Rà soát bằng chứng
                        </div>
                        <div className="text-xs text-gray-600">
                          Đang tiến hành
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            📊 Phân tích
                          </button>
                          <button
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                            type="button"
                          >
                            📋 Bằng chứng
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
                          <div className="font-medium">DSP-2024-VN-081</div>
                          <div className="text-sm text-gray-600">
                            📖 Educational Press vs. Student Books
                          </div>
                          <div className="text-xs text-gray-600">
                            Tranh cãi về phạm vi cấp phép
                          </div>
                          <div className="text-xs text-green-600">
                            ✅ Đã thỏa thuận
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          📜 Vấn đề cấp phép
                        </div>
                        <div className="text-xs text-gray-600">
                          Diễn giải phạm vi
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Đã thỏa thuận
                        </span>
                        <div className="text-xs text-green-600 mt-1">
                          Chờ hồ sơ
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          THẤP
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-green-600">
                          ₫85,000,000
                        </div>
                        <div className="text-xs text-gray-600">
                          Số tiền thỏa thuận
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-green-600">
                          Hoàn tất hồ sơ
                        </div>
                        <div className="text-xs text-gray-600">
                          Hạn: 30 Tháng 11, 2024
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                            type="button"
                          >
                            📄 Hoàn tất
                          </button>
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            📊 Báo cáo
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

              {/* Pagination */}
              <div className="bg-gray-50 p-3 border-t border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Hiển thị 1 đến 20 trong 38 vụ tranh chấp
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      33
                    </div>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      disabled
                      type="button"
                    >
                      Trước
                    </button>
                    <button
                      className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                      type="button"
                    >
                      1
                    </button>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      type="button"
                    >
                      2
                    </button>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      type="button"
                    >
                      Tiếp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annotation */}
      <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded">
        <h3 className="font-bold text-red-800 mb-4">
          📝 WF46 - GHI CHÚ GIAO DIỆN GIẢI QUYẾT TRANH CHẤP
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-red-600">
              ⚖️ Giải quyết Tranh chấp
            </div>
            <div className="text-gray-700">
              <strong>❶-❸ Thanh đầu trang:</strong> Cổng nhóm giải quyết tranh
              chấp với trọng tâm vụ việc
              <br />
              <strong>❹-⓭ Thanh bên:</strong> Điều hướng quản lý tranh chấp và
              công cụ vụ việc
              <br />
              <strong>⓮-⓰ Hành động trang:</strong> Nộp tranh chấp mới và tạo
              báo cáo
              <br />
              <strong>⓱-⓴ Thống kê vụ:</strong> Tranh chấp đang hoạt động, hòa
              giải, vụ đã giải quyết, và thời gian
              <br />
              <strong>㉑ Quy trình giải quyết:</strong> Hình dung toàn bộ quy
              trình giải quyết tranh chấp
            </div>
          </div>
          <div>
            <div className="font-bold text-red-600">🤝 Tính năng Quản lý</div>
            <div className="text-gray-700">
              <strong>㉒-㉔ Cảnh báo Khẩn cấp:</strong> Vụ khẩn cấp, lịch hòa
              giải, bảng phân tích
              <br />
              <strong>㉕-㉚ Bộ lọc nâng cao:</strong> Tìm kiếm và phân loại vụ
              toàn diện
              <br />
              <strong>㉛-㉝ Bảng vụ tranh chấp:</strong> Quản lý vụ đang hoạt
              động với theo dõi độ ưu tiên
              <br />
              <strong>Quản lý bằng chứng:</strong> Công cụ thu thập và phân tích
              bằng chứng số
              <br />
              <strong>Công cụ hòa giải:</strong> Lập lịch và quản lý hòa giải
              trực tuyến và trực tiếp
              <br />
              <strong>Theo dõi kết quả:</strong> Quy trình tự động và giám sát
              kết quả
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
