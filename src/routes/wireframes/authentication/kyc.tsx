import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/authentication/kyc")({
  component: KYCWireframe,
});

export default function KYCWireframe() {
  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF04 - UPLOAD TÀI LIỆU KYC (XÁC THỰC DANH TÍNH)
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              1
            </div>
            <div className="text-sm font-semibold">Logo</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <div className="text-xs">Nguyễn Văn A</div>
            </div>
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              3
            </div>
            <div className="text-xs">Đăng xuất</div>
          </div>
        </div>

        <div className="p-8 max-w-3xl mx-auto">
          {/* Status Banner */}
          <div className="mb-6 p-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                4
              </div>
              <div>
                <div className="font-bold text-yellow-800">
                  ⚠️ Tài khoản chưa được xác thực
                </div>
                <div className="text-sm text-yellow-700 mt-1">
                  Vui lòng upload tài liệu để xác thực danh tính. Sau khi được
                  duyệt, bạn có thể sử dụng đầy đủ tính năng.
                </div>
              </div>
            </div>
          </div>

          {/* Page Title */}
          <div className="text-center mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">
              5
            </div>
            <div className="text-2xl font-bold">Xác Thực Danh Tính (KYC)</div>
            <div className="text-sm text-gray-600 mt-2">
              Upload tài liệu để xác minh danh tính của bạn
            </div>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="text-xs mt-2 font-semibold text-blue-600">
                  Upload tài liệu
                </div>
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="text-xs mt-2 text-gray-500">Chờ duyệt</div>
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="text-xs mt-2 text-gray-500">Hoàn tất</div>
              </div>
            </div>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mt-4">
              6
            </div>
          </div>

          {/* Account Type Indicator */}
          <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                7
              </div>
              <div className="text-sm">
                <span className="font-semibold">Loại tài khoản:</span>
                <span className="ml-2 px-2 py-1 bg-blue-600 text-white rounded text-xs">
                  Seller (Người bán)
                </span>
              </div>
            </div>
          </div>

          {/* Document Requirements Info */}
          <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded">
            <div className="flex items-start gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                8
              </div>
              <div className="font-bold">Tài liệu cần cung cấp:</div>
            </div>
            <ul className="text-sm text-gray-700 space-y-1 ml-8">
              <li>✓ CMND/CCCD/Passport (2 mặt, hình rõ ràng)</li>
              <li>✓ Giấy phép kinh doanh (nếu là công ty)</li>
              <li>✓ Giấy tờ chứng minh sở hữu bản quyền (cho Seller)</li>
            </ul>
          </div>

          {/* Upload Section 1: ID Document */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                9
              </div>
              <div className="font-bold">1. CMND/CCCD/Passport</div>
              <span className="text-red-500 text-sm">*</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Front Side */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    10
                  </div>
                  <label className="text-sm font-semibold">Mặt trước</label>
                </div>
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
                  <div className="text-3xl mb-2">📄</div>
                  <div className="text-sm text-gray-600">Click để upload</div>
                  <div className="text-xs text-gray-500 mt-1">
                    hoặc kéo thả file vào đây
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    JPG, PNG, PDF (Max 5MB)
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
                  </div>
                  <label className="text-sm font-semibold">Mặt sau</label>
                </div>
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
                  <div className="text-3xl mb-2">📄</div>
                  <div className="text-sm text-gray-600">Click để upload</div>
                  <div className="text-xs text-gray-500 mt-1">
                    hoặc kéo thả file vào đây
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    JPG, PNG, PDF (Max 5MB)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Section 2: Business License (Conditional) */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                12
              </div>
              <div className="font-bold">2. Giấy phép kinh doanh</div>
              <span className="text-sm text-gray-500">(Nếu là công ty)</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                13
              </div>
              <div className="flex-1 border-2 border-dashed border-gray-400 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
                <div className="text-3xl mb-2">📄</div>
                <div className="text-sm text-gray-600">
                  Click để upload giấy phép kinh doanh
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  JPG, PNG, PDF (Max 5MB)
                </div>
              </div>
            </div>
          </div>

          {/* Upload Section 3: Copyright Proof (For Seller) */}
          <div className="mb-6 p-5 border-2 border-blue-300 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                14
              </div>
              <div className="font-bold text-blue-800">
                3. Giấy tờ chứng minh sở hữu bản quyền
              </div>
              <span className="text-red-500 text-sm">
                * (Bắt buộc cho Seller)
              </span>
            </div>

            <div className="text-xs text-blue-700 mb-3 ml-8">
              VD: Hợp đồng xuất bản, Giấy chứng nhận bản quyền, Thỏa thuận
              chuyển nhượng, v.v.
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                15
              </div>
              <div className="flex-1 border-2 border-dashed border-blue-400 rounded-lg p-6 text-center bg-white hover:bg-blue-50 cursor-pointer">
                <div className="text-3xl mb-2">📄</div>
                <div className="text-sm text-blue-800 font-semibold">
                  Upload tài liệu chứng minh bản quyền
                </div>
                <div className="text-xs text-blue-600 mt-1">
                  Có thể upload nhiều file
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  JPG, PNG, PDF (Max 10MB mỗi file)
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                16
              </div>
              <label className="text-sm font-semibold">
                Ghi chú thêm (optional)
              </label>
            </div>
            <textarea
              className="w-full border-2 border-gray-300 rounded p-3 text-sm h-24"
              placeholder="Thêm thông tin bổ sung nếu cần..."
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                17
              </div>
              <button className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50">
                Lưu nháp
              </button>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                18
              </div>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Gửi xác thực
              </button>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                19
              </div>
              <div className="text-xs text-gray-600">
                <strong>Lưu ý:</strong> Thời gian xét duyệt thường từ 1-3 ngày
                làm việc. Bạn sẽ nhận được thông báo qua email khi tài liệu được
                duyệt hoặc cần bổ sung.
              </div>
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
            <div className="font-bold text-blue-600 mb-1">❶ Logo</div>
            <div className="text-gray-700">
              <strong>Tương tác:</strong> Click → Quay về trang chủ hoặc
              dashboard
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❷❸ User Menu & Logout
            </div>
            <div className="text-gray-700">
              <strong>❷ Tên user:</strong> Click → Dropdown menu (Profile,
              Settings, Logout)
              <br />
              <strong>❸ Đăng xuất:</strong> Click → Xóa token → Redirect về
              trang login
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❹ Banner Cảnh Báo
            </div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Khi user có
              status="pending_verification"
              <br />
              <strong>Ẩn:</strong> Sau khi KYC được approved
              <br />
              <strong>Style:</strong> Background vàng nhạt, border vàng đậm,
              icon warning
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❺ Tiêu Đề Trang</div>
            <div className="text-gray-700">
              <strong>Nội dung:</strong> "Xác Thực Danh Tính (KYC)"
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❻ Progress Steps</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> 3 bước của quy trình KYC
              <ul className="list-disc ml-5 mt-1">
                <li>Bước 1: Upload tài liệu (active - màu xanh)</li>
                <li>Bước 2: Chờ duyệt (inactive - màu xám)</li>
                <li>Bước 3: Hoàn tất (inactive - màu xám)</li>
              </ul>
              <strong>Update:</strong> Khi submit xong → Bước 2 active
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❼ Loại Tài Khoản</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Badge với role của user (Seller/Buyer)
              <br />
              <strong>Mục đích:</strong> Cho user biết tài liệu cần upload khác
              nhau theo role
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❽ Danh Sách Tài Liệu Cần Thiết
            </div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> List tài liệu theo role:
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>Tất cả:</strong> CMND/CCCD/Passport
                </li>
                <li>
                  <strong>Công ty:</strong> + Giấy phép kinh doanh
                </li>
                <li>
                  <strong>Seller:</strong> + Giấy tờ chứng minh bản quyền
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❾ Section CMND/CCCD/Passport
            </div>
            <div className="text-gray-700">
              <strong>Bắt buộc:</strong> Required field (đánh dấu *)
              <br />
              <strong>Số lượng:</strong> 2 files (mặt trước + mặt sau)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ❿⓫ Upload Area - Mặt Trước/Sau
            </div>
            <div className="text-gray-700">
              <strong>Tương tác:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Click → Mở file picker</li>
                <li>Drag & drop file vào area</li>
              </ul>
              <strong>Validation:</strong>
              <ul className="list-disc ml-5">
                <li>File types: JPG, PNG, PDF</li>
                <li>Max size: 5MB</li>
                <li>Resolution tối thiểu: 600x400px</li>
              </ul>
              <strong>Sau khi upload:</strong>
              <ul className="list-disc ml-5">
                <li>Hiển thị thumbnail preview</li>
                <li>Hiển thị tên file + size</li>
                <li>Button "Xóa" để remove file</li>
                <li>Button "Xem" để preview full size</li>
              </ul>
              <strong>Error messages:</strong>
              <ul className="list-disc ml-5">
                <li>"File quá lớn. Vui lòng chọn file dưới 5MB"</li>
                <li>"Định dạng file không được hỗ trợ"</li>
                <li>
                  "Ảnh không rõ ràng. Vui lòng upload ảnh chất lượng tốt hơn"
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓬⓭ Section Giấy Phép Kinh Doanh
            </div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Luôn hiển thị nhưng có label "(Nếu là
              công ty)"
              <br />
              <strong>Required:</strong> Chỉ khi user chọn "Công ty" trong form
              đăng ký
              <br />
              <strong>Validation:</strong> Tương tự ❿⓫, max size 5MB
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓮⓯ Section Giấy Chứng Minh Bản Quyền
            </div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Chỉ khi role="seller"
              <br />
              <strong>Required:</strong> Bắt buộc cho Seller
              <br />
              <strong>Multiple files:</strong> Cho phép upload nhiều files (VD:
              nhiều hợp đồng khác nhau)
              <br />
              <strong>Validation:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>File types: JPG, PNG, PDF</li>
                <li>Max size per file: 10MB</li>
                <li>Max 10 files</li>
              </ul>
              <strong>Hiển thị sau upload:</strong> List các files đã upload với
              thumbnail, tên, size, button xóa
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓰ Textarea "Ghi Chú"
            </div>
            <div className="text-gray-700">
              <strong>Optional field</strong>
              <br />
              <strong>Mục đích:</strong> User có thể thêm thông tin bổ sung,
              giải thích về tài liệu
              <br />
              <strong>Max length:</strong> 500 ký tự
              <br />
              <strong>Placeholder:</strong> "Thêm thông tin bổ sung nếu cần..."
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓱ Button "Lưu Nháp"
            </div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Lưu tạm thời các files đã upload
              <br />
              <strong>Tương tác:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Click → Lưu vào database với status="draft"</li>
                <li>Hiển thị toast "Đã lưu nháp"</li>
                <li>User có thể logout và quay lại sau để tiếp tục</li>
              </ol>
              <strong>Validation:</strong> Không validate required fields, chỉ
              cần có ít nhất 1 file
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">
              ⓲ Button "Gửi Xác Thực"
            </div>
            <div className="text-gray-700">
              <strong>Tương tác khi click:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>
                  Validate tất cả required fields:
                  <ul className="list-disc ml-5">
                    <li>CMND/CCCD: Mặt trước + Mặt sau (required)</li>
                    <li>Giấy phép KD: Required nếu là công ty</li>
                    <li>Bản quyền: Required nếu là Seller</li>
                  </ul>
                </li>
                <li>
                  Nếu thiếu → Hiển thị error messages dưới các fields tương ứng
                </li>
                <li>
                  Nếu valid:
                  <ul className="list-disc ml-5">
                    <li>Upload files lên server (S3, Cloudinary, etc.)</li>
                    <li>
                      Loading state: Button disabled + Spinner + Progress bar
                    </li>
                    <li>Tạo KYC record với status="pending_review"</li>
                    <li>Gửi notification cho Moderator</li>
                    <li>
                      Success:
                      <ul className="list-circle ml-5">
                        <li>
                          Hiển thị toast "Đã gửi tài liệu. Chúng tôi sẽ xem xét
                          trong 1-3 ngày"
                        </li>
                        <li>
                          Redirect đến trang "Chờ xét duyệt" (WF05 hoặc màn hình
                          pending)
                        </li>
                        <li>Gửi email xác nhận đã nhận tài liệu</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">⓳ Help Text</div>
            <div className="text-gray-700">
              <strong>Nội dung:</strong> Thông tin về thời gian xét duyệt và
              cách nhận thông báo
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            📌 QUY TRÌNH XÉT DUYỆT (Backend)
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>User submit → Status="pending_review"</li>
            <li>Moderator nhận notification trong admin dashboard</li>
            <li>
              Moderator review tài liệu:
              <ul className="list-disc ml-5">
                <li>Check độ rõ ràng của ảnh/PDF</li>
                <li>Verify thông tin khớp với profile</li>
                <li>Check tính hợp lệ của giấy tờ</li>
              </ul>
            </li>
            <li>
              Moderator có 3 actions:
              <ul className="list-disc ml-5">
                <li>
                  <strong>Approve:</strong> Status="verified" → User nhận email
                  approval → Có thể sử dụng full features
                </li>
                <li>
                  <strong>Reject:</strong> Status="rejected" + Ghi chú lý do →
                  User nhận email → Phải submit lại
                </li>
                <li>
                  <strong>Request more info:</strong> Status="pending_info" →
                  User nhận email yêu cầu bổ sung
                </li>
              </ul>
            </li>
            <li>
              Timeout: Nếu không được xét duyệt sau 7 ngày → Tự động reject +
              Gửi email nhắc nhở
            </li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            🔒 BẢO MẬT TÀI LIỆU
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Files được encrypt khi upload và lưu trữ</li>
            <li>• Chỉ Moderator và Admin có quyền xem tài liệu KYC</li>
            <li>
              • Tự động xóa tài liệu sau khi approved 90 ngày (theo quy định
              GDPR/PDPA)
            </li>
            <li>• Log tất cả actions: ai xem, khi nào, IP address</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
