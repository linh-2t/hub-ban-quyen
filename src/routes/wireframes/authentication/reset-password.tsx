import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/wireframes/authentication/reset-password",
)({
  component: ResetPasswordWireframe,
});

export default function ResetPasswordWireframe() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF23 - ĐẶT LẠI MẬT KHẨU
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
        <div className="p-8 max-w-md mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <h1 className="text-2xl font-bold">Đặt Lại Mật Khẩu</h1>
            </div>
            <div className="text-sm text-gray-600">
              Tạo mật khẩu mới cho tài khoản của bạn
            </div>
          </div>

          {/* Token Status */}
          <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
              <div className="text-sm">
                <div className="font-semibold text-green-800">
                  ✅ Link xác thực hợp lệ
                </div>
                <div className="text-xs text-green-700">
                  Email: abc***@gmail.com • Còn hiệu lực: 25 phút
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* New Password */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <label className="text-sm font-semibold">Mật khẩu mới</label>
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
              <div className="text-xs text-gray-500 mt-1">
                Tối thiểu 8 ký tự, bao gồm chữ hoa, số và ký tự đặc biệt
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <label className="text-sm font-semibold">
                  Xác nhận mật khẩu mới
                </label>
              </div>
              <input
                className="w-full border-2 border-gray-300 rounded p-3 text-sm"
                placeholder="••••••••"
                type="password"
              />
            </div>

            {/* Password Strength Indicator */}
            <div className="p-3 bg-gray-50 border border-gray-200 rounded">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <div className="text-sm font-semibold">
                  Độ mạnh mật khẩu:{" "}
                  <span className="text-yellow-600">Trung bình</span>
                </div>
              </div>
              <div className="space-y-1 text-xs ml-7">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Tối thiểu 8 ký tự</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Có chữ hoa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-600">○</span>
                  <span>Có số</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Có ký tự đặc biệt (!@#$%^&*)</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                9
              </div>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                🔐 Cập Nhật Mật Khẩu
              </button>
            </div>

            {/* Success Message (Hidden by default) */}
            <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg hidden">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  10
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-800">
                    ✅ Mật khẩu đã được cập nhật!
                  </div>
                  <div className="text-xs text-green-700 mt-1">
                    Bạn có thể đăng nhập với mật khẩu mới ngay bây giờ.
                  </div>
                  <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded text-xs">
                    Đăng nhập ngay
                  </button>
                </div>
              </div>
            </div>

            {/* Error Message (Hidden by default) */}
            <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg hidden">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  11
                </div>
                <div>
                  <div className="text-sm font-semibold text-red-800">
                    ❌ Link đã hết hạn
                  </div>
                  <div className="text-xs text-red-700 mt-1">
                    Link khôi phục mật khẩu đã hết hiệu lực. Vui lòng yêu cầu
                    link mới.
                  </div>
                  <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded text-xs">
                    Yêu cầu link mới
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
              ❶❷ Header & Điều hướng
            </div>
            <div className="text-gray-700">
              <strong>❶ Logo:</strong> Nhấn → Về trang chủ (WF01)
              <br />
              <strong>❷ Trang chủ:</strong> Nhấn → Điều hướng về landing page
              <br />
              <strong>URL:</strong> /reset-password?token=[TOKEN] (từ liên kết
              email)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❸ Tiêu đề trang</div>
            <div className="text-gray-700">
              <strong>Tiêu đề:</strong> "Đặt Lại Mật Khẩu" - Tiêu đề rõ ràng,
              hướng hành động
              <br />
              <strong>Phụ đề:</strong> Giải thích những gì người dùng cần làm
              <br />
              <strong>Tập trung bảo mật:</strong> Nhấn mạnh tính bảo mật của mật
              khẩu
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❹ Trạng thái token
            </div>
            <div className="text-gray-700">
              <strong>Xác thực token:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Kiểm tra token tồn tại trong cơ sở dữ liệu</li>
                <li>Xác nhận token chưa hết hạn (30 phút từ lúc tạo)</li>
                <li>Đảm bảo token chưa được sử dụng (một lần)</li>
                <li>Hiển thị email đã được che để xác nhận</li>
              </ul>
              <strong>Trạng thái:</strong> Hợp lệ (màu xanh) / Hết hạn (màu đỏ)
              / Không hợp lệ (màu đỏ)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❺❻❼ Ô nhập mật khẩu
            </div>
            <div className="text-gray-700">
              <strong>❺ Mật khẩu mới:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Loại: password với chức năng chuyển đổi hiển thị ❻</li>
                <li>Xác thực theo thời gian thực khi người dùng nhập</li>
                <li>Phản hồi trực quan thông qua độ mạnh mật khẩu ❽</li>
              </ul>
              <strong>❼ Xác nhận mật khẩu:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Phải khớp chính xác với mật khẩu mới</li>
                <li>Hiển thị lỗi nếu không khớp</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❽ Bộ chỉ báo độ mạnh mật khẩu
            </div>
            <div className="text-gray-700">
              <strong>Xác thực theo thời gian thực cho:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Độ dài: Tối thiểu 8 ký tự</li>
                <li>Chữ hoa: Ít nhất 1 chữ cái in hoa</li>
                <li>Số: Ít nhất 1 chữ số</li>
                <li>Ký tự đặc biệt: Ít nhất 1 (!@#$%^&*)</li>
              </ul>
              <strong>Các mức độ:</strong> Yếu (đỏ) / Trung bình (vàng) / Mạnh
              (xanh)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❾ Nút Gửi</div>
            <div className="text-gray-700">
              <strong>Hành động khi nhấn:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Xác thực cả hai trường mật khẩu</li>
                <li>Kiểm tra mật khẩu đáp ứng yêu cầu</li>
                <li>POST request đến /auth/reset-password</li>
                <li>Body: {`{token: "...", newPassword: "..."}`}</li>
                <li>Cập nhật mật khẩu trong cơ sở dữ liệu (đã băm)</li>
                <li>Vô hiệu hóa token khôi phục</li>
                <li>Hiển thị thông báo thành công ❿</li>
              </ol>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❿⓫ Trạng thái phản hồi
            </div>
            <div className="text-gray-700">
              <strong>❿ Thành công:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Hiển thị thông báo thành công với giao diện màu xanh</li>
                <li>Cung cấp nút "Đăng nhập ngay" → WF03</li>
                <li>Tự chuyển hướng sau 5 giây (tùy chọn)</li>
              </ul>
              <strong>⓫ Lỗi:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Token hết hạn → Hiển thị lỗi với tùy chọn lấy token mới</li>
                <li>Token không hợp lệ → Chuyển hướng đến quên mật khẩu</li>
                <li>
                  Xác thực mật khẩu không thành công → Hiển thị lỗi cụ thể
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            🔒 NGUYÊN TẮC BẢO MẬT TỐT
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Băm mật khẩu:</strong> Sử dụng bcrypt với salt rounds ≥ 12
            </li>
            <li>
              <strong>Vô hiệu token:</strong> Ngay lập tức vô hiệu token sau khi
              sử dụng
            </li>
            <li>
              <strong>Lịch sử mật khẩu:</strong> Ngăn tái sử dụng 5 mật khẩu gần
              nhất
            </li>
            <li>
              <strong>Dọn dẹp phiên:</strong> Vô hiệu tất cả phiên hiện có khi
              đổi mật khẩu
            </li>
            <li>
              <strong>Ghi nhật ký kiểm toán:</strong> Ghi lại mọi lần thử đặt
              lại mật khẩu kèm IP, timestamp
            </li>
            <li>
              <strong>Giới hạn tần suất:</strong> Ngăn tấn công brute force vào
              endpoint reset
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            ✅ TRẢI NGHIỆM NGƯỜI DÙNG
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Phản hồi trực quan:</strong> Bộ chỉ báo độ mạnh mật khẩu
              theo thời gian thực
            </li>
            <li>
              <strong>Yêu cầu rõ ràng:</strong> Hiển thị chính xác những gì mật
              khẩu cần
            </li>
            <li>
              <strong>Chỉ báo tiến trình:</strong> Hiển thị thời gian còn lại
              của token
            </li>
            <li>
              <strong>Khôi phục lỗi:</strong> Cung cấp cách dễ dàng để lấy link
              đặt lại mới
            </li>
            <li>
              <strong>Luồng thành công:</strong> Chuyển tiếp mượt mà đến đăng
              nhập sau khi đặt lại
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500">
          <div className="font-bold text-purple-800 mb-2">
            🔄 TÌNH HUỐNG LỖI
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              <strong>Token hết hạn:</strong> Hiển thị lỗi + nút "Yêu cầu link
              đặt lại mới"
            </li>
            <li>
              <strong>Token không hợp lệ:</strong> Hiển thị lỗi + chuyển hướng
              đến quên mật khẩu
            </li>
            <li>
              <strong>Token đã được sử dụng:</strong> "Liên kết này đã được sử
              dụng" + tùy chọn đăng nhập
            </li>
            <li>
              <strong>Mật khẩu quá yếu:</strong> Làm nổi bật các yêu cầu cụ thể
              chưa đạt
            </li>
            <li>
              <strong>Mật khẩu không khớp:</strong> Hiển thị lỗi dưới trường xác
              nhận
            </li>
            <li>
              <strong>Lỗi mạng:</strong> "Không thể đặt lại mật khẩu, thử lại"
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
