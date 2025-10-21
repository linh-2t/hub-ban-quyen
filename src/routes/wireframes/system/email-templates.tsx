import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/system/email-templates")({
  component: EmailTemplatesWireframe,
});

export default function EmailTemplatesWireframe() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-purple-600">
        WF31 - HỆ THỐNG TEMPLATE EMAIL
      </h1>

      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-purple-50 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div className="text-sm font-semibold">
                🏢 Copyright Hub - Admin
              </div>
            </div>
            <div className="px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-xs font-bold text-purple-700">
              QUẢN LÝ TEMPLATE EMAIL
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <span className="text-xs">Admin User</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <button className="text-xs text-blue-600 underline" type="button">
                ← Admin Dashboard
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-80 bg-gray-100 border-r-2 border-gray-800 p-4">
            {/* Create New Template */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <button
                  className="flex-1 bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700"
                  type="button"
                >
                  ➕ Create New Template
                </button>
              </div>
            </div>

            {/* Template Categories */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <h3 className="font-bold">Danh mục Template</h3>
              </div>

              <div className="space-y-2">
                <button
                  className="w-full text-left p-2 bg-purple-100 border-l-4 border-purple-500 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        6
                      </div>
                      <span>📧 Tất cả Templates</span>
                    </div>
                    <span className="text-xs text-purple-600 font-bold">
                      (23)
                    </span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        7
                      </div>
                      <span>🔐 Authentication</span>
                    </div>
                    <span className="text-xs text-gray-500">(8)</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        8
                      </div>
                      <span>💰 Transaction</span>
                    </div>
                    <span className="text-xs text-gray-500">(6)</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        9
                      </div>
                      <span>🎯 Marketing</span>
                    </div>
                    <span className="text-xs text-gray-500">(5)</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        10
                      </div>
                      <span>🔧 System</span>
                    </div>
                    <span className="text-xs text-gray-500">(4)</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Template Statistics */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  11
                </div>
                <h3 className="font-bold">Thống kê sử dụng Template</h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      12
                    </div>
                    <span className="text-sm">📤 Đã gửi hôm nay</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    247
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      13
                    </div>
                    <span className="text-sm">📊 Tuần này</span>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    1,423
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      14
                    </div>
                    <span className="text-sm">📈 Tháng này</span>
                  </div>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                    5,891
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  15
                </div>
                <h3 className="font-bold">Hành động nhanh</h3>
              </div>

              <div className="space-y-2">
                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      16
                    </div>
                    <span>📋 Import Templates</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      17
                    </div>
                    <span>📤 Export Templates</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      18
                    </div>
                    <span>🔄 Sync Templates</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      19
                    </div>
                    <span>📊 Usage Analytics</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Global Settings */}
            <div className="bg-white border border-gray-300 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  20
                </div>
                <h4 className="font-semibold text-sm">Cài đặt chung</h4>
              </div>
              <div className="text-xs text-gray-600 space-y-2">
                <div className="flex justify-between items-center">
                  <span>Tự lưu nháp</span>
                  <div className="w-8 h-4 bg-green-400 rounded-full relative">
                    <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Quản lý phiên bản</span>
                  <div className="w-8 h-4 bg-green-400 rounded-full relative">
                    <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Xác thực Template</span>
                  <div className="w-8 h-4 bg-green-400 rounded-full relative">
                    <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Template List Header */}
            <div className="border-b-2 border-gray-800 p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    21
                  </div>
                  <h2 className="text-lg font-bold">
                    Danh sách Template Email (23)
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      22
                    </div>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                      <option>Tất cả danh mục</option>
                      <option>Authentication</option>
                      <option>Transaction</option>
                      <option>Marketing</option>
                      <option>System</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      23
                    </div>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                      <option>Tất cả trạng thái</option>
                      <option>Hoạt động</option>
                      <option>Bản nháp</option>
                      <option>Lưu trữ</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    24
                  </div>
                  <input
                    className="border border-gray-300 rounded px-3 py-1 text-sm w-64"
                    placeholder="Tìm kiếm templates..."
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    25
                  </div>
                  <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>Sắp xếp theo Tên</option>
                    <option>Sắp xếp theo Lượt sử dụng</option>
                    <option>Sắp xếp theo Ngày</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Template Grid */}
            <div className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Welcome Email Template */}
                <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      26
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Email Chào mừng
                          </h4>
                          <div className="text-sm text-gray-600">
                            Authentication • ID: TPL-001
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mb-1">
                            ✅ Hoạt động
                          </div>
                          <div className="text-xs text-gray-500">
                            Cập nhật: 2 ngày trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Chào mừng người dùng mới đến với nền tảng Copyright Hub.
                        Bao gồm hướng dẫn bắt đầu và hướng dẫn xác thực tài
                        khoản.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              27
                            </div>
                            <span>Được sử dụng 847 lần trong tháng này</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            28
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Preview
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            29
                          </div>
                          <button
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded hover:bg-purple-200"
                            type="button"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Purchase Confirmation Template */}
                <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      30
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Xác nhận mua hàng
                          </h4>
                          <div className="text-sm text-gray-600">
                            Transaction • ID: TPL-008
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mb-1">
                            ✅ Hoạt động
                          </div>
                          <div className="text-xs text-gray-500">
                            Cập nhật: 1 tuần trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Xác nhận giao dịch thành công và cung cấp liên kết tải
                        xuống. Bao gồm thông tin hóa đơn và chi tiết hỗ trợ
                        khách hàng.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              31
                            </div>
                            <span>Được sử dụng 1,243 lần trong tháng này</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            32
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Preview
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            33
                          </div>
                          <button
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded hover:bg-purple-200"
                            type="button"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Password Reset Template */}
                <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      34
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Đặt lại mật khẩu
                          </h4>
                          <div className="text-sm text-gray-600">
                            Authentication • ID: TPL-003
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mb-1">
                            ✅ Hoạt động
                          </div>
                          <div className="text-xs text-gray-500">
                            Cập nhật: 3 ngày trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Email đặt lại mật khẩu an toàn với liên kết giới hạn
                        thời gian. Bao gồm mẹo bảo mật và phương thức khôi phục
                        thay thế.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              35
                            </div>
                            <span>Được sử dụng 156 lần trong tháng này</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            36
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Preview
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            37
                          </div>
                          <button
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded hover:bg-purple-200"
                            type="button"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DMCA Notice Template */}
                <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      38
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Thông báo DMCA
                          </h4>
                          <div className="text-sm text-gray-600">
                            System • ID: TPL-019
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full mb-1">
                            📝 Bản nháp
                          </div>
                          <div className="text-xs text-gray-500">
                            Cập nhật: 1 ngày trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Mẫu thông báo DMCA chính thức cho các trường hợp vi phạm
                        bản quyền. Bao gồm yêu cầu pháp lý và thủ tục phản hồi.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              39
                            </div>
                            <span>Được sử dụng 23 lần trong tháng này</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            40
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Preview
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            41
                          </div>
                          <button
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded hover:bg-purple-200"
                            type="button"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weekly Sales Report Template */}
                <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      42
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Báo cáo bán hàng hàng tuần
                          </h4>
                          <div className="text-sm text-gray-600">
                            Marketing • ID: TPL-015
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mb-1">
                            ✅ Hoạt động
                          </div>
                          <div className="text-xs text-gray-500">
                            Cập nhật: 5 ngày trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Tổng hợp doanh thu hàng tuần tự động cho người bán. Bao
                        gồm phân tích thu nhập, sản phẩm bán chạy và xu hướng
                        tăng trưởng.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              43
                            </div>
                            <span>Được sử dụng 456 lần trong tháng này</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            44
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Preview
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            45
                          </div>
                          <button
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded hover:bg-purple-200"
                            type="button"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Promotional Newsletter Template */}
                <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      46
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Bản tin khuyến mãi
                          </h4>
                          <div className="text-sm text-gray-600">
                            Marketing • ID: TPL-012
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full mb-1">
                            📁 Lưu trữ
                          </div>
                          <div className="text-xs text-gray-500">
                            Cập nhật: 2 tháng trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Mẫu bản tin hàng tháng giới thiệu sản phẩm mới, khuyến
                        mãi và hoạt động cộng đồng. Template HTML phong phú,
                        thiết kế đáp ứng.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              47
                            </div>
                            <span>Được sử dụng 0 lần trong tháng này</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            48
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Preview
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            49
                          </div>
                          <button
                            className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200"
                            type="button"
                          >
                            Restore
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  Hiển thị 6 trên 23 templates
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    50
                  </div>
                  <button
                    className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50"
                    type="button"
                  >
                    ← Trước
                  </button>
                  <span className="px-3 py-2 bg-purple-600 text-white rounded">
                    1
                  </span>
                  <button
                    className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50"
                    type="button"
                  >
                    2
                  </button>
                  <button
                    className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50"
                    type="button"
                  >
                    3
                  </button>
                  <button
                    className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50"
                    type="button"
                  >
                    Tiếp →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-purple-800">
          CHÚ THÍCH CHI TIẾT
        </h2>

        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ❶❷❸ Header & Navigation
            </div>
            <div className="text-gray-700">
              <strong>❶ Thương hiệu Admin:</strong> Phần quản lý template email
              <br />
              <strong>❂ Ngữ cảnh người dùng:</strong> Hiển thị danh tính người
              dùng admin
              <br />
              <strong>❸ Điều hướng:</strong> Trở về Admin Dashboard
              <br />
              <strong>Kiểm soát truy cập:</strong> Chỉ người dùng Admin được
              quản lý template
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ❹❺❻❼❽❾❿ Tổ chức Template
            </div>
            <div className="text-gray-700">
              <strong>❹ Tạo Template:</strong> Mở wizard tạo Template
              <br />
              <strong>❺ Quản lý danh mục:</strong> Tổ chức templates theo mục
              đích
              <br />
              <strong>Danh mục template:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>❻ Tất cả Templates:</strong> Tập hợp toàn bộ template
                </li>
                <li>
                  <strong>❼ Authentication:</strong> Email đăng nhập, đăng ký,
                  xác thực
                </li>
                <li>
                  <strong>❽ Transaction:</strong> Xác nhận thanh toán, hóa đơn
                </li>
                <li>
                  <strong>❾ Marketing:</strong> Bản tin, khuyến mãi, thông báo
                </li>
                <li>
                  <strong>❿ System:</strong> Thông báo tự động, thông báo pháp
                  lý
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ⓫⓬⓭⓮ Thống kê Template
            </div>
            <div className="text-gray-700">
              <strong>⓫ Thống kê sử dụng:</strong> Theo dõi hiệu suất template
              <br />
              <strong>⓬ Số liệu hàng ngày:</strong> Templates đã gửi trong ngày
              <br />
              <strong>⓭ Số liệu hàng tuần:</strong> Tổng hợp 7 ngày
              <br />
              <strong>⓮ Số liệu hàng tháng:</strong> Theo dõi sử dụng theo tháng
              <br />
              <strong>Phân tích hiệu suất:</strong> Xác định template sử dụng
              nhiều/ít nhất
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ⓯⓰⓱⓲⓳⓴ Công cụ quản lý
            </div>
            <div className="text-gray-700">
              <strong>Tùy chọn quản lý nhanh:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>⓰ Import Templates:</strong> Nhập hàng loạt từ nguồn
                  bên ngoài
                </li>
                <li>
                  <strong>⓱ Export Templates:</strong> Sao lưu bộ template
                </li>
                <li>
                  <strong>⓲ Sync Templates:</strong> Đồng bộ với hệ thống bên
                  ngoài
                </li>
                <li>
                  <strong>⓳ Analytics:</strong> Báo cáo chi tiết về sử dụng
                </li>
              </ul>
              <strong>⓴ Cài đặt chung:</strong> Tự lưu, quản lý phiên bản, xác
              thực
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉑㉒㉓㉔㉕ Quản lý Template
            </div>
            <div className="text-gray-700">
              <strong>㉑ Tổng quan Template:</strong> Số lượng và tùy chọn quản
              lý
              <br />
              <strong>㉒ Lọc theo danh mục:</strong> Lọc theo category
              <br />
              <strong>㉓ Lọc theo trạng thái:</strong> Lọc theo
              Active/Draft/Archived
              <br />
              <strong>㉔ Tìm kiếm:</strong> Tìm template theo tên hoặc nội dung
              <br />
              <strong>㉕ Tùy chọn sắp xếp:</strong> Sắp xếp theo tên, lượt sử
              dụng, ngày
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉖㉗㉘㉙ Template đang hoạt động
            </div>
            <div className="text-gray-700">
              <strong>㉖ Template Chào mừng:</strong> Template authentication có
              lượng sử dụng cao
              <br />
              <strong>㉗ Số liệu sử dụng:</strong> Thống kê theo tháng
              <br />
              <strong>㉘ Chức năng Preview:</strong> Xem trước template đã
              render
              <br />
              <strong>㉙ Chức năng Edit:</strong> Chỉnh sửa nội dung template
              <br />
              <strong>Trạng thái template:</strong> Active, sẵn sàng sử dụng
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉚㉛㉜㉝ Template giao dịch
            </div>
            <div className="text-gray-700">
              <strong>㉚ Xác nhận mua hàng:</strong> Template giao dịch quan
              trọng
              <br />
              <strong>㉛ Lượng sử dụng cao:</strong> Template được dùng nhiều
              nhất (1,243 lần)
              <br />
              <strong>㉜ Truy cập Preview:</strong> Xem trước giao diện template
              <br />
              <strong>㉝ Truy cập Edit:</strong> Chỉnh sửa nội dung xác nhận
              <br />
              <strong>Tác động kinh doanh:</strong> Giao tiếp trực tiếp với
              khách hàng
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉞㉟㊱㊲ Template bảo mật
            </div>
            <div className="text-gray-700">
              <strong>㉞ Đặt lại mật khẩu:</strong> Template quan trọng về bảo
              mật
              <br />
              <strong>㉟ Lượt sử dụng vừa phải:</strong> 156 lần/tháng
              <br />
              <strong>㊱ Xem trước bảo mật:</strong> Kiểm tra thông điệp bảo mật
              <br />
              <strong>㊲ Chỉnh sửa bảo mật:</strong> Sửa nội dung liên quan tới
              bảo mật
              <br />
              <strong>Yêu cầu bảo mật:</strong> Liên kết giới hạn thời gian,
              hướng dẫn rõ ràng
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㊳㊴㊵㊶ Template pháp lý
            </div>
            <div className="text-gray-700">
              <strong>㊳ Thông báo DMCA:</strong> Mẫu văn bản pháp lý
              <br />
              <strong>㊴ Trạng thái bản nháp:</strong> Đang xem xét / phát triển
              <br />
              <strong>㊵ Xem trước pháp lý:</strong> Kiểm tra nội dung pháp lý
              <br />
              <strong>㊶ Chỉnh sửa pháp lý:</strong> Điều chỉnh ngôn ngữ pháp lý
              <br />
              <strong>Tuân thủ pháp lý:</strong> Phải đáp ứng yêu cầu pháp luật
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㊷㊸㊹㊺ Template báo cáo
            </div>
            <div className="text-gray-700">
              <strong>㊷ Báo cáo bán hàng:</strong> Template tự động cho báo cáo
              doanh nghiệp
              <br />
              <strong>㊸ Sử dụng định kỳ:</strong> 456 lần/tháng gửi tự động
              <br />
              <strong>㊹ Xem trước báo cáo:</strong> Kiểm tra định dạng báo cáo
              <br />
              <strong>㊺ Chỉnh sửa báo cáo:</strong> Điều chỉnh nội dung báo cáo
              <br />
              <strong>Tự động hóa:</strong> Giao hàng theo lịch hàng tuần
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㊻㊼㊽㊾ Template đã lưu trữ
            </div>
            <div className="text-gray-700">
              <strong>㊻ Template bản tin:</strong> Template marketing đã lưu
              trữ
              <br />
              <strong>㊼ Không sử dụng:</strong> Hiện không được dùng
              <br />
              <strong>㊽ Xem trước lưu trữ:</strong> Kiểm tra nội dung đã lưu
              <br />
              <strong>㊾ Tùy chọn phục hồi:</strong> Kích hoạt lại template
              <br />
              <strong>Quản lý lưu trữ:</strong> Duy trì lịch sử template
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">㊿ Phân trang</div>
            <div className="text-gray-700">
              <strong>Điều hướng template:</strong> Xử lý bộ sưu tập lớn
              <br />
              <strong>Duy trì bộ lọc:</strong> Giữ bộ lọc khi chuyển trang
              <br />
              <strong>Hiệu năng:</strong> Tải hiệu quả cho trải nghiệm tốt hơn
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📧 EMAIL TEMPLATE SYSTEM
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              <strong>Tạo Template:</strong> Trình chỉnh sửa WYSIWYG với hỗ trợ
              biến (variable)
            </li>
            <li>
              <strong>Hệ thống biến:</strong> Chèn nội dung động (tên, đơn hàng,
              ngày tháng)
            </li>
            <li>
              <strong>Hệ thống xem trước:</strong> Xem trước template theo thời
              gian thực với dữ liệu mẫu
            </li>
            <li>
              <strong>Quản lý phiên bản:</strong> Theo dõi thay đổi template và
              khả năng rollback
            </li>
            <li>
              <strong>A/B Testing:</strong> Thử nghiệm các phiên bản template
            </li>
            <li>
              <strong>Gửi tự động:</strong> Giao hàng dựa trên trigger
            </li>
            <li>
              <strong>Phân tích:</strong> Theo dõi open rates, click rates,
              engagement
            </li>
            <li>
              <strong>Tuân thủ:</strong> Công cụ hỗ trợ GDPR, CAN-SPAM
            </li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">
          <div className="font-bold text-blue-800 mb-2">
            ⚡ TÍNH NĂNG TEMPLATE
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Trình chỉnh sửa Rich HTML:</strong> Trải nghiệm chỉnh sửa
              WYSIWYG đầy đủ
            </li>
            <li>
              <strong>Thiết kế đáp ứng:</strong> Template tối ưu cho di động
            </li>
            <li>
              <strong>Chèn biến:</strong> Nội dung động từ database
            </li>
            <li>
              <strong>Logic điều kiện:</strong> Hiển thị/ẩn nội dung theo điều
              kiện
            </li>
            <li>
              <strong>Hỗ trợ đa ngôn ngữ:</strong> Phiên bản template đã được
              bản địa hóa
            </li>
            <li>
              <strong>Kế thừa template:</strong> Template cơ sở với các biến thể
              con
            </li>
            <li>
              <strong>Thao tác hàng loạt:</strong> Hành động quản lý template số
              lượng lớn
            </li>
            <li>
              <strong>Tích hợp sẵn sàng:</strong> API access cho hệ thống bên
              ngoài
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            🔒 BẢO MẬT & TUÂN THỦ
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Xác thực nội dung:</strong> Ngăn chặn XSS và tấn công
              injection
            </li>
            <li>
              <strong>Kiểm soát truy cập:</strong> Quản lý template theo vai trò
            </li>
            <li>
              <strong>Ghi nhật ký kiểm toán:</strong> Theo dõi mọi thay đổi
              template
            </li>
            <li>
              <strong>Hệ thống sao lưu:</strong> Sao lưu template tự động
            </li>
            <li>
              <strong>Tuân thủ pháp lý:</strong> Công cụ hỗ trợ GDPR, CAN-SPAM
            </li>
            <li>
              <strong>Giới hạn tỷ lệ:</strong> Ngăn lạm dụng email và spam
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
