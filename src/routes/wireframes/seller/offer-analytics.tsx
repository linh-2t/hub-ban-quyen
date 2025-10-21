import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/seller/offer-analytics")({
  component: SellerOfferAnalyticsWireframe,
});

export default function SellerOfferAnalyticsWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-green-600">
        WF43 - PHÂN TÍCH OFFER CỦA SELLER
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-green-900 text-white">
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
                <div>Sách của tôi</div>
                <div>Đề nghị</div>
                <div>Hợp đồng</div>
                <div className="font-semibold text-red-300">Phân tích</div>
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
                <div className="text-xs">📖 Nhà xuất bản Kim Đồng ▼</div>
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
                  <div className="text-sm">📚 Sách của tôi</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-sm">💰 Đề nghị nhận được</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    7
                  </div>
                  <div className="text-sm">📝 Hợp đồng</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <div className="text-sm font-semibold">📈 Phân tích</div>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      9
                    </div>
                    <div className="font-semibold text-red-600">
                      💰 Phân tích đề nghị
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      10
                    </div>
                    <div className="text-gray-600">👥 Thông tin người mua</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      11
                    </div>
                    <div className="text-gray-600">📊 Xu hướng thị trường</div>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      12
                    </div>
                    <div className="text-gray-600">💡 Khuyến nghị</div>
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
                    Phân tích đề nghị nâng cao
                  </h1>
                </div>
                <p className="text-gray-600">
                  Những hiểu biết toàn diện về hiệu suất đề nghị, hành vi người
                  mua và xu hướng thị trường
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <select className="px-3 py-2 border border-gray-300 rounded text-sm">
                    <option>30 ngày qua</option>
                    <option>7 ngày qua</option>
                    <option>90 ngày qua</option>
                    <option>Năm nay</option>
                    <option>Tất cả thời gian</option>
                  </select>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white text-sm rounded">
                    📊 Xuất báo cáo
                  </button>
                </div>
              </div>
            </div>

            {/* Key Performance Metrics */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">
                    Tổng đề nghị nhận được
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">284</div>
                <div className="text-xs text-green-600">
                  📈 +18% so với tháng trước
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Giá trị trung bình: ₫280M
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm text-gray-600">Tỷ lệ chấp nhận</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">73%</div>
                <div className="text-xs text-blue-600">📊 Cải thiện +5%</div>
                <div className="text-xs text-gray-500 mt-1">
                  207 đề nghị được chấp nhận
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-orange-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm text-gray-600">
                    Tổng giá trị đề nghị
                  </div>
                </div>
                <div className="text-2xl font-bold text-orange-600">₫79.5B</div>
                <div className="text-xs text-orange-600">💰 Tăng +22%</div>
                <div className="text-xs text-gray-500 mt-1">
                  ₫58.1B đã được chấp nhận
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-purple-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    20
                  </div>
                  <div className="text-sm text-gray-600">
                    Thời gian phản hồi trung bình
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  2.8 ngày
                </div>
                <div className="text-xs text-purple-600">
                  ⚡ Nhanh hơn 0.5 ngày
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Trung bình ngành: 4.2 ngày
                </div>
              </div>
            </div>

            {/* Offer Performance Trends */}
            <div className="bg-linear-to-r from-green-50 to-blue-50 border border-green-200 rounded p-4 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  21
                </div>
                <h3 className="font-semibold text-green-800">
                  📈 Xu hướng hiệu suất đề nghị (12 tháng gần nhất)
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded border border-green-200">
                  <div className="text-sm text-gray-600 mb-2">
                    Số lượng đề nghị hàng tháng
                  </div>
                  <div className="flex items-end gap-1 h-24">
                    <div
                      className="bg-green-500 w-3"
                      style={{ height: "40%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-3"
                      style={{ height: "45%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-3"
                      style={{ height: "55%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-3"
                      style={{ height: "50%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-3"
                      style={{ height: "65%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-3"
                      style={{ height: "70%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-3"
                      style={{ height: "75%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-3"
                      style={{ height: "85%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-3"
                      style={{ height: "90%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-3"
                      style={{ height: "95%" }}
                    ></div>
                    <div
                      className="bg-green-500 w-3"
                      style={{ height: "100%" }}
                    ></div>
                    <div
                      className="bg-green-400 w-3"
                      style={{ height: "85%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Đỉnh: Tháng 11 (45 đề nghị)
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <div className="text-sm text-gray-600 mb-2">
                    Xu hướng tỷ lệ chấp nhận
                  </div>
                  <div className="flex items-end gap-1 h-24">
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "60%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "65%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "62%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "68%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "70%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "72%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "71%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "74%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "76%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "75%" }}
                    ></div>
                    <div
                      className="bg-blue-500 w-3"
                      style={{ height: "78%" }}
                    ></div>
                    <div
                      className="bg-blue-400 w-3"
                      style={{ height: "73%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Tốt nhất: Tháng 11 (78%)
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <div className="text-sm text-gray-600 mb-2">
                    Giá trị đề nghị trung bình
                  </div>
                  <div className="flex items-end gap-1 h-24">
                    <div
                      className="bg-orange-500 w-3"
                      style={{ height: "70%" }}
                    ></div>
                    <div
                      className="bg-orange-500 w-3"
                      style={{ height: "75%" }}
                    ></div>
                    <div
                      className="bg-orange-500 w-3"
                      style={{ height: "80%" }}
                    ></div>
                    <div
                      className="bg-orange-500 w-3"
                      style={{ height: "78%" }}
                    ></div>
                    <div
                      className="bg-orange-500 w-3"
                      style={{ height: "85%" }}
                    ></div>
                    <div
                      className="bg-orange-500 w-3"
                      style={{ height: "88%" }}
                    ></div>
                    <div
                      className="bg-orange-500 w-3"
                      style={{ height: "92%" }}
                    ></div>
                    <div
                      className="bg-orange-500 w-3"
                      style={{ height: "95%" }}
                    ></div>
                    <div
                      className="bg-orange-500 w-3"
                      style={{ height: "98%" }}
                    ></div>
                    <div
                      className="bg-orange-500 w-3"
                      style={{ height: "100%" }}
                    ></div>
                    <div
                      className="bg-orange-500 w-3"
                      style={{ height: "96%" }}
                    ></div>
                    <div
                      className="bg-orange-400 w-3"
                      style={{ height: "90%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Đỉnh: ₫320M (Tháng 10)
                  </div>
                </div>
              </div>
            </div>

            {/* Buyer Behavior Analysis */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    22
                  </div>
                  <h3 className="font-semibold">
                    👥 Phân tích người mua hàng đầu
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <div>
                      <div className="font-medium text-sm">
                        NXB Tổng Hợp TP.HCM
                      </div>
                      <div className="text-xs text-gray-600">
                        🏢 Nhà xuất bản Việt Nam
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">₫12.5B</div>
                      <div className="text-xs text-gray-600">28 đề nghị</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                    <div>
                      <div className="font-medium text-sm">Fahasa Books</div>
                      <div className="text-xs text-gray-600">
                        📚 Chuỗi bán lẻ
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">₫8.9B</div>
                      <div className="text-xs text-gray-600">19 đề nghị</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                    <div>
                      <div className="font-medium text-sm">Alpha Books</div>
                      <div className="text-xs text-gray-600">📖 Giáo dục</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-orange-600">₫7.2B</div>
                      <div className="text-xs text-gray-600">15 đề nghị</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                    <div>
                      <div className="font-medium text-sm">Tech Books VN</div>
                      <div className="text-xs text-gray-600">💻 Công nghệ</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600">₫6.1B</div>
                      <div className="text-xs text-gray-600">12 đề nghị</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium text-sm">
                        University Press
                      </div>
                      <div className="text-xs text-gray-600">🎓 Học thuật</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-600">₫4.8B</div>
                      <div className="text-xs text-gray-600">9 đề nghị</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  📊 Tập trung người mua: Top 5 người mua chiếm 67% tổng giá trị
                  đề nghị
                </div>
              </div>

              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    23
                  </div>
                  <h3 className="font-semibold">
                    📚 Hiệu suất theo danh mục sách
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                    <div>
                      <div className="font-medium text-sm">
                        📖 Kinh doanh & Kinh tế
                      </div>
                      <div className="text-xs text-gray-600">
                        Tự lực, tài chính, quản trị
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">₫24.8B</div>
                      <div className="text-xs text-gray-600">
                        68 đề nghị • 31%
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <div>
                      <div className="font-medium text-sm">
                        🧠 Tâm lý & Phát triển bản thân
                      </div>
                      <div className="text-xs text-gray-600">
                        Phát triển bản thân, sức khỏe tinh thần
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">₫18.2B</div>
                      <div className="text-xs text-gray-600">
                        52 đề nghị • 23%
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                    <div>
                      <div className="font-medium text-sm">
                        💻 Công nghệ & Khoa học
                      </div>
                      <div className="text-xs text-gray-600">
                        Lập trình, AI, đổi mới
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-orange-600">₫15.1B</div>
                      <div className="text-xs text-gray-600">
                        38 đề nghị • 19%
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                    <div>
                      <div className="font-medium text-sm">
                        🎓 Giáo dục & Học thuật
                      </div>
                      <div className="text-xs text-gray-600">
                        SGK, nghiên cứu, học tập
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600">₫12.7B</div>
                      <div className="text-xs text-gray-600">
                        34 đề nghị • 16%
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium text-sm">
                        🏛️ Lịch sử & Văn hóa
                      </div>
                      <div className="text-xs text-gray-600">
                        Hồi ký, ghi chép lịch sử
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-600">₫8.7B</div>
                      <div className="text-xs text-gray-600">
                        28 đề nghị • 11%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-600">
                  🎯 Các danh mục Kinh doanh & Tâm lý có tỷ lệ chấp nhận cao
                  nhất (78% và 76%)
                </div>
              </div>
            </div>

            {/* Market Intelligence */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    24
                  </div>
                  <div className="text-sm font-semibold text-blue-800">
                    📊 Xu hướng thị trường
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-blue-200">
                    <div className="font-medium">🔥 Thể loại nhu cầu cao</div>
                    <div className="text-xs text-gray-600">
                      AI & Học máy: +45% đề nghị
                    </div>
                    <div className="text-xs text-blue-600">
                      Giá trị đề nghị trung bình: ₫420M
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-blue-200">
                    <div className="font-medium">📈 Thị trường tăng trưởng</div>
                    <div className="text-xs text-gray-600">
                      Kinh doanh bền vững: +38% tăng trưởng
                    </div>
                    <div className="text-xs text-green-600">
                      Xuất hiện phân khúc người mua mới
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-blue-200">
                    <div className="font-medium">🌍 Mở rộng địa lý</div>
                    <div className="text-xs text-gray-600">
                      Quan tâm Đông Nam Á: +25%
                    </div>
                    <div className="text-xs text-purple-600">
                      Cơ hội quốc tế
                    </div>
                  </div>
                  <button className="w-full px-3 py-1 bg-blue-600 text-white text-xs rounded">
                    📈 Báo cáo thị trường
                  </button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    25
                  </div>
                  <div className="text-sm font-semibold text-green-800">
                    💡 Khuyến nghị thông minh
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="font-medium">💰 Tối ưu giá</div>
                    <div className="text-xs text-gray-600">
                      Sách Tâm lý: Xem xét tăng giá +15%
                    </div>
                    <div className="text-xs text-green-600">
                      Thị trường có thể hỗ trợ mức giá cao hơn
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="font-medium">🎯 Nhắm đến người mua mới</div>
                    <div className="text-xs text-gray-600">
                      3 nhà xuất bản giáo dục có quan tâm
                    </div>
                    <div className="text-xs text-blue-600">
                      Khuyến nghị tiếp cận chủ động
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded border border-green-200">
                    <div className="font-medium">📅 Chiến lược thời điểm</div>
                    <div className="text-xs text-gray-600">
                      Q4 có giá trị đề nghị cao hơn 30%
                    </div>
                    <div className="text-xs text-orange-600">
                      Lên kế hoạch phát hành vào mùa cao điểm
                    </div>
                  </div>
                  <button className="w-full px-3 py-1 bg-green-600 text-white text-xs rounded">
                    🤖 Thông tin AI
                  </button>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    26
                  </div>
                  <div className="text-sm font-semibold text-orange-800">
                    ⚡ Hành động nhanh
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <button className="w-full px-3 py-2 bg-white border border-orange-200 rounded text-left">
                    <div className="font-medium">📊 Tạo báo cáo hàng quý</div>
                    <div className="text-xs text-gray-600">
                      Phân tích hiệu suất toàn diện
                    </div>
                  </button>
                  <button className="w-full px-3 py-2 bg-white border border-orange-200 rounded text-left">
                    <div className="font-medium">
                      📧 Liên hệ người mua hàng đầu
                    </div>
                    <div className="text-xs text-gray-600">
                      Theo dõi các đề nghị đang chờ
                    </div>
                  </button>
                  <button className="w-full px-3 py-2 bg-white border border-orange-200 rounded text-left">
                    <div className="font-medium">🎯 Đặt cảnh báo giá</div>
                    <div className="text-xs text-gray-600">
                      Giám sát thay đổi tỷ lệ thị trường
                    </div>
                  </button>
                  <button className="w-full px-3 py-2 bg-white border border-orange-200 rounded text-left">
                    <div className="font-medium">📈 Xuất dữ liệu phân tích</div>
                    <div className="text-xs text-gray-600">
                      Tải dữ liệu chi tiết
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Detailed Offer Analysis Table */}
            <div className="border border-gray-300 rounded">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      27
                    </div>
                    <h3 className="font-semibold">
                      Phân tích hiệu suất đề nghị gần đây
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Tất cả sách</option>
                      <option>Sách Kinh doanh</option>
                      <option>Sách Tâm lý</option>
                      <option>Sách Công nghệ</option>
                      <option>Sách Giáo dục</option>
                    </select>
                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                      <option>Sắp xếp: Giá trị đề nghị</option>
                      <option>Sắp xếp: Thời gian phản hồi</option>
                      <option>Sắp xếp: Tỷ lệ chấp nhận</option>
                      <option>Sắp xếp: Ngày nhận</option>
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
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            28
                          </div>
                          <div>Sách & Danh mục</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Đề nghị nhận</th>
                      <th className="text-left p-3">Tỷ lệ chấp nhận</th>
                      <th className="text-left p-3">Giá trị đề nghị TB</th>
                      <th className="text-left p-3">Tổng doanh thu</th>
                      <th className="text-left p-3">Vị thế thị trường</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-green-50">
                      <td className="p-3">
                        <div>
                          <div className="font-medium">📚 Đắc Nhân Tâm</div>
                          <div className="text-sm text-gray-600">
                            🧠 Tâm lý & Phát triển bản thân
                          </div>
                          <div className="text-xs text-green-600">
                            ⭐ Người dẫn đầu
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold text-green-600">
                          28
                        </div>
                        <div className="text-xs text-gray-600">
                          +40% so với trung bình
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold text-green-600">
                          89%
                        </div>
                        <div className="text-xs text-green-600">
                          Tỷ lệ xuất sắc
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold">₫445M</div>
                        <div className="text-xs text-green-600">
                          +58% cao hơn
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold text-green-600">
                          ₫11.1B
                        </div>
                        <div className="text-xs text-gray-600">
                          25 đề nghị được chấp nhận
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          🏆 Dẫn đầu thị trường
                        </span>
                        <div className="text-xs text-green-600 mt-1">
                          Giá cao cấp
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3">
                        <div>
                          <div className="font-medium">
                            📖 Tư duy Nhanh và Chậm
                          </div>
                          <div className="text-sm text-gray-600">
                            🧠 Tâm lý & Ra quyết định
                          </div>
                          <div className="text-xs text-blue-600">
                            🔥 Nhu cầu cao
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold text-blue-600">
                          22
                        </div>
                        <div className="text-xs text-gray-600">
                          +25% so với trung bình
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold text-blue-600">
                          82%
                        </div>
                        <div className="text-xs text-blue-600">
                          Hiệu suất mạnh
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold">₫380M</div>
                        <div className="text-xs text-blue-600">
                          +35% cao hơn
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold text-blue-600">
                          ₦6.8B
                        </div>
                        <div className="text-xs text-gray-600">
                          18 đề nghị được chấp nhận
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          ⭐ Hiệu suất cao
                        </span>
                        <div className="text-xs text-blue-600 mt-1">
                          Nhu cầu tăng
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3">
                        <div>
                          <div className="font-medium">💻 Lập trình sạch</div>
                          <div className="text-sm text-gray-600">
                            💻 Công nghệ & Lập trình
                          </div>
                          <div className="text-xs text-orange-600">
                            📈 Xu hướng công nghệ
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold">19</div>
                        <div className="text-xs text-gray-600">
                          +8% so với trung bình
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold">74%</div>
                        <div className="text-xs text-gray-600">Tỷ lệ tốt</div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold">₫320M</div>
                        <div className="text-xs text-orange-600">
                          +14% cao hơn
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold">₫4.5B</div>
                        <div className="text-xs text-gray-600">
                          14 đề nghị được chấp nhận
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          📊 Hiệu suất ổn định
                        </span>
                        <div className="text-xs text-orange-600 mt-1">
                          Ngách công nghệ
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3">
                        <div>
                          <div className="font-medium">
                            📈 Chiến lược Kinh doanh 2024
                          </div>
                          <div className="text-sm text-gray-600">
                            📊 Kinh doanh & Quản lý
                          </div>
                          <div className="text-xs text-purple-600">
                            🆕 Phát hành mới
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold">15</div>
                        <div className="text-xs text-gray-600">
                          -5% so với trung bình
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold">67%</div>
                        <div className="text-xs text-gray-600">
                          Tỷ lệ trung bình
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold">₫290M</div>
                        <div className="text-xs text-gray-600">
                          Giá thị trường
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-lg font-bold">₫2.9B</div>
                        <div className="text-xs text-gray-600">
                          10 đề nghị được chấp nhận
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                          📊 Đang phát triển
                        </span>
                        <div className="text-xs text-purple-600 mt-1">
                          Tiềm năng tăng trưởng
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annotation */}
      <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded">
        <h3 className="font-bold text-green-800 mb-4">
          📝 WF43 - GHI CHÚ PHÂN TÍCH ĐỀ NGHỊ CHO NGƯỜI BÁN
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-green-600">
              📊 Phân tích nâng cao
            </div>
            <div className="text-gray-700">
              <strong>❶-❸ Header:</strong> Cổng người bán tập trung vào phân
              tích
              <br />
              <strong>❹-⓭ Sidebar:</strong> Menu phụ phân tích với điều hướng
              thông tin chi tiết
              <br />
              <strong>⓮-⓰ Page Controls:</strong> Lựa chọn khoảng thời gian và
              chức năng xuất báo cáo
              <br />
              <strong>⓱-⓴ Key Metrics:</strong> Chỉ số hiệu suất cốt lõi và xu
              hướng
              <br />
              <strong>㉑ Performance Trends:</strong> Minh họa 12 tháng với số
              lượng, tỷ lệ và giá trị
            </div>
          </div>
          <div>
            <div className="font-bold text-green-600">
              🎯 Tính năng thông minh
            </div>
            <div className="text-gray-700">
              <strong>㉒-㉓ Behavior Analysis:</strong> Thông tin người mua hàng
              đầu và hiệu suất theo danh mục
              <br />
              <strong>㉔-㉖ Market Intelligence:</strong> Xu hướng, khuyến nghị
              và hành động nhanh
              <br />
              <strong>㉗-㉘ Detailed Analysis:</strong> Theo dõi hiệu suất theo
              từng đầu sách và so sánh
              <br />
              <strong>Predictive Analytics:</strong> Nhận diện xu hướng và cơ
              hội thị trường
              <br />
              <strong>Competitive Intelligence:</strong> Vị trí danh mục và tối
              ưu giá
              <br />
              <strong>AI-Powered Insights:</strong> Khuyến nghị thông minh và
              thông tin thị trường
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
