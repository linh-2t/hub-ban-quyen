import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/communication-center")({
  component: CommunicationCenterWireframe,
});

export default function CommunicationCenterWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-purple-600">
        WF47 - TRUNG TÂM GIAO TIẾP
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-purple-900 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">📚 Copyright Hub</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>Bảng điều khiển</div>
                <div>Contracts</div>
                <div className="font-semibold text-purple-300">Giao tiếp</div>
                <div>Notifications</div>
                <div>Messages</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (12)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">💬 Communication Hub ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50">
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 rounded bg-purple-100 border-2 border-purple-500">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <div className="text-sm font-semibold">
                    💬 Communication Hub
                  </div>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      5
                    </div>
                    <div className="font-semibold text-purple-600">
                      📧 Tất cả tin nhắn
                    </div>
                    <div className="bg-red-500 text-white rounded-full px-1 text-xs">
                      12
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      6
                    </div>
                    <div className="text-gray-600">📥 Inbox</div>
                    <div className="bg-blue-500 text-white rounded-full px-1 text-xs">
                      8
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      7
                    </div>
                    <div className="text-gray-600">📤 Sent</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      8
                    </div>
                    <div className="text-gray-600">⭐ Quan trọng</div>
                    <div className="bg-orange-500 text-white rounded-full px-1 text-xs">
                      3
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      9
                    </div>
                    <div className="text-gray-600">🗑️ Đã xóa</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    10
                  </div>
                  <div className="text-sm">🤝 Đàm phán</div>
                  <div className="bg-green-500 text-white rounded-full px-1 text-xs">
                    5
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
                  </div>
                  <div className="text-sm">🎯 Thông báo</div>
                  <div className="bg-blue-500 text-white rounded-full px-1 text-xs">
                    2
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    12
                  </div>
                  <div className="text-sm">❓ Hỗ trợ</div>
                  <div className="bg-yellow-500 text-white rounded-full px-1 text-xs">
                    1
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <div className="text-sm">📞 Video Calls</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="text-sm">⚙️ Cài đặt</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex">
            {/* Message List */}
            <div className="w-96 border-r-2 border-gray-800 bg-white">
              <div className="border-b border-gray-300 p-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      15
                    </div>
                    <h3 className="font-semibold">📧 Tin nhắn (42)</h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        16
                      </div>
                      <button
                        className="px-2 py-1 bg-purple-600 text-white text-xs rounded"
                        type="button"
                      >
                        ✏️ Compose
                      </button>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        17
                      </div>
                      <button
                        className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded"
                        type="button"
                      >
                        🔄 Refresh
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <input
                    className="flex-1 p-2 border border-gray-300 rounded text-sm"
                    placeholder="🔍 Tìm kiếm cuộc trò chuyện..."
                    type="text"
                  />
                </div>
              </div>

              {/* Message Filters */}
              <div className="border-b border-gray-300 p-3 bg-gray-50">
                <div className="flex gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      19
                    </div>
                    <button
                      className="px-2 py-1 bg-purple-600 text-white rounded"
                      type="button"
                    >
                      Tất cả
                    </button>
                  </div>
                  <button
                    className="px-2 py-1 bg-red-100 text-red-800 rounded"
                    type="button"
                  >
                    🚨 Khẩn cấp (3)
                  </button>
                  <button
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded"
                    type="button"
                  >
                    📋 Contracts (8)
                  </button>
                  <button
                    className="px-2 py-1 bg-green-100 text-green-800 rounded"
                    type="button"
                  >
                    🤝 Đàm phán (5)
                  </button>
                  <button
                    className="px-2 py-1 bg-orange-100 text-orange-800 rounded"
                    type="button"
                  >
                    ❓ Hỗ trợ (1)
                  </button>
                </div>
              </div>

              {/* Message List */}
              <div className="overflow-y-auto h-96">
                {/* Urgent Message */}
                <div className="border-b border-gray-200 p-3 hover:bg-gray-50 bg-red-50 border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      20
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium text-sm">
                          📚 NXB Tổng Hợp
                        </div>
                        <div className="text-xs text-gray-500">14:30</div>
                      </div>
                      <div className="text-sm text-gray-800 font-medium">
                        🚨 Khẩn: Cần làm rõ tranh chấp bản quyền
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Chúng tôi cần làm rõ ngay về quyền dịch thuật cho "The
                        Great Novel"...
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-1 py-0 bg-red-100 text-red-800 text-xs rounded">
                          🚨 KHẨN
                        </span>
                        <span className="px-1 py-0 bg-blue-100 text-blue-800 text-xs rounded">
                          📋 Contract
                        </span>
                        <div className="text-xs text-red-600">
                          ⏰ Cần phản hồi trong ngày
                        </div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>

                {/* Contract Negotiation */}
                <div className="border-b border-gray-200 p-3 hover:bg-gray-50 bg-blue-50 border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      21
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium text-sm">
                          🏢 Alpha Books Distribution
                        </div>
                        <div className="text-xs text-gray-500">13:45</div>
                      </div>
                      <div className="text-sm text-gray-800">
                        🤝 Sửa đổi điều khoản hợp đồng cho Q1 2025
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Vui lòng xem lại tỷ lệ tiền bản quyền và loại trừ lãnh
                        thổ...
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-1 py-0 bg-green-100 text-green-800 text-xs rounded">
                          🤝 Đàm phán
                        </span>
                        <span className="px-1 py-0 bg-blue-100 text-blue-800 text-xs rounded">
                          📋 Contract
                        </span>
                        <div className="text-xs text-green-600">
                          📎 3 attachments
                        </div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                {/* Payment Issue */}
                <div className="border-b border-gray-200 p-3 hover:bg-gray-50 bg-orange-50 border-l-4 border-orange-500">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      22
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium text-sm">
                          💰 Fahasa Accounting Dept
                        </div>
                        <div className="text-xs text-gray-500">11:20</div>
                      </div>
                      <div className="text-sm text-gray-800">
                        💸 Vấn đề xử lý thanh toán tiền bản quyền Q3
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Thanh toán ₫45,000,000 đã được xử lý cho doanh thu tháng
                        Mười...
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-1 py-0 bg-orange-100 text-orange-800 text-xs rounded">
                          💰 Thanh toán
                        </span>
                        <span className="px-1 py-0 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Đã xử lý
                        </span>
                        <div className="text-xs text-orange-600">💵 ₫45M</div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                {/* Support Request */}
                <div className="border-b border-gray-200 p-3 hover:bg-gray-50 bg-yellow-50 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      23
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium text-sm">
                          ❓ Hỗ trợ nền tảng
                        </div>
                        <div className="text-xs text-gray-500">10:15</div>
                      </div>
                      <div className="text-sm text-gray-800">
                        🔧 Hỗ trợ tùy chỉnh mẫu hợp đồng
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Tôi cần trợ giúp để tùy chỉnh mẫu cấp phép chuẩn...
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-1 py-0 bg-yellow-100 text-yellow-800 text-xs rounded">
                          ❓ Hỗ trợ
                        </span>
                        <span className="px-1 py-0 bg-blue-100 text-blue-800 text-xs rounded">
                          📋 Template
                        </span>
                        <div className="text-xs text-yellow-600">
                          ⚡ Tự động phân công
                        </div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>

                {/* Regular Messages */}
                <div className="border-b border-gray-200 p-3 hover:bg-gray-50">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      24
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium text-sm">
                          📖 Educational Press
                        </div>
                        <div className="text-xs text-gray-500">Hôm qua</div>
                      </div>
                      <div className="text-sm text-gray-800">
                        📚 Đề xuất hợp tác bộ sách giáo khoa mới
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Chúng tôi muốn thảo luận hợp tác cho một bộ sách toán
                        mới...
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-1 py-0 bg-purple-100 text-purple-800 text-xs rounded">
                          🤝 Cơ hội
                        </span>
                        <span className="px-1 py-0 bg-blue-100 text-blue-800 text-xs rounded">
                          📚 Giáo dục
                        </span>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                <div className="border-b border-gray-200 p-3 hover:bg-gray-50">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium text-sm">
                          🌐 International Rights Ltd
                        </div>
                        <div className="text-xs text-gray-500">
                          2 ngày trước
                        </div>
                      </div>
                      <div className="text-sm text-gray-800">
                        🌍 Yêu cầu quyền dịch cho khu vực Đông Nam Á
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Quan tâm mua quyền dịch cho thị trường Việt Nam...
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-1 py-0 bg-green-100 text-green-800 text-xs rounded">
                          🌍 Quốc tế
                        </span>
                        <span className="px-1 py-0 bg-blue-100 text-blue-800 text-xs rounded">
                          📝 Translation
                        </span>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content/Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="border-b border-gray-300 p-4 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      26
                    </div>
                    <div>
                      <div className="font-semibold">📚 NXB Tổng Hợp</div>
                      <div className="text-sm text-gray-600">
                        🚨 Khẩn: Cần làm rõ tranh chấp bản quyền
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        27
                      </div>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                        🚨 KHẨN
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        28
                      </div>
                      <button
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                        type="button"
                      >
                        📞 Call
                      </button>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        29
                      </div>
                      <button
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                        type="button"
                      >
                        📹 Video
                      </button>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        30
                      </div>
                      <button
                        className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                        type="button"
                      >
                        ⚙️
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {/* Incoming Message */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    31
                  </div>
                  <div className="max-w-md">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                      <div className="text-sm font-medium mb-1">
                        📚 Nguyễn Văn Minh - Giám đốc pháp lý
                      </div>
                      <div className="text-sm text-gray-800">
                        Chào bạn! Chúng tôi cần làm rõ về quyền dịch thuật cho
                        cuốn "The Great Novel". Theo hợp đồng ban đầu, chúng tôi
                        hiểu rằng chúng tôi có quyền độc quyền dịch sang tiếng
                        Việt cho thị trường Việt Nam. Tuy nhiên, chúng tôi vừa
                        phát hiện một bản dịch khác đã xuất hiện trên thị
                        trường.
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Hôm nay 14:30
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                        🚨 Cần phản hồi ưu tiên
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        📋 Contract Reference: CTR-2024-VN-0234
                      </span>
                    </div>
                  </div>
                </div>

                {/* File Attachment */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    32
                  </div>
                  <div className="max-w-md">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                      <div className="text-sm text-gray-800 mb-2">
                        Đính kèm bằng chứng và tài liệu liên quan:
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border">
                          <div className="text-red-600">📄</div>
                          <div>
                            <div className="text-xs font-medium">
                              Original_Contract_CTR-2024-VN-0234.pdf
                            </div>
                            <div className="text-xs text-gray-500">
                              2.3 MB • PDF Document
                            </div>
                          </div>
                          <button
                            className="text-xs text-blue-600"
                            type="button"
                          >
                            📥 Download
                          </button>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border">
                          <div className="text-blue-600">📸</div>
                          <div>
                            <div className="text-xs font-medium">
                              competitor_translation_evidence.jpg
                            </div>
                            <div className="text-xs text-gray-500">
                              1.8 MB • Image
                            </div>
                          </div>
                          <button
                            className="text-xs text-blue-600"
                            type="button"
                          >
                            👁️ View
                          </button>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border">
                          <div className="text-green-600">📊</div>
                          <div>
                            <div className="text-xs font-medium">
                              market_analysis_report.xlsx
                            </div>
                            <div className="text-xs text-gray-500">
                              892 KB • Spreadsheet
                            </div>
                          </div>
                          <button
                            className="text-xs text-blue-600"
                            type="button"
                          >
                            📊 Open
                          </button>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Hôm nay 14:35
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Suggestions */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    33
                  </div>
                  <div className="max-w-md">
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <div className="text-sm font-medium text-blue-800 mb-2">
                        🤖 AI Suggested Responses:
                      </div>
                      <div className="space-y-1">
                        <button
                          className="block w-full text-left p-2 bg-white rounded text-xs hover:bg-blue-100 border border-blue-200"
                          type="button"
                        >
                          "Cám ơn bạn đã thông báo. Chúng tôi sẽ xem xét ngay
                          các điều khoản hợp đồng và phản hồi trong vòng 2 giờ."
                        </button>
                        <button
                          className="block w-full text-left p-2 bg-white rounded text-xs hover:bg-blue-100 border border-blue-200"
                          type="button"
                        >
                          "Chúng tôi hiểu mối quan ngại của bạn. Hãy lên lịch
                          họp khẩn để thảo luận. Bạn có thể tham gia một cuộc
                          gọi video chiều nay không?"
                        </button>
                        <button
                          className="block w-full text-left p-2 bg-white rounded text-xs hover:bg-blue-100 border border-blue-200"
                          type="button"
                        >
                          "Tôi chuyển vấn đề này cho bộ phận pháp lý để xem xét
                          ngay. Chúng tôi sẽ cung cấp phản hồi chi tiết trước
                          khi kết thúc ngày làm việc hôm nay."
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Notification */}
                <div className="flex justify-center">
                  <div className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                    📅 Case DSP-2024-VN-089 đã được tự động tạo và phân công cho
                    Bộ phận Pháp lý
                  </div>
                </div>

                {/* Outgoing Message */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="max-w-md">
                    <div className="bg-purple-600 text-white p-3 rounded-lg shadow-sm">
                      <div className="text-sm">
                        Cảm ơn bạn đã thông báo. Chúng tôi đang xem xét hợp đồng
                        và sẽ phản hồi trong vòng 2 giờ. Tôi đã chuyển tiếp cho
                        bộ phận pháp lý để xử lý ngay lập tức.
                      </div>
                      <div className="text-xs opacity-75 mt-2">
                        Hôm nay 14:45 • ✓✓ Đã đọc
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 justify-end">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        ✅ Đã gửi phản hồi
                      </span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                        ⏰ Cam kết 2 giờ
                      </span>
                    </div>
                  </div>
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    34
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="border-t border-gray-300 p-4 bg-white">
                <div className="space-y-3">
                  {/* Quick Actions */}
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      35
                    </div>
                    <div className="flex gap-2 text-xs">
                      <button
                        className="px-2 py-1 bg-red-100 text-red-800 rounded"
                        type="button"
                      >
                        🚨 Đánh dấu Khẩn
                      </button>
                      <button
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded"
                        type="button"
                      >
                        📋 Tạo Case
                      </button>
                      <button
                        className="px-2 py-1 bg-green-100 text-green-800 rounded"
                        type="button"
                      >
                        📅 Lên lịch họp
                      </button>
                      <button
                        className="px-2 py-1 bg-orange-100 text-orange-800 rounded"
                        type="button"
                      >
                        📞 Yêu cầu gọi
                      </button>
                      <button
                        className="px-2 py-1 bg-purple-100 text-purple-800 rounded"
                        type="button"
                      >
                        🤖 AI Assistant
                      </button>
                    </div>
                  </div>

                  {/* Message Composer */}
                  <div className="flex items-end gap-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      36
                    </div>
                    <div className="flex-1">
                      <div className="border border-gray-300 rounded-lg">
                        <div className="p-3">
                          <textarea
                            className="w-full resize-none text-sm"
                            placeholder="Nhập tin nhắn của bạn..."
                            rows={3}
                          ></textarea>
                        </div>
                        <div className="border-t border-gray-200 p-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              className="p-1 text-gray-600 hover:text-purple-600"
                              type="button"
                            >
                              📎
                            </button>
                            <button
                              className="p-1 text-gray-600 hover:text-purple-600"
                              type="button"
                            >
                              😊
                            </button>
                            <button
                              className="p-1 text-gray-600 hover:text-purple-600"
                              type="button"
                            >
                              🎯
                            </button>
                            <button
                              className="p-1 text-gray-600 hover:text-purple-600"
                              type="button"
                            >
                              📷
                            </button>
                            <button
                              className="p-1 text-gray-600 hover:text-purple-600"
                              type="button"
                            >
                              🎤
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              className="px-3 py-1 bg-gray-200 text-gray-800 text-xs rounded"
                              type="button"
                            >
                              💾 Save Draft
                            </button>
                            <button
                              className="px-3 py-1 bg-purple-600 text-white text-xs rounded"
                              type="button"
                            >
                              📤 Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Auto-suggestions */}
                  <div className="ml-8 text-xs text-gray-600">
                    💡 AI suggests: Đề cập mã hợp đồng CTR-2024-VN-0234 và đặt
                    thời hạn leo thang
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annotation */}
      <div className="mt-8 p-6 bg-purple-50 border border-purple-200 rounded">
        <h3 className="font-bold text-purple-800 mb-4">
          📝 WF47 - GHI CHÚ TRUNG TÂM GIAO TIẾP
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-purple-600">
              💬 Hệ thống Giao tiếp Thống nhất
            </div>
            <div className="text-gray-700">
              <strong>❶-❸ Header:</strong> Truy cập trung tâm giao tiếp kèm
              trung tâm thông báo
              <br />
              <strong>❹-⓮ Sidebar:</strong> Danh mục tin nhắn, kênh và công cụ
              giao tiếp
              <br />
              <strong>⓯-⓲ Quản lý tin nhắn:</strong> Soạn, tìm kiếm và tổ chức
              tin nhắn
              <br />
              <strong>⓳-⓴ Bộ lọc tin nhắn:</strong> Lọc theo mức độ ưu tiên và
              danh mục
              <br />
              <strong>㉑-㉕ Danh sách hội thoại:</strong> Các cuộc hội thoại
              theo chuỗi kèm bối cảnh và mức độ khẩn
            </div>
          </div>
          <div>
            <div className="font-bold text-purple-600">
              🤖 Tính năng thông minh
            </div>
            <div className="text-gray-700">
              <strong>㉖-㉚ Giao diện chat:</strong> Nhắn tin thời gian thực với
              tích hợp video/voice
              <br />
              <strong>㉛-㉞ Luồng tin nhắn:</strong> Tin nhắn phong phú kèm
              attachments và gợi ý AI
              <br />
              <strong>㉟-㊱ Công cụ phản hồi:</strong> Hành động nhanh, tạo Case
              và lên lịch họp
              <br />
              <strong>Tích hợp AI:</strong> Gợi ý phản hồi thông minh và tạo
              case tự động
              <br />
              <strong>Giao tiếp đa mô thức:</strong> Văn bản, giọng nói, video
              và chia sẻ tệp
              <br />
              <strong>Quản lý ưu tiên:</strong> Phát hiện khẩn và leo thang tự
              động
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
