import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/search')({
  component: MarketplaceWireframe,
})

export default function MarketplaceWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF09 - MARKETPLACE / TÌM KIẾM SẢN PHẨM
      </h1>
      
      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                <div className="text-sm font-semibold">Logo</div>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                <input type="text" className="border-2 border-gray-300 rounded px-3 py-2 text-sm w-96" placeholder="Tìm sách, tác giả, ISBN..." />
                <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">Tìm kiếm</button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                <div className="text-xs">🔔 (5)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                <div className="text-xs">Nguyễn Văn B ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar Filters */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50 p-4">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                  <div className="font-bold text-sm">Bộ lọc</div>
                </div>
                <button className="text-xs text-blue-600 underline">Xóa tất cả</button>
              </div>

              {/* Category Filter */}
              <div className="mb-4 pb-4 border-b border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
                  <div className="font-semibold text-xs">Thể loại</div>
                </div>
                <div className="space-y-1 ml-7 text-xs">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Văn học (45)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked className="w-3 h-3" />
                    <span className="font-semibold">Kinh tế (32)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Khoa học (28)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Giáo dục (19)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Tâm lý (24)</span>
                  </label>
                  <button className="text-blue-600 underline">Xem thêm</button>
                </div>
              </div>

              {/* Product Type Filter */}
              <div className="mb-4 pb-4 border-b border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
                  <div className="font-semibold text-xs">Loại sản phẩm</div>
                </div>
                <div className="space-y-1 ml-7 text-xs">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Sách in (120)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Sách nói (45)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>E-book (89)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Tài liệu (34)</span>
                  </label>
                </div>
              </div>

              {/* Copyright Type Filter */}
              <div className="mb-4 pb-4 border-b border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
                  <div className="font-semibold text-xs">Loại bản quyền</div>
                </div>
                <div className="space-y-1 ml-7 text-xs">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>In ấn</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Phát hành số</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Chuyển thể</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Dịch thuật</span>
                  </label>
                </div>
              </div>

              {/* Language Filter */}
              <div className="mb-4 pb-4 border-b border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
                  <div className="font-semibold text-xs">Ngôn ngữ</div>
                </div>
                <div className="space-y-1 ml-7 text-xs">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Tiếng Việt (180)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Tiếng Anh (95)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-3 h-3" />
                    <span>Khác (13)</span>
                  </label>
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-4 pb-4 border-b border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">10</div>
                  <div className="font-semibold text-xs">Khoảng giá (VND)</div>
                </div>
                <div className="ml-7 space-y-2">
                  <input type="range" min="0" max="200000000" className="w-full" />
                  <div className="flex justify-between text-xs">
                    <span>0đ</span>
                    <span>200M</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <input type="text" placeholder="Từ" className="w-20 border rounded px-2 py-1" />
                    <span>-</span>
                    <input type="text" placeholder="Đến" className="w-20 border rounded px-2 py-1" />
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">11</div>
                <button className="w-full bg-blue-600 text-white py-2 rounded text-sm font-semibold">
                  Áp dụng lọc
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Search Results Header */}
            <div className="mb-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">12</div>
                <div className="text-sm">
                  Tìm thấy <strong>32 sản phẩm</strong> phù hợp
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">13</div>
                  <div className="text-xs">Sắp xếp:</div>
                  <select className="border border-gray-300 rounded px-2 py-1 text-xs">
                    <option>Mới nhất</option>
                    <option>Tên A-Z</option>
                    <option>Tên Z-A</option>
                    <option>Giá thấp đến cao</option>
                    <option>Giá cao đến thấp</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
                  <button className="px-2 py-1 bg-blue-600 text-white rounded">⊞</button>
                  <button className="px-2 py-1 border border-gray-300 rounded">☰</button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="mb-4 flex items-center gap-2 flex-wrap">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">15</div>
              <span className="text-xs text-gray-600">Đang lọc:</span>
              <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                <span>Kinh tế</span>
                <button className="ml-1">×</button>
              </div>
              <button className="text-xs text-blue-600 underline">Xóa tất cả</button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[16, 17, 18, 19, 20, 21, 22, 23].map(num => (
                <div key={num} className="border-2 border-gray-300 rounded-lg hover:shadow-lg transition cursor-pointer">
                  <div className="h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{num}</div>
                  </div>
                  <div className="p-3">
                    <div className="text-sm font-semibold mb-1 truncate">Nghệ thuật lãnh đạo</div>
                    <div className="text-xs text-gray-600 mb-1">Dale Carnegie</div>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">Sách in</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold text-blue-600">50M đ</div>
                      <button className="text-xs text-blue-600 underline">Chi tiết</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">24</div>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">‹ Trước</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
              <span className="px-2">...</span>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">8</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Sau ›</button>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">CHÚ THÍCH CHI TIẾT</h2>
        
        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❶ Logo</div>
            <div className="text-gray-700">Click → Quay về trang chủ (WF01)</div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❷ Search Bar</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Full-text search<br/>
              <strong>Tìm kiếm trên:</strong> Tên sách, Tác giả, ISBN, Mô tả, Keywords<br/>
              <strong>Tương tác:</strong> 
              <ul className="list-disc ml-5 mt-1">
                <li>Nhập từ khóa → Enter hoặc click button "Tìm kiếm"</li>
                <li>Auto-suggest dropdown khi typing (hiển thị 5 gợi ý)</li>
                <li>Submit → Reload trang với query parameters</li>
              </ul>
              <strong>Backend:</strong> Elasticsearch hoặc PostgreSQL full-text search
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❸❹ Header User Menu</div>
            <div className="text-gray-700">
              <strong>❸ Notifications:</strong> Badge với số unread notifications<br/>
              <strong>❹ User dropdown:</strong> Click → Menu (Dashboard, Profile, Logout)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❺ Bộ Lọc - Header</div>
            <div className="text-gray-700">
              <strong>Button "Xóa tất cả":</strong> Click → Reset tất cả filters về default → Reload results
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❻ Filter Thể Loại</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Checkboxes với số lượng sản phẩm trong ngoặc<br/>
              <strong>Tương tác:</strong> Check/uncheck → Auto-apply filter (hoặc chờ click button ⓫)<br/>
              <strong>Button "Xem thêm":</strong> Expand để hiển thị tất cả categories
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❼❽❾ Các Filters Khác</div>
            <div className="text-gray-700">
              <strong>❷ Loại sản phẩm:</strong> Sách in, Sách nói, E-book, Tài liệu<br/>
              <strong>❸ Loại bản quyền:</strong> In ấn, Phát hành số, Chuyển thể, Dịch thuật<br/>
              <strong>❹ Ngôn ngữ:</strong> Tiếng Việt, Tiếng Anh, Khác<br/>
              <strong>Tất cả:</strong> Multiple selection (checkboxes)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❿ Filter Khoảng Giá</div>
            <div className="text-gray-700">
              <strong>Slider:</strong> Drag để chọn range<br/>
              <strong>Input boxes:</strong> Nhập chính xác giá từ-đến<br/>
              <strong>Format:</strong> VND, auto format với thousand separator
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓫ Button "Áp Dụng Lọc"</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Apply tất cả filters đã chọn<br/>
              <strong>Tương tác:</strong> Click → Gửi request với filter params → Reload product grid<br/>
              <strong>Loading state:</strong> Button disabled + Spinner
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓬ Results Counter</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> "Tìm thấy <strong>X sản phẩm</strong> phù hợp"<br/>
              <strong>Dynamic:</strong> Update khi filter thay đổi
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓭ Dropdown Sắp Xếp</div>
            <div className="text-gray-700">
              <strong>Options:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Mới nhất (default - created_at DESC)</li>
                <li>Tên A-Z (title ASC)</li>
                <li>Tên Z-A (title DESC)</li>
                <li>Giá thấp đến cao (price ASC)</li>
                <li>Giá cao đến thấp (price DESC)</li>
              </ul>
              <strong>Tương tác:</strong> Select option → Auto reload với sort parameter
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓮ View Toggle Buttons</div>
            <div className="text-gray-700">
              <strong>⊞ Grid view:</strong> Hiển thị dạng grid 4 columns (current state - active)<br/>
              <strong>☰ List view:</strong> Hiển thị dạng list với thông tin chi tiết hơn<br/>
              <strong>Tương tác:</strong> Click → Switch layout, save preference vào localStorage
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓯ Active Filters Tags</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Các filters đang active dạng pills/tags<br/>
              <strong>Button ×:</strong> Click → Remove filter đó → Reload results<br/>
              <strong>Link "Xóa tất cả":</strong> Clear all active filters
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓰-㉓ Product Cards</div>
            <div className="text-gray-700">
              <strong>Hiển thị mỗi card:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Thumbnail image (từ PDF page 1)</li>
                <li>Tên sách</li>
                <li>Tác giả</li>
                <li>Badge loại sản phẩm</li>
                <li>Giá đề xuất (format: XXM đ)</li>
                <li>Button "Chi tiết"</li>
              </ul>
              <strong>Hover effect:</strong> Shadow tăng, scale 1.02<br/>
              <strong>Click:</strong> Toàn bộ card clickable → Chuyển đến WF08 (chi tiết sản phẩm)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">㉔ Pagination</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Buttons page numbers với ellipsis (...)<br/>
              <strong>Active page:</strong> Background xanh, text trắng<br/>
              <strong>Tương tác:</strong> Click page number → Load page đó với ?page=X<br/>
              <strong>Items per page:</strong> 20 sản phẩm (có thể customize)<br/>
              <strong>Keyboard:</strong> Hỗ trợ arrow keys để navigate
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 KỸ THUẬT</div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>URL structure:</strong> /marketplace?q=search&category=kinh-te&page=1</li>
            <li>• <strong>Filter state:</strong> Sync với URL query params để shareable</li>
            <li>• <strong>Performance:</strong> 
              <ul className="list-disc ml-5">
                <li>Debounce search input (300ms)</li>
                <li>Cache results (5 minutes)</li>
                <li>Lazy load images (intersection observer)</li>
              </ul>
            </li>
            <li>• <strong>Empty state:</strong> Khi không có kết quả → "Không tìm thấy sản phẩm phù hợp. Thử điều chỉnh bộ lọc?"</li>
          </ul>
        </div>
      </div>
    </div>
  );
}