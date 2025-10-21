import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/buyer/create-offer')({
  component: CreateOfferWireframe,
})

export default function CreateOfferWireframe() {
  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF10 - TẠO OFFER (BUYER GỬI CHO SELLER)
      </h1>
      
      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
            <div className="text-sm">← Quay lại sản phẩm</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <div className="text-xs">Nguyễn Văn B ▼</div>
            </div>
          </div>
        </div>

        <div className="p-8 max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">3</div>
            <div className="text-2xl font-bold">Gửi Offer Mua Bản Quyền</div>
            <div className="text-sm text-gray-600 mt-2">Điền thông tin offer để gửi cho seller</div>
          </div>

          {/* Product Summary */}
          <div className="mb-6 p-4 bg-gray-50 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
              <div className="font-bold">Sản phẩm bạn muốn mua:</div>
            </div>
            <div className="flex gap-4 ml-8">
              <div className="w-20 h-28 bg-gray-200 flex items-center justify-center rounded">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
              </div>
              <div className="flex-1">
                <div className="font-bold mb-1">Nghệ Thuật Lãnh Đạo</div>
                <div className="text-sm text-gray-600">Tác giả: Dale Carnegie</div>
                <div className="text-sm text-gray-600">Seller: NXB Trẻ</div>
                <div className="text-sm mt-2">
                  <span className="text-gray-600">Giá đề xuất của seller:</span>
                  <span className="font-bold text-blue-600 ml-2">50,000,000 đ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Terms Section */}
          <div className="mb-6 p-5 border-2 border-blue-300 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
              <div className="font-bold">1. Điều Khoản Bản Quyền</div>
            </div>

            <div className="space-y-4">
              {/* Copyright Type */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
                  <label className="text-sm font-semibold">Loại bản quyền muốn mua <span className="text-red-500">*</span></label>
                </div>
                <div className="space-y-2 ml-7">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">Toàn bộ bản quyền</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked />
                    <span className="text-sm">In ấn</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">Phát hành số (E-book, audiobook)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">Chuyển thể (Phim, kịch, game)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">Dịch thuật</span>
                  </label>
                </div>
              </div>

              {/* Territory */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
                    <label className="text-sm font-semibold">Vùng lãnh thổ <span className="text-red-500">*</span></label>
                  </div>
                  <select className="w-full border-2 border-gray-300 rounded p-2 text-sm">
                    <option>Việt Nam</option>
                    <option>Toàn cầu</option>
                    <option>Khu vực (chọn và nhập chi tiết)</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
                    <label className="text-sm font-semibold">Độc quyền <span className="text-red-500">*</span></label>
                  </div>
                  <select className="w-full border-2 border-gray-300 rounded p-2 text-sm">
                    <option>Có (Exclusive)</option>
                    <option>Không (Non-exclusive)</option>
                  </select>
                </div>
              </div>

              {/* Duration */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">10</div>
                  <label className="text-sm font-semibold">Thời hạn <span className="text-red-500">*</span></label>
                </div>
                <div className="grid grid-cols-3 gap-3 ml-7">
                  <label className="flex items-center gap-2 border-2 border-gray-300 p-2 rounded cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="duration" />
                    <span className="text-sm">1 năm</span>
                  </label>
                  <label className="flex items-center gap-2 border-2 border-gray-300 p-2 rounded cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="duration" checked />
                    <span className="text-sm">3 năm</span>
                  </label>
                  <label className="flex items-center gap-2 border-2 border-gray-300 p-2 rounded cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="duration" />
                    <span className="text-sm">5 năm</span>
                  </label>
                  <label className="flex items-center gap-2 border-2 border-gray-300 p-2 rounded cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="duration" />
                    <span className="text-sm">Vĩnh viễn</span>
                  </label>
                  <label className="flex items-center gap-2 border-2 border-gray-300 p-2 rounded cursor-pointer hover:bg-gray-50 col-span-2">
                    <input type="radio" name="duration" />
                    <span className="text-sm">Khác (nhập cụ thể)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Terms Section */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">11</div>
              <div className="font-bold">2. Điều Khoản Tài Chính</div>
            </div>

            <div className="space-y-4">
              {/* Deal Type */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">12</div>
                  <label className="text-sm font-semibold">Loại deal <span className="text-red-500">*</span></label>
                </div>
                <div className="space-y-2 ml-7">
                  <label className="flex items-start gap-2 border-2 border-blue-600 bg-blue-50 p-3 rounded cursor-pointer">
                    <input type="radio" name="dealType" checked className="mt-1" />
                    <div>
                      <div className="font-semibold text-sm">Mua đứt một lần</div>
                      <div className="text-xs text-gray-600">Thanh toán toàn bộ một lần, không có khoản phí tiếp theo</div>
                    </div>
                  </label>
                  <label className="flex items-start gap-2 border-2 border-gray-300 p-3 rounded cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="dealType" className="mt-1" />
                    <div>
                      <div className="font-semibold text-sm">Advance + Royalty</div>
                      <div className="text-xs text-gray-600">Trả trước một khoản + phần trăm doanh thu theo từng kỳ</div>
                    </div>
                  </label>
                  <label className="flex items-start gap-2 border-2 border-gray-300 p-3 rounded cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="dealType" className="mt-1" />
                    <div>
                      <div className="font-semibold text-sm">Chia sẻ doanh thu</div>
                      <div className="text-xs text-gray-600">Không có advance, chia phần trăm doanh thu</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* One-time Payment (shown when "Mua đứt" selected) */}
              <div className="p-4 bg-yellow-50 border border-yellow-300 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">13</div>
                  <label className="text-sm font-semibold">Giá đề xuất (VND) <span className="text-red-500">*</span></label>
                </div>
                <input 
                  type="text" 
                  className="w-full border-2 border-gray-300 rounded p-3 text-sm font-semibold" 
                  placeholder="50,000,000" 
                />
                <div className="text-xs text-gray-600 mt-2 ml-7">
                  💡 Giá đề xuất của seller: <strong>50,000,000 đ</strong>. Bạn có thể đề xuất giá khác để thương lượng.
                </div>
              </div>

              {/* Payment Schedule */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
                  <label className="text-sm font-semibold">Điều khoản thanh toán <span className="text-red-500">*</span></label>
                </div>
                <select className="w-full border-2 border-gray-300 rounded p-2 text-sm">
                  <option>Thanh toán một lần (100% khi ký hợp đồng)</option>
                  <option>Chia làm 2 đợt (50% khi ký, 50% sau 30 ngày)</option>
                  <option>Chia làm 3 đợt (40%, 30%, 30%)</option>
                  <option>Tùy chỉnh (nhập chi tiết schedule)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Terms */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">15</div>
              <div className="font-bold">3. Điều Khoản Khác</div>
            </div>

            <div className="space-y-4">
              {/* Special Requirements */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">16</div>
                  <label className="text-sm font-semibold">Yêu cầu đặc biệt (optional)</label>
                </div>
                <textarea 
                  className="w-full border-2 border-gray-300 rounded p-3 text-sm h-24"
                  placeholder="VD: Yêu cầu tối thiểu 5,000 bản in trong năm đầu, được phép chỉnh sửa bìa, etc."
                ></textarea>
              </div>

              {/* Offer Validity */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">17</div>
                  <label className="text-sm font-semibold">Thời hạn offer valid <span className="text-red-500">*</span></label>
                </div>
                <div className="flex items-center gap-3">
                  <input 
                    type="date" 
                    className="border-2 border-gray-300 rounded p-2 text-sm"
                  />
                  <span className="text-xs text-gray-600">(Mặc định: 14 ngày kể từ hôm nay)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">18</div>
              <div className="font-bold">Tóm Tắt Offer</div>
            </div>
            <div className="ml-8 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Loại bản quyền:</span>
                <span className="font-semibold">In ấn</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Vùng lãnh thổ:</span>
                <span className="font-semibold">Việt Nam</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Thời hạn:</span>
                <span className="font-semibold">3 năm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Độc quyền:</span>
                <span className="font-semibold">Có</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-blue-300">
                <span className="text-gray-600">Tổng giá trị:</span>
                <span className="font-bold text-lg text-blue-600">50,000,000 đ</span>
              </div>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="mb-6 p-3 bg-gray-50 rounded">
            <label className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">19</div>
              <div>
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">
                  Tôi xác nhận đã đọc và đồng ý với <span className="text-blue-600 underline cursor-pointer">Điều khoản và Điều kiện</span> của nền tảng
                </span>
              </div>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">20</div>
              <button className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50">
                Lưu nháp
              </button>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">21</div>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Gửi Offer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">CHÚ THÍCH CHI TIẾT</h2>
        
        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❶ Nút Quay Lại</div>
            <div className="text-gray-700">
              Click → Quay về trang chi tiết sản phẩm (WF08). Nếu có thay đổi → Confirm "Bạn có muốn lưu nháp không?"
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❹❺ Product Summary Card</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Thumbnail, Tên sách, Tác giả, Seller name, Giá đề xuất của seller<br/>
              <strong>Mục đích:</strong> Remind buyer về sản phẩm đang offer
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❼ Loại Bản Quyền</div>
            <div className="text-gray-700">
              <strong>Multiple selection:</strong> Có thể chọn nhiều loại<br/>
              <strong>Validation:</strong> Phải chọn ít nhất 1 loại
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❽❾ Vùng Lãnh Thổ & Độc Quyền</div>
            <div className="text-gray-700">
              <strong>❽ Territory:</strong> Nếu chọn "Khu vực" → Hiển thị textarea để nhập chi tiết<br/>
              <strong>❾ Exclusivity:</strong> Độc quyền = chỉ buyer này được sử dụng trong vùng/thời hạn đã chọn
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❿ Thời Hạn</div>
            <div className="text-gray-700">
              <strong>Options:</strong> 1 năm, 3 năm, 5 năm, Vĩnh viễn, Tùy chỉnh<br/>
              <strong>Selected state:</strong> Border xanh đậm khi được chọn<br/>
              <strong>Nếu chọn "Khác":</strong> Hiển thị input để nhập số năm cụ thể
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓬ Loại Deal</div>
            <div className="text-gray-700">
              <strong>3 options:</strong> Mua đứt, Advance + Royalty, Chia sẻ doanh thu<br/>
              <strong>Dynamic form:</strong> Form fields thay đổi dựa trên selection:
              <ul className="list-disc ml-5 mt-1">
                <li><strong>Mua đứt:</strong> Hiển thị field ⓭ "Giá đề xuất"</li>
                <li><strong>Advance + Royalty:</strong> Hiển thị "Advance amount" + "Royalty %" + "Payment frequency"</li>
                <li><strong>Chia sẻ doanh thu:</strong> Hiển thị "Revenue share %" + "Reporting frequency"</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓭ Giá Đề Xuất</div>
            <div className="text-gray-700">
              <strong>Format:</strong> Number input với thousand separator<br/>
              <strong>Reference:</strong> Hiển thị giá đề xuất của seller để buyer tham khảo<br/>
              <strong>Validation:</strong> Phải {'>'} 0
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓮ Điều Khoản Thanh Toán</div>
            <div className="text-gray-700">
              <strong>Options:</strong> Một lần, 2 đợt, 3 đợt, Tùy chỉnh<br/>
              <strong>Nếu chọn "Tùy chỉnh":</strong> Hiển thị form dynamic để nhập schedule chi tiết (%, date)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓰ Yêu Cầu Đặc Biệt</div>
            <div className="text-gray-700">
              <strong>Optional field</strong><br/>
              <strong>Max length:</strong> 1000 ký tự<br/>
              <strong>Examples:</strong> Minimum print quantity, approval rights, marketing support, etc.
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓱ Offer Validity Date</div>
            <div className="text-gray-700">
              <strong>Default:</strong> 14 ngày kể từ ngày hiện tại<br/>
              <strong>Date picker:</strong> Buyer có thể chọn ngày khác<br/>
              <strong>Validation:</strong> Phải ≥ ngày hiện tại
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓲ Summary Box</div>
            <div className="text-gray-700">
              <strong>Auto-update:</strong> Tự động tính toán và hiển thị summary khi buyer điền form<br/>
              <strong>Hiển thị:</strong> Các điều khoản chính + Tổng giá trị
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓳ Terms Agreement Checkbox</div>
            <div className="text-gray-700">
              <strong>Required:</strong> Phải check trước khi gửi offer<br/>
              <strong>Link "Điều khoản":</strong> Click → Mở modal hoặc trang mới với T&C đầy đủ
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓴㉑ Action Buttons</div>
            <div className="text-gray-700">
              <strong>⓴ Lưu nháp:</strong> Lưu với status="draft", buyer có thể quay lại edit sau<br/>
              <strong>㉑ Gửi Offer:</strong>
              <ol className="list-decimal ml-5 mt-1">
                <li>Validate tất cả required fields</li>
                <li>Nếu có lỗi → Scroll đến field đầu tiên có lỗi + Hiển thị error messages</li>
                <li>Nếu valid → Gửi POST request đến API</li>
                <li>Loading state: Button disabled + Spinner</li>
                <li>Success:
                  <ul className="list-disc ml-5">
                    <li>Hiển thị success modal: "Offer đã được gửi thành công!"</li>
                    <li>Gửi notification cho seller</li>
                    <li>Gửi email confirmation cho buyer</li>
                    <li>Redirect đến trang "My Offers" (dashboard buyer) sau 3s</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 BUSINESS LOGIC</div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Buyer không thể gửi offer cho sản phẩm của chính mình (nếu cũng là seller)</li>
            <li>• Một buyer có thể gửi nhiều offers cho 1 sản phẩm (nếu offer trước bị reject hoặc expired)</li>
            <li>• Offer có status: Draft, Pending (đang chờ seller phản hồi), Accepted, Rejected, Expired, Negotiating</li>
            <li>• Sau expiry date, offer tự động chuyển status="expired"</li>
            <li>• Auto-save draft mỗi 30s để tránh mất dữ liệu</li>
          </ul>
        </div>
      </div>
    </div>
  );
}