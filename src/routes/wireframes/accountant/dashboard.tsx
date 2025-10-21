import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/accountant/dashboard")({
  component: AccountantDashboardWireframe,
});

export default function AccountantDashboardWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF38 - BẢNG ĐIỀU KHIỂN KẾ TOÁN
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-800 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">Cổng Kế Toán</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div className="font-semibold text-red-300">
                  Bảng điều khiển
                </div>
                <div>Xác minh thanh toán</div>
                <div>Báo cáo tài chính</div>
                <div>Nhật ký kiểm toán</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (12)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">Kế toán Hương ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50">
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <div className="text-sm font-semibold">
                    📊 Bảng điều khiển
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                  <div className="text-sm">💳 Xác minh thanh toán</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-sm">📈 Báo cáo tài chính</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    7
                  </div>
                  <div className="text-sm">🧾 Quản lý hóa đơn</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <div className="text-sm">🔍 Nhật ký kiểm toán</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    9
                  </div>
                  <div className="text-sm">📋 Quản lý thuế</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    10
                  </div>
                  <div className="text-sm">⚙️ Cài đặt</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Page Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
                  </div>
                  <h1 className="text-2xl font-bold">
                    Bảng điều khiển Kế toán
                  </h1>
                </div>
                <p className="text-gray-600">
                  Giám sát tài chính, xác minh thanh toán và theo dõi tuân thủ
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    12
                  </div>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded"
                    type="button"
                  >
                    📊 Tạo báo cáo
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <button
                    className="px-4 py-2 bg-green-600 text-white text-sm rounded"
                    type="button"
                  >
                    💸 Xử lý thanh toán
                  </button>
                </div>
              </div>
            </div>

            {/* Key Financial Metrics */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="text-sm text-gray-600">
                    Thanh toán đã xử lý
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">₫1.24B</div>
                <div className="text-xs text-green-600">↗ +15.2% tháng này</div>
                <div className="text-xs text-gray-500 mt-1">
                  1.856 giao dịch
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <div className="text-sm text-gray-600">Đang chờ xác minh</div>
                </div>
                <div className="text-2xl font-bold text-orange-600">47</div>
                <div className="text-xs text-orange-600">Cần xem xét</div>
                <div className="text-xs text-gray-500 mt-1">
                  ₫156.3M giá trị
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <div className="text-sm text-gray-600">Hoa hồng thu</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">₫124M</div>
                <div className="text-xs text-blue-600">10% phí nền tảng</div>
                <div className="text-xs text-gray-500 mt-1">
                  Từ 1.523 hợp đồng
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-red-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">
                    Thanh toán quá hạn
                  </div>
                </div>
                <div className="text-2xl font-bold text-red-600">23</div>
                <div className="text-xs text-red-600">⚠️ Cần hành động</div>
                <div className="text-xs text-gray-500 mt-1">₫45.8M tổng</div>
              </div>
            </div>

            {/* Priority Actions */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm font-semibold text-red-800">
                    🚨 Xác minh thanh toán khẩn cấp
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">CTR-2024-1847 (₫125M)</div>
                    <div className="text-xs text-gray-600">
                      Thái Hà Books → NXB Tổng Hợp
                    </div>
                    <div className="text-xs text-red-600">
                      ⏰ Quá hạn 3 ngày
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">CTR-2024-1845 (₫280M)</div>
                    <div className="text-xs text-gray-600">
                      Fahasa → Rich Dad Company
                    </div>
                    <div className="text-xs text-orange-600">
                      ⏳ Hạn hôm nay
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">CTR-2024-1843 (₫95M)</div>
                    <div className="text-xs text-gray-600">
                      First News → Oxford Uni Press
                    </div>
                    <div className="text-xs text-orange-600">
                      ⏳ Hạn ngày mai
                    </div>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-red-600 text-white text-xs rounded"
                    type="button"
                  >
                    💳 Xác minh thanh toán
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm font-semibold text-blue-800">
                    📊 Hoạt động tài chính hôm nay
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Thanh toán đã xử lý</span>
                    <span className="font-bold text-green-600">₫67.5M</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Hoa hồng</span>
                    <span className="font-bold text-blue-600">₫6.75M</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Đang chờ xác minh</span>
                    <span className="font-bold text-orange-600">12 mục</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Thuế đã thu</span>
                    <span className="font-bold text-purple-600">₫6.75M</span>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded"
                    type="button"
                  >
                    📈 Xem chi tiết
                  </button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    20
                  </div>
                  <div className="text-sm font-semibold text-green-800">
                    ✅ Xác minh gần đây
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">CTR-2024-1846</span>
                      <span className="text-xs text-green-600">
                        ✅ Đã xác minh
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      ₫350M • First News → Dover Pub
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">CTR-2024-1844</span>
                      <span className="text-xs text-green-600">
                        ✅ Đã xử lý
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      ₫180M • NXB Trẻ → Penguin Random
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">CTR-2024-1842</span>
                      <span className="text-xs text-green-600">
                        ✅ Hoàn tất
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      ₫220M • Alphabooks → Wiley
                    </div>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-green-600 text-white text-xs rounded"
                    type="button"
                  >
                    📋 Xem tất cả
                  </button>
                </div>
              </div>
            </div>

            {/* Financial Charts */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      21
                    </div>
                    <h3 className="font-semibold">
                      💰 Xu hướng khối lượng thanh toán (30 ngày)
                    </h3>
                  </div>
                  <select className="text-sm border border-gray-300 rounded px-2 py-1">
                    <option>Hàng ngày</option>
                    <option>Hàng tuần</option>
                    <option>Hàng tháng</option>
                  </select>
                </div>
                <div className="h-48 bg-gray-50 rounded flex items-end justify-center p-4">
                  <div className="flex items-end gap-1 w-full">
                    {Array.from({ length: 30 }, (_, i) => (
                      <div
                        className={`w-2 ${i % 7 === 0 || i % 7 === 6 ? "bg-gray-300" : "bg-blue-400"} ${Math.random() > 0.3 ? `h-${Math.floor(Math.random() * 20 + 20)}` : "h-8"}`}
                        key={i}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="text-center text-xs text-gray-600 mt-2">
                  30 ngày qua • Đỉnh: ₫45.2M (15 Thg 12)
                </div>
              </div>

              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    22
                  </div>
                  <h3 className="font-semibold">
                    🏦 Phân bố phương thức thanh toán
                  </h3>
                </div>
                <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-blue-500"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-green-500"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 rounded-full bg-orange-500"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold">
                        ₫1.2B
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Chuyển khoản ngân hàng (65%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Ví điện tử (25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span>Thẻ tín dụng (8%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span>Khác (2%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Verification Queue */}
            <div className="border border-gray-300 rounded mb-6">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      23
                    </div>
                    <h3 className="font-semibold">
                      💳 Hàng đợi xác minh thanh toán (47 đang chờ)
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Tất cả trạng thái</option>
                      <option>Đang chờ xét duyệt</option>
                      <option>Đã xác minh</option>
                      <option>Từ chối</option>
                      <option>Quá hạn</option>
                    </select>
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Giá trị: Cao xuống Thấp</option>
                      <option>Giá trị: Thấp lên Cao</option>
                      <option>Cũ nhất trước</option>
                      <option>Mới nhất trước</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr className="border-b border-gray-300">
                      <th className="text-left p-3">
                        <div className="flex items-center gap-1">
                          <input type="checkbox" />
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            24
                          </div>
                          <div>Mã hợp đồng</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Chi tiết thanh toán</th>
                      <th className="text-left p-3">Số tiền</th>
                      <th className="text-left p-3">Phương thức</th>
                      <th className="text-left p-3">Ngày nộp</th>
                      <th className="text-left p-3">Trạng thái</th>
                      <th className="text-left p-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="font-mono text-sm">CTR-2024-1847</div>
                        <div className="text-xs text-red-600">⏰ QUÁ HẠN</div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          Đắc Nhân Tâm - Translation Rights
                        </div>
                        <div className="text-xs text-gray-600">
                          Thái Hà Books → NXB Tổng Hợp TP.HCM
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold">₫125,000,000</div>
                        <div className="text-xs text-gray-600">
                          Hoa hồng: ₫12.5M
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">🏦 Chuyển khoản ngân hàng</div>
                        <div className="text-xs text-gray-600">
                          VCB ****1234
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">18/10/2024</div>
                        <div className="text-xs text-red-600">3 ngày trước</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                          ⏰ Cần xét duyệt
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                            type="button"
                          >
                            ✅ Xác minh
                          </button>
                          <button
                            className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded"
                            type="button"
                          >
                            ❌ Từ chối
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-orange-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="font-mono text-sm">CTR-2024-1845</div>
                        <div className="text-xs text-orange-600">
                          🔥 GIÁ TRỊ CAO
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          Rich Dad Poor Dad - Vietnamese Rights
                        </div>
                        <div className="text-xs text-gray-600">
                          Fahasa → Rich Dad Company
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-orange-600">
                          ₫280,000,000
                        </div>
                        <div className="text-xs text-gray-600">
                          Hoa hồng: ₫28M
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          💳 Chuyển tiền (Wire Transfer)
                        </div>
                        <div className="text-xs text-gray-600">
                          SWIFT: VIETCOMBANK
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">21/10/2024</div>
                        <div className="text-xs text-blue-600">Hôm nay</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          📋 Đang chờ xét duyệt
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem xét
                          </button>
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            📄 Tài liệu
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-green-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div className="font-mono text-sm">CTR-2024-1843</div>
                        <div className="text-xs text-green-600">
                          ✅ ĐÃ XÁC MINH
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          The Art of War - Publishing Rights
                        </div>
                        <div className="text-xs text-gray-600">
                          First News → Dover Publications
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold">₫95,000,000</div>
                        <div className="text-xs text-gray-600">
                          Hoa hồng: ₫9.5M
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">🏦 Chuyển khoản ngân hàng</div>
                        <div className="text-xs text-gray-600">
                          ACB ****5678
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">20/10/2024</div>
                        <div className="text-xs text-green-600">Hôm qua</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Đã xác minh
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem
                          </button>
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            📧 Thông báo
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="bg-gray-50 p-3 border-t border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Hiển thị 1 đến 20 trong 47 xác minh đang chờ
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      disabled
                      type="button"
                    >
                      Trước
                    </button>
                    <button
                      className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                      type="button"
                    >
                      1
                    </button>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      type="button"
                    >
                      2
                    </button>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      type="button"
                    >
                      3
                    </button>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      type="button"
                    >
                      Tiếp
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-4">
              <div className="border border-gray-300 rounded p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    26
                  </div>
                  <div className="text-2xl">💸</div>
                </div>
                <div className="font-medium text-sm">
                  Xử lý thanh toán hàng loạt
                </div>
                <div className="text-xs text-gray-600 mb-3">
                  Xử lý nhiều thanh toán đã xác minh
                </div>
                <button
                  className="w-full px-3 py-1 bg-green-600 text-white text-xs rounded"
                  type="button"
                >
                  Xử lý mục đã chọn
                </button>
              </div>
              <div className="border border-gray-300 rounded p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    27
                  </div>
                  <div className="text-2xl">📊</div>
                </div>
                <div className="font-medium text-sm">Báo cáo tài chính</div>
                <div className="text-xs text-gray-600 mb-3">
                  Tạo tóm tắt tài chính hàng tháng
                </div>
                <button
                  className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded"
                  type="button"
                >
                  Tạo báo cáo
                </button>
              </div>
              <div className="border border-gray-300 rounded p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    28
                  </div>
                  <div className="text-2xl">🧾</div>
                </div>
                <div className="font-medium text-sm">Quản lý thuế</div>
                <div className="text-xs text-gray-600 mb-3">
                  Tính toán và nộp VAT
                </div>
                <button
                  className="w-full px-3 py-1 bg-purple-600 text-white text-xs rounded"
                  type="button"
                >
                  Quản lý thuế
                </button>
              </div>
              <div className="border border-gray-300 rounded p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    29
                  </div>
                  <div className="text-2xl">🔍</div>
                </div>
                <div className="font-medium text-sm">Dấu vết kiểm toán</div>
                <div className="text-xs text-gray-600 mb-3">
                  Xem lại giao dịch tài chính
                </div>
                <button
                  className="w-full px-3 py-1 bg-gray-600 text-white text-xs rounded"
                  type="button"
                >
                  Xem kiểm toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annotation */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-bold text-blue-800 mb-4">
          📝 WF38 - GHI CHÚ BẢNG ĐIỀU KHIỂN KẾ TOÁN
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-blue-600">
              💰 Tổng quan tài chính
            </div>
            <div className="text-gray-700">
              <strong>❶-❸ Header:</strong> Điều hướng cổng kế toán
              <br />
              <strong>❹-❿ Sidebar:</strong> Các mục quản lý tài chính
              <br />
              <strong>⓫-⓭ Hành động trang:</strong> Tạo báo cáo và xử lý thanh
              toán
              <br />
              <strong>⓮-⓱ Chỉ số chính:</strong> Khối lượng thanh toán, mục đang
              chờ, theo dõi hoa hồng
              <br />
              <strong>⓲-⓴ Hành động ưu tiên:</strong> Xác minh khẩn cấp và hoạt
              động gần đây
            </div>
          </div>
          <div>
            <div className="font-bold text-blue-600">📊 Tính năng nâng cao</div>
            <div className="text-gray-700">
              <strong>㉑-㉒ Biểu đồ tài chính:</strong> Xu hướng thanh toán và
              phân bố phương thức
              <br />
              <strong>㉓-㉕ Hàng đợi xác minh:</strong> Quy trình xem xét và phê
              duyệt thanh toán
              <br />
              <strong>㉖-㉙ Hành động nhanh:</strong> Xử lý hàng loạt và công cụ
              chuyên biệt
              <br />
              <strong>Khuôn khổ tuân thủ:</strong> Quản lý thuế và dấu vết kiểm
              toán
              <br />
              <strong>Trí tuệ thanh toán:</strong> Quy trình xác minh tự động
              <br />
              <strong>Quản lý rủi ro:</strong> Cảnh báo quá hạn và phát hiện
              gian lận
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
