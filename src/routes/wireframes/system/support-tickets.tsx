import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/system/support-tickets")({
  component: SupportTicketsWireframe,
});

export default function SupportTicketsWireframe() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-purple-600">
        WF29 - HỆ THỐNG TICKET HỖ TRỢ
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
              TRUNG TÂM HỖ TRỢ
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
                ← dashboard
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-80 bg-gray-100 border-r-2 border-gray-800 p-4">
            {/* Create New Ticket */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <button
                  className="flex-1 bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700"
                  type="button"
                >
                  ➕ Create New ticket
                </button>
              </div>
            </div>

            {/* Ticket Statistics */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <h3 className="font-bold">Ticket của tôi</h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      6
                    </div>
                    <span className="text-sm">🔴 High Priority</span>
                  </div>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                    2
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      7
                    </div>
                    <span className="text-sm">🟡 Open</span>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    5
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      8
                    </div>
                    <span className="text-sm">🔵 In Progress</span>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    3
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      9
                    </div>
                    <span className="text-sm">✅ Resolved</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    12
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  10
                </div>
                <h3 className="font-bold">Trợ giúp nhanh</h3>
              </div>

              <div className="space-y-2">
                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      11
                    </div>
                    <span>📚 Knowledge Base</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      12
                    </div>
                    <span>❓ FAQ</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      13
                    </div>
                    <span>💬 Live Chat</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      14
                    </div>
                    <span>📞 Phone Support</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white border border-gray-300 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  15
                </div>
                <h4 className="font-semibold text-sm">Thông tin liên hệ</h4>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div>📧 support@copyrighthub.com</div>
                <div>📞 +84 (0) 123-456-789</div>
                <div>🕒 Thứ Hai - Thứ Sáu: 9:00 - 18:00 (GMT+7)</div>
                <div>⚡ Thời gian phản hồi trung bình: 2-4 giờ</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Ticket List Header */}
            <div className="border-b-2 border-gray-800 p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <h2 className="text-lg font-bold">
                    Danh sách Support Tickets (22)
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      17
                    </div>
                    <select
                      aria-label="Bộ lọc trạng thái"
                      className="border border-gray-300 rounded px-3 py-1 text-sm"
                    >
                      <option>Tất cả trạng thái</option>
                      <option>Open</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                      <option>Closed</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      18
                    </div>
                    <select
                      aria-label="Bộ lọc danh mục"
                      className="border border-gray-300 rounded px-3 py-1 text-sm"
                    >
                      <option>Tất cả danh mục</option>
                      <option>Technical Issue</option>
                      <option>Payment Problem</option>
                      <option>Account Access</option>
                      <option>Copyright Dispute</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <input
                    aria-label="Tìm kiếm ticket"
                    className="border border-gray-300 rounded px-3 py-1 text-sm w-64"
                    placeholder="Tìm kiếm ticket..."
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    20
                  </div>
                  <select
                    aria-label="Sắp xếp"
                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                  >
                    <option>Sắp xếp theo ngày</option>
                    <option>Sắp xếp theo priority</option>
                    <option>Sắp xếp theo trạng thái</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Ticket List */}
            <div className="p-4">
              <div className="space-y-4">
                {/* Ticket 1 - High Priority */}
                <div className="bg-white border-l-4 border-red-500 border border-gray-300 rounded-lg p-4 hover:shadow-md cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      21
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Thanh toán thất bại nhưng tiền đã bị trừ
                          </h4>
                          <div className="text-sm text-gray-600">
                            Category: Payment Problem • ID: #TKT-12345
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full mb-1">
                            🔴 High Priority
                          </div>
                          <div className="text-xs text-gray-500">
                            Tạo: 2 giờ trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Tôi đã cố mua gói template $29.99. Trang thanh toán báo
                        lỗi, nhưng sao kê ngân hàng vẫn ghi trừ tiền. Xin hỗ
                        trợ...
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              22
                            </div>
                            <span>
                              Lần trả lời cuối: Support Team - 30 phút trước
                            </span>
                          </div>
                          <span>3 tin nhắn</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                            🟡 Open
                          </span>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            23
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ticket 2 - In Progress */}
                <div className="bg-white border-l-4 border-blue-500 border border-gray-300 rounded-lg p-4 hover:shadow-md cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      24
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Không thể tải xuống các file đã mua
                          </h4>
                          <div className="text-sm text-gray-600">
                            Category: Technical Issue • ID: #TKT-12344
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-1">
                            🔵 In Progress
                          </div>
                          <div className="text-xs text-gray-500">
                            Tạo: 1 ngày trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Tôi đã mua một bundle ảnh ngày hôm qua nhưng việc tải
                        xuống liên tục thất bại. Báo lỗi "Access Denied". Order
                        #ORD-12340...
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              25
                            </div>
                            <span>
                              Lần trả lời cuối: Technical Team - 2 giờ trước
                            </span>
                          </div>
                          <span>7 tin nhắn</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            🔵 In Progress
                          </span>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            26
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ticket 3 - Resolved */}
                <div className="bg-white border-l-4 border-green-500 border border-gray-300 rounded-lg p-4 hover:shadow-md cursor-pointer opacity-75">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      27
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Cách thay đổi địa chỉ email?
                          </h4>
                          <div className="text-sm text-gray-600">
                            Category: Account Access • ID: #TKT-12343
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-1">
                            ✅ Resolved
                          </div>
                          <div className="text-xs text-gray-500">
                            Tạo: 3 ngày trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Tôi cần cập nhật địa chỉ email cho tài khoản. Quy trình
                        như thế nào?
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              28
                            </div>
                            <span>
                              Đã giải quyết bởi: Support Team - 2 ngày trước
                            </span>
                          </div>
                          <span>4 tin nhắn</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              29
                            </div>
                            <button
                              className="text-xs text-blue-600 underline hover:text-blue-800"
                              type="button"
                            >
                              Đánh giá chất lượng giải quyết
                            </button>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            ✅ Resolved
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ticket 4 - Copyright Dispute */}
                <div className="bg-white border-l-4 border-orange-500 border border-gray-300 rounded-lg p-4 hover:shadow-md cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      30
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Khiếu nại bản quyền trên thiết kế tôi đã upload
                          </h4>
                          <div className="text-sm text-gray-600">
                            Category: Copyright Dispute • ID: #TKT-12342
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full mb-1">
                            ⚖️ Under Review
                          </div>
                          <div className="text-xs text-gray-500">
                            Tạo: 5 ngày trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Có người gửi khiếu nại bản quyền đối với thiết kế gốc
                        của tôi. Tôi có bằng chứng sáng tạo và quyền sở hữu.
                        Product ID: PRD-78945...
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              31
                            </div>
                            <span>
                              Lần trả lời cuối: Legal Team - 1 ngày trước
                            </span>
                          </div>
                          <span>8 tin nhắn</span>
                          <span>📎 3 attachments</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                            ⚖️ Under Review
                          </span>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            32
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  Hiển thị 1-4 trong số 22 tickets
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    33
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
              <strong>❶ Branding:</strong> Chỉ báo phần hỗ trợ
              <br />
              <strong>❷ User Context:</strong> Hiển thị tên người dùng hiện tại
              <br />
              <strong>❸ Navigation:</strong> Quay về dashboard tương ứng
              <br />
              <strong>Quyền truy cập:</strong> Người dùng chỉ thấy tickets của
              chính họ
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ❹❺❻❼❽❾ Quản lý Sidebar
            </div>
            <div className="text-gray-700">
              <strong>❹ Tạo ticket:</strong> Mở modal/form tạo ticket
              <br />
              <strong>❺ Thống kê ticket:</strong> Tổng quan về trạng thái ticket
              của người dùng
              <br />
              <strong>❻❼❽❾ Đếm trạng thái:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>High Priority: Vấn đề khẩn cấp cần xử lý ngay</li>
                <li>Open: Ticket mới chờ phản hồi đầu tiên</li>
                <li>In Progress: Ticket đang được xử lý</li>
                <li>
                  Resolved: Ticket đã được giải quyết chờ xác nhận từ user
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ❿⓫⓬⓭⓮⓯ Trợ giúp nhanh & Liên hệ
            </div>
            <div className="text-gray-700">
              <strong>Tùy chọn trợ giúp nhanh:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>⓫ Knowledge Base:</strong> Bài viết self-service và
                  hướng dẫn
                </li>
                <li>
                  <strong>⓬ FAQ:</strong> Các câu hỏi thường gặp và câu trả lời
                </li>
                <li>
                  <strong>⓭ Live Chat:</strong> Chat real-time với support
                  agents
                </li>
                <li>
                  <strong>⓮ Phone Support:</strong> Hỗ trợ qua điện thoại cho
                  vấn đề khẩn cấp
                </li>
              </ul>
              <strong>⓯ Thông tin liên hệ:</strong> Chi tiết liên hệ hỗ trợ cần
              thiết
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ⓰⓱⓲⓳⓴ Quản lý Ticket
            </div>
            <div className="text-gray-700">
              <strong>⓰ Tổng quan Ticket:</strong> Số lượng tổng và tùy chọn
              quản lý
              <br />
              <strong>⓱ Bộ lọc trạng thái:</strong> Lọc ticket theo trạng thái
              hiện tại
              <br />
              <strong>⓲ Bộ lọc danh mục:</strong> Lọc theo loại vấn đề
              <br />
              <strong>⓳ Tìm kiếm:</strong> Tìm ticket theo nội dung
              <br />
              <strong>⓴ Tùy chọn sắp xếp:</strong> Sắp xếp ticket theo ngày,
              priority, trạng thái
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉑㉒㉓ Ticket ưu tiên cao
            </div>
            <div className="text-gray-700">
              <strong>㉑ Hiển thị ticket:</strong> Thứ tự hiển thị rõ ràng với
              mã màu
              <br />
              <strong>㉒ Tóm tắt hoạt động:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Thời gian trả lời cuối cùng và tên agent</li>
                <li>Chỉ số số lượng tin nhắn</li>
                <li>Theo dõi thời gian phản hồi</li>
              </ul>
              <strong>㉓ Chỉ báo trạng thái:</strong> Trạng thái hiện tại kèm
              cấp độ priority
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉔㉕㉖ Ticket đang xử lý
            </div>
            <div className="text-gray-700">
              <strong>㉔ Ticket đang hoạt động:</strong> Ticket đang được xử lý
              <br />
              <strong>㉕ Phân công agent:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Hiển thị team/agent được giao</li>
                <li>Thời gian ước tính giải quyết</li>
                <li>Cập nhật tiến độ</li>
              </ul>
              <strong>㉖ Trạng thái hành động:</strong> Chỉ báo rõ tiến độ hiện
              tại
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉗㉘㉙ Ticket đã giải quyết
            </div>
            <div className="text-gray-700">
              <strong>㉗ Ticket hoàn thành:</strong> Hiển thị ticket đã được
              giải quyết
              <br />
              <strong>㉘ Thông tin giải pháp:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Thời gian giải quyết</li>
                <li>Tên agent đã giải quyết</li>
                <li>Tóm tắt cách giải quyết</li>
              </ul>
              <strong>㉙ Tùy chọn phản hồi:</strong> Đánh giá chất lượng giải
              quyết
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉚㉛㉜ Ticket chuyên biệt
            </div>
            <div className="text-gray-700">
              <strong>㉚ Copyright Dispute:</strong> Xử lý đặc biệt cho các vấn
              đề pháp lý
              <br />
              <strong>㉛ Phân công team pháp lý:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Chuyển routing tới team chuyên môn</li>
                <li>Hỗ trợ đính kèm bằng chứng</li>
                <li>Thời gian xem xét kéo dài hơn</li>
              </ul>
              <strong>㉜ Chỉ báo đính kèm:</strong> Hiển thị tài liệu hỗ trợ
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">㉝ Phân trang</div>
            <div className="text-gray-700">
              <strong>Điều hướng ticket:</strong> Xử lý khối lượng ticket lớn
              <br />
              <strong>Giữ bộ lọc:</strong> Duy trì bộ lọc khi chuyển trang
              <br />
              <strong>Hiệu năng:</strong> Tải lười (lazy loading) để cải thiện
              hiệu suất
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            🎫 LUỒNG XỬ LÝ TICKET
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              <strong>Tạo ticket:</strong> Người dùng gửi vấn đề với category và
              priority
            </li>
            <li>
              <strong>Phân công tự động:</strong> Chuyển tới team phù hợp dựa
              trên category
            </li>
            <li>
              <strong>Phản hồi đầu tiên:</strong> Agent xác nhận ticket trong
              thời gian SLA
            </li>
            <li>
              <strong>Điều tra:</strong> Agent điều tra và thu thập thông tin
            </li>
            <li>
              <strong>Cập nhật tiến độ:</strong> Gửi cập nhật định kỳ cho người
              dùng
            </li>
            <li>
              <strong>Giải quyết:</strong> Vấn đề được giải quyết kèm giải thích
              chi tiết
            </li>
            <li>
              <strong>Xác nhận người dùng:</strong> Người dùng xác nhận giải
              quyết đạt yêu cầu
            </li>
            <li>
              <strong>Đóng:</strong> Ticket đóng kèm thu thập phản hồi
            </li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">
          <div className="font-bold text-blue-800 mb-2">⚡ SLA & HIỆU SUẤT</div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Thời gian phản hồi:</strong> High priority {"<"} 1h,
              Normal {"<"} 4h, Low {"<"} 24h
            </li>
            <li>
              <strong>Mục tiêu giải quyết:</strong> Payment issues {"<"} 24h,
              Technical {"<"} 48h
            </li>
            <li>
              <strong>Quy tắc eskalation:</strong> Tự động escalate khi SLA sắp
              hết
            </li>
            <li>
              <strong>Độ hài lòng khách hàng:</strong> Mục tiêu {"<"} 90% rating
              hài lòng
            </li>
            <li>
              <strong>Tải công việc agent:</strong> Phân công cân bằng để tối ưu
              hiệu suất
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            🔧 DANH MỤC HỖ TRỢ
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Payment Problems:</strong> Giao dịch thất bại, hoàn tiền,
              vấn đề thanh toán
            </li>
            <li>
              <strong>Technical Issues:</strong> Lỗi tải xuống, file hỏng, vấn
              đề truy cập
            </li>
            <li>
              <strong>Account Access:</strong> Lỗi đăng nhập, đặt lại mật khẩu,
              thay đổi email
            </li>
            <li>
              <strong>Copyright Disputes:</strong> Khiếu nại DMCA, xác minh
              quyền sở hữu
            </li>
            <li>
              <strong>Product Issues:</strong> Khiếu nại chất lượng, thiếu file,
              mô tả sai
            </li>
            <li>
              <strong>General Inquiries:</strong> Câu hỏi hướng dẫn, yêu cầu
              tính năng
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
