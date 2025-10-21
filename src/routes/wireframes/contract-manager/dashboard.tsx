import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/contract-manager/dashboard")({
  component: ContractManagerDashboardWireframe,
});

export default function ContractManagerDashboardWireframe() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF17 - DASHBOARD CONTRACT MANAGER
      </h1>
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">
                  🏢 Copyright Hub - Contract Manager
                </div>
              </div>
              <div className="flex gap-4 text-sm text-gray-600">
                <div>Dashboard</div>
                <div>Contracts</div>
                <div>Templates</div>
                <div>Reports</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (8)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">Nguyễn Thị Hoa (CM) ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50 p-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-blue-100 p-2 rounded">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <div className="text-sm font-semibold">📊 Tổng Quan</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <div className="text-sm">⏰ Chờ Xử Lý (8)</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <div className="text-sm">📝 Tất Cả Hợp Đồng</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <div className="text-sm">📄 Templates</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <div className="text-sm">📈 Báo Cáo</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  9
                </div>
                <div className="text-sm">⚙️ Cài Đặt</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Welcome Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  10
                </div>
                <h1 className="text-2xl font-bold">
                  Chào mừng Nguyễn Thị Hoa!
                </h1>
              </div>
              <div className="text-sm text-gray-600">
                Quản lý hợp đồng và template • Ngày hôm nay: 15/01/2025
              </div>
            </div>

            {/* Priority Alerts */}
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  11
                </div>
                <h2 className="text-lg font-bold text-red-800">
                  🚨 Ưu Tiên Cao
                </h2>
              </div>
              <div className="space-y-2 ml-8">
                <div className="flex items-center justify-between p-2 bg-white rounded border-l-4 border-red-500">
                  <div>
                    <div className="font-semibold text-sm">
                      Contract #CT-2025-001230 - Quá hạn 2 ngày
                    </div>
                    <div className="text-xs text-gray-600">
                      Kinh Tế Học Vĩ Mô • NXB Trẻ → Kim Đồng
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      12
                    </div>
                    <button className="text-xs bg-red-600 text-white px-3 py-1 rounded">
                      Xử Lý Ngay
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border-l-4 border-yellow-500">
                  <div>
                    <div className="font-semibold text-sm">
                      Contract #CT-2025-001231 - Hết hạn hôm nay
                    </div>
                    <div className="text-xs text-gray-600">
                      Truyện Cổ Tích • Tác giả ABC → NXB Thế Giới
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      13
                    </div>
                    <button className="text-xs bg-yellow-600 text-white px-3 py-1 rounded">
                      Ưu Tiên
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-white border-2 border-gray-300 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="text-2xl font-bold text-blue-600">8</div>
                </div>
                <div className="text-sm text-gray-600">Chờ Xử Lý</div>
                <div className="text-xs text-red-600">+3 từ hôm qua</div>
              </div>
              <div className="p-4 bg-white border-2 border-gray-300 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <div className="text-2xl font-bold text-yellow-600">12</div>
                </div>
                <div className="text-sm text-gray-600">Chờ Review</div>
                <div className="text-xs text-yellow-600">~2 ngày TB</div>
              </div>
              <div className="p-4 bg-white border-2 border-gray-300 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <div className="text-2xl font-bold text-green-600">156</div>
                </div>
                <div className="text-sm text-gray-600">Hoàn Thành</div>
                <div className="text-xs text-green-600">Tháng này: 23</div>
              </div>
              <div className="p-4 bg-white border-2 border-gray-300 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    92.5%
                  </div>
                </div>
                <div className="text-sm text-gray-600">Tỷ Lệ Approval</div>
                <div className="text-xs text-purple-600">
                  +1.2% từ tháng trước
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mb-6 p-5 border-2 border-blue-300 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  18
                </div>
                <h2 className="text-lg font-bold">📊 Performance Metrics</h2>
              </div>
              <div className="grid grid-cols-3 gap-4 ml-8">
                <div className="p-3 bg-white rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      19
                    </div>
                    <div className="text-sm font-semibold">
                      Trung Bình Xử Lý/Ngày
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">3.2</div>
                  <div className="text-xs text-gray-600">hợp đồng/ngày</div>
                </div>
                <div className="p-3 bg-white rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      20
                    </div>
                    <div className="text-sm font-semibold">Thời Gian TB</div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">2.5</div>
                  <div className="text-xs text-gray-600">ngày/hợp đồng</div>
                </div>
                <div className="p-3 bg-white rounded border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      21
                    </div>
                    <div className="text-sm font-semibold">Revision Rate</div>
                  </div>
                  <div className="text-2xl font-bold text-yellow-600">15%</div>
                  <div className="text-xs text-gray-600">cần chỉnh sửa</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  22
                </div>
                <h2 className="text-lg font-bold">⚡ Quick Actions</h2>
              </div>
              <div className="grid grid-cols-4 gap-4 ml-8">
                <button className="flex items-center gap-2 p-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    23
                  </div>
                  <div className="text-sm">📝 Tạo HĐ Mới</div>
                </button>
                <button className="flex items-center gap-2 p-3 bg-green-600 text-white rounded hover:bg-green-700">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    24
                  </div>
                  <div className="text-sm">📄 Quản Lý Templates</div>
                </button>
                <button className="flex items-center gap-2 p-3 bg-purple-600 text-white rounded hover:bg-purple-700">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    25
                  </div>
                  <div className="text-sm">📈 Xem Báo Cáo</div>
                </button>
                <button className="flex items-center gap-2 p-3 bg-gray-600 text-white rounded hover:bg-gray-700">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    26
                  </div>
                  <div className="text-sm">📋 Export Excel</div>
                </button>
              </div>
            </div>

            {/* Pending Contracts Table */}
            <div className="p-5 border-2 border-gray-300 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    27
                  </div>
                  <h2 className="text-lg font-bold">📋 Hợp Đồng Cần Xử Lý</h2>
                </div>
                <div className="flex gap-2">
                  <select className="text-xs border border-gray-300 rounded px-2 py-1">
                    <option>Tất cả trạng thái</option>
                    <option>Chờ xử lý</option>
                    <option>Chờ review</option>
                    <option>Chờ ký</option>
                  </select>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      28
                    </div>
                    <input
                      className="text-xs border border-gray-300 rounded px-2 py-1"
                      placeholder="Tìm kiếm..."
                      type="search"
                    />
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="text-left p-2">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            29
                          </div>
                          <div>Contract ID</div>
                        </div>
                      </th>
                      <th className="text-left p-2">Sản Phẩm</th>
                      <th className="text-left p-2">Seller → Buyer</th>
                      <th className="text-left p-2">Giá Trị</th>
                      <th className="text-left p-2">Deadline</th>
                      <th className="text-left p-2">Trạng Thái</th>
                      <th className="text-left p-2">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            30
                          </div>
                          <div>Actions</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-2">
                        <div className="font-mono text-xs text-blue-600">
                          CT-2025-001234
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="font-semibold text-xs">
                          Kinh Tế Học Vĩ Mô
                        </div>
                        <div className="text-xs text-gray-600">
                          Gregory Mankiw
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-xs">
                          <div>NXB Trẻ</div>
                          <div className="text-gray-600">→ Kim Đồng</div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="font-bold text-xs text-green-600">
                          90M
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-xs text-red-600">
                          16/01 (1 ngày)
                        </div>
                      </td>
                      <td className="p-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                          Chờ xử lý
                        </span>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-1">
                          <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                            Xử lý
                          </button>
                          <button className="bg-gray-600 text-white px-2 py-1 rounded text-xs">
                            Chi tiết
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-2">
                        <div className="font-mono text-xs text-blue-600">
                          CT-2025-001235
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="font-semibold text-xs">
                          Truyện Cổ Tích Việt Nam
                        </div>
                        <div className="text-xs text-gray-600">Tác giả ABC</div>
                      </td>
                      <td className="p-2">
                        <div className="text-xs">
                          <div>Cá nhân</div>
                          <div className="text-gray-600">→ NXB Thế Giới</div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="font-bold text-xs text-green-600">
                          25M
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-xs">18/01 (3 ngày)</div>
                      </td>
                      <td className="p-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          Chờ review
                        </span>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-1">
                          <button className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                            Review
                          </button>
                          <button className="bg-gray-600 text-white px-2 py-1 rounded text-xs">
                            Chi tiết
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-2">
                        <div className="font-mono text-xs text-blue-600">
                          CT-2025-001236
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="font-semibold text-xs">
                          Marketing 4.0
                        </div>
                        <div className="text-xs text-gray-600">
                          Philip Kotler
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-xs">
                          <div>NXB Alpha</div>
                          <div className="text-gray-600">→ First News</div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="font-bold text-xs text-green-600">
                          120M
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-xs">20/01 (5 ngày)</div>
                      </td>
                      <td className="p-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                          Chờ xử lý
                        </span>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-1">
                          <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                            Xử lý
                          </button>
                          <button className="bg-gray-600 text-white px-2 py-1 rounded text-xs">
                            Chi tiết
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-2">
                        <div className="font-mono text-xs text-blue-600">
                          CT-2025-001237
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="font-semibold text-xs">
                          Lập Trình Python
                        </div>
                        <div className="text-xs text-gray-600">Tác giả XYZ</div>
                      </td>
                      <td className="p-2">
                        <div className="text-xs">
                          <div>NXB Tech</div>
                          <div className="text-gray-600">→ CodeGym</div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="font-bold text-xs text-green-600">
                          75M
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-xs text-green-600">
                          22/01 (7 ngày)
                        </div>
                      </td>
                      <td className="p-2">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                          Chờ ký
                        </span>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-1">
                          <button className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                            Monitor
                          </button>
                          <button className="bg-gray-600 text-white px-2 py-1 rounded text-xs">
                            Chi tiết
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-2">
                        <div className="font-mono text-xs text-blue-600">
                          CT-2025-001238
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="font-semibold text-xs">
                          Sách Nói: Tâm Lý Học
                        </div>
                        <div className="text-xs text-gray-600">Dr. Daniel</div>
                      </td>
                      <td className="p-2">
                        <div className="text-xs">
                          <div>AudioVN</div>
                          <div className="text-gray-600">→ Voiz FM</div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="font-bold text-xs text-green-600">
                          45M
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-xs">25/01 (10 ngày)</div>
                      </td>
                      <td className="p-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                          Chờ xử lý
                        </span>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-1">
                          <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                            Xử lý
                          </button>
                          <button className="bg-gray-600 text-white px-2 py-1 rounded text-xs">
                            Chi tiết
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="text-xs text-gray-600">
                  Hiển thị 5 trong tổng 23 hợp đồng
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      31
                    </div>
                    <button className="text-xs bg-gray-300 px-2 py-1 rounded">
                      ‹ Trước
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      32
                    </div>
                    <button className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      1
                    </button>
                  </div>
                  <button className="text-xs bg-gray-300 px-2 py-1 rounded">
                    2
                  </button>
                  <button className="text-xs bg-gray-300 px-2 py-1 rounded">
                    3
                  </button>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      33
                    </div>
                    <button className="text-xs bg-gray-300 px-2 py-1 rounded">
                      Sau ›
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Documentation */}
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">
          CHÚ THÍCH CHI TIẾT
        </h2>

        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❶❷❸ Đầu trang & Điều hướng
            </div>
            <div className="text-gray-700">
              <strong>❶ Logo & Navigation:</strong> Cổng Contract Manager với
              menu chính
              <br />
              <strong>❷ Notifications:</strong> 8 thông báo đang chờ (contracts
              cần chú ý)
              <br />
              <strong>❸ User Menu:</strong> Nguyễn Thị Hoa (Contract Manager)
              với dropdown profile
              <br />
              <strong>Breadcrumb:</strong> Dashboard {">"} Contract Manager
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❹❺❻❼❽❾ Thanh bên (Sidebar)
            </div>
            <div className="text-gray-700">
              <strong>❹ Tổng Quan:</strong> Tab đang hoạt động (overview
              dashboard)
              <br />
              <strong>❺ Chờ Xử Lý:</strong> → Lọc hợp đồng với trạng thái =
              "pending" (8 contracts)
              <br />
              <strong>❻ Tất Cả Hợp Đồng:</strong> → Danh sách hợp đồng đầy đủ
              với các bộ lọc
              <br />
              <strong>❼ Templates:</strong> → Quản lý contract templates
              <br />
              <strong>❽ Báo Cáo:</strong> → Reports và analytics
              <br />
              <strong>❾ Cài Đặt:</strong> → Thiết lập cho Contract Manager
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓫⓬⓭ Cảnh Báo Ưu Tiên
            </div>
            <div className="text-gray-700">
              <strong>⓬ Overdue Alert:</strong> Contract #CT-2025-001230 quá hạn
              2 ngày → Viền đỏ, cần xử lý khẩn cấp
              <br />
              <strong>⓭ Due Today:</strong> Contract #CT-2025-001231 hết hạn hôm
              nay → Viền vàng, ưu tiên
              <br />
              <strong>Auto-sorting:</strong> Hệ thống tự động sắp xếp theo mức
              độ khẩn cấp (overdue {">"} due today {">"} upcoming)
              <br />
              <strong>Action buttons:</strong> Truy cập nhanh để xử lý hợp đồng
              khẩn cấp
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓮⓯⓰⓱ Tổng Quan Thống Kê
            </div>
            <div className="text-gray-700">
              <strong>⓮ Chờ Xử Lý:</strong> 8 contracts cần CM tạo/review (+3 từ
              hôm qua)
              <br />
              <strong>⓯ Chờ Review:</strong> 12 contracts đã gửi cho các bên
              review (~2 ngày trung bình)
              <br />
              <strong>⓰ Hoàn Thành:</strong> 156 hợp đồng đã hoàn thành (23
              trong tháng này)
              <br />
              <strong>⓱ Tỷ Lệ Approval:</strong> 92.5% tỷ lệ thành công (+1.2%
              cải thiện)
              <br />
              <strong>Color coding:</strong> Blue/Yellow/Green/Purple cho các
              trạng thái khác nhau
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓲⓳⓴㉑ Các Chỉ Số Hiệu Suất
            </div>
            <div className="text-gray-700">
              <strong>⓳ Throughput:</strong> 3.2 contracts/ngày (hiệu suất cá
              nhân)
              <br />
              <strong>⓴ Processing Time:</strong> 2.5 ngày trung bình từ giao
              nhiệm → gửi review
              <br />
              <strong>㉑ Revision Rate:</strong> 15% contracts cần chỉnh sửa sau
              review
              <br />
              <strong>Benchmarking:</strong> So sánh với mục tiêu và trung bình
              nhóm
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ㉒㉓㉔㉕㉖ Hành Động Nhanh
            </div>
            <div className="text-gray-700">
              <strong>㉓ Tạo HĐ Mới:</strong> → WF14 (Create Contract) flow
              <br />
              <strong>㉔ Quản Lý Templates:</strong> → Template CRUD operations
              <br />
              <strong>㉕ Xem Báo Cáo:</strong> → Detailed analytics dashboard
              <br />
              <strong>㉖ Export Excel:</strong> → Tải về dữ liệu hợp đồng để
              phân tích bên ngoài
              <br />
              <strong>Button design:</strong> Mã màu theo chức năng
              (blue=create, green=manage, v.v.)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ㉗㉘㉙㉚㉛㉜㉝ Bảng Hợp Đồng
            </div>
            <div className="text-gray-700">
              <strong>㉘ Search & Filter:</strong> Tìm kiếm realtime + dropdown
              lọc trạng thái
              <br />
              <strong>㉙ Contract ID:</strong> Click để mở chi tiết hợp đồng
              <br />
              <strong>㉚ Actions Column:</strong> Nút theo ngữ cảnh (Xử
              lý/Review/Monitor)
              <br />
              <strong>Status indicators:</strong> Badges mã màu (yellow=pending,
              blue=review, purple=signing)
              <br />
              <strong>Deadline coloring:</strong> Đỏ=quá hạn, đen=bình thường,
              xanh=thời gian đủ
              <br />
              <strong>㉛㉜㉝ Pagination:</strong> Điều hướng với số trang và
              prev/next
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📌 WORKFLOW INTEGRATION
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Offer Accepted:</strong> Tự động tạo bản ghi hợp đồng → Tự
              động phân công cho CM → Xuất hiện trong "Chờ Xử Lý"
            </li>
            <li>
              <strong>Click "Xử lý":</strong> → Điều hướng tới WF14 (Create
              Contract) với dữ liệu offer được điền sẵn
            </li>
            <li>
              <strong>CM gửi review:</strong> Trạng thái chuyển thành "Chờ
              Review" → Các bên nhận thông báo
            </li>
            <li>
              <strong>Review process:</strong> → WF15 (Review & Sign) → Theo dõi
              tiến trình ký
            </li>
            <li>
              <strong>Fully executed:</strong> → Chuyển sang "Hoàn Thành" → Các
              chỉ số hiệu suất được cập nhật
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            ⚡ TECHNICAL FEATURES
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Real-time updates:</strong> WebSocket cho cập nhật trạng
              thái trực tiếp
            </li>
            <li>
              <strong>Auto-refresh:</strong> Alerts section tự làm mới mỗi 5
              phút
            </li>
            <li>
              <strong>Smart notifications:</strong> Email/SMS cho hợp đồng ưu
              tiên
            </li>
            <li>
              <strong>Assignment logic:</strong> Round-robin hoặc dựa trên tải
              công việc
            </li>
            <li>
              <strong>SLA tracking:</strong> Theo dõi tuân thủ deadline
            </li>
            <li>
              <strong>Dashboard analytics:</strong> Theo dõi hiệu suất cá nhân
              và nhóm
            </li>
            <li>
              <strong>Role permissions:</strong> CM chỉ thấy các hợp đồng được
              phân công (trừ admin)
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500">
          <div className="font-bold text-purple-800 mb-2">
            🎯 TRẢI NGHIỆM NGƯỜI DÙNG
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Priority-first design:</strong> Luôn hiển thị hợp đồng ưu
              tiên ở đầu
            </li>
            <li>
              <strong>One-click actions:</strong> Giảm thiểu thao tác để truy
              cập các chức năng quan trọng
            </li>
            <li>
              <strong>Visual hierarchy:</strong> Mã màu giúp user nhanh chóng
              xác định mức độ ưu tiên
            </li>
            <li>
              <strong>Contextual information:</strong> Hiển thị thông tin liên
              quan mà không gây quá tải
            </li>
            <li>
              <strong>Performance feedback:</strong> Các chỉ số giúp CM theo dõi
              cải thiện cá nhân
            </li>
            <li>
              <strong>Responsive design:</strong> Hoạt động tốt trên desktop và
              tablet (hỗ trợ CM sử dụng trên mobile)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
