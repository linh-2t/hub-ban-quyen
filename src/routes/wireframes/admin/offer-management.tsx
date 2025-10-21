import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/admin/offer-management")({
  component: AdminOfferManagementWireframe,
});

export default function AdminOfferManagementWireframe() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF34 - ADMIN OFFER MANAGEMENT
      </h1>

      {/* Wireframe */}
      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-gray-800 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-sm font-semibold">Admin Portal</div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>Dashboard</div>
                <div>Users</div>
                <div>Products</div>
                <div className="font-semibold text-red-300">Offers</div>
                <div>Contracts</div>
                <div>Reports</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (18)</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs">Admin Account ▼</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r-2 border-gray-800 bg-gray-50">
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <div className="text-sm">📊 Dashboard</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                  <div className="text-sm">👥 User Management</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-sm">📚 Product Management</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    7
                  </div>
                  <div className="text-sm font-semibold">
                    💼 Offer Management
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <div className="text-sm">📝 Contract Management</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    9
                  </div>
                  <div className="text-sm">💰 Financial Reports</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    10
                  </div>
                  <div className="text-sm">⚙️ System Settings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Page Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
                  </div>
                  <h1 className="text-2xl font-bold">Offer Management</h1>
                </div>
                <p className="text-gray-600">
                  Monitor all offers, negotiations, and deal analytics across
                  the platform
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    12
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded">
                    📊 Analytics
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white text-sm rounded">
                    📤 Export
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <div className="text-sm text-gray-600">Total Offers</div>
                </div>
                <div className="text-2xl font-bold">4,592</div>
                <div className="text-xs text-green-600">↗ +8.3% this week</div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <div className="text-sm text-gray-600">Active Offers</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">1,247</div>
                <div className="text-xs text-gray-600">
                  Currently in negotiation
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="text-2xl font-bold text-green-600">2,891</div>
                <div className="text-xs text-green-600">62.9% success rate</div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">Avg. Deal Value</div>
                </div>
                <div className="text-2xl font-bold text-purple-600">₫45.2M</div>
                <div className="text-xs text-gray-600">
                  Per successful offer
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm text-gray-600">Platform Volume</div>
                </div>
                <div className="text-2xl font-bold text-orange-600">₫2.1B</div>
                <div className="text-xs text-gray-600">Total this month</div>
              </div>
            </div>

            {/* Quick Insights */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm font-semibold text-yellow-800">
                    ⏰ Urgent Attention
                  </div>
                </div>
                <div className="text-sm text-yellow-700">
                  <div>• 23 offers expiring today</div>
                  <div>• 8 negotiations stuck {">"}7 days</div>
                  <div>• 12 disputes requiring resolution</div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    20
                  </div>
                  <div className="text-sm font-semibold text-blue-800">
                    📈 Trending Categories
                  </div>
                </div>
                <div className="text-sm text-blue-700">
                  <div>• Fiction: +15% offers</div>
                  <div>• Educational: +8% volume</div>
                  <div>• Business: +12% avg value</div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    21
                  </div>
                  <div className="text-sm font-semibold text-green-800">
                    🏆 Top Performers
                  </div>
                </div>
                <div className="text-sm text-green-700">
                  <div>• NXB Trẻ: 47 offers this month</div>
                  <div>• Fahasa: ₫340M volume</div>
                  <div>• Kim Đồng: 95% success rate</div>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-6">
              <div className="grid grid-cols-6 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      22
                    </div>
                    <label className="text-sm font-medium">Search Offers</label>
                  </div>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="Product, buyer, seller..."
                    type="text"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      23
                    </div>
                    <label className="text-sm font-medium">Status</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>Negotiating</option>
                    <option>Accepted</option>
                    <option>Rejected</option>
                    <option>Expired</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      24
                    </div>
                    <label className="text-sm font-medium">Value Range</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>All Values</option>
                    <option>{"< ₫10M"}</option>
                    <option>₫10M - ₫50M</option>
                    <option>₫50M - ₫100M</option>
                    <option>{"> ₫100M"}</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <label className="text-sm font-medium">Category</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>All Categories</option>
                    <option>Fiction</option>
                    <option>Educational</option>
                    <option>Business</option>
                    <option>Technical</option>
                    <option>Children</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      26
                    </div>
                    <label className="text-sm font-medium">Date Range</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>Last 30 days</option>
                    <option>Last 7 days</option>
                    <option>Last 90 days</option>
                    <option>This year</option>
                    <option>Custom range</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      27
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded w-full">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex gap-3 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  28
                </div>
                <button className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded">
                  ⏰ Expiring Today (23)
                </button>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  29
                </div>
                <button className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded">
                  🚫 Disputes (12)
                </button>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  30
                </div>
                <button className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                  💰 High Value ({">"}₫100M)
                </button>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  31
                </div>
                <button className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded">
                  ✅ Completed This Week
                </button>
              </div>
            </div>

            {/* Offers Table */}
            <div className="border border-gray-300 rounded">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    32
                  </div>
                  <h3 className="font-semibold">Offers List (4,592 total)</h3>
                  <div className="ml-auto text-sm text-gray-600">
                    Page 1 of 230 | Show:
                    <select className="mx-1 text-sm">
                      <option>20</option>
                      <option>50</option>
                      <option>100</option>
                    </select>
                    per page
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr className="border-b border-gray-300">
                      <th className="text-left p-3">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            33
                          </div>
                          <div>Offer ID</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Product</th>
                      <th className="text-left p-3">Buyer → Seller</th>
                      <th className="text-left p-3">Offer Value</th>
                      <th className="text-left p-3">Negotiation</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Created</th>
                      <th className="text-left p-3">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            34
                          </div>
                          <div>Actions</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-orange-50">
                      <td className="p-3">
                        <div className="font-mono text-sm">OFF-2024-4592</div>
                        <div className="text-xs text-gray-600">Latest</div>
                      </td>
                      <td className="p-3">
                        <div className="font-medium">Tắt Đèn Trong Mắt Em</div>
                        <div className="text-sm text-gray-600">
                          Nguyễn Nhật Ánh
                        </div>
                        <div className="text-xs text-purple-600">
                          Fiction • Vietnamese
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          <div className="text-blue-600">Fahasa (Buyer)</div>
                          <div className="text-gray-400">↓</div>
                          <div className="text-green-600">NXB Trẻ (Seller)</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-lg">₫85M</div>
                        <div className="text-xs text-gray-600">
                          Exclusive • 5 years
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Round 2/5</div>
                        <div className="text-xs text-orange-600">
                          ⏰ Expires in 2 hours
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                          <div
                            className="bg-orange-500 h-1 rounded-full"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          🔄 Negotiating
                        </span>
                      </td>
                      <td className="p-3">
                        <div>19/10/2024</div>
                        <div className="text-xs text-gray-600">2 days ago</div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ View
                          </button>
                          <button className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                            💬 Chat
                          </button>
                          <button className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                            ⚠️ Flag
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3">
                        <div className="font-mono text-sm">OFF-2024-4591</div>
                        <div className="text-xs text-gray-600">High Value</div>
                      </td>
                      <td className="p-3">
                        <div className="font-medium">Kinh Tế Học Vĩ Mô</div>
                        <div className="text-sm text-gray-600">
                          Paul Krugman
                        </div>
                        <div className="text-xs text-purple-600">
                          Educational • English
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          <div className="text-blue-600">
                            VTC Education (Buyer)
                          </div>
                          <div className="text-gray-400">↓</div>
                          <div className="text-green-600">
                            McGraw Hill (Seller)
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-lg text-green-600">
                          ₫250M
                        </div>
                        <div className="text-xs text-gray-600">
                          Translation rights • 3 years
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Accepted</div>
                        <div className="text-xs text-green-600">
                          ✅ Deal closed
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                          <div
                            className="bg-green-500 h-1 rounded-full"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Completed
                        </span>
                      </td>
                      <td className="p-3">
                        <div>17/10/2024</div>
                        <div className="text-xs text-gray-600">4 days ago</div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ View
                          </button>
                          <button className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            📄 Contract
                          </button>
                          <button className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            📊 Details
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3">
                        <div className="font-mono text-sm">OFF-2024-4590</div>
                        <div className="text-xs text-red-600">Dispute</div>
                      </td>
                      <td className="p-3">
                        <div className="font-medium">
                          Sherlock Holmes Series
                        </div>
                        <div className="text-sm text-gray-600">
                          Arthur Conan Doyle
                        </div>
                        <div className="text-xs text-purple-600">
                          Fiction • English
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          <div className="text-blue-600">
                            Alpha Books (Buyer)
                          </div>
                          <div className="text-gray-400">↓</div>
                          <div className="text-green-600">
                            Penguin Random (Seller)
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-lg">₫125M</div>
                        <div className="text-xs text-gray-600">
                          Complete series • 10 years
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm text-red-600">Dispute</div>
                        <div className="text-xs text-red-600">
                          🚫 Copyright conflict
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                          <div
                            className="bg-red-500 h-1 rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                          🚫 Disputed
                        </span>
                      </td>
                      <td className="p-3">
                        <div>15/10/2024</div>
                        <div className="text-xs text-gray-600">6 days ago</div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ View
                          </button>
                          <button className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                            ⚖️ Resolve
                          </button>
                          <button className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                            📞 Contact
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3">
                        <div className="font-mono text-sm">OFF-2024-4589</div>
                        <div className="text-xs text-gray-600">Standard</div>
                      </td>
                      <td className="p-3">
                        <div className="font-medium">
                          Lập Trình Python Cơ Bản
                        </div>
                        <div className="text-sm text-gray-600">
                          Nguyễn Tiến Dũng
                        </div>
                        <div className="text-xs text-purple-600">
                          Technical • Vietnamese
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          <div className="text-blue-600">
                            FPT Education (Buyer)
                          </div>
                          <div className="text-gray-400">↓</div>
                          <div className="text-green-600">Tác giả (Seller)</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-lg">₫32M</div>
                        <div className="text-xs text-gray-600">
                          Educational use • 2 years
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">Round 1/5</div>
                        <div className="text-xs text-blue-600">
                          ⏳ Waiting seller
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                          <div
                            className="bg-blue-500 h-1 rounded-full"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          ⏳ Pending
                        </span>
                      </td>
                      <td className="p-3">
                        <div>20/10/2024</div>
                        <div className="text-xs text-gray-600">1 day ago</div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ View
                          </button>
                          <button className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            🔔 Remind
                          </button>
                          <button className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                            📝 Note
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="bg-gray-50 p-3 border-t border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Showing 1 to 20 of 4,592 offers
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      35
                    </div>
                    <button
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                      disabled
                    >
                      Previous
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded text-sm">
                      1
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      2
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      3
                    </button>
                    <span className="text-sm">...</span>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      230
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Annotation */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-bold text-blue-800 mb-4">
          📝 WF34 - ADMIN OFFER MANAGEMENT ANNOTATIONS
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-blue-600">🎯 Core Analytics</div>
            <div className="text-gray-700">
              <strong>❶-❸ Admin Header:</strong> Platform navigation and
              notifications
              <br />
              <strong>❹-❿ Sidebar:</strong> Admin management modules
              <br />
              <strong>⓫-⓭ Page Actions:</strong> Analytics and export functions
              <br />
              <strong>⓮-⓲ Statistics:</strong> Key offer performance metrics
              <br />
              <strong>⓳-㉑ Insights Cards:</strong> Urgent items, trends, top
              performers
            </div>
          </div>
          <div>
            <div className="font-bold text-blue-600">🔧 Management Tools</div>
            <div className="text-gray-700">
              <strong>㉒-㉗ Search & Filter:</strong> Advanced offer filtering
              system
              <br />
              <strong>㉘-㉛ Quick Filters:</strong> One-click access to critical
              offers
              <br />
              <strong>㉜-㉞ Offers Table:</strong> Comprehensive offer
              management interface
              <br />
              <strong>㉟ Pagination:</strong> Navigate large offer datasets
              <br />
              <strong>Negotiation Tracking:</strong> Round progress and expiry
              monitoring
              <br />
              <strong>Dispute Resolution:</strong> Flag and resolve offer
              conflicts
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white border border-blue-300 rounded">
          <div className="font-bold text-blue-600">📋 Advanced Features</div>
          <ul className="text-gray-700 mt-2 space-y-1">
            <li>
              <strong>Real-time Analytics:</strong> Live offer statistics and
              trending data
            </li>
            <li>
              <strong>Negotiation Monitoring:</strong> Track progress,
              deadlines, and stalled deals
            </li>
            <li>
              <strong>Dispute Management:</strong> Identify and resolve offer
              conflicts
            </li>
            <li>
              <strong>Performance Insights:</strong> Success rates, average
              values, top performers
            </li>
            <li>
              <strong>Automated Alerts:</strong> Expiring offers, disputes,
              high-value deals
            </li>
            <li>
              <strong>Export & Reporting:</strong> Comprehensive data export for
              analysis
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
