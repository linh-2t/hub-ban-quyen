import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/buyer/offer-review-sign')({
  component: ReviewSignContractWireframe,
})

export default function ReviewSignContractWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF15 - REVIEW & KÝ HỢP ĐỒNG (BUYER/SELLER)
      </h1>
      
      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
            <div className="text-sm">← Quay lại dashboard</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <div className="text-xs">🔔 (2)</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
              <div className="text-xs">Nguyễn Văn A ▼</div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Main Content - PDF Viewer */}
          <div className="flex-1 p-6 bg-gray-100">
            {/* Contract Header */}
            <div className="mb-4 p-4 bg-white border-2 border-gray-300 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                    <h1 className="text-xl font-bold">Hợp Đồng #CT-2025-001234</h1>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                      Chờ review
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 ml-8">
                    Từ Offer #OF-2025-001234 • Tạo ngày: 22/10/2025
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                  <button className="px-3 py-2 border-2 border-gray-300 rounded text-sm bg-white">📥 Tải PDF</button>
                  <button className="px-3 py-2 border-2 border-gray-300 rounded text-sm bg-white">🖨️ In</button>
                </div>
              </div>
            </div>

            {/* Signing Status */}
            <div className="mb-4 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
                <div className="font-bold">Trạng Thái Ký</div>
              </div>
              <div className="grid grid-cols-2 gap-4 ml-8">
                <div className="flex items-center gap-3 p-3 bg-white rounded border-2 border-green-500">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">✓</div>
                  <div>
                    <div className="font-semibold text-sm">Seller (Nguyễn Văn A)</div>
                    <div className="text-xs text-green-600">Đã ký: 22/10/2025 14:30</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded border-2 border-yellow-500">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl">⏳</div>
                  <div>
                    <div className="font-semibold text-sm">Buyer (Công ty Kim Đồng)</div>
                    <div className="text-xs text-yellow-700">Chờ ký</div>
                  </div>
                </div>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="border-4 border-gray-300 rounded-lg bg-white">
              <div className="p-2 bg-gray-200 border-b-2 border-gray-300 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
                  <span className="text-sm font-semibold">Xem Hợp Đồng</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
                  <button className="px-2 py-1 border bg-white rounded text-xs">−</button>
                  <span className="text-xs">100%</span>
                  <button className="px-2 py-1 border bg-white rounded text-xs">+</button>
                  <span className="text-xs">Trang 1/8</span>
                  <button className="px-2 py-1 border bg-white rounded text-xs">‹</button>
                  <button className="px-2 py-1 border bg-white rounded text-xs">›</button>
                </div>
              </div>

              {/* PDF Content Preview */}
              <div className="p-8 h-screen overflow-y-auto">
                <div className="max-w-3xl mx-auto bg-white shadow-lg p-12 text-xs">
                  <div className="text-center mb-6">
                    <h1 className="text-lg font-bold mb-2">HỢP ĐỒNG CHUYỂN NHƯỢNG BẢN QUYỀN TÁC PHẨM</h1>
                    <div className="text-sm">Số: CT-2025-001234</div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">
                      - Căn cứ Luật Sở hữu trí tuệ số 50/2005/QH11 và Nghị định 22/2018/NĐ-CP...<br/>
                      - Căn cứ nhu cầu và khả năng của các bên...
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">
                      Hôm nay, ngày <strong>22 tháng 10 năm 2025</strong>, tại Thành phố Hồ Chí Minh, chúng tôi gồm:
                    </p>
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 border-l-4 border-blue-500">
                    <p className="font-bold mb-1">BÊN A (BÊN CHUYỂN NHƯỢNG):</p>
                    <p>Ông/Bà: <strong>Nguyễn Văn A</strong></p>
                    <p>Công ty: <strong>Nhà Xuất Bản Trẻ</strong></p>
                    <p>CMND/MST: <strong>079xxxxxxxx</strong></p>
                    <p>Địa chỉ: <strong>161B Lý Chính Thắng, Q.3, TP.HCM</strong></p>
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 border-l-4 border-green-500">
                    <p className="font-bold mb-1">BÊN B (BÊN NHẬN QUYỀN):</p>
                    <p>Công ty: <strong>Công ty TNHH Kim Đồng</strong></p>
                    <p>Người đại diện: <strong>Bà Trần Thị B</strong></p>
                    <p>MST: <strong>0123456789</strong></p>
                    <p>Địa chỉ: <strong>55 Quang Trung, Q.Gò Vấp, TP.HCM</strong></p>
                  </div>

                  <h2 className="font-bold text-sm mt-6 mb-2">ĐIỀU 1: ĐỐI TƯỢNG HỢP ĐỒNG</h2>
                  <p className="mb-3">
                    1.1. Bên A đồng ý chuyển nhượng cho Bên B toàn bộ quyền tác giả và các quyền liên quan 
                    đối với tác phẩm "<strong>Kinh Tế Học Vĩ Mô</strong>" của tác giả <strong>Gregory Mankiw</strong>...
                  </p>

                  <h2 className="font-bold text-sm mt-6 mb-2">ĐIỀU 2: PHẠM VI CHUYỂN NHƯỢNG</h2>
                  <p className="mb-2">
                    2.1. <strong>Vùng lãnh thổ:</strong> Toàn cầu<br/>
                    2.2. <strong>Thời hạn:</strong> 05 (năm) năm kể từ ngày hợp đồng có hiệu lực<br/>
                    2.3. <strong>Độc quyền:</strong> Bên B được hưởng quyền độc quyền
                  </p>

                  <div className="text-center text-gray-400 mt-8">
                    ... [Xem thêm 6 trang] ...
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-8 pt-6 border-t-2">
                    <div className="text-center">
                      <p className="font-bold mb-8">BÊN A</p>
                      <div className="h-20 border-2 border-green-500 bg-green-50 flex items-center justify-center">
                        <span className="text-green-700 font-bold">✓ Đã ký số</span>
                      </div>
                      <p className="mt-2 text-xs">(Ký và ghi rõ họ tên)</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold mb-8">BÊN B</p>
                      <div className="h-20 border-2 border-dashed border-gray-400 flex items-center justify-center">
                        <span className="text-gray-400">Chờ ký</span>
                      </div>
                      <p className="mt-2 text-xs">(Ký và ghi rõ họ tên)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Actions */}
          <div className="w-96 border-l-2 border-gray-800 bg-gray-50 p-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
                <div className="font-bold">Hành Động</div>
              </div>

              {/* Review Actions (Chưa approve) */}
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 border-2 border-yellow-300 rounded">
                  <div className="text-xs text-yellow-800 mb-2">
                    ⚠️ Bạn cần review và phê duyệt hợp đồng trước khi ký
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">10</div>
                  <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
                    ✓ Phê Duyệt Hợp Đồng
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">11</div>
                  <button className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700">
                    ✗ Yêu Cầu Sửa Đổi
                  </button>
                </div>
              </div>

              {/* Sign Section (Sau khi approve) - Hidden initially */}
              <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-300 rounded hidden">
                <div className="font-bold mb-3 text-sm">Ký Hợp Đồng Số</div>
                
                <div className="mb-4">
                  <label className="text-xs text-gray-600 mb-1 block">Phương thức xác thực:</label>
                  <select className="w-full border-2 border-gray-300 rounded p-2 text-sm">
                    <option>OTP qua SMS</option>
                    <option>OTP qua Email</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">12</div>
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold">
                    📝 Ký Hợp Đồng
                  </button>
                </div>

                <div className="mt-3 text-xs text-gray-600 p-2 bg-white rounded border">
                  ℹ️ Sau khi click, bạn sẽ nhận mã OTP để xác nhận chữ ký
                </div>
              </div>
            </div>

            {/* Contract Summary */}
            <div className="mb-6 p-4 bg-white border-2 border-gray-300 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">13</div>
                <div className="font-bold text-sm">Tóm Tắt Hợp Đồng</div>
              </div>
              <div className="space-y-2 text-xs ml-7">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sản phẩm:</span>
                  <span className="font-semibold">Kinh Tế Học Vĩ Mô</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Seller:</span>
                  <span className="font-semibold">Nguyễn Văn A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Buyer:</span>
                  <span className="font-semibold">Kim Đồng</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-gray-600">Giá trị:</span>
                  <span className="font-bold text-blue-600">90,000,000 đ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vùng:</span>
                  <span className="font-semibold">Toàn cầu, 5 năm</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="p-4 bg-white border-2 border-gray-300 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
                <div className="font-bold text-sm">Lịch Sử</div>
              </div>
              <div className="space-y-3 ml-7">
                <div className="flex gap-2 text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1"></div>
                  <div>
                    <div className="font-semibold">Seller đã ký</div>
                    <div className="text-gray-600">22/10/2025 14:30</div>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                  <div>
                    <div className="font-semibold">Hợp đồng được tạo</div>
                    <div className="text-gray-600">22/10/2025 10:00</div>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-1"></div>
                  <div>
                    <div className="font-semibold">Offer được chấp nhận</div>
                    <div className="text-gray-600">21/10/2025 16:45</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">CHÚ THÍCH CHI TIẾT</h2>
        
        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❻ Trạng Thái Ký</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Status ký của cả 2 bên<br/>
              <strong>Color coding:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Xanh lá + ✓ = Đã ký</li>
                <li>Vàng + ⏳ = Chờ ký</li>
                <li>Xám = Chưa đến lượt</li>
              </ul>
              <strong>Không bắt buộc thứ tự:</strong> Buyer và Seller có thể ký theo thứ tự bất kỳ
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❼❽ PDF Viewer</div>
            <div className="text-gray-700">
              <strong>❼ Viewer header:</strong> Title, controls<br/>
              <strong>❽ Controls:</strong> Zoom in/out, Page navigation, Full screen<br/>
              <strong>Responsive:</strong> Adjust zoom dựa trên screen size
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❿⓫ Review Actions</div>
            <div className="text-gray-700">
              <strong>❿ Phê Duyệt:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Click → Confirm popup "Bạn xác nhận đã đọc kỹ và đồng ý với hợp đồng?"</li>
                <li>Confirm → Update status="approved_by_[role]"</li>
                <li>Unlock chức năng Ký (⓬)</li>
              </ol>
              <strong>⓫ Yêu Cầu Sửa Đổi:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Click → Mở modal với textarea</li>
                <li>Nhập yêu cầu sửa đổi chi tiết</li>
                <li>Submit → Gửi về Contract Manager</li>
                <li>Status="pending_changes"</li>
                <li>CM nhận notification → Back to WF14 để adjust</li>
              </ol>
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓬ Ký Hợp Đồng Số</div>
            <div className="text-gray-700">
              <strong>Phase 1 - Simple OTP:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>User chọn phương thức OTP (SMS hoặc Email)</li>
                <li>Click "Ký Hợp Đồng" → Send OTP</li>
                <li>Modal nhập OTP (6 digits, valid 5 phút)</li>
                <li>Verify OTP → Record signature:
                  <ul className="list-disc ml-5">
                    <li>User ID</li>
                    <li>Timestamp</li>
                    <li>IP address</li>
                    <li>Device info (user agent)</li>
                  </ul>
                </li>
                <li>Generate signed PDF với watermark "Digitally Signed by [Name] at [Timestamp]"</li>
                <li>Update contract status</li>
                <li>Nếu cả 2 bên đã ký → status="fully_executed" → Chuyển sang Payment flow</li>
              </ol>
              <strong>Phase 2 (future):</strong> Tích hợp VNPT CA hoặc Viettel CA
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓭ Contract Summary</div>
            <div className="text-gray-700">
              Quick reference các thông tin chính của hợp đồng
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓮ Timeline</div>
            <div className="text-gray-700">
              Lịch sử các events: Offer accepted → Contract created → Reviews → Signatures
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 WORKFLOW STATUSES</div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li><strong>pending_review:</strong> CM vừa gửi, chờ 2 bên review</li>
            <li><strong>approved_by_seller:</strong> Seller đã approve, chờ buyer</li>
            <li><strong>approved_by_buyer:</strong> Buyer đã approve, chờ seller</li>
            <li><strong>approved_by_both:</strong> Cả 2 đã approve, có thể ký</li>
            <li><strong>signed_by_seller:</strong> Seller đã ký, chờ buyer ký</li>
            <li><strong>signed_by_buyer:</strong> Buyer đã ký, chờ seller ký</li>
            <li><strong>fully_executed:</strong> Cả 2 đã ký → Move to Payment</li>
            <li><strong>pending_changes:</strong> Có yêu cầu sửa đổi, CM cần adjust</li>
          </ul>
        </div>
      </div>
    </div>
  );
}