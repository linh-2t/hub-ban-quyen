import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/seller/add-product')({
  component: UploadProductWireframe,
})

export default function UploadProductWireframe() {
  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF06 - THÊM SẢN PHẨM MỚI (SELLER)
      </h1>
      
      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
            <div className="text-sm">← Quay lại</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <div className="text-xs">🔔</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
              <div className="text-xs">Nguyễn Văn A ▼</div>
            </div>
          </div>
        </div>

        <div className="p-8 max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-6 text-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">4</div>
            <div className="text-2xl font-bold">Thêm Sản Phẩm Mới</div>
            <div className="text-sm text-gray-600 mt-2">Upload catalog và điền thông tin sản phẩm</div>
          </div>

          {/* Upload Method Selection */}
          <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
              <div className="font-bold">Chọn phương thức thêm sản phẩm:</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-blue-600 bg-white p-4 rounded-lg cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
                  <input type="radio" name="method" checked readOnly />
                  <div className="font-semibold">📄 Upload PDF Catalog</div>
                </div>
                <div className="text-xs text-gray-600 ml-7">Upload file PDF mô tả sản phẩm</div>
              </div>
              <div className="border-2 border-gray-300 bg-white p-4 rounded-lg cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
                  <input type="radio" name="method" readOnly />
                  <div className="font-semibold">📊 Import từ Excel</div>
                </div>
                <div className="text-xs text-gray-600 ml-7">Import thông tin từ file Excel</div>
              </div>
            </div>
          </div>

          {/* PDF Upload Section */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
              <div className="font-bold">1. Upload PDF Catalog</div>
              <span className="text-red-500">*</span>
            </div>
            <div className="border-2 border-dashed border-blue-400 rounded-lg p-8 text-center bg-blue-50 hover:bg-blue-100 cursor-pointer">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
                <div className="text-5xl">📄</div>
              </div>
              <div className="text-lg font-semibold mb-2">Kéo thả file PDF vào đây</div>
              <div className="text-sm text-gray-600 mb-3">hoặc click để chọn file</div>
              <div className="text-xs text-gray-500">PDF (Max 50MB)</div>
            </div>
            <div className="mt-3 text-xs text-gray-600 ml-8">
              💡 <strong>Lưu ý:</strong> File PDF này sẽ được sử dụng làm preview cho người mua. 
              Trang đầu tiên sẽ được tự động tạo thumbnail.
            </div>
          </div>

          {/* Product Information Form */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">10</div>
              <div className="font-bold">2. Thông Tin Sản Phẩm</div>
            </div>

            <div className="space-y-4">
              {/* Product Name */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">11</div>
                  <label className="text-sm font-semibold">Tên sách <span className="text-red-500">*</span></label>
                </div>
                <input type="text" className="w-full border-2 border-gray-300 rounded p-2 text-sm" placeholder="VD: Nghệ thuật lãnh đạo" />
              </div>

              {/* Author */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">12</div>
                  <label className="text-sm font-semibold">Tác giả <span className="text-red-500">*</span></label>
                </div>
                <input type="text" className="w-full border-2 border-gray-300 rounded p-2 text-sm" placeholder="VD: Dale Carnegie" />
              </div>

              {/* Product Type & Category */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">13</div>
                    <label className="text-sm font-semibold">Loại sản phẩm <span className="text-red-500">*</span></label>
                  </div>
                  <select className="w-full border-2 border-gray-300 rounded p-2 text-sm">
                    <option>Chọn loại...</option>
                    <option>Sách in</option>
                    <option>Sách nói</option>
                    <option>E-book</option>
                    <option>Tài liệu</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
                    <label className="text-sm font-semibold">Thể loại <span className="text-red-500">*</span></label>
                  </div>
                  <select className="w-full border-2 border-gray-300 rounded p-2 text-sm">
                    <option>Chọn thể loại...</option>
                    <option>Văn học</option>
                    <option>Kinh tế</option>
                    <option>Khoa học</option>
                    <option>Giáo dục</option>
                    <option>Tâm lý - Kỹ năng sống</option>
                  </select>
                </div>
              </div>

              {/* ISBN & Year */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">15</div>
                    <label className="text-sm font-semibold">ISBN (optional)</label>
                  </div>
                  <input type="text" className="w-full border-2 border-gray-300 rounded p-2 text-sm" placeholder="978-3-16-148410-0" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">16</div>
                    <label className="text-sm font-semibold">Năm xuất bản</label>
                  </div>
                  <input type="number" className="w-full border-2 border-gray-300 rounded p-2 text-sm" placeholder="2024" />
                </div>
              </div>

              {/* Publisher & Language */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">17</div>
                    <label className="text-sm font-semibold">Nhà xuất bản gốc</label>
                  </div>
                  <input type="text" className="w-full border-2 border-gray-300 rounded p-2 text-sm" placeholder="VD: Penguin Books" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">18</div>
                    <label className="text-sm font-semibold">Ngôn ngữ <span className="text-red-500">*</span></label>
                  </div>
                  <select className="w-full border-2 border-gray-300 rounded p-2 text-sm">
                    <option>Tiếng Việt</option>
                    <option>Tiếng Anh</option>
                    <option>Khác</option>
                  </select>
                </div>
              </div>

              {/* Pages & Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">19</div>
                    <label className="text-sm font-semibold">Số trang (cho sách in/tài liệu)</label>
                  </div>
                  <input type="number" className="w-full border-2 border-gray-300 rounded p-2 text-sm" placeholder="320" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">20</div>
                    <label className="text-sm font-semibold">Thời lượng (cho sách nói)</label>
                  </div>
                  <input type="text" className="w-full border-2 border-gray-300 rounded p-2 text-sm" placeholder="HH:MM:SS (05:30:00)" />
                </div>
              </div>

              {/* Short Description */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">21</div>
                  <label className="text-sm font-semibold">Mô tả ngắn <span className="text-red-500">*</span></label>
                </div>
                <textarea 
                  className="w-full border-2 border-gray-300 rounded p-2 text-sm h-20"
                  placeholder="Tóm tắt nội dung sách (tối đa 500 ký tự)"
                ></textarea>
                <div className="text-xs text-gray-500 text-right">0 / 500</div>
              </div>

              {/* Detailed Description */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">22</div>
                  <label className="text-sm font-semibold">Mô tả chi tiết</label>
                </div>
                <div className="border-2 border-gray-300 rounded">
                  <div className="bg-gray-100 p-2 border-b border-gray-300 flex gap-2 text-xs">
                    <button className="px-2 py-1 bg-white border rounded">B</button>
                    <button className="px-2 py-1 bg-white border rounded">I</button>
                    <button className="px-2 py-1 bg-white border rounded">U</button>
                    <button className="px-2 py-1 bg-white border rounded">• List</button>
                  </div>
                  <textarea 
                    className="w-full p-3 text-sm h-32 border-none"
                    placeholder="Mô tả chi tiết về nội dung, tác giả, điểm nổi bật của sách..."
                  ></textarea>
                </div>
              </div>

              {/* Keywords */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">23</div>
                  <label className="text-sm font-semibold">Keywords/Tags</label>
                </div>
                <input type="text" className="w-full border-2 border-gray-300 rounded p-2 text-sm" placeholder="lãnh đạo, quản lý, kỹ năng mềm (phân cách bằng dấu phẩy)" />
                <div className="text-xs text-gray-500 mt-1 ml-7">Giúp người mua tìm kiếm sản phẩm dễ dàng hơn</div>
              </div>
            </div>
          </div>

          {/* Copyright Information */}
          <div className="mb-6 p-5 border-2 border-blue-300 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">24</div>
              <div className="font-bold">3. Thông Tin Bản Quyền</div>
            </div>

            <div className="space-y-4">
              {/* Copyright Type */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">25</div>
                  <label className="text-sm font-semibold">Loại bản quyền đang sở hữu <span className="text-red-500">*</span></label>
                </div>
                <div className="space-y-2 ml-7">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">Toàn bộ bản quyền</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
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
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">26</div>
                  <label className="text-sm font-semibold">Vùng lãnh thổ <span className="text-red-500">*</span></label>
                </div>
                <select className="w-full border-2 border-gray-300 rounded p-2 text-sm">
                  <option>Chọn vùng...</option>
                  <option>Việt Nam</option>
                  <option>Toàn cầu</option>
                  <option>Khu vực (Đông Nam Á, Châu Á, etc.)</option>
                </select>
              </div>

              {/* Exclusivity */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">27</div>
                  <label className="text-sm font-semibold">Tình trạng bản quyền <span className="text-red-500">*</span></label>
                </div>
                <select className="w-full border-2 border-gray-300 rounded p-2 text-sm">
                  <option>Độc quyền</option>
                  <option>Phi độc quyền</option>
                </select>
              </div>

              {/* Expiry Date */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">28</div>
                  <label className="text-sm font-semibold">Ngày hết hạn bản quyền hiện tại (nếu có)</label>
                </div>
                <input type="date" className="w-full border-2 border-gray-300 rounded p-2 text-sm" />
              </div>
            </div>
          </div>

          {/* Pricing Information */}
          <div className="mb-6 p-5 border-2 border-gray-300 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">29</div>
              <div className="font-bold">4. Giá & Điều Khoản</div>
            </div>

            <div className="space-y-4">
              {/* Suggested Price */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">30</div>
                  <label className="text-sm font-semibold">Giá đề xuất (VND) <span className="text-red-500">*</span></label>
                </div>
                <input type="text" className="w-full border-2 border-gray-300 rounded p-2 text-sm" placeholder="50,000,000" />
                <div className="text-xs text-gray-500 mt-1 ml-7">Đây chỉ là giá tham khảo. Giá thực tế sẽ được thương lượng với buyer.</div>
              </div>

              {/* Deal Type */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">31</div>
                  <label className="text-sm font-semibold">Loại deal ưu tiên</label>
                </div>
                <select className="w-full border-2 border-gray-300 rounded p-2 text-sm">
                  <option>Mua đứt một lần</option>
                  <option>Advance + Royalty</option>
                  <option>Chia sẻ doanh thu</option>
                  <option>Linh hoạt (có thể thương lượng)</option>
                </select>
              </div>

              {/* Special Terms */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">32</div>
                  <label className="text-sm font-semibold">Ghi chú điều khoản đặc biệt (optional)</label>
                </div>
                <textarea 
                  className="w-full border-2 border-gray-300 rounded p-2 text-sm h-20"
                  placeholder="VD: Yêu cầu tối thiểu 10,000 bản in, thời hạn độc quyền 3 năm, etc."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">33</div>
              <button className="flex-1 border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50">
                Lưu nháp
              </button>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">34</div>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Gửi kiểm duyệt
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation - Tiếp tục trong comment do giới hạn độ dài */}
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">CHÚ THÍCH CHI TIẾT</h2>
        
        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❶ Nút Quay Lại</div>
            <div className="text-gray-700">Click → Quay về dashboard seller (WF05), có confirm "Bạn có muốn lưu nháp không?" nếu có thay đổi</div>
          </div>
          
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❽❾ Upload PDF Area</div>
            <div className="text-gray-700">
              <strong>Tương tác:</strong> Click hoặc drag-drop PDF → Upload → Hiển thị preview + File name + Size<br/>
              <strong>Validation:</strong> Max 50MB, chỉ PDF, tự động tạo thumbnail từ page 1
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓫-㉓ Form Fields</div>
            <div className="text-gray-700">
              Tất cả fields có validation realtime. Required fields (*) hiển thị error nếu bỏ trống khi submit.
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">㉔-㉘ Thông Tin Bản Quyền</div>
            <div className="text-gray-700">
              <strong>㉕ Checkboxes:</strong> Có thể chọn nhiều loại bản quyền<br/>
              <strong>㉖ Territory:</strong> Nếu chọn "Khu vực" → Hiển thị textarea để nhập chi tiết<br/>
              <strong>㉘ Expiry:</strong> Optional, date picker
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">㉙-㉜ Giá & Điều Khoản</div>
            <div className="text-gray-700">
              <strong>㉚ Giá:</strong> Number format với thousand separator. Không bắt buộc nhưng khuyến khích nhập<br/>
              <strong>㉛ Deal type:</strong> Seller chọn loại ưu tiên, buyer có thể đề xuất khác
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">㉝㉞ Action Buttons</div>
            <div className="text-gray-700">
              <strong>㉝ Lưu nháp:</strong> Lưu với status="draft", có thể edit sau<br/>
              <strong>㉞ Gửi kiểm duyệt:</strong> Validate all required → Submit với status="pending_approval" → Moderator review
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
