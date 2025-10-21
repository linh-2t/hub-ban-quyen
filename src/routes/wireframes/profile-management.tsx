import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/profile-management")({
  component: ProfileManagementWireframe,
});

export default function ProfileManagementWireframe() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF27 - QUẢN LÝ HỒ SƠ
      </h1>

      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-blue-50 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div className="text-sm font-semibold">🏢 Copyright Hub</div>
            </div>
            <div className="px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-xs font-bold text-blue-700">
              CÀI ĐẶT HỒ SƠ
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
              <button className="text-xs text-blue-600 underline">
                ← Bảng điều khiển
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-gray-100 border-r-2 border-gray-800 p-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
              <h3 className="font-bold">Cài đặt tài khoản</h3>
            </div>

            <nav className="space-y-2">
              <div className="flex items-center gap-2 p-3 bg-blue-100 border border-blue-300 rounded">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <span className="text-sm font-semibold">
                  👤 Thông tin hồ sơ
                </span>
              </div>

              <div className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded cursor-pointer">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <span className="text-sm">🔐 Bảo mật</span>
              </div>

              <div className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded cursor-pointer">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <span className="text-sm">🛡️ Trạng thái KYC</span>
              </div>

              <div className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded cursor-pointer">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <span className="text-sm">💳 Phương thức thanh toán</span>
              </div>

              <div className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded cursor-pointer">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  9
                </div>
                <span className="text-sm">🔔 Thông báo</span>
              </div>

              <div className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded cursor-pointer">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  10
                </div>
                <span className="text-sm">📊 Quyền riêng tư</span>
              </div>

              <div className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded cursor-pointer">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  11
                </div>
                <span className="text-sm">🌐 Ngôn ngữ</span>
              </div>

              <div className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded cursor-pointer">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  12
                </div>
                <span className="text-sm">❌ Xóa tài khoản</span>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                13
              </div>
              <h2 className="text-xl font-bold">👤 Thông tin hồ sơ</h2>
            </div>

            <div className="space-y-6">
              {/* Profile Photo */}
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <h3 className="font-semibold">Ảnh hồ sơ</h3>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm text-gray-500">
                      👤 Chưa có ảnh
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-3">
                      Tải lên ảnh chuyên nghiệp cho hồ sơ của bạn. Kích thước đề
                      xuất: 400x400px
                    </div>
                    <div className="flex gap-3">
                      <div className="flex items-center gap-1">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          15
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                          📸 Tải ảnh lên
                        </button>
                      </div>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm">
                        🗑️ Xóa
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Basic Information */}
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <h3 className="font-semibold">Thông tin cơ bản</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        17
                      </div>
                      <label className="text-sm font-semibold">Tên</label>
                    </div>
                    <input
                      className="w-full border border-gray-300 rounded p-3 text-sm"
                      type="text"
                      value="Nguyễn"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        18
                      </div>
                      <label className="text-sm font-semibold">Họ</label>
                    </div>
                    <input
                      className="w-full border border-gray-300 rounded p-3 text-sm"
                      type="text"
                      value="Văn A"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        19
                      </div>
                      <label className="text-sm font-semibold">
                        Địa chỉ email
                      </label>
                    </div>
                    <input
                      className="w-full border border-gray-300 rounded p-3 text-sm bg-gray-50"
                      disabled
                      type="email"
                      value="nguyen.vana@email.com"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                      ✅ Đã xác minh • Liên hệ hỗ trợ để thay đổi
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        20
                      </div>
                      <label className="text-sm font-semibold">
                        Số điện thoại
                      </label>
                    </div>
                    <input
                      className="w-full border border-gray-300 rounded p-3 text-sm"
                      type="tel"
                      value="+84 901 234 567"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                      🔄 Đang chờ xác minh
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Information (for Sellers) */}
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    21
                  </div>
                  <h3 className="font-semibold">Thông tin doanh nghiệp</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Tài khoản Người bán
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        22
                      </div>
                      <label className="text-sm font-semibold">
                        Tên doanh nghiệp
                      </label>
                    </div>
                    <input
                      className="w-full border border-gray-300 rounded p-3 text-sm"
                      type="text"
                      value="Design Studio Pro"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        23
                      </div>
                      <label className="text-sm font-semibold">
                        Mô tả doanh nghiệp
                      </label>
                    </div>
                    <textarea
                      className="w-full border border-gray-300 rounded p-3 text-sm h-24"
                      placeholder="Mô tả doanh nghiệp, chuyên môn và loại sản phẩm kỹ thuật số bạn tạo..."
                      value="Studio thiết kế chuyên nghiệp chuyên về mẫu hiện đại và tài sản kỹ thuật số cho doanh nghiệp."
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          24
                        </div>
                        <label className="text-sm font-semibold">
                          Mã số thuế
                        </label>
                      </div>
                      <input
                        className="w-full border border-gray-300 rounded p-3 text-sm"
                        type="text"
                        value="123456789"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          25
                        </div>
                        <label className="text-sm font-semibold">
                          Trang web
                        </label>
                      </div>
                      <input
                        className="w-full border border-gray-300 rounded p-3 text-sm"
                        type="url"
                        value="https://designstudiopro.com"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    26
                  </div>
                  <h3 className="font-semibold">Liên kết mạng xã hội</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        27
                      </div>
                      <label className="text-sm font-semibold">LinkedIn</label>
                    </div>
                    <input
                      className="w-full border border-gray-300 rounded p-3 text-sm"
                      placeholder="https://linkedin.com/in/yourprofile"
                      type="url"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        28
                      </div>
                      <label className="text-sm font-semibold">
                        Behance/Dribbble
                      </label>
                    </div>
                    <input
                      className="w-full border border-gray-300 rounded p-3 text-sm"
                      placeholder="https://behance.net/yourportfolio"
                      type="url"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        29
                      </div>
                      <label className="text-sm font-semibold">
                        Portfolio khác
                      </label>
                    </div>
                    <input
                      className="w-full border border-gray-300 rounded p-3 text-sm"
                      placeholder="https://yourportfolio.com"
                      type="url"
                    />
                  </div>
                </div>
              </div>

              {/* Account Status */}
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    30
                  </div>
                  <h3 className="font-semibold">Trạng thái tài khoản</h3>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 border border-green-200 rounded">
                    <div className="text-green-600 font-bold text-lg">✓</div>
                    <div className="text-sm font-semibold">
                      Email đã xác minh
                    </div>
                    <div className="text-xs text-gray-600">
                      Đã xác minh vào 15/01/2024
                    </div>
                  </div>

                  <div className="text-center p-4 bg-green-50 border border-green-200 rounded">
                    <div className="text-green-600 font-bold text-lg">✓</div>
                    <div className="text-sm font-semibold">KYC đã duyệt</div>
                    <div className="text-xs text-gray-600">
                      Đã duyệt vào 16/01/2024
                    </div>
                  </div>

                  <div className="text-center p-4 bg-yellow-50 border border-yellow-200 rounded">
                    <div className="text-yellow-600 font-bold text-lg">⏳</div>
                    <div className="text-sm font-semibold">
                      Số điện thoại chờ xác minh
                    </div>
                    <div className="text-xs text-gray-600">Cần xác minh</div>
                  </div>
                </div>
              </div>

              {/* Save Changes */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  Cập nhật lần cuối: 20/01/2024 lúc 14:30
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      31
                    </div>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50">
                      Hủy
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      32
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700">
                      💾 Lưu thay đổi
                    </button>
                  </div>
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

        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❶❷❸ Header & Điều hướng
            </div>
            <div className="text-gray-700">
              <strong>❶ Thương hiệu:</strong> Chỉ báo phần cài đặt hồ sơ
              <br />
              <strong>❷ Thông tin người dùng:</strong> Hiển thị tên người dùng
              hiện tại
              <br />
              <strong>❸ Quay lại:</strong> Trở về bảng điều khiển phù hợp
              <br />
              <strong>Nhận thức ngữ cảnh:</strong> Điều hướng điều chỉnh theo
              vai trò người dùng
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❺❻❼❽❾❿⓫⓬ Điều hướng cài đặt
            </div>
            <div className="text-gray-700">
              <strong>Danh mục cài đặt với thứ tự trực quan:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>❺ Thông tin hồ sơ:</strong> Trang hiện tại (được làm
                  nổi bật)
                </li>
                <li>
                  <strong>❻ Bảo mật:</strong> Mật khẩu, 2FA, phiên đăng nhập
                </li>
                <li>
                  <strong>❼ Trạng thái KYC:</strong> Tiến trình xác minh danh
                  tính
                </li>
                <li>
                  <strong>❽ Phương thức thanh toán:</strong> Tài khoản ngân
                  hàng, thẻ, PayPal
                </li>
                <li>
                  <strong>❾ Thông báo:</strong> Tùy chọn Email, SMS, trong ứng
                  dụng
                </li>
                <li>
                  <strong>❿ Quyền riêng tư:</strong> Chia sẻ dữ liệu, hiển thị
                  hồ sơ
                </li>
                <li>
                  <strong>⓫ Ngôn ngữ:</strong> Ngôn ngữ giao diện và múi giờ
                </li>
                <li>
                  <strong>⓬ Xóa tài khoản:</strong> Quy trình xóa tài khoản
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓭⓮⓯ Quản lý ảnh hồ sơ
            </div>
            <div className="text-gray-700">
              <strong>⓭ Tiêu đề phần:</strong> Chỉ rõ trang cài đặt hiện tại
              <br />
              <strong>⓮ Hiển thị ảnh:</strong> Ảnh hồ sơ hiện tại hoặc
              placeholder
              <br />
              <strong>⓯ Hành động tải lên:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Trình chọn tệp với kiểm tra kích thước và định dạng</li>
                <li>Công cụ cắt ảnh cho định dạng vuông</li>
                <li>Xem trước trước khi lưu</li>
                <li>Tự động thay đổi kích thước về kích thước tối ưu</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓰⓱⓲⓳⓴ Thông tin cơ bản
            </div>
            <div className="text-gray-700">
              <strong>Trường form với xác thực:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>⓱⓲ Trường tên:</strong> Xác thực thời gian thực, giới
                  hạn ký tự
                </li>
                <li>
                  <strong>⓳ Email:</strong> Bị khóa (đã xác minh), thay đổi yêu
                  cầu hỗ trợ
                </li>
                <li>
                  <strong>⓴ Điện thoại:</strong> Kiểm tra định dạng, quy trình
                  xác minh
                </li>
              </ul>
              <strong>Chỉ báo xác minh:</strong> Trạng thái hiển thị cho từng
              trường
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ㉑㉒㉓㉔㉕ Thông tin doanh nghiệp
            </div>
            <div className="text-gray-700">
              <strong>
                Trường dành cho người bán (hiển thị có điều kiện):
              </strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>㉒ Tên doanh nghiệp:</strong> Tên công khai trên
                  marketplace
                </li>
                <li>
                  <strong>㉓ Mô tả:</strong> Hồ sơ doanh nghiệp cho người mua
                </li>
                <li>
                  <strong>㉔ Mã số thuế:</strong> Bắt buộc cho báo cáo thuế
                </li>
                <li>
                  <strong>㉕ Trang web:</strong> Liên kết portfolio tùy chọn
                </li>
              </ul>
              <strong>Hiển thị theo vai trò:</strong> Chỉ hiển thị cho tài khoản
              Người bán
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ㉖㉗㉘㉙ Liên kết mạng xã hội
            </div>
            <div className="text-gray-700">
              <strong>Liên kết portfolio và chuyên nghiệp:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>㉗ LinkedIn:</strong> Mạng lưới chuyên nghiệp
                </li>
                <li>
                  <strong>㉘ Portfolio sáng tạo:</strong> Behance, Dribbble để
                  trưng bày
                </li>
                <li>
                  <strong>㉙ Liên kết khác:</strong> Trang web cá nhân,
                  portfolio bổ sung
                </li>
              </ul>
              <strong>Xác thực:</strong> Kiểm tra định dạng URL, trường tùy chọn
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ㉚㉛㉜ Trạng thái & Hành động tài khoản
            </div>
            <div className="text-gray-700">
              <strong>㉚ Trạng thái xác minh:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Trạng thái xác minh email</li>
                <li>Trạng thái phê duyệt KYC</li>
                <li>Trạng thái xác minh điện thoại</li>
                <li>Chỉ báo hiển thị kèm thời gian</li>
              </ul>
              <strong>㉛㉜ Hành động lưu:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Xác thực form trước khi gửi</li>
                <li>Cập nhật tối ưu hóa UI</li>
                <li>Xử lý lỗi và hoàn tác nếu cần</li>
                <li>Xác nhận khi thành công</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            🔄 XÁC THỰC FORM & TRẢI NGHIỆM NGƯỜI DÙNG
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Xác thực thời gian thực:</strong> Phản hồi ngay khi người
              dùng nhập
            </li>
            <li>
              <strong>Trường bắt buộc:</strong> Đánh dấu rõ ràng và thông báo
              xác thực
            </li>
            <li>
              <strong>Giới hạn ký tự:</strong> Bộ đếm ký tự hiển thị cho trường
              văn bản
            </li>
            <li>
              <strong>Định dạng điện thoại:</strong> Tự động định dạng số điện
              thoại
            </li>
            <li>
              <strong>Xác thực URL:</strong> Kiểm tra URL hợp lệ cho liên kết
              mạng xã hội
            </li>
            <li>
              <strong>Cảnh báo thay đổi chưa lưu:</strong> Ngăn mất dữ liệu do
              thao tác nhầm
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            🔐 BẢO MẬT & QUYỀN RIÊNG TƯ
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Mã hóa dữ liệu:</strong> Mã hóa thông tin nhạy cảm trước
              khi lưu
            </li>
            <li>
              <strong>Ghi nhật ký thay đổi:</strong> Lưu trail các thay đổi hồ
              sơ
            </li>
            <li>
              <strong>Xác minh email:</strong> Bắt buộc khi thay đổi email
            </li>
            <li>
              <strong>Kiểm soát quyền riêng tư:</strong> Quyền hiển thị thông
              tin cho người khác
            </li>
            <li>
              <strong>Bảo mật ảnh hồ sơ:</strong> Kiểm duyệt nội dung ảnh tải
              lên
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500">
          <div className="font-bold text-purple-800 mb-2">
            👥 TÍNH NĂNG THEO VAI TRÒ
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Hồ sơ người mua:</strong> Thông tin cơ bản + tùy chọn +
              lịch sử mua
            </li>
            <li>
              <strong>Hồ sơ người bán:</strong> Thông tin doanh nghiệp +
              portfolio + chi tiết thuế
            </li>
            <li>
              <strong>Quản lý hợp đồng:</strong> Thông tin công ty + thẩm quyền
              pháp lý + chứng chỉ
            </li>
            <li>
              <strong>Hồ sơ admin:</strong> Quản lý vai trò + nhật ký kiểm toán
              + quyền hệ thống
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
