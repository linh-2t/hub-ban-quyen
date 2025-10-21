import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/buyer/payment')({
  component: PaymentBuyerWireframe,
})


export default function PaymentBuyerWireframe() {
  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF16 - THANH TOÁN (BUYER)
      </h1>
      
      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
            <div className="text-sm">← Quay lại hợp đồng</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <div className="text-xs">Công ty Kim Đồng ▼</div>
            </div>
          </div>
        </div>

        <div className="p-8 max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-6 text-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">3</div>
            <div className="text-2xl font-bold">Thanh Toán Hợp Đồng</div>
            <div className="text-sm text-gray-600 mt-2">Hợp đồng #CT-2025-001234</div>
          </div>

          {/* Payment Summary */}
          <div className="mb-6 p-5 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
              <div className="font-bold">Thông Tin Thanh Toán</div>
            </div>

            <div className="ml-8 space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <div>
                  <div className="text-sm text-gray-600">Sản phẩm</div>
                  <div className="font-semibold">Kinh Tế Học Vĩ Mô - Bản quyền toàn cầu</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <div>
                  <div className="text-sm text-gray-600">Người nhận</div>
                  <div className="font-semibold">Nguyễn Văn A (NXB Trẻ)</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-blue-50 rounded border-2 border-blue-300">
                <div>
                  <div className="text-sm text-gray-600">Tổng số tiền</div>
                  <div className="text-2xl font-bold text-blue-600">90,000,000 đ</div>
                  <div className="text-xs text-gray-600">(Chín mươi triệu đồng chẵn)</div>
                </div>
              </div>

              <div className="p-3 bg-white rounded border">
                <div className="text-sm text-gray-600 mb-1">Thời hạn thanh toán</div>
                <div className="font-semibold text-red-600">Trong vòng 7 ngày kể từ 23/10/2025</div>
                <div className="text-xs text-gray-600">Hạn chót: <strong>30/10/2025</strong></div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
              <div className="font-bold">Phương Thức Thanh Toán</div>
            </div>

            <div className="ml-8 space-y-3">
              <label className="flex items-start gap-3 p-4 border-2 border-blue-600 bg-blue-50 rounded-lg cursor-pointer">
                <input type="radio" name="method" checked className="mt-1" />
                <div className="flex-1">
                  <div className="font-semibold mb-1">🏦 Chuyển Khoản Ngân Hàng</div>
                  <div className="text-xs text-gray-600">
                    Chuyển khoản trực tiếp đến tài khoản người bán
                  </div>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 opacity-50">
                <input type="radio" name="method" disabled className="mt-1" />
                <div className="flex-1">
                  <div className="font-semibold mb-1">💳 Cổng Thanh Toán (Coming Soon)</div>
                  <div className="text-xs text-gray-600">
                    VNPay, MoMo, Stripe - Sắp có trong Phase 2
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Bank Transfer Info */}
          <div className="mb-6 p-5 border-2 border-green-300 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
              <div className="font-bold">Thông Tin Tài Khoản Nhận</div>
            </div>

            <div className="ml-8 space-y-3">
              <div className="p-3 bg-white rounded border">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-gray-600 text-xs mb-1">Ngân hàng</div>
                    <div className="font-semibold flex items-center gap-2">
                      Vietcombank
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
                        <button className="text-xs text-blue-600 underline">📋 Copy</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-xs mb-1">Chi nhánh</div>
                    <div className="font-semibold">Thành phố Hồ Chí Minh</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-xs mb-1">Số tài khoản</div>
                    <div className="font-semibold flex items-center gap-2">
                      1234567890
                      <button className="text-xs text-blue-600 underline">📋 Copy</button>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-xs mb-1">Chủ tài khoản</div>
                    <div className="font-semibold">Nguyễn Văn A</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-yellow-50 border border-yellow-300 rounded">
                <div className="text-xs">
                  <strong>⚠️ Nội dung chuyển khoản (bắt buộc):</strong><br/>
                  <div className="mt-2 p-2 bg-white rounded border font-mono text-sm flex items-center justify-between">
                    <span>TT CT-2025-001234 Kim Dong</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
                      <button className="text-xs text-blue-600 underline">📋 Copy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Proof */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
              <div className="font-bold">Upload Chứng Từ Thanh Toán</div>
              <span className="text-red-500 text-sm">*</span>
            </div>

            <div className="ml-8">
              <div className="border-2 border-dashed border-blue-400 rounded-lg p-8 text-center bg-blue-50 mb-3">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">10</div>
                  <div className="text-4xl">📄</div>
                </div>
                <div className="text-sm font-semibold mb-2">Kéo thả biên lai vào đây</div>
                <div className="text-xs text-gray-600 mb-3">hoặc click để chọn file</div>
                <div className="text-xs text-gray-500">JPG, PNG, PDF (Max 5MB)</div>
              </div>

              <div className="text-xs text-gray-600 p-3 bg-gray-50 rounded border">
                💡 <strong>Lưu ý:</strong> Upload ảnh chụp hoặc screenshot biên lai chuyển khoản 
                có đầy đủ thông tin: Số tiền, Thời gian, Nội dung chuyển khoản
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">11</div>
              <label className="text-sm font-semibold">Ghi chú (optional)</label>
            </div>
            <textarea 
              className="w-full border-2 border-gray-300 rounded p-3 text-sm h-20 ml-8"
              placeholder="Ghi chú thêm về giao dịch..."
            ></textarea>
          </div>

          {/* Confirmation Checkbox */}
          <div className="mb-6 p-3 bg-gray-50 rounded ml-8">
            <label className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">12</div>
              <div>
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">
                  Tôi xác nhận đã chuyển khoản đúng số tiền <strong>90,000,000 đ</strong> 
                  với nội dung <strong>"TT CT-2025-001234 Kim Dong"</strong>
                </span>
              </div>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">13</div>
              <button className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50">
                Để sau
              </button>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Gửi Chứng Từ
              </button>
            </div>
          </div>

          {/* Help Info */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded ml-8">
            <div className="flex items-start gap-2 text-xs">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">15</div>
              <div className="text-gray-700">
                <strong>ℹ️ Quy trình tiếp theo:</strong><br/>
                1. Sau khi bạn gửi chứng từ, Accountant sẽ xác minh thanh toán<br/>
                2. Khi được duyệt, Seller sẽ nhận được tiền<br/>
                3. Bạn sẽ nhận được bản số hóa và giấy chứng nhận bản quyền<br/>
                4. Thời gian xử lý: 1-3 ngày làm việc
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">CHÚ THÍCH CHI TIẾT</h2>
        
        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❹ Payment Summary</div>
            <div className="text-gray-700">
              Hiển thị tóm tắt: Sản phẩm, Người nhận, Số tiền, Deadline thanh toán
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❺ Payment Method Selection</div>
            <div className="text-gray-700">
              <strong>Phase 1:</strong> Chỉ có Bank Transfer (manual)<br/>
              <strong>Phase 2:</strong> Sẽ có Payment Gateway (VNPay, MoMo, Stripe) - disable trong Phase 1
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❻❼❽ Bank Transfer Info</div>
            <div className="text-gray-700">
              <strong>❻ Section:</strong> Hiển thị đầy đủ thông tin TK nhận (từ seller profile)<br/>
              <strong>❼❽ Copy buttons:</strong> Click → Copy to clipboard → Show toast "Đã copy!"<br/>
              <strong>Nội dung CK format:</strong> TT [Contract ID] [Buyer short name]
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❾❿ Upload Proof</div>
            <div className="text-gray-700">
              <strong>❿ Upload area:</strong> Drag-drop hoặc click to select<br/>
              <strong>Accepted formats:</strong> JPG, PNG, PDF<br/>
              <strong>Max size:</strong> 5MB<br/>
              <strong>Validation:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>File size ≤ 5MB</li>
                <li>Image quality đủ rõ để đọc</li>
              </ul>
              <strong>Preview:</strong> Hiển thị thumbnail sau khi upload thành công
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓫ Ghi Chú</div>
            <div className="text-gray-700">
              Optional field. Buyer có thể thêm note về giao dịch
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓬ Confirmation Checkbox</div>
            <div className="text-gray-700">
              <strong>Required:</strong> Phải check trước khi submit<br/>
              <strong>Purpose:</strong> Confirm buyer đã thực sự chuyển tiền
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓭⓮ Action Buttons</div>
            <div className="text-gray-700">
              <strong>⓭ Để sau:</strong> Không submit, có thể quay lại sau<br/>
              <strong>⓮ Gửi Chứng Từ:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Validate: Phải có file upload + checkbox checked</li>
                <li>Upload file lên server (S3, Cloudinary)</li>
                <li>Create payment record với status="pending_verification"</li>
                <li>Send notification cho Accountant</li>
                <li>Success: Show modal "Chứng từ đã được gửi!" → Redirect to contract page</li>
                <li>Email confirmation cho buyer</li>
              </ol>
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓯ Help Info</div>
            <div className="text-gray-700">
              Giải thích quy trình tiếp theo để buyer biết chuyện gì sẽ xảy ra
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 BUSINESS RULES</div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>Payment due: Theo điều khoản trong hợp đồng (VD: 7 ngày sau khi ký)</li>
            <li>Overdue handling: Gửi reminder emails sau 3, 5, 7 ngày</li>
            <li>Nếu quá hạn 14 ngày không thanh toán → Contract có thể bị hủy</li>
            <li>Buyer có thể upload lại chứng từ nếu bị reject</li>
            <li>Multiple uploads: Nếu thanh toán nhiều đợt, có thể upload nhiều lần</li>
          </ul>
        </div>
      </div>
    </div>
  );
}