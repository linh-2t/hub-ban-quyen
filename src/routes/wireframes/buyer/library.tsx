import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/buyer/library")({
  component: BuyerLibraryWireframe,
});

export default function BuyerLibraryWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF44 - GIAO DIỆN THƯ VIỆN NGƯỜI MUA
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
                <div>Ưu đãi của tôi</div>
                <div>Hợp đồng của tôi</div>
                <div className="font-semibold text-red-300">Thư viện</div>
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
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-sm">💼 Ưu đãi của tôi</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    7
                  </div>
                  <div className="text-sm">📝 Hợp đồng của tôi</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <div className="text-sm font-semibold">
                    📚 Thư viện của tôi
                  </div>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      9
                    </div>
                    <div className="font-semibold text-red-600">
                      📖 Tất cả sách
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      10
                    </div>
                    <div className="text-gray-600">📊 Tiến độ đọc</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      11
                    </div>
                    <div className="text-gray-600">⭐ Yêu thích</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      12
                    </div>
                    <div className="text-gray-600">🗂️ Bộ sưu tập</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
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
                    14
                  </div>
                  <h1 className="text-2xl font-bold">
                    Thư viện kỹ thuật số của tôi
                  </h1>
                </div>
                <p className="text-gray-600">
                  Quản lý sách đã mua, theo dõi tiến độ đọc và tổ chức bộ sưu
                  tập
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded">
                    ➕ Thêm vào bộ sưu tập
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white text-sm rounded">
                    📊 Thống kê đọc
                  </button>
                </div>
              </div>
            </div>

            {/* Library Statistics */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">Tổng sách</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">147</div>
                <div className="text-xs text-blue-600">📚 Sách đã mua</div>
                <div className="text-xs text-gray-500 mt-1">
                  Giá trị tổng ₫8.2B
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm text-gray-600">Tiến độ đọc</div>
                </div>
                <div className="text-2xl font-bold text-green-600">68%</div>
                <div className="text-xs text-green-600">
                  📖 Tỉ lệ hoàn thành trung bình
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  85 sách đã hoàn thành
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm text-gray-600">Tháng này</div>
                </div>
                <div className="text-2xl font-bold text-orange-600">12</div>
                <div className="text-xs text-orange-600">📗 Sách mới mua</div>
                <div className="text-xs text-gray-500 mt-1">
                  8 sách hoàn thành
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-purple-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    20
                  </div>
                  <div className="text-sm text-gray-600">Bộ sưu tập</div>
                </div>
                <div className="text-2xl font-bold text-purple-600">8</div>
                <div className="text-xs text-purple-600">
                  🗂️ Bộ sưu tập đã tổ chức
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  25 mục yêu thích
                </div>
              </div>
            </div>

            {/* Reading Activity Dashboard */}
            <div className="bg-linear-to-r from-blue-50 to-purple-50 border border-blue-200 rounded p-4 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  21
                </div>
                <h3 className="font-semibold text-blue-800">
                  📈 Hoạt động đọc & Theo dõi tiến độ
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded border border-blue-200">
                  <div className="text-sm text-gray-600 mb-2">
                    Tiến độ đọc năm nay
                  </div>
                  <div className="flex items-end gap-1 h-16">
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "70%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "80%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "65%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "85%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "90%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "95%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "88%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "92%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "100%" }}
                    ></div>
                    <div
                      className="bg-blue-400 w-3"
                      style={{ height: "85%" }}
                    ></div>
                    <div
                      className="bg-gray-300 w-3"
                      style={{ height: "40%" }}
                    ></div>
                    <div
                      className="bg-gray-300 w-3"
                      style={{ height: "35%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Đỉnh: Tháng 9 (15 sách)
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <div className="text-sm text-gray-600 mb-2">
                    Phân bố theo thể loại
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-xs">📊 Kinh doanh</span>
                      <span className="text-xs font-bold text-blue-600">
                        42 sách
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">🧠 Tâm lý học</span>
                      <span className="text-xs font-bold text-green-600">
                        38 sách
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">💻 Công nghệ</span>
                      <span className="text-xs font-bold text-orange-600">
                        28 sách
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">🎓 Giáo dục</span>
                      <span className="text-xs font-bold text-purple-600">
                        22 sách
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">🏛️ Khác</span>
                      <span className="text-xs font-bold text-gray-600">
                        17 sách
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <div className="text-sm text-gray-600 mb-2">Mục tiêu đọc</div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs">
                        <span>Mục tiêu hàng tháng</span>
                        <span className="font-bold">12/15 sách</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-1 mt-1">
                        <div className="bg-blue-500 h-1 rounded w-4/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs">
                        <span>Mục tiêu năm</span>
                        <span className="font-bold">115/120 sách</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-1 mt-1">
                        <div className="bg-green-500 h-1 rounded w-5/6"></div>
                      </div>
                    </div>
                    <div className="text-xs text-green-600 mt-2">
                      🎯 96% hoàn thành - đang đi đúng hướng!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & Recommendations */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    22
                  </div>
                  <div className="text-sm font-semibold text-blue-800">
                    📖 Đang đọc
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-blue-200">
                    <div className="font-medium">Atomic Habits</div>
                    <div className="text-xs text-gray-600">by James Clear</div>
                    <div className="w-full bg-gray-200 rounded h-1 mt-1">
                      <div className="bg-blue-500 h-1 rounded w-3/4"></div>
                    </div>
                    <div className="text-xs text-blue-600 mt-1">
                      75% hoàn thành • Trang 243/324
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-blue-200">
                    <div className="font-medium">Deep Work</div>
                    <div className="text-xs text-gray-600">by Cal Newport</div>
                    <div className="w-full bg-gray-200 rounded h-1 mt-1">
                      <div className="bg-green-500 h-1 rounded w-1/3"></div>
                    </div>
                    <div className="text-xs text-green-600 mt-1">
                      35% hoàn thành • Trang 89/296
                    </div>
                  </div>
                  <button className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded">
                    📚 Tiếp tục đọc
                  </button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    23
                  </div>
                  <div className="text-sm font-semibold text-green-800">
                    💡 Gợi ý
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="font-medium">Thinking, Fast and Slow</div>
                    <div className="text-xs text-gray-600">
                      Dựa trên sách tâm lý bạn đã đọc
                    </div>
                    <div className="text-xs text-green-600">
                      ⭐ 4.8/5 đánh giá
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="font-medium">The Lean Startup</div>
                    <div className="text-xs text-gray-600">
                      Bổ sung cho bộ sưu tập kinh doanh của bạn
                    </div>
                    <div className="text-xs text-blue-600">
                      🔥 Phổ biến trong mạng lưới của bạn
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="font-medium">Clean Architecture</div>
                    <div className="text-xs text-gray-600">
                      Tiếp theo trong chuỗi công nghệ của bạn
                    </div>
                    <div className="text-xs text-orange-600">
                      📈 Công nghệ thịnh hành
                    </div>
                  </div>
                  <button className="w-full px-3 py-1 bg-green-600 text-white text-xs rounded">
                    🔍 Duyệt thêm
                  </button>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    24
                  </div>
                  <div className="text-sm font-semibold text-purple-800">
                    🗂️ Bộ sưu tập của tôi
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-purple-200">
                    <div className="flex justify-between">
                      <span className="font-medium">
                        📊 Những cuốn kinh doanh cần đọc
                      </span>
                      <span className="text-xs text-purple-600">18 sách</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Sách kinh doanh nên đọc
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-purple-200">
                    <div className="flex justify-between">
                      <span className="font-medium">
                        🧠 Tâm lý học chuyên sâu
                      </span>
                      <span className="text-xs text-blue-600">15 sách</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Hiểu biết về hành vi con người
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-purple-200">
                    <div className="flex justify-between">
                      <span className="font-medium">💻 Lãnh đạo công nghệ</span>
                      <span className="text-xs text-green-600">12 sách</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Quản lý công nghệ
                    </div>
                  </div>
                  <button className="w-full px-3 py-1 bg-purple-600 text-white text-xs rounded">
                    📁 Quản lý bộ sưu tập
                  </button>
                </div>
              </div>
            </div>

            {/* Advanced Library Filters */}
            <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-6">
              <div className="grid grid-cols-6 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <label className="text-sm font-medium">
                      Tìm kiếm thư viện
                    </label>
                  </div>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="Tiêu đề sách, tác giả..."
                    type="text"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      26
                    </div>
                    <label className="text-sm font-medium">Thể loại</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả thể loại</option>
                    <option>Kinh doanh & Kinh tế</option>
                    <option>Tâm lý học</option>
                    <option>Công nghệ</option>
                    <option>Giáo dục</option>
                    <option>Lịch sử & Văn hóa</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      27
                    </div>
                    <label className="text-sm font-medium">
                      Trạng thái đọc
                    </label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả sách</option>
                    <option>Chưa bắt đầu</option>
                    <option>Đang đọc</option>
                    <option>Hoàn thành</option>
                    <option>Tạm dừng</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      28
                    </div>
                    <label className="text-sm font-medium">Ngày thêm</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Tất cả thời gian</option>
                    <option>Tuần này</option>
                    <option>Tháng này</option>
                    <option>3 tháng qua</option>
                    <option>Năm nay</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      29
                    </div>
                    <label className="text-sm font-medium">Sắp xếp theo</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Mới thêm</option>
                    <option>Tiêu đề A-Z</option>
                    <option>Tác giả A-Z</option>
                    <option>Tiến độ đọc</option>
                    <option>Đánh giá</option>
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

            {/* Library Book Grid */}
            <div className="border border-gray-300 rounded">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      31
                    </div>
                    <h3 className="font-semibold">
                      Bộ sưu tập sách của tôi (147 sách)
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      📖 Đang đọc (3)
                    </button>
                    <button className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded">
                      ⭐ Yêu thích (25)
                    </button>
                    <div className="flex gap-1">
                      <button className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">
                        🔲 Lưới
                      </button>
                      <button className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        📋 Danh sách
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-6 gap-4">
                  {/* Book Item 1 */}
                  <div className="border border-gray-200 rounded p-3 hover:shadow-md bg-blue-50">
                    <div className="aspect-[3/4] bg-blue-600 rounded mb-2 flex items-center justify-center text-white text-xs">
                      📚<br />
                      BÌA
                      <br />
                      SÁCH
                    </div>
                    <div className="text-sm font-medium mb-1">
                      Atomic Habits
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      James Clear
                    </div>
                    <div className="w-full bg-gray-200 rounded h-1 mb-1">
                      <div className="bg-blue-500 h-1 rounded w-3/4"></div>
                    </div>
                    <div className="text-xs text-blue-600 mb-2">
                      75% hoàn thành
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">⭐ 4.9</span>
                      <button className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        📖 Tiếp tục
                      </button>
                    </div>
                  </div>

                  {/* Book Item 2 */}
                  <div className="border border-gray-200 rounded p-3 hover:shadow-md bg-green-50">
                    <div className="aspect-[3/4] bg-green-600 rounded mb-2 flex items-center justify-center text-white text-xs">
                      📗<br />
                      BÌA
                      <br />
                      SÁCH
                    </div>
                    <div className="text-sm font-medium mb-1">Deep Work</div>
                    <div className="text-xs text-gray-600 mb-2">
                      Cal Newport
                    </div>
                    <div className="w-full bg-gray-200 rounded h-1 mb-1">
                      <div className="bg-green-500 h-1 rounded w-1/3"></div>
                    </div>
                    <div className="text-xs text-green-600 mb-2">
                      35% hoàn thành
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">⭐ 4.7</span>
                      <button className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        📖 Đọc
                      </button>
                    </div>
                  </div>

                  {/* Book Item 3 */}
                  <div className="border border-gray-200 rounded p-3 hover:shadow-md">
                    <div className="aspect-[3/4] bg-gray-600 rounded mb-2 flex items-center justify-center text-white text-xs">
                      📖<br />
                      BÌA
                      <br />
                      SÁCH
                    </div>
                    <div className="text-sm font-medium mb-1">Đắc Nhân Tâm</div>
                    <div className="text-xs text-gray-600 mb-2">
                      Dale Carnegie
                    </div>
                    <div className="w-full bg-gray-200 rounded h-1 mb-1">
                      <div className="bg-gray-500 h-1 rounded w-full"></div>
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      ✅ Đã hoàn thành
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">⭐ 5.0</span>
                      <button className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        📝 Viết đánh giá
                      </button>
                    </div>
                  </div>

                  {/* Book Item 4 */}
                  <div className="border border-gray-200 rounded p-3 hover:shadow-md bg-orange-50">
                    <div className="aspect-[3/4] bg-orange-600 rounded mb-2 flex items-center justify-center text-white text-xs">
                      📙<br />
                      BÌA
                      <br />
                      SÁCH
                    </div>
                    <div className="text-sm font-medium mb-1">Clean Code</div>
                    <div className="text-xs text-gray-600 mb-2">
                      Robert Martin
                    </div>
                    <div className="w-full bg-gray-200 rounded h-1 mb-1">
                      <div className="bg-orange-500 h-1 rounded w-1/2"></div>
                    </div>
                    <div className="text-xs text-orange-600 mb-2">
                      50% hoàn thành
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">⭐ 4.6</span>
                      <button className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                        📖 Tiếp tục
                      </button>
                    </div>
                  </div>

                  {/* Book Item 5 */}
                  <div className="border border-gray-200 rounded p-3 hover:shadow-md bg-purple-50">
                    <div className="aspect-[3/4] bg-purple-600 rounded mb-2 flex items-center justify-center text-white text-xs">
                      📘<br />
                      BÌA
                      <br />
                      SÁCH
                    </div>
                    <div className="text-sm font-medium mb-1">
                      Thinking Fast & Slow
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      Daniel Kahneman
                    </div>
                    <div className="w-full bg-gray-200 rounded h-1 mb-1">
                      <div className="bg-gray-300 h-1 rounded w-0"></div>
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      Chưa bắt đầu
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">⭐ 4.8</span>
                      <button className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                        📖 Bắt đầu
                      </button>
                    </div>
                  </div>

                  {/* Book Item 6 */}
                  <div className="border border-gray-200 rounded p-3 hover:shadow-md">
                    <div className="aspect-[3/4] bg-gray-600 rounded mb-2 flex items-center justify-center text-white text-xs">
                      📗<br />
                      BÌA
                      <br />
                      SÁCH
                    </div>
                    <div className="text-sm font-medium mb-1">
                      The Lean Startup
                    </div>
                    <div className="text-xs text-gray-600 mb-2">Eric Ries</div>
                    <div className="w-full bg-gray-200 rounded h-1 mb-1">
                      <div className="bg-gray-500 h-1 rounded w-full"></div>
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      ✅ Đã hoàn thành
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">⭐ 4.5</span>
                      <button className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        📝 Viết đánh giá
                      </button>
                    </div>
                  </div>
                </div>

                {/* Load More */}
                <div className="mt-6 text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      32
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded">
                      📚 Tải thêm sách
                    </button>
                    <span className="text-sm text-gray-600">
                      Hiển thị 6 trên 147 sách
                    </span>
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
          📝 WF44 - GHI CHÚ GIAO DIỆN THƯ VIỆN NGƯỜI MUA
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-blue-600">
              📚 Thư viện kỹ thuật số
            </div>
            <div className="text-gray-700">
              <strong>❶-❸ Tiêu đề:</strong> Cổng người mua tập trung vào thư
              viện
              <br />
              <strong>❹-⓭ Thanh bên:</strong> Menu thư viện với tùy chọn tổ chức
              <br />
              <strong>⓮-⓰ Điều khiển trang:</strong> Quản lý bộ sưu tập và thống
              kê
              <br />
              <strong>⓱-⓴ Thống kê thư viện:</strong> Tổng sách, tiến độ, hoạt
              động và bộ sưu tập
              <br />
              <strong>㉑ Bảng hoạt động:</strong> Hiển thị tiến độ đọc và theo
              dõi mục tiêu
            </div>
          </div>
          <div>
            <div className="font-bold text-blue-600">📖 Tính năng quản lý</div>
            <div className="text-gray-700">
              <strong>㉒-㉔ Hành động nhanh:</strong> Đang đọc, gợi ý, bộ sưu
              tập
              <br />
              <strong>㉕-㉚ Bộ lọc nâng cao:</strong> Tìm kiếm và công cụ tổ
              chức toàn diện
              <br />
              <strong>㉛-㉜ Lưới sách:</strong> Thư viện trực quan với theo dõi
              tiến độ và quản lý
              <br />
              <strong>Tiến độ đọc:</strong> Theo dõi hoàn thành và mục tiêu
              <br />
              <strong>Bộ sưu tập thông minh:</strong> Phân loại và tổ chức tự
              động
              <br />
              <strong>Gợi ý cá nhân hóa:</strong> Phát hiện sách và đề xuất dựa
              trên AI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
