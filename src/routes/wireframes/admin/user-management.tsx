import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/admin/user-management")({
  component: AdminUserManagementWireframe,
});

export default function AdminUserManagementWireframe() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        WF33 - ADMIN USER MANAGEMENT
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
                <div className="font-semibold text-red-300">
                  User Management
                </div>
                <div>Products</div>
                <div>Offers</div>
                <div>Contracts</div>
                <div>Reports</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs">🔔 (15)</div>
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
                <div className="flex items-center gap-2 p-2 rounded bg-red-100 border-2 border-red-500">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                  <div className="text-sm font-semibold">
                    👥 User Management
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    6
                  </div>
                  <div className="text-sm">📚 Product Management</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    7
                  </div>
                  <div className="text-sm">💼 Offer Management</div>
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
                  <div className="text-sm">🔐 Role Management</div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    11
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
                    12
                  </div>
                  <h1 className="text-2xl font-bold">User Management</h1>
                </div>
                <p className="text-gray-600">
                  Manage all platform users, KYC verification, and user roles
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    13
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white text-sm rounded">
                    + Create User
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    14
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded">
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
                    15
                  </div>
                  <div className="text-sm text-gray-600">Total Users</div>
                </div>
                <div className="text-2xl font-bold">2,847</div>
                <div className="text-xs text-green-600">
                  ↗ +12.5% this month
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    16
                  </div>
                  <div className="text-sm text-gray-600">Verified Users</div>
                </div>
                <div className="text-2xl font-bold text-green-600">2,156</div>
                <div className="text-xs text-gray-600">
                  75.7% verification rate
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    17
                  </div>
                  <div className="text-sm text-gray-600">Pending KYC</div>
                </div>
                <div className="text-2xl font-bold text-orange-600">127</div>
                <div className="text-xs text-gray-600">Requires attention</div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    18
                  </div>
                  <div className="text-sm text-gray-600">Suspended</div>
                </div>
                <div className="text-2xl font-bold text-red-600">43</div>
                <div className="text-xs text-gray-600">Active suspensions</div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                  <div className="text-sm text-gray-600">Active Today</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">521</div>
                <div className="text-xs text-gray-600">18.3% daily active</div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-6">
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      20
                    </div>
                    <label className="text-sm font-medium">Search Users</label>
                  </div>
                  <input
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="Name, email, ID..."
                    type="text"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      21
                    </div>
                    <label className="text-sm font-medium">Role</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>All Roles</option>
                    <option>Seller</option>
                    <option>Buyer</option>
                    <option>Contract Manager</option>
                    <option>Accountant</option>
                    <option>Moderator</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      22
                    </div>
                    <label className="text-sm font-medium">Status</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Pending KYC</option>
                    <option>Verified</option>
                    <option>Suspended</option>
                    <option>Rejected</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      23
                    </div>
                    <label className="text-sm font-medium">Join Date</label>
                  </div>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    <option>All Time</option>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>Last year</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      24
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded w-full">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  25
                </div>
                <button className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded">
                  ⏰ Pending KYC (127)
                </button>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  26
                </div>
                <button className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded">
                  🚫 Suspended (43)
                </button>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  27
                </div>
                <button className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded">
                  ✅ Recently Verified
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="border border-gray-300 rounded">
              <div className="bg-gray-100 p-3 border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    28
                  </div>
                  <h3 className="font-semibold">Users List (2,847 total)</h3>
                  <div className="ml-auto text-sm text-gray-600">
                    Page 1 of 143 | Show:
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
                          <input className="mr-2" type="checkbox" />
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            29
                          </div>
                          <div>User Info</div>
                        </div>
                      </th>
                      <th className="text-left p-3">Role</th>
                      <th className="text-left p-3">Organization</th>
                      <th className="text-left p-3">KYC Status</th>
                      <th className="text-left p-3">Join Date</th>
                      <th className="text-left p-3">Last Activity</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            30
                          </div>
                          <div>Actions</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" />
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            NT
                          </div>
                          <div>
                            <div className="font-medium">Nguyễn Văn Thành</div>
                            <div className="text-sm text-gray-600">
                              thanh.nguyen@email.com
                            </div>
                            <div className="text-xs text-gray-500">
                              ID: USER_001847
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          Seller
                        </span>
                      </td>
                      <td className="p-3">
                        <div>NXB Trẻ</div>
                        <div className="text-xs text-gray-600">
                          Publishing House
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Verified
                        </span>
                      </td>
                      <td className="p-3">
                        <div>15/03/2024</div>
                        <div className="text-xs text-gray-600">
                          8 months ago
                        </div>
                      </td>
                      <td className="p-3">
                        <div>2 hours ago</div>
                        <div className="text-xs text-gray-600">Online</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          🟢 Active
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ View
                          </button>
                          <button className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            ✏️ Edit
                          </button>
                          <button className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                            ⚠️ Suspend
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-orange-50">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" />
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            LH
                          </div>
                          <div>
                            <div className="font-medium">Lê Thị Hoa</div>
                            <div className="text-sm text-gray-600">
                              hoa.le@bookstore.vn
                            </div>
                            <div className="text-xs text-gray-500">
                              ID: USER_002156
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                          Buyer
                        </span>
                      </td>
                      <td className="p-3">
                        <div>Nhà sách Fahasa</div>
                        <div className="text-xs text-gray-600">
                          Retail Company
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          ⏰ Pending
                        </span>
                      </td>
                      <td className="p-3">
                        <div>20/10/2024</div>
                        <div className="text-xs text-gray-600">1 day ago</div>
                      </td>
                      <td className="p-3">
                        <div>1 day ago</div>
                        <div className="text-xs text-gray-600">Offline</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                          ⏰ Pending KYC
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ View
                          </button>
                          <button className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            ✅ Approve KYC
                          </button>
                          <button className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                            ❌ Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" />
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            PT
                          </div>
                          <div>
                            <div className="font-medium">Phạm Minh Tuấn</div>
                            <div className="text-sm text-gray-600">
                              tuan.pham@suspicious.com
                            </div>
                            <div className="text-xs text-gray-500">
                              ID: USER_001234
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          Seller
                        </span>
                      </td>
                      <td className="p-3">
                        <div>Cá nhân</div>
                        <div className="text-xs text-gray-600">Individual</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                          ❌ Rejected
                        </span>
                      </td>
                      <td className="p-3">
                        <div>10/10/2024</div>
                        <div className="text-xs text-gray-600">11 days ago</div>
                      </td>
                      <td className="p-3">
                        <div>3 days ago</div>
                        <div className="text-xs text-gray-600">Offline</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                          🚫 Suspended
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ View
                          </button>
                          <button className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            🔓 Unsuspend
                          </button>
                          <button className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" />
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            VL
                          </div>
                          <div>
                            <div className="font-medium">Vũ Thị Lan</div>
                            <div className="text-sm text-gray-600">
                              lan.vu@mediacompany.vn
                            </div>
                            <div className="text-xs text-gray-500">
                              ID: USER_002847
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                          Contract Manager
                        </span>
                      </td>
                      <td className="p-3">
                        <div>VTC Media</div>
                        <div className="text-xs text-gray-600">
                          Media Company
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          ✅ Verified
                        </span>
                      </td>
                      <td className="p-3">
                        <div>01/09/2024</div>
                        <div className="text-xs text-gray-600">
                          2 months ago
                        </div>
                      </td>
                      <td className="p-3">
                        <div>30 minutes ago</div>
                        <div className="text-xs text-gray-600">Online</div>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          🟢 Active
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          <button className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            👁️ View
                          </button>
                          <button className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            ✏️ Edit
                          </button>
                          <button className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                            🔧 Change Role
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
                    Showing 1 to 20 of 2,847 users
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      31
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
                      143
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bulk Actions */}
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    32
                  </div>
                  <span className="text-sm font-medium">
                    Bulk Actions (0 selected):
                  </span>
                </div>
                <button
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded"
                  disabled
                >
                  ✅ Verify Selected
                </button>
                <button
                  className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded"
                  disabled
                >
                  ⚠️ Suspend Selected
                </button>
                <button
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                  disabled
                >
                  📧 Send Email
                </button>
                <button
                  className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded"
                  disabled
                >
                  🔄 Change Role
                </button>
                <button
                  className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded"
                  disabled
                >
                  🗑️ Delete Selected
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annotation */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-bold text-blue-800 mb-4">
          📝 WF33 - ADMIN USER MANAGEMENT ANNOTATIONS
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-bold text-blue-600">🎯 Primary Functions</div>
            <div className="text-gray-700">
              <strong>❶-❸ Header Navigation:</strong> Admin portal navigation
              with notifications
              <br />
              <strong>❹-⓫ Sidebar Menu:</strong> Complete admin management
              sections
              <br />
              <strong>⓬ Page Header:</strong> User management title and
              description
              <br />
              <strong>⓭-⓮ Quick Actions:</strong> Create user and export
              functions
              <br />
              <strong>⓯-⓲ Stats Dashboard:</strong> User statistics overview
              <br />
              <strong>⓴-㉔ Search & Filters:</strong> Advanced user filtering
              system
            </div>
          </div>
          <div>
            <div className="font-bold text-blue-600">🔧 Advanced Features</div>
            <div className="text-gray-700">
              <strong>㉕-㉗ Quick Actions:</strong> Filter shortcuts for
              pending/suspended users
              <br />
              <strong>㉘-㉚ Users Table:</strong> Comprehensive user management
              interface
              <br />
              <strong>㉛ Pagination:</strong> Navigate through large user lists
              <br />
              <strong>㉜ Bulk Actions:</strong> Mass operations on selected
              users
              <br />
              <strong>User Status Management:</strong> KYC approval, suspension,
              role changes
              <br />
              <strong>Organization Tracking:</strong> Company vs individual user
              management
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white border border-blue-300 rounded">
          <div className="font-bold text-blue-600">
            📋 Technical Implementation Notes
          </div>
          <ul className="text-gray-700 mt-2 space-y-1">
            <li>
              <strong>Search & Filter:</strong> Real-time filtering with
              debounced search
            </li>
            <li>
              <strong>KYC Management:</strong> Bulk approval/rejection with
              document preview
            </li>
            <li>
              <strong>Role Management:</strong> Dynamic role assignment with
              permission validation
            </li>
            <li>
              <strong>Activity Tracking:</strong> Last login, online status,
              action history
            </li>
            <li>
              <strong>Export Functions:</strong> CSV/Excel export with custom
              date ranges
            </li>
            <li>
              <strong>Bulk Operations:</strong> Mass email, role changes,
              account status updates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
