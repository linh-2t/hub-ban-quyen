import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/admin/contract-management")({
  component: AdminContractManagementWireframe,
});

export default function AdminContractManagementWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF35 - QUẢN LÝ HỢP ĐỒNG (ADMIN)
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-800 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">Cổng quản trị</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>Bảng điều khiển</div>
                <div>Người dùng</div>
                <div>Sản phẩm</div>
                <div>Ưu đãi</div>
                <div className="font-semibold text-red-300">Hợp đồng</div>
                <div>Báo cáo</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (25)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">Tài khoản Admin ▼</div>
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
                  <div className="text-sm">👥 Quản lý người dùng</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-sm">📚 Quản lý sản phẩm</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    7
                  </div>
                  <div className="text-sm">💼 Quản lý ưu đãi</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <div className="text-sm font-semibold">
                    📝 Quản lý hợp đồng
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    9
                  </div>
                  <div className="text-sm">💰 Báo cáo tài chính</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    10
                  </div>
                  <div className="text-sm">⚙️ Cài đặt hệ thống</div>
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
                    11
                  </div>
                  <h1 className="text-2xl font-bold">Quản lý hợp đồng</h1>
                </div>
                <p className="text-gray-600">
                  Giám sát tất cả hợp đồng, phân công và quy trình pháp lý
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
                    📊 Báo cáo
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
                    📤 Xuất
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="text-sm text-gray-600">Tổng hợp đồng</div>
                </div>
                <div className="text-2xl font-bold">1,847</div>
                <div className="text-xs text-green-600">↗ +12.7% tháng này</div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <div className="text-sm text-gray-600">Chờ duyệt</div>
                </div>
                <div className="text-2xl font-bold text-orange-600">67</div>
                <div className="text-xs text-gray-600">
                  Đang chờ phê duyệt quản lý
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <div className="text-sm text-gray-600">Chờ ký</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">134</div>
                <div className="text-xs text-gray-600">Sẵn sàng ký</div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">Đã ký</div>
                </div>
                <div className="text-2xl font-bold text-green-600">1,523</div>
                <div className="text-xs text-green-600">
                  Tỷ lệ hoàn tất 82.5%
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm text-gray-600">Giá trị hợp đồng</div>
                </div>
                <div className="text-2xl font-bold text-purple-600">₫12.8B</div>
                <div className="text-xs text-gray-600">Tổng giá trị đã ký</div>
              </div>
            </div>

            {/* Manager Assignment & Workload */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm font-semibold text-blue-800">
                    👥 Khối lượng công việc quản lý hợp đồng
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Nguyễn Thị Hoa (Trưởng CM)</span>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-600 font-bold">
                        23 đang chờ
                      </span>
                      <div className="w-16 h-2 bg-gray-200 rounded">
                        <div className="w-3/4 h-2 bg-orange-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Trần Minh Tuấn (CM)</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">
                        18 đang chờ
                      </span>
                      <div className="w-16 h-2 bg-gray-200 rounded">
                        <div className="w-2/3 h-2 bg-green-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Lê Văn Nam (CM)</span>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 font-bold">
                        15 đang chờ
                      </span>
                      <div className="w-16 h-2 bg-gray-200 rounded">
                        <div className="w-1/2 h-2 bg-blue-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Phạm Thu Trang (CM)</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">
                        11 đang chờ
                      </span>
                      <div className="w-16 h-2 bg-gray-200 rounded">
                        <div className="w-1/3 h-2 bg-green-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    20
                  </div>
                  <div className="text-sm font-semibold text-yellow-800">
                    ⚠️ Hành động ưu tiên cần xử lý
                  </div>
                </div>
                <div className="space-y-2 text-sm text-yellow-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>8 hợp đồng quá hạn duyệt (&gt; 5 ngày)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>15 hợp đồng hết hạn hôm nay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>23 đang chờ chữ ký bên mua (&gt; 3 ngày)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>12 hợp đồng giá trị cao (&gt; ₫100M)</span>
                  </div>
                  <div className="mt-3">
                    <button
                      className="px-3 py-1 bg-yellow-600 text-white text-xs rounded"
                      type="button"
                    >
                      🔄 Tự động tái phân công quá hạn
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-6">
              <div className="grid grid-cols-6 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      21
                    </div>
                    <label className="text-sm font-medium">Tìm hợp đồng</label>
                  </div>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="Mã hợp đồng, sản phẩm..."
                    type="text"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      22
                    </div>
                    <label className="text-sm font-medium">Trạng thái</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả trạng thái</option>
                    <option>Bản nháp</option>
                    <option>Chờ duyệt</option>
                    <option>Chờ ký</option>
                    <option>Đã hoàn tất ký kết</option>
                    <option>Đã hủy</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      23
                    </div>
                    <label className="text-sm font-medium">
                      Đã phân công cho
                    </label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả quản lý</option>
                    <option>Nguyễn Thị Hoa</option>
                    <option>Trần Minh Tuấn</option>
                    <option>Lê Văn Nam</option>
                    <option>Phạm Thu Trang</option>
                    <option>Chưa phân công</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      24
                    </div>
                    <label className="text-sm font-medium">
                      Khoảng giá trị
                    </label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả giá trị</option>
                    <option>{"< ₫10M"}</option>
                    <option>₫10M - ₫50M</option>
                    <option>₫50M - ₫100M</option>
                    <option>{"> ₫100M"}</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <label className="text-sm font-medium">
                      Khoảng thời gian
                    </label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>30 ngày gần nhất</option>
                    <option>7 ngày gần nhất</option>
                    <option>90 ngày gần nhất</option>
                    <option>Năm nay</option>
                    <option>Khoảng tùy chỉnh</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      26
                    </div>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded w-full"
                      type="button"
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  27
                </div>
                <button
                  className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded"
                  type="button"
                >
                  ⏰ Quá hạn duyệt (8)
                </button>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  28
                </div>
                <button
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                  type="button"
                >
                  ✍️ Chờ ký (134)
                </button>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  29
                </div>
                <button
                  className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded"
                  type="button"
                >
                  💰 Giá trị cao ({"> ₫100M"})
                </button>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  30
                </div>
                <button
                  className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded"
                  type="button"
                >
                  🔄 Tái phân công hàng loạt
                </button>
              </div>
            </div>

            {/* Contracts Table */}
            <div className="border border-gray-300 rounded">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    31
                  </div>
                  <h3 className="font-semibold">
                    Danh sách hợp đồng (tổng 1,847)
                  </h3>
                  <div className="ml-auto text-sm text-gray-600">
                    Trang 1 trên 93 | Hiển thị:
                    <select className="mx-1 text-sm">
                      <option>20</option>
                      <option>50</option>
                      <option>100</option>
                    </select>
                    mỗi trang
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
                          <div>Mã hợp đồng</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Sản phẩm</th>
                      <th className="text-left p-3">Các bên</th>
                      <th className="text-left p-3">Giá trị</th>
                      <th className="text-left p-3">Đã phân công</th>
                      <th className="text-left p-3">Trạng thái</th>
                      <th className="text-left p-3">Hạn chót</th>
                      <th className="text-left p-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="font-mono text-sm">CTR-2024-1847</div>
                        <div className="text-xs text-red-600">QUÁ HẠN</div>
                      </td>
                      <td className="p-3">
                        <div className="font-medium">Đắc Nhân Tâm</div>
                        <div className="text-sm text-gray-600">
                          Dale Carnegie
                        </div>
                        <div className="text-xs text-purple-600">
                          Tự lực • Tiếng Việt
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          <div className="text-blue-600">Thái Hà Books</div>
                          <div className="text-gray-400">↓</div>
                          <div className="text-green-600">NXB Tổng Hợp</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold">₫125M</div>
                        <div className="text-xs text-gray-600">
                          Độc quyền • 7 năm
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">N.T. Hoa</div>
                        <div className="text-xs text-red-600">
                          ⏰ quá hạn 3 ngày
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                          ⏰ Quá hạn duyệt
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-red-600">18/10/2024</div>
                        <div className="text-xs text-red-600">3 ngày trước</div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded"
                            type="button"
                          >
                            🚨 Khẩn cấp
                          </button>
                          <button
                            className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded"
                            type="button"
                          >
                            🔄 Tái phân công
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-orange-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="font-mono text-sm">CTR-2024-1846</div>
                        <div className="text-xs text-orange-600">
                          GIÁ TRỊ CAO
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-medium">The Art of War</div>
                        <div className="text-sm text-gray-600">Sun Tzu</div>
                        <div className="text-xs text-purple-600">
                          Chiến lược • Tiếng Anh
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          <div className="text-blue-600">First News</div>
                          <div className="text-gray-400">↓</div>
                          <div className="text-green-600">
                            Dover Publications
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-orange-600">₫350M</div>
                        <div className="text-xs text-gray-600">
                          Dịch thuật • 5 năm
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">T.M. Tuấn</div>
                        <div className="text-xs text-blue-600">
                          📝 Đang xem xét
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          📋 Chờ duyệt
                        </span>
                      </td>
                      <td className="p-3">
                        <div>25/10/2024</div>
                        <div className="text-xs text-orange-600">
                          Còn 4 ngày
                        </div>
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
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            💬 Ghi chú
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="font-mono text-sm">CTR-2024-1845</div>
                        <div className="text-xs text-blue-600">SẴN SÀNG</div>
                      </td>
                      <td className="p-3">
                        <div className="font-medium">Rich Dad Poor Dad</div>
                        <div className="text-sm text-gray-600">
                          Robert Kiyosaki
                        </div>
                        <div className="text-xs text-purple-600">
                          Tài chính • Tiếng Anh
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          <div className="text-blue-600">Fahasa</div>
                          <div className="text-gray-400">↓</div>
                          <div className="text-green-600">Rich Dad Company</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold">₫280M</div>
                        <div className="text-xs text-gray-600">
                          Dịch thuật • 3 năm
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">L.V. Nam</div>
                        <div className="text-xs text-green-600">
                          ✅ Đã phê duyệt
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          ✍️ Chờ ký
                        </span>
                      </td>
                      <td className="p-3">
                        <div>30/10/2024</div>
                        <div className="text-xs text-green-600">Còn 9 ngày</div>
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
                            📤 Gửi
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
                    Hiển thị 1 đến 20 trong 1,847 hợp đồng
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
                      3
                    </button>
                    <span className="text-sm">...</span>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      type="button"
                    >
                      93
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
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-bold text-blue-800 mb-4">
          📝 WF35 - GHI CHÚ QUẢN LÝ HỢP ĐỒNG (ADMIN)
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-blue-600">🎯 Quản lý cốt lõi</div>
            <div className="text-gray-700">
              <strong>❶-❸ Đầu trang Admin:</strong> Điều hướng quản lý hợp đồng
              <br />
              <strong>❹-❿ Thanh bên:</strong> Các mục quản trị
              <br />
              <strong>⓫-⓭ Hành động trang:</strong> Chức năng báo cáo và xuất dữ
              liệu
              <br />
              <strong>⓮-⓲ Thống kê:</strong> Các chỉ số quy trình hợp đồng
              <br />
              <strong>⓳-⓴ Khối lượng công việc quản lý:</strong> Phân bổ nhiệm
              vụ và cảnh báo ưu tiên
            </div>
          </div>
          <div>
            <div className="font-bold text-blue-600">🔧 Tính năng nâng cao</div>
            <div className="text-gray-700">
              <strong>㉑-㉖ Tìm kiếm & Lọc:</strong> Lọc hợp đồng nâng cao
              <br />
              <strong>㉗-㉚ Hành động nhanh:</strong> Phím tắt quản lý ưu tiên
              <br />
              <strong>㉛-㉝ Bảng hợp đồng:</strong> Giám sát hợp đồng toàn diện
              <br />
              <strong>Quản lý phân công:</strong> Cân bằng khối lượng và tái
              phân công
              <br />
              <strong>Theo dõi ưu tiên:</strong> Cảnh báo quá hạn và giám sát
              hạn chót
              <br />
              <strong>Thao tác hàng loạt:</strong> Tái phân công và cập nhật
              trạng thái hàng loạt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
