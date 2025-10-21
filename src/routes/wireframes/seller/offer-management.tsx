import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/seller/offer-management')({
  component: ManageOffersSellerWireframe,
})

export default function ManageOffersSellerWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF12 - QUẢN LÝ OFFERS (SELLER)
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
                <div>Dashboard</div>
                <div>Sản phẩm</div>
                <div className="font-semibold underline">Offers</div>
                <div>Hợp đồng</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                <div className="text-xs">🔔 (8)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                <div className="text-xs">Nguyễn Văn A ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Page Title & Stats */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
              <h1 className="text-2xl font-bold">Offers Nhận Được</h1>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="border border-gray-300 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                  <div className="text-xs text-gray-600">Tổng offers</div>
                </div>
                <div className="text-xl font-bold">47</div>
              </div>
              <div className="border border-yellow-300 bg-yellow-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
                  <div className="text-xs text-gray-600">Chờ phản hồi</div>
                </div>
                <div className="text-xl font-bold text-yellow-700">12</div>
              </div>
              <div className="border border-blue-300 bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
                  <div className="text-xs text-gray-600">Đang thương lượng</div>
                </div>
                <div className="text-xl font-bold text-blue-700">8</div>
              </div>
              <div className="border border-green-300 bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
                  <div className="text-xs text-gray-600">Đã chấp nhận</div>
                </div>
                <div className="text-xl font-bold text-green-700">15</div>
              </div>
            </div>
          </div>

          {/* Filters & Search Bar */}
          <div className="mb-4 flex gap-4 items-center">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
              <input 
                type="text" 
                className="flex-1 border-2 border-gray-300 rounded px-3 py-2 text-sm" 
                placeholder="Tìm kiếm theo sản phẩm, buyer..."
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">10</div>
              <select className="border-2 border-gray-300 rounded px-3 py-2 text-sm">
                <option>Tất cả trạng thái</option>
                <option>Chờ phản hồi</option>
                <option>Đang thương lượng</option>
                <option>Đã chấp nhận</option>
                <option>Đã từ chối</option>
                <option>Đã hết hạn</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">11</div>
              <select className="border-2 border-gray-300 rounded px-3 py-2 text-sm">
                <option>Sản phẩm: Tất cả</option>
                <option>Nghệ thuật lãnh đạo</option>
                <option>Kinh tế học vĩ mô</option>
                <option>Tâm lý học đám đông</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">12</div>
              <select className="border-2 border-gray-300 rounded px-3 py-2 text-sm">
                <option>Mới nhất</option>
                <option>Cũ nhất</option>
                <option>Giá cao nhất</option>
                <option>Giá thấp nhất</option>
              </select>
            </div>
          </div>

          {/* Offers Table */}
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr className="text-xs">
                  <th className="p-3 text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">13</div>
                      <span>Sản phẩm</span>
                    </div>
                  </th>
                  <th className="p-3 text-left">Người gửi</th>
                  <th className="p-3 text-left">Bản quyền</th>
                  <th className="p-3 text-left">Giá đề xuất</th>
                  <th className="p-3 text-left">Ngày gửi</th>
                  <th className="p-3 text-left">Hết hạn</th>
                  <th className="p-3 text-left">Trạng thái</th>
                  <th className="p-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
                      <span>Thao tác</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Offer Row 1 - Pending */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-16 bg-gray-200 rounded flex items-center justify-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">15</div>
                      </div>
                      <div className="text-xs">
                        <div className="font-semibold">Nghệ thuật lãnh đạo</div>
                        <div className="text-gray-600">Dale Carnegie</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-xs">
                    <div className="font-semibold">NXB Trẻ</div>
                    <div className="text-gray-600">✓ Đã xác thực</div>
                  </td>
                  <td className="p-3 text-xs">
                    <div>In ấn</div>
                    <div className="text-gray-600">VN, 3 năm</div>
                  </td>
                  <td className="p-3 text-xs font-semibold">50,000,000 đ</td>
                  <td className="p-3 text-xs">20/10/2025</td>
                  <td className="p-3 text-xs">03/11/2025</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">
                      Chờ phản hồi
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">16</div>
                        <button className="px-2 py-1 bg-blue-600 text-white rounded text-xs">Xem</button>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Offer Row 2 - Negotiating */}
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-16 bg-gray-200 rounded flex items-center justify-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">17</div>
                      </div>
                      <div className="text-xs">
                        <div className="font-semibold">Kinh tế học vĩ mô</div>
                        <div className="text-gray-600">Gregory Mankiw</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-xs">
                    <div className="font-semibold">Công ty Kim Đồng</div>
                    <div className="text-gray-600">✓ Đã xác thực</div>
                  </td>
                  <td className="p-3 text-xs">
                    <div>Toàn bộ</div>
                    <div className="text-gray-600">Toàn cầu, 5 năm</div>
                  </td>
                  <td className="p-3 text-xs font-semibold">75,000,000 đ</td>
                  <td className="p-3 text-xs">19/10/2025</td>
                  <td className="p-3 text-xs">02/11/2025</td>
                  <td className="p-3">
                    <div className="flex flex-col gap-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                        Đang thương lượng
                      </span>
                      <span className="text-xs text-gray-600">Round 2/5</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <button className="px-2 py-1 bg-blue-600 text-white rounded text-xs">Xem</button>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">🔔 Mới</span>
                    </div>
                  </td>
                </tr>

                {/* Offer Row 3 - Accepted */}
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-16 bg-gray-200 rounded flex items-center justify-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">18</div>
                      </div>
                      <div className="text-xs">
                        <div className="font-semibold">Tâm lý học đám đông</div>
                        <div className="text-gray-600">Gustave Le Bon</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-xs">
                    <div className="font-semibold">NXB Văn Học</div>
                    <div className="text-gray-600">✓ Đã xác thực</div>
                  </td>
                  <td className="p-3 text-xs">
                    <div>In ấn + Dịch thuật</div>
                    <div className="text-gray-600">VN, 3 năm</div>
                  </td>
                  <td className="p-3 text-xs font-semibold">30,000,000 đ</td>
                  <td className="p-3 text-xs">18/10/2025</td>
                  <td className="p-3 text-xs">-</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                      Đã chấp nhận
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <button className="px-2 py-1 bg-gray-600 text-white rounded text-xs">Xem</button>
                    </div>
                  </td>
                </tr>

                {/* More rows... */}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">19</div>
              <span>Hiển thị 1-10 trong 47 offers</span>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded text-sm">‹ Trước</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm">3</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm">Sau ›</button>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">CHÚ THÍCH CHI TIẾT</h2>
        
        <div className="space-y-2 text-sm">
          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❶ Logo & Navigation</div>
            <div className="text-gray-700">
              Header với navigation menu. "Offers" đang active (underline)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❺❻❼❽ Quick Stats Cards</div>
            <div className="text-gray-700">
              <strong>❺ Tổng offers:</strong> Tất cả offers (all statuses)<br/>
              <strong>❻ Chờ phản hồi:</strong> Status=Pending, cần action từ seller<br/>
              <strong>❼ Đang thương lượng:</strong> Status=Negotiating<br/>
              <strong>❽ Đã chấp nhận:</strong> Status=Accepted<br/>
              <strong>Click vào card:</strong> Auto-apply filter tương ứng vào table
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❾ Search Bar</div>
            <div className="text-gray-700">
              <strong>Tìm kiếm trên:</strong> Tên sản phẩm, Tên buyer, Offer ID<br/>
              <strong>Debounce:</strong> 300ms sau khi user ngừng typing → Auto search
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❿⓫⓬ Filter Dropdowns</div>
            <div className="text-gray-700">
              <strong>❿ Trạng thái:</strong> Filter theo offer status<br/>
              <strong>⓫ Sản phẩm:</strong> Filter theo sản phẩm của seller<br/>
              <strong>⓬ Sắp xếp:</strong> Sort theo date, price<br/>
              <strong>Apply:</strong> Auto-apply khi select option
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓭ Table Header</div>
            <div className="text-gray-700">
              <strong>Columns:</strong> Sản phẩm, Người gửi, Bản quyền, Giá, Ngày gửi, Hết hạn, Trạng thái, Thao tác
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓮ Thao Tác Column</div>
            <div className="text-gray-700">
              <strong>Actions khả dụng:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li><strong>Status=Pending:</strong> Button "Xem" → Đi đến WF13 (chi tiết offer) để Accept/Reject/Counter</li>
                <li><strong>Status=Negotiating:</strong> Button "Xem" + Badge "🔔 Mới" nếu có counter từ buyer chưa xem</li>
                <li><strong>Status=Accepted/Rejected/Expired:</strong> Button "Xem" để xem lịch sử</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓯⓰⓱ Table Rows</div>
            <div className="text-gray-700">
              <strong>⓯ Row Pending:</strong> Normal background<br/>
              <strong>⓰ Row Negotiating:</strong> Background xanh nhạt để highlight<br/>
              <strong>⓱ Row Accepted:</strong> Normal background<br/>
              <strong>Hover:</strong> Background thay đổi khi hover<br/>
              <strong>Click row:</strong> Toàn bộ row clickable → Đi đến WF13
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">Status Badges</div>
            <div className="text-gray-700">
              <strong>Color coding:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li><strong>Chờ phản hồi:</strong> Yellow</li>
                <li><strong>Đang thương lượng:</strong> Blue + "Round X/5"</li>
                <li><strong>Đã chấp nhận:</strong> Green</li>
                <li><strong>Đã từ chối:</strong> Red</li>
                <li><strong>Hết hạn:</strong> Gray</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓳ Pagination</div>
            <div className="text-gray-700">
              10 offers per page. Hiển thị "1-10 trong 47 offers"
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 NOTIFICATIONS</div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Offer mới:</strong> In-app notification + Email</li>
            <li>• <strong>Counter offer:</strong> Badge "🔔 Mới" trên row + Push notification</li>
            <li>• <strong>Sắp hết hạn:</strong> Email reminder 2 ngày trước expiry</li>
            <li>• <strong>Realtime update:</strong> WebSocket để update table khi có offer mới</li>
          </ul>
        </div>
      </div>
    </div>
  );
}