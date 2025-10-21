import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/admin/system-monitoring")({
  component: SystemMonitoringWireframe,
});

export default function SystemMonitoringWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-red-600">
        WF34 - GIÁM SÁT HỆ THỐNG
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
                <div className="text-sm font-semibold">🏢 Admin Portal</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>Dashboard</div>
                <div>Analytics</div>
                <div className="font-semibold underline">Giám sát</div>
                <div>Báo cáo</div>
                <div>Cài đặt</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🚨 (3)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">Admin ▼</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Page Title */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
              <h1 className="text-2xl font-bold">Giám Sát Hệ Thống</h1>
            </div>
            <div className="text-sm text-gray-600">
              Theo dõi hiệu suất, bảo mật và hoạt động hệ thống theo thời gian
              thực
            </div>
          </div>

          {/* System Status Overview */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                5
              </div>
              <h2 className="text-xl font-bold">Trạng Thái Hệ Thống</h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {/* Server Status */}
              <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-xs text-gray-600">SERVERS</div>
                </div>
                <div className="text-2xl font-bold text-green-600">8/8</div>
                <div className="text-xs text-green-600">Tất cả hoạt động</div>
                <div className="text-xs text-gray-500 mt-1">
                  CPU: 45% • RAM: 62% • Disk: 78%
                </div>
              </div>

              {/* Database Status */}
              <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    7
                  </div>
                  <div className="text-xs text-gray-600">DATABASE</div>
                </div>
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-xs text-green-600">
                  Hoạt động bình thường
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Response: 45ms • Connections: 234/500
                </div>
              </div>

              {/* API Status */}
              <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <div className="text-xs text-gray-600">API ENDPOINTS</div>
                </div>
                <div className="text-2xl font-bold text-yellow-600">94%</div>
                <div className="text-xs text-yellow-600">Một số chậm</div>
                <div className="text-xs text-gray-500 mt-1">
                  Avg Response: 320ms • Errors: 2.1%
                </div>
              </div>

              {/* Security Status */}
              <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    9
                  </div>
                  <div className="text-xs text-gray-600">SECURITY</div>
                </div>
                <div className="text-2xl font-bold text-red-600">Cảnh báo</div>
                <div className="text-xs text-red-600">3 sự kiện đáng ngờ</div>
                <div className="text-xs text-gray-500 mt-1">
                  Failed logins: 15 • DDoS attempts: 2
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Monitoring Charts */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Server Performance */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  10
                </div>
                <h3 className="font-bold">Hiệu Suất Server (24h)</h3>
              </div>
              <div className="h-48 bg-gray-100 rounded border flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">
                    11
                  </div>
                  <div className="text-xs text-gray-600">
                    Biểu đồ CPU/RAM/Disk usage
                  </div>
                </div>
              </div>
            </div>

            {/* Network Traffic */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  12
                </div>
                <h3 className="font-bold">Lưu Lượng Mạng</h3>
              </div>
              <div className="h-48 bg-gray-100 rounded border flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">
                    13
                  </div>
                  <div className="text-xs text-gray-600">
                    Biểu đồ Incoming/Outgoing traffic
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Alerts */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                14
              </div>
              <h2 className="text-xl font-bold">Cảnh Báo Hoạt Động</h2>
            </div>

            <div className="space-y-3">
              {/* Critical Alert */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    15
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-bold text-red-800">
                        🚨 NGHIÊM TRỌNG
                      </div>
                      <div className="text-xs text-gray-500">2 phút trước</div>
                    </div>
                    <div className="text-sm">
                      Phát hiện nhiều lần đăng nhập thất bại từ IP 192.168.1.100
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700">
                        Chặn IP
                      </button>
                      <button className="px-3 py-1 border border-gray-300 text-xs rounded hover:bg-gray-50">
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warning Alert */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    16
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-bold text-yellow-800">
                        ⚠️ CẢNH BÁO
                      </div>
                      <div className="text-xs text-gray-500">15 phút trước</div>
                    </div>
                    <div className="text-sm">
                      CPU usage trên Server-03 đạt 85% trong 10 phút
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button className="px-3 py-1 bg-yellow-600 text-white text-xs rounded hover:bg-yellow-700">
                        Kiểm tra
                      </button>
                      <button className="px-3 py-1 border border-gray-300 text-xs rounded hover:bg-gray-50">
                        Bỏ qua
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Alert */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    17
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-bold text-blue-800">ℹ️ THÔNG TIN</div>
                      <div className="text-xs text-gray-500">1 giờ trước</div>
                    </div>
                    <div className="text-sm">
                      Backup tự động hoàn thành thành công (Database size:
                      2.4GB)
                    </div>
                    <button className="px-3 py-1 border border-gray-300 text-xs rounded hover:bg-gray-50 mt-2">
                      Xem log
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Logs */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                18
              </div>
              <h2 className="text-xl font-bold">Log Hệ Thống</h2>
            </div>

            <div className="bg-black text-green-400 rounded-lg p-4 font-mono text-xs h-64 overflow-y-auto">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  19
                </div>
                <span className="text-gray-500">[2025-10-21 10:30:15]</span>
              </div>
              <div className="space-y-1">
                <div>
                  [INFO] Database connection pool initialized (min:10, max:100)
                </div>
                <div>[INFO] API Gateway started on port 8080</div>
                <div>
                  [WARN] High memory usage detected on web-server-02 (87%)
                </div>
                <div>
                  [ERROR] Failed login attempt from IP 192.168.1.100 (user:
                  admin)
                </div>
                <div>[INFO] Backup process completed successfully</div>
                <div>[DEBUG] Cache hit ratio: 94.2% (Redis)</div>
                <div>[INFO] Payment webhook received from bank gateway</div>
                <div>[WARN] API rate limit exceeded for user_id: 12345</div>
                <div>[INFO] Email notification sent to user@example.com</div>
                <div>
                  [ERROR] Database query timeout (table: contracts, timeout:
                  30s)
                </div>
                <div className="text-yellow-400">
                  [2025-10-21 10:35:22] [LIVE] Monitoring active sessions...
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                20
              </div>
              <h2 className="text-xl font-bold">Hành Động Nhanh</h2>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    21
                  </div>
                  <span className="font-bold">🔄 Restart Services</span>
                </div>
                <div className="text-xs opacity-80">Khởi động lại dịch vụ</div>
              </button>

              <button className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    22
                  </div>
                  <span className="font-bold">💾 Force Backup</span>
                </div>
                <div className="text-xs opacity-80">Sao lưu khẩn cấp</div>
              </button>

              <button className="p-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    23
                  </div>
                  <span className="font-bold">🧹 Clear Cache</span>
                </div>
                <div className="text-xs opacity-80">Xóa cache hệ thống</div>
              </button>

              <button className="p-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    24
                  </div>
                  <span className="font-bold">🚨 Emergency Mode</span>
                </div>
                <div className="text-xs opacity-80">Chế độ khẩn cấp</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-red-50 border-2 border-red-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-red-800">
          CHÚ THÍCH CHI TIẾT - GIÁM SÁT HỆ THỐNG
        </h2>

        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ❶❷❸ Header & Navigation
            </div>
            <div className="text-gray-700">
              <strong>❶ Admin Portal:</strong> Giao diện quản trị hệ thống
              <br />
              <strong>❷ Alert Counter:</strong> Số lượng cảnh báo cần xử lý
              <br />
              <strong>❸ Admin Profile:</strong> Thông tin tài khoản admin
              <br />
              <strong>Navigation:</strong> Truy cập nhanh các module giám sát
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ❹❺ Page Header & Overview
            </div>
            <div className="text-gray-700">
              <strong>❹ Page Title:</strong> Tiêu đề và mô tả chức năng
              <br />
              <strong>❺ System Status:</strong> Tổng quan trạng thái tất cả hệ
              thống con
              <br />
              <strong>Real-time Updates:</strong> Cập nhật dữ liệu mỗi 30 giây
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ❻❼❽❾ System Health Metrics
            </div>
            <div className="text-gray-700">
              <strong>❶ Server Status:</strong> Trạng thái server và tài nguyên
              <br />
              <strong>❼ Database Health:</strong> Hiệu suất cơ sở dữ liệu
              <br />
              <strong>❽ API Performance:</strong> Thống kê API endpoints
              <br />
              <strong>❾ Security Status:</strong> Cảnh báo bảo mật
              <br />
              <strong>Color Coding:</strong> Xanh=OK, Vàng=Cảnh báo, Đỏ=Nghiêm
              trọng
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ❿⓫⓬⓭ Real-time Charts
            </div>
            <div className="text-gray-700">
              <strong>❿ Server Performance:</strong> Biểu đồ CPU, RAM, Disk
              usage
              <br />
              <strong>⓫ Chart Visualization:</strong> Dữ liệu 24h gần nhất
              <br />
              <strong>⓬ Network Traffic:</strong> Lưu lượng mạng in/out
              <br />
              <strong>⓭ Traffic Chart:</strong> Theo dõi băng thông realtime
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ⓮⓯⓰⓱ Alert Management
            </div>
            <div className="text-gray-700">
              <strong>⓮ Active Alerts:</strong> Danh sách cảnh báo cần xử lý
              <br />
              <strong>⓯ Critical Alert:</strong> Cảnh báo nghiêm trọng - ưu tiên
              cao
              <br />
              <strong>⓰ Warning Alert:</strong> Cảnh báo - cần theo dõi
              <br />
              <strong>⓱ Info Alert:</strong> Thông tin - không cần hành động
              <br />
              <strong>Action Buttons:</strong> Xử lý nhanh cho từng loại alert
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">⓲⓳ System Logs</div>
            <div className="text-gray-700">
              <strong>⓲ Log Display:</strong> Console-style log viewer
              <br />
              <strong>⓳ Log Entries:</strong> Timestamp và message format
              <br />
              <strong>Log Levels:</strong> INFO, WARN, ERROR, DEBUG
              <br />
              <strong>Live Tail:</strong> Theo dõi log realtime
              <br />
              <strong>Filter Options:</strong> Lọc theo level và service
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ⓴㉑㉒㉓㉔ Quick Actions
            </div>
            <div className="text-gray-700">
              <strong>⓴ Quick Actions:</strong> Các thao tác quản trị nhanh
              <br />
              <strong>㉑ Restart Services:</strong> Khởi động lại dịch vụ
              <br />
              <strong>㉒ Force Backup:</strong> Sao lưu dữ liệu khẩn cấp
              <br />
              <strong>㉓ Clear Cache:</strong> Xóa cache hệ thống
              <br />
              <strong>㉔ Emergency Mode:</strong> Chế độ bảo trì khẩn cấp
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            🔍 MONITORING WORKFLOW
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              <strong>Continuous Monitoring:</strong> Hệ thống giám sát 24/7 tất
              cả metrics
            </li>
            <li>
              <strong>Alert Generation:</strong> Tự động tạo cảnh báo khi vượt
              ngưỡng
            </li>
            <li>
              <strong>Notification System:</strong> Gửi thông báo qua
              email/SMS/Slack
            </li>
            <li>
              <strong>Escalation:</strong> Tăng cấp độ nghiêm trọng nếu không xử
              lý
            </li>
            <li>
              <strong>Response Actions:</strong> Thực hiện hành động tự động
              hoặc manual
            </li>
            <li>
              <strong>Incident Tracking:</strong> Ghi nhận và theo dõi sự cố
            </li>
            <li>
              <strong>Post-incident Review:</strong> Phân tích nguyên nhân và
              cải thiện
            </li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">
          <div className="font-bold text-blue-800 mb-2">
            📊 MONITORING METRICS
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Server Metrics:</strong> CPU, RAM, Disk, Network usage
            </li>
            <li>
              <strong>Application Metrics:</strong> Response time, error rate,
              throughput
            </li>
            <li>
              <strong>Database Metrics:</strong> Query performance, connection
              pool, replication lag
            </li>
            <li>
              <strong>Security Metrics:</strong> Failed logins, suspicious
              activities, intrusion attempts
            </li>
            <li>
              <strong>Business Metrics:</strong> Transaction volume, user
              activity, revenue impact
            </li>
            <li>
              <strong>External Dependencies:</strong> API response time,
              third-party service status
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
