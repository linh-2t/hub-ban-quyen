import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/seller/contract-management")({
  component: SellerContractManagementWireframe,
});

export default function SellerContractManagementWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-green-600">
        WF42 - QUẢN LÝ HỢP ĐỒNG CỦA SELLER
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-green-900 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">📚 Copyright Hub</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>Bảng điều khiển</div>
                <div>Sách của tôi</div>
                <div>Ưu đãi</div>
                <div className="font-semibold text-red-300">Hợp đồng</div>
                <div>Phân tích</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (8)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">📖 Nhà xuất bản Kim Đồng ▼</div>
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
                  <div className="text-sm">📊 Bảng điều khiển</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                  <div className="text-sm">📚 Sách của tôi</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-sm">💰 Ưu đãi nhận được</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    7
                  </div>
                  <div className="text-sm font-semibold">
                    📝 Quản lý hợp đồng
                  </div>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      8
                    </div>
                    <div className="font-semibold text-red-600">
                      📊 Tổng quan
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      9
                    </div>
                    <div className="text-gray-600">💰 Theo dõi thanh toán</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      10
                    </div>
                    <div className="text-gray-600">⚖️ Tài liệu pháp lý</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
                  </div>
                  <div className="text-sm">📈 Phân tích</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    12
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
                    13
                  </div>
                  <h1 className="text-2xl font-bold">
                    Trung tâm Quản lý Hợp đồng
                  </h1>
                </div>
                <p className="text-gray-600">
                  Giám sát hợp đồng đang hoạt động, theo dõi thanh toán và quản
                  lý tài liệu pháp lý
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white text-sm rounded">
                    📊 Tạo báo cáo
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded">
                    📄 Xuất dữ liệu
                  </button>
                </div>
              </div>
            </div>

            {/* Contract Status Overview */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <div className="text-sm text-gray-600">
                    Hợp đồng hoạt động
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">24</div>
                <div className="text-xs text-green-600">
                  ✅ Đang tạo doanh thu
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Tổng giá trị: ₫4.8B
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">Chờ ký</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">7</div>
                <div className="text-xs text-blue-600">📝 Đang chờ chữ ký</div>
                <div className="text-xs text-gray-500 mt-1">
                  Giá trị ước tính: ₫1.2B
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm text-gray-600">Cần thanh toán</div>
                </div>
                <div className="text-2xl font-bold text-orange-600">5</div>
                <div className="text-xs text-orange-600">
                  💰 Thanh toán dự kiến
                </div>
                <div className="text-xs text-gray-500 mt-1">Số tiền: ₫850M</div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-purple-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm text-gray-600">Sắp hết hạn</div>
                </div>
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-xs text-purple-600">
                  ⏰ Xem xét để gia hạn
                </div>
                <div className="text-xs text-gray-500 mt-1">Trong 90 ngày</div>
              </div>
            </div>

            {/* Revenue Performance Chart */}
            <div className="bg-linear-to-r from-green-50 to-blue-50 border border-green-200 rounded p-4 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  20
                </div>
                <h3 className="font-semibold text-green-800">
                  💰 Hiệu suất doanh thu hợp đồng
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded border border-green-200">
                  <div className="text-sm text-gray-600 mb-2">
                    Doanh thu hàng tháng (Năm nay)
                  </div>
                  <div className="flex items-end gap-1 h-20">
                    <div
                      className="bg-green-500 w-4"
                      style={{ height: "60%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-4"
                      style={{ height: "75%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-4"
                      style={{ height: "85%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-4"
                      style={{ height: "70%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-4"
                      style={{ height: "90%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-4"
                      style={{ height: "95%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-4"
                      style={{ height: "100%" }}
                    ></div>
                    <div
                      className="bg-green-400 w-4"
                      style={{ height: "85%" }}
                    ></div>
                    <div
                      className="bg-green-400 w-4"
                      style={{ height: "80%" }}
                    ></div>
                    <div
                      className="bg-gray-300 w-4"
                      style={{ height: "40%" }}
                    ></div>
                    <div
                      className="bg-gray-300 w-4"
                      style={{ height: "30%" }}
                    ></div>
                    <div
                      className="bg-gray-300 w-4"
                      style={{ height: "25%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Đỉnh: Tháng 9 (₫420M)
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <div className="text-sm text-gray-600 mb-2">
                    Hiệu suất hợp đồng
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs">Người biểu diễn hàng đầu</span>
                      <span className="text-xs font-bold text-green-600">
                        Đắc Nhân Tâm
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">Doanh thu hàng tháng</span>
                      <span className="text-xs font-bold">₫180M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">Tỷ lệ tăng trưởng</span>
                      <span className="text-xs font-bold text-green-600">
                        +15%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">Giá trị hợp đồng</span>
                      <span className="text-xs font-bold">₫2.1B</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <div className="text-sm text-gray-600 mb-2">
                    Trạng thái thanh toán
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs">Đã nhận trong tháng</span>
                      <span className="text-xs font-bold text-green-600">
                        ₫1.8B
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">Thanh toán đang chờ</span>
                      <span className="text-xs font-bold text-orange-600">
                        ₫850M
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">
                        Thời gian thanh toán trung bình
                      </span>
                      <span className="text-xs font-bold">14 ngày</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">
                        Tỷ lệ thành công thanh toán
                      </span>
                      <span className="text-xs font-bold text-green-600">
                        98.5%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Alerts */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    21
                  </div>
                  <div className="text-sm font-semibold text-red-800">
                    🚨 Hành động khẩn cấp
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">CON-2024-VN-445</div>
                    <div className="text-xs text-gray-600">
                      Hướng dẫn Tâm lý Kinh doanh
                    </div>
                    <div className="text-xs text-red-600">
                      ⏰ Hết hạn trong 12 ngày - Xem xét gia hạn
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">CON-2024-VN-442</div>
                    <div className="text-xs text-gray-600">
                      Nguyên tắc Lãnh đạo Hiện đại
                    </div>
                    <div className="text-xs text-orange-600">
                      💰 Thanh toán quá hạn 3 ngày
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">CON-2024-VN-441</div>
                    <div className="text-xs text-gray-600">Quản lý Đổi mới</div>
                    <div className="text-xs text-blue-600">
                      📝 Chờ chữ ký từ người mua
                    </div>
                  </div>
                  <button className="w-full px-3 py-1 bg-red-600 text-white text-xs rounded">
                    🚨 Xử lý tất cả
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    22
                  </div>
                  <div className="text-sm font-semibold text-blue-800">
                    📊 Thông tin hiệu suất
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Dòng doanh thu hoạt động</span>
                    <span className="font-bold text-green-600">₫4.8B</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Thời lượng hợp đồng trung bình</span>
                    <span className="font-bold text-blue-600">3.2 năm</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Tỷ lệ gia hạn</span>
                    <span className="font-bold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Tính đúng hạn thanh toán</span>
                    <span className="font-bold text-green-600">98.5%</span>
                  </div>
                  <button className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded">
                    📈 Báo cáo đầy đủ
                  </button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    23
                  </div>
                  <div className="text-sm font-semibold text-green-800">
                    💡 Mẹo tối ưu hóa
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="font-medium">📈 Cơ hội doanh thu</div>
                    <div className="text-xs text-gray-600">
                      3 hợp đồng đủ điều kiện tăng giá
                    </div>
                    <div className="text-xs text-green-600">
                      Tiềm năng +₫120M/năm
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="font-medium">⏰ Chiến lược gia hạn</div>
                    <div className="text-xs text-gray-600">
                      Bắt đầu đàm phán gia hạn sớm 90 ngày
                    </div>
                    <div className="text-xs text-blue-600">
                      Cải thiện giữ chân 15%
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="font-medium">🎯 Mở rộng thị trường</div>
                    <div className="text-xs text-gray-600">
                      Lĩnh vực giáo dục tăng trưởng 40%
                    </div>
                    <div className="text-xs text-purple-600">
                      Xem xét cấp phép học thuật
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contract Management Table */}
            <div className="border border-gray-300 rounded">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      24
                    </div>
                    <h3 className="font-semibold">
                      Danh mục hợp đồng hoạt động (39 tổng)
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Tất cả hợp đồng</option>
                      <option>Chỉ hoạt động</option>
                      <option>Chờ ký</option>
                      <option>Vấn đề thanh toán</option>
                      <option>Sắp hết hạn</option>
                    </select>
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Sắp xếp theo: Doanh thu (Cao đến Thấp)</option>
                      <option>Sắp xếp theo: Ngày hợp đồng</option>
                      <option>Sắp xếp theo: Ngày hết hạn</option>
                      <option>Sắp xếp theo: Trạng thái thanh toán</option>
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
                            25
                          </div>
                          <div>Hợp đồng &amp; Sách</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Người mua</th>
                      <th className="text-left p-3">Giá trị hợp đồng</th>
                      <th className="text-left p-3">Trạng thái</th>
                      <th className="text-left p-3">Thông tin thanh toán</th>
                      <th className="text-left p-3">Thời hạn</th>
                      <th className="text-left p-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-green-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">CON-2024-VN-445</div>
                          <div className="text-sm text-gray-800">
                            📚 Đắc Nhân Tâm
                          </div>
                          <div className="text-xs text-gray-600">
                            Quyền dịch tiếng Việt
                          </div>
                          <div className="text-xs text-green-600">
                            ✅ Hoạt động • Người biểu diễn hàng đầu
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          NXB Tổng Hợp TP.HCM
                        </div>
                        <div className="text-xs text-gray-600">
                          🏢 Nhà xuất bản Việt Nam
                        </div>
                        <div className="text-xs text-green-600">
                          ⭐ 4.8/5 độ tin cậy
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-green-600">
                          ₫2,100,000,000
                        </div>
                        <div className="text-xs text-gray-600">
                          Độc quyền • 5 năm
                        </div>
                        <div className="text-xs text-green-600">
                          Hàng tháng: ₫180M
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Hoạt động
                        </span>
                        <div className="text-xs text-green-600 mt-1">
                          💰 Đang tạo doanh thu
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-green-600">
                          ₫540M đã nhận
                        </div>
                        <div className="text-xs text-gray-600">
                          Tiếp: ₫180M vào 15/11
                        </div>
                        <div className="w-full bg-gray-200 rounded h-1 mt-1">
                          <div className="bg-green-500 h-1 rounded w-1/4"></div>
                        </div>
                        <div className="text-xs text-gray-600">
                          25% tổng giá trị
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Bắt đầu: 15/01/2024</div>
                        <div className="text-xs text-gray-600">
                          Hết hạn: 15/01/2029
                        </div>
                        <div className="text-xs text-green-600">
                          Còn 4.2 năm
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            💰 Thanh toán
                          </button>
                          <button className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            📊 Phân tích
                          </button>
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">CON-2024-VN-442</div>
                          <div className="text-sm text-gray-800">
                            📖 Nguyên tắc Lãnh đạo Hiện đại
                          </div>
                          <div className="text-xs text-gray-600">
                            Dịch sách kinh doanh
                          </div>
                          <div className="text-xs text-red-600">
                            🚨 Thanh toán quá hạn
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">Fahasa Books</div>
                        <div className="text-xs text-gray-600">
                          📚 Chuỗi bán lẻ
                        </div>
                        <div className="text-xs text-orange-600">
                          ⚠️ Quá hạn 3 ngày
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold">₫850,000,000</div>
                        <div className="text-xs text-gray-600">
                          Không độc quyền • 3 năm
                        </div>
                        <div className="text-xs text-blue-600">
                          Hàng quý: ₫70M
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          ⚠️ Vấn đề thanh toán
                        </span>
                        <div className="text-xs text-red-600 mt-1">
                          💰 Thanh toán quá hạn
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-red-600">
                          ₫70M quá hạn
                        </div>
                        <div className="text-xs text-gray-600">
                          Hạn: 15/10/2024
                        </div>
                        <div className="w-full bg-gray-200 rounded h-1 mt-1">
                          <div className="bg-red-500 h-1 rounded w-2/3"></div>
                        </div>
                        <div className="text-xs text-red-600">
                          Quá hạn 3 ngày
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Bắt đầu: 01/04/2024</div>
                        <div className="text-xs text-gray-600">
                          Hết hạn: 01/04/2027
                        </div>
                        <div className="text-xs text-blue-600">Còn 2.4 năm</div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                            🚨 Theo dõi
                          </button>
                          <button className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                            📞 Liên hệ
                          </button>
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">CON-2024-VN-441</div>
                          <div className="text-sm text-gray-800">
                            📘 Quản lý Đổi mới
                          </div>
                          <div className="text-xs text-gray-600">
                            Quyền sách công nghệ
                          </div>
                          <div className="text-xs text-blue-600">📝 Chờ ký</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          Tech Books Vietnam
                        </div>
                        <div className="text-xs text-gray-600">
                          💻 Nhà xuất bản công nghệ
                        </div>
                        <div className="text-xs text-blue-600">
                          📝 Hoàn thiện hợp đồng
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-blue-600">
                          ₫1,200,000,000
                        </div>
                        <div className="text-xs text-gray-600">
                          Độc quyền • 4 năm
                        </div>
                        <div className="text-xs text-purple-600">
                          Hàng năm: ₫300M
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          📝 Chờ ký
                        </span>
                        <div className="text-xs text-blue-600 mt-1">
                          ⏳ Đang chờ người mua
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm text-blue-600">
                          Hợp đồng đang chờ
                        </div>
                        <div className="text-xs text-gray-600">
                          Thanh toán đầu tiên khi ký
                        </div>
                        <div className="text-xs text-blue-600">
                          Dự kiến: ₫300M trả trước
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Hợp đồng gửi: 10/10</div>
                        <div className="text-xs text-gray-600">
                          Kế hoạch thời hạn 4 năm
                        </div>
                        <div className="text-xs text-blue-600">
                          Chờ kích hoạt
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            📞 Theo dõi
                          </button>
                          <button className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                            📝 Sửa đổi
                          </button>
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-purple-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">CON-2024-VN-438</div>
                          <div className="text-sm text-gray-800">
                            📗 Psychology Today
                          </div>
                          <div className="text-xs text-gray-600">
                            Quyền xuất bản học thuật
                          </div>
                          <div className="text-xs text-purple-600">
                            ⏰ Hết hạn trong 45 ngày
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          NXB Đại học VN
                        </div>
                        <div className="text-xs text-gray-600">
                          🎓 Nhà xuất bản học thuật
                        </div>
                        <div className="text-xs text-green-600">
                          ⭐ Lịch sử thanh toán xuất sắc
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold">₫750,000,000</div>
                        <div className="text-xs text-gray-600">
                          Không độc quyền • 2 năm
                        </div>
                        <div className="text-xs text-green-600">
                          Hàng tháng: ₫31M
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                          ⏰ Sắp hết hạn
                        </span>
                        <div className="text-xs text-purple-600 mt-1">
                          📋 Xem xét để gia hạn
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-green-600">
                          ₫680M đã nhận
                        </div>
                        <div className="text-xs text-gray-600">
                          Tiếp: ₫31M vào 01/11
                        </div>
                        <div className="w-full bg-gray-200 rounded h-1 mt-1">
                          <div className="bg-purple-500 h-1 rounded w-5/6"></div>
                        </div>
                        <div className="text-xs text-green-600">
                          Đã nhận 91%
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Bắt đầu: 05/12/2022</div>
                        <div className="text-xs text-gray-600">
                          Hết hạn: 05/12/2024
                        </div>
                        <div className="text-xs text-purple-600">
                          Còn 45 ngày
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                            🔄 Gia hạn
                          </button>
                          <button className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            💰 Thanh toán
                          </button>
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
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
                    Hiển thị 1 đến 20 trong 39 hợp đồng
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      26
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
      <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded">
        <h3 className="font-bold text-green-800 mb-4">
          📝 WF42 - GHI CHÚ QUẢN LÝ HỢP ĐỒNG SELLER
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-green-600">💼 Giám sát Hợp đồng</div>
            <div className="text-gray-700">
              <strong>❶-❸ Header:</strong> Điều hướng portal của seller với
              trọng tâm hợp đồng
              <br />
              <strong>❹-⓬ Sidebar:</strong> Hệ thống menu phụ quản lý hợp đồng
              <br />
              <strong>⓭-⓯ Page Actions:</strong> Tạo báo cáo và xuất dữ liệu
              <br />
              <strong>⓰-⓳ Status Overview:</strong> Hợp đồng hoạt động, chờ ký,
              thanh toán và sắp hết hạn
              <br />
              <strong>⓴ Revenue Chart:</strong> Trực quan hóa hiệu suất với xu
              hướng hàng tháng
            </div>
          </div>
          <div>
            <div className="font-bold text-green-600">📊 Tính năng Quản lý</div>
            <div className="text-gray-700">
              <strong>㉑-㉓ Action Alerts:</strong> Hành động khẩn cấp, thông
              tin, mẹo tối ưu hóa
              <br />
              <strong>㉔-㉖ Contract Table:</strong> Quản lý danh mục hợp đồng
              toàn diện
              <br />
              <strong>Theo dõi doanh thu:</strong> Giám sát thanh toán theo thời
              gian thực và dự báo
              <br />
              <strong>Quản lý gia hạn:</strong> Chủ động gia hạn và tối ưu hóa
              hợp đồng
              <br />
              <strong>Phân tích hiệu suất:</strong> Chỉ số và thông tin thành
              công hợp đồng
              <br />
              <strong>Thông minh thanh toán:</strong> Tự động theo dõi và cảnh
              báo thanh toán
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
