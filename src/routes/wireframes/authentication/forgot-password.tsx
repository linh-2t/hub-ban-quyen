import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/wireframes/authentication/forgot-password",
)({
  component: ForgotPasswordWireframe,
});

export default function ForgotPasswordWireframe() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF22 - QUÊN MẬT KHẨU
      </h1>

      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              1
            </div>
            <div className="text-sm font-semibold">🏢 Copyright Hub</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs">Nhớ mật khẩu?</div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <button className="text-xs text-blue-600 underline">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 max-w-md mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <h1 className="text-2xl font-bold">Quên Mật Khẩu</h1>
            </div>
            <div className="text-sm text-gray-600">
              Nhập email để nhận link khôi phục mật khẩu
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <label className="text-sm font-semibold">
                  Email đã đăng ký
                </label>
              </div>
              <input
                className="w-full border-2 border-gray-300 rounded p-3 text-sm"
                placeholder="email@example.com"
                type="email"
              />
              <div className="text-xs text-gray-500 mt-1">
                Chúng tôi sẽ gửi link khôi phục đến email này
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                5
              </div>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                📧 Gửi Link Khôi Phục
              </button>
            </div>

            {/* Success Message (Hidden by default) */}
            <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg hidden">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-800">
                    ✅ Email đã được gửi!
                  </div>
                  <div className="text-xs text-green-700 mt-1">
                    Vui lòng kiểm tra hộp thư của bạn và click vào link khôi
                    phục mật khẩu. Link có hiệu lực trong 30 phút.
                  </div>
                </div>
              </div>
            </div>

            {/* Error Message (Hidden by default) */}
            <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg hidden">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <div>
                  <div className="text-sm font-semibold text-red-800">
                    ❌ Email không tồn tại
                  </div>
                  <div className="text-xs text-red-700 mt-1">
                    Email này chưa được đăng ký trong hệ thống. Vui lòng kiểm
                    tra lại hoặc đăng ký tài khoản mới.
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Login */}
            <div className="text-center pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <div className="text-sm">
                  <span className="text-gray-600">Nhớ mật khẩu?</span>
                  <button className="text-blue-600 underline ml-1">
                    Đăng nhập ngay
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

        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❶❷ Header & Navigation
            </div>
            <div className="text-gray-700">
              <strong>❶ Logo:</strong> Nhấn → Về trang chủ (WF01)
              <br />
              <strong>❷ Đăng nhập:</strong> Nhấn → Quay về trang đăng nhập
              (WF03)
              <br />
              <strong>Breadcrumb:</strong> Trang chủ → Đăng nhập → Quên mật khẩu
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❸ Page Title</div>
            <div className="text-gray-700">
              <strong>Title:</strong> "Quên Mật Khẩu" - Rõ ràng và tạo cảm giác
              yên tâm
              <br />
              <strong>Subtitle:</strong> Giải thích quy trình để người dùng an
              tâm
              <br />
              <strong>Icon:</strong> 🔑 hoặc 📧 để tạo gợi ý trực quan
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❹ Email Input</div>
            <div className="text-gray-700">
              <strong>Validation:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Bắt buộc</li>
                <li>Định dạng email hợp lệ (regex validation)</li>
                <li>Kiểm tra email tồn tại trong database (backend)</li>
              </ul>
              <strong>Placeholder:</strong> "email@example.com" để hướng dẫn
              người dùng
              <br />
              <strong>Autofocus:</strong> Tự động focus khi tải trang
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❺ Submit Button</div>
            <div className="text-gray-700">
              <strong>Action when clicked:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Xác thực trường email</li>
                <li>Hiển thị trạng thái loading (disabled + spinner)</li>
                <li>POST request đến /auth/forgot-password</li>
                <li>Backend tạo reset token (UUID)</li>
                <li>Lưu token vào database với expiry (30 phút)</li>
                <li>Send email với reset link</li>
                <li>Hiển thị thông báo thành công ❻</li>
              </ol>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❻❼ Response Messages
            </div>
            <div className="text-gray-700">
              <strong>❻ Success State:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Hiển thị hộp thông báo màu xanh</li>
                <li>Ẩn form để tránh spam</li>
                <li>Thông báo về việc đã gửi email & thời hạn hiệu lực</li>
                <li>Cung cấp tuỳ chọn "Didn't receive?"</li>
              </ul>
              <strong>❼ Error State:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Email không tồn tại → Hiển thị lỗi màu đỏ</li>
                <li>Rate limit exceeded → "Quá nhiều requests"</li>
                <li>System error → "Lỗi hệ thống, thử lại sau"</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❽ Back to Login</div>
            <div className="text-gray-700">
              <strong>Purpose:</strong> Cung cấp cách quay lại nhanh nếu người
              dùng nhớ mật khẩu
              <br />
              <strong>Action:</strong> Điều hướng tới WF03 (Login)
              <br />
              <strong>Positioning:</strong> Đặt bên dưới form để không làm phân
              tán khỏi hành động chính
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📧 EMAIL TEMPLATE
          </div>
          <div className="text-sm text-gray-700">
            <strong>Subject:</strong> Khôi phục mật khẩu tài khoản Copyright Hub
            <br />
            <strong>Content:</strong>
            <ul className="list-disc ml-5 mt-1">
              <li>Lời chào: "Xin chào [Tên]"</li>
              <li>Lý do: "Bạn đã yêu cầu khôi phục mật khẩu"</li>
              <li>Reset Link: "Click để tạo mật khẩu mới: [LINK]"</li>
              <li>Expiry: "Link có hiệu lực trong 30 phút"</li>
              <li>Security: "Nếu không phải bạn, vui lòng bỏ qua email này"</li>
              <li>Support: "Liên hệ support nếu cần hỗ trợ"</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            🔒 SECURITY MEASURES
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Rate limiting:</strong> Tối đa 3 requests cho mỗi email
              mỗi giờ
            </li>
            <li>
              <strong>Token security:</strong> Cryptographically secure random
              token
            </li>
            <li>
              <strong>Single use:</strong> Token bị vô hiệu sau khi reset mật
              khẩu
            </li>
            <li>
              <strong>Audit log:</strong> Ghi lại tất cả các lần thử khôi phục
              mật khẩu
            </li>
            <li>
              <strong>Email masking:</strong> "Email sent to abc***@***.com"
              trong phản hồi
            </li>
            <li>
              <strong>No user enumeration:</strong> Trả về cùng một phản hồi cho
              email tồn tại/không tồn tại
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500">
          <div className="font-bold text-purple-800 mb-2">🔄 WORKFLOW</div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>Người dùng nhập email → Hệ thống xác thực → Gửi email</li>
            <li>
              Người dùng click vào link trong email → Chuyển tới WF23 (Reset
              Password)
            </li>
            <li>
              Người dùng nhập mật khẩu mới → Token được xác thực → Cập nhật mật
              khẩu
            </li>
            <li>
              Thành công → Tự động đăng nhập hoặc chuyển hướng về trang đăng
              nhập kèm thông báo
            </li>
            <li>
              Token hết hạn/không hợp lệ → Hiển thị lỗi với tuỳ chọn yêu cầu
              token mới
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
