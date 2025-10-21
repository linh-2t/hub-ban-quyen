import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute(
  "/wireframes/admin/admin-product-moderation",
)({
  component: AdminProductModerationWireframe,
});

export default function AdminProductModerationWireframe() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-red-600">
        WF26 - DUYỆT SẢN PHẨM QUẢN TRỊ
      </h1>

      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-red-50 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div className="text-sm font-semibold">
                🏢 Copyright Hub - QUẢN TRỊ
              </div>
            </div>
            <div className="px-3 py-1 bg-red-100 border border-red-300 rounded-full text-xs font-bold text-red-700">
              DUYỆT SẢN PHẨM
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <span className="text-xs">Admin: Nguyễn Văn A</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <button className="text-xs text-blue-600 underline" type="button">
                ← Quay lại Bảng điều khiển
              </button>
            </div>
          </div>
        </div>

        {/* Filters & Stats */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
              <h2 className="text-lg font-bold">📦 Hàng đợi duyệt sản phẩm</h2>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <span className="bg-yellow-100 px-2 py-1 rounded">
                  Đang chờ: 234
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <span className="bg-green-100 px-2 py-1 rounded">
                  Đã duyệt: 45
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  7
                </div>
                <span className="bg-red-100 px-2 py-1 rounded">
                  Bị từ chối: 12
                </span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                8
              </div>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Tất cả danh mục</option>
                <option>Nghệ thuật số</option>
                <option>Âm nhạc/Âm thanh</option>
                <option>Nhiếp ảnh</option>
                <option>Video/Hoạt hình</option>
                <option>Mẫu</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                9
              </div>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Mới nhất</option>
                <option>Cũ nhất</option>
                <option>Giá cao</option>
                <option>Giá thấp</option>
                <option>Có báo cáo</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                10
              </div>
              <input
                className="border border-gray-300 rounded px-3 py-1 text-sm w-64"
                placeholder="Tìm theo tên sản phẩm, người bán..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                11
              </div>
              <button
                className="bg-blue-600 text-white px-4 py-1 rounded text-sm"
                type="button"
              >
                🔍 Tìm
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Product List */}
          <div className="w-1/2 border-r-2 border-gray-800">
            <div className="p-4 bg-gray-100 border-b border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  12
                </div>
                <h3 className="font-bold">Danh Sách Sản Phẩm (234)</h3>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {/* Product Item 1 */}
              <div className="p-4 border-b border-gray-200 hover:bg-yellow-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <div className="w-16 h-16 bg-gray-200 rounded border">
                    <div className="w-full h-full flex items-center justify-center text-xs">
                      🎨 IMG
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">
                          Gói mẫu Adobe Photoshop
                        </div>
                        <div className="text-sm text-gray-600">
                          bởi DesignMaster
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: PRD-78945
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">$29.99</div>
                        <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                          Đang chờ
                        </div>
                        <div className="text-xs text-red-600 mt-1">
                          ⚠️ 3 báo cáo
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700">
                      <div>📁 Danh mục: Mẫu</div>
                      <div>📅 Gửi: 2 ngày trước</div>
                      <div>📊 Kích thước tệp: 45.2 MB</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Item 2 */}
              <div className="p-4 border-b border-gray-200 hover:bg-yellow-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="w-16 h-16 bg-gray-200 rounded border">
                    <div className="w-full h-full flex items-center justify-center text-xs">
                      🎵 MP3
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">Bộ nhạc Chill Lo-Fi</div>
                        <div className="text-sm text-gray-600">
                          bởi MusicPro
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: PRD-78946
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">$15.00</div>
                        <div className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          Đang được xem xét
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          1 giờ trước
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700">
                      <div>📁 Danh mục: Âm nhạc/Âm thanh</div>
                      <div>📅 Gửi: 6 giờ trước</div>
                      <div>📊 Kích thước tệp: 128.5 MB</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Item 3 */}
              <div className="p-4 border-b border-gray-200 hover:bg-yellow-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <div className="w-16 h-16 bg-gray-200 rounded border">
                    <div className="w-full h-full flex items-center justify-center text-xs">
                      📸 JPG
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">Bộ ảnh Thiên nhiên</div>
                        <div className="text-sm text-gray-600">
                          bởi PhotoArt
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: PRD-78947
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">$49.99</div>
                        <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                          Đang chờ
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          30 phút trước
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700">
                      <div>📁 Danh mục: Nhiếp ảnh</div>
                      <div>📅 Gửi: 30 phút trước</div>
                      <div>📊 Kích thước tệp: 567.8 MB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Detail Panel */}
          <div className="w-1/2 p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                16
              </div>
              <h3 className="text-lg font-bold">
                Chi Tiết Sản Phẩm - Gói mẫu Adobe Photoshop
              </h3>
            </div>

            {/* Product Info */}
            <div className="bg-gray-50 p-4 rounded mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  17
                </div>
                <h4 className="font-semibold">Thông Tin Sản Phẩm</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tên sản phẩm:</span>
                  <span className="font-semibold">Gói mẫu Adobe Photoshop</span>
                </div>
                <div className="flex justify-between">
                  <span>Người bán:</span>
                  <span>DesignMaster (Đã xác minh)</span>
                </div>
                <div className="flex justify-between">
                  <span>Danh mục:</span>
                  <span>Mẫu</span>
                </div>
                <div className="flex justify-between">
                  <span>Giá:</span>
                  <span className="font-bold text-green-600">$29.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Gửi:</span>
                  <span>15/01/2024 14:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Kích thước tệp:</span>
                  <span>45.2 MB (ZIP)</span>
                </div>
              </div>
            </div>

            {/* Product Preview */}
            <div className="border border-gray-300 rounded p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  18
                </div>
                <h4 className="font-semibold">🖼️ Xem trước & Tệp</h4>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="border-2 border-dashed border-gray-300 p-4 text-center bg-gray-50">
                  <div className="bg-gray-200 h-24 rounded flex items-center justify-center">
                    <span className="text-xs">🖼️ Preview1.jpg</span>
                  </div>
                </div>
                <div className="border-2 border-dashed border-gray-300 p-4 text-center bg-gray-50">
                  <div className="bg-gray-200 h-24 rounded flex items-center justify-center"></div>
                  <span className="text-xs">🖼️ Preview2.jpg</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded p-3 bg-white">
                <div className="text-sm font-semibold mb-2">📦 Gói tệp:</div>
                <div className="space-y-1 text-xs">
                  <div>📄 templates.psd (15.2 MB)</div>
                  <div>📄 fonts.zip (5.8 MB)</div>
                  <div>📄 instructions.pdf (1.2 MB)</div>
                  <div>📄 mockups.psd (23.0 MB)</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border border-gray-300 rounded p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  19
                </div>
                <h4 className="font-semibold">📝 Mô tả</h4>
              </div>
              <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                <p>
                  Gói mẫu Adobe Photoshop chuyên nghiệp bao gồm 25 mẫu thiết kế
                  hiện đại cho bài thuyết trình doanh nghiệp, bài đăng mạng xã
                  hội và tài liệu marketing. Tất cả mẫu có thể tùy chỉnh hoàn
                  toàn và bao gồm smart object để chỉnh sửa dễ dàng.
                </p>
                <div className="mt-2">
                  <strong>Thẻ:</strong> photoshop, mẫu, doanh nghiệp, thiết kế,
                  marketing, mạng xã hội
                </div>
              </div>
            </div>

            {/* Reports/Issues */}
            <div className="border border-red-300 rounded p-4 mb-6 bg-red-50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  20
                </div>
                <h4 className="font-semibold text-red-800">⚠️ Báo cáo (3)</h4>
              </div>
              <div className="space-y-2">
                <div className="bg-white p-2 rounded border text-sm">
                  <div className="font-semibold text-red-700">
                    Vi phạm bản quyền
                  </div>
                  <div className="text-xs text-gray-600">
                    Báo cáo bởi: UserABC • 2 ngày trước
                  </div>
                  <div className="text-xs">
                    Khẳng định thiết kế này bị đánh cắp từ Dribbble
                  </div>
                </div>
                <div className="bg-white p-2 rounded border text-sm">
                  <div className="font-semibold text-red-700">
                    Chất lượng kém
                  </div>
                  <div className="text-xs text-gray-600">
                    Báo cáo bởi: UserXYZ • 1 ngày trước
                  </div>
                  <div className="text-xs">
                    Các mẫu không hoạt động như mô tả
                  </div>
                </div>
                <div className="bg-white p-2 rounded border text-sm">
                  <div className="font-semibold text-red-700">
                    Mô tả gây hiểu lầm
                  </div>
                  <div className="text-xs text-gray-600">
                    Báo cáo bởi: UserDEF • 6 giờ trước
                  </div>
                  <div className="text-xs">
                    Thiếu các tệp được đề cập trong mô tả
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Notes */}
            <div className="border border-gray-300 rounded p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  21
                </div>
                <h4 className="font-semibold">📝 Ghi chú quản trị</h4>
              </div>
              <textarea
                className="w-full border border-gray-300 rounded p-2 text-sm h-20"
                placeholder="Nhập ghi chú về quá trình review (quality, copyright, compliance)..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  22
                </div>
                <button
                  className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 flex-1"
                  type="button"
                >
                  ✅ Duyệt
                </button>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  23
                </div>
                <button
                  className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 flex-1"
                  type="button"
                >
                  ❌ Từ chối
                </button>
              </div>
            </div>

            <div className="mt-3 flex gap-3">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  24
                </div>
                <button
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50 flex-1"
                  type="button"
                >
                  📧 Yêu cầu chỉnh sửa
                </button>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  25
                </div>
                <button
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50 flex-1"
                  type="button"
                >
                  🏷️ Gắn cờ để xem xét
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-2 border-red-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-red-800">
          CHÚ THÍCH CHI TIẾT
        </h2>

        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">❶❷❸ Header Admin</div>
            <div className="text-gray-700">
              <strong>❶ Thương hiệu:</strong> Chỉ báo phần duyệt sản phẩm
              <br />
              <strong>❷ Thông tin Admin:</strong> Tên và vai trò admin hiện tại
              <br />
              <strong>❸ Điều hướng:</strong> Quay lại bảng điều khiển admin
              <br />
              <strong>Truy cập:</strong> Cần vai trò admin để truy cập
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ❺❆❼ Thống kê duyệt
            </div>
            <div className="text-gray-700">
              <strong>❺ Đang chờ:</strong> Số lượng sản phẩm chờ xem xét theo
              thời gian thực
              <br />
              <strong>❆ Đã duyệt:</strong> Sản phẩm đã duyệt hôm nay
              <br />
              <strong>❼ Bị từ chối:</strong> Sản phẩm bị từ chối hôm nay
              <br />
              <strong>Chỉ số hiệu suất:</strong> Theo dõi năng suất admin
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ❽❾❿⓫ Bộ lọc & Tìm kiếm
            </div>
            <div className="text-gray-700">
              <strong>❽ Bộ lọc danh mục:</strong> Lọc theo danh mục sản phẩm
              <br />
              <strong>❾ Tùy chọn sắp xếp:</strong> Sắp xếp theo ngày, giá, có
              báo cáo
              <br />
              <strong>❿ Tìm kiếm:</strong> Tìm theo tên sản phẩm hoặc người bán
              <br />
              <strong>⓫ Hành động tìm kiếm:</strong> Thực hiện tìm kiếm theo bộ
              lọc
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ⓬⓭⓮⓯ Danh sách sản phẩm
            </div>
            <div className="text-gray-700">
              <strong>⓬ Tiêu đề danh sách:</strong> Tổng số và hành động hàng
              loạt
              <br />
              <strong>⓭⓮⓯ Mục sản phẩm:</strong> Thông tin chính để đánh giá
              nhanh
              <ul className="list-disc ml-5 mt-1">
                <li>Ảnh thu nhỏ sản phẩm và tên</li>
                <li>Thông tin người bán và trạng thái xác minh</li>
                <li>Giá, danh mục, ngày gửi</li>
                <li>Số báo cáo và chỉ báo ưu tiên</li>
                <li>Kích thước tệp và thông tin định dạng</li>
              </ul>
              <strong>Nhấp vào:</strong> Chọn sản phẩm → Tải bảng chi tiết
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ⓰⓱ Tổng quan sản phẩm
            </div>
            <div className="text-gray-700">
              <strong>⓰ Tiêu đề chi tiết:</strong> Tên sản phẩm đã chọn
              <br />
              <strong>⓱ Thông tin sản phẩm:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Toàn bộ siêu dữ liệu sản phẩm</li>
                <li>Trạng thái xác minh người bán</li>
                <li>Dấu thời gian gửi</li>
                <li>Thông số tệp</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ⓲⓳ Đánh giá nội dung
            </div>
            <div className="text-gray-700">
              <strong>⓲ Ảnh xem trước:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Ảnh thu nhỏ xem trước sản phẩm</li>
                <li>Nội dung gói tệp</li>
                <li>Đánh giá chất lượng bằng hình ảnh</li>
              </ul>
              <strong>⓳ Mô tả:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Độ chính xác mô tả sản phẩm</li>
                <li>Kiểm tra tính phù hợp của thẻ</li>
                <li>Xác minh các tuyên bố marketing</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ⓴㉑ Báo cáo & Vấn đề
            </div>
            <div className="text-gray-700">
              <strong>⓴ Báo cáo người dùng:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Khiếu nại vi phạm bản quyền</li>
                <li>Khiếu nại về chất lượng</li>
                <li>Báo cáo mô tả gây hiểu lầm</li>
                <li>Danh tính người báo cáo và dấu thời gian</li>
              </ul>
              <strong>㉑ Ghi chú quản trị:</strong> Ghi lại quy trình và kết quả
              xem xét
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-red-500">
            <div className="font-bold text-red-600 mb-1">
              ㉒㉓㉔㉕ Hành động duyệt
            </div>
            <div className="text-gray-700">
              <strong>㉒ Duyệt:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Đặt product.status = 'approved' (đã duyệt)</li>
                <li>Công bố sản phẩm trên thị trường</li>
                <li>Thông báo cho người bán về việc duyệt</li>
                <li>Cho phép mua sản phẩm</li>
              </ul>
              <strong>㉓ Từ chối:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Đặt product.status = 'rejected' (bị từ chối)</li>
                <li>Yêu cầu lý do từ chối chi tiết</li>
                <li>Gửi phản hồi cho người bán</li>
                <li>Cho phép nộp lại sau khi chỉnh sửa</li>
              </ul>
              <strong>㉔ Yêu cầu chỉnh sửa:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Đặt status = 'needs_revision' (cần chỉnh sửa)</li>
                <li>Gửi yêu cầu chỉnh sửa cụ thể</li>
                <li>Đặt thời hạn chỉnh sửa</li>
              </ul>
              <strong>㉕ Gắn cờ để xem xét:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Chuyển lên kiểm duyệt viên cao cấp</li>
                <li>Vấn đề bản quyền phức tạp</li>
                <li>Trường hợp nội dung ranh giới</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📋 DANH SÁCH KIỂM TRA DUYỆT
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              <strong>Xác minh bản quyền:</strong> Kiểm tra quyền sở hữu và cấp
              phép
            </li>
            <li>
              <strong>Tiêu chuẩn chất lượng:</strong> Xác minh chất lượng tệp
              đáp ứng tiêu chuẩn chợ
            </li>
            <li>
              <strong>Phù hợp nội dung:</strong> Không có nội dung người lớn,
              bạo lực hoặc xúc phạm
            </li>
            <li>
              <strong>Độ chính xác mô tả:</strong> Mô tả phải khớp với sản phẩm
              thực tế
            </li>
            <li>
              <strong>Thông số kỹ thuật:</strong> Xác minh định dạng tệp, kích
              thước, khả năng sử dụng
            </li>
            <li>
              <strong>Tính hợp lý của giá:</strong> Kiểm tra giá phù hợp với giá
              trị nội dung
            </li>
            <li>
              <strong>Đúng danh mục:</strong> Phân loại chính xác
            </li>
            <li>
              <strong>Điều tra báo cáo:</strong> Giải quyết mọi khiếu nại của
              người dùng
            </li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500">
          <div className="font-bold text-red-800 mb-2">⚠️ TIÊU CHÍ TỪ CHỐI</div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Vi phạm bản quyền:</strong> Nội dung bị đánh cắp hoặc
              không được phép
            </li>
            <li>
              <strong>Chất lượng kém:</strong> Độ phân giải thấp, tệp bị hỏng
            </li>
            <li>
              <strong>Nội dung không phù hợp:</strong> Vi phạm hướng dẫn cộng
              đồng
            </li>
            <li>
              <strong>Thông tin gây hiểu lầm:</strong> Mô tả không khớp với sản
              phẩm
            </li>
            <li>
              <strong>Vấn đề kỹ thuật:</strong> Tệp không mở được hoặc bị hỏng
            </li>
            <li>
              <strong>Nội dung trùng lặp:</strong> Đã tồn tại trong chợ
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">✅ TIÊU CHÍ DUYỆT</div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Nội dung gốc:</strong> Xác minh quyền sở hữu hoặc cấp phép
              hợp lệ
            </li>
            <li>
              <strong>Chất lượng cao:</strong> Tệp đạt tiêu chuẩn chuyên nghiệp
            </li>
            <li>
              <strong>Gói hoàn chỉnh:</strong> Bao gồm tất cả tệp được cam kết
            </li>
            <li>
              <strong>Mô tả chính xác:</strong> Thể hiện trung thực sản phẩm
            </li>
            <li>
              <strong>Danh mục đúng:</strong> Phân loại chính xác
            </li>
            <li>
              <strong>Giá cả công bằng:</strong> Giá hợp lý cho giá trị cung cấp
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
