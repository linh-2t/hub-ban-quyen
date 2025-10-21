import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/seller/offer')({
  component: OfferDetailWireframe,
})

export default function OfferDetailWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF13 - CHI TIẾT OFFER & THƯƠNG LƯỢNG
      </h1>
      
      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
            <div className="text-sm">← Quay lại danh sách offers</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <div className="text-xs">Nguyễn Văn A ▼</div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Offer Header */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <h1 className="text-2xl font-bold">Offer #OF-2025-001234</h1>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      Đang thương lượng
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 ml-8">
                    Gửi ngày: 19/10/2025 • Hết hạn: 02/11/2025 (còn 12 ngày)
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                  <button className="px-3 py-2 border-2 border-gray-300 rounded text-sm">📥 Tải PDF</button>
                  <button className="px-3 py-2 border-2 border-gray-300 rounded text-sm">🖨️ In</button>
                </div>
              </div>
            </div>

            {/* Product & Parties Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Product Card */}
              <div className="border-2 border-gray-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                  <div className="font-bold text-sm">Sản phẩm</div>
                </div>
                <div className="flex gap-3 ml-7">
                  <div className="w-16 h-24 bg-gray-200 rounded"></div>
                  <div>
                    <div className="font-bold mb-1">Kinh Tế Học Vĩ Mô</div>
                    <div className="text-xs text-gray-600">Tác giả: Gregory Mankiw</div>
                    <div className="text-xs text-gray-600">ISBN: 978-0-538-45305-9</div>
                    <div className="mt-2 text-xs">
                      <a href="#" className="text-blue-600 underline">Xem chi tiết sản phẩm →</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buyer Info */}
              <div className="border-2 border-gray-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
                  <div className="font-bold text-sm">Người gửi (Buyer)</div>
                </div>
                <div className="ml-7">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="font-bold">Công ty Kim Đồng</div>
                      <div className="text-xs text-green-600">✓ Đã xác thực</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>📧 contact@kimdong.com</div>
                    <div>📞 (028) 3838 xxxx</div>
                    <div>📍 TP. Hồ Chí Minh</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Offer Versions Timeline */}
            <div className="mb-6 p-5 bg-gray-50 border-2 border-gray-300 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
                <div className="font-bold">Lịch Sử Thương Lượng (Round 2/5)</div>
              </div>

              <div className="space-y-4 ml-8">
                {/* Version 3 - Current (Counter from Seller) */}
                <div className="border-2 border-blue-600 bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
                      <div>
                        <div className="font-bold text-sm">Version 3 - Counter từ Seller (Bạn)</div>
                        <div className="text-xs text-gray-600">21/10/2025 10:30</div>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">
                      Chờ Buyer phản hồi
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-gray-600">Loại bản quyền:</div>
                      <div className="font-semibold">Toàn bộ bản quyền</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Vùng lãnh thổ:</div>
                      <div className="font-semibold">Toàn cầu</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Thời hạn:</div>
                      <div className="font-semibold">5 năm</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Độc quyền:</div>
                      <div className="font-semibold">Có</div>
                    </div>
                    <div className="col-span-2 pt-2 border-t">
                      <div className="text-gray-600">Giá đề xuất:</div>
                      <div className="font-bold text-lg text-blue-600">90,000,000 đ</div>
                      <div className="text-xs text-gray-600 mt-1">
                        <strong>Ghi chú:</strong> Tôi đề xuất tăng giá do đây là độc quyền toàn cầu 5 năm
                      </div>
                    </div>
                  </div>
                </div>

                {/* Version 2 - Counter from Buyer */}
                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
                      <div>
                        <div className="font-bold text-sm">Version 2 - Counter từ Buyer</div>
                        <div className="text-xs text-gray-600">20/10/2025 15:20</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">
                    Giá: <strong>80,000,000 đ</strong> • Toàn bộ BQ • Toàn cầu • 5 năm • Độc quyền
                  </div>
                </div>

                {/* Version 1 - Original */}
                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">10</div>
                    <div>
                      <div className="font-bold text-sm">Version 1 - Offer Gốc từ Buyer</div>
                      <div className="text-xs text-gray-600">19/10/2025 09:15</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">
                    Giá: <strong>75,000,000 đ</strong> • In ấn + Phát hành số • Toàn cầu • 3 năm • Độc quyền
                  </div>
                </div>
              </div>
            </div>

            {/* Current Offer Details */}
            <div className="mb-6 p-5 border-2 border-blue-300 rounded-lg bg-blue-50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">11</div>
                <div className="font-bold">Chi Tiết Offer Hiện Tại (Version 3)</div>
              </div>

              <div className="grid grid-cols-2 gap-4 ml-8 text-sm">
                <div className="p-3 bg-white rounded">
                  <div className="text-gray-600 text-xs mb-1">Loại bản quyền</div>
                  <div className="font-semibold">Toàn bộ bản quyền</div>
                </div>
                <div className="p-3 bg-white rounded">
                  <div className="text-gray-600 text-xs mb-1">Vùng lãnh thổ</div>
                  <div className="font-semibold">Toàn cầu</div>
                </div>
                <div className="p-3 bg-white rounded">
                  <div className="text-gray-600 text-xs mb-1">Thời hạn</div>
                  <div className="font-semibold">5 năm</div>
                </div>
                <div className="p-3 bg-white rounded">
                  <div className="text-gray-600 text-xs mb-1">Độc quyền</div>
                  <div className="font-semibold">Có (Exclusive)</div>
                </div>
                <div className="p-3 bg-white rounded">
                  <div className="text-gray-600 text-xs mb-1">Loại deal</div>
                  <div className="font-semibold">Mua đứt một lần</div>
                </div>
                <div className="p-3 bg-white rounded">
                  <div className="text-gray-600 text-xs mb-1">Thanh toán</div>
                  <div className="font-semibold">100% khi ký HĐ</div>
                </div>
                <div className="col-span-2 p-3 bg-yellow-50 border-2 border-yellow-300 rounded">
                  <div className="text-gray-600 text-xs mb-1">Tổng giá trị</div>
                  <div className="font-bold text-2xl text-blue-600">90,000,000 đ</div>
                </div>
              </div>
            </div>

            {/* Action Section (for Seller) */}
            <div className="p-5 bg-gray-50 border-2 border-gray-300 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">12</div>
                <div className="font-bold">Phản Hồi Offer (Đang chờ Buyer phản hồi)</div>
              </div>

              <div className="ml-8 text-sm text-gray-600 mb-4">
                Bạn đã gửi counter offer. Vui lòng chờ buyer phản hồi.
              </div>

              <div className="ml-8 text-xs text-gray-500 p-3 bg-yellow-50 border border-yellow-300 rounded">
                ⏰ <strong>Lưu ý:</strong> Offer sẽ tự động hết hạn vào 02/11/2025 nếu không có phản hồi
              </div>
            </div>
          </div>

          {/* Sidebar - Chat Box */}
          <div className="w-96 border-l-2 border-gray-800 bg-gray-50 flex flex-col">
            <div className="p-4 border-b-2 border-gray-300 bg-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">13</div>
                <div className="font-bold">Chat Thương Lượng</div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {/* Message from Buyer */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Kim Đồng • 20/10 15:25</div>
                  <div className="bg-white p-3 rounded-lg text-sm border">
                    Chúng tôi rất quan tâm đến việc mua toàn bộ bản quyền cho thị trường toàn cầu. 
                    Liệu có thể thương lượng về giá được không?
                  </div>
                </div>
              </div>

              {/* Message from Seller (You) */}
              <div className="flex gap-2 justify-end">
                <div>
                  <div className="text-xs text-gray-600 mb-1 text-right">Bạn • 21/10 10:32</div>
                  <div className="bg-blue-100 p-3 rounded-lg text-sm">
                    Cảm ơn bạn quan tâm. Với toàn bộ bản quyền toàn cầu độc quyền 5 năm, 
                    tôi đề xuất giá 90M. Đây là cuốn sách rất có tiềm năng.
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0"></div>
              </div>

              {/* System Message */}
              <div className="text-center">
                <div className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-600">
                  Seller đã gửi counter offer với giá 90,000,000đ
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t-2 border-gray-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
                <textarea 
                  className="flex-1 border-2 border-gray-300 rounded p-2 text-sm"
                  rows={3}
                  placeholder="Nhập tin nhắn..."
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold text-sm">
                Gửi tin nhắn
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">CHÚ THÍCH CHI TIẾT</h2>
        
        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❶ Nút Quay Lại</div>
            <div className="text-gray-700">Click → Quay về WF12 (Quản lý offers)</div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❸ Offer Header</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Offer ID, Status badge, Dates<br/>
              <strong>Status colors:</strong> Pending (Yellow), Negotiating (Blue), Accepted (Green), Rejected (Red)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❹ Export Buttons</div>
            <div className="text-gray-700">
              <strong>Tải PDF:</strong> Generate PDF với tất cả offer details<br/>
              <strong>In:</strong> Open print dialog
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❼ Lịch Sử Thương Lượng</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Timeline các versions của offer<br/>
              <strong>Current version:</strong> Border xanh đậm + Background highlight<br/>
              <strong>Max rounds:</strong> 5 rounds negotiation<br/>
              <strong>Version collapse:</strong> Các versions cũ có thể collapse/expand để xem chi tiết
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❽❾❿ Version Cards</div>
            <div className="text-gray-700">
              <strong>❽ Current version (V3):</strong> Highlight border xanh, hiển thị full details<br/>
              <strong>❾ Previous version (V2):</strong> Collapsed view, click để expand<br/>
              <strong>❿ Original version (V1):</strong> Collapsed view<br/>
              <strong>Changes tracking:</strong> Highlight các fields đã thay đổi so với version trước
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓬ Action Section</div>
            <div className="text-gray-700">
              <strong>Dynamic dựa trên status và role:</strong><br/>
              <strong>Nếu status=Pending & role=Seller:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Button "✓ Chấp Nhận" (màu xanh)</li>
                <li>Button "✗ Từ Chối" (màu đỏ)</li>
                <li>Button "↔ Counter Offer" (màu vàng) → Mở form counter</li>
              </ul>
              <strong>Nếu status=Negotiating & waiting for other party:</strong>
              <ul className="list-disc ml-5">
                <li>Message "Đang chờ [Party] phản hồi"</li>
                <li>Có thể gửi thêm message trong chat</li>
              </ul>
              <strong>Nếu status=Accepted/Rejected:</strong>
              <ul className="list-disc ml-5">
                <li>Hiển thị final result</li>
                <li>Nếu Accepted → Button "Xem hợp đồng" (link to contract page)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓭⓮ Chat Box</div>
            <div className="text-gray-700">
              <strong>⓭ Chat messages:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Buyer messages: Left side, white background</li>
                <li>Seller messages: Right side, blue background</li>
                <li>System messages: Center, gray background (VD: "Counter offer sent")</li>
              </ul>
              <strong>⓮ Chat input:</strong>
              <ul className="list-disc ml-5">
                <li>Text-only, max 1000 characters</li>
                <li>No file attachments (Phase 1)</li>
                <li>Button "Gửi tin nhắn" → POST message</li>
              </ul>
              <strong>Realtime:</strong> WebSocket để update chat realtime
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 BUSINESS RULES</div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Max 5 rounds negotiation. Sau đó phải Accept hoặc Reject</li>
            <li>• Mỗi round có timeout 7 ngày. Không phản hồi → Offer expired</li>
            <li>• Khi Accept → Tự động tạo contract record, chuyển sang Contract Creation flow</li>
            <li>• Khi Reject → Offer closed, buyer có thể tạo offer mới nếu muốn</li>
            <li>• Chat history được lưu và có thể reference sau này</li>
          </ul>
        </div>
      </div>
    </div>
  );
}