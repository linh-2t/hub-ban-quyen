import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/profile")({
  component: ProfileManagementWireframe,
});

export default function ProfileManagementWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF21 - QUẢN LÝ HỒ SƠ
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              1
            </div>
            <div className="text-sm">← Quay lại Bảng điều khiển</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <div className="text-xs">Nguyễn Văn A ▼</div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar Menu */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50 p-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-blue-100 p-3 rounded font-semibold">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-sm">👤 Thông tin cá nhân</div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded hover:bg-gray-100 cursor-pointer">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <div className="text-sm">🔒 Bảo mật</div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded hover:bg-gray-100 cursor-pointer">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <div className="text-sm">🏦 Tài khoản ngân hàng</div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded hover:bg-gray-100 cursor-pointer">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <div className="text-sm">🔔 Thông báo</div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded hover:bg-gray-100 cursor-pointer">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <div className="text-sm">📜 Lịch sử giao dịch</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="max-w-3xl">
              {/* Page Title */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <h1 className="text-2xl font-bold">Thông Tin Cá Nhân</h1>
                </div>
                <div className="text-sm text-gray-600">
                  Cập nhật thông tin tài khoản của bạn
                </div>
              </div>

              {/* Avatar Section */}
              <div className="mb-6 p-5 bg-gray-50 border-2 border-gray-300 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    9
                  </div>
                  <div className="font-bold">Ảnh Đại Diện</div>
                </div>
                <div className="flex items-center gap-6 ml-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-4xl">
                      👤
                    </div>
                    <div className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold absolute -top-1 -left-1">
                        10
                      </div>
                      <span className="text-white text-xl">📷</span>
                    </div>
                  </div>
                  <div>
                    <button
                      className="px-4 py-2 border-2 border-gray-300 rounded mb-2 text-sm hover:bg-gray-100"
                      type="button"
                    >
                      Tải ảnh mới lên
                    </button>
                    <button
                      className="px-4 py-2 text-red-600 text-sm hover:underline block"
                      type="button"
                    >
                      Xóa ảnh
                    </button>
                    <div className="text-xs text-gray-500 mt-2">
                      JPG, PNG (Tối đa 2MB)
                      <br />
                      Khuyến nghị: 400x400 px
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Info Form */}
              <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
                  </div>
                  <div className="font-bold">Thông Tin Cơ Bản</div>
                </div>

                <div className="space-y-4 ml-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">
                        Họ và tên *
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                        type="text"
                        value="Nguyễn Văn A"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">
                        Email *
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded p-2 text-sm bg-gray-100"
                        disabled
                        type="email"
                        value="nguyenvana@email.com"
                      />
                      <div className="text-xs text-gray-500 mt-1">
                        Không thể thay đổi email
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">
                        Số điện thoại *
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                        type="text"
                        value="0901234567"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">
                        Ngày sinh
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                        type="date"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-1 block">
                      Địa chỉ
                    </label>
                    <input
                      className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                      placeholder="Số nhà, đường, quận/huyện, tỉnh/thành phố"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              {/* Company Info (If applicable) */}
              <div className="mb-6 p-5 border-2 border-blue-300 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    12
                  </div>
                  <div className="font-bold">Thông Tin Công Ty</div>
                </div>

                <div className="space-y-4 ml-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">
                        Tên công ty
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded p-2 text-sm bg-white"
                        type="text"
                        value="Nhà Xuất Bản Trẻ"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">
                        Mã số thuế
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded p-2 text-sm bg-white"
                        type="text"
                        value="0123456789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-1 block">
                      Địa chỉ công ty
                    </label>
                    <input
                      className="w-full border-2 border-gray-300 rounded p-2 text-sm bg-white"
                      type="text"
                      value="161B Lý Chính Thắng, Q.3, TP.HCM"
                    />
                  </div>
                </div>
              </div>

              {/* Bio/About */}
              <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <div className="font-bold">Giới Thiệu</div>
                </div>
                <div className="ml-8">
                  <textarea
                    className="w-full border-2 border-gray-300 rounded p-3 text-sm h-24"
                    placeholder="Viết vài dòng giới thiệu về bạn hoặc công ty..."
                  ></textarea>
                  <div className="text-xs text-gray-500 text-right">
                    0 / 500
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="font-bold">Liên Kết Mạng Xã Hội</div>
                </div>
                <div className="space-y-3 ml-8">
                  <div>
                    <label className="text-sm font-semibold mb-1 block">
                      Website
                    </label>
                    <input
                      className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                      placeholder="https://yourwebsite.com"
                      type="url"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">
                        Facebook
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                        placeholder="facebook.com/username"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">
                        LinkedIn
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                        placeholder="linkedin.com/in/username"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <button
                    className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
                    type="button"
                  >
                    Hủy
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <button
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                    type="button"
                  >
                    Lưu Thay Đổi
                  </button>
                </div>
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
            <div className="font-bold text-blue-600">❸❹❺❻❼ Menu Thanh bên</div>
            <div className="text-gray-700">
              <strong>❸ Thông tin cá nhân:</strong> Tab hiện tại (đang chọn)
              <br />
              <strong>❹ Bảo mật:</strong> Click → Trang đổi mật khẩu, cài đặt
              2FA
              <br />
              <strong>❺ Tài khoản ngân hàng:</strong> Click → Trang quản lý TK
              ngân hàng (cho Seller nhận tiền)
              <br />
              <strong>❻ Thông báo:</strong> Click → Tùy chọn thông báo
              <br />
              <strong>❼ Lịch sử giao dịch:</strong> Click → Lịch sử giao dịch
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❾❿ Tải Ảnh Đại Diện</div>
            <div className="text-gray-700">
              <strong>❿ Biểu tượng camera:</strong> Click → Mở trình chọn tệp
              <br />
              <strong>Định dạng chấp nhận:</strong> JPG, PNG
              <br />
              <strong>Kích thước tối đa:</strong> 2MB
              <br />
              <strong>Kiểm tra:</strong> Kiểm tra kích thước ảnh, cắt vuông nếu
              cần
              <br />
              <strong>Xem trước:</strong> Hiển thị xem trước trước khi lưu
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓫ Thông Tin Cơ Bản</div>
            <div className="text-gray-700">
              <strong>Trường Email:</strong> Đã vô hiệu hóa, không thể thay đổi
              (bảo mật)
              <br />
              <strong>Xác thực số điện thoại:</strong> Định dạng số điện thoại
              VN
              <br />
              <strong>Trường bắt buộc:</strong> Họ tên, Số điện thoại
              <br />
              <strong>Tự động lưu nháp:</strong> Mỗi 30s (tùy chọn)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓬ Thông Tin Công Ty</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Chỉ khi user có loại tổ chức = "Công
              ty"
              <br />
              <strong>Không thể chỉnh sửa:</strong> Tên công ty và MST không thể
              thay đổi (đã xác minh trong KYC)
              <br />
              <strong>Liên hệ admin:</strong> Nếu muốn thay đổi → Phải liên hệ
              admin
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓭ Giới Thiệu</div>
            <div className="text-gray-700">
              <strong>Độ dài tối đa:</strong> 500 ký tự
              <br />
              <strong>Hiển thị:</strong> Hiển thị trên trang hồ sơ người bán
              (công khai)
              <br />
              <strong>Tùy chọn:</strong> Không bắt buộc
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">
              ⓮ Liên Kết Mạng Xã Hội
            </div>
            <div className="text-gray-700">
              <strong>Tùy chọn:</strong> Không bắt buộc
              <br />
              <strong>Kiểm tra:</strong> Kiểm tra định dạng URL
              <br />
              <strong>Hiển thị:</strong> Hiển thị biểu tượng trên trang hồ sơ
              công khai
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓯⓰ Nút hành động</div>
            <div className="text-gray-700">
              <strong>⓯ Hủy:</strong> Hủy thay đổi, tải lại dữ liệu ban đầu
              <br />
              <strong>⓰ Lưu Thay Đổi:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Kiểm tra hợp lệ tất cả các trường</li>
                <li>Hiển thị trạng thái đang tải</li>
                <li>Gửi yêu cầu PUT tới API</li>
                <li>
                  Thành công: Toast "Đã cập nhật thành công" + Cập nhật phiên
                </li>
                <li>Lỗi: Hiển thị thông báo lỗi</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 CÁC TAB KHÁC</div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Bảo mật:</strong> Đổi mật khẩu, Bật 2FA, Phiên hoạt động,
              Lịch sử đăng nhập
            </li>
            <li>
              <strong>TK Ngân hàng:</strong> Thêm/Chỉnh sửa/Xóa tài khoản ngân
              hàng (cho Seller nhận tiền)
            </li>
            <li>
              <strong>Thông báo:</strong> Tùy chọn thông báo Email/SMS/Push
            </li>
            <li>
              <strong>Lịch sử:</strong> Tất cả giao dịch, tải xuống, hoạt động
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
