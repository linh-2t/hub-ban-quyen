import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/landing')({
  component: LandingPageWireframe,
})

export default function LandingPageWireframe() {
  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF01 - TRANG CHỦ (LANDING PAGE)
      </h1>
      
      {/* Wireframe */}
      <div className="border-4 border-gray-800 mb-8">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
            <div className="text-sm font-semibold">Logo + Tên Platform</div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
            <div className="text-xs">Tìm kiếm</div>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
            <div className="text-xs">Về chúng tôi</div>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
            <div className="text-xs">Đăng nhập</div>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
            <div className="text-xs">Đăng ký</div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 text-center border-b-2 border-gray-800">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">6</div>
          <div className="text-xl font-bold mb-2">Tiêu đề chính (Headline)</div>
          <div className="text-sm text-gray-600 mb-4">Mô tả ngắn về nền tảng</div>
          <div className="flex gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
              <div className="px-4 py-2 bg-blue-600 text-white rounded text-xs">Bắt đầu bán</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
              <div className="px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded text-xs">Tìm bản quyền</div>
            </div>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="p-6 border-b-2 border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
            <div className="font-bold">Danh mục nổi bật</div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[10, 11, 12, 13].map(num => (
              <div key={num} className="border-2 border-gray-400 p-4 text-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">{num}</div>
                <div className="text-xs">Icon + Tên danh mục</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="p-6 border-b-2 border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
            <div className="font-bold">Sản phẩm mới nhất</div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[15, 16, 17, 18].map(num => (
              <div key={num} className="border-2 border-gray-400">
                <div className="h-32 bg-gray-200 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{num}</div>
                </div>
                <div className="p-2 text-xs">
                  <div className="font-semibold">Tên sách</div>
                  <div className="text-gray-600">Tác giả</div>
                  <div className="text-gray-600">Loại bản quyền</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="p-6 bg-gray-50 border-b-2 border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">19</div>
            <div className="font-bold">Cách thức hoạt động</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[20, 21, 22].map(num => (
              <div key={num} className="text-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">{num}</div>
                <div className="text-xs font-semibold">Bước {num - 19}</div>
                <div className="text-xs text-gray-600">Mô tả ngắn</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-800 text-white">
          <div className="grid grid-cols-4 gap-4 text-xs">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">23</div>
                <div className="font-bold">Về chúng tôi</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">24</div>
                <div className="font-bold">Hỗ trợ</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">25</div>
                <div className="font-bold">Điều khoản</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">26</div>
                <div className="font-bold">Liên hệ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded">
        <h2 className="text-xl font-bold mb-4 text-blue-800">CHÚ THÍCH CHI TIẾT</h2>
        
        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❶ Logo + Tên Platform</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Hiển thị logo và tên thương hiệu của nền tảng<br/>
              <strong>Tương tác:</strong> Click để quay về trang chủ<br/>
              <strong>Vị trí:</strong> Góc trên bên trái header
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❷ Thanh Tìm Kiếm</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Ô input cho phép tìm kiếm sách, tác giả, ISBN<br/>
              <strong>Tương tác:</strong> Nhập từ khóa → Enter hoặc click icon tìm kiếm → Chuyển đến trang kết quả tìm kiếm (WF09)<br/>
              <strong>Placeholder:</strong> "Tìm kiếm sách, tác giả, ISBN..."
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❸ Link "Về chúng tôi"</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Dẫn đến trang giới thiệu về nền tảng<br/>
              <strong>Tương tác:</strong> Click → Chuyển đến trang About Us<br/>
              <strong>Nội dung:</strong> Giới thiệu về công ty, sứ mệnh, tầm nhìn
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❹ Nút "Đăng Nhập"</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Mở form đăng nhập<br/>
              <strong>Tương tác:</strong> Click → Chuyển đến trang đăng nhập (WF03)<br/>
              <strong>Style:</strong> Text link hoặc button outline
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❺ Nút "Đăng Ký"</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Mở form đăng ký tài khoản<br/>
              <strong>Tương tác:</strong> Click → Chuyển đến trang đăng ký (WF02)<br/>
              <strong>Style:</strong> Button primary (nổi bật hơn nút đăng nhập)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❻ Hero Section - Tiêu Đề Chính</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Hiển thị value proposition chính của nền tảng<br/>
              <strong>Nội dung:</strong> VD: "Nền tảng mua bán bản quyền sách hàng đầu Việt Nam"<br/>
              <strong>Style:</strong> Font size lớn, nổi bật, có thể có animation
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❼ CTA "Bắt Đầu Bán"</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Dành cho người muốn bán bản quyền<br/>
              <strong>Tương tác:</strong> Click → Chuyển đến trang đăng ký với role Seller được chọn sẵn<br/>
              <strong>Style:</strong> Button primary, màu nổi bật
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❽ CTA "Tìm Bản Quyền"</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Dành cho người muốn mua bản quyền<br/>
              <strong>Tương tác:</strong> Click → Chuyển đến trang tìm kiếm/marketplace (WF09)<br/>
              <strong>Style:</strong> Button secondary
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❾ Tiêu Đề "Danh Mục Nổi Bật"</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Giới thiệu các danh mục sản phẩm chính<br/>
              <strong>Hiển thị:</strong> Heading level 2
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❿⓫⓬⓭ Thẻ Danh Mục</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Hiển thị icon và tên danh mục (VD: Văn học, Kinh tế, Khoa học, Giáo dục)<br/>
              <strong>Tương tác:</strong> Click → Chuyển đến trang tìm kiếm với filter danh mục đã chọn<br/>
              <strong>Nội dung:</strong> Icon đại diện + Tên danh mục + Số lượng sản phẩm (optional)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">⓮ Tiêu Đề "Sản Phẩm Mới Nhất"</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Giới thiệu các sản phẩm vừa được thêm vào<br/>
              <strong>Có thể thêm:</strong> Link "Xem tất cả" để đi đến trang listing đầy đủ
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">⓯⓰⓱⓲ Thẻ Sản Phẩm</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Hiển thị preview sản phẩm<br/>
              <strong>Nội dung hiển thị:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Thumbnail (ảnh bìa hoặc preview PDF page 1)</li>
                <li>Tên sách</li>
                <li>Tác giả</li>
                <li>Loại bản quyền (VD: In ấn, Phát hành số)</li>
                <li>Badge "Mới" nếu vừa được thêm trong 7 ngày</li>
              </ul>
              <strong>Tương tác:</strong> Click → Chuyển đến trang chi tiết sản phẩm (WF08)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">⓳ Section "Cách Thức Hoạt Động"</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Giải thích quy trình sử dụng nền tảng<br/>
              <strong>Mục đích:</strong> Giúp người dùng mới hiểu rõ cách sử dụng
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">⓴㉑㉒ Các Bước Hướng Dẫn</div>
            <div className="text-gray-700">
              <strong>Nội dung gợi ý:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li><strong>Bước 1:</strong> Đăng ký tài khoản và xác thực KYC</li>
                <li><strong>Bước 2:</strong> Tìm kiếm hoặc đăng tải bản quyền</li>
                <li><strong>Bước 3:</strong> Thương lượng và ký hợp đồng</li>
              </ul>
              <strong>Hiển thị:</strong> Icon/số thứ tự + Tiêu đề ngắn + Mô tả 1-2 câu
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">㉓㉔㉕㉖ Footer Links</div>
            <div className="text-gray-700">
              <strong>㉓ Về chúng tôi:</strong> Giới thiệu, Đội ngũ, Liên hệ<br/>
              <strong>㉔ Hỗ trợ:</strong> FAQ, Hướng dẫn sử dụng, Liên hệ support<br/>
              <strong>㉕ Điều khoản:</strong> Điều khoản sử dụng, Chính sách bảo mật<br/>
              <strong>㉖ Liên hệ:</strong> Email, Số điện thoại, Địa chỉ, Social media links
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 LƯU Ý THIẾT KẾ</div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Responsive design: Phải hoạt động tốt trên mobile, tablet, desktop</li>
            <li>• Loading state: Hiển thị skeleton loader khi đang tải dữ liệu</li>
            <li>• SEO friendly: Meta tags, structured data cho các sản phẩm</li>
            <li>• Performance: Lazy load images, optimize bundle size</li>
          </ul>
        </div>
      </div>
    </div>
  );
}