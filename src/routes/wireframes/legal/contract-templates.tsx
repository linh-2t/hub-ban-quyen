import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wireframes/legal/contract-templates")({
  component: ContractTemplatesWireframe,
});

export default function ContractTemplatesWireframe() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-purple-600">
        WF32 - MẪU HỢP ĐỒNG & QUẢN LÝ PHÁP LÝ
      </h1>

      <div className="border-4 border-gray-800">
        {/* Header */}
        <div className="border-b-2 border-gray-800 p-4 bg-purple-50 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
              <div className="text-sm font-semibold">
                🏢 Copyright Hub - Pháp lý
              </div>
            </div>
            <div className="px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-xs font-bold text-purple-700">
              TRÌNH QUẢN LÝ HỢP ĐỒNG & PHÁP LÝ
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
              <span className="text-xs">Đội pháp lý</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
              <button className="text-xs text-blue-600 underline" type="button">
                ← Bảng điều khiển pháp lý
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-80 bg-gray-100 border-r-2 border-gray-800 p-4">
            {/* Create New Contract */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
                <button
                  className="flex-1 bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700"
                  type="button"
                >
                  ➕ Tạo hợp đồng mới
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <button
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
                  type="button"
                >
                  📋 Nhập mẫu
                </button>
              </div>
            </div>

            {/* Contract Types */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  6
                </div>
                <h3 className="font-bold">Loại hợp đồng</h3>
              </div>

              <div className="space-y-2">
                <button
                  className="w-full text-left p-2 bg-purple-100 border-l-4 border-purple-500 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        7
                      </div>
                      <span>Tất cả hợp đồng</span>
                    </div>
                    <span className="text-xs text-purple-600 font-bold">
                      (47)
                    </span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        8
                      </div>
                      <span>🤝 Thỏa thuận cấp phép</span>
                    </div>
                    <span className="text-xs text-gray-500">(18)</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        9
                      </div>
                      <span>💼 Hợp đồng dịch vụ</span>
                    </div>
                    <span className="text-xs text-gray-500">(12)</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        10
                      </div>
                      <span>⚖️ Điều khoản & Điều kiện</span>
                    </div>
                    <span className="text-xs text-gray-500">(8)</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        11
                      </div>
                      <span>🔒 Chính sách bảo mật</span>
                    </div>
                    <span className="text-xs text-gray-500">(5)</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        12
                      </div>
                      <span>📋 Chính sách DMCA</span>
                    </div>
                    <span className="text-xs text-gray-500">(4)</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Contract Status */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  13
                </div>
                <h3 className="font-bold">Trạng thái hợp đồng</h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      14
                    </div>
                    <span className="text-sm">✅ Hoạt động</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    34
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      15
                    </div>
                    <span className="text-sm">📝 Bản nháp</span>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    8
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      16
                    </div>
                    <span className="text-sm">🔍 Đang xem xét</span>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    3
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      17
                    </div>
                    <span className="text-sm">📁 Lưu trữ</span>
                  </div>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* Legal Tools */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  18
                </div>
                <h3 className="font-bold">Công cụ pháp lý</h3>
              </div>

              <div className="space-y-2">
                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      19
                    </div>
                    <span>🔍 Kiểm tra tuân thủ pháp lý</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      20
                    </div>
                    <span>📊 Phân tích hợp đồng</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      21
                    </div>
                    <span>📋 Lịch sử phiên bản</span>
                  </div>
                </button>

                <button
                  className="w-full text-left p-2 hover:bg-gray-200 rounded text-sm"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      22
                    </div>
                    <span>⚖️ Cập nhật pháp lý</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Compliance Dashboard */}
            <div className="bg-white border border-gray-300 rounded p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  23
                </div>
                <h4 className="font-semibold text-sm">Trạng thái tuân thủ</h4>
              </div>
              <div className="text-xs text-gray-600 space-y-2">
                <div className="flex justify-between items-center">
                  <span>Tuân thủ GDPR</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    ✓ Tuân thủ
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tuân thủ CCPA</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    ✓ Tuân thủ
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sẵn sàng DMCA</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    ⚠ Cần xem lại
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Contract Header */}
            <div className="border-b-2 border-gray-800 p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    24
                  </div>
                  <h2 className="text-lg font-bold">Mẫu hợp đồng (47)</h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      25
                    </div>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                      <option>Tất cả loại</option>
                      <option>Thỏa thuận cấp phép</option>
                      <option>Hợp đồng dịch vụ</option>
                      <option>Điều khoản & Điều kiện</option>
                      <option>Chính sách bảo mật</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      26
                    </div>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                      <option>Tất cả trạng thái</option>
                      <option>Hoạt động</option>
                      <option>Bản nháp</option>
                      <option>Đang xem xét</option>
                      <option>Lưu trữ</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    27
                  </div>
                  <input
                    className="border border-gray-300 rounded px-3 py-1 text-sm w-64"
                    placeholder="Tìm hợp đồng..."
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    28
                  </div>
                  <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>Sắp xếp theo ngày</option>
                    <option>Sắp xếp theo tên</option>
                    <option>Sắp xếp theo loại</option>
                    <option>Sắp xếp theo lượt sử dụng</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contract List */}
            <div className="p-4">
              <div className="space-y-4">
                {/* Standard License Agreement */}
                <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      29
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Thỏa thuận cấp phép sáng tạo tiêu chuẩn
                          </h4>
                          <div className="text-sm text-gray-600">
                            Thỏa thuận cấp phép • ID: CNT-001 • v3.2
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-1">
                            ✅ Hoạt động
                          </div>
                          <div className="text-xs text-gray-500">
                            Cập nhật: 1 tuần trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Điều khoản cấp phép tiêu chuẩn cho các tài sản kỹ thuật
                        số sáng tạo bao gồm đồ họa, mẫu và nội dung đa phương
                        tiện. Bao gồm quyền sử dụng thương mại và cá nhân.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              30
                            </div>
                            <span>Đã được sử dụng trong 2.847 giao dịch</span>
                          </div>
                          <span>
                            Được xem xét lần cuối: Đội pháp lý - 1 tuần trước
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            31
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Xem
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            32
                          </div>
                          <button
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded hover:bg-purple-200"
                            type="button"
                          >
                            Sửa
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform Terms of Service */}
                <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      33
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Điều khoản dịch vụ nền tảng
                          </h4>
                          <div className="text-sm text-gray-600">
                            Điều khoản & Điều kiện • ID: CNT-005 • v2.1
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-1">
                            ✅ Hoạt động
                          </div>
                          <div className="text-xs text-gray-500">
                            Cập nhật: 2 tuần trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Điều khoản toàn diện điều chỉnh việc sử dụng nền tảng,
                        trách nhiệm người dùng, quyền sở hữu trí tuệ và thủ tục
                        giải quyết tranh chấp.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              34
                            </div>
                            <span>Được 15.423 người dùng chấp nhận</span>
                          </div>
                          <span>Tuân thủ: GDPR, CCPA</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            35
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Xem
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            36
                          </div>
                          <button
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded hover:bg-purple-200"
                            type="button"
                          >
                            Sửa
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Custom Service Agreement - Draft */}
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      37
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Hợp đồng dịch vụ thiết kế tùy chỉnh
                          </h4>
                          <div className="text-sm text-gray-600">
                            Hợp đồng dịch vụ • ID: CNT-023 • v1.0 (Bản nháp)
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full mb-1">
                            📝 Bản nháp
                          </div>
                          <div className="text-xs text-gray-500">
                            Tạo: 3 ngày trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Mẫu hợp đồng cho dịch vụ thiết kế tùy chỉnh bao gồm phạm
                        vi dự án, kết quả bàn giao, thời gian và các điều khoản
                        quyền sở hữu trí tuệ.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              38
                            </div>
                            <span>Bản nháp bởi: Đội pháp lý</span>
                          </div>
                          <span>Đang chờ xem xét pháp lý</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            39
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Xem xét
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            40
                          </div>
                          <button
                            className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200"
                            type="button"
                          >
                            Phê duyệt
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DMCA Policy */}
                <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      41
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Chính sách DMCA
                          </h4>
                          <div className="text-sm text-gray-600">
                            Chính sách DMCA • ID: CNT-012 • v1.8
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-1">
                            ✅ Hoạt động
                          </div>
                          <div className="text-xs text-gray-500">
                            Cập nhật: 1 tháng trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Chính sách tuân thủ Digital Millennium Copyright Act bao
                        gồm quy trình gỡ bỏ nội dung, quy trình phản hồi và
                        chính sách đối với người vi phạm lặp lại.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              42
                            </div>
                            <span>34 vụ DMCA đã xử lý</span>
                          </div>
                          <span>Tuân thủ luật liên bang Hoa Kỳ</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            43
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Xem
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            44
                          </div>
                          <button
                            className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded hover:bg-orange-200"
                            type="button"
                          >
                            Cần xem lại
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Privacy Policy */}
                <div className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      45
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Chính sách bảo mật
                          </h4>
                          <div className="text-sm text-gray-600">
                            Chính sách bảo mật • ID: CNT-003 • v4.1
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-1">
                            ✅ Hoạt động
                          </div>
                          <div className="text-xs text-gray-500">
                            Cập nhật: 6 tháng trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Chính sách bảo mật toàn diện về thu thập dữ liệu, sử
                        dụng, chia sẻ, quyền của người dùng và tuân thủ các luật
                        bảo mật quốc tế.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              46
                            </div>
                            <span>Tuân thủ GDPR & CCPA</span>
                          </div>
                          <span>15.423 người dùng đã chấp nhận</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            47
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Xem
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            48
                          </div>
                          <button
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded hover:bg-purple-200"
                            type="button"
                          >
                            Sửa
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enterprise License Template - Under Review */}
                <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      49
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">
                            Mẫu hợp đồng cấp phép doanh nghiệp
                          </h4>
                          <div className="text-sm text-gray-600">
                            Thỏa thuận cấp phép • ID: CNT-034 • v2.0
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-1">
                            🔍 Đang xem xét
                          </div>
                          <div className="text-xs text-gray-500">
                            Cập nhật: 2 ngày trước
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 mb-3">
                        Điều khoản mở rộng cho khách hàng doanh nghiệp bao gồm
                        quyền sử dụng không giới hạn, quyền nhãn trắng và các
                        tùy chọn cấp phép độc quyền.
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              50
                            </div>
                            <span>Đang xem xét pháp lý</span>
                          </div>
                          <span>Dự kiến hoàn thành: 3 ngày</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            51
                          </div>
                          <button
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                            type="button"
                          >
                            Xem
                          </button>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            52
                          </div>
                          <button
                            className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded hover:bg-yellow-200"
                            type="button"
                          >
                            Thêm bình luận
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  Hiển thị 6 trên 47 hợp đồng
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    53
                  </div>
                  <button
                    className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50"
                    type="button"
                  >
                    ← Trang trước
                  </button>
                  <span className="px-3 py-2 bg-purple-600 text-white rounded">
                    1
                  </span>
                  <button
                    className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50"
                    type="button"
                  >
                    2
                  </button>
                  <button
                    className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50"
                    type="button"
                  >
                    3
                  </button>
                  <button
                    className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50"
                    type="button"
                  >
                    Trang sau →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded mt-8">
        <h2 className="text-xl font-bold mb-4 text-purple-800">
          CHÚ THÍCH CHI TIẾT
        </h2>

        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ❶❷❸ Đầu mục & Điều hướng
            </div>
            <div className="text-gray-700">
              <strong>❶ Thương hiệu pháp lý:</strong> Phần quản lý hợp đồng và
              pháp lý
              <br />
              <strong>❷ Ngữ cảnh đội pháp lý:</strong> Hiển thị nhận dạng thành
              viên đội pháp lý
              <br />
              <strong>❸ Điều hướng:</strong> Quay về bảng điều khiển pháp lý
              <br />
              <strong>Kiểm soát truy cập:</strong> Chỉ giới hạn cho thành viên
              đội pháp lý
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ❹❺❻ Tạo hợp đồng
            </div>
            <div className="text-gray-700">
              <strong>❹ Hợp đồng mới:</strong> Khởi chạy trình hướng dẫn tạo hợp
              đồng
              <br />
              <strong>❺ Nhập mẫu:</strong> Nhập mẫu hợp đồng từ nguồn ngoài
              <br />
              <strong>❻ Tổ chức hợp đồng:</strong> Cấu trúc theo loại hợp đồng
              <br />
              <strong>Thư viện mẫu:</strong> Mẫu văn bản pháp lý sẵn có
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ❼❽❾❿⓫⓬ Danh mục hợp đồng
            </div>
            <div className="text-gray-700">
              <strong>Sắp xếp theo loại hợp đồng:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>❼ Tất cả hợp đồng:</strong> Bộ sưu tập hợp đồng đầy đủ
                </li>
                <li>
                  <strong>❽ Thỏa thuận cấp phép:</strong> Điều khoản cấp phép
                  người dùng
                </li>
                <li>
                  <strong>❾ Hợp đồng dịch vụ:</strong> Hợp đồng cung cấp dịch vụ
                </li>
                <li>
                  <strong>❿ Điều khoản & Điều kiện:</strong> Điều khoản sử dụng
                  nền tảng
                </li>
                <li>
                  <strong>⓫ Chính sách bảo mật:</strong> Chính sách bảo vệ dữ
                  liệu
                </li>
                <li>
                  <strong>⓬ Chính sách DMCA:</strong> Quy trình bảo vệ bản quyền
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ⓭⓮⓯⓰⓱ Theo dõi trạng thái hợp đồng
            </div>
            <div className="text-gray-700">
              <strong>⓭ Quản lý trạng thái:</strong> Theo dõi các giai đoạn vòng
              đời hợp đồng
              <br />
              <strong>Danh mục trạng thái:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>⓮ Hoạt động:</strong> Hợp đồng đang được sử dụng
                </li>
                <li>
                  <strong>⓯ Bản nháp:</strong> Hợp đồng đang soạn thảo
                </li>
                <li>
                  <strong>⓰ Đang xem xét:</strong> Đang tiến hành xem xét pháp
                  lý
                </li>
                <li>
                  <strong>⓱ Lưu trữ:</strong> Phiên bản hợp đồng đã nghỉ sử dụng
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ⓲⓳⓴㉑㉒㉓ Công cụ pháp lý & Tuân thủ
            </div>
            <div className="text-gray-700">
              <strong>Công cụ quản lý pháp lý:</strong>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  <strong>⓳ Kiểm tra tuân thủ:</strong> Kiểm tra tự động tuân
                  thủ pháp lý
                </li>
                <li>
                  <strong>⓴ Phân tích:</strong> Chỉ số sử dụng và hiệu suất hợp
                  đồng
                </li>
                <li>
                  <strong>㉑ Lịch sử phiên bản:</strong> Theo dõi sửa đổi hợp
                  đồng
                </li>
                <li>
                  <strong>㉒ Cập nhật pháp lý:</strong> Giám sát thay đổi quy
                  định
                </li>
              </ul>
              <strong>㉓ Bảng tuân thủ:</strong> Trạng thái tuân thủ GDPR, CCPA,
              DMCA
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉔㉕㉖㉗㉘ Quản lý hợp đồng
            </div>
            <div className="text-gray-700">
              <strong>㉔ Tổng quan hợp đồng:</strong> Tổng số và các tuỳ chọn
              quản lý
              <br />
              <strong>㉕ Bộ lọc theo loại:</strong> Lọc theo danh mục hợp đồng
              <br />
              <strong>㉖ Bộ lọc trạng thái:</strong> Lọc theo trạng thái hợp
              đồng
              <br />
              <strong>㉗ Tìm kiếm:</strong> Tìm hợp đồng theo nội dung/tên
              <br />
              <strong>㉘ Tùy chọn sắp xếp:</strong> Sắp xếp theo ngày, tên,
              loại, lượt sử dụng
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉙㉚㉛㉜ Mẫu hợp đồng cấp phép tiêu chuẩn
            </div>
            <div className="text-gray-700">
              <strong>㉙ Hợp đồng chính:</strong> Mẫu cấp phép sử dụng nhiều
              nhất
              <br />
              <strong>㉚ Thống kê sử dụng:</strong> 2.847 giao dịch sử dụng mẫu
              này
              <br />
              <strong>㉛ Chức năng xem:</strong> Xem trước nội dung hợp đồng
              <br />
              <strong>㉜ Chức năng sửa:</strong> Chỉnh sửa điều khoản hợp đồng
              <br />
              <strong>Tác động kinh doanh:</strong> Thỏa thuận tạo doanh thu
              chính
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㉝㉞㉟㊱ Hợp đồng điều khoản nền tảng
            </div>
            <div className="text-gray-700">
              <strong>㉝ Điều khoản nền tảng:</strong> Văn bản quản trị nền tảng
              chính
              <br />
              <strong>㉞ Chấp nhận người dùng:</strong> 15.423 người dùng đã
              chấp nhận
              <br />
              <strong>㉟ Truy cập xem:</strong> Xem nội dung điều khoản
              <br />
              <strong>㊱ Quyền sửa:</strong> Chỉnh sửa điều khoản nền tảng
              <br />
              <strong>Tuân thủ:</strong> Tuân thủ GDPR & CCPA
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㊲㊳㊴㊵ Hợp đồng bản nháp
            </div>
            <div className="text-gray-700">
              <strong>㊲ Hợp đồng dịch vụ:</strong> Mẫu dịch vụ thiết kế tùy
              chỉnh
              <br />
              <strong>㊳ Trạng thái bản nháp:</strong> Đang chờ xem xét pháp lý
              <br />
              <strong>㊴ Chức năng xem xét:</strong> Giao diện xem xét của đội
              pháp lý
              <br />
              <strong>㊵ Chức năng phê duyệt:</strong> Phê duyệt để chuyển sang
              hoạt động
              <br />
              <strong>Giai đoạn phát triển:</strong> Từ bản nháp đến hợp đồng
              hoạt động
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㊶㊷㊸㊹ Hợp đồng tuân thủ pháp lý
            </div>
            <div className="text-gray-700">
              <strong>㊶ Chính sách DMCA:</strong> Quy trình bảo vệ bản quyền
              <br />
              <strong>㊷ Thống kê vụ việc:</strong> 34 vụ DMCA đã xử lý
              <br />
              <strong>㊸ Xem chính sách:</strong> Xem quy trình DMCA
              <br />
              <strong>㊹ Cần xem lại:</strong> Cần xem xét định kỳ bởi pháp lý
              <br />
              <strong>Tầm quan trọng pháp lý:</strong> Yêu cầu tuân thủ luật
              liên bang
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㊺㊻㊼㊽ Hợp đồng chính sách bảo mật
            </div>
            <div className="text-gray-700">
              <strong>㊺ Chính sách bảo mật:</strong> Quản trị bảo vệ dữ liệu
              <br />
              <strong>㊻ Tuân thủ quốc tế:</strong> Tuân thủ GDPR & CCPA
              <br />
              <strong>㊼ Xem chính sách:</strong> Xem các điều khoản bảo mật
              <br />
              <strong>㊽ Chỉnh sửa chính sách:</strong> Sửa đổi điều khoản bảo
              mật
              <br />
              <strong>Bảo vệ dữ liệu:</strong> Bảo vệ quyền riêng tư của người
              dùng
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">
              ㊾㊿51️⃣52️⃣ Quy trình xem xét
            </div>
            <div className="text-gray-700">
              <strong>㊾ Mẫu cấp phép doanh nghiệp:</strong> Thỏa thuận khách
              hàng giá trị cao
              <br />
              <strong>㊿ Trạng thái xem xét:</strong> Đang trong quy trình xem
              xét pháp lý
              <br />
              <strong>51 Truy cập xem:</strong> Xem phiên bản hiện tại
              <br />
              <strong>52 Hệ thống bình luận:</strong> Thêm nhận xét xem xét pháp
              lý
              <br />
              <strong>Thời gian xem xét:</strong> Dự kiến hoàn thành trong 3
              ngày
            </div>
          </div>

          <div className="bg-white p-3 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600 mb-1">53 Phân trang</div>
            <div className="text-gray-700">
              <strong>Điều hướng hợp đồng:</strong> Xử lý bộ sưu tập hợp đồng
              lớn
              <br />
              <strong>Giữ bộ lọc:</strong> Duy trì bộ lọc qua các trang
              <br />
              <strong>Hiệu suất:</strong> Tải hiệu quả để cải thiện hiệu suất
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-800 mb-2">
            ⚖️ QUY TRÌNH LÀM VIỆC HỢP ĐỒNG PHÁP LÝ
          </div>
          <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-5">
            <li>
              <strong>Tạo hợp đồng:</strong> Soạn thảo hợp đồng mới từ mẫu hoặc
              từ đầu
            </li>
            <li>
              <strong>Xem xét pháp lý:</strong> Đội pháp lý kiểm tra bản nháp để
              đảm bảo tuân thủ
            </li>
            <li>
              <strong>Phê duyệt bởi bên liên quan:</strong> Các bên liên quan
              kinh doanh phê duyệt điều khoản
            </li>
            <li>
              <strong>Kiểm tra tuân thủ:</strong> Kiểm tra tuân thủ tự động
            </li>
            <li>
              <strong>Quản lý phiên bản:</strong> Theo dõi thay đổi và lưu trữ
              lịch sử
            </li>
            <li>
              <strong>Kích hoạt:</strong> Triển khai hợp đồng để sử dụng trên
              nền tảng
            </li>
            <li>
              <strong>Giám sát:</strong> Theo dõi sử dụng và chỉ số hiệu suất
            </li>
            <li>
              <strong>Bảo trì:</strong> Rà soát và cập nhật định kỳ khi cần
              thiết
            </li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500">
          <div className="font-bold text-blue-800 mb-2">
            🔒 TUÂN THỦ & BẢO MẬT
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Tuân thủ GDPR:</strong> Tuân thủ quy định bảo vệ dữ liệu
              EU
            </li>
            <li>
              <strong>Tuân thủ CCPA:</strong> Tuân thủ Đạo luật Quyền riêng tư
              người tiêu dùng California
            </li>
            <li>
              <strong>Tuân thủ DMCA:</strong> Tuân thủ Digital Millennium
              Copyright Act
            </li>
            <li>
              <strong>Quản lý phiên bản:</strong> Hồ sơ kiểm toán đầy đủ cho
              thay đổi hợp đồng
            </li>
            <li>
              <strong>Kiểm soát truy cập:</strong> Quyền quản lý hợp đồng theo
              vai trò
            </li>
            <li>
              <strong>Xác thực pháp lý:</strong> Công cụ kiểm tra tuân thủ tự
              động
            </li>
            <li>
              <strong>Rà soát định kỳ:</strong> Chu kỳ rà soát pháp lý đã lên
              lịch
            </li>
            <li>
              <strong>Cập nhật quy định:</strong> Giám sát và thích ứng với thay
              đổi pháp luật
            </li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
          <div className="font-bold text-green-800 mb-2">
            📋 TÍNH NĂNG QUẢN LÝ HỢP ĐỒNG
          </div>
          <ul className="text-sm text-gray-700 space-y-1 list-disc ml-5">
            <li>
              <strong>Thư viện mẫu:</strong> Mẫu văn bản pháp lý sẵn có
            </li>
            <li>
              <strong>Chèn biến:</strong> Nội dung động trong hợp đồng
            </li>
            <li>
              <strong>Hỗ trợ đa ngôn ngữ:</strong> Phiên bản hợp đồng địa phương
              hóa
            </li>
            <li>
              <strong>Chữ ký điện tử:</strong> Tích hợp chữ ký điện tử
            </li>
            <li>
              <strong>Bảng điều khiển phân tích:</strong> Chỉ số sử dụng và hiệu
              suất hợp đồng
            </li>
            <li>
              <strong>Luồng công việc tự động:</strong> Quy trình phê duyệt và
              triển khai hợp đồng
            </li>
            <li>
              <strong>API tích hợp:</strong> Kết nối với hệ thống pháp lý bên
              ngoài
            </li>
            <li>
              <strong>Sao lưu & phục hồi:</strong> Hệ thống bảo vệ dữ liệu hợp
              đồng
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
