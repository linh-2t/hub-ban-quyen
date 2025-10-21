import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/product')({
  component: ProductDetailWireframe,
})

export default function ProductDetailWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF08 - CHI TIẾT SẢN PHẨM (PUBLIC)
      </h1>
      
      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
              <div className="text-sm font-semibold">Logo</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <input type="text" className="border border-gray-300 rounded px-3 py-1 text-xs w-64" placeholder="Tìm kiếm..." />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
              <div className="text-xs">Marketplace</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
              <div className="text-xs">Đăng nhập</div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="p-3 bg-gray-50 border-b border-gray-300">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
            <span>Trang chủ</span>
            <span>›</span>
            <span>Kinh tế</span>
            <span>›</span>
            <span className="font-semibold">Nghệ thuật lãnh đạo</span>
          </div>
        </div>

        <div className="flex">
          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Left: Image & Preview */}
              <div className="col-span-1">
                <div className="sticky top-6">
                  <div className="border-2 border-gray-300 rounded-lg overflow-hidden mb-4">
                    <div className="flex items-center justify-center h-80 bg-gray-200">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm w-full">
                      👁️ Xem Preview PDF
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Product Info */}
              <div className="col-span-2">
                {/* Title & Basic Info */}
                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">8</div>
                    <h1 className="text-2xl font-bold">Nghệ Thuật Lãnh Đạo</h1>
                  </div>
                  <div className="flex items-center gap-3 text-sm ml-8">
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
                      <span className="text-gray-600">Tác giả:</span>
                      <span className="font-semibold">Dale Carnegie</span>
                    </div>
                    <span className="text-gray-400">|</span>
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">10</div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Sách in</span>
                    </div>
                  </div>
                </div>

                {/* Seller Info */}
                <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">11</div>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">NXB Trẻ</div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded">✓ Đã xác thực</span>
                          <span>• 24 sản phẩm</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">12</div>
                      <button className="text-xs text-blue-600 underline">Xem profile</button>
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">13</div>
                    <div className="font-bold">Mô tả ngắn</div>
                  </div>
                  <p className="text-sm text-gray-700 ml-7">
                    Cuốn sách kinh điển về kỹ năng lãnh đạo và quản lý con người. 
                    Dale Carnegie chia sẻ những nguyên tắc vàng giúp bạn trở thành người lãnh đạo xuất sắc.
                  </p>
                </div>

                {/* Metadata */}
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
                    <div className="font-bold text-sm">Thông tin chi tiết</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm ml-7">
                    <div>
                      <span className="text-gray-600">ISBN:</span>
                      <span className="font-semibold ml-2">978-3-16-148410-0</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Năm XB:</span>
                      <span className="font-semibold ml-2">2020</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Ngôn ngữ:</span>
                      <span className="font-semibold ml-2">Tiếng Việt</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Số trang:</span>
                      <span className="font-semibold ml-2">320 trang</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-600">Thể loại:</span>
                      <span className="font-semibold ml-2">Kinh tế - Quản lý</span>
                    </div>
                  </div>
                </div>

                {/* Copyright Info */}
                <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">15</div>
                    <div className="font-bold">Thông tin bản quyền</div>
                  </div>
                  <div className="space-y-2 text-sm ml-8">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-600 w-32">Loại bản quyền:</span>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-white border border-blue-300 rounded text-xs">In ấn</span>
                        <span className="px-2 py-1 bg-white border border-blue-300 rounded text-xs">Phát hành số</span>
                        <span className="px-2 py-1 bg-white border border-blue-300 rounded text-xs">Dịch thuật</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 w-32">Vùng lãnh thổ:</span>
                      <span className="font-semibold">Việt Nam</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 w-32">Tình trạng:</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">Độc quyền</span>
                    </div>
                  </div>
                </div>

                {/* Pricing Info */}
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">16</div>
                    <div className="font-bold">Giá đề xuất</div>
                  </div>
                  <div className="flex items-center justify-between ml-8">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">50,000,000 đ</div>
                      <div className="text-xs text-gray-600">Giá có thể thương lượng</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      <div>Loại deal: <span className="font-semibold">Mua đứt</span></div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">17</div>
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                      💼 Gửi Offer
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">18</div>
                    <button className="px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50">
                      ❤️
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">19</div>
                    <button className="px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50">
                      🔗
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-8">
              <div className="border-b-2 border-gray-300 flex gap-6 mb-4">
                <div className="flex items-center gap-2 pb-2 border-b-2 border-blue-600 -mb-0.5">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">20</div>
                  <div className="font-semibold text-blue-600">Mô tả chi tiết</div>
                </div>
                <div className="flex items-center gap-2 pb-2 text-gray-600 cursor-pointer">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">21</div>
                  <div>Điều khoản đặc biệt</div>
                </div>
              </div>

              {/* Tab Content */}
              <div className="prose max-w-none">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">22</div>
                  <div className="text-sm text-gray-700">
                    <p className="mb-3">
                      "Nghệ thuật lãnh đạo" là một trong những cuốn sách kinh điển nhất về kỹ năng lãnh đạo 
                      và quản lý con người. Dale Carnegie, tác giả nổi tiếng với "Đắc nhân tâm", 
                      đã tổng hợp những nguyên tắc vàng giúp người đọc phát triển khả năng lãnh đạo.
                    </p>
                    <p className="mb-3">
                      Cuốn sách tập trung vào việc xây dựng mối quan hệ tốt với nhân viên, 
                      khuyến khích họ phát huy tối đa năng lực...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">23</div>
                <div className="text-sm font-semibold">Tags:</div>
              </div>
              <div className="flex gap-2 flex-wrap ml-7">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">lãnh đạo</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">quản lý</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">kỹ năng mềm</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">kinh doanh</span>
              </div>
            </div>
          </div>

          {/* Sidebar - Related Products */}
          <div className="w-80 border-l-2 border-gray-300 p-6 bg-gray-50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">24</div>
              <div className="font-bold">Sản phẩm liên quan</div>
            </div>

            <div className="space-y-4">
              {[25, 26, 27].map(num => (
                <div key={num} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition cursor-pointer">
                  <div className="flex gap-3">
                    <div className="w-16 h-20 bg-gray-200 flex items-center justify-center rounded flex-shrink-0">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{num}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold mb-1 truncate">Tên sách liên quan</div>
                      <div className="text-xs text-gray-600 mb-1">Tác giả</div>
                      <div className="text-xs font-semibold text-blue-600">25,000,000 đ</div>
                    </div>
                  </div>
                </div>
              ))}
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
            <div className="text-gray-700">Click → Quay về trang chủ</div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❷ Search Bar</div>
            <div className="text-gray-700">Tìm kiếm sản phẩm khác → Chuyển đến trang marketplace với kết quả tìm kiếm</div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❺ Breadcrumb</div>
            <div className="text-gray-700">Navigation path: Trang chủ › Thể loại › Tên sản phẩm. Click vào từng level để navigate</div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❻ Product Image</div>
            <div className="text-gray-700">Thumbnail từ PDF page 1. Click để xem ảnh lớn hơn (lightbox)</div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❼ Button "Xem Preview PDF"</div>
            <div className="text-gray-700">Click → Mở modal PDF viewer cho phép xem một số trang đầu (VD: 5-10 trang đầu), không cho download</div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓫⓬ Seller Info Card</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Avatar, Tên seller, Badge xác thực, Số sản phẩm<br/>
              <strong>⓬ Link "Xem profile":</strong> Click → Đi đến trang profile seller (hiển thị tất cả sản phẩm của seller)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓯ Thông Tin Bản Quyền</div>
            <div className="text-gray-700">
              Hiển thị các loại bản quyền đang available, vùng lãnh thổ, và tình trạng độc quyền
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓰ Giá Đề Xuất</div>
            <div className="text-gray-700">
              Hiển thị giá reference từ seller. Note: "Giá có thể thương lượng"
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓱ Button "Gửi Offer"</div>
            <div className="text-gray-700">
              <strong>Chức năng chính:</strong> Tạo offer để mua bản quyền<br/>
              <strong>Tương tác:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Nếu chưa login → Redirect đến trang login (WF03)</li>
                <li>Nếu đã login nhưng chưa verify KYC → Hiển thị message "Vui lòng hoàn tất KYC để gửi offer"</li>
                <li>Nếu đã verify → Chuyển đến trang tạo offer (WF10)</li>
                <li>Nếu là seller của sản phẩm này → Disable button + Message "Bạn không thể gửi offer cho sản phẩm của mình"</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓲ Button Yêu Thích (Wishlist)</div>
            <div className="text-gray-700">
              Click → Add/remove từ wishlist. Yêu cầu login. Icon đổi từ outline sang filled khi được add
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓳ Button Chia Sẻ</div>
            <div className="text-gray-700">
              Click → Mở popup chia sẻ (Copy link, Facebook, Twitter, LinkedIn, Email)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓴㉑ Tabs</div>
            <div className="text-gray-700">
              <strong>⓴ Mô tả chi tiết:</strong> Active tab, hiển thị full description (rich text)<br/>
              <strong>㉑ Điều khoản đặc biệt:</strong> Click để switch, hiển thị special terms từ seller (nếu có)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">㉓ Tags</div>
            <div className="text-gray-700">
              Click vào tag → Tìm kiếm sản phẩm khác có cùng tag
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">㉔㉕㉖㉗ Sản Phẩm Liên Quan</div>
            <div className="text-gray-700">
              <strong>Logic:</strong> Hiển thị sản phẩm cùng category hoặc cùng seller<br/>
              <strong>Tương tác:</strong> Click vào card → Chuyển đến trang chi tiết sản phẩm đó
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 LƯU Ý</div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>SEO:</strong> Meta tags, Open Graph cho social sharing</li>
            <li>• <strong>Analytics:</strong> Track views, time on page, CTA clicks</li>
            <li>• <strong>Mobile responsive:</strong> Sidebar chuyển xuống dưới trên mobile</li>
            <li>• <strong>Loading:</strong> Skeleton loader cho image và content</li>
          </ul>
        </div>
      </div>
    </div>
  );
}