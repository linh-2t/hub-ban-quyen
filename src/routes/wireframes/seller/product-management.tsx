import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wireframes/seller/product-management')({
  component: ManageProductsWireframe,
})

export default function ManageProductsWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF07 - QUẢN LÝ SẢN PHẨM (SELLER)
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
            <div className="flex gap-4 text-xs">
              <div>Dashboard</div>
              <div className="font-semibold underline">Sản phẩm</div>
              <div>Offers</div>
              <div>Hợp đồng</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <div className="text-xs">Nguyễn Văn A ▼</div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Page Header */}
          <div className="mb-6 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                <h1 className="text-2xl font-bold">Sản Phẩm Của Tôi</h1>
              </div>
              <div className="text-sm text-gray-600">Quản lý tất cả sản phẩm bản quyền của bạn</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                + Thêm Sản Phẩm Mới
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="border border-gray-300 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                <div className="text-xs text-gray-600">Tổng</div>
              </div>
              <div className="text-xl font-bold">24</div>
            </div>
            <div className="border border-green-300 bg-green-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
                <div className="text-xs text-gray-600">Active</div>
              </div>
              <div className="text-xl font-bold text-green-600">18</div>
            </div>
            <div className="border border-yellow-300 bg-yellow-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
                <div className="text-xs text-gray-600">Pending</div>
              </div>
              <div className="text-xl font-bold text-yellow-600">3</div>
            </div>
            <div className="border border-gray-300 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
                <div className="text-xs text-gray-600">Draft</div>
              </div>
              <div className="text-xl font-bold text-gray-600">2</div>
            </div>
            <div className="border border-red-300 bg-red-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
                <div className="text-xs text-gray-600">Hidden</div>
              </div>
              <div className="text-xl font-bold text-red-600">1</div>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="mb-4 flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">10</div>
              <input 
                type="text" 
                className="flex-1 border-2 border-gray-300 rounded px-3 py-2 text-sm" 
                placeholder="Tìm kiếm sản phẩm..."
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">11</div>
              <select className="border-2 border-gray-300 rounded px-3 py-2 text-sm">
                <option>Tất cả trạng thái</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Draft</option>
                <option>Rejected</option>
                <option>Hidden</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">12</div>
              <select className="border-2 border-gray-300 rounded px-3 py-2 text-sm">
                <option>Tất cả thể loại</option>
                <option>Văn học</option>
                <option>Kinh tế</option>
                <option>Khoa học</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">13</div>
              <select className="border-2 border-gray-300 rounded px-3 py-2 text-sm">
                <option>Mới nhất</option>
                <option>Cũ nhất</option>
                <option>Tên A-Z</option>
                <option>Nhiều offers nhất</option>
              </select>
            </div>
          </div>

          {/* View Toggle */}
          <div className="mb-4 flex justify-between items-center">
            <div className="text-sm text-gray-600">Hiển thị 1-10 trong 24 sản phẩm</div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">14</div>
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">⊞ Grid</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm">☰ List</button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {/* Product Card 1 - Active */}
            <div className="border-2 border-gray-300 rounded-lg hover:shadow-lg transition">
              <div className="relative h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">15</div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white rounded text-xs font-semibold">
                  Active
                </div>
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold mb-1">Nghệ thuật lãnh đạo</div>
                <div className="text-xs text-gray-600 mb-2">Dale Carnegie</div>
                <div className="flex items-center gap-2 mb-2 text-xs">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">Sách in</span>
                  <span className="text-gray-600">50M đ</span>
                </div>
                <div className="flex items-center justify-between mb-2 text-xs">
                  <span className="text-gray-600">5 offers</span>
                  <span className="text-gray-600">78 views</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-2 py-1 bg-blue-600 text-white rounded text-xs">Sửa</button>
                  <button className="px-2 py-1 border border-gray-300 rounded text-xs">⋮</button>
                </div>
              </div>
            </div>

            {/* Product Card 2 - Pending */}
            <div className="border-2 border-yellow-400 bg-yellow-50 rounded-lg">
              <div className="relative h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">16</div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-yellow-500 text-white rounded text-xs font-semibold">
                  Pending
                </div>
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold mb-1">Kinh tế học vĩ mô</div>
                <div className="text-xs text-gray-600 mb-2">Gregory Mankiw</div>
                <div className="flex items-center gap-2 mb-2 text-xs">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">Sách in</span>
                </div>
                <div className="text-xs text-yellow-700 mb-2">
                  ⏳ Đang chờ moderator duyệt
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-2 py-1 bg-gray-300 text-gray-600 rounded text-xs" disabled>Đang duyệt</button>
                </div>
              </div>
            </div>

            {/* Product Card 3 - Draft */}
            <div className="border-2 border-gray-400 rounded-lg opacity-75">
              <div className="relative h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">17</div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-gray-500 text-white rounded text-xs font-semibold">
                  Draft
                </div>
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold mb-1">Tâm lý học đám đông</div>
                <div className="text-xs text-gray-600 mb-2">Gustave Le Bon</div>
                <div className="text-xs text-gray-600 mb-2">
                  Chưa hoàn tất thông tin
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-2 py-1 bg-blue-600 text-white rounded text-xs">Tiếp tục</button>
                  <button className="px-2 py-1 border border-red-300 text-red-600 rounded text-xs">Xóa</button>
                </div>
              </div>
            </div>

            {/* Product Card 4 - Hidden */}
            <div className="border-2 border-red-400 rounded-lg">
              <div className="relative h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">18</div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded text-xs font-semibold">
                  Hidden
                </div>
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold mb-1">Cuốn sách ẩn</div>
                <div className="text-xs text-gray-600 mb-2">Tác giả XYZ</div>
                <div className="text-xs text-red-600 mb-2">
                  🚫 Đang ẩn khỏi marketplace
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-2 py-1 bg-green-600 text-white rounded text-xs">Hiện lại</button>
                  <button className="px-2 py-1 border border-gray-300 rounded text-xs">⋮</button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">19</div>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>10 / trang</option>
                <option>20 / trang</option>
                <option>50 / trang</option>
              </select>
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
            <div className="font-bold text-blue-600">❹ Button "Thêm Sản Phẩm Mới"</div>
            <div className="text-gray-700">
              Click → Chuyển đến WF06 (Upload sản phẩm mới)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❺❻❼❽❾ Stats Cards</div>
            <div className="text-gray-700">
              <strong>Quick overview</strong> số lượng sản phẩm theo từng status<br/>
              <strong>Click card:</strong> Auto-filter products by status<br/>
              <strong>Color coding:</strong> Green (Active), Yellow (Pending), Gray (Draft), Red (Hidden)
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">❿⓫⓬⓭ Filters</div>
            <div className="text-gray-700">
              <strong>❿ Search:</strong> Tìm theo tên sách, tác giả<br/>
              <strong>⓫ Status filter:</strong> Filter theo trạng thái<br/>
              <strong>⓬ Category filter:</strong> Filter theo thể loại<br/>
              <strong>⓭ Sort:</strong> Sắp xếp products
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓮ View Toggle</div>
            <div className="text-gray-700">
              <strong>Grid view:</strong> 4 columns (current)<br/>
              <strong>List view:</strong> Full width với more details
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓯⓰⓱⓲ Product Cards</div>
            <div className="text-gray-700">
              <strong>⓯ Active card:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>Thumbnail preview</li>
                <li>Status badge (top-right)</li>
                <li>Title, Author, Type, Price</li>
                <li>Stats: Offers count, Views count</li>
                <li>Actions: "Sửa" button, More menu (⋮)</li>
              </ul>
              <strong>⓰ Pending card:</strong> Yellow border, "Đang chờ duyệt" message<br/>
              <strong>⓱ Draft card:</strong> Gray, "Tiếp tục" button để complete upload<br/>
              <strong>⓲ Hidden card:</strong> Red border, "Hiện lại" button<br/>
              <strong>More menu (⋮):</strong>
              <ul className="list-disc ml-5">
                <li>Xem chi tiết</li>
                <li>Xem offers</li>
                <li>Ẩn/Hiện sản phẩm</li>
                <li>Sao chép</li>
                <li>Xóa (chỉ khi status=Draft)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-2 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">⓳ Pagination Controls</div>
            <div className="text-gray-700">
              Items per page selector + Page navigation buttons
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">📌 BUSINESS RULES</div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li><strong>Edit permissions:</strong> Chỉ edit được khi status=Draft hoặc Rejected. Active products có offers không thể edit</li>
            <li><strong>Hide/Show:</strong> Seller có thể Hide sản phẩm tạm thời (không hiển thị marketplace), không ảnh hưởng offers đang active</li>
            <li><strong>Delete:</strong> Chỉ xóa được Draft. Active/Pending không cho xóa</li>
            <li><strong>Analytics:</strong> Track views, offer conversion rate per product</li>
          </ul>
        </div>
      </div>
    </div>
  );
}