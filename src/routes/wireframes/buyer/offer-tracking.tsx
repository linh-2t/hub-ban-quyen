import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/buyer/offer-tracking")({
  component: BuyerOfferTrackingWireframe,
});

export default function BuyerOfferTrackingWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF41 - THEO DÕI ĐỀ NGHỊ NGƯỜI MUA
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-blue-900 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">📚 Copyright Hub</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>Bảng điều khiển</div>
                <div>Tìm sách</div>
                <div className="font-semibold text-red-300">
                  Đề nghị của tôi
                </div>
                <div>Hợp đồng của tôi</div>
                <div>Thư viện</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (14)</div>
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
          {/* Sidebar */}
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
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-sm font-semibold">
                    💼 Đề nghị của tôi
                  </div>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      7
                    </div>
                    <div className="font-semibold text-red-600">
                      📈 Theo dõi đề nghị
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      8
                    </div>
                    <div className="text-gray-600">💬 Đàm phán</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      9
                    </div>
                    <div className="text-gray-600">📊 Phân tích</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    10
                  </div>
                  <div className="text-sm">📝 Hợp đồng của tôi</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
                  </div>
                  <div className="text-sm">📚 Thư viện của tôi</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    12
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
                    13
                  </div>
                  <h1 className="text-2xl font-bold">
                    Theo dõi Đề nghị Nâng cao
                  </h1>
                </div>
                <p className="text-gray-600">
                  Giám sát trạng thái đề nghị, theo dõi đàm phán và phân tích số
                  liệu hiệu suất
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded">
                    ➕ Tạo đề nghị mới
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white text-sm rounded">
                    📊 Báo cáo phân tích
                  </button>
                </div>
              </div>
            </div>

            {/* Offer Status Overview */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <div className="text-sm text-gray-600">
                    Đang chờ xét duyệt
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600">18</div>
                <div className="text-xs text-blue-600">
                  📋 Đang chờ phản hồi người bán
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Trung bình phản hồi: 2.4 ngày
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">Đang đàm phán</div>
                </div>
                <div className="text-2xl font-bold text-orange-600">12</div>
                <div className="text-xs text-orange-600">💬 Đang thảo luận</div>
                <div className="text-xs text-gray-500 mt-1">
                  Thời lượng trung bình: 8.5 ngày
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm text-gray-600">Đã chấp nhận</div>
                </div>
                <div className="text-2xl font-bold text-green-600">23</div>
                <div className="text-xs text-green-600">
                  ✅ Chuyển sang hợp đồng
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Tỉ lệ thành công: 67%
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-red-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm text-gray-600">Bị từ chối</div>
                </div>
                <div className="text-2xl font-bold text-red-600">8</div>
                <div className="text-xs text-red-600">
                  ❌ Bị người bán từ chối
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Rút kinh nghiệm từ phản hồi
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-purple-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    20
                  </div>
                  <div className="text-sm text-gray-600">Hết hạn</div>
                </div>
                <div className="text-2xl font-bold text-purple-600">5</div>
                <div className="text-xs text-purple-600">⏰ Quá thời hạn</div>
                <div className="text-xs text-gray-500 mt-1">Có thể gia hạn</div>
              </div>
            </div>

            {/* Offer Timeline Visualization */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded p-4 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  21
                </div>
                <h3 className="font-semibold text-blue-800">
                  📈 Minh họa Quy trình Đề nghị
                </h3>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-blue-200">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    18
                  </div>
                  <div className="text-xs text-blue-600 mt-1">Chờ</div>
                  <div className="text-xs text-gray-500">📋 Xét duyệt</div>
                </div>
                <div className="flex-1 mx-3">
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-500 rounded w-3/4"></div>
                  </div>
                  <div className="text-xs text-center text-gray-500 mt-1">
                    Tỷ lệ phản hồi 75%
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    12
                  </div>
                  <div className="text-xs text-orange-600 mt-1">
                    Đang thương lượng
                  </div>
                  <div className="text-xs text-gray-500">💬 Thảo luận</div>
                </div>
                <div className="flex-1 mx-3">
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-orange-500 rounded w-4/5"></div>
                  </div>
                  <div className="text-xs text-center text-gray-500 mt-1">
                    Chuyển đổi 80%
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    23
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    Đã chấp nhận
                  </div>
                  <div className="text-xs text-gray-500">✅ Thành công</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-600 text-center">
                Hiệu suất quy trình: 67% tỉ lệ thành công • Thời gian chu trình
                trung bình: 11.2 ngày
              </div>
            </div>

            {/* Real-time Notifications */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    22
                  </div>
                  <div className="text-sm font-semibold text-red-800">
                    🚨 Cần hành động khẩn cấp
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">
                      OFR-2024-1234 - Đắc Nhân Tâm
                    </div>
                    <div className="text-xs text-gray-600">
                      Nhận phản đề nghị: ₫125M → ₫140M
                    </div>
                    <div className="text-xs text-red-600">
                      ⏰ Hạn phản hồi: 6 giờ
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">
                      OFR-2024-1230 - Rich Dad Poor Dad
                    </div>
                    <div className="text-xs text-gray-600">
                      Người bán yêu cầu điều khoản bổ sung
                    </div>
                    <div className="text-xs text-orange-600">
                      💬 Tin nhắn đang chờ phản hồi
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-red-200">
                    <div className="font-medium">
                      OFR-2024-1228 - The Art of War
                    </div>
                    <div className="text-xs text-gray-600">
                      Đề nghị hết hạn vào ngày mai
                    </div>
                    <div className="text-xs text-purple-600">
                      ⏰ Xem xét gia hạn hạn
                    </div>
                  </div>
                  <button className="w-full px-3 py-1 bg-red-600 text-white text-xs rounded">
                    🚨 Xử lý mục khẩn cấp
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    23
                  </div>
                  <div className="text-sm font-semibold text-blue-800">
                    📊 Phân tích Hiệu suất
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Tỉ lệ thành công tháng này</span>
                    <span className="font-bold text-green-600">67%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Thời gian đàm phán trung bình</span>
                    <span className="font-bold text-blue-600">8.5 ngày</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Tổng giá trị đề nghị</span>
                    <span className="font-bold text-purple-600">₫3.2B</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded">
                    <span>Nhà xuất bản hoạt động</span>
                    <span className="font-bold text-orange-600">28</span>
                  </div>
                  <button className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded">
                    📈 Phân tích chi tiết
                  </button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    24
                  </div>
                  <div className="text-sm font-semibold text-green-800">
                    ✅ Thành công gần đây
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">
                        Business Strategy 2024
                      </span>
                      <span className="text-xs text-green-600">
                        ✅ Đã chấp nhận
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      ₫180M • Harvard Business Review
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">Psychology Today</span>
                      <span className="text-xs text-green-600">
                        ✅ Đã chấp nhận
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      ₫220M • APA Publications
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="flex justify-between">
                      <span className="font-medium">Tech Innovation Guide</span>
                      <span className="text-xs text-green-600">
                        ✅ Hợp đồng đã ký
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      ₫350M • MIT Press
                    </div>
                  </div>
                  <button className="w-full px-3 py-1 bg-green-600 text-white text-xs rounded">
                    📋 Xem tất cả thành công
                  </button>
                </div>
              </div>
            </div>

            {/* Advanced Filtering */}
            <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-6">
              <div className="grid grid-cols-6 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <label className="text-sm font-medium">Tìm đề nghị</label>
                  </div>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="Tiêu đề sách, nhà xuất bản..."
                    type="text"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      26
                    </div>
                    <label className="text-sm font-medium">Trạng thái</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả trạng thái</option>
                    <option>Đang chờ xét duyệt</option>
                    <option>Đang đàm phán</option>
                    <option>Đã chấp nhận</option>
                    <option>Bị từ chối</option>
                    <option>Hết hạn</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      27
                    </div>
                    <label className="text-sm font-medium">
                      Phạm vi giá trị
                    </label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả giá trị</option>
                    <option>{"< ₫100M"}</option>
                    <option>₫100M - ₫300M</option>
                    <option>₫300M - ₫500M</option>
                    <option>{"> ₫500M"}</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      28
                    </div>
                    <label className="text-sm font-medium">
                      Khoảng thời gian
                    </label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>30 ngày qua</option>
                    <option>7 ngày qua</option>
                    <option>90 ngày qua</option>
                    <option>Năm nay</option>
                    <option>Mọi thời điểm</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      29
                    </div>
                    <label className="text-sm font-medium">Độ ưu tiên</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả độ ưu tiên</option>
                    <option>Khẩn (Hạn hôm nay)</option>
                    <option>Cao (Hạn tuần này)</option>
                    <option>Bình thường</option>
                    <option>Thấp</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center gap-1 w-full">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      30
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded w-full">
                      🔍 Lọc
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Offer Tracking Table */}
            <div className="border border-gray-300 rounded">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      31
                    </div>
                    <h3 className="font-semibold">
                      Theo dõi đề nghị của tôi (66 tổng)
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                      ⚠️ Hiển thị Khẩn (3)
                    </button>
                    <button className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      💬 Đang đàm phán (12)
                    </button>
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Sắp xếp: Hoạt động mới nhất</option>
                      <option>Sắp xếp: Hạn chót</option>
                      <option>Sắp xếp: Giá trị (Cao→Thấp)</option>
                      <option>Sắp xếp: Trạng thái</option>
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
                            32
                          </div>
                          <div>Đề nghị & Sách</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Nhà xuất bản</th>
                      <th className="text-left p-3">Giá trị đề nghị</th>
                      <th className="text-left p-3">Trạng thái</th>
                      <th className="text-left p-3">Quá trình</th>
                      <th className="text-left p-3">Hoạt động gần nhất</th>
                      <th className="text-left p-3">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">OFR-2024-1234</div>
                          <div className="text-sm text-gray-800">
                            📚 Đắc Nhân Tâm
                          </div>
                          <div className="text-xs text-gray-600">
                            Quyền dịch sang tiếng Việt
                          </div>
                          <div className="text-xs text-red-600">
                            🚨 KHẨN - Phải phản hồi trong 6 giờ
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm font-medium">
                          NXB Tổng Hợp TP.HCM
                        </div>
                        <div className="text-xs text-gray-600">
                          🏢 Nhà xuất bản Việt Nam
                        </div>
                        <div className="text-xs text-green-600">
                          ⭐ 4.8/5 đánh giá
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold">₫125M → ₫140M</div>
                        <div className="text-xs text-orange-600">
                          📈 Đã nhận phản đề nghị
                        </div>
                        <div className="text-xs text-gray-600">+12% tăng</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          💬 Phản đề nghị
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Bắt đầu: 15/10/2024</div>
                        <div className="text-xs text-gray-600">
                          Thời lượng: 6 ngày
                        </div>
                        <div className="w-full bg-gray-200 rounded h-1 mt-1">
                          <div className="bg-orange-500 h-1 rounded w-4/5"></div>
                        </div>
                        <div className="text-xs text-orange-600">
                          Hạn phản hồi: Hôm nay
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">2 giờ trước</div>
                        <div className="text-xs text-orange-600">
                          💬 Tin nhắn phản đề nghị
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                            💬 Phản hồi
                          </button>
                          <button className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            ✅ Chấp nhận
                          </button>
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ Xem
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">OFR-2024-1232</div>
                          <div className="text-sm text-gray-800">
                            📖 Rich Dad Poor Dad
                          </div>
                          <div className="text-xs text-gray-600">
                            Quyền dịch sang tiếng Việt
                          </div>
                          <div className="text-xs text-blue-600">
                            💬 Đang đàm phán
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
                        <div className="font-bold text-blue-600">
                          ₫280,000,000
                        </div>
                        <div className="text-xs text-gray-600">
                          Độc quyền • 3 năm
                        </div>
                        <div className="text-xs text-blue-600">
                          Số tiền đề nghị ban đầu
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          💬 Đang đàm phán
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Bắt đầu: 12/10/2024</div>
                        <div className="text-xs text-gray-600">
                          Thời lượng: 9 ngày
                        </div>
                        <div className="w-full bg-gray-200 rounded h-1 mt-1">
                          <div className="bg-blue-500 h-1 rounded w-3/5"></div>
                        </div>
                        <div className="text-xs text-blue-600">
                          Hạn chót: còn 5 ngày
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Hôm qua</div>
                        <div className="text-xs text-blue-600">
                          💬 Thảo luận điều khoản
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            💬 Trò chuyện
                          </button>
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ Xem
                          </button>
                          <button className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                            📝 Chỉnh sửa
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">OFR-2024-1230</div>
                          <div className="text-sm text-gray-800">
                            📘 The Art of War
                          </div>
                          <div className="text-xs text-gray-600">
                            Quyền xuất bản tiếng Anh
                          </div>
                          <div className="text-xs text-gray-600">
                            📋 Đang chờ xét duyệt
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
                        <div className="text-xs text-gray-600">
                          Đề nghị ban đầu
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                          📋 Đang chờ xét duyệt
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Bắt đầu: 18/10/2024</div>
                        <div className="text-xs text-gray-600">
                          Thời lượng: 3 ngày
                        </div>
                        <div className="w-full bg-gray-200 rounded h-1 mt-1">
                          <div className="bg-gray-500 h-1 rounded w-1/4"></div>
                        </div>
                        <div className="text-xs text-gray-600">
                          Dự kiến phản hồi: 2 ngày
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">3 ngày trước</div>
                        <div className="text-xs text-gray-600">
                          📤 Đã gửi đề nghị
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ Xem
                          </button>
                          <button className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            📞 Theo dõi
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-green-50">
                      <td className="p-3">
                        <input type="checkbox" />
                        <div>
                          <div className="font-medium">OFR-2024-1228</div>
                          <div className="text-sm text-gray-800">
                            📗 Business Strategy Guide
                          </div>
                          <div className="text-xs text-gray-600">
                            Quyền dịch sang tiếng Việt
                          </div>
                          <div className="text-xs text-green-600">
                            ✅ Đã chấp nhận
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
                        <div className="font-bold text-green-600">
                          ₫180,000,000
                        </div>
                        <div className="text-xs text-gray-600">
                          Độc quyền • 4 năm
                        </div>
                        <div className="text-xs text-green-600">
                          Chấp nhận như đề nghị
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Đã chấp nhận
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Hoàn tất: 16/10/2024</div>
                        <div className="text-xs text-gray-600">
                          Thời lượng: 5 ngày
                        </div>
                        <div className="w-full bg-gray-200 rounded h-1 mt-1">
                          <div className="bg-green-500 h-1 rounded w-full"></div>
                        </div>
                        <div className="text-xs text-green-600">
                          ✅ Quá trình hoàn tất
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">5 ngày trước</div>
                        <div className="text-xs text-green-600">
                          ✅ Đề nghị đã được chấp nhận
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            📝 Hợp đồng
                          </button>
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ Xem
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
                    Hiển thị 1 đến 20 trên 66 đề nghị
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      33
                    </div>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      disabled
                    >
                      Trước
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded text-sm">
                      1
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      2
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      3
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      4
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      Tiếp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annotation */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-bold text-blue-800 mb-4">
          📝 WF41 - GHI CHÚ THEO DÕI ĐỀ NGHỊ NGƯỜI MUA
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-blue-600">📈 Theo dõi nâng cao</div>
            <div className="text-gray-700">
              <strong>❶-❸ Đầu trang:</strong> Điều hướng cổng người mua
              <br />
              <strong>❹-⓬ Thanh bên:</strong> Menu con quản lý đề nghị mở rộng
              <br />
              <strong>⓭-⓯ Hành động trang:</strong> Tạo đề nghị mới và phân tích
              <br />
              <strong>⓰-⓴ Tổng quan Trạng thái:</strong> Số liệu quy trình đề
              nghị chi tiết
              <br />
              <strong>㉑ Minh họa quy trình:</strong> Minh họa luồng đề nghị
              tương tác
            </div>
          </div>
          <div>
            <div className="font-bold text-blue-600">
              🎯 Tính năng thông minh
            </div>
            <div className="text-gray-700">
              <strong>㉒-㉔ Cảnh báo thời gian thực:</strong> Hành động khẩn,
              thông tin, theo dõi thành công
              <br />
              <strong>㉕-㉚ Bộ lọc nâng cao:</strong> Tìm kiếm và lọc toàn diện
              <br />
              <strong>㉛-㉝ Bảng theo dõi:</strong> Quản lý trạng thái đề nghị
              và tiến trình chi tiết
              <br />
              <strong>Trí tuệ đàm phán:</strong> Theo dõi phản đề nghị và quản
              lý phản hồi
              <br />
              <strong>Phân tích hiệu suất:</strong> Tỉ lệ thành công và tối ưu
              hóa thời gian
              <br />
              <strong>Quản lý hạn chót:</strong> Cảnh báo tự động và tùy chọn
              gia hạn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
