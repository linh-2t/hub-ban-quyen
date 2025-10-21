import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/admin/admin-kyc-approval")({
  component: AdminKYCApprovalWireframe,
});

export default function AdminKYCApprovalWireframe() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-red-600">
        WF25 - DUYỆT KYC - ADMIN
      </h1>

      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-red-50 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div className="text-sm font-semibold">
                🏢 Copyright Hub - QUẢN TRỊ
              </div>
            </div>
            <div className="px-3 py-1 bg-red-100 border border-red-300 rounded-full text-xs font-bold text-red-700">
              XÁC THỰC KYC
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <span className="text-xs">Admin: Nguyễn Văn A</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <button className="text-xs text-blue-600 underline" type="button">
                ← Trở về Bảng điều khiển
              </button>
            </div>
          </div>
        </div>

        {/* Filters & Stats */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
              <h2 className="text-lg font-bold">🛡️ Hàng đợi Xác thực KYC</h2>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <span className="bg-yellow-100 px-2 py-1 rounded">
                  Đang chờ: 89
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <span className="bg-green-100 px-2 py-1 rounded">
                  Đã duyệt hôm nay: 23
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <span className="bg-red-100 px-2 py-1 rounded">
                  Đã từ chối hôm nay: 5
                </span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                8
              </div>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Tất cả trạng thái</option>
                <option>Đang chờ</option>
                <option>Đang xem xét</option>
                <option>Cần bổ sung</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                9
              </div>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Ưu tiên</option>
                <option>Cao ({"<"} 72h)</option>
                <option>Trung bình</option>
                <option>Thấp</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                10
              </div>
              <input
                className="border border-gray-300 rounded px-3 py-1 text-sm w-64"
                placeholder="Tìm theo tên, email, ID..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                11
              </div>
              <button
                className="bg-blue-600 text-white px-4 py-1 rounded text-sm"
                type="button"
              >
                🔍 Tìm
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* KYC List */}
          <div className="w-1/2 border-r-2 border-gray-800">
            <div className="p-4 bg-gray-100 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  12
                </div>
                <h3 className="font-bold">Danh Sách KYC (89)</h3>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {/* KYC Item 1 */}
              <div className="p-4 border-b border-gray-200 hover:bg-yellow-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">Nguyễn Văn Minh</div>
                        <div className="text-sm text-gray-600">
                          nguyen.minh@email.com
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: USR-15847
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                          Đang chờ
                        </div>
                        <div className="text-xs text-red-600 mt-1">
                          72 giờ trước
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700">
                      <div>📄 CCCD: Đã tải lên</div>
                      <div>🏦 Ngân hàng: Đã tải lên</div>
                      <div>📸 Selfie: Đã tải lên</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KYC Item 2 */}
              <div className="p-4 border-b border-gray-200 hover:bg-yellow-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">Trần Thị Lan</div>
                        <div className="text-sm text-gray-600">
                          tran.lan@email.com
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: USR-15848
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          Đang xem xét
                        </div>
                        <div className="text-xs text-orange-600 mt-1">
                          24 giờ trước
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700">
                      <div>📄 CCCD: Đã tải lên</div>
                      <div>🏦 Ngân hàng: Cần bổ sung</div>
                      <div>📸 Selfie: Đã tải lên</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KYC Item 3 */}
              <div className="p-4 border-b border-gray-200 hover:bg-yellow-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">Lê Hoàng Nam</div>
                        <div className="text-sm text-gray-600">
                          le.nam@email.com
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: USR-15849
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                          Đang chờ
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          6 giờ trước
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700">
                      <div>📄 CCCD: Đã tải lên</div>
                      <div>🏦 Ngân hàng: Đã tải lên</div>
                      <div>📸 Selfie: Đã tải lên</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KYC Detail Panel */}
          <div className="w-1/2 p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                16
              </div>
              <h3 className="text-lg font-bold">
                Chi Tiết KYC - Nguyễn Văn Minh
              </h3>
            </div>

            {/* User Info */}
            <div className="bg-gray-50 p-4 rounded mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  17
                </div>
                <h4 className="font-semibold">Thông Tin Tài Khoản</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Họ và Tên:</span>
                  <span className="font-semibold">Nguyễn Văn Minh</span>
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span>nguyen.minh@email.com</span>
                </div>
                <div className="flex justify-between">
                  <span>Số điện thoại:</span>
                  <span>+84 901 234 567</span>
                </div>
                <div className="flex justify-between">
                  <span>Ngày đăng ký:</span>
                  <span>15/01/2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Loại tài khoản:</span>
                  <span className="font-semibold text-blue-600">Người bán</span>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-4">
              {/* CCCD */}
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      18
                    </div>
                    <h4 className="font-semibold">📄 Căn Cước Công Dân</h4>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Đã tải lên
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border-2 border-dashed border-gray-300 p-4 text-center bg-gray-50">
                    <div className="text-xs text-gray-600 mb-1">Mặt trước</div>
                    <div className="bg-gray-200 h-20 rounded flex items-center justify-center">
                      <span className="text-xs">🖼️ ID_Front.jpg</span>
                    </div>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 p-4 text-center bg-gray-50">
                    <div className="text-xs text-gray-600 mb-1">Mặt sau</div>
                    <div className="bg-gray-200 h-20 rounded flex items-center justify-center">
                      <span className="text-xs">🖼️ ID_Back.jpg</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  <div>CCCD: 001234567890</div>
                  <div>Ngày cấp: 01/01/2020</div>
                  <div>Nơi cấp: CA Hà Nội</div>
                </div>
              </div>

              {/* Bank Statement */}
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      19
                    </div>
                    <h4 className="font-semibold">🏦 Sao Kê Ngân Hàng</h4>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Đã tải lên
                  </div>
                </div>
                <div className="border-2 border-dashed border-gray-300 p-4 text-center bg-gray-50">
                  <div className="bg-gray-200 h-20 rounded flex items-center justify-center">
                    <span className="text-xs">📄 Bank_Statement.pdf</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  <div>Ngân hàng: Vietcombank</div>
                  <div>Tài khoản: 1234567890</div>
                  <div>Sao kê: 3 tháng</div>
                </div>
              </div>

              {/* Selfie */}
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      20
                    </div>
                    <h4 className="font-semibold">📸 Ảnh Xác Thực</h4>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Đã tải lên
                  </div>
                </div>
                <div className="border-2 border-dashed border-gray-300 p-4 text-center bg-gray-50">
                  <div className="bg-gray-200 h-20 rounded flex items-center justify-center">
                    <span className="text-xs">🖼️ Selfie_With_ID.jpg</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  <div>Ảnh selfie cầm CCCD</div>
                  <div>Đã tải lên: 3 ngày trước</div>
                </div>
              </div>
            </div>

            {/* Verification Notes */}
            <div className="mt-6 border border-gray-300 rounded p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  21
                </div>
                <h4 className="font-semibold">📝 Ghi Chú Xác Thực</h4>
              </div>
              <textarea
                className="w-full border border-gray-300 rounded p-2 text-sm h-20"
                placeholder="Nhập ghi chú về quá trình xác thực (nếu có)..."
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  22
                </div>
                <button
                  className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 flex-1"
                  type="button"
                >
                  ✅ Duyệt KYC
                </button>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  23
                </div>
                <button
                  className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 flex-1"
                  type="button"
                >
                  ❌ Từ Chối
                </button>
              </div>
            </div>

            <div className="mt-3 flex gap-3">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  24
                </div>
                <button
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50 flex-1"
                  type="button"
                >
                  📧 Yêu Cầu Bổ Sung
                </button>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  25
                </div>
                <button
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50 flex-1"
                  type="button"
                >
                  🏷️ Đánh dấu cần xem lại
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-red-50 border-2 border-red-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-red-800">
          CHÚ THÍCH CHI TIẾT
        </h2>

        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ❶❷❸ Đầu Trang Admin
            </div>
            <div className="text-gray-700">
              <strong>❶ Thương hiệu:</strong> Hiển thị rõ ràng đây là trang quản
              trị
              <br />
              <strong>❷ Thông tin Admin:</strong> Hiển thị tên admin hiện tại
              <br />
              <strong>❸ Điều hướng:</strong> Liên kết quay về bảng điều khiển
              <br />
              <strong>Quyền truy cập:</strong> Chỉ role admin mới có thể truy
              cập trang này
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">❺❻❼ Thống kê KYC</div>
            <div className="text-gray-700">
              <strong>❺ Số lượng Đang chờ:</strong> Hiển thị số KYC chờ duyệt
              theo thời gian thực
              <br />
              <strong>❻ Đã duyệt hôm nay:</strong> Số KYC đã duyệt trong ngày
              <br />
              <strong>❼ Đã từ chối hôm nay:</strong> Số KYC đã từ chối trong
              ngày
              <br />
              <strong>Tự làm mới:</strong> Thống kê cập nhật mỗi 30 giây
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ❽❾❿⓫ Bộ lọc & Tìm kiếm
            </div>
            <div className="text-gray-700">
              <strong>❽ Bộ lọc trạng thái:</strong> Lọc theo trạng thái KYC
              <br />
              <strong>❾ Bộ lọc ưu tiên:</strong> Sắp xếp theo độ ưu tiên (theo
              thời gian gửi)
              <br />
              <strong>❿ Tìm kiếm:</strong> Tìm theo tên, email, ID người dùng
              <br />
              <strong>⓫ Nút tìm:</strong> Thực hiện tìm với các bộ lọc đang chọn
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ⓬⓭⓮⓯ Danh sách KYC
            </div>
            <div className="text-gray-700">
              <strong>⓬ Tiêu đề danh sách:</strong> Hiển thị tổng số và tuỳ chọn
              sắp xếp
              <br />
              <strong>⓭⓮⓯ Mục KYC:</strong> Hiển thị thông tin cần thiết để rà
              soát nhanh
              <ul className="list-disc ml-5 mt-1">
                <li>Tên người dùng, email, ID</li>
                <li>Trạng thái gửi và thời gian (time ago)</li>
                <li>Tóm tắt trạng thái tài liệu đã tải lên</li>
                <li>Chỉ báo ưu tiên (màu đỏ cho {"<"} 72h)</li>
              </ul>
              <strong>Hành động click:</strong> Chọn mục → Tải chi tiết sang
              panel bên phải
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ⓰⓱ Thông tin tài khoản người dùng
            </div>
            <div className="text-gray-700">
              <strong>⓰ Tiêu đề panel chi tiết:</strong> Hiển thị tên người dùng
              được chọn
              <br />
              <strong>⓱ Tóm tắt tài khoản:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Họ tên, email, số điện thoại từ profile</li>
                <li>Ngày đăng ký</li>
                <li>Loại tài khoản (Buyer/Seller/Contract Manager)</li>
                <li>Trạng thái tài khoản và lịch sử</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ⓲⓳⓴ Rà soát tài liệu
            </div>
            <div className="text-gray-700">
              <strong>⓲ Tài liệu ID:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Hiển thị mặt trước/mặt sau của CCCD/CMND</li>
                <li>Trích xuất và xác minh thông tin bằng OCR</li>
                <li>Kiểm tra ngày hết hạn</li>
                <li>Xác minh các chỉ dấu xác thực</li>
              </ul>
              <strong>⓳ Sao kê ngân hàng:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Xem file PDF sao kê ngân hàng</li>
                <li>Xác minh quyền sở hữu tài khoản</li>
                <li>Kiểm tra lịch sử giao dịch</li>
              </ul>
              <strong>⓴ Xác thực selfie:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Selfie kèm giấy tờ</li>
                <li>So khớp khuôn mặt với ảnh trên ID</li>
                <li>Phát hiện sống (liveness detection)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ㉑㉒㉓㉔㉕ Hành động xác thực
            </div>
            <div className="text-gray-700">
              <strong>㉑ Ghi chú:</strong> Admin có thể thêm ghi chú về quá
              trình xác thực
              <br />
              <strong>㉒ Duyệt:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Cập nhật user.kyc_status = 'approved'</li>
                <li>Mở tính năng nâng cao cho người dùng</li>
                <li>Gửi thông báo phê duyệt</li>
                <li>Ghi log hành động kèm admin ID, timestamp</li>
              </ul>
              <strong>㉓ Từ chối:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Cập nhật user.kyc_status = 'rejected'</li>
                <li>Yêu cầu lý do từ chối</li>
                <li>Gửi email chi tiết lý do từ chối</li>
                <li>Cho phép người dùng nộp lại</li>
              </ul>
              <strong>㉔ Yêu cầu bổ sung thông tin:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Cập nhật status = 'needs_info'</li>
                <li>Gửi yêu cầu cụ thể tới người dùng</li>
                <li>Đặt nhắc để theo dõi</li>
              </ul>
              <strong>㉕ Đánh dấu để xem lại:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Gắn cờ để cấp trên xem xét</li>
                <li>Trường hợp phức tạp hoặc tài liệu khả nghi</li>
                <li>Quy trình leo thang (escalation)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            🔐 LUỒNG XỬ LÝ XÁC THỰC KYC
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              <strong>Tải tài liệu:</strong> Người dùng tải ID, sao kê ngân
              hàng, selfie
            </li>
            <li>
              <strong>Kiểm tra ban đầu:</strong> Hệ thống kiểm tra định dạng
              file, kích thước, chất lượng
            </li>
            <li>
              <strong>Xử lý OCR:</strong> Trích xuất văn bản từ tài liệu, xác
              minh định dạng
            </li>
            <li>
              <strong>Rà soát bởi Admin:</strong> Xác thực thủ công dữ liệu đã
              trích xuất
            </li>
            <li>
              <strong>So khớp khuôn mặt:</strong> So sánh selfie với ảnh trên ID
            </li>
            <li>
              <strong>Quyết định:</strong> Duyệt, từ chối hoặc yêu cầu bổ sung
            </li>
            <li>
              <strong>Thông báo người dùng:</strong> Gửi kết quả qua email và
              thông báo trong ứng dụng
            </li>
            <li>
              <strong>Cập nhật tài khoản:</strong> Mở hoặc giới hạn tính năng
              dựa trên trạng thái KYC
            </li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500">
          <div className="font-bold text-red-800 mb-2">
            ⚠️ BẢO MẬT & TUÂN THỦ
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Bảo vệ dữ liệu:</strong> Mã hóa tất cả tài liệu đã tải lên
            </li>
            <li>
              <strong>Ghi nhật ký truy cập:</strong> Ghi lại mọi lần xem tài
              liệu kèm admin ID
            </li>
            <li>
              <strong>Chính sách lưu trữ:</strong> Tự động xoá tài liệu sau thời
              gian lưu trữ cho phép
            </li>
            <li>
              <strong>Chuỗi kiểm toán:</strong> Lịch sử đầy đủ của mọi quyết
              định xác thực
            </li>
            <li>
              <strong>Leo thang giám sát:</strong> Trường hợp phức tạp yêu cầu
              nhiều phê duyệt
            </li>
            <li>
              <strong>Phát hiện gian lận:</strong> Gắn cờ tài liệu trùng lặp
              giữa các tài khoản
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            📊 CHỈ SỐ HIỆU SUẤT
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Thời gian xử lý:</strong> Mục tiêu {"<"} 24h cho KYC tiêu
              chuẩn
            </li>
            <li>
              <strong>Tỷ lệ duyệt:</strong> Theo dõi tỷ lệ duyệt/từ chối
            </li>
            <li>
              <strong>Điểm chất lượng:</strong> Đo chất lượng và độ đầy đủ của
              tài liệu
            </li>
            <li>
              <strong>Năng suất admin:</strong> Số KYC xử lý mỗi admin mỗi ngày
            </li>
            <li>
              <strong>Hài lòng người dùng:</strong> Đánh giá phản hồi sau KYC
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
