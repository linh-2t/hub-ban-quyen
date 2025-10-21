import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/settings")({
  component: SettingsWireframe,
});

export default function SettingsWireframe() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF19 - CÀI ĐẶT & TÙY CHỌN THÔNG BÁO
      </h1>

      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">← Quay về Hồ sơ</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (3)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">Nguyễn Văn A ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50 p-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <div className="text-sm">👤 Thông tin cá nhân</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <div className="text-sm">🔒 Bảo mật</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <div className="text-sm">🏦 Tài khoản ngân hàng</div>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 p-2 rounded">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <div className="text-sm font-semibold">
                  🔔 Thông báo & Cài đặt
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <div className="text-sm">📜 Lịch sử giao dịch</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  9
                </div>
                <div className="text-sm">🛡️ Xác thực KYC</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Page Title */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  10
                </div>
                <h1 className="text-2xl font-bold">Cài Đặt Thông Báo</h1>
              </div>
              <div className="text-sm text-gray-600">
                Tùy chỉnh các loại thông báo bạn muốn nhận
              </div>
            </div>

            {/* Email Notifications */}
            <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  11
                </div>
                <h2 className="text-lg font-bold">📧 Thông Báo Email</h2>
              </div>

              <div className="space-y-4 ml-8">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">Ưu đãi mới</div>
                    <div className="text-xs text-gray-600">
                      Nhận email khi có ưu đãi mới cho sản phẩm của bạn
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      12
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        className="sr-only peer"
                        defaultChecked
                        type="checkbox"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">
                      Thay đổi trạng thái ưu đãi
                    </div>
                    <div className="text-xs text-gray-600">
                      Khi ưu đãi được chấp nhận, từ chối hoặc phản hồi
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      13
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        className="sr-only peer"
                        defaultChecked
                        type="checkbox"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">Hợp đồng cần ký</div>
                    <div className="text-xs text-gray-600">
                      Khi có hợp đồng mới cần xem xét và ký
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      14
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        className="sr-only peer"
                        defaultChecked
                        type="checkbox"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">Thanh toán</div>
                    <div className="text-xs text-gray-600">
                      Thông báo về trạng thái thanh toán, nhận tiền
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      15
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        className="sr-only peer"
                        defaultChecked
                        type="checkbox"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">
                      Bản quyền đã mua
                    </div>
                    <div className="text-xs text-gray-600">
                      Khi file tải xuống đã sẵn sàng
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      16
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        className="sr-only peer"
                        defaultChecked
                        type="checkbox"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded bg-gray-50">
                  <div>
                    <div className="font-semibold text-sm">
                      Marketing & Khuyến mãi
                    </div>
                    <div className="text-xs text-gray-600">
                      Nhận thông tin về tính năng mới, khuyến mãi
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      17
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* In-App Notifications */}
            <div className="mb-6 p-5 border-2 border-blue-300 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  18
                </div>
                <h2 className="text-lg font-bold">
                  📱 Thông Báo Trong Ứng DỤNG
                </h2>
              </div>

              <div className="space-y-4 ml-8">
                <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">Thông báo đẩy</div>
                    <div className="text-xs text-gray-600">
                      Hiển thị popup thông báo ngay trên màn hình
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      19
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        className="sr-only peer"
                        defaultChecked
                        type="checkbox"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">
                      Cảnh báo âm thanh
                    </div>
                    <div className="text-xs text-gray-600">
                      Phát âm thanh khi có thông báo mới
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      20
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">Đếm badge</div>
                    <div className="text-xs text-gray-600">
                      Hiển thị số thông báo chưa đọc trên menu
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      21
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        className="sr-only peer"
                        defaultChecked
                        type="checkbox"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* SMS Notifications */}
            <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  22
                </div>
                <h2 className="text-lg font-bold">📱 Thông Báo SMS</h2>
                <div className="text-xs text-gray-600 bg-yellow-100 px-2 py-1 rounded">
                  (Có thể phát sinh phí)
                </div>
              </div>

              <div className="space-y-4 ml-8">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">
                      Xác thực bảo mật (OTP)
                    </div>
                    <div className="text-xs text-gray-600">
                      Mã OTP cho đăng nhập và ký hợp đồng
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      23
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        className="sr-only peer"
                        defaultChecked
                        type="checkbox"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">
                      Thông báo khẩn cấp
                    </div>
                    <div className="text-xs text-gray-600">
                      Ưu tiên cảnh báo quá hạn, thanh toán khẩn
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      24
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Frequency Settings */}
            <div className="mb-6 p-5 border-2 border-purple-300 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  25
                </div>
                <h2 className="text-lg font-bold">⏰ Tần Suất Thông Báo</h2>
              </div>

              <div className="space-y-4 ml-8">
                <div>
                  <label
                    className="text-sm font-semibold mb-2 block"
                    htmlFor="email-frequency"
                  >
                    Tần suất email
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      26
                    </div>
                    <select
                      className="border border-gray-300 rounded px-3 py-2 text-sm bg-white"
                      id="email-frequency"
                    >
                      <option value="realtime">Ngay lập tức</option>
                      <option value="daily">Tổng hợp hàng ngày</option>
                      <option value="weekly">Tổng hợp hàng tuần</option>
                      <option value="none">Không gửi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 block">
                    Khung giờ nhận thông báo
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        27
                      </div>
                      <label className="text-sm flex items-center">
                        Từ:
                        <input
                          className="border border-gray-300 rounded px-2 py-1 text-sm ml-2"
                          defaultValue="09:00"
                          type="time"
                        />
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        28
                      </div>
                      <label className="text-sm flex items-center">
                        Đến:
                        <input
                          className="border border-gray-300 rounded px-2 py-1 text-sm ml-2"
                          defaultValue="18:00"
                          type="time"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Chỉ nhận thông báo trong khung giờ này
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 block">
                    Ngày trong tuần
                  </label>
                  <div className="flex gap-2">
                    {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map(
                      (day, index) => (
                        <div className="flex items-center gap-1" key={day}>
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {29 + index}
                          </div>
                          <label className="flex items-center">
                            <input
                              className="mr-1"
                              defaultChecked={index < 5}
                              type="checkbox"
                            />
                            <span className="text-xs">{day}</span>
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  36
                </div>
                <h2 className="text-lg font-bold">🔐 Quyền Riêng Tư</h2>
              </div>

              <div className="space-y-4 ml-8">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">
                      Hiển thị trạng thái online
                    </div>
                    <div className="text-xs text-gray-600">
                      Cho phép người khác thấy bạn đang online
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      37
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        className="sr-only peer"
                        defaultChecked
                        type="checkbox"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div>
                    <div className="font-semibold text-sm">
                      Cho phép liên hệ trực tiếp
                    </div>
                    <div className="text-xs text-gray-600">
                      Hiển thị email/số điện thoại cho người mua/người bán trong
                      giao dịch
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      38
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <button
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded"
                type="button"
              >
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  39
                </div>
                💾 Lưu Cài Đặt
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded"
                type="button"
              >
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  40
                </div>
                ↻ Khôi Phục Mặc Định
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white rounded ml-auto"
                type="button"
              >
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  41
                </div>
                🧪 Gửi Thông Báo Thử Nghiệm
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
              ❶❷❸ Đầu trang & Chuyển hướng
            </div>
            <div className="text-gray-700">
              <strong>❶ Quay về Hồ sơ:</strong> Nhấp → Quay về trang hồ sơ chính
              (WF21)
              <br />
              <strong>❷ Thông báo:</strong> Nhấp → Mở menu thả xuống xem thông
              báo gần đây
              <br />
              <strong>❸ Menu người dùng:</strong> Nhấp → Hồ sơ, Cài đặt, Đăng
              xuất
              <br />
              <strong>Dẫn đường:</strong> Hồ sơ {">"} Cài đặt {">"} Thông báo
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❹❺❻❼❽❾ Menu bên</div>
            <div className="text-gray-700">
              <strong>❹ Thông tin cá nhân:</strong> → WF21 tab cơ bản
              <br />
              <strong>❺ Bảo mật:</strong> → Tab đổi mật khẩu, 2FA
              <br />
              <strong>❻ Tài khoản ngân hàng:</strong> → Quản lý tài khoản ngân
              hàng
              <br />
              <strong>❼ Thông báo & Cài đặt:</strong> Tab hiện tại (đang hoạt
              động)
              <br />
              <strong>❽ Lịch sử giao dịch:</strong> → Lịch sử giao dịch
              <br />
              <strong>❾ Xác thực KYC:</strong> → Quản lý tài liệu KYC
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓫⓬⓭⓮⓯⓰⓱ Thông báo Email
            </div>
            <div className="text-gray-700">
              <strong>Công tắc bật/tắt:</strong> Bật/tắt từng loại thông báo
              email
              <br />
              <strong>⓬ Ưu đãi mới:</strong> Gửi cho người bán khi có người mua
              gửi ưu đãi
              <br />
              <strong>⓭ Thay đổi ưu đãi:</strong> Khi ưu đãi được chấp nhận/từ
              chối/đáp trả
              <br />
              <strong>⓮ Hợp đồng:</strong> Khi có hợp đồng cần xem xét/ký
              <br />
              <strong>⓯ Thanh toán:</strong> Trạng thái thanh toán, nhận tiền
              <br />
              <strong>⓰ Bản quyền:</strong> Link tải xuống sẵn sàng
              <br />
              <strong>⓱ Marketing:</strong> Email khuyến mãi (chọn tham gia)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓲⓳⓴㉑ Thông báo Trong Ứng Dụng
            </div>
            <div className="text-gray-700">
              <strong>⓳ Thông báo đẩy:</strong> Thông báo trình duyệt/ứng dụng
              di động
              <br />
              <strong>⓴ Cảnh báo âm thanh:</strong> Phát âm thanh khi có thông
              báo mới
              <br />
              <strong>㉑ Đếm badge:</strong> Biểu tượng đỏ hiển thị số thông báo
              chưa đọc
              <br />
              <strong>Thời gian thực:</strong> Sử dụng WebSocket hoặc SSE để cập
              nhật ngay lập tức
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ㉒㉓㉔ Thông báo SMS
            </div>
            <div className="text-gray-700">
              <strong>㉓ OTP:</strong> Bắt buộc cho bảo mật (đăng nhập, ký hợp
              đồng)
              <br />
              <strong>㉔ Thông báo khẩn cấp:</strong> Chỉ cảnh báo quan trọng
              <br />
              <strong>Cảnh báo chi phí:</strong> Hiển thị cảnh báo về phí SMS
              <br />
              <strong>Xác minh số điện thoại:</strong> Yêu cầu số điện thoại đã
              xác thực
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ㉕㉖㉗㉘㉙-㉟ Cài đặt tần suất
            </div>
            <div className="text-gray-700">
              <strong>㉖ Tần suất email:</strong> Ngay lập tức / Tổng hợp hàng
              ngày / Hàng tuần / Không gửi
              <br />
              <strong>㉗㉘ Khung giờ:</strong> Chỉ gửi thông báo trong khoảng
              giờ này
              <br />
              <strong>㉙-㉟ Ngày trong tuần:</strong> Checkbox chọn ngày nhận
              thông báo
              <br />
              <strong>Luật nghiệp vụ:</strong> Tuân thủ múi giờ, ngày nghỉ (tùy
              chọn)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ㊱㊲㊳ Quyền Riêng Tư
            </div>
            <div className="text-gray-700">
              <strong>㊲ Trạng thái online:</strong> Hiển thị/ẩn chỉ báo đang
              online
              <br />
              <strong>㊳ Liên hệ trực tiếp:</strong> Cho phép người mua/người
              bán thấy thông tin liên hệ trong giao dịch
              <br />
              <strong>Bảo vệ dữ liệu:</strong> Tuân thủ các quy định bảo mật
              (PDPA)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ㊴㊵㊶ Nút hành động
            </div>
            <div className="text-gray-700">
              <strong>㊴ Lưu Cài Đặt:</strong> Gọi PUT để lưu tất cả tùy chọn
              <br />
              <strong>㊵ Khôi Phục:</strong> Đặt lại về cài đặt mặc định hệ
              thống
              <br />
              <strong>㊶ Gửi Thông Báo Thử:</strong> Gửi thông báo mẫu để kiểm
              tra cấu hình
              <br />
              <strong>Kiểm tra:</strong> Xác thực số điện thoại cho SMS, kiểm
              tra định dạng email
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📌 LOẠI THÔNG BÁO
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Ngay lập tức:</strong> Hành động quan trọng (nhận ưu đãi,
              hợp đồng ký)
            </li>
            <li>
              <strong>Gộp:</strong> Tổng hợp hàng ngày/hàng tuần
            </li>
            <li>
              <strong>Theo ngữ cảnh:</strong> Dựa trên vai trò người dùng (người
              mua vs người bán)
            </li>
            <li>
              <strong>Dựa trên sở thích:</strong> Người dùng có thể tinh chỉnh
              từng loại
            </li>
            <li>
              <strong>Tuân thủ:</strong> Thông báo pháp lý, cập nhật chính sách
              (không thể bỏ đăng ký)
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            ⚡ CÂN NHẮC KỸ THUẬT
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Giao nhận email:</strong> Dùng dịch vụ đáng tin cậy
              (SendGrid, AWS SES)
            </li>
            <li>
              <strong>Cổng SMS:</strong> Nhà cung cấp địa phương cho VN
              (Viettel, VNPT)
            </li>
            <li>
              <strong>Thông báo đẩy:</strong> Dùng Firebase FCM cho web/mobile
            </li>
            <li>
              <strong>Hủy đăng ký:</strong> Một cú nhấp để hủy trong mọi email
            </li>
            <li>
              <strong>Ngăn spam:</strong> Giới hạn tần suất, lọc nội dung
            </li>
            <li>
              <strong>Phân tích:</strong> Theo dõi tỉ lệ mở, tỉ lệ nhấp, chuyển
              đổi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
