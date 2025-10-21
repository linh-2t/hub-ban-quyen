import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/authentication/login")({
  component: LoginWireframe,
});

export default function LoginWireframe() {
  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF03 - ĐĂNG NHẬP
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Simple Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              1
            </div>
            <div className="text-sm font-semibold">Logo</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs">Chưa có tài khoản?</div>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              2
            </div>
            <div className="text-xs underline">Đăng ký ngay</div>
          </div>
        </div>

        <div className="p-8 max-w-md mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">
              3
            </div>
            <div className="text-2xl font-bold">Đăng Nhập</div>
            <div className="text-sm text-gray-600 mt-2">
              Chào mừng bạn quay trở lại!
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <label className="text-sm font-semibold">Email</label>
              </div>
              <input
                className="w-full border-2 border-gray-300 rounded p-3 text-sm"
                placeholder="email@example.com"
                type="email"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <label className="text-sm font-semibold">Mật khẩu</label>
              </div>
              <div className="relative">
                <input
                  className="w-full border-2 border-gray-300 rounded p-3 text-sm pr-10"
                  placeholder="••••••••"
                  type="password"
                />
                <div className="absolute right-3 top-3 flex items-center gap-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <span className="text-xs">👁️</span>
                </div>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <input className="mr-1" id="remember" type="checkbox" />
                <label className="text-sm" htmlFor="remember">
                  Ghi nhớ đăng nhập
                </label>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <a className="text-sm text-blue-600 underline" href="#">
                  Quên mật khẩu?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <div className="flex items-center gap-2 mt-6">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                9
              </div>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Đăng Nhập
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">
                  Hoặc đăng nhập bằng
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  10
                </div>
                <button className="flex-1 border-2 border-gray-300 py-3 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
                  <span className="text-lg">G</span> Google
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  11
                </div>
                <button className="flex-1 border-2 border-gray-300 py-3 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
                  <span className="text-lg">f</span> Facebook
                </button>
              </div>
            </div>
          </div>

          {/* Error Message Area */}
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded hidden">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                12
              </div>
              <div className="text-sm text-red-600">
                ❌ Email hoặc mật khẩu không đúng. Vui lòng thử lại.
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
            <div className="font-bold text-blue-600 mb-1">❶ Logo</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Hiển thị logo nền tảng
              <br />
              <strong>Tương tác:</strong> Click → Quay về trang chủ (WF01)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❷ Link "Đăng Ký Ngay"
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Chuyển sang trang đăng ký
              <br />
              <strong>Tương tác:</strong> Click → Chuyển đến WF02 (Đăng ký)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❸ Tiêu Đề Trang</div>
            <div className="text-gray-700">
              <strong>Nội dung:</strong> "Đăng Nhập"
              <br />
              <strong>Mô tả phụ:</strong> "Chào mừng bạn quay trở lại!"
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❹ Input "Email"</div>
            <div className="text-gray-700">
              <strong>Loại:</strong> Email input
              <br />
              <strong>Validation:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Required field</li>
                <li>Email format hợp lệ</li>
              </ul>
              <strong>Error messages:</strong>
              <ul className="list-disc ml-5">
                <li>"Vui lòng nhập email"</li>
                <li>"Email không hợp lệ"</li>
              </ul>
              <strong>Autofocus:</strong> Cursor tự động focus vào field này khi
              trang load
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❺ Input "Mật Khẩu"
            </div>
            <div className="text-gray-700">
              <strong>Loại:</strong> Password input (type="password")
              <br />
              <strong>Validation:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Required field</li>
              </ul>
              <strong>Enter key:</strong> Nhấn Enter trong field này → Submit
              form đăng nhập
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❻ Icon Toggle Show/Hide Password
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Hiển thị/ẩn mật khẩu
              <br />
              <strong>Tương tác:</strong> Click → Toggle type giữa "password" và
              "text"
              <br />
              <strong>Icon:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>👁️ (eye) khi đang ẩn</li>
                <li>👁️‍🗨️ (eye slash) khi đang hiển thị</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❼ Checkbox "Ghi Nhớ Đăng Nhập"
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Lưu session lâu dài
              <br />
              <strong>Tương tác:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Checked → JWT token có expiry dài (30 ngày)</li>
                <li>Unchecked → JWT token có expiry ngắn (24 giờ)</li>
              </ul>
              <strong>Lưu trữ:</strong> Lưu token vào localStorage nếu checked,
              sessionStorage nếu unchecked
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❽ Link "Quên Mật Khẩu?"
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Khôi phục mật khẩu
              <br />
              <strong>Tương tác:</strong> Click → Chuyển đến trang reset
              password (WF04 - sẽ tạo sau)
              <br />
              <strong>Quy trình:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Nhập email</li>
                <li>Hệ thống gửi email reset password với token</li>
                <li>Click link trong email</li>
                <li>Nhập mật khẩu mới</li>
                <li>Xác nhận và login lại</li>
              </ol>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❾ Button "Đăng Nhập"
            </div>
            <div className="text-gray-700">
              <strong>Tương tác khi click:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Validate email và password fields</li>
                <li>Nếu có lỗi → Hiển thị error messages</li>
                <li>
                  Nếu valid → Gửi POST request đến API /auth/login với body:
                  <pre className="bg-gray-100 p-2 rounded text-xs mt-1">
                    {`{
  "email": "user@example.com",
  "password": "********",
  "remember_me": true/false
}`}
                  </pre>
                </li>
                <li>
                  Loading state: Button disabled + Hiển thị spinner text "Đang
                  đăng nhập..."
                </li>
                <li>
                  Success:
                  <ul className="list-disc ml-5">
                    <li>Lưu JWT token vào localStorage/sessionStorage</li>
                    <li>
                      Lưu user info (id, name, email, role) vào state/context
                    </li>
                    <li>
                      Redirect theo role:
                      <ul className="list-circle ml-5">
                        <li>Seller → Dashboard Seller (WF05)</li>
                        <li>Buyer → Dashboard Buyer (WF09 - Marketplace)</li>
                        <li>Admin → Admin Dashboard (WF20)</li>
                        <li>Contract Manager → Contract Dashboard (WF23)</li>
                        <li>Accountant → Accountant Dashboard (WF18)</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Error cases:
                  <ul className="list-disc ml-5">
                    <li>
                      401 Unauthorized → Hiển thị error ⓬ "Email hoặc mật khẩu
                      không đúng"
                    </li>
                    <li>
                      403 Account not verified → "Tài khoản chưa được xác thực.
                      Vui lòng check email"
                    </li>
                    <li>
                      403 Account suspended → "Tài khoản đã bị khóa. Liên hệ
                      support"
                    </li>
                    <li>
                      500 Server error → "Lỗi hệ thống. Vui lòng thử lại sau"
                    </li>
                  </ul>
                </li>
              </ol>
              <strong>Keyboard:</strong> Có thể submit bằng Enter key
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❿ Button "Google Login"
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Đăng nhập bằng tài khoản Google
              <br />
              <strong>Tương tác:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Click → Mở OAuth popup/redirect Google</li>
                <li>User đăng nhập Google và authorize</li>
                <li>Google callback với authorization code</li>
                <li>Backend exchange code → Get user info từ Google</li>
                <li>
                  Check email đã tồn tại trong DB:
                  <ul className="list-disc ml-5">
                    <li>Có → Login thành công → Redirect đến dashboard</li>
                    <li>
                      Không → Tạo account mới tự động → Hiển thị popup chọn role
                      (Seller/Buyer) → Redirect đến dashboard
                    </li>
                  </ul>
                </li>
              </ol>
              <strong>Lưu ý:</strong> Account tạo từ OAuth tự động có
              status="verified"
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓫ Button "Facebook Login"
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Đăng nhập bằng tài khoản Facebook
              <br />
              <strong>Tương tác:</strong> Tương tự Google Login
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓬ Error Message Area
            </div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Chỉ khi có lỗi từ API
              <br />
              <strong>Style:</strong> Background đỏ nhạt, border đỏ, icon
              warning
              <br />
              <strong>Các loại error messages:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>"Email hoặc mật khẩu không đúng"</li>
                <li>"Tài khoản chưa được xác thực. Vui lòng check email"</li>
                <li>
                  "Tài khoản đã bị tạm khóa. Liên hệ support@platform.com"
                </li>
                <li>"Đã xảy ra lỗi. Vui lòng thử lại sau"</li>
              </ul>
              <strong>Auto-hide:</strong> Có thể tự động ẩn sau 5 giây hoặc khi
              user bắt đầu nhập lại
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📌 LƯU Ý KỸ THUẬT
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              • <strong>Rate limiting:</strong> Max 5 lần login thất bại trong
              15 phút → Block IP tạm thời
            </li>
            <li>
              • <strong>Session management:</strong>
              <ul className="list-disc ml-5">
                <li>JWT token có expiry</li>
                <li>Refresh token mechanism để gia hạn session</li>
              </ul>
            </li>
            <li>
              • <strong>Security:</strong>
              <ul className="list-disc ml-5">
                <li>Password không được gửi plain text (hash trên server)</li>
                <li>HTTPS bắt buộc</li>
                <li>CSRF protection</li>
              </ul>
            </li>
            <li>
              • <strong>Multi-device:</strong> Cho phép đăng nhập nhiều thiết bị
              cùng lúc, tracking sessions
            </li>
            <li>
              • <strong>Email unverified:</strong> Nếu user chưa verify email,
              hiển thị banner "Email chưa được xác thực" với button "Gửi lại
              email xác thực"
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">🔐 BẢO MẬT</div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              • <strong>Account lockout:</strong> Sau 5 lần nhập sai mật khẩu →
              Khóa account 30 phút
            </li>
            <li>
              • <strong>Suspicious activity:</strong> Login từ IP/location mới →
              Gửi email cảnh báo
            </li>
            <li>
              • <strong>2FA (Phase 2):</strong> Xác thực 2 yếu tố qua SMS hoặc
              Authenticator app
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
