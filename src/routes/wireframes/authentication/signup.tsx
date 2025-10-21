import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/authentication/signup")({
  component: SignupWireframe,
});

export default function SignupWireframe() {
  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF02 - ĐĂNG KÝ TÀI KHOẢN
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
            <div className="text-xs">Đã có tài khoản?</div>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              2
            </div>
            <div className="text-xs underline">Đăng nhập</div>
          </div>
        </div>

        <div className="p-8 max-w-2xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-6">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">
              3
            </div>
            <div className="text-xl font-bold">Đăng Ký Tài Khoản</div>
            <div className="text-sm text-gray-600">
              Tạo tài khoản để bắt đầu mua bán bản quyền
            </div>
          </div>

          {/* Role Selection */}
          <div className="mb-6 p-4 bg-blue-50 rounded">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
              <div className="font-bold">Bạn muốn:</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-blue-600 bg-white p-4 rounded">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                  <input checked readOnly type="radio" />
                  <div className="font-semibold">Bán bản quyền</div>
                </div>
                <div className="text-xs text-gray-600 mt-2 ml-8">
                  Tôi là tác giả/NXB/chủ sở hữu bản quyền
                </div>
              </div>
              <div className="border-2 border-gray-300 bg-white p-4 rounded">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <input readOnly type="radio" />
                  <div className="font-semibold">Mua bản quyền</div>
                </div>
                <div className="text-xs text-gray-600 mt-2 ml-8">
                  Tôi là biên tập viên/NXB/công ty media
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <label className="text-sm font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>
              </div>
              <input
                className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                placeholder="email@example.com"
                type="text"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <label className="text-sm font-semibold">
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
              </div>
              <input
                className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                placeholder="••••••••"
                type="password"
              />
              <div className="text-xs text-gray-500 mt-1 ml-8">
                Tối thiểu 8 ký tự, bao gồm chữ hoa, số và ký tự đặc biệt
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  9
                </div>
                <label className="text-sm font-semibold">
                  Xác nhận mật khẩu <span className="text-red-500">*</span>
                </label>
              </div>
              <input
                className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                placeholder="••••••••"
                type="password"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  10
                </div>
                <label className="text-sm font-semibold">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
              </div>
              <input
                className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                placeholder="Nguyễn Văn A"
                type="text"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  11
                </div>
                <label className="text-sm font-semibold">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
              </div>
              <input
                className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                placeholder="0901234567"
                type="text"
              />
            </div>

            {/* Organization Type */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  12
                </div>
                <label className="text-sm font-semibold">
                  Loại tổ chức <span className="text-red-500">*</span>
                </label>
              </div>
              <select className="w-full border-2 border-gray-300 rounded p-2 text-sm">
                <option>Cá nhân</option>
                <option>Công ty</option>
              </select>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  13
                </div>
                <label className="text-sm font-semibold">Tên công ty</label>
              </div>
              <input
                className="w-full border-2 border-gray-300 rounded p-2 text-sm bg-gray-100"
                disabled
                placeholder="Chỉ hiển thị nếu chọn 'Công ty'"
                type="text"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  14
                </div>
                <label className="text-sm font-semibold">
                  Mã giới thiệu (optional)
                </label>
              </div>
              <input
                className="w-full border-2 border-gray-300 rounded p-2 text-sm"
                placeholder="Nhập mã nếu có"
                type="text"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2 p-3 bg-gray-50 rounded">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                15
              </div>
              <div>
                <input className="mr-2" type="checkbox" />
                <label className="text-xs">
                  Tôi đồng ý với{" "}
                  <span className="text-blue-600 underline cursor-pointer">
                    Điều khoản sử dụng
                  </span>{" "}
                  và{" "}
                  <span className="text-blue-600 underline cursor-pointer">
                    Chính sách bảo mật
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                16
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700">
                Đăng Ký
              </button>
            </div>

            {/* Social Login */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">
                  Hoặc đăng ký bằng
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  17
                </div>
                <button className="flex-1 border-2 border-gray-300 py-2 rounded text-sm flex items-center justify-center gap-2">
                  <span>G</span> Google
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  18
                </div>
                <button className="flex-1 border-2 border-gray-300 py-2 rounded text-sm flex items-center justify-center gap-2">
                  <span>f</span> Facebook
                </button>
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
              ❷ Link "Đăng Nhập"
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Chuyển sang trang đăng nhập
              <br />
              <strong>Tương tác:</strong> Click → Chuyển đến WF03 (Đăng nhập)
              <br />
              <strong>Hiển thị:</strong> Text link với underline
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❸ Tiêu Đề Trang</div>
            <div className="text-gray-700">
              <strong>Nội dung:</strong> "Đăng Ký Tài Khoản"
              <br />
              <strong>Mô tả phụ:</strong> Giải thích ngắn gọn về lợi ích khi
              đăng ký
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❹ Label "Bạn Muốn"
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Hỏi người dùng vai trò mong muốn
              <br />
              <strong>Bắt buộc:</strong> Phải chọn 1 trong 2 options
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❺ Radio "Bán Bản Quyền" (Seller)
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Chọn vai trò Seller
              <br />
              <strong>Tương tác:</strong> Click → Select radio → Lưu
              role="seller" vào form data
              <br />
              <strong>Hiển thị:</strong> Khi được chọn, border highlight màu
              xanh
              <br />
              <strong>Mô tả:</strong> "Tôi là tác giả/NXB/chủ sở hữu bản quyền"
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❻ Radio "Mua Bản Quyền" (Buyer)
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Chọn vai trò Buyer
              <br />
              <strong>Tương tác:</strong> Click → Select radio → Lưu
              role="buyer" vào form data
              <br />
              <strong>Mô tả:</strong> "Tôi là biên tập viên/NXB/công ty media"
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❼ Input "Email"</div>
            <div className="text-gray-700">
              <strong>Loại:</strong> Email input
              <br />
              <strong>Validation:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Bắt buộc phải nhập (required)</li>
                <li>
                  Format email hợp lệ (regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
                </li>
                <li>
                  Check email đã tồn tại trong database chưa (realtime hoặc
                  onBlur)
                </li>
              </ul>
              <strong>Error messages:</strong>
              <ul className="list-disc ml-5">
                <li>"Vui lòng nhập email"</li>
                <li>"Email không hợp lệ"</li>
                <li>"Email đã được đăng ký"</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❽ Input "Mật Khẩu"
            </div>
            <div className="text-gray-700">
              <strong>Loại:</strong> Password input (type="password")
              <br />
              <strong>Validation:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Bắt buộc phải nhập</li>
                <li>Tối thiểu 8 ký tự</li>
                <li>Phải có ít nhất 1 chữ hoa</li>
                <li>Phải có ít nhất 1 chữ số</li>
                <li>Phải có ít nhất 1 ký tự đặc biệt (!@#$%^&*)</li>
              </ul>
              <strong>Hiển thị:</strong> Icon "eye" để toggle show/hide password
              <br />
              <strong>Gợi ý:</strong> Hiển thị password strength indicator
              (weak/medium/strong)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❾ Input "Xác Nhận Mật Khẩu"
            </div>
            <div className="text-gray-700">
              <strong>Validation:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Bắt buộc phải nhập</li>
                <li>Phải trùng khớp với mật khẩu ở field ❽</li>
              </ul>
              <strong>Error message:</strong> "Mật khẩu xác nhận không khớp"
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❿ Input "Họ và Tên"
            </div>
            <div className="text-gray-700">
              <strong>Validation:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Bắt buộc phải nhập</li>
                <li>Tối thiểu 2 từ (họ + tên)</li>
                <li>Không chứa số hoặc ký tự đặc biệt</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓫ Input "Số Điện Thoại"
            </div>
            <div className="text-gray-700">
              <strong>Validation:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Bắt buộc phải nhập</li>
                <li>Format số điện thoại Việt Nam (10 số, bắt đầu bằng 0)</li>
                <li>Regex: /^0\d{9}$/</li>
              </ul>
              <strong>Error messages:</strong> "Số điện thoại không hợp lệ"
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓬ Dropdown "Loại Tổ Chức"
            </div>
            <div className="text-gray-700">
              <strong>Options:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Cá nhân (mặc định)</li>
                <li>Công ty</li>
              </ul>
              <strong>Tương tác:</strong> Khi chọn "Công ty" → Field ⓭ "Tên công
              ty" được enable và trở thành required
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓭ Input "Tên Công Ty"
            </div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Chỉ khi field ⓬ chọn "Công ty"
              <br />
              <strong>Validation:</strong> Required khi loại tổ chức là "Công
              ty"
              <br />
              <strong>State:</strong> Disabled (màu xám) khi chọn "Cá nhân"
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓮ Input "Mã Giới Thiệu"
            </div>
            <div className="text-gray-700">
              <strong>Loại:</strong> Optional field
              <br />
              <strong>Chức năng:</strong> Nhập mã referral nếu được giới thiệu
              bởi user khác
              <br />
              <strong>Validation:</strong> Check mã có tồn tại trong hệ thống
              không (optional check)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓯ Checkbox "Điều Khoản"
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Xác nhận đồng ý điều khoản
              <br />
              <strong>Validation:</strong> Bắt buộc phải check trước khi submit
              <br />
              <strong>Tương tác:</strong> Click vào "Điều khoản sử dụng" hoặc
              "Chính sách bảo mật" → Mở modal/trang mới hiển thị nội dung đầy đủ
              <br />
              <strong>Error:</strong> "Bạn phải đồng ý với điều khoản để tiếp
              tục"
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓰ Button "Đăng Ký"
            </div>
            <div className="text-gray-700">
              <strong>Tương tác khi click:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Validate tất cả fields</li>
                <li>
                  Nếu có lỗi → Hiển thị error messages dưới các fields tương ứng
                </li>
                <li>Nếu valid → Gửi POST request đến API /auth/register</li>
                <li>Loading state: Button disabled + Hiển thị spinner</li>
                <li>
                  Success:
                  <ul className="list-disc ml-5">
                    <li>Hiển thị toast "Đăng ký thành công"</li>
                    <li>Gửi email xác thực đến địa chỉ email đã nhập</li>
                    <li>
                      Chuyển đến trang "Xác thực email" (với message: "Vui lòng
                      check email để xác thực tài khoản")
                    </li>
                  </ul>
                </li>
                <li>Error: Hiển thị toast với message lỗi từ API</li>
              </ol>
              <strong>State:</strong> Disabled khi form chưa valid hoặc đang
              submit
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓱ Button "Google Login"
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Đăng ký bằng tài khoản Google
              <br />
              <strong>Tương tác:</strong> Click → OAuth flow với Google → Tự
              động tạo account với thông tin từ Google → Chuyển đến dashboard
              <br />
              <strong>Lưu ý:</strong> Vẫn phải chọn role (Seller/Buyer) trước
              khi OAuth, hoặc hiển thị popup chọn role sau khi OAuth thành công
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓲ Button "Facebook Login"
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Đăng ký bằng tài khoản Facebook
              <br />
              <strong>Tương tác:</strong> Tương tự Google Login
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📌 LƯU Ý KỸ THUẬT
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              • <strong>Real-time validation:</strong> Validate các fields khi
              user blur (rời khỏi field)
            </li>
            <li>
              • <strong>Password security:</strong> Hash password bằng bcrypt
              trước khi lưu vào database (min 10 rounds)
            </li>
            <li>
              • <strong>Email verification:</strong> Gửi token xác thực có
              expiry (24h) qua email
            </li>
            <li>
              • <strong>Rate limiting:</strong> Giới hạn số lần đăng ký từ 1 IP
              (VD: max 5 lần/giờ)
            </li>
            <li>
              • <strong>CAPTCHA:</strong> Có thể thêm Google reCAPTCHA để chống
              bot
            </li>
            <li>
              • <strong>Account status:</strong> Sau khi đăng ký xong, account
              có status="pending_verification"
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">✉️ EMAIL XÁC THỰC</div>
          <div className="text-sm text-gray-700">
            <strong>Subject:</strong> Xác thực tài khoản của bạn
            <br />
            <strong>Nội dung:</strong>
            <ul className="list-disc ml-5 mt-1">
              <li>Chào mừng [Tên]</li>
              <li>
                Link xác thực: https://platform.com/verify-email?token=[TOKEN]
              </li>
              <li>Link có hiệu lực trong 24 giờ</li>
              <li>Nếu không phải bạn đăng ký, vui lòng bỏ qua email này</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
