import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/system/delivery-download")({
  component: DeliveryDownloadWireframe,
});

export default function DeliveryDownloadWireframe() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-green-600">
        WF28 - HỆ THỐNG GIAO HÀNG & TẢI VỀ
      </h1>

      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-green-50 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div className="text-sm font-semibold">🏢 Copyright Hub</div>
            </div>
            <div className="px-3 py-1 bg-green-100 border border-green-300 rounded-full text-xs font-bold text-green-700">
              TẢI VỀ CỦA TÔI
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <span className="text-xs">Buyer: Nguyễn Văn B</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <button className="text-xs text-blue-600 underline">
                ← Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Download Statistics */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              4
            </div>
            <h2 className="text-lg font-bold">📊 Tổng quan tải về</h2>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded border shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <div className="text-xs text-gray-600">ĐÃ MUA TỔNG CỘNG</div>
              </div>
              <div className="text-2xl font-bold text-blue-600">47</div>
              <div className="text-xs text-green-600">+3 tháng này</div>
            </div>

            <div className="bg-white p-4 rounded border shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <div className="text-xs text-gray-600">ĐÃ TẢI VỀ</div>
              </div>
              <div className="text-2xl font-bold text-green-600">42</div>
              <div className="text-xs text-gray-600">89% hoàn thành</div>
            </div>

            <div className="bg-white p-4 rounded border shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <div className="text-xs text-gray-600">CHỜ XỬ LÝ</div>
              </div>
              <div className="text-2xl font-bold text-orange-600">5</div>
              <div className="text-xs text-orange-600">Cần thao tác</div>
            </div>

            <div className="bg-white p-4 rounded border shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <div className="text-xs text-gray-600">TỔNG CHI PHÍ</div>
              </div>
              <div className="text-2xl font-bold text-purple-600">$847</div>
              <div className="text-xs text-purple-600">Năm nay</div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                9
              </div>
              <h3 className="font-bold">Thư viện số của tôi (47 mục)</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  10
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">
                  📦 Tải hàng loạt
                </button>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  11
                </div>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm">
                  📋 Xuất danh sách
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                12
              </div>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Tất cả danh mục</option>
                <option>Nghệ thuật số</option>
                <option>Nhạc/Âm thanh</option>
                <option>Nhiếp ảnh</option>
                <option>Template</option>
                <option>Video/Animation</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                13
              </div>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Tất cả trạng thái</option>
                <option>Đã tải về</option>
                <option>Chờ tải về</option>
                <option>Hết hạn truy cập</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                14
              </div>
              <input
                className="border border-gray-300 rounded px-3 py-1 text-sm w-64"
                placeholder="Tìm kiếm thư viện của bạn..."
                type="text"
              />
            </div>
          </div>
        </div>

        {/* Download Items List */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Download Item 1 - Ready */}
            <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  15
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded border flex items-center justify-center">
                  <span className="text-xs">🎨 IMG</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-lg">
                        Gói Template Photoshop Premium
                      </h4>
                      <div className="text-sm text-gray-600">
                        bởi DesignMaster Pro
                      </div>
                      <div className="text-xs text-gray-500">
                        Mua: 15/01/2024 • Đơn hàng #ORD-12345
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-2">
                        ✅ Sẵn sàng
                      </div>
                      <div className="text-sm font-bold text-green-600">
                        $29.99
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-3">
                    <div className="text-xs">
                      <div className="text-gray-500">Danh mục:</div>
                      <div className="font-semibold">Template</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Kích thước file:</div>
                      <div className="font-semibold">145.8 MB</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Định dạng:</div>
                      <div className="font-semibold">Gói ZIP</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Truy cập đến:</div>
                      <div className="font-semibold text-green-600">
                        Vĩnh viễn
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        16
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700">
                        ⬇️ Tải ngay
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        17
                      </div>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50">
                        👁️ Xem trước
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        18
                      </div>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50">
                        📄 Hóa đơn
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        19
                      </div>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50">
                        ⭐ Đánh giá & Nhận xét
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Item 2 - Processing */}
            <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  20
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded border flex items-center justify-center">
                  <span className="text-xs">🎵 MP3</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-lg">
                        Bộ sưu tập Beat Lo-Fi Hip Hop
                      </h4>
                      <div className="text-sm text-gray-600">
                        bởi BeatMaker Studios
                      </div>
                      <div className="text-xs text-gray-500">
                        Mua: 20/01/2024 • Đơn hàng #ORD-12350
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full mb-2">
                        ⏳ Đang xử lý
                      </div>
                      <div className="text-sm font-bold text-green-600">
                        $45.00
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-3">
                    <div className="text-xs">
                      <div className="text-gray-500">Danh mục:</div>
                      <div className="font-semibold">Nhạc/Âm thanh</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Kích thước file:</div>
                      <div className="font-semibold">567.2 MB</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Định dạng:</div>
                      <div className="font-semibold">MP3/WAV</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Thời gian dự kiến:</div>
                      <div className="font-semibold text-orange-600">
                        ~15 phút
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        21
                      </div>
                      <span className="text-sm">
                        Đang xử lý file để tải về...
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Đang xử lý 13/20 bản nhạc (65%)
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      className="bg-gray-400 text-white px-6 py-2 rounded font-semibold cursor-not-allowed"
                      disabled
                    >
                      ⏳ Đang xử lý...
                    </button>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        22
                      </div>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50">
                        📧 Thông báo khi sẵn sàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Item 3 - Downloaded */}
            <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  23
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded border flex items-center justify-center">
                  <span className="text-xs">📸 JPG</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-lg">
                        Bộ ảnh Thiên nhiên
                      </h4>
                      <div className="text-sm text-gray-600">
                        bởi PhotoArt Pro
                      </div>
                      <div className="text-xs text-gray-500">
                        Mua: 10/01/2024 • Đơn hàng #ORD-12340
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-2">
                        ✓ Đã tải về
                      </div>
                      <div className="text-sm font-bold text-green-600">
                        $89.99
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-3">
                    <div className="text-xs">
                      <div className="text-gray-500">Danh mục:</div>
                      <div className="font-semibold">Nhiếp ảnh</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Đã tải về:</div>
                      <div className="font-semibold">12/01/2024</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Số lần:</div>
                      <div className="font-semibold">3 lần tải</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Truy cập:</div>
                      <div className="font-semibold text-blue-600">
                        Còn 365 ngày
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        24
                      </div>
                      <button className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700">
                        ⬇️ Tải lại
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        25
                      </div>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50">
                        📂 Lịch sử file
                      </button>
                    </div>
                    <div className="text-xs text-gray-500">
                      Tải lần cuối: 15/01/2024 14:30
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Item 4 - Expired */}
            <div className="bg-white border border-red-300 rounded-lg p-4 opacity-75">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  26
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded border flex items-center justify-center">
                  <span className="text-xs">🎬 MP4</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-lg">
                        Gói Motion Graphics
                      </h4>
                      <div className="text-sm text-gray-600">
                        bởi AnimationPro
                      </div>
                      <div className="text-xs text-gray-500">
                        Mua: 05/12/2023 • Đơn hàng #ORD-11980
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full mb-2">
                        ❌ Hết hạn
                      </div>
                      <div className="text-sm font-bold text-green-600">
                        $75.00
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-3">
                    <div className="text-xs">
                      <div className="text-gray-500">Danh mục:</div>
                      <div className="font-semibold">Video/Animation</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Hết hạn:</div>
                      <div className="font-semibold text-red-600">
                        05/01/2024
                      </div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Đã tải/Tổng:</div>
                      <div className="font-semibold">0/5</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-500">Trạng thái:</div>
                      <div className="font-semibold text-red-600">
                        Mất quyền truy cập
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        27
                      </div>
                      <button className="bg-orange-600 text-white px-6 py-2 rounded font-semibold hover:bg-orange-700">
                        🔄 Gia hạn truy cập
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        28
                      </div>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50">
                        💬 Liên hệ hỗ trợ
                      </button>
                    </div>
                    <div className="text-xs text-red-500">
                      Hết hạn truy cập 16 ngày trước
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Hiển thị 1-4 trong 47 mục
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                29
              </div>
              <button className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50">
                ← Trước
              </button>
              <span className="px-3 py-2 bg-blue-600 text-white rounded">
                1
              </span>
              <button className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50">
                2
              </button>
              <button className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50">
                3
              </button>
              <button className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50">
                Tiếp →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-green-50 border-2 border-green-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-green-800">
          CHÚ THÍCH CHI TIẾT
        </h2>

        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border-l-4 border-green-500">
            <div className="font-bold text-green-600 mb-1">
              ❶❷❸ Header & Navigation
            </div>
            <div className="text-gray-700">
              <strong>❶ Branding:</strong> Download management section indicator
              <br />
              <strong>❂ User Context:</strong> Show buyer name và role
              <br />
              <strong>❸ Navigation:</strong> Return to buyer dashboard
              <br />
              <strong>Access Control:</strong> Only show purchased items for
              this user
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-green-500">
            <div className="font-bold text-green-600 mb-1">
              ❺❻❼❽ Download Statistics
            </div>
            <div className="text-gray-700">
              <strong>❺ Tổng đã mua:</strong> Tất cả mục người dùng đã mua
              <br />
              <strong>❻ Đã tải về:</strong> Mục đã tải thành công
              <br />
              <strong>❼ Chờ xử lý:</strong> Mục đang chờ xử lý hoặc hành động từ
              người dùng
              <br />
              <strong>❽ Tổng chi phí:</strong> Giá trị mua hàng tích lũy
              <br />
              <strong>Dữ liệu thời gian thực:</strong> Tự động cập nhật khi
              trạng thái thay đổi
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-green-500">
            <div className="font-bold text-green-600 mb-1">
              ❾❿⓫ Quản lý thư viện
            </div>
            <div className="text-gray-700">
              <strong>❾ Tổng quan thư viện:</strong> Tổng số mục trong bộ sưu
              tập của người dùng
              <br />
              <strong>❿ Tải hàng loạt:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Chọn nhiều mục để tải về theo lô</li>
                <li>Tạo gói ZIP của các file đã chọn</li>
                <li>Theo dõi tiến trình tải về</li>
              </ul>
              <strong>⓫ Xuất danh sách:</strong> Xuất lịch sử mua hàng sang
              CSV/PDF
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-green-500">
            <div className="font-bold text-green-600 mb-1">
              ⓬⓭⓮ Lọc & Tìm kiếm
            </div>
            <div className="text-gray-700">
              <strong>⓬ Lọc danh mục:</strong> Lọc theo loại sản phẩm
              <br />
              <strong>⓭ Lọc trạng thái:</strong> Lọc theo trạng thái tải về
              <br />
              <strong>⓮ Tìm kiếm:</strong> Tìm mục cụ thể trong thư viện
              <br />
              <strong>Lọc lưu trữ:</strong> Ghi nhớ tùy chọn người dùng
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-green-500">
            <div className="font-bold text-green-600 mb-1">
              ⓯⓰⓱⓲⓳ Hành động mục sẵn sàng
            </div>
            <div className="text-gray-700">
              <strong>⓯ Thông tin mục:</strong> Chi tiết sản phẩm đầy đủ với
              thông tin mua hàng
              <br />
              <strong>⓰ Tải ngay:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Tải file ngay lập tức</li>
                <li>Theo dõi tiến trình</li>
                <li>Khả năng tiếp tục tải</li>
                <li>Quét virus trước khi tải</li>
              </ul>
              <strong>⓱ Xem trước:</strong> Xem nhanh nội dung file
              <br />
              <strong>⓲ Hóa đơn:</strong> Hóa đơn điện tử với chi tiết mua hàng
              <br />
              <strong>⓳ Đánh giá & Nhận xét:</strong> Để lại phản hồi cho người
              bán
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-green-500">
            <div className="font-bold text-green-600 mb-1">
              ⓴㉑㉒ Trạng thái đang xử lý
            </div>
            <div className="text-gray-700">
              <strong>⓴ Trạng thái xử lý:</strong> Hiển thị trạng thái xử lý
              hiện tại
              <br />
              <strong>㉑ Thanh tiến trình:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Cập nhật tiến trình thời gian thực</li>
                <li>Tính toán thời gian dự kiến</li>
                <li>Chi tiết các bước xử lý</li>
              </ul>
              <strong>㉒ Tùy chọn thông báo:</strong> Thông báo email khi sẵn
              sàng
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-green-500">
            <div className="font-bold text-green-600 mb-1">
              ㉓㉔㉕ Mục đã tải về
            </div>
            <div className="text-gray-700">
              <strong>㉓ Lịch sử tải về:</strong> Hiển thị thời gian tải và số
              lần tải
              <br />
              <strong>㉔ Tải lại:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Cho phép tải nhiều lần trong giới hạn license</li>
                <li>Theo dõi số lần tải</li>
                <li>Tạo file mới</li>
              </ul>
              <strong>㉕ File History:</strong> Show all download attempts và
              timestamps
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-green-500">
            <div className="font-bold text-green-600 mb-1">
              ㉖㉗㉘ Hết hạn truy cập
            </div>
            <div className="text-gray-700">
              <strong>㉖ Trạng thái hết hạn:</strong> Chỉ báo rõ ràng về việc
              hết hạn truy cập
              <br />
              <strong>㉗ Gia hạn truy cập:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Mua thêm thời gian tải về</li>
                <li>Giá dựa trên giao dịch mua ban đầu</li>
                <li>Khôi phục quyền truy cập đầy đủ</li>
              </ul>
              <strong>㉘ Liên hệ hỗ trợ:</strong> Hỗ trợ các vấn đề về truy cập
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-green-500">
            <div className="font-bold text-green-600 mb-1">㉙ Phân trang</div>
            <div className="text-gray-700">
              <strong>Điều hướng trang:</strong> Duyệt qua thư viện lớn
              <br />
              <strong>Số mục mỗi trang:</strong> Số lượng hiển thị có thể cấu
              hình
              <br />
              <strong>Tìm kiếm trong kết quả:</strong> Duy trì ngữ cảnh tìm kiếm
              qua các trang
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            🔄 QUY TRÌNH TẢI VỀ
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              <strong>Mua hàng hoàn tất:</strong> Mục được thêm vào thư viện
              người dùng
            </li>
            <li>
              <strong>Xử lý file:</strong> Chuẩn bị file để giao hàng (xóa
              watermark, đóng gói)
            </li>
            <li>
              <strong>Trạng thái sẵn sàng:</strong> Mục có sẵn để tải với quyền
              truy cập đầy đủ
            </li>
            <li>
              <strong>Hành động tải về:</strong> Người dùng bắt đầu tải → Tạo
              URL tải an toàn
            </li>
            <li>
              <strong>Theo dõi tiến trình:</strong> Giám sát tiến trình tải với
              khả năng tiếp tục
            </li>
            <li>
              <strong>Ghi log truy cập:</strong> Theo dõi tất cả lần thử tải về
              cho bảo mật
            </li>
            <li>
              <strong>Thực thi license:</strong> Giám sát sử dụng trong phạm vi
              điều khoản license
            </li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">
          <div className="font-bold text-blue-800 mb-2">
            🔐 BẢO MẬT & KIỂM SOÁT TRUY CẬP
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>URL an toàn:</strong> URL tải có thời hạn và đã ký
            </li>
            <li>
              <strong>Xác minh truy cập:</strong> Xác minh giao dịch mua trước
              mỗi lần tải
            </li>
            <li>
              <strong>Giới hạn tải về:</strong> Thực thi hạn chế tải dựa trên
              license
            </li>
            <li>
              <strong>Theo dõi IP:</strong> Giám sát vị trí tải về cho bảo mật
            </li>
            <li>
              <strong>Quét virus:</strong> Tất cả file được quét trước khi giao
              hàng
            </li>
            <li>
              <strong>Xóa watermark:</strong> Xóa watermark xem trước cho các
              mục đã mua
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            📊 METRICS GIAO HÀNG
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Thời gian xử lý:</strong> Theo dõi thời gian chuẩn bị file
            </li>
            <li>
              <strong>Tỷ lệ thành công tải về:</strong> Giám sát tỷ lệ hoàn
              thành
            </li>
            <li>
              <strong>Hài lòng người dùng:</strong> Theo dõi tần suất tải lại
            </li>
            <li>
              <strong>Chi phí lưu trữ:</strong> Giám sát lưu trữ file và sử dụng
              băng thông
            </li>
            <li>
              <strong>Tuân thủ license:</strong> Đảm bảo tải về trong giới hạn
              cho phép
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
