import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/admin/role-management")({
  component: AdminRoleManagementWireframe,
});

export default function AdminRoleManagementWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF37 - QUẢN LÝ VAI TRÒ QUẢN TRỊ
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
                <div className="font-semibold text-red-300">Vai trò</div>
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
                <div className="text-xs">Siêu Admin ▼</div>
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
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-sm font-semibold">
                    🔐 Quản lý vai trò
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    7
                  </div>
                  <div className="text-sm">📚 Quản lý sản phẩm</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <div className="text-sm">💼 Quản lý ưu đãi</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    9
                  </div>
                  <div className="text-sm">📝 Quản lý hợp đồng</div>
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
                    Quản lý vai trò và quyền
                  </h1>
                </div>
                <p className="text-gray-600">
                  Quản lý vai trò người dùng, quyền và kiểm soát truy cập trên
                  toàn nền tảng
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
                    ➕ Tạo Vai Trò
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
                    📊 Nhật ký Kiểm toán
                  </button>
                </div>
              </div>
            </div>

            {/* Role Overview Cards */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4 bg-red-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="text-sm text-gray-600">Siêu Admin</div>
                </div>
                <div className="text-2xl font-bold text-red-600">3</div>
                <div className="text-xs text-gray-600">
                  Quyền truy cập toàn hệ thống
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <div className="text-sm text-gray-600">Admin</div>
                </div>
                <div className="text-2xl font-bold text-orange-600">8</div>
                <div className="text-xs text-gray-600">Quản lý nền tảng</div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <div className="text-sm text-gray-600">Người kiểm duyệt</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">15</div>
                <div className="text-xs text-gray-600">Giám sát nội dung</div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">Quản lý Hợp đồng</div>
                </div>
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-xs text-gray-600">Giám sát pháp lý</div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-purple-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm text-gray-600">Nhân viên Hỗ trợ</div>
                </div>
                <div className="text-2xl font-bold text-purple-600">25</div>
                <div className="text-xs text-gray-600">Hỗ trợ người dùng</div>
              </div>
            </div>

            {/* Role Hierarchy Visualization */}
            <div className="border border-gray-300 rounded p-4 mb-6 bg-blue-50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  19
                </div>
                <h3 className="font-semibold text-blue-800">
                  🏛️ Cấu trúc vai trò & Quyền
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 bg-red-100 border-2 border-red-300 rounded">
                  <div className="text-2xl">👑</div>
                  <div className="flex-1">
                    <div className="font-bold text-red-800">Siêu Admin</div>
                    <div className="text-sm text-red-600">
                      Tất cả quyền • Cấu hình hệ thống • Quản lý người dùng •
                      Cài đặt bảo mật
                    </div>
                  </div>
                  <div className="text-right text-red-600">
                    <div className="text-sm font-bold">100% Quyền</div>
                    <div className="text-xs">3 người dùng</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-orange-100 border-2 border-orange-300 rounded">
                  <div className="text-2xl">⚡</div>
                  <div className="flex-1">
                    <div className="font-bold text-orange-800">Admin</div>
                    <div className="text-sm text-orange-600">
                      Quản lý người dùng • Giám sát nội dung • Báo cáo tài chính
                      • Phê duyệt hợp đồng
                    </div>
                  </div>
                  <div className="text-right text-orange-600">
                    <div className="text-sm font-bold">85% Quyền</div>
                    <div className="text-xs">8 người dùng</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-blue-100 border-2 border-blue-300 rounded">
                  <div className="text-2xl">🛡️</div>
                  <div className="flex-1">
                    <div className="font-bold text-blue-800">
                      Người kiểm duyệt
                    </div>
                    <div className="text-sm text-blue-600">
                      Kiểm duyệt nội dung • Xác minh người dùng • Báo cáo cơ bản
                      • Vé hỗ trợ
                    </div>
                  </div>
                  <div className="text-right text-blue-600">
                    <div className="text-sm font-bold">60% Quyền</div>
                    <div className="text-xs">15 người dùng</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-green-100 border-2 border-green-300 rounded">
                  <div className="text-2xl">📝</div>
                  <div className="flex-1">
                    <div className="font-bold text-green-800">
                      Quản lý Hợp đồng
                    </div>
                    <div className="text-sm text-green-600">
                      Rà soát hợp đồng • Quản lý tài liệu pháp lý • Theo dõi
                      phân công
                    </div>
                  </div>
                  <div className="text-right text-green-600">
                    <div className="text-sm font-bold">45% Quyền</div>
                    <div className="text-xs">12 người dùng</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-purple-100 border-2 border-purple-300 rounded">
                  <div className="text-2xl">🎧</div>
                  <div className="flex-1">
                    <div className="font-bold text-purple-800">
                      Nhân viên Hỗ trợ
                    </div>
                    <div className="text-sm text-purple-600">
                      Hỗ trợ người dùng • Thông tin cơ bản của người dùng • Quản
                      lý vé
                    </div>
                  </div>
                  <div className="text-right text-purple-600">
                    <div className="text-sm font-bold">25% Quyền</div>
                    <div className="text-xs">25 người dùng</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Permission Matrix */}
            <div className="border border-gray-300 rounded p-4 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  20
                </div>
                <h3 className="font-semibold">🔑 Ma trận Quyền</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-2 border">Quyền</th>
                      <th className="text-center p-2 border">👑 Siêu Admin</th>
                      <th className="text-center p-2 border">⚡ Admin</th>
                      <th className="text-center p-2 border">
                        🛡️ Người kiểm duyệt
                      </th>
                      <th className="text-center p-2 border">
                        📝 Quản lý Hợp đồng
                      </th>
                      <th className="text-center p-2 border">🎧 Hỗ trợ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 border font-medium">
                        Quản lý người dùng
                      </td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">🔍</td>
                      <td className="text-center p-2 border">🔍</td>
                      <td className="text-center p-2 border">🔍</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 border font-medium">
                        Kiểm duyệt nội dung
                      </td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">❌</td>
                      <td className="text-center p-2 border">❌</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 border font-medium">
                        Báo cáo tài chính
                      </td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">🔍</td>
                      <td className="text-center p-2 border">❌</td>
                      <td className="text-center p-2 border">❌</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 border font-medium">
                        Quản lý hợp đồng
                      </td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">❌</td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">❌</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 border font-medium">
                        Cài đặt hệ thống
                      </td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">⚠️</td>
                      <td className="text-center p-2 border">❌</td>
                      <td className="text-center p-2 border">❌</td>
                      <td className="text-center p-2 border">❌</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 border font-medium">Vé hỗ trợ</td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">✅</td>
                      <td className="text-center p-2 border">🔍</td>
                      <td className="text-center p-2 border">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3 text-xs text-gray-600">
                <span className="font-bold">Chú giải:</span> ✅ Toàn quyền | 🔍
                Chỉ đọc | ⚠️ Quyền giới hạn | ❌ Không có quyền
              </div>
            </div>

            {/* Role Assignment */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    21
                  </div>
                  <h3 className="font-semibold">👥 Gán Vai Trò</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <label
                      className="text-sm font-medium block mb-1"
                      htmlFor="select-user"
                    >
                      Chọn người dùng
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      id="select-user"
                    >
                      <option>Tìm và chọn người dùng...</option>
                      <option>Nguyễn Văn Admin</option>
                      <option>Trần Thị Moderator</option>
                      <option>Lê Văn Contract</option>
                      <option>Phạm Thị Support</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium block mb-1"
                      htmlFor="assign-role"
                    >
                      Gán vai trò
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      id="assign-role"
                    >
                      <option>Chọn vai trò...</option>
                      <option>Siêu Admin</option>
                      <option>Admin</option>
                      <option>Người kiểm duyệt</option>
                      <option>Quản lý Hợp đồng</option>
                      <option>Nhân viên Hỗ trợ</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium block mb-1"
                      htmlFor="access-level"
                    >
                      Mức truy cập
                    </label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      id="access-level"
                    >
                      <option>Quyền tiêu chuẩn</option>
                      <option>Quyền giới hạn (theo thời gian)</option>
                      <option>Quyền hạn chế</option>
                      <option>Quyền tuỳ chỉnh</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium block mb-1"
                      htmlFor="effective-date"
                    >
                      Ngày có hiệu lực
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      id="effective-date"
                      type="date"
                    />
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium block mb-1"
                      htmlFor="expiration-date"
                    >
                      Hết hạn (tùy chọn)
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      id="expiration-date"
                      type="date"
                    />
                  </div>
                  <button
                    className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded"
                    type="button"
                  >
                    🔐 Gán Vai Trò
                  </button>
                </div>
              </div>

              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    22
                  </div>
                  <h3 className="font-semibold">⚠️ Thay đổi vai trò gần đây</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-green-50 border border-green-200 rounded">
                    <div className="flex justify-between">
                      <span className="font-medium">Nguyễn Văn An</span>
                      <span className="text-xs text-green-600">
                        5 phút trước
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Được thăng làm Người kiểm duyệt bởi Admin
                    </div>
                  </div>
                  <div className="p-2 bg-orange-50 border border-orange-200 rounded">
                    <div className="flex justify-between">
                      <span className="font-medium">Trần Thị Bình</span>
                      <span className="text-xs text-orange-600">
                        1 giờ trước
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Quyền bị giới hạn - Chờ xem xét
                    </div>
                  </div>
                  <div className="p-2 bg-blue-50 border border-blue-200 rounded">
                    <div className="flex justify-between">
                      <span className="font-medium">Lê Văn Cường</span>
                      <span className="text-xs text-blue-600">2 giờ trước</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Đã gán vai trò Quản lý Hợp đồng
                    </div>
                  </div>
                  <div className="p-2 bg-red-50 border border-red-200 rounded">
                    <div className="flex justify-between">
                      <span className="font-medium">Phạm Thị Dung</span>
                      <span className="text-xs text-red-600">Hôm qua</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Quyền Admin đã bị thu hồi
                    </div>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded mt-2"
                    type="button"
                  >
                    📋 Xem toàn bộ nhật ký kiểm toán
                  </button>
                </div>
              </div>
            </div>

            {/* Current Staff by Role */}
            <div className="border border-gray-300 rounded">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    23
                  </div>
                  <h3 className="font-semibold">
                    👥 Nhân sự hiện tại theo vai trò (63 tổng)
                  </h3>
                  <div className="ml-auto">
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Tất cả vai trò</option>
                      <option>Siêu Admin</option>
                      <option>Admin</option>
                      <option>Người kiểm duyệt</option>
                      <option>Quản lý Hợp đồng</option>
                      <option>Nhân viên Hỗ trợ</option>
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
                          <div>Thành viên</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Vai trò hiện tại</th>
                      <th className="text-left p-3">Phòng ban</th>
                      <th className="text-left p-3">Mức truy cập</th>
                      <th className="text-left p-3">Lần đăng nhập cuối</th>
                      <th className="text-left p-3">Trạng thái</th>
                      <th className="text-left p-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            SA
                          </div>
                          <div>
                            <div className="font-medium">Nguyễn Văn CEO</div>
                            <div className="text-sm text-gray-600">
                              ceo@copyrights.vn
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded font-bold">
                          👑 Siêu Admin
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Ban điều hành</div>
                        <div className="text-xs text-gray-600">
                          Cấp cao (C-Level)
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-red-600">
                          100%
                        </div>
                        <div className="text-xs text-gray-600">
                          Toàn quyền hệ thống
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">2 giờ trước</div>
                        <div className="text-xs text-green-600">
                          🟢 Đang trực tuyến
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Hoạt động
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
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            📋 Kiểm toán
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-orange-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            AD
                          </div>
                          <div>
                            <div className="font-medium">Trần Thị Admin</div>
                            <div className="text-sm text-gray-600">
                              admin@copyrights.vn
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded font-bold">
                          ⚡ Admin
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Vận hành</div>
                        <div className="text-xs text-gray-600">
                          Quản lý nền tảng
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-orange-600">
                          85%
                        </div>
                        <div className="text-xs text-gray-600">
                          Quyền quản lý
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">1 giờ trước</div>
                        <div className="text-xs text-green-600">
                          🟢 Đang trực tuyến
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Hoạt động
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
                            className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded"
                            type="button"
                          >
                            ✏️ Chỉnh sửa
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            MD
                          </div>
                          <div>
                            <div className="font-medium">Lê Văn Moderator</div>
                            <div className="text-sm text-gray-600">
                              mod@copyrights.vn
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded font-bold">
                          🛡️ Người kiểm duyệt
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Nội dung</div>
                        <div className="text-xs text-gray-600">
                          Đảm bảo chất lượng
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-bold text-blue-600">
                          60%
                        </div>
                        <div className="text-xs text-gray-600">
                          Giám sát nội dung
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">30 phút trước</div>
                        <div className="text-xs text-green-600">
                          🟢 Đang trực tuyến
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Hoạt động
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
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            ✏️ Chỉnh sửa
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
                    Hiển thị 1 đến 20 trong tổng số 63 nhân sự
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
                      4
                    </button>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      type="button"
                    >
                      Sau
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
          📝 WF37 - GHI CHÚ QUẢN LÝ VAI TRÒ QUẢN TRỊ
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-blue-600">🔐 Quản lý Vai Trò</div>
            <div className="text-gray-700">
              <strong>❶-❸ Đầu trang Admin:</strong> Điều hướng quản lý vai trò
              <br />
              <strong>❹-❿ Thanh bên:</strong> Các mục quản lý admin
              <br />
              <strong>⓫-⓭ Hành động trang:</strong> Tạo vai trò và nhật ký kiểm
              toán
              <br />
              <strong>⓮-⓲ Tổng quan Vai trò:</strong> Số lượng nhân sự theo loại
              vai trò
              <br />
              <strong>⓳ Cấu trúc Vai Trò:</strong> Trực quan hóa mức quyền
            </div>
          </div>
          <div>
            <div className="font-bold text-blue-600">🎯 Tính năng nâng cao</div>
            <div className="text-gray-700">
              <strong>⓴ Ma trận Quyền:</strong> Lưới kiểm soát truy cập chi tiết
              <br />
              <strong>㉑-㉒ Công cụ Gán:</strong> Gán vai trò và theo dõi thay
              đổi
              <br />
              <strong>㉓-㉕ Quản lý nhân sự:</strong> Tổng quan vai trò nhân sự
              đầy đủ
              <br />
              <strong>Khung Bảo mật:</strong> Kiểm soát truy cập theo thứ bậc
              <br />
              <strong>Hệ thống Kiểm toán:</strong> Theo dõi thay đổi vai trò và
              tuân thủ
              <br />
              <strong>Quyền động:</strong> Tùy chỉnh vai trò linh hoạt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
