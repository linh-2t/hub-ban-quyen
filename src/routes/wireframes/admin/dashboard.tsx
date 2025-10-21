import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/admin/dashboard")({
  component: AdminDashboardWireframe,
});

export default function AdminDashboardWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF20 - DASHBOARD ADMIN
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-800 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">Admin Portal</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div className="font-semibold">Dashboard</div>
                <div>Users</div>
                <div>Products</div>
                <div>Contracts</div>
                <div>Payments</div>
                <div>Reports</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (12)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">Admin ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          {/* Page Title */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
              <h1 className="text-2xl font-bold">Tổng Quan Hệ Thống</h1>
            </div>
            <div className="text-sm text-gray-600">
              Dashboard quản trị - Cập nhật lúc: 22/10/2025 10:30
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white border-2 border-blue-300 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <div className="text-xs text-gray-600">Tổng Users</div>
              </div>
              <div className="text-2xl font-bold text-blue-600">1,247</div>
              <div className="text-xs text-green-600 mt-1">↑ +45 tháng này</div>
              <div className="text-xs text-gray-500">
                Sellers: 423 | Buyers: 824
              </div>
            </div>

            <div className="bg-white border-2 border-purple-300 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <div className="text-xs text-gray-600">Sản phẩm Active</div>
              </div>
              <div className="text-2xl font-bold text-purple-600">3,892</div>
              <div className="text-xs text-green-600 mt-1">
                ↑ +124 tháng này
              </div>
              <div className="text-xs text-gray-500">Pending: 28</div>
            </div>

            <div className="bg-white border-2 border-green-300 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <div className="text-xs text-gray-600">Hợp đồng hoàn tất</div>
              </div>
              <div className="text-2xl font-bold text-green-600">487</div>
              <div className="text-xs text-blue-600 mt-1">23 tháng này</div>
              <div className="text-xs text-gray-500">Success rate: 94%</div>
            </div>

            <div className="bg-white border-2 border-yellow-300 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <div className="text-xs text-gray-600">Doanh thu (tháng)</div>
              </div>
              <div className="text-2xl font-bold text-yellow-600">5.2B</div>
              <div className="text-xs text-green-600 mt-1">
                ↑ +18% vs tháng trước
              </div>
              <div className="text-xs text-gray-500">Platform fee: 52M</div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Revenue Chart */}
            <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    9
                  </div>
                  <div className="font-bold">Doanh Thu Theo Tháng</div>
                </div>
                <select className="border rounded px-2 py-1 text-xs">
                  <option>6 tháng gần nhất</option>
                  <option>1 năm</option>
                  <option>Tất cả</option>
                </select>
              </div>
              <div className="h-48 border-2 border-gray-200 rounded flex items-center justify-center bg-gray-50">
                <div className="text-center text-gray-400">
                  📊 Bar Chart
                  <br />
                  <span className="text-xs">Revenue by Month</span>
                </div>
              </div>
            </div>

            {/* Conversion Funnel */}
            <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  10
                </div>
                <div className="font-bold">Conversion Funnel</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="text-xs w-32">Products Listed</div>
                  <div className="flex-1 bg-gray-200 rounded h-6">
                    <div
                      className="bg-blue-500 h-full rounded"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="text-xs font-semibold w-12">3,892</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs w-32">Received Offers</div>
                  <div className="flex-1 bg-gray-200 rounded h-6">
                    <div
                      className="bg-purple-500 h-full rounded"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <div className="text-xs font-semibold w-12">2,530</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs w-32">Offers Accepted</div>
                  <div className="flex-1 bg-gray-200 rounded h-6">
                    <div
                      className="bg-yellow-500 h-full rounded"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                  <div className="text-xs font-semibold w-12">1,362</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs w-32">Contracts Signed</div>
                  <div className="flex-1 bg-gray-200 rounded h-6">
                    <div
                      className="bg-green-500 h-full rounded"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <div className="text-xs font-semibold w-12">973</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs w-32">Payments Complete</div>
                  <div className="flex-1 bg-gray-200 rounded h-6">
                    <div
                      className="bg-emerald-600 h-full rounded"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                  <div className="text-xs font-semibold w-12">778</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Actions */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  11
                </div>
                <div className="font-bold text-yellow-800">KYC Chờ Duyệt</div>
              </div>
              <div className="text-3xl font-bold text-yellow-700 mb-2">15</div>
              <a className="text-xs text-blue-600 underline" href="#">
                Xem danh sách →
              </a>
            </div>

            <div className="bg-purple-50 border-2 border-purple-400 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  12
                </div>
                <div className="font-bold text-purple-800">
                  Sản phẩm Pending
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-700 mb-2">28</div>
              <a className="text-xs text-blue-600 underline" href="#">
                Xem danh sách →
              </a>
            </div>

            <div className="bg-red-50 border-2 border-red-400 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  13
                </div>
                <div className="font-bold text-red-800">Payments Overdue</div>
              </div>
              <div className="text-3xl font-bold text-red-700 mb-2">7</div>
              <a className="text-xs text-blue-600 underline" href="#">
                Xem danh sách →
              </a>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white border-2 border-gray-300 p-5 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  14
                </div>
                <div className="font-bold">Hoạt Động Gần Đây</div>
              </div>
              <button className="text-xs text-blue-600 underline">
                Xem tất cả
              </button>
            </div>

            <div className="space-y-2">
              {[
                {
                  icon: "✅",
                  text: "Contract #CT-2025-001234 được ký bởi cả hai bên",
                  time: "5 phút trước",
                  color: "green",
                },
                {
                  icon: "💰",
                  text: "Payment #PAY-2025-005678 đã được verify (50M)",
                  time: "12 phút trước",
                  color: "blue",
                },
                {
                  icon: "📝",
                  text: 'User "NXB Kim Đồng" hoàn tất KYC',
                  time: "23 phút trước",
                  color: "purple",
                },
                {
                  icon: "📦",
                  text: 'Sản phẩm "Nghệ thuật lãnh đạo" được approved',
                  time: "1 giờ trước",
                  color: "gray",
                },
                {
                  icon: "🤝",
                  text: "Offer #OF-2025-009876 được chấp nhận",
                  time: "2 giờ trước",
                  color: "yellow",
                },
              ].map((activity, i) => (
                <div
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded"
                  key={i}
                >
                  <div className="text-xl">{activity.icon}</div>
                  <div className="flex-1 text-sm">{activity.text}</div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performers */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-300 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  15
                </div>
                <div className="font-bold">Top Sellers (Doanh Thu)</div>
              </div>
              <div className="space-y-3">
                {[
                  { name: "NXB Trẻ", revenue: "450M", deals: 45 },
                  { name: "NXB Kim Đồng", revenue: "380M", deals: 38 },
                  { name: "Nguyễn Văn A", revenue: "320M", deals: 32 },
                  { name: "NXB Văn Học", revenue: "280M", deals: 28 },
                  { name: "Tác giả ABC", revenue: "250M", deals: 25 },
                ].map((seller, i) => (
                  <div
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    key={i}
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-semibold">#{i + 1}</div>
                      <div className="text-sm">{seller.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">
                        {seller.revenue}
                      </div>
                      <div className="text-xs text-gray-600">
                        {seller.deals} deals
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  16
                </div>
                <div className="font-bold">Top Categories</div>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Kinh tế", deals: 234, revenue: "1.2B" },
                  { name: "Văn học", deals: 189, revenue: "980M" },
                  { name: "Khoa học", deals: 156, revenue: "850M" },
                  { name: "Tâm lý", deals: 142, revenue: "720M" },
                  { name: "Giáo dục", deals: 98, revenue: "450M" },
                ].map((cat, i) => (
                  <div
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    key={i}
                  >
                    <div className="text-sm">{cat.name}</div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-blue-600">
                        {cat.deals} deals
                      </div>
                      <div className="text-xs text-gray-600">{cat.revenue}</div>
                    </div>
                  </div>
                ))}
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

        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❶❷❸ Admin Header</div>
            <div className="text-gray-700">
              <strong>Dark theme</strong> để phân biệt với user dashboards
              <br />
              <strong>Navigation:</strong> Quick access đến các trang admin quan
              trọng
              <br />
              <strong>❷ Notifications:</strong> Critical alerts (KYC pending,
              disputes, system errors)
              <br />
              <strong>❸ Admin menu:</strong> Profile, Settings, Switch to User
              View, Logout
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">
              ❺❻❼❽ Key Metrics Cards
            </div>
            <div className="text-gray-700">
              <strong>Realtime stats</strong> với comparison vs previous period
              <br />
              <strong>❺ Users:</strong> Total + Breakdown (Sellers/Buyers) +
              Growth
              <br />
              <strong>❻ Products:</strong> Active count + Pending for moderation
              <br />
              <strong>❼ Contracts:</strong> Completed + Success rate
              <br />
              <strong>❽ Revenue:</strong> Monthly total + Platform fee earned
              <br />
              <strong>Click cards:</strong> Navigate to detailed reports
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❾❿ Charts</div>
            <div className="text-gray-700">
              <strong>❾ Revenue Chart:</strong> Bar chart hiển thị doanh thu
              theo tháng
              <br />
              <strong>❿ Conversion Funnel:</strong> Visual funnel từ Products →
              Payments
              <br />
              <strong>Interactive:</strong> Hover để xem chi tiết số liệu
              <br />
              <strong>Export:</strong> Download as PNG/CSV
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓫⓬⓭ Pending Actions</div>
            <div className="text-gray-700">
              <strong>Highlight actions</strong> cần Admin attention:
              <br />
              <strong>⓫ KYC:</strong> Users chờ verify
              <br />
              <strong>⓬ Products:</strong> Sản phẩm chờ approve
              <br />
              <strong>⓭ Overdue Payments:</strong> Payments quá hạn cần follow
              up
              <br />
              <strong>Click:</strong> Navigate to filtered list view
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓮ Recent Activities</div>
            <div className="text-gray-700">
              <strong>Activity feed:</strong> Real-time system events
              <br />
              <strong>Types:</strong> Contracts signed, Payments verified, KYC
              completed, Products approved, Offers accepted
              <br />
              <strong>Realtime:</strong> WebSocket updates mới nhất
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓯⓰ Top Performers</div>
            <div className="text-gray-700">
              <strong>⓯ Top Sellers:</strong> Ranked by revenue
              <br />
              <strong>⓰ Top Categories:</strong> By number of deals
              <br />
              <strong>Purpose:</strong> Identify high-value users & trending
              categories
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📌 ADDITIONAL FEATURES
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Filters & Date Range:</strong> Filter tất cả metrics theo
              date range
            </li>
            <li>
              <strong>Export Reports:</strong> Export all data as Excel/PDF
            </li>
            <li>
              <strong>Alerts Config:</strong> Admin có thể set alerts cho
              specific thresholds
            </li>
            <li>
              <strong>User Impersonation:</strong> Admin có thể "switch to user
              view" để test UX
            </li>
            <li>
              <strong>System Health:</strong> Monitoring server status, API
              response times, error rates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
