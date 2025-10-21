import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/accountant/payment-verify")({
  component: VerifyPaymentWireframe,
});

export default function VerifyPaymentWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF18 - XÁC THỰC THANH TOÁN (KẾ TOÁN)
      </h1>

      {/* Khung giao diện */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div className="text-sm font-semibold">Biểu tượng</div>
            </div>
            <div className="flex gap-4 text-xs">
              <div>Bảng điều khiển</div>
              <div className="font-semibold underline">Thanh toán</div>
              <div>Báo cáo</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <div className="text-xs">Kế toán ▼</div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Tiêu đề trang */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <h1 className="text-2xl font-bold">Xác Thực Thanh Toán</h1>
            </div>
            <div className="text-sm text-gray-600">
              Kiểm tra và duyệt các giao dịch thanh toán
            </div>
          </div>

          {/* Thống kê */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="border-2 border-yellow-400 bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <div className="text-xs text-gray-600">Chờ xác thực</div>
              </div>
              <div className="text-2xl font-bold text-yellow-700">8</div>
              <div className="text-xs text-gray-600">Tổng: 720M đ</div>
            </div>

            <div className="border-2 border-green-400 bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <div className="text-xs text-gray-600">Đã duyệt (tháng)</div>
              </div>
              <div className="text-2xl font-bold text-green-700">45</div>
              <div className="text-xs text-gray-600">Tổng: 4.2B đ</div>
            </div>

            <div className="border-2 border-red-400 bg-red-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <div className="text-xs text-gray-600">Bị từ chối</div>
              </div>
              <div className="text-2xl font-bold text-red-700">3</div>
              <div className="text-xs text-gray-600">Cần tải lên lại</div>
            </div>

            <div className="border-2 border-gray-400 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <div className="text-xs text-gray-600">Chờ giải ngân</div>
              </div>
              <div className="text-2xl font-bold text-gray-700">12</div>
              <div className="text-xs text-gray-600">Tổng: 1.1B đ</div>
            </div>
          </div>

          {/* Bộ lọc */}
          <div className="mb-4 flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                8
              </div>
              <input
                className="flex-1 border-2 border-gray-300 rounded px-3 py-2 text-sm"
                placeholder="Tìm theo Mã hợp đồng, Người mua, Người bán..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                9
              </div>
              <select className="border-2 border-gray-300 rounded px-3 py-2 text-sm">
                <option>Chờ xác thực</option>
                <option>Đã duyệt</option>
                <option>Bị từ chối</option>
                <option>Chờ giải ngân</option>
                <option>Đã giải ngân</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                10
              </div>
              <input
                className="border-2 border-gray-300 rounded px-3 py-2 text-sm"
                type="date"
              />
            </div>
          </div>

          {/* Danh sách thanh toán */}
          <div className="space-y-4">
            {/* Mục thanh toán 1 - Chờ xác thực */}
            <div className="border-2 border-yellow-400 bg-yellow-50 rounded-lg p-5">
              <div className="flex gap-6">
                {/* Bên trái: Thông tin thanh toán */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          11
                        </div>
                        <div className="font-bold text-lg">
                          Thanh toán #PAY-2025-001234
                        </div>
                        <span className="px-2 py-1 bg-yellow-500 text-white rounded text-xs font-semibold">
                          Chờ xác thực
                        </span>
                      </div>
                      <div className="text-xs text-gray-600">
                        Hợp đồng #CT-2025-001234 • Tải lên: 23/10/2025 09:15
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        90,000,000 đ
                      </div>
                      <div className="text-xs text-gray-600">
                        Chín mươi triệu đồng
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="p-3 bg-white rounded border">
                      <div className="text-xs text-gray-600 mb-1">
                        Người chuyển (Người mua)
                      </div>
                      <div className="font-semibold">Công ty Kim Đồng</div>
                      <div className="text-xs text-gray-600">
                        MST: 0123456789
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded border">
                      <div className="text-xs text-gray-600 mb-1">
                        Người nhận (Người bán)
                      </div>
                      <div className="font-semibold">Nguyễn Văn A</div>
                      <div className="text-xs text-gray-600">
                        TK: 1234567890 - VCB
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded border">
                    <div className="text-xs text-gray-600 mb-1">Sản phẩm</div>
                    <div className="font-semibold">
                      Kinh Tế Học Vĩ Mô - Bản quyền toàn cầu
                    </div>
                  </div>
                </div>

                {/* Bên phải: Ảnh chứng từ */}
                <div className="w-80">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      12
                    </div>
                    <div className="text-sm font-semibold">
                      Chứng từ thanh toán
                    </div>
                  </div>
                  <div className="border-2 border-gray-300 rounded-lg overflow-hidden mb-2">
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <div className="text-4xl mb-2">🧾</div>
                        <div className="text-sm">Biên lai chuyển khoản</div>
                        <div className="text-xs">bank_receipt.jpg</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="flex-1 px-3 py-2 border-2 border-gray-300 rounded text-sm"
                      type="button"
                    >
                      🔍 Xem lớn
                    </button>
                    <button
                      className="flex-1 px-3 py-2 border-2 border-gray-300 rounded text-sm"
                      type="button"
                    >
                      📥 Tải về
                    </button>
                  </div>
                </div>
              </div>

              {/* Chi tiết xác thực */}
              <div className="mt-4 pt-4 border-t border-yellow-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <div className="font-semibold text-sm">Kiểm tra chi tiết</div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-white rounded border">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <div>
                        <div className="text-xs font-semibold">
                          Số tiền khớp
                        </div>
                        <div className="text-xs text-gray-600">
                          90,000,000 đ
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="p-3 bg-white rounded border">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <div>
                        <div className="text-xs font-semibold">
                          Nội dung CK đúng
                        </div>
                        <div className="text-xs text-gray-600">
                          TT CT-2025-001234
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="p-3 bg-white rounded border">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <div>
                        <div className="text-xs font-semibold">
                          Tài khoản nhận khớp
                        </div>
                        <div className="text-xs text-gray-600">
                          1234567890 - VCB
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Trường ghi chú */}
                <div className="mb-4">
                  <label className="text-xs font-semibold mb-1 block">
                    Ghi chú (tùy chọn)
                  </label>
                  <textarea
                    className="w-full border-2 border-gray-300 rounded p-2 text-sm h-16"
                    placeholder="Thêm ghi chú về giao dịch này..."
                  ></textarea>
                </div>

                {/* Nút hành động */}
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      14
                    </div>
                    <button
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
                      type="button"
                    >
                      ✓ Xác nhận thanh toán
                    </button>
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      15
                    </div>
                    <button
                      className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
                      type="button"
                    >
                      ✗ Từ chối
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mục thanh toán 2 - Đã xác thực, chờ giải ngân */}
            <div className="border-2 border-green-400 bg-green-50 rounded-lg p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      16
                    </div>
                    <div className="font-bold">Thanh toán #PAY-2025-001200</div>
                    <span className="px-2 py-1 bg-green-500 text-white rounded text-xs font-semibold">
                      Đã xác thực - Chờ giải ngân
                    </span>
                  </div>
                  <div className="text-xs text-gray-600">
                    Hợp đồng #CT-2025-001200 • Xác thực: 22/10/2025 14:00 bởi Kế
                    toán A
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-green-600">
                    75,000,000 đ
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 text-sm">
                  <div className="mb-2">
                    <strong>Người mua:</strong> NXB Văn Học
                  </div>
                  <div className="mb-2">
                    <strong>Người bán:</strong> Trần Thị B
                  </div>
                  <div>
                    <strong>Sản phẩm:</strong> Tâm lý học đám đông
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold"
                    type="button"
                  >
                    💸 Giải ngân
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tài liệu hướng dẫn */}
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">
          CHÚ THÍCH CHI TIẾT
        </h2>

        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❹❺❻❼ Thẻ thống kê</div>
            <div className="text-gray-700">
              Tổng quan nhanh các thanh toán cần xử lý và đã xử lý
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">
              ⓫⓬ Thông tin thanh toán & Chứng từ
            </div>
            <div className="text-gray-700">
              <strong>Bên trái:</strong> Thông tin hợp đồng, Các bên, Số tiền
              <br />
              <strong>Bên phải:</strong> Xem trước hình ảnh chứng từ
              <br />
              <strong>"Xem lớn":</strong> Mở lightbox với ảnh kích thước đầy đủ
              <br />
              <strong>"Tải về":</strong> Tải tệp gốc
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">
              ⓭ Danh sách kiểm tra xác thực
            </div>
            <div className="text-gray-700">
              <strong>Checkboxes</strong> để Kế toán xác minh từng mục:
              <br />
              <ul className="list-disc ml-5 mt-1">
                <li>Số tiền khớp với hợp đồng</li>
                <li>Nội dung chuyển khoản đúng định dạng</li>
                <li>Tài khoản nhận đúng</li>
              </ul>
              <strong>Mục đích:</strong> Đảm bảo độ chính xác khi xác thực thủ
              công
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓮⓯ Nút hành động</div>
            <div className="text-gray-700">
              <strong>⓮ Xác nhận:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>
                  Xác thực các checkbox (khuyến nghị ít nhất 2/3 được chọn)
                </li>
                <li>Cập nhật payment status="verified"</li>
                <li>Cập nhật contract status="payment_verified"</li>
                <li>Gửi thông báo cho Người mua & Người bán</li>
                <li>Di chuyển vào hàng đợi "Chờ giải ngân"</li>
                <li>Gửi email xác nhận</li>
              </ol>
              <strong>⓯ Từ chối:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Mở modal yêu cầu nhập lý do từ chối</li>
                <li>Cập nhật status="rejected"</li>
                <li>Gửi thông báo + email cho Người mua kèm lý do</li>
                <li>Người mua cần tải lên lại chứng từ</li>
              </ol>
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓰⓱ Giải ngân</div>
            <div className="text-gray-700">
              <strong>⓰ Thanh toán đã verified:</strong> Hiển thị trong hàng đợi
              "Chờ giải ngân"
              <br />
              <strong>⓱ Nút "Giải ngân":</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Click → Mở modal xác nhận</li>
                <li>Kế toán thực hiện chuyển khoản thủ công qua ngân hàng</li>
                <li>Tải lên chứng từ chuyển khoản (proof of disbursement)</li>
                <li>Cập nhật status="disbursed"</li>
                <li>Gửi thông báo cho Người bán "Bạn đã nhận tiền"</li>
                <li>Kích hoạt quy trình giao hàng (WF19)</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📌 LUỒNG CÔNG VIỆC
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              Người mua tải lên chứng từ → Trạng thái="pending_verification"
            </li>
            <li>Kế toán rà soát → Xác thực hoặc Từ chối</li>
            <li>Nếu xác thực → Trạng thái="verified" → Chờ giải ngân</li>
            <li>Kế toán thực hiện chuyển khoản cho Người bán</li>
            <li>Tải lên chứng từ giải ngân → Trạng thái="disbursed"</li>
            <li>Người bán nhận tiền → Kích hoạt giao hàng</li>
            <li>Nếu từ chối → Người mua tải lên lại</li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">💰 PHÍ NỀN TẢNG</div>
          <div className="text-sm text-gray-700">
            Nếu có phí nền tảng (VD: 1% giá trị giao dịch):
            <br />- Khấu trừ từ số tiền trước khi giải ngân cho Người bán
            <br />- VD: Người mua trả 90M → Người bán nhận 89.1M (90M - 1% =
            89.1M)
            <br />- Phí nền tảng: 900K được giữ lại
          </div>
        </div>
      </div>
    </div>
  );
}
