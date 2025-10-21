import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/moderator/dashboard")({
  component: ModeratorDashboardWireframe,
});

export default function ModeratorDashboardWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF39 - BẢNG ĐIỀU KHIỂN KIỂM DUYỆT
      </h1>

      {/* Khung giao diện */}
      <div className="border-4 border-gray-800">
        {/* Đầu trang */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-800 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">Cổng kiểm duyệt</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div className="font-semibold text-red-300">
                  Bảng điều khiển
                </div>
                <div>Kiểm duyệt nội dung</div>
                <div>Xác minh người dùng</div>
                <div>Báo cáo</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (18)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">Người kiểm duyệt Linh ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Thanh bên */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50">
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <div className="text-sm font-semibold">
                    📊 Bảng điều khiển
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                  <div className="text-sm">📚 Kiểm duyệt nội dung</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-sm">👤 Xác minh người dùng</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    7
                  </div>
                  <div className="text-sm">🚨 Nội dung bị báo cáo</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <div className="text-sm">💬 Vé hỗ trợ</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    9
                  </div>
                  <div className="text-sm">📈 Báo cáo kiểm duyệt</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    10
                  </div>
                  <div className="text-sm">⚙️ Cài đặt</div>
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
                    11
                  </div>
                  <h1 className="text-2xl font-bold">
                    Bảng điều khiển kiểm duyệt
                  </h1>
                </div>
                <p className="text-gray-600">
                  Kiểm duyệt nội dung, xác minh người dùng và giám sát chất
                  lượng nền tảng
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    12
                  </div>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded"
                    type="button"
                  >
                    🚨 Hàng đợi ưu tiên
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <button
                    className="px-4 py-2 bg-green-600 text-white text-sm rounded"
                    type="button"
                  >
                    📊 Tạo báo cáo
                  </button>
                </div>
              </div>
            </div>

            {/* Chỉ số kiểm duyệt */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4 bg-red-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="text-sm text-gray-600">Đang chờ duyệt</div>
                </div>
                <div className="text-2xl font-bold text-red-600">127</div>
                <div className="text-xs text-red-600">
                  🚨 Cần xử lý ngay lập tức
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  23 mục ưu tiên cao
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <div className="text-sm text-gray-600">
                    Báo cáo người dùng
                  </div>
                </div>
                <div className="text-2xl font-bold text-orange-600">89</div>
                <div className="text-xs text-orange-600">
                  ⚠️ Báo cáo cộng đồng
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  15 trường hợp được leo thang
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <div className="text-sm text-gray-600">Đã duyệt hôm nay</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">245</div>
                <div className="text-xs text-blue-600">
                  ✅ Nội dung được duyệt/từ chối
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Tỷ lệ duyệt 85%
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">
                    Thời gian phản hồi
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">2.4h</div>
                <div className="text-xs text-green-600">
                  📈 Thời gian duyệt trung bình
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Mục tiêu: {"<"} 4h
                </div>
              </div>
            </div>

            {/* Hành động ưu tiên */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm font-semibold text-red-800">
                    🚨 Duyệt ưu tiên cao
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">
                      📚 "Controversial Biography" - Nội dung chính trị
                    </div>
                    <div className="text-xs text-gray-600">
                      Báo cáo bởi 15 người dùng • Cáo buộc kích động thù hận
                    </div>
                    <div className="text-xs text-red-600">
                      ⏰ Gửi 6 giờ trước
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">
                      📖 "Economic Theory" - Tranh chấp bản quyền
                    </div>
                    <div className="text-xs text-gray-600">
                      Nhà xuất bản cáo buộc dịch không phép
                    </div>
                    <div className="text-xs text-orange-600">
                      ⏳ Được bộ phận pháp lý leo thang
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">
                      👤 Người dùng: "SuperSeller2024" - Đánh giá giả
                    </div>
                    <div className="text-xs text-gray-600">
                      Nghi ngờ bot hoạt động • 47 đánh giá giả
                    </div>
                    <div className="text-xs text-red-600">
                      🚨 Tài khoản đang chờ tạm khóa
                    </div>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-red-600 text-white text-xs rounded"
                    type="button"
                  >
                    🚨 Xem các mục ưu tiên
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm font-semibold text-blue-800">
                    📊 Tóm tắt hoạt động hôm nay
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Nội dung đã kiểm duyệt</span>
                    <span className="font-bold text-blue-600">245 mục</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Người dùng đã xác minh</span>
                    <span className="font-bold text-green-600">
                      89 tài khoản
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Báo cáo đã giải quyết</span>
                    <span className="font-bold text-purple-600">
                      67 trường hợp
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Cảnh báo đã phát hành</span>
                    <span className="font-bold text-orange-600">
                      12 cảnh báo
                    </span>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded"
                    type="button"
                  >
                    📈 Xem chi tiết
                  </button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    20
                  </div>
                  <div className="text-sm font-semibold text-green-800">
                    ✅ Phê duyệt gần đây
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">
                        📚 "Vietnamese Literature Anthology"
                      </span>
                      <span className="text-xs text-green-600">
                        ✅ Đã duyệt
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      NXB Văn Học • Nội dung giáo dục
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">
                        👤 "EducationPublisher"
                      </span>
                      <span className="text-xs text-green-600">
                        ✅ Đã xác minh
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Tài khoản nhà xuất bản • KYC hoàn tất
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">
                        📖 "Business Strategy Guide"
                      </span>
                      <span className="text-xs text-green-600">
                        ✅ Đã xuất bản
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Fahasa • Danh mục kinh doanh
                    </div>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-green-600 text-white text-xs rounded"
                    type="button"
                  >
                    📋 Xem tất cả mục đã duyệt
                  </button>
                </div>
              </div>
            </div>

            {/* Phân tích kiểm duyệt */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      21
                    </div>
                    <h3 className="font-semibold">
                      📈 Xu hướng khối lượng duyệt (7 ngày)
                    </h3>
                  </div>
                  <select className="text-sm border border-gray-300 rounded px-2 py-1">
                    <option>7 ngày qua</option>
                    <option>30 ngày qua</option>
                    <option>Tháng này</option>
                  </select>
                </div>
                <div className="h-48 bg-gray-50 rounded flex items-end justify-center p-4">
                  <div className="flex items-end gap-2 w-full">
                    <div className="bg-blue-400 w-12 h-32 flex items-end justify-center text-xs text-white pb-1">
                      T2
                    </div>
                    <div className="bg-blue-400 w-12 h-40 flex items-end justify-center text-xs text-white pb-1">
                      T3
                    </div>
                    <div className="bg-blue-400 w-12 h-36 flex items-end justify-center text-xs text-white pb-1">
                      T4
                    </div>
                    <div className="bg-blue-400 w-12 h-44 flex items-end justify-center text-xs text-white pb-1">
                      T5
                    </div>
                    <div className="bg-blue-400 w-12 h-38 flex items-end justify-center text-xs text-white pb-1">
                      T6
                    </div>
                    <div className="bg-gray-300 w-12 h-20 flex items-end justify-center text-xs text-white pb-1">
                      T7
                    </div>
                    <div className="bg-gray-300 w-12 h-16 flex items-end justify-center text-xs text-white pb-1">
                      CN
                    </div>
                  </div>
                </div>
                <div className="text-center text-xs text-gray-600 mt-2">
                  Ngày cao điểm: Thứ 5 (312 mục) • Hoạt động cuối tuần: -65%
                </div>
              </div>

              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    22
                  </div>
                  <h3 className="font-semibold">
                    🎯 Phân phối theo loại nội dung
                  </h3>
                </div>
                <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-blue-500"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-green-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-orange-500"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-purple-500"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold">
                        245
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Sách (45%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Người dùng (30%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span>Đánh giá (20%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span>Khác (5%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hàng đợi duyệt đang hoạt động */}
            <div className="border border-gray-300 rounded mb-6">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      23
                    </div>
                    <h3 className="font-semibold">
                      📋 Hàng đợi duyệt đang hoạt động (127 mục)
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Tất cả loại</option>
                      <option>Kiểm duyệt nội dung</option>
                      <option>Xác minh người dùng</option>
                      <option>Báo cáo cộng đồng</option>
                      <option>Khiếu nại bản quyền</option>
                    </select>
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Ưu tiên cao trước</option>
                      <option>Cũ nhất trước</option>
                      <option>Mới nhất trước</option>
                      <option>Nhóm theo loại</option>
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
                            24
                          </div>
                          <div>Mục</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Loại</th>
                      <th className="text-left p-3">Người báo/ Nguồn</th>
                      <th className="text-left p-3">Ưu tiên</th>
                      <th className="text-left p-3">Gửi</th>
                      <th className="text-left p-3">Trạng thái</th>
                      <th className="text-left p-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="font-medium">
                          📚 "Controversial Biography"
                        </div>
                        <div className="text-xs text-gray-600">
                          Cáo buộc nội dung chính trị
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          📚 Nội dung
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Báo cáo cộng đồng</div>
                        <div className="text-xs text-gray-600">
                          15 người dùng báo cáo
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded font-bold">
                          🚨 KHẨN CẤP
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">21/10/2024</div>
                        <div className="text-xs text-red-600">6 giờ trước</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                          ⏳ Đang xem xét
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem xét
                          </button>
                          <button
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                            type="button"
                          >
                            ✅ Phê duyệt
                          </button>
                          <button
                            className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded"
                            type="button"
                          >
                            ❌ Từ chối
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-orange-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="font-medium">
                          👤 Người dùng: "NewPublisher2024"
                        </div>
                        <div className="text-xs text-gray-600">
                          Chờ xác minh KYC
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          👤 Xác minh người dùng
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Hệ thống tự động</div>
                        <div className="text-xs text-gray-600">
                          Đã gửi giấy tờ tùy thân
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          🔶 CAO
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">21/10/2024</div>
                        <div className="text-xs text-blue-600">2 giờ trước</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          📋 Chờ duyệt
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem
                          </button>
                          <button
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                            type="button"
                          >
                            ✅ Xác minh
                          </button>
                          <button
                            className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded"
                            type="button"
                          >
                            📝 Yêu cầu bổ sung
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-green-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="font-medium">
                          📖 "Tech Innovation Guide"
                        </div>
                        <div className="text-xs text-gray-600">
                          Kiểm duyệt nội dung thường lệ
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                          📖 Nội dung mới
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">TechBooks Publisher</div>
                        <div className="text-xs text-gray-600">
                          Nhà xuất bản đã xác minh
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          🔷 BÌNH THƯỜNG
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">20/10/2024</div>
                        <div className="text-xs text-green-600">
                          1 ngày trước
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Được duyệt trước
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem
                          </button>
                          <button
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                            type="button"
                          >
                            ✅ Xuất bản
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
                    Hiển thị 1 đến 20 trên 127 mục
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
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
                      3
                    </button>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      type="button"
                    >
                      ...
                    </button>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      type="button"
                    >
                      7
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

            {/* Công cụ nhanh kiểm duyệt */}
            <div className="grid grid-cols-4 gap-4">
              <div className="border border-gray-300 rounded p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    26
                  </div>
                  <div className="text-2xl">⚡</div>
                </div>
                <div className="font-medium text-sm">Hành động hàng loạt</div>
                <div className="text-xs text-gray-600 mb-3">
                  Xử lý nhiều mục cùng lúc
                </div>
                <button
                  className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded"
                  type="button"
                >
                  ⚡ Xử lý hàng loạt
                </button>
              </div>
              <div className="border border-gray-300 rounded p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    27
                  </div>
                  <div className="text-2xl">🤖</div>
                </div>
                <div className="font-medium text-sm">Hỗ trợ AI</div>
                <div className="text-xs text-gray-600 mb-3">
                  Nhận phân tích nội dung bằng AI
                </div>
                <button
                  className="w-full px-3 py-1 bg-purple-600 text-white text-xs rounded"
                  type="button"
                >
                  🤖 Kiểm duyệt AI
                </button>
              </div>
              <div className="border border-gray-300 rounded p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    28
                  </div>
                  <div className="text-2xl">📊</div>
                </div>
                <div className="font-medium text-sm">Phân tích</div>
                <div className="text-xs text-gray-600 mb-3">
                  Chỉ số hiệu suất kiểm duyệt
                </div>
                <button
                  className="w-full px-3 py-1 bg-green-600 text-white text-xs rounded"
                  type="button"
                >
                  📊 Xem phân tích
                </button>
              </div>
              <div className="border border-gray-300 rounded p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    29
                  </div>
                  <div className="text-2xl">⚙️</div>
                </div>
                <div className="font-medium text-sm">Cài đặt</div>
                <div className="text-xs text-gray-600 mb-3">
                  Cấu hình quy tắc kiểm duyệt
                </div>
                <button
                  className="w-full px-3 py-1 bg-gray-600 text-white text-xs rounded"
                  type="button"
                >
                  ⚙️ Cấu hình
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ghi chú */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-bold text-blue-800 mb-4">
          📝 WF39 - GHI CHÚ BẢNG ĐIỀU KHIỂN KIỂM DUYỆT
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-blue-600">🛡️ Kiểm duyệt nội dung</div>
            <div className="text-gray-700">
              <strong>❶-❸ Đầu trang:</strong> Điều hướng cổng kiểm duyệt
              <br />
              <strong>❹-❿ Thanh bên:</strong> Các mục quản lý kiểm duyệt
              <br />
              <strong>⓫-⓭ Hành động trang:</strong> Hàng đợi ưu tiên và tạo báo
              cáo
              <br />
              <strong>⓮-⓱ Chỉ số:</strong> Hàng đợi duyệt, báo cáo, hoạt động,
              thời gian phản hồi
              <br />
              <strong>⓲-⓴ Hành động ưu tiên:</strong> Duyệt ưu tiên và tóm tắt
              hàng ngày
            </div>
          </div>
          <div>
            <div className="font-bold text-blue-600">📊 Tính năng nâng cao</div>
            <div className="text-gray-700">
              <strong>㉑-㉒ Phân tích:</strong> Xu hướng duyệt và phân phối nội
              dung
              <br />
              <strong>㉓-㉕ Hàng đợi duyệt:</strong> Quy trình làm việc kiểm
              duyệt đang hoạt động
              <br />
              <strong>㉖-㉙ Công cụ nhanh:</strong> Hành động hàng loạt, hỗ trợ
              AI, phân tích
              <br />
              <strong>Kiểm soát chất lượng:</strong> Quy trình phê duyệt và từ
              chối nội dung
              <br />
              <strong>Xác minh người dùng:</strong> Quy trình KYC và xác minh
              tài khoản
              <br />
              <strong>An toàn cộng đồng:</strong> Xử lý báo cáo và quy trình leo
              thang
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
