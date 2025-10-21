import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/admin/financial-reports")({
  component: AdminFinancialReportsWireframe,
});

export default function AdminFinancialReportsWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF36 - BÁO CÁO TÀI CHÍNH QUẢN TRỊ
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
                <div className="text-sm font-semibold">Cổng Quản Trị</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>Bảng điều khiển</div>
                <div>Người dùng</div>
                <div>Sản phẩm</div>
                <div>Ưu đãi</div>
                <div>Hợp đồng</div>
                <div className="font-semibold text-red-300">Báo cáo</div>
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
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <div className="text-sm">📝 Quản lý hợp đồng</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    9
                  </div>
                  <div className="text-sm font-semibold">
                    💰 Báo cáo tài chính
                  </div>
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
                  <h1 className="text-2xl font-bold">
                    Báo cáo & Phân tích Tài chính
                  </h1>
                </div>
                <p className="text-gray-600">
                  Doanh thu nền tảng, theo dõi hoa hồng và phân tích tài chính
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    12
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded">
                    📅 Lên lịch báo cáo
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white text-sm rounded">
                    📤 Xuất tất cả
                  </button>
                </div>
              </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="text-sm text-gray-600">Tổng Doanh Thu</div>
                </div>
                <div className="text-2xl font-bold text-green-600">₫847.2M</div>
                <div className="text-xs text-green-600">
                  ↗ +18.4% trong tháng
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Hoa hồng: ₫84.7M (10%)
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <div className="text-sm text-gray-600">
                    Hợp đồng hoạt động
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600">1,523</div>
                <div className="text-xs text-blue-600">Giá trị: ₫12.8B</div>
                <div className="text-xs text-gray-500 mt-1">
                  Trung bình: ₫8.4M mỗi hợp đồng
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-purple-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <div className="text-sm text-gray-600">
                    Thanh toán chờ xử lý
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  ₫156.3M
                </div>
                <div className="text-xs text-orange-600">
                  134 hóa đơn quá hạn
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Hoa hồng chưa thu: ₫15.6M
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">
                    Tăng trưởng hàng tháng
                  </div>
                </div>
                <div className="text-2xl font-bold text-orange-600">+23.7%</div>
                <div className="text-xs text-green-600">so với tháng trước</div>
                <div className="text-xs text-gray-500 mt-1">
                  Hợp đồng: +127 mới
                </div>
              </div>
            </div>

            {/* Revenue Charts */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      18
                    </div>
                    <h3 className="font-semibold">
                      📈 Xu hướng doanh thu (12 tháng)
                    </h3>
                  </div>
                  <select className="text-sm border border-gray-300 rounded px-2 py-1">
                    <option>Hàng tháng</option>
                    <option>Hàng tuần</option>
                    <option>Hàng ngày</option>
                  </select>
                </div>
                <div className="h-48 bg-gray-50 rounded flex items-end justify-center p-4">
                  <div className="flex items-end gap-2 w-full">
                    <div className="bg-blue-400 w-6 h-16"></div>
                    <div className="bg-blue-400 w-6 h-20"></div>
                    <div className="bg-blue-400 w-6 h-24"></div>
                    <div className="bg-blue-400 w-6 h-28"></div>
                    <div className="bg-blue-400 w-6 h-32"></div>
                    <div className="bg-blue-400 w-6 h-36"></div>
                    <div className="bg-blue-400 w-6 h-40"></div>
                    <div className="bg-blue-400 w-6 h-35"></div>
                    <div className="bg-blue-400 w-6 h-38"></div>
                    <div className="bg-blue-400 w-6 h-42"></div>
                    <div className="bg-blue-400 w-6 h-45"></div>
                    <div className="bg-green-500 w-6 h-48"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                  <span>Thg 1</span>
                  <span>Thg 2</span>
                  <span>Thg 3</span>
                  <span>Thg 4</span>
                  <span>Thg 5</span>
                  <span>Thg 6</span>
                  <span>Thg 7</span>
                  <span>Thg 8</span>
                  <span>Thg 9</span>
                  <span>Thg 10</span>
                  <span>Thg 11</span>
                  <span className="font-bold">Thg 12</span>
                </div>
              </div>

              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <h3 className="font-semibold">🥧 Doanh thu theo Danh mục</h3>
                </div>
                <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xs font-bold">
                        ₫847M
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Văn học (35%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Giáo dục (28%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span>Kinh doanh (23%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span>Khác (14%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Commission Analysis */}
            <div className="border border-gray-300 rounded p-4 mb-6 bg-yellow-50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  20
                </div>
                <h3 className="font-semibold text-yellow-800">
                  💰 Phân tích hoa hồng nền tảng
                </h3>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded border border-yellow-200">
                  <div className="text-sm text-gray-600">Hoa hồng đã thu</div>
                  <div className="text-xl font-bold text-green-600">₫84.7M</div>
                  <div className="text-xs text-green-600">10% phí nền tảng</div>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-200">
                  <div className="text-sm text-gray-600">
                    Hoa hồng chờ xử lý
                  </div>
                  <div className="text-xl font-bold text-orange-600">
                    ₫15.6M
                  </div>
                  <div className="text-xs text-orange-600">
                    134 thanh toán chờ
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-200">
                  <div className="text-sm text-gray-600">Đóng góp hàng đầu</div>
                  <div className="text-lg font-bold text-blue-600">Fahasa</div>
                  <div className="text-xs text-blue-600">₫23.4M hoa hồng</div>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-200">
                  <div className="text-sm text-gray-600">
                    Hoa hồng trung bình
                  </div>
                  <div className="text-xl font-bold text-purple-600">
                    ₫55.6K
                  </div>
                  <div className="text-xs text-purple-600">mỗi giao dịch</div>
                </div>
              </div>
            </div>

            {/* Report Filters */}
            <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-6">
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      21
                    </div>
                    <label className="text-sm font-medium">Loại báo cáo</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tóm tắt doanh thu</option>
                    <option>Báo cáo hoa hồng</option>
                    <option>Trạng thái thanh toán</option>
                    <option>Hiệu suất người dùng</option>
                    <option>Phân tích sản phẩm</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      22
                    </div>
                    <label className="text-sm font-medium">Khoảng ngày</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>30 ngày gần nhất</option>
                    <option>7 ngày gần nhất</option>
                    <option>90 ngày gần nhất</option>
                    <option>Năm nay</option>
                    <option>Khoảng tùy chỉnh</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      23
                    </div>
                    <label className="text-sm font-medium">Danh mục</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả danh mục</option>
                    <option>Văn học</option>
                    <option>Giáo dục</option>
                    <option>Kinh doanh</option>
                    <option>Công nghệ</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      24
                    </div>
                    <label className="text-sm font-medium">
                      Phân khúc người dùng
                    </label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả người dùng</option>
                    <option>Người mua cao cấp</option>
                    <option>Người bán hàng đầu</option>
                    <option>Người dùng mới</option>
                    <option>Doanh nghiệp</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center gap-1 w-full">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded w-full">
                      Tạo báo cáo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Financial Reports */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    26
                  </div>
                  <h4 className="font-semibold">📊 Người dùng hàng đầu</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">Fahasa Book Store</div>
                      <div className="text-xs text-gray-600">
                        Người bán cao cấp
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">₫234M</div>
                      <div className="text-xs text-gray-600">67 hợp đồng</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">NXB Trẻ</div>
                      <div className="text-xs text-gray-600">
                        Người bán doanh nghiệp
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">₫198M</div>
                      <div className="text-xs text-gray-600">43 hợp đồng</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">Thái Hà Books</div>
                      <div className="text-xs text-gray-600">
                        Người bán đã xác thực
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">₫167M</div>
                      <div className="text-xs text-gray-600">51 hợp đồng</div>
                    </div>
                  </div>
                  <button className="w-full px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded mt-2">
                    📋 Xem báo cáo đầy đủ
                  </button>
                </div>
              </div>

              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    27
                  </div>
                  <h4 className="font-semibold">
                    💸 Tổng quan trạng thái thanh toán
                  </h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded border border-green-200">
                    <span className="text-green-700">
                      ✅ Thanh toán hoàn tất
                    </span>
                    <span className="font-bold text-green-600">₫690.9M</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 rounded border border-orange-200">
                    <span className="text-orange-700">
                      ⏳ Thanh toán chờ xử lý
                    </span>
                    <span className="font-bold text-orange-600">₫156.3M</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded border border-red-200">
                    <span className="text-red-700">
                      ⚠️ Quá hạn ({">"} 30 ngày)
                    </span>
                    <span className="font-bold text-red-600">₫23.7M</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-50 rounded border border-blue-200">
                    <span className="text-blue-700">🔄 Đang xử lý</span>
                    <span className="font-bold text-blue-600">₫45.2M</span>
                  </div>
                  <button className="w-full px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded mt-2">
                    💰 Quản lý thanh toán
                  </button>
                </div>
              </div>

              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    28
                  </div>
                  <h4 className="font-semibold">📈 Chỉ số tăng trưởng</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="flex justify-between">
                      <span>Tăng trưởng doanh thu hàng tháng</span>
                      <span className="font-bold text-green-600">+23.7%</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      so với tháng trước
                    </div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="flex justify-between">
                      <span>Hợp đồng mới</span>
                      <span className="font-bold text-blue-600">+127</span>
                    </div>
                    <div className="text-xs text-gray-600">trong tháng</div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="flex justify-between">
                      <span>Tăng trưởng người dùng hoạt động</span>
                      <span className="font-bold text-purple-600">+15.2%</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      tăng trưởng tháng trên tháng
                    </div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <div className="flex justify-between">
                      <span>Giá trị giao dịch trung bình</span>
                      <span className="font-bold text-orange-600">₫8.4M</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      +12% so với tháng trước
                    </div>
                  </div>
                  <button className="w-full px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded mt-2">
                    📊 Phân tích chi tiết
                  </button>
                </div>
              </div>
            </div>

            {/* Export and Scheduling */}
            <div className="border border-gray-300 rounded p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  29
                </div>
                <h3 className="font-semibold">📤 Tùy chọn Xuất & Lên lịch</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <div className="font-medium text-blue-800 mb-2">
                    📄 Xuất báo cáo
                  </div>
                  <div className="space-y-2">
                    <button className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded">
                      📊 Báo cáo Excel
                    </button>
                    <button className="w-full px-3 py-1 bg-red-600 text-white text-xs rounded">
                      📋 Tóm tắt PDF
                    </button>
                    <button className="w-full px-3 py-1 bg-green-600 text-white text-xs rounded">
                      📈 Dữ liệu CSV
                    </button>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <div className="font-medium text-green-800 mb-2">
                    ⏰ Báo cáo định kỳ
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-xs">📅 Doanh thu hàng ngày (9:00)</div>
                    <div className="text-xs">
                      📊 Tóm tắt hàng tuần (Thứ Hai)
                    </div>
                    <div className="text-xs">
                      💰 Báo cáo tài chính hàng tháng (ngày 1)
                    </div>
                    <button className="w-full px-3 py-1 bg-green-600 text-white text-xs rounded mt-2">
                      ⚙️ Quản lý lịch
                    </button>
                  </div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded p-3">
                  <div className="font-medium text-purple-800 mb-2">
                    🔔 Cảnh báo & Thông báo
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-1">
                      <input checked type="checkbox" />
                      <span>Mốc doanh thu</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <input checked type="checkbox" />
                      <span>Cảnh báo quá hạn thanh toán</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <input type="checkbox" />
                      <span>Tóm tắt hàng ngày</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <input checked type="checkbox" />
                      <span>Phát hiện bất thường</span>
                    </div>
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
          📝 WF36 - CHÚ THÍCH BÁO CÁO TÀI CHÍNH QUẢN TRỊ
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-blue-600">
              💰 Phân tích tài chính
            </div>
            <div className="text-gray-700">
              <strong>❶-❸ Tiêu đề quản trị:</strong> điều hướng báo cáo tài
              chính
              <br />
              <strong>❹-❿ Thanh bên:</strong> các mục quản trị
              <br />
              <strong>⓫-⓭ Hành động trang:</strong> lên lịch và xuất báo cáo
              <br />
              <strong>⓮-⓱ Chỉ số chính:</strong> doanh thu, hợp đồng, thanh
              toán, tăng trưởng
              <br />
              <strong>⓲-⓳ Biểu đồ:</strong> xu hướng doanh thu và phân tích theo
              danh mục
            </div>
          </div>
          <div>
            <div className="font-bold text-blue-600">📊 Tính năng nâng cao</div>
            <div className="text-gray-700">
              <strong>⓴ Phân tích hoa hồng:</strong> theo dõi phí nền tảng
              <br />
              <strong>㉑-㉕ Bộ lọc báo cáo:</strong> tạo báo cáo tùy chỉnh
              <br />
              <strong>㉖-㉘ Báo cáo nhanh:</strong> người dùng hàng đầu, thanh
              toán, chỉ số tăng trưởng
              <br />
              <strong>㉙ Xuất & Lên lịch:</strong> hệ thống báo cáo tự động
              <br />
              <strong>Trí tuệ tài chính:</strong> phân tích tối ưu doanh thu
              <br />
              <strong>Hệ thống cảnh báo:</strong> thông báo thanh toán và mốc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
