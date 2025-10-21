import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/buyer/dashboard')({
  component: BuyerDashboardWireframe,
})

export default function BuyerDashboardWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF11 - DASHBOARD BUYER (NGƯỜI MUA)
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
                <div className="font-semibold underline">Dashboard</div>
                <div>Marketplace</div>
                <div>Offers của tôi</div>
                <div>Hợp đồng</div>
                <div>Thanh toán</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                <div className="text-xs">🔔 (6)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                <div className="text-xs">Công ty Kim Đồng ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50 p-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-blue-100 p-2 rounded">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                <div className="text-sm font-semibold">📊 Tổng quan</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                <div className="text-sm">🔍 Tìm bản quyền</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
                <div className="text-sm">💼 Offers của tôi</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
                <div className="text-sm">📄 Hợp đồng</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
                <div className="text-sm">💰 Thanh toán</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
                <div className="text-sm">📥 Thư viện</div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">10</div>
                <div className="text-sm">❤️ Yêu thích</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Welcome Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">11</div>
                <h1 className="text-2xl font-bold">Chào mừng, Công ty Kim Đồng! 👋</h1>
              </div>
              <div className="text-sm text-gray-600">Tổng quan về hoạt động mua bản quyền của bạn</div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border-2 border-gray-300 p-4 rounded-lg bg-purple-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">12</div>
                  <div className="text-xs text-gray-600">Offers đã gửi</div>
                </div>
                <div className="text-2xl font-bold text-purple-600">18</div>
                <div className="text-xs text-blue-600">7 đang chờ</div>
              </div>

              <div className="border-2 border-gray-300 p-4 rounded-lg bg-green-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">13</div>
                  <div className="text-xs text-gray-600">Đã mua thành công</div>
                </div>
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-xs text-gray-600">Success rate: 67%</div>
              </div>

              <div className="border-2 border-gray-300 p-4 rounded-lg bg-blue-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
                  <div className="text-xs text-gray-600">Tổng chi tiêu</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">850M đ</div>
                <div className="text-xs text-gray-600">12 deals</div>
              </div>

              <div className="border-2 border-gray-300 p-4 rounded-lg bg-yellow-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">15</div>
                  <div className="text-xs text-gray-600">Chờ thanh toán</div>
                </div>
                <div className="text-2xl font-bold text-yellow-600">165M đ</div>
                <div className="text-xs text-gray-600">2 hợp đồng</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">16</div>
                <div className="font-bold">Thao tác nhanh</div>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded text-sm">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">17</div>
                  🔍 Tìm bản quyền
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded text-sm">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">18</div>
                  Xem offers chờ phản hồi
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded text-sm">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">19</div>
                  Xem hợp đồng cần ký
                </button>
              </div>
            </div>

            {/* Pending Actions */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">20</div>
                <div className="font-bold">Cần Xử Lý</div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="border-2 border-yellow-400 bg-yellow-50 p-4 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Counter offers mới</div>
                  <div className="text-2xl font-bold text-yellow-700 mb-2">3</div>
                  <a href="#" className="text-xs text-blue-600 underline">Xem ngay →</a>
                </div>

                <div className="border-2 border-red-400 bg-red-50 p-4 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Hợp đồng chờ ký</div>
                  <div className="text-2xl font-bold text-red-700 mb-2">2</div>
                  <a href="#" className="text-xs text-blue-600 underline">Xem ngay →</a>
                </div>

                <div className="border-2 border-purple-400 bg-purple-50 p-4 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Chờ thanh toán</div>
                  <div className="text-2xl font-bold text-purple-700 mb-2">2</div>
                  <a href="#" className="text-xs text-blue-600 underline">Xem ngay →</a>
                </div>
              </div>
            </div>

            {/* My Offers */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">21</div>
                  <div className="font-bold">Offers Gần Đây</div>
                </div>
                <a href="#" className="text-xs text-blue-600 underline">Xem tất cả</a>
              </div>

              <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                <table className="w-full text-xs">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 text-left">Sản phẩm</th>
                      <th className="p-2 text-left">Seller</th>
                      <th className="p-2 text-left">Giá đề xuất</th>
                      <th className="p-2 text-left">Ngày gửi</th>
                      <th className="p-2 text-left">Trạng thái</th>
                      <th className="p-2 text-center">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200 hover:bg-gray-50 bg-yellow-50">
                      <td className="p-2 font-semibold">Nghệ thuật lãnh đạo</td>
                      <td className="p-2">NXB Trẻ</td>
                      <td className="p-2 font-semibold">50,000,000 đ</td>
                      <td className="p-2">20/10/2025</td>
                      <td className="p-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                          Seller counter
                        </span>
                      </td>
                      <td className="p-2 text-center">
                        <button className="text-blue-600 underline">Xem</button>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="p-2">Kinh tế học vĩ mô</td>
                      <td className="p-2">Nguyễn Văn A</td>
                      <td className="p-2 font-semibold">75,000,000 đ</td>
                      <td className="p-2">19/10/2025</td>
                      <td className="p-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          Đang thương lượng
                        </span>
                      </td>
                      <td className="p-2 text-center">
                        <button className="text-blue-600 underline">Xem</button>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="p-2">Tâm lý học đám đông</td>
                      <td className="p-2">NXB Văn Học</td>
                      <td className="p-2 font-semibold">30,000,000 đ</td>
                      <td className="p-2">18/10/2025</td>
                      <td className="p-2">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          Đã chấp nhận
                        </span>
                      </td>
                      <td className="p-2 text-center">
                        <button className="text-blue-600 underline">Xem</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Purchased Items */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">22</div>
                  <div className="font-bold">Đã Mua Gần Đây</div>
                </div>
                <a href="#" className="text-xs text-blue-600 underline">Xem thư viện</a>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[23, 24, 25, 26].map(num => (
                  <div key={num} className="border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition">
                    <div className="h-32 bg-gray-200 flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{num}</div>
                    </div>
                    <div className="p-3">
                      <div className="text-sm font-semibold mb-1">Tên sách</div>
                      <div className="text-xs text-gray-600 mb-2">Tác giả</div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-green-600">✓ Đã nhận</span>
                        <button className="text-blue-600 underline">Tải về</button>
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
        
        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❹❺❻❼❽❾❿ Sidebar Menu</div>
            <div className="text-gray-700">
              <strong>❹ Tổng quan:</strong> Dashboard (current page)<br/>
              <strong>❺ Tìm bản quyền:</strong> → WF09 (Marketplace)<br/>
              <strong>❻ Offers của tôi:</strong> → Danh sách tất cả offers đã gửi<br/>
              <strong>❼ Hợp đồng:</strong> → Danh sách hợp đồng<br/>
              <strong>❽ Thanh toán:</strong> → Payment history<br/>
              <strong>❾ Thư viện:</strong> → Bản quyền đã mua (downloaded content)<br/>
              <strong>❿ Yêu thích:</strong> → Wishlist products
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓬⓭⓮⓯ Stats Cards</div>
            <div className="text-gray-700">
              <strong>⓬ Offers đã gửi:</strong> Total + Pending count<br/>
              <strong>⓭ Đã mua:</strong> Success count + Success rate<br/>
              <strong>⓮ Tổng chi:</strong> Total spending + Deal count<br/>
              <strong>⓯ Chờ thanh toán:</strong> Outstanding payment amount<br/>
              <strong>Click cards:</strong> Navigate to relevant page
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓰⓱⓲⓳ Quick Actions</div>
            <div className="text-gray-700">
              <strong>⓱ Tìm bản quyền:</strong> → WF09 (Marketplace)<br/>
              <strong>⓲ Offers chờ:</strong> → Filtered offers list (status=pending hoặc negotiating)<br/>
              <strong>⓳ Hợp đồng cần ký:</strong> → Contracts cần review/sign
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓴ Pending Actions Cards</div>
            <div className="text-gray-700">
              Highlight các actions urgently cần xử lý:<br/>
              - Counter offers từ seller<br/>
              - Contracts chờ ký<br/>
              - Payments due
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">㉑ Offers Table</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> 3-5 offers gần nhất<br/>
              <strong>Status highlight:</strong> Row background vàng nếu có action needed<br/>
              <strong>Click "Xem":</strong> → WF13 (Offer detail)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">㉒㉓㉔㉕㉖ Purchased Items</div>
            <div className="text-gray-700">
              <strong>Hiển thị:</strong> 4 items đã mua gần nhất<br/>
              <strong>Button "Tải về":</strong> → Download page hoặc direct download<br/>
              <strong>Link "Xem thư viện":</strong> → Full library với tất cả purchased items
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 SO SÁNH VỚI SELLER DASHBOARD</div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li><strong>Seller focus:</strong> Offers nhận được, Products, Revenue</li>
            <li><strong>Buyer focus:</strong> Offers đã gửi, Purchases, Library</li>
            <li><strong>Shared:</strong> Contracts, Payments, Notifications</li>
            <li>Buyer dashboard nhấn mạnh vào <strong>discovery</strong> (tìm kiếm) và <strong>tracking offers</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
