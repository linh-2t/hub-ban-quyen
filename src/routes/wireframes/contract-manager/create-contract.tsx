import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/wireframes/contract-manager/create-contract",
)({
  component: CreateContractWireframe,
});

export default function CreateContractWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF14 - TẠO HỢP ĐỒNG (QUẢN LÝ HỢP ĐỒNG)
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              1
            </div>
            <div className="text-sm">← Quay lại danh sách hợp đồng</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <div className="text-xs">Quản lý hợp đồng ▼</div>
            </div>
          </div>
        </div>

        <div className="p-6 max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="mb-6 text-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">
              3
            </div>
            <div className="text-2xl font-bold">Tạo Hợp Đồng</div>
            <div className="text-sm text-gray-600 mt-2">
              Hợp đồng #CT-2025-001234 • Từ đề nghị (Offer) #OF-2025-001234
            </div>
          </div>

          {/* Offer Summary */}
          <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                4
              </div>
              <div className="font-bold">Thông Tin Đề Nghị Đã Chấp Nhận</div>
            </div>
            <div className="grid grid-cols-3 gap-4 ml-8 text-sm">
              <div>
                <div className="text-gray-600 text-xs">Sản phẩm</div>
                <div className="font-semibold">Kinh Tế Học Vĩ Mô</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs">Bên Bán</div>
                <div className="font-semibold">Nguyễn Văn A (NXB Trẻ)</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs">Bên Mua</div>
                <div className="font-semibold">Công ty Kim Đồng</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs">Loại bản quyền</div>
                <div className="font-semibold">Toàn bộ bản quyền</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs">Vùng lãnh thổ</div>
                <div className="font-semibold">Toàn cầu, 5 năm, Độc quyền</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs">Giá trị</div>
                <div className="font-bold text-blue-600">90.000.000 đ</div>
              </div>
            </div>
          </div>

          {/* Select Template */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                5
              </div>
              <div className="font-bold">1. Chọn Mẫu Hợp Đồng</div>
            </div>

            <div className="grid grid-cols-2 gap-4 ml-8">
              <label className="border-2 border-blue-600 bg-blue-50 p-4 rounded-lg cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <input defaultChecked name="template" type="radio" />
                  <div className="font-semibold text-sm">
                    Mẫu Mua Đứt - Toàn Quyền
                  </div>
                </div>
                <div className="text-xs text-gray-600">
                  Phù hợp cho mua đứt một lần, độc quyền toàn cầu
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-blue-600">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <span>Xem trước mẫu</span>
                </div>
              </label>

              <label className="border-2 border-gray-300 p-4 rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <input name="template" type="radio" />
                  <div className="font-semibold text-sm">
                    Mẫu Trả Trước + Hoa Hồng (Advance + Royalty)
                  </div>
                </div>
                <div className="text-xs text-gray-600">
                  Thanh toán trước + phần trăm doanh thu
                </div>
              </label>

              <label className="border-2 border-gray-300 p-4 rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <input name="template" type="radio" />
                  <div className="font-semibold text-sm">
                    Mẫu Chia Sẻ Doanh Thu
                  </div>
                </div>
                <div className="text-xs text-gray-600">
                  Không trả trước, chỉ phần trăm doanh thu
                </div>
              </label>

              <label className="border-2 border-gray-300 p-4 rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <input name="template" type="radio" />
                  <div className="font-semibold text-sm">Mẫu Tùy Chỉnh</div>
                </div>
                <div className="text-xs text-gray-600">
                  Bắt đầu từ mẫu trống
                </div>
              </label>
            </div>
          </div>

          {/* Auto-filled Data */}
          <div className="mb-6 p-5 border-2 border-green-300 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                7
              </div>
              <div className="font-bold">
                2. Thông Tin Các Bên (Tự Động Điền)
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 ml-8">
              {/* Seller Info */}
              <div className="p-3 bg-white rounded border">
                <div className="text-xs text-gray-600 mb-2">
                  BÊN A (Bên Chuyển Nhượng)
                </div>
                <div className="space-y-1 text-xs">
                  <div>
                    <strong>Tên:</strong> Nguyễn Văn A
                  </div>
                  <div>
                    <strong>Công ty:</strong> NXB Trẻ
                  </div>
                  <div>
                    <strong>CMND/MST:</strong> 079xxxxxxxx
                  </div>
                  <div>
                    <strong>Địa chỉ:</strong> 161B Lý Chính Thắng, Q.3, TP.HCM
                  </div>
                  <div>
                    <strong>Email:</strong> nguyenvana@nxbtre.com.vn
                  </div>
                  <div>
                    <strong>SĐT:</strong> 0901234567
                  </div>
                </div>
              </div>

              {/* Buyer Info */}
              <div className="p-3 bg-white rounded border">
                <div className="text-xs text-gray-600 mb-2">
                  BÊN B (Bên Nhận Quyền)
                </div>
                <div className="space-y-1 text-xs">
                  <div>
                    <strong>Tên:</strong> Công ty TNHH Kim Đồng
                  </div>
                  <div>
                    <strong>Người đại diện:</strong> Trần Thị B
                  </div>
                  <div>
                    <strong>MST:</strong> 0123456789
                  </div>
                  <div>
                    <strong>Địa chỉ:</strong> 55 Quang Trung, Q.Gò Vấp, TP.HCM
                  </div>
                  <div>
                    <strong>Email:</strong> contact@kimdong.com
                  </div>
                  <div>
                    <strong>SĐT:</strong> (028) 3838 xxxx
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="col-span-2 p-3 bg-white rounded border">
                <div className="text-xs text-gray-600 mb-2">TÁC PHẨM</div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <strong>Tên tác phẩm:</strong> Kinh Tế Học Vĩ Mô
                  </div>
                  <div>
                    <strong>Tác giả:</strong> Gregory Mankiw
                  </div>
                  <div>
                    <strong>ISBN:</strong> 978-0-538-45305-9
                  </div>
                  <div>
                    <strong>Loại:</strong> Sách in
                  </div>
                  <div>
                    <strong>Năm XB gốc:</strong> 2020
                  </div>
                  <div>
                    <strong>Ngôn ngữ:</strong> Tiếng Anh
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contract Terms Editor */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                8
              </div>
              <div className="font-bold">3. Điều Khoản Hợp Đồng</div>
            </div>

            <div className="ml-8 space-y-4">
              {/* Rich Text Editor */}
              <div className="border-2 border-gray-300 rounded">
                <div className="bg-gray-100 p-2 border-b border-gray-300 flex gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      9
                    </div>
                    <button
                      aria-label="Bold"
                      className="px-2 py-1 bg-white border rounded"
                      type="button"
                    >
                      B
                    </button>
                    <button
                      aria-label="Italic"
                      className="px-2 py-1 bg-white border rounded"
                      type="button"
                    >
                      I
                    </button>
                    <button
                      aria-label="Underline"
                      className="px-2 py-1 bg-white border rounded"
                      type="button"
                    >
                      U
                    </button>
                  </div>
                  <select
                    aria-label="Kiểu đoạn văn"
                    className="px-2 py-1 border rounded text-xs"
                  >
                    <option>Đoạn văn</option>
                    <option>Tiêu đề 1</option>
                    <option>Tiêu đề 2</option>
                  </select>
                  <button
                    className="px-2 py-1 bg-white border rounded"
                    type="button"
                  >
                    • Danh sách
                  </button>
                  <button
                    className="px-2 py-1 bg-white border rounded"
                    type="button"
                  >
                    1. Danh sách số
                  </button>
                  <button
                    className="px-2 py-1 bg-blue-600 text-white rounded"
                    type="button"
                  >
                    + Thêm điều khoản
                  </button>
                </div>

                <div className="p-4 min-h-96 bg-white text-sm">
                  <h2 className="font-bold mb-2">
                    HỢP ĐỒNG CHUYỂN NHƯỢNG BẢN QUYỀN TÁC PHẨM
                  </h2>

                  <p className="mb-3">
                    - Căn cứ Luật Sở hữu trí tuệ số 50/2005/QH11...
                    <br />- Căn cứ nhu cầu và khả năng của các bên...
                  </p>

                  <p className="mb-3">
                    Hôm nay, ngày <strong>[Ngày ký]</strong>, tại{" "}
                    <strong>[Địa điểm]</strong>, chúng tôi gồm:
                  </p>

                  <div className="mb-3 p-2 bg-yellow-50 border-l-4 border-yellow-500">
                    <strong>BÊN A:</strong>{" "}
                    <span className="text-blue-600">{"{{seller_name}}"}</span>
                    <br />
                    <strong>Địa chỉ:</strong>{" "}
                    <span className="text-blue-600">
                      {"{{seller_address}}"}
                    </span>
                    <br />
                    <em className="text-xs text-gray-600">
                      (Các placeholder sẽ tự động được thay thế)
                    </em>
                  </div>

                  <h3 className="font-bold mt-4 mb-2">
                    ĐIỀU 1: ĐỐI TƯỢNG HỢP ĐỒNG
                  </h3>
                  <p className="mb-3">
                    Bên A đồng ý chuyển nhượng cho Bên B quyền{" "}
                    <strong>toàn bộ bản quyền</strong>
                    đối với tác phẩm "<strong>{"{{product_title}}"}</strong>"...
                  </p>

                  <h3 className="font-bold mt-4 mb-2">
                    ĐIỀU 2: PHẠM VI CHUYỂN NHƯỢNG
                  </h3>
                  <p className="mb-3">
                    2.1. Vùng lãnh thổ: <strong>{"{{territory}}"}</strong>
                    <br />
                    2.2. Thời hạn: <strong>{"{{duration}}"}</strong>
                    <br />
                    2.3. Độc quyền: <strong>{"{{exclusivity}}"}</strong>
                  </p>

                  <div className="text-center text-gray-400 text-xs mt-4">
                    ... Xem thêm 15 điều khoản ...
                  </div>
                </div>
              </div>

              {/* Custom Clauses */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    10
                  </div>
                  <label className="text-sm font-semibold">
                    Điều khoản đặc biệt (từ đề nghị)
                  </label>
                </div>
                <textarea
                  className="w-full border-2 border-gray-300 rounded p-3 text-sm h-24"
                  defaultValue="Bên mua yêu cầu được in tối thiểu 5.000 bản trong năm đầu tiên."
                  placeholder="Các điều khoản đặc biệt đã thỏa thuận trong đề nghị..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-6 p-5 border-2 border-yellow-300 bg-yellow-50 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                11
              </div>
              <div className="font-bold">4. Điều Khoản Thanh Toán</div>
            </div>

            <div className="ml-8 space-y-3 text-sm">
              <div className="p-3 bg-white rounded border">
                <div className="font-semibold mb-2">
                  Tổng giá trị hợp đồng: 90.000.000 VND
                </div>
                <div className="text-xs text-gray-600">
                  (Bằng chữ: Chín mươi triệu đồng chẵn)
                </div>
              </div>

              <div className="p-3 bg-white rounded border">
                <div className="font-semibold mb-2">
                  Phương thức thanh toán:
                </div>
                <div className="text-xs">
                  - Thanh toán 100% trong vòng 7 ngày kể từ khi hợp đồng có hiệu
                  lực
                  <br />- Chuyển khoản vào TK: <strong>1234567890</strong> -
                  Ngân hàng Vietcombank
                  <br />- Chủ TK: <strong>Nguyễn Văn A</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Attachments */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                12
              </div>
              <div className="font-bold">5. Tài Liệu Đính Kèm</div>
            </div>

            <div className="ml-8">
              <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center bg-gray-50 mb-3">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <div className="text-3xl">📎</div>
                </div>
                <div className="text-sm text-gray-600">
                  Nhấp để tải lên hoặc kéo thả tệp vào đây
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  PDF, DOCX, JPG (Tối đa 10MB mỗi tệp)
                </div>
              </div>

              <div className="text-xs text-gray-600">
                <strong>Gợi ý:</strong> Giấy tờ bản quyền gốc, Scan CMND các
                bên, Phụ lục kỹ thuật, v.v.
              </div>
            </div>
          </div>

          {/* Preview & Action Buttons */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                14
              </div>
              <button
                className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50"
                type="button"
              >
                👁️ Xem trước PDF
              </button>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                15
              </div>
              <button
                className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50"
                type="button"
              >
                💾 Lưu nháp
              </button>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                16
              </div>
              <button
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                type="button"
              >
                📤 Gửi cho các bên xem xét
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

        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❹ Tóm tắt đề nghị</div>
            <div className="text-gray-700">
              Hiển thị thông tin đã thỏa thuận từ đề nghị để người quản lý hợp
              đồng tham khảo
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❺❻ Chọn Mẫu</div>
            <div className="text-gray-700">
              <strong>Mẫu:</strong> Các mẫu định sẵn cho các loại thỏa thuận phổ
              biến
              <br />
              <strong>❻ Xem trước:</strong> Nhấp → Hộp thoại hiển thị mẫu đầy đủ
              <br />
              <strong>Tự động chọn:</strong> Hệ thống đề xuất mẫu dựa trên loại
              đề nghị
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">
              ❼ Tự động điền dữ liệu
            </div>
            <div className="text-gray-700">
              <strong>Tự động điền từ:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Hồ sơ người bán (từ dữ liệu KYC)</li>
                <li>Hồ sơ người mua (từ dữ liệu KYC)</li>
                <li>Metadata sản phẩm</li>
                <li>
                  Điều khoản đề nghị (bản quyền, vùng lãnh thổ, giá, v.v.)
                </li>
              </ul>
              <strong>Có thể chỉnh sửa:</strong> Người quản lý hợp đồng có thể
              sửa nếu cần
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">
              ❽❾ Trình soạn thảo văn bản phong phú
            </div>
            <div className="text-gray-700">
              <strong>❾ Thanh công cụ:</strong> In đậm, In nghiêng, Gạch chân,
              Tiêu đề, Danh sách, Chèn điều khoản
              <br />
              <strong>Placeholders:</strong>{" "}
              {"{{seller_name}}, {{product_title}}"}, v.v. → Tự động thay thế
              khi tạo PDF
              <br />
              <strong>Có thể chỉnh sửa:</strong> Người quản lý hợp đồng có thể
              chỉnh sửa toàn bộ nội dung
              <br />
              <strong>Quản lý phiên bản:</strong> Theo dõi thay đổi, lưu lịch sử
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">
              ❿ Điều khoản tùy chỉnh
            </div>
            <div className="text-gray-700">
              Được điền sẵn với yêu cầu đặc biệt từ đề nghị. Người quản lý hợp
              đồng có thể chỉnh sửa để phù hợp với ngôn ngữ pháp lý
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">
              ⓫ Điều khoản thanh toán
            </div>
            <div className="text-gray-700">
              Tự động điền từ đề nghị. Hiển thị tài khoản ngân hàng của bên bán
              (từ hồ sơ)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓬⓭ Tài liệu đính kèm</div>
            <div className="text-gray-700">
              <strong>Tải lên:</strong> Phụ lục, tài liệu scan, thông số kỹ
              thuật
              <br />
              <strong>Tối đa:</strong> 10 tệp, 10MB mỗi tệp
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓮⓯⓰ Các nút hành động</div>
            <div className="text-gray-700">
              <strong>⓮ Xem trước PDF:</strong> Tạo bản xem trước PDF từ mẫu
              HTML
              <br />
              <strong>⓯ Lưu nháp:</strong> Lưu với status="draft"
              <br />
              <strong>⓰ Gửi xem xét:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Kiểm tra các trường bắt buộc</li>
                <li>Tạo PDF cuối cùng</li>
                <li>Cập nhật status="pending_review"</li>
                <li>Gửi thông báo tới Bên Mua & Bên Bán</li>
                <li>Chuyển hướng về bảng điều khiển hợp đồng</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📌 QUY TRÌNH LÀM VIỆC
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              Đề nghị được chấp nhận → Tự động tạo bản ghi hợp đồng với
              status="draft"
            </li>
            <li>
              Tự động phân công cho người quản lý hợp đồng (round-robin hoặc thủ
              công)
            </li>
            <li>Người quản lý hợp đồng nhận thông báo → Mở WF14</li>
            <li>Người quản lý chọn mẫu → Hệ thống tự động điền dữ liệu</li>
            <li>Người quản lý xem xét và điều chỉnh nội dung hợp đồng</li>
            <li>
              Người quản lý nhấp "Gửi xem xét" → Bên Mua & Bên Bán nhận thông
              báo
            </li>
            <li>Chuyển sang WF15 (Quy trình xem xét & ký)</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
