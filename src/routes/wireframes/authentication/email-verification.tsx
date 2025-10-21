import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/wireframes/authentication/email-verification",
)({
  component: EmailVerificationWireframe,
});

export default function EmailVerificationWireframe() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF24 - XÁC THỰC EMAIL
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
            <div className="text-xs">Về trang chủ</div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <button className="text-xs text-blue-600 underline">
                Trang chủ
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 max-w-lg mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                3
              </div>
              <div className="text-4xl">📧</div>
            </div>
            <h1 className="text-2xl font-bold mb-2">Xác Thực Email</h1>
            <div className="text-sm text-gray-600">
              Kiểm tra email của bạn để hoàn tất đăng ký
            </div>
          </div>

          {/* Status Cards */}
          <div className="space-y-4 mb-8">
            {/* Pending Verification State */}
            <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-yellow-800 mb-1">
                    ⏳ Đang chờ xác thực
                  </div>
                  <div className="text-sm text-yellow-700 mb-2">
                    Chúng tôi đã gửi email xác thực đến:
                    <br />
                    <span className="font-mono text-xs bg-yellow-100 px-2 py-1 rounded">
                      abc***@gmail.com
                    </span>
                  </div>
                  <div className="text-xs text-yellow-600">
                    Email gửi lúc: 14:30 - Hết hạn sau:{" "}
                    <span className="font-semibold">24 giờ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success State (Hidden by default) */}
            <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg hidden">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-green-800 mb-1">
                    ✅ Email đã được xác thực!
                  </div>
                  <div className="text-sm text-green-700 mb-3">
                    Tài khoản của bạn đã được kích hoạt thành công.
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold">
                    Tiếp tục đến Dashboard
                  </button>
                </div>
              </div>
            </div>

            {/* Error State (Hidden by default) */}
            <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg hidden">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-red-800 mb-1">
                    ❌ Link xác thực không hợp lệ
                  </div>
                  <div className="text-sm text-red-700 mb-3">
                    Link đã hết hạn hoặc đã được sử dụng. Vui lòng yêu cầu gửi
                    lại.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {/* Resend Email */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <span className="text-sm font-semibold">
                  Chưa nhận được email?
                </span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                📧 Gửi Lại Email Xác Thực
              </button>
              <div className="text-xs text-gray-500 mt-1 text-center">
                Bạn có thể yêu cầu gửi lại sau{" "}
                <span className="font-semibold">60 giây</span>
              </div>
            </div>

            {/* Change Email */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <span className="text-sm font-semibold">Email sai?</span>
              </div>
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50">
                ✏️ Thay Đổi Địa Chỉ Email
              </button>
            </div>

            {/* Manual Token Entry */}
            <div className="border-t pt-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  9
                </div>
                <span className="text-sm font-semibold">
                  Nhập mã xác thực thủ công
                </span>
              </div>
              <div className="space-y-3">
                <input
                  className="w-full border-2 border-gray-300 rounded p-3 text-center font-mono text-lg tracking-widest"
                  maxLength={6}
                  placeholder="000000"
                  type="text"
                />
                <button className="w-full bg-gray-600 text-white py-2 rounded font-semibold">
                  Xác Thực
                </button>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                10
              </div>
              <div className="text-sm">
                <div className="font-semibold text-blue-800 mb-2">
                  📋 Hướng dẫn:
                </div>
                <ol className="text-blue-700 space-y-1 list-decimal ml-4">
                  <li>
                    Kiểm tra hộp thư đến của email:{" "}
                    <span className="font-mono text-xs">abc***@gmail.com</span>
                  </li>
                  <li>
                    Tìm email từ "Copyright Hub" với tiêu đề "Xác thực tài
                    khoản"
                  </li>
                  <li>Click vào link "Xác thực email" trong email</li>
                  <li>Hoặc copy mã 6 số và nhập vào ô bên trên</li>
                  <li>Kiểm tra thư mục Spam nếu không thấy email</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-6 text-center">
            <div className="text-xs text-gray-500 mb-2">Vẫn gặp vấn đề?</div>
            <div className="flex items-center justify-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                11
              </div>
              <button className="text-xs text-blue-600 underline">
                Liên hệ hỗ trợ
              </button>
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
              ❶❷ Phần đầu & Điều hướng
            </div>
            <div className="text-gray-700">
              <strong>❶ Logo:</strong> Nhấp → Về trang chủ (WF01)
              <br />
              <strong>❷ Trang chủ:</strong> Nhấp → Navigate về landing page
              <br />
              <strong>Access:</strong> Người dùng được chuyển hướng tới đây sau
              khi đăng ký (WF04)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❸ Tiêu đề trang & Biểu tượng
            </div>
            <div className="text-gray-700">
              <strong>Icon:</strong> 📧 Dấu hiệu trực quan cho email
              verification
              <br />
              <strong>Title:</strong> Rõ ràng và hướng hành động
              <br />
              <strong>Context:</strong> Giải thích người dùng cần làm gì tiếp
              theo
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❄❺❻ Trạng thái xác thực
            </div>
            <div className="text-gray-700">
              <strong>❄ Pending (Default):</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Hiển thị địa chỉ email đã được che một phần</li>
                <li>Hiển thị thời gian gửi + thời hạn</li>
                <li>Sơ đồ màu vàng = đang chờ</li>
              </ul>
              <strong>❺ Success:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Hiển thị khi token được xác thực thành công</li>
                <li>Cung cấp điều hướng đến dashboard</li>
                <li>Sơ đồ màu xanh lá = thành công</li>
              </ul>
              <strong>❻ Error:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Tình huống token không hợp lệ / hết hạn</li>
                <li>Cung cấp các tùy chọn phục hồi</li>
                <li>Sơ đồ màu đỏ = lỗi</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❼ Resend Email</div>
            <div className="text-gray-700">
              <strong>Hành động khi nhấn:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>
                  Kiểm tra xem người dùng có thể resend không (rate limiting)
                </li>
                <li>Invalidate previous verification tokens</li>
                <li>Generate new verification token</li>
                <li>Send new email with fresh token</li>
                <li>Update UI với new timestamp</li>
                <li>Bắt đầu cooldown 60 giây</li>
              </ol>
              <strong>Rate limiting:</strong> 1 resend per 60 seconds, max 5 per
              hour
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❽ Change Email</div>
            <div className="text-gray-700">
              <strong>Hành động khi nhấn:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Show modal/popup để nhập email mới</li>
                <li>Validate định dạng email</li>
                <li>Kiểm tra email chưa được đăng ký</li>
                <li>Update user record với email mới</li>
                <li>Send verification to new email</li>
                <li>Update trang với new masked email</li>
              </ol>
              <strong>Security:</strong> Yêu cầu xác nhận mật khẩu khi thay đổi
              email
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❾ Manual Token Entry
            </div>
            <div className="text-gray-700">
              <strong>6-digit code input:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Chỉ chấp nhận nhập số</li>
                <li>Auto-format với khoảng cách</li>
                <li>Gửi khi nhập đủ 6 chữ số</li>
                <li>Xóa trường khi có lỗi</li>
              </ul>
              <strong>Verification process:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>POST to /auth/verify-email</li>
                <li>Body: {`{token: "123456", type: "manual"}`}</li>
                <li>Validate token in database</li>
                <li>Mark user as verified</li>
                <li>Show success state ❺</li>
              </ol>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❿⓫ Hướng dẫn & Hỗ trợ
            </div>
            <div className="text-gray-700">
              <strong>❿ Hướng dẫn từng bước:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Hướng dẫn trực quan cho việc kiểm tra email</li>
                <li>Bao gồm lời nhắc kiểm tra thư mục Spam</li>
                <li>Hiển thị chính xác tên người gửi email</li>
              </ul>
              <strong>⓫ Liên hệ hỗ trợ:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Link tới hệ thống support ticket</li>
                <li>Hoặc thông tin liên hệ trực tiếp</li>
                <li>Lộ trình xử lý khi vấn đề kéo dài</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📧 EMAIL VERIFICATION FLOW
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              <strong>Đăng ký người dùng:</strong> Tạo tài khoản → Chuyển hướng
              tới trang verification
            </li>
            <li>
              <strong>Gửi email:</strong> 6-digit code + clickable link gửi tới
              email người dùng
            </li>
            <li>
              <strong>Truy cập trang:</strong> Hiển thị trạng thái xác thực +
              tùy chọn resend
            </li>
            <li>
              <strong>Nhấn link:</strong> Email link → Verify token → Chuyển
              hướng sau khi thành công
            </li>
            <li>
              <strong>Nhập tay:</strong> Người dùng nhập 6-digit code → Xác thực
              ngay lập tức
            </li>
            <li>
              <strong>Luồng thành công:</strong> Tài khoản kích hoạt → Chuyển
              hướng tới dashboard phù hợp
            </li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            🔒 CÁC VẤN ĐỀ BẢO MẬT
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Token expiration:</strong> 24 hours cho email verification
            </li>
            <li>
              <strong>Single use:</strong> Token được invalidated sau khi xác
              thực thành công
            </li>
            <li>
              <strong>Rate limiting:</strong> Ngăn spam với resend cooldowns
            </li>
            <li>
              <strong>Secure storage:</strong> Hash tokens trong database
            </li>
            <li>
              <strong>Audit trail:</strong> Ghi log tất cả các lần thử xác thực
            </li>
            <li>
              <strong>Email security:</strong> Sử dụng DKIM/SPF để prevent
              spoofing
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500">
          <div className="font-bold text-purple-800 mb-2">
            🔄 TÌNH HUỐNG LỖI
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              <strong>Token expired:</strong> Hiển thị lỗi + đề nghị resend
            </li>
            <li>
              <strong>Token used:</strong> "Already verified" + tùy chọn đăng
              nhập
            </li>
            <li>
              <strong>Invalid token:</strong> "Invalid code" + thử lại
            </li>
            <li>
              <strong>Email delivery failure:</strong> Vấn đề với provider +
              phương án thay thế thủ công
            </li>
            <li>
              <strong>Wrong email:</strong> Cung cấp tùy chọn thay đổi email
            </li>
            <li>
              <strong>Network errors:</strong> Cơ chế retry với exponential
              backoff
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
