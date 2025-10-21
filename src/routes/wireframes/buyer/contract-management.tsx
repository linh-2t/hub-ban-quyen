import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/buyer/contract-management")({
  component: BuyerContractManagementWireframe,
});

export default function BuyerContractManagementWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF40 - QUẢN LÝ HỢP ĐỒNG NGƯỜI MUA
      </h1>

      {/* Khung giao diện */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-blue-900 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">📚 Hub Bản Quyền</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>Bảng điều khiển</div>
                <div>Tìm sách</div>
                <div>Đề nghị của tôi</div>
                <div className="font-semibold text-red-300">
                  Hợp đồng của tôi
                </div>
                <div>Thư viện</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (8)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">💼 Fahasa Books ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Thanh bên */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50">
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <div className="text-sm">📊 Bảng điều khiển</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                  <div className="text-sm">🔍 Tìm sách</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-sm">💼 Đề nghị của tôi</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    7
                  </div>
                  <div className="text-sm font-semibold">
                    📝 Hợp đồng của tôi
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <div className="text-sm">📚 Thư viện của tôi</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    9
                  </div>
                  <div className="text-sm">💳 Thanh toán</div>
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

          {/* Nội dung chính */}
          <div className="flex-1 p-6">
            {/* Tiêu đề trang */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
                  </div>
                  <h1 className="text-2xl font-bold">
                    Quản lý Hợp đồng của tôi
                  </h1>
                </div>
                <p className="text-gray-600">
                  Theo dõi thỏa thuận bản quyền, thanh toán và ký tài liệu
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
                    📋 Mẫu hợp đồng
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
                    📤 Xuất báo cáo
                  </button>
                </div>
              </div>
            </div>

            {/* Tổng quan trạng thái hợp đồng */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="text-sm text-gray-600">
                    Hợp đồng đang hoạt động
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">23</div>
                <div className="text-xs text-green-600">✅ Đã ký đầy đủ</div>
                <div className="text-xs text-gray-500 mt-1">
                  Tổng giá trị: ₫2.8B
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <div className="text-sm text-gray-600">Chờ ký</div>
                </div>
                <div className="text-2xl font-bold text-orange-600">7</div>
                <div className="text-xs text-orange-600">✍️ Chờ bạn ký</div>
                <div className="text-xs text-gray-500 mt-1">Giá trị: ₫450M</div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <div className="text-sm text-gray-600">Đang đàm phán</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-xs text-blue-600">
                  💬 Điều khoản đang được thảo luận
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Giá ước tính: ₫890M
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-purple-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">Chờ thanh toán</div>
                </div>
                <div className="text-2xl font-bold text-purple-600">5</div>
                <div className="text-xs text-purple-600">
                  💳 Cần xác minh thanh toán
                </div>
                <div className="text-xs text-gray-500 mt-1">Số tiền: ₫125M</div>
              </div>
            </div>

            {/* Hành động ưu tiên */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm font-semibold text-red-800">
                    🚨 Cần hành động khẩn cấp
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">
                      CTR-2024-1847 - Đắc Nhân Tâm
                    </div>
                    <div className="text-xs text-gray-600">
                      NXB Tổng Hợp TP.HCM
                    </div>
                    <div className="text-xs text-red-600">
                      ⏰ Hạn ký: Hôm nay
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">
                      CTR-2024-1845 - Rich Dad Poor Dad
                    </div>
                    <div className="text-xs text-gray-600">
                      Rich Dad Company
                    </div>
                    <div className="text-xs text-orange-600">
                      💳 Hạn thanh toán: Ngày mai
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">
                      CTR-2024-1843 - The Art of War
                    </div>
                    <div className="text-xs text-gray-600">
                      Dover Publications
                    </div>
                    <div className="text-xs text-blue-600">
                      💬 Đã nhận phản đề nghị
                    </div>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-red-600 text-white text-xs rounded"
                    type="button"
                  >
                    🚨 Xử lý mục khẩn cấp
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm font-semibold text-blue-800">
                    📊 Phân tích hợp đồng
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Tỷ lệ thành công</span>
                    <span className="font-bold text-green-600">87%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Thời gian đàm phán trung bình</span>
                    <span className="font-bold text-blue-600">8.5 ngày</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Tổng đầu tư</span>
                    <span className="font-bold text-purple-600">₫4.1B</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Nhà xuất bản hoạt động</span>
                    <span className="font-bold text-orange-600">34</span>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded"
                    type="button"
                  >
                    📈 Xem phân tích chi tiết
                  </button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    20
                  </div>
                  <div className="text-sm font-semibold text-green-800">
                    ✅ Mới hoàn thành
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">
                        Business Strategy Guide
                      </span>
                      <span className="text-xs text-green-600">✅ Đã ký</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      ₫180M • Harvard Business Review
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">Psychology Today</span>
                      <span className="text-xs text-green-600">
                        ✅ Đã thực hiện
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      ₫220M • American Psychological Association
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">Tech Innovation 2024</span>
                      <span className="text-xs text-green-600">
                        ✅ Đang hoạt động
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      ₫350M • MIT Technology Review
                    </div>
                  </div>
                  <button
                    className="w-full px-3 py-1 bg-green-600 text-white text-xs rounded"
                    type="button"
                  >
                    📋 Xem tất cả đã hoàn thành
                  </button>
                </div>
              </div>
            </div>

            {/* Tìm kiếm hợp đồng và bộ lọc */}
            <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-6">
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      21
                    </div>
                    <label className="text-sm font-medium">Tìm hợp đồng</label>
                  </div>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="Mã hợp đồng, tựa sách..."
                    type="text"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      22
                    </div>
                    <label className="text-sm font-medium">Trạng thái</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả trạng thái</option>
                    <option>Nháp</option>
                    <option>Đang đàm phán</option>
                    <option>Chờ ký</option>
                    <option>Đã ký đầy đủ</option>
                    <option>Chờ thanh toán</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      23
                    </div>
                    <label className="text-sm font-medium">Nhà xuất bản</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả nhà xuất bản</option>
                    <option>NXB Tổng Hợp TP.HCM</option>
                    <option>Rich Dad Company</option>
                    <option>Dover Publications</option>
                    <option>Harvard Business Review</option>
                    <option>Khác...</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      24
                    </div>
                    <label className="text-sm font-medium">
                      Khoảng giá trị
                    </label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả giá trị</option>
                    <option>{"< ₫50M"}</option>
                    <option>₫50M - ₫200M</option>
                    <option>₫200M - ₫500M</option>
                    <option>{"> ₫500M"}</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center gap-1 w-full">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded w-full"
                      type="button"
                    >
                      🔍 Tìm kiếm
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bảng hợp đồng */}
            <div className="border border-gray-300 rounded">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      26
                    </div>
                    <h3 className="font-semibold">
                      Hợp đồng của tôi (47 tổng cộng)
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Sắp xếp: Mới nhất</option>
                      <option>Giá trị: Cao → Thấp</option>
                      <option>Giá trị: Thấp → Cao</option>
                      <option>Trạng thái</option>
                      <option>Hạn chót</option>
                    </select>
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Hiển thị: 20 mỗi trang</option>
                      <option>Hiển thị: 50 mỗi trang</option>
                      <option>Hiển thị: 100 mỗi trang</option>
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
                            27
                          </div>
                          <div>Hợp đồng & Sách</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Nhà xuất bản</th>
                      <th className="text-left p-3">Giá trị & Điều khoản</th>
                      <th className="text-left p-3">Trạng thái</th>
                      <th className="text-left p-3">Hành động tiếp theo</th>
                      <th className="text-left p-3">Hạn chót</th>
                      <th className="text-left p-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">CTR-2024-1847</div>
                          <div className="text-sm text-gray-800">
                            📚 Đắc Nhân Tâm
                          </div>
                          <div className="text-xs text-gray-600">
                            Quyền dịch sang tiếng Việt
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          NXB Tổng Hợp TP.HCM
                        </div>
                        <div className="text-xs text-gray-600">
                          🏢 Nhà xuất bản đã xác minh
                        </div>
                        <div className="text-xs text-green-600">
                          ⭐ 4.8/5 đánh giá
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold">₫125,000,000</div>
                        <div className="text-xs text-gray-600">
                          Độc quyền • 7 năm
                        </div>
                        <div className="text-xs text-blue-600">
                          Hoa hồng: 10%
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                          ⏰ Hạn ký
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium text-red-600">
                          ✍️ Ký hợp đồng
                        </div>
                        <div className="text-xs text-gray-600">
                          Yêu cầu chữ ký kỹ thuật số
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-red-600 font-medium">Hôm nay</div>
                        <div className="text-xs text-red-600">🚨 Còn 8 giờ</div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded"
                            type="button"
                          >
                            ✍️ Ký ngay
                          </button>
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-orange-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">CTR-2024-1845</div>
                          <div className="text-sm text-gray-800">
                            📖 Rich Dad Poor Dad
                          </div>
                          <div className="text-xs text-gray-600">
                            Quyền dịch sang tiếng Việt
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          Rich Dad Company
                        </div>
                        <div className="text-xs text-gray-600">
                          🌐 Nhà xuất bản quốc tế
                        </div>
                        <div className="text-xs text-green-600">
                          ⭐ 4.9/5 đánh giá
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-orange-600">
                          ₫280,000,000
                        </div>
                        <div className="text-xs text-gray-600">
                          Độc quyền • 3 năm
                        </div>
                        <div className="text-xs text-blue-600">
                          Hoa hồng: 12%
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          💳 Chờ thanh toán
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium text-orange-600">
                          💳 Thanh toán
                        </div>
                        <div className="text-xs text-gray-600">
                          Xác minh chuyển khoản
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-orange-600 font-medium">
                          Ngày mai
                        </div>
                        <div className="text-xs text-orange-600">
                          ⏳ Còn 1 ngày
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded"
                            type="button"
                          >
                            💳 Thanh toán
                          </button>
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">CTR-2024-1843</div>
                          <div className="text-sm text-gray-800">
                            📘 The Art of War
                          </div>
                          <div className="text-xs text-gray-600">
                            Quyền xuất bản tiếng Anh
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          Dover Publications
                        </div>
                        <div className="text-xs text-gray-600">
                          📚 Nhà xuất bản kinh điển
                        </div>
                        <div className="text-xs text-green-600">
                          ⭐ 4.7/5 đánh giá
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold">₫350,000,000</div>
                        <div className="text-xs text-gray-600">
                          Không độc quyền • 5 năm
                        </div>
                        <div className="text-xs text-blue-600">
                          Hoa hồng: 8%
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          💬 Đang đàm phán
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium text-blue-600">
                          💬 Xem phản đề nghị
                        </div>
                        <div className="text-xs text-gray-600">
                          Giá tăng lên ₫380M
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-blue-600">25/10/2024</div>
                        <div className="text-xs text-green-600">
                          ⏰ Còn 4 ngày
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            type="button"
                          >
                            💬 Đàm phán
                          </button>
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-green-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">CTR-2024-1841</div>
                          <div className="text-sm text-gray-800">
                            📗 Business Strategy Guide
                          </div>
                          <div className="text-xs text-gray-600">
                            Quyền dịch sang tiếng Việt
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          Harvard Business Review
                        </div>
                        <div className="text-xs text-gray-600">
                          🎓 Nhà xuất bản học thuật
                        </div>
                        <div className="text-xs text-green-600">
                          ⭐ 4.9/5 đánh giá
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold">₫180,000,000</div>
                        <div className="text-xs text-gray-600">
                          Độc quyền • 4 năm
                        </div>
                        <div className="text-xs text-blue-600">
                          Hoa hồng: 10%
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Hợp đồng đang hoạt động
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium text-green-600">
                          📚 Truy cập thư viện
                        </div>
                        <div className="text-xs text-gray-600">
                          Hợp đồng đã ký hoàn tất
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-gray-600">Hoàn thành</div>
                        <div className="text-xs text-green-600">
                          ✅ Hoàn tất
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded"
                            type="button"
                          >
                            📚 Thư viện
                          </button>
                          <button
                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                            type="button"
                          >
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Phân trang */}
              <div className="bg-gray-50 p-3 border-t border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Hiển thị 1 đến 20 trên 47 hợp đồng
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      28
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
          </div>
        </div>
      </div>

      {/* Ghi chú */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-bold text-blue-800 mb-4">
          📝 WF40 - CHÚ THÍCH QUẢN LÝ HỢP ĐỒNG NGƯỜI MUA
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-blue-600">📝 Quản lý hợp đồng</div>
            <div className="text-gray-700">
              <strong>❶-❸ Header:</strong> Điều hướng cổng người mua (tông xanh)
              <br />
              <strong>❹-❿ Thanh bên:</strong> Các mục menu dành cho người mua
              <br />
              <strong>⓫-⓭ Hành động trang:</strong> Mẫu hợp đồng và chức năng
              xuất báo cáo
              <br />
              <strong>⓮-⓱ Tổng quan trạng thái:</strong> Các trạng thái: đang
              hoạt động, chờ ký, đàm phán, chờ thanh toán
              <br />
              <strong>⓲-⓴ Hành động ưu tiên:</strong> Mục khẩn cấp, phân tích,
              hợp đồng đã hoàn thành
            </div>
          </div>
          <div>
            <div className="font-bold text-blue-600">🎯 Tính năng nâng cao</div>
            <div className="text-gray-700">
              <strong>㉑-㉕ Tìm & Lọc:</strong> Tìm hợp đồng và lọc theo trạng
              thái
              <br />
              <strong>㉖-㉘ Bảng hợp đồng:</strong> Tổng quan và quản lý hợp
              đồng chi tiết
              <br />
              <strong>Quản lý tài liệu:</strong> Ký số và truy cập tệp
              <br />
              <strong>Tích hợp thanh toán:</strong> Theo dõi và xác minh thanh
              toán
              <br />
              <strong>Công cụ đàm phán:</strong> Quản lý phản đề nghị và giao
              tiếp
              <br />
              <strong>Bảng phân tích:</strong> Tỷ lệ thành công và theo dõi đầu
              tư
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
