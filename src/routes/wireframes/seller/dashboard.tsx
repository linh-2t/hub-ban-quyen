import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/seller/dashboard')({
  component: SellerDashboardWireframe,
})

export default function SellerDashboardWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF05 - DASHBOARD SELLER (NGƯỜI BÁN)
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
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <div className="font-semibold">Dashboard</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <div>Sản phẩm</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                  <div>Offers</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                  <div>Hợp đồng</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
                  <div>Thanh toán</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
                <div className="text-xs">🔔 (3)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
                <div className="text-xs">Nguyễn Văn A ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50 p-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-blue-100 p-2 rounded">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
                <div className="text-sm font-semibold">📊 Tổng quan</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">10</div>
                <div className="text-sm">📦 Sản phẩm của tôi</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">11</div>
                <div className="text-sm">💼 Offers nhận được</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">12</div>
                <div className="text-sm">📄 Hợp đồng</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">13</div>
                <div className="text-sm">💰 Thanh toán</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
                <div className="text-sm">👤 Hồ sơ</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">15</div>
                <div className="text-sm">⚙️ Cài đặt</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Welcome Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">16</div>
                <div className="text-2xl font-bold">Chào mừng, Nguyễn Văn A! 👋</div>
              </div>
              <div className="text-sm text-gray-600">Đây là tổng quan về tài khoản của bạn</div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border-2 border-gray-300 p-4 rounded-lg bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">17</div>
                  <div className="text-xs text-gray-600">Tổng sản phẩm</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">24</div>
                <div className="text-xs text-green-600">↑ +3 tháng này</div>
              </div>

              <div className="border-2 border-gray-300 p-4 rounded-lg bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">18</div>
                  <div className="text-xs text-gray-600">Offers nhận được</div>
                </div>
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-xs text-blue-600">5 chờ phản hồi</div>
              </div>

              <div className="border-2 border-gray-300 p-4 rounded-lg bg-purple-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">19</div>
                  <div className="text-xs text-gray-600">Hợp đồng hoàn tất</div>
                </div>
                <div className="text-2xl font-bold text-purple-600">8</div>
                <div className="text-xs text-gray-600">Tổng giá trị: 450M</div>
              </div>

              <div className="border-2 border-gray-300 p-4 rounded-lg bg-yellow-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">20</div>
                  <div className="text-xs text-gray-600">Đang chờ thanh toán</div>
                </div>
                <div className="text-2xl font-bold text-yellow-600">75M</div>
                <div className="text-xs text-gray-600">2 giao dịch</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">21</div>
                <div className="font-bold">Thao tác nhanh</div>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">22</div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">+ Thêm sản phẩm</button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">23</div>
                  <button className="px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded text-sm">Xem offers mới</button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">24</div>
                  <button className="px-4 py-2 bg-white border-2 border-gray-300 rounded text-sm">Xem báo cáo</button>
                </div>
              </div>
            </div>

            {/* Recent Offers */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">25</div>
                  <div className="font-bold">Offers mới nhất</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">26</div>
                  <a href="#" className="text-xs text-blue-600 underline">Xem tất cả</a>
                </div>
              </div>

              <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                <table className="w-full text-xs">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 text-left">Sản phẩm</th>
                      <th className="p-2 text-left">Người gửi</th>
                      <th className="p-2 text-left">Giá đề xuất</th>
                      <th className="p-2 text-left">Ngày gửi</th>
                      <th className="p-2 text-left">Trạng thái</th>
                      <th className="p-2 text-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto">27</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="p-2">Nghệ thuật lãnh đạo</td>
                      <td className="p-2">NXB Trẻ</td>
                      <td className="p-2 font-semibold">50,000,000 đ</td>
                      <td className="p-2">20/10/2025</td>
                      <td className="p-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Chờ phản hồi</span>
                      </td>
                      <td className="p-2 text-center">
                        <button className="text-blue-600 text-xs underline">Xem chi tiết</button>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-2">Kinh tế học vĩ mô</td>
                      <td className="p-2">Công ty Kim Đồng</td>
                      <td className="p-2 font-semibold">75,000,000 đ</td>
                      <td className="p-2">19/10/2025</td>
                      <td className="p-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Đang thương lượng</span>
                      </td>
                      <td className="p-2 text-center">
                        <button className="text-blue-600 text-xs underline">Xem chi tiết</button>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-2">Tâm lý học đám đông</td>
                      <td className="p-2">NXB Văn Học</td>
                      <td className="p-2 font-semibold">30,000,000 đ</td>
                      <td className="p-2">18/10/2025</td>
                      <td className="p-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Chờ phản hồi</span>
                      </td>
                      <td className="p-2 text-center">
                        <button className="text-blue-600 text-xs underline">Xem chi tiết</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Products */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">28</div>
                  <div className="font-bold">Sản phẩm của bạn</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">29</div>
                  <a href="#" className="text-xs text-blue-600 underline">Quản lý sản phẩm</a>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[30, 31, 32, 33].map(num => (
                  <div key={num} className="border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition">
                    <div className="h-32 bg-gray-200 flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{num}</div>
                    </div>
                    <div className="p-3">
                      <div className="text-sm font-semibold mb-1">Tên sách</div>
                      <div className="text-xs text-gray-600 mb-2">Tác giả</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Active</span>
                        <span className="text-blue-600">5 offers</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">CHÚ THÍCH CHI TIẾT</h2>
        
        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❶ Logo</div>
            <div className="text-gray-700">
              <strong>Tương tác:</strong> Click → Quay về dashboard này (refresh)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❷❸❹❺❻ Menu Navigation</div>
            <div className="text-gray-700">
              <strong>❷ Dashboard:</strong> Trang hiện tại (active state - font đậm)<br/>
              <strong>❸ Sản phẩm:</strong> Click → Đi đến trang quản lý sản phẩm (WF07)<br/>
              <strong>❹ Offers:</strong> Click → Đi đến trang quản lý offers (WF12)<br/>
              <strong>❺ Hợp đồng:</strong> Click → Đi đến trang quản lý hợp đồng<br/>
              <strong>❻ Thanh toán:</strong> Click → Đi đến trang lịch sử thanh toán<br/>
              <strong>Style:</strong> Active item có background highlight hoặc underline
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❼ Icon Thông Báo</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Icon chuông với badge số lượng thông báo chưa đọc<br/>
              <strong>Tương tác:</strong> Click → Dropdown menu hiển thị list notifications
              <ul className="list-disc ml-5 mt-1">
                <li>Offer mới nhận được</li>
                <li>Counter offer từ buyer</li>
                <li>Hợp đồng cần review</li>
                <li>Thanh toán đã được xác nhận</li>
              </ul>
              <strong>Badge:</strong> Số (3) = 3 notifications chưa đọc
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❽ User Menu Dropdown</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> Tên user + icon mũi tên xuống<br/>
              <strong>Tương tác:</strong> Click → Dropdown menu với options:
              <ul className="list-disc ml-5 mt-1">
                <li>Hồ sơ của tôi</li>
                <li>Cài đặt tài khoản</li>
                <li>Ngân hàng & Thanh toán</li>
                <li>Đổi sang tài khoản Buyer (nếu có)</li>
                <li>Trợ giúp</li>
                <li>Đăng xuất</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">❾❿⓫⓬⓭⓮⓯ Sidebar Menu</div>
            <div className="text-gray-700">
              <strong>Chức năng:</strong> Navigation menu chính<br/>
              <strong>❾ Tổng quan:</strong> Dashboard này (active state - background highlight)<br/>
              <strong>❿ Sản phẩm của tôi:</strong> Click → WF07<br/>
              <strong>⓫ Offers nhận được:</strong> Click → WF12<br/>
              <strong>⓬ Hợp đồng:</strong> Click → Trang danh sách hợp đồng<br/>
              <strong>⓭ Thanh toán:</strong> Click → Trang lịch sử thanh toán<br/>
              <strong>⓮ Hồ sơ:</strong> Click → Trang profile/settings<br/>
              <strong>⓯ Cài đặt:</strong> Click → Trang settings (notifications, preferences, etc.)<br/>
              <strong>Hover effect:</strong> Background thay đổi màu khi hover
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">⓰ Welcome Message</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> "Chào mừng, [Tên User]!" với emoji wave<br/>
              <strong>Dynamic:</strong> Lấy tên từ user profile
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">⓱⓲⓳⓴ Stats Cards</div>
            <div className="text-gray-700">
              <strong>⓱ Tổng sản phẩm:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Số lượng sản phẩm đang active + draft</li>
                <li>Comparison: "+3 tháng này" (so với tháng trước)</li>
                <li>Click → Đi đến trang quản lý sản phẩm</li>
              </ul>
              <strong>⓲ Offers nhận được:</strong>
              <ul className="list-disc ml-5">
                <li>Tổng số offers (tất cả statuses)</li>
                <li>Breakdown: "5 chờ phản hồi" (pending offers)</li>
                <li>Click → Đi đến trang quản lý offers, filter pending</li>
              </ul>
              <strong>⓳ Hợp đồng hoàn tất:</strong>
              <ul className="list-disc ml-5">
                <li>Số hợp đồng đã ký và hoàn tất thanh toán</li>
                <li>Tổng giá trị: Sum của tất cả deals</li>
                <li>Click → Đi đến trang hợp đồng</li>
              </ul>
              <strong>⓴ Đang chờ thanh toán:</strong>
              <ul className="list-disc ml-5">
                <li>Tổng số tiền đang chờ receive</li>
                <li>Số giao dịch: 2 (contracts đã ký nhưng chưa được paid)</li>
                <li>Click → Đi đến trang thanh toán</li>
              </ul>
              <strong>Realtime update:</strong> Auto refresh khi có thay đổi
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">㉑㉒㉓㉔ Quick Actions</div>
            <div className="text-gray-700">
              <strong>㉑ Section title:</strong> "Thao tác nhanh"<br/>
              <strong>㉒ + Thêm sản phẩm:</strong> Click → Chuyển đến WF06 (Upload sản phẩm mới)<br/>
              <strong>㉓ Xem offers mới:</strong> Click → Chuyển đến WF12 với filter="pending"<br/>
              <strong>㉔ Xem báo cáo:</strong> Click → Chuyển đến trang reports/analytics (WF hiệu suất)
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">㉕㉖㉗ Bảng Offers Mới Nhất</div>
            <div className="text-gray-700">
              <strong>㉕ Section title:</strong> "Offers mới nhất"<br/>
              <strong>㉖ Link "Xem tất cả":</strong> Click → Chuyển đến WF12 (full list)<br/>
              <strong>㉗ Table columns:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li><strong>Sản phẩm:</strong> Tên sách</li>
                <li><strong>Người gửi:</strong> Tên buyer/công ty</li>
                <li><strong>Giá đề xuất:</strong> Amount (format: XX,XXX,XXX đ)</li>
                <li><strong>Ngày gửi:</strong> Date format DD/MM/YYYY</li>
                <li><strong>Trạng thái:</strong> Badge với color coding:
                  <ul className="list-circle ml-5">
                    <li>Chờ phản hồi - Vàng</li>
                    <li>Đang thương lượng - Xanh</li>
                    <li>Đã chấp nhận - Xanh lá</li>
                    <li>Đã từ chối - Đỏ</li>
                  </ul>
                </li>
                <li><strong>Actions:</strong> Link "Xem chi tiết" → Đi đến trang offer detail (WF13)</li>
              </ul>
              <strong>Hiển thị:</strong> 3-5 offers mới nhất, sorted by date desc<br/>
              <strong>Empty state:</strong> Nếu chưa có offers → "Chưa có offers nào. Hãy đảm bảo sản phẩm của bạn được hiển thị trên marketplace!"
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600 mb-1">㉘㉙㉚㉛㉜㉝ Sản Phẩm Của Bạn</div>
            <div className="text-gray-700">
              <strong>㉘ Section title:</strong> "Sản phẩm của bạn"<br/>
              <strong>㉙ Link "Quản lý sản phẩm":</strong> Click → Chuyển đến WF07<br/>
              <strong>㉚㉛㉜㉝ Product Cards:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li><strong>Thumbnail:</strong> Preview image (từ PDF page 1 hoặc uploaded cover)</li>
                <li><strong>Tên sách:</strong> Product title</li>
                <li><strong>Tác giả:</strong> Author name</li>
                <li><strong>Status badge:</strong> Active, Draft, Pending, Rejected</li>
                <li><strong>Offers count:</strong> "5 offers" = số lượng offers nhận được</li>
              </ul>
              <strong>Tương tác:</strong> Click vào card → Đi đến trang edit sản phẩm (WF07 edit mode)<br/>
              <strong>Hiển thị:</strong> 4 sản phẩm mới nhất
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 LƯU Ý THIẾT KẾ</div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Responsive:</strong> Mobile view → Sidebar collapse thành hamburger menu</li>
            <li>• <strong>Loading states:</strong> Skeleton loaders cho stats cards và tables khi đang fetch data</li>
            <li>• <strong>Empty states:</strong> Hiển thị message + CTA phù hợp khi chưa có data</li>
            <li>• <strong>Real-time updates:</strong> WebSocket hoặc polling để update stats và notifications</li>
            <li>• <strong>Performance:</strong> Lazy load các sections, pagination cho tables</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">🎯 MỤC ĐÍCH DASHBOARD</div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Cung cấp overview nhanh về tình trạng tài khoản</li>
            <li>• Highlight các actions cần thực hiện (pending offers, contracts cần ký)</li>
            <li>• Easy access đến các tính năng quan trọng</li>
            <li>• Hiển thị performance metrics để motivate sellers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}