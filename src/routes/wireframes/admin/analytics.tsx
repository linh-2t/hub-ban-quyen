import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/admin/analytics")({
  component: AdminAnalyticsWireframe,
});

export default function AdminAnalyticsWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF33 - PHÂN TÍCH NÂNG CAO
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
                <div className="text-sm font-semibold">
                  📚 Copyright Hub - Quản trị
                </div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>Bảng điều khiển</div>
                <div>Người dùng</div>
                <div>Sản phẩm</div>
                <div className="font-semibold text-red-300">Phân tích</div>
                <div>Báo cáo</div>
                <div>Cài đặt</div>
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
                <div className="text-xs">Phân tích Quản trị ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50">
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 rounded bg-blue-100 border-2 border-blue-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <div className="text-sm font-semibold">
                    📊 Trung tâm Phân tích
                  </div>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      5
                    </div>
                    <div className="font-semibold text-blue-600">
                      📈 Tổng quan
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      6
                    </div>
                    <div className="text-gray-600">💰 Phân tích Doanh Thu</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      7
                    </div>
                    <div className="text-gray-600">👥 Hành vi Người Dùng</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      8
                    </div>
                    <div className="text-gray-600">📚 Hiệu suất Nội dung</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      9
                    </div>
                    <div className="text-gray-600">🎯 Phễu Chuyển Đổi</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    10
                  </div>
                  <div className="text-sm">📊 Dữ liệu Thời gian Thực</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
                  </div>
                  <div className="text-sm">🎯 Báo cáo Tùy chỉnh</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    12
                  </div>
                  <div className="text-sm">📈 Phân tích Dự báo</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <div className="text-sm">⚙️ Cài đặt Dữ liệu</div>
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
                  <h1 className="text-2xl font-bold">Phân Tích Nâng Cao</h1>
                </div>
                <p className="text-gray-600">
                  Bảng điều khiển phân tích toàn diện cho nền tảng Copyright Hub
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded"
                    type="button"
                  >
                    📊 Tạo báo cáo
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <button
                    className="px-4 py-2 bg-green-600 text-white text-sm rounded"
                    type="button"
                  >
                    📤 Xuất dữ liệu
                  </button>
                </div>
              </div>
            </div>

            {/* Time Range Selector */}
            <div className="bg-white border border-gray-300 rounded p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      17
                    </div>
                    <label className="text-sm font-medium">
                      Khoảng thời gian:
                    </label>
                  </div>
                  <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>7 ngày qua</option>
                    <option>30 ngày qua</option>
                    <option>90 ngày qua</option>
                    <option>Năm nay</option>
                    <option>Tùy chọn...</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <button
                    className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded"
                    type="button"
                  >
                    🔄 Cập nhật tự động
                  </button>
                  <div className="text-xs text-gray-500">
                    Cập nhật cuối: 14:32
                  </div>
                </div>
              </div>
            </div>

            {/* Key Performance Indicators */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm opacity-90">Tổng doanh thu</div>
                </div>
                <div className="text-2xl font-bold">₫2.8B</div>
                <div className="text-xs opacity-75">
                  ↑ +23.5% so với tháng trước
                </div>
                <div className="text-xs opacity-60 mt-1">Mục tiêu: ₫3.2B</div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-green-600 text-xs font-bold">
                    20
                  </div>
                  <div className="text-sm opacity-90">Người dùng hoạt động</div>
                </div>
                <div className="text-2xl font-bold">8,547</div>
                <div className="text-xs opacity-75">↑ +12.3% (DAU)</div>
                <div className="text-xs opacity-60 mt-1">MAU: 24,691</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-purple-600 text-xs font-bold">
                    21
                  </div>
                  <div className="text-sm opacity-90">Giao dịch hoàn tất</div>
                </div>
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-xs opacity-75">↑ +8.7% tháng này</div>
                <div className="text-xs opacity-60 mt-1">
                  Tỷ lệ thành công: 94.2%
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-orange-600 text-xs font-bold">
                    22
                  </div>
                  <div className="text-sm opacity-90">Sản phẩm mới</div>
                </div>
                <div className="text-2xl font-bold">342</div>
                <div className="text-xs opacity-75">↑ +15.6% tuần này</div>
                <div className="text-xs opacity-60 mt-1">Đã duyệt: 289</div>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-red-600 text-xs font-bold">
                    23
                  </div>
                  <div className="text-sm opacity-90">Tỷ lệ chuyển đổi</div>
                </div>
                <div className="text-2xl font-bold">12.8%</div>
                <div className="text-xs opacity-75">↑ +2.1% cải thiện</div>
                <div className="text-xs opacity-60 mt-1">Mục tiêu: 15%</div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Revenue Trend Chart */}
              <div className="bg-white border border-gray-300 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      24
                    </div>
                    <h3 className="font-semibold">📈 Xu hướng doanh thu</h3>
                  </div>
                  <select className="text-xs border border-gray-300 rounded px-2 py-1">
                    <option>30 ngày qua</option>
                    <option>90 ngày qua</option>
                    <option>6 tháng qua</option>
                    <option>1 năm qua</option>
                  </select>
                </div>
                <div className="h-64 bg-gray-50 rounded border border-gray-200 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 text-xs text-gray-500">
                    ₫ (triệu)
                  </div>
                  <div className="w-full h-full p-4">
                    {/* Simulated Line Chart */}
                    <div className="flex items-end justify-between h-full">
                      {[
                        85, 92, 78, 95, 102, 89, 96, 103, 98, 105, 112, 118,
                      ].map((height, i) => (
                        <div className="flex flex-col items-center" key={i}>
                          <div
                            className="bg-blue-500 rounded-t w-6 hover:bg-blue-600 cursor-pointer"
                            style={{ height: `${height}%` }}
                          ></div>
                          <div className="text-xs text-gray-500 mt-1">
                            {i + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                    Tháng
                  </div>
                </div>
                <div className="text-xs text-center text-gray-600 mt-2">
                  Doanh thu tăng trưởng ổn định với xu hướng tích cực
                </div>
              </div>

              {/* User Activity Chart */}
              <div className="bg-white border border-gray-300 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <h3 className="font-semibold">👥 Hoạt động người dùng</h3>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <button
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded"
                      type="button"
                    >
                      Ngày
                    </button>
                    <button
                      className="px-2 py-1 bg-gray-100 text-gray-800 rounded"
                      type="button"
                    >
                      Tuần
                    </button>
                    <button
                      className="px-2 py-1 bg-gray-100 text-gray-800 rounded"
                      type="button"
                    >
                      Tháng
                    </button>
                  </div>
                </div>
                <div className="h-64 bg-gray-50 rounded border border-gray-200 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 text-xs text-gray-500">
                    Người dùng
                  </div>
                  <div className="w-full h-full p-4">
                    {/* Simulated Area Chart */}
                    <div className="flex items-end justify-between h-full">
                      {[45, 52, 48, 58, 61, 55, 62, 68, 64, 71, 75, 79].map(
                        (height, i) => (
                          <div className="flex flex-col items-center" key={i}>
                            <div
                              className="bg-gradient-to-t from-green-400 to-green-300 rounded-t w-6 hover:from-green-500 hover:to-green-400 cursor-pointer"
                              style={{ height: `${height}%` }}
                            ></div>
                            <div className="text-xs text-gray-500 mt-1">
                              {i + 1}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                    Ngày
                  </div>
                </div>
                <div className="text-xs text-center text-gray-600 mt-2">
                  Hoạt động người dùng tăng đều trong 2 tuần qua
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* Top Products */}
              <div className="bg-white border border-gray-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    26
                  </div>
                  <h3 className="font-semibold">🏆 Sản phẩm hàng đầu</h3>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      name: "Nghệ Thuật Lãnh Đạo",
                      sales: 156,
                      revenue: "₫45M",
                    },
                    {
                      name: "Tâm Lý Học Đại Cương",
                      sales: 142,
                      revenue: "₫38M",
                    },
                    { name: "Kinh Tế Vi Mô", sales: 128, revenue: "₫34M" },
                    { name: "Lập Trình Python", sales: 115, revenue: "₫31M" },
                    { name: "Marketing Số", sales: 98, revenue: "₫27M" },
                  ].map((product, i) => (
                    <div
                      className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100"
                      key={i}
                    >
                      <div>
                        <div className="text-sm font-medium">
                          {product.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {product.sales} lượt bán
                        </div>
                      </div>
                      <div className="text-sm font-bold text-blue-600">
                        {product.revenue}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full mt-3 text-xs text-blue-600 hover:underline"
                  type="button"
                >
                  Xem tất cả →
                </button>
              </div>

              {/* Geographic Distribution */}
              <div className="bg-white border border-gray-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    27
                  </div>
                  <h3 className="font-semibold">🌍 Phân bố địa lý</h3>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      region: "TP. Hồ Chí Minh",
                      percentage: 35,
                      users: "2,847",
                    },
                    { region: "Hà Nội", percentage: 28, users: "2,398" },
                    { region: "Đà Nẵng", percentage: 12, users: "1,025" },
                    { region: "Cần Thơ", percentage: 8, users: "684" },
                    { region: "Khác", percentage: 17, users: "1,453" },
                  ].map((region, i) => (
                    <div className="space-y-1" key={i}>
                      <div className="flex justify-between text-sm">
                        <span>{region.region}</span>
                        <span className="font-medium">
                          {region.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${region.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-600">
                        {region.users} người dùng
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion Funnel */}
              <div className="bg-white border border-gray-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    28
                  </div>
                  <h3 className="font-semibold">🎯 Phễu chuyển đổi</h3>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      stage: "Truy cập trang",
                      count: 15_847,
                      percentage: 100,
                      color: "bg-blue-500",
                    },
                    {
                      stage: "Xem sản phẩm",
                      count: 8954,
                      percentage: 56,
                      color: "bg-green-500",
                    },
                    {
                      stage: "Thêm vào giỏ",
                      count: 3421,
                      percentage: 22,
                      color: "bg-yellow-500",
                    },
                    {
                      stage: "Bắt đầu thanh toán",
                      count: 2187,
                      percentage: 14,
                      color: "bg-orange-500",
                    },
                    {
                      stage: "Hoàn tất mua hàng",
                      count: 1247,
                      percentage: 8,
                      color: "bg-red-500",
                    },
                  ].map((stage, i) => (
                    <div className="space-y-1" key={i}>
                      <div className="flex justify-between text-sm">
                        <span>{stage.stage}</span>
                        <div>
                          <span className="font-medium">
                            {stage.count.toLocaleString()}
                          </span>
                          <span className="text-gray-500 ml-1">
                            ({stage.percentage}%)
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`${stage.color} h-3 rounded-full`}
                          style={{ width: `${stage.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-center text-gray-600">
                  Tỷ lệ chuyển đổi tổng thể: 7.9%
                </div>
              </div>
            </div>

            {/* Real-time Activity */}
            <div className="bg-white border border-gray-300 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    29
                  </div>
                  <h3 className="font-semibold">⚡ Hoạt động thời gian thực</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600">Đang cập nhật</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-blue-50 rounded">
                  <div className="text-2xl font-bold text-blue-600">127</div>
                  <div className="text-xs text-gray-600">Người dùng online</div>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <div className="text-2xl font-bold text-green-600">23</div>
                  <div className="text-xs text-gray-600">
                    Giao dịch đang xử lý
                  </div>
                </div>
                <div className="p-3 bg-orange-50 rounded">
                  <div className="text-2xl font-bold text-orange-600">8</div>
                  <div className="text-xs text-gray-600">
                    Sản phẩm chờ duyệt
                  </div>
                </div>
                <div className="p-3 bg-purple-50 rounded">
                  <div className="text-2xl font-bold text-purple-600">45</div>
                  <div className="text-xs text-gray-600">
                    Phiên mới (1h qua)
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  30
                </div>
                <h3 className="font-semibold">📝 Hoạt động gần đây</h3>
              </div>
              <div className="space-y-3">
                {[
                  {
                    icon: "💰",
                    action: "Giao dịch #TXN-2024-8975 hoàn tất",
                    details: "₫125,000 - Nghệ Thuật Lãnh Đạo",
                    time: "2 phút trước",
                    type: "success",
                  },
                  {
                    icon: "👤",
                    action: "Người dùng mới đăng ký",
                    details: "Nguyễn Văn Nam - Đã xác minh KYC",
                    time: "5 phút trước",
                    type: "info",
                  },
                  {
                    icon: "📚",
                    action: "Sản phẩm mới được phê duyệt",
                    details: "Tâm Lý Học Ứng Dụng - NXB Giáo Dục",
                    time: "8 phút trước",
                    type: "success",
                  },
                  {
                    icon: "⚠️",
                    action: "Cảnh báo hệ thống",
                    details: "Tải server cao - sử dụng CPU 87%",
                    time: "12 phút trước",
                    type: "warning",
                  },
                  {
                    icon: "🎯",
                    action: "Mục tiêu tháng đạt được",
                    details: "105% mục tiêu doanh thu tháng 11",
                    time: "15 phút trước",
                    type: "success",
                  },
                ].map((activity, i) => (
                  <div
                    className={`flex items-center gap-3 p-3 rounded border-l-4 ${
                      activity.type === "success"
                        ? "bg-green-50 border-green-400"
                        : activity.type === "warning"
                          ? "bg-yellow-50 border-yellow-400"
                          : "bg-blue-50 border-blue-400"
                    }`}
                    key={i}
                  >
                    <div className="text-xl">{activity.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">
                        {activity.action}
                      </div>
                      <div className="text-xs text-gray-600">
                        {activity.details}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                ))}
              </div>
              <button
                className="w-full mt-3 text-xs text-blue-600 hover:underline"
                type="button"
              >
                Xem tất cả hoạt động →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Annotation */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-bold text-blue-800 mb-4">
          📝 WF33 - PHÂN TÍCH NÂNG CAO - GHI CHÚ
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-blue-600">
              📊 Bảng điều khiển Phân tích Nâng cao
            </div>
            <div className="text-gray-700">
              <strong>❶-❸ Header:</strong> Điều hướng cổng phân tích quản trị
              <br />
              <strong>❹-⓭ Thanh bên:</strong> Các phần phân tích và quản lý dữ
              liệu
              <br />
              <strong>⓮-⓰ Hành động trang:</strong> Tạo báo cáo và xuất dữ liệu
              <br />
              <strong>⓱-⓲ Điều khiển thời gian:</strong> Chọn khoảng ngày và tự
              động làm mới
              <br />
              <strong>⓳-㉗ Bảng KPI:</strong> Các chỉ số hiệu suất chính với dữ
              liệu thời gian thực
            </div>
          </div>
          <div>
            <div className="font-bold text-blue-600">
              📈 Trực quan hóa Dữ liệu & Thấu hiểu
            </div>
            <div className="text-gray-700">
              <strong>㉘-㉙ Biểu đồ tương tác:</strong> Xu hướng doanh thu và
              trực quan hóa hoạt động người dùng
              <br />
              <strong>㉚-㉜ Chỉ số hiệu suất:</strong> Sản phẩm hàng đầu, phân
              bố địa lý, phễu chuyển đổi
              <br />
              <strong>㉝ Giám sát thời gian thực:</strong> Hoạt động hệ thống và
              tương tác người dùng
              <br />
              <strong>㉞ Bảng hoạt động:</strong> Hoạt động gần đây của nền tảng
              và cảnh báo hệ thống
              <br />
              <strong>Phân tích thông minh:</strong> Thấu hiểu dự báo và báo cáo
              tự động
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
