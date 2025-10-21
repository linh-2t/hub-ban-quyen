import { createFileRoute } from "@tanstack/react-router";

// Lưu ý: Giữ nguyên một vài thuật ngữ chuyên ngành: Notification Center, Dashboard, DMCA, WebSocket, AI,
// tên sản phẩm (vd. "Modern Logo Pack Vol.3"), URGENT, FLASH50, Load More Notifications

export const Route = createFileRoute("/wireframes/system/notification-center")({
  component: NotificationCenterWireframe,
});

export default function NotificationCenterWireframe() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-purple-600">
        WF30 - TRUNG TÂM THÔNG BÁO
      </h1>

      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-purple-50 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div className="text-sm font-semibold">🏢 Copyright Hub</div>
            </div>
            <div className="px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-xs font-bold text-purple-700">
              Notification Center
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <span className="text-xs">Nguyễn Văn A</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <button className="text-xs text-blue-600 underline" type="button">
                ← Dashboard
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-80 bg-gray-100 border-r-2 border-gray-800 p-4">
            {/* Notification Stats */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <h3 className="font-bold">Tổng quan thông báo</h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      5
                    </div>
                    <span className="text-sm">🔔 Chưa đọc</span>
                  </div>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded font-bold">
                    12
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      6
                    </div>
                    <span className="text-sm">📬 Hôm nay</span>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    8
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      7
                    </div>
                    <span className="text-sm">📅 Tuần này</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    24
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      8
                    </div>
                    <span className="text-sm">📊 Tổng cộng</span>
                  </div>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    147
                  </span>
                </div>
              </div>
            </div>

            {/* Notification Filters */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  9
                </div>
                <h3 className="font-bold">Lọc theo loại</h3>
              </div>

              <div className="space-y-2">
                <button
                  className="w-full text-left p-2 bg-purple-100 border-l-4 border-purple-500 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        10
                      </div>
                      <span>Tất cả thông báo</span>
                    </div>
                    <span className="text-xs text-purple-600 font-bold">
                      (32)
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
                        11
                      </div>
                      <span>💰 Sales & Earnings</span>
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
                        12
                      </div>
                      <span>📦 Đơn hàng & Mua hàng</span>
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
                        13
                      </div>
                      <span>⚖️ Copyright & Legal</span>
                    </div>
                    <span className="text-xs text-gray-500">(3)</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        14
                      </div>
                      <span>🔧 Cập nhật sản phẩm</span>
                    </div>
                    <span className="text-xs text-gray-500">(7)</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        15
                      </div>
                      <span>🎯 Marketing & Khuyến mãi</span>
                    </div>
                    <span className="text-xs text-gray-500">(9)</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  16
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
                      17
                    </div>
                    <span>✅ Đánh dấu tất cả là đã đọc</span>
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
                    <span>🗑️ Xóa thông báo đã đọc</span>
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
                    <span>⚙️ Cài đặt thông báo</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white border border-gray-300 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  20
                </div>
                <h4 className="font-semibold text-sm">Preferences</h4>
              </div>
              <div className="text-xs text-gray-600 space-y-2">
                <div className="flex justify-between items-center">
                  <span>Thông báo email</span>
                  <div className="w-8 h-4 bg-green-400 rounded-full relative">
                    <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Thông báo đẩy (Push)</span>
                  <div className="w-8 h-4 bg-gray-300 rounded-full relative">
                    <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Email tiếp thị</span>
                  <div className="w-8 h-4 bg-green-400 rounded-full relative">
                    <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Notification Header */}
            <div className="border-b-2 border-gray-800 p-4 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    21
                  </div>
                  <h2 className="text-lg font-bold">Thông báo gần đây (32)</h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      22
                    </div>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                      <option>Tất cả thời gian</option>
                      <option>Hôm nay</option>
                      <option>Tuần này</option>
                      <option>Tháng này</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      23
                    </div>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                      <option>Sắp xếp theo ngày</option>
                      <option>Sắp xếp theo loại</option>
                      <option>Sắp xếp theo mức độ ưu tiên</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification List */}
            <div className="p-4">
              <div className="space-y-3">
                {/* New Sale Notification - Unread */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg relative">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      24
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="text-2xl">💰</div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              Bán hàng mới - $24.99
                            </h4>
                            <div className="text-sm text-gray-600">
                              Sales & Earnings
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mb-1"></div>
                          <div className="text-xs text-gray-500">
                            2 phút trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Sản phẩm "Modern Logo Pack Vol.3" của bạn đã được mua
                        bởi buyer_john_doe. Thu nhập: $17.49 (sau phí nền tảng)
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            25
                          </div>
                          <button
                            className="text-xs text-blue-600 underline hover:text-blue-800"
                            type="button"
                          >
                            Xem chi tiết đơn hàng
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            26
                          </div>
                          <button
                            className="text-xs text-blue-600 underline hover:text-blue-800"
                            type="button"
                          >
                            Liên hệ người mua
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Update Notification - Unread */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      27
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="text-2xl">🔧</div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              Sản phẩm được phê duyệt
                            </h4>
                            <div className="text-sm text-gray-600">
                              Cập nhật sản phẩm
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full mb-1"></div>
                          <div className="text-xs text-gray-500">
                            1 giờ trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Sản phẩm "Minimalist Website Template" của bạn đã được
                        phê duyệt và hiện đã xuất hiện trên marketplace. Sản
                        phẩm sẽ hiển thị trong kết quả tìm kiếm trong vòng 30
                        phút.
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            28
                          </div>
                          <button
                            className="text-xs text-blue-600 underline hover:text-blue-800"
                            type="button"
                          >
                            Xem sản phẩm
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            29
                          </div>
                          <button
                            className="text-xs text-blue-600 underline hover:text-blue-800"
                            type="button"
                          >
                            Chia sẻ sản phẩm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Copyright Notice - High Priority */}
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      30
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="text-2xl">⚖️</div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              Thông báo gỡ nội dung DMCA
                            </h4>
                            <div className="text-sm text-gray-600">
                              Copyright & Legal
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-2 py-1 bg-red-500 text-white text-xs rounded-full mb-1">
                            URGENT
                          </div>
                          <div className="text-xs text-gray-500">
                            3 giờ trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Một thông báo gỡ nội dung (DMCA) đã được gửi cho sản
                        phẩm "Corporate Branding Kit" của bạn. Vui lòng phản hồi
                        trong vòng 7 ngày nếu không sản phẩm sẽ bị gỡ.
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            31
                          </div>
                          <button
                            className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700"
                            type="button"
                          >
                            Phản hồi thông báo
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            32
                          </div>
                          <button
                            className="text-xs text-blue-600 underline hover:text-blue-800"
                            type="button"
                          >
                            Xem toàn bộ thông báo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Purchase Notification - Read */}
                <div className="bg-white border-l-4 border-green-500 p-4 rounded-lg opacity-75">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      33
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="text-2xl">📦</div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              Xác nhận mua hàng
                            </h4>
                            <div className="text-sm text-gray-600">
                              Orders & Purchases
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">
                            1 ngày trước
                          </div>
                          <div className="text-xs text-green-600">✓ Đã đọc</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Giao dịch mua "Photography Bundle Mega Pack" với giá
                        $49.99 đã được xác nhận. Liên kết tải xuống có trong thư
                        viện của bạn.
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            34
                          </div>
                          <button
                            className="text-xs text-blue-600 underline hover:text-blue-800"
                            type="button"
                          >
                            Tải xuống tập tin
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            35
                          </div>
                          <button
                            className="text-xs text-blue-600 underline hover:text-blue-800"
                            type="button"
                          >
                            Xem hóa đơn
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marketing Notification - Read */}
                <div className="bg-white border-l-4 border-purple-500 p-4 rounded-lg opacity-75">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      36
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="text-2xl">🎯</div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              Flash Sale: Giảm 50% tất cả đồ họa
                            </h4>
                            <div className="text-sm text-gray-600">
                              Marketing & Promos
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">
                            2 ngày trước
                          </div>
                          <div className="text-xs text-green-600">✓ Đã đọc</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Ưu đãi có giới hạn! Giảm 50% tất cả sản phẩm thiết kế đồ
                        họa. Khuyến mãi kết thúc trong 48 giờ. Mã: FLASH50
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            37
                          </div>
                          <button
                            className="bg-purple-600 text-white px-3 py-1 rounded text-xs hover:bg-purple-700"
                            type="button"
                          >
                            Mua ngay
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            38
                          </div>
                          <button
                            className="text-xs text-blue-600 underline hover:text-blue-800"
                            type="button"
                          >
                            Chia sẻ với bạn bè
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    39
                  </div>
                  <button
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 px-6 py-2 rounded"
                    type="button"
                  >
                    Load More Notifications
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
              <strong>❶ Branding:</strong> Chỉ báo phần trung tâm thông báo
              <br />
              <strong>❷ User Context:</strong> Hiển thị tên người dùng hiện tại
              <br />
              <strong>❸ Navigation:</strong> Trở về Dashboard tương ứng
              <br />
              <strong>Access Control:</strong> Người dùng chỉ thấy thông báo của
              chính họ
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ❹❺❆❼❽ Notification Statistics
            </div>
            <div className="text-gray-700">
              <strong>❹ Summary Header:</strong> Tổng quan số lượng thông báo
              <br />
              <strong>❺ Unread Count:</strong> Thông báo chưa đọc cần chú ý
              <br />
              <strong>❻ Today's Count:</strong> Thông báo nhận được hôm nay
              <br />
              <strong>❼ Weekly Count:</strong> Thông báo trong tuần hiện tại
              <br />
              <strong>❽ Total Count:</strong> Tổng tất cả thông báo trong lịch
              sử
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ❾❿⓫⓬⓭⓮⓯ Notification Filters
            </div>
            <div className="text-gray-700">
              <strong>Filter categories:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>❿ All Notifications:</strong> Toàn bộ luồng thông báo
                </li>
                <li>
                  <strong>⓫ Sales & Earnings:</strong> Thông báo liên quan doanh
                  thu
                </li>
                <li>
                  <strong>⓬ Orders & Purchases:</strong> Xác nhận giao dịch
                </li>
                <li>
                  <strong>⓭ Copyright & Legal:</strong> Thông báo pháp lý và
                  tranh chấp
                </li>
                <li>
                  <strong>⓮ Product Updates:</strong> Thay đổi trạng thái sản
                  phẩm
                </li>
                <li>
                  <strong>⓯ Marketing & Promos:</strong> Thông báo khuyến mãi
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ⓰⓱⓲⓳⓴ Quick Actions & Preferences
            </div>
            <div className="text-gray-700">
              <strong>Quick management options:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>⓱ Mark All Read:</strong> Hành động đánh dấu hàng loạt
                  là đã đọc
                </li>
                <li>
                  <strong>⓲ Clear Read:</strong> Xóa thông báo cũ đã đọc
                </li>
                <li>
                  <strong>⓳ Settings:</strong> Cấu hình tùy chọn thông báo
                </li>
              </ul>
              <strong>⓴ Preference Toggles:</strong> Điều khiển email, push,
              marketing notifications
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉑㉒㉓ Notification Management
            </div>
            <div className="text-gray-700">
              <strong>㉑ Notification Header:</strong> Tổng số và hành động hàng
              loạt
              <br />
              <strong>㉒ Time Filter:</strong> Lọc theo khoảng thời gian
              <br />
              <strong>㉓ Sort Options:</strong> Sắp xếp theo ngày, loại, độ ưu
              tiên
              <br />
              <strong>Performance:</strong> Phân trang cho bộ thông báo lớn
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉔㉕㉖ Sales Notification
            </div>
            <div className="text-gray-700">
              <strong>㉔ Unread Indicator:</strong> Chấm xanh biểu thị chưa đọc
              <br />
              <strong>㉕ Action Buttons:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Xem chi tiết đơn hàng để biết thông tin giao dịch</li>
                <li>Liên hệ người mua để trao đổi với khách hàng</li>
                <li>Truy cập nhanh các hành động liên quan</li>
              </ul>
              <strong>㉖ Buyer Information:</strong> Identifier người mua ẩn
              danh
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉗㉘㉙ Product Update Notification
            </div>
            <div className="text-gray-700">
              <strong>㉗ Product Status:</strong> Xác nhận phê duyệt sản phẩm
              <br />
              <strong>㉘ View Product:</strong> Liên kết trực tiếp đến sản phẩm
              đã phê duyệt
              <br />
              <strong>㉙ Social Sharing:</strong> Chia sẻ sản phẩm đã phê duyệt
              <br />
              <strong>Timeline Info:</strong> Sản phẩm xuất hiện trong 30 phút
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉚㉛㉜ Legal Notice
            </div>
            <div className="text-gray-700">
              <strong>㉚ Priority Indicator:</strong> Nhãn URGENT cho thông báo
              pháp lý
              <br />
              <strong>㉛ Response Action:</strong> Hành động trực tiếp để phản
              hồi DMCA
              <br />
              <strong>㉜ Legal Documentation:</strong> Xem toàn bộ thông báo
              pháp lý
              <br />
              <strong>Compliance:</strong> Cửa sổ phản hồi 7 ngày được nêu rõ
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉝㉞㉟ Purchase & Order Management
            </div>
            <div className="text-gray-700">
              <strong>㉝ Read Status:</strong> Mờ đi để biểu thị trạng thái đã
              đọc
              <br />
              <strong>㉞ Download Access:</strong> Liên kết tải tập tin mua về
              <br />
              <strong>㉟ Receipt Access:</strong> Hồ sơ giao dịch
              <br />
              <strong>File Management:</strong> Tích hợp với hệ thống tải xuống
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㊱㊲㊳ Marketing & Engagement
            </div>
            <div className="text-gray-700">
              <strong>㊱ Promotional Content:</strong> Hiển thị nội dung khuyến
              mãi
              <br />
              <strong>㊲ Shopping Action:</strong> Liên kết trực tiếp tới ưu đãi
              <br />
              <strong>㊳ Social Features:</strong> Chia sẻ ưu đãi với bạn bè
              <br />
              <strong>Engagement:</strong> Theo dõi hiệu quả chiến dịch
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">㊴ Load More</div>
            <div className="text-gray-700">
              <strong>Pagination:</strong> Tải thêm thông báo từng phần
              <br />
              <strong>Performance:</strong> Tránh làm quá tải giao diện
              <br />
              <strong>User Control:</strong> Người dùng quyết định khi nào tải
              thêm
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            🔔 LOẠI THÔNG BÁO
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              <strong>Sales & Earnings:</strong> Đơn hàng mới, báo cáo doanh
              thu, xác nhận thanh toán
            </li>
            <li>
              <strong>Orders & Purchases:</strong> Xác nhận đơn hàng, thông báo
              giao hàng, thông báo sẵn sàng tải xuống
            </li>
            <li>
              <strong>Copyright & Legal:</strong> Thông báo DMCA, tranh chấp bản
              quyền, cập nhật pháp lý
            </li>
            <li>
              <strong>Product Updates:</strong> Trạng thái phê duyệt, lý do từ
              chối, kiểm duyệt nội dung
            </li>
            <li>
              <strong>Marketing & Promos:</strong> Flash sale, giảm giá, thông
              báo tính năng mới
            </li>
            <li>
              <strong>System Notifications:</strong> Thay đổi tài khoản, cảnh
              báo bảo mật, thông báo bảo trì
            </li>
            <li>
              <strong>Social Notifications:</strong> Đánh giá, bình luận, cập
              nhật theo dõi
            </li>
            <li>
              <strong>Support Notifications:</strong> Cập nhật ticket, xác nhận
              giải quyết
            </li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">
          <div className="font-bold text-blue-800 mb-2">
            ⚡ CƠ CHẾ GIAO THÔNG THÔNG BÁO
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Giao nhận thời gian thực:</strong> Kết nối WebSocket cho
              thông báo tức thì
            </li>
            <li>
              <strong>Thông báo email:</strong> Gửi email tùy chọn cho thông báo
              quan trọng
            </li>
            <li>
              <strong>Push notifications:</strong> Push trình duyệt/di động cho
              cảnh báo quan trọng
            </li>
            <li>
              <strong>Batching:</strong> Gom nhóm thông báo tương tự để giảm
              nhiễu
            </li>
            <li>
              <strong>Priority levels:</strong> Chỉ báo mức độ URGENT, HIGH,
              NORMAL, LOW
            </li>
            <li>
              <strong>Read receipts:</strong> Theo dõi tỷ lệ tương tác với thông
              báo
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            🎯 TRẢI NGHIỆM NGƯỜI DÙNG
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Visual hierarchy:</strong> Mã màu và biểu tượng để dễ quét
            </li>
            <li>
              <strong>Actionable notifications:</strong> Nút hành động trực tiếp
              cho nhiệm vụ liên quan
            </li>
            <li>
              <strong>Contextual information:</strong> Nội dung phong phú với
              thông tin liên quan
            </li>
            <li>
              <strong>Smart filtering:</strong> Phân loại và phát hiện ưu tiên
              bằng AI
            </li>
            <li>
              <strong>Personalization:</strong> Tùy chọn thông báo do người dùng
              điều khiển
            </li>
            <li>
              <strong>Performance:</strong> Tải nhanh và giao diện đáp ứng
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
