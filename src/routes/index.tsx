import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: WireframeIndex,
});

function WireframeIndex() {
  const wireframeCategories = [
    {
      title: "🔐 Hệ Thống Xác Thực",
      description: "Giao diện xác thực người dùng và quản lý tài khoản",
      color: "bg-blue-50 border-blue-200",
      headerColor: "text-blue-800",
      wireframes: [
        {
          id: "WF01",
          name: "Trang Chủ",
          path: "/wireframes/landing",
          description: "Trang chủ chính với phần hero",
        },
        {
          id: "WF02",
          name: "Đăng Nhập",
          path: "/wireframes/authentication/login",
          description: "Giao diện đăng nhập người dùng",
        },
        {
          id: "WF03",
          name: "Đăng Ký",
          path: "/wireframes/authentication/signup",
          description: "Biểu mẫu đăng ký người dùng",
        },
        {
          id: "WF04",
          name: "Xác Minh KYC",
          path: "/wireframes/authentication/kyc",
          description: "Xác minh Hiểu Biết Khách Hàng",
        },
        {
          id: "WF22",
          name: "Quên Mật Khẩu",
          path: "/wireframes/authentication/forgot-password",
          description: "Yêu cầu khôi phục mật khẩu",
        },
        {
          id: "WF23",
          name: "Đặt Lại Mật Khẩu",
          path: "/wireframes/authentication/reset-password",
          description: "Biểu mẫu đặt lại mật khẩu",
        },
        {
          id: "WF24",
          name: "Xác Minh Email",
          path: "/wireframes/authentication/email-verification",
          description: "Giao diện xác minh email",
        },
      ],
    },
    {
      title: "👥 Bảng Điều Khiển Người Dùng",
      description:
        "Giao diện bảng điều khiển dựa trên vai trò cho các loại người dùng khác nhau",
      color: "bg-green-50 border-green-200",
      headerColor: "text-green-800",
      wireframes: [
        {
          id: "WF05",
          name: "Bảng Điều Khiển Người Mua",
          path: "/wireframes/buyer/dashboard",
          description: "Bảng điều khiển chính của người mua",
        },
        {
          id: "WF06",
          name: "Bảng Điều Khiển Người Bán",
          path: "/wireframes/seller/dashboard",
          description: "Bảng điều khiển chính của người bán",
        },
        {
          id: "WF07",
          name: "Bảng Điều Khiển Quản Trị",
          path: "/wireframes/admin/dashboard",
          description: "Bảng điều khiển quản trị viên",
        },
        {
          id: "WF21",
          name: "Bảng Điều Khiển Quản Lý Hợp Đồng",
          path: "/wireframes/contract-manager/dashboard",
          description: "Giao diện quản lý hợp đồng",
        },
      ],
    },
    {
      title: "🛒 Thương Mại & Giao Dịch",
      description: "Quản lý sản phẩm, đề xuất và xử lý thanh toán",
      color: "bg-purple-50 border-purple-200",
      headerColor: "text-purple-800",
      wireframes: [
        {
          id: "WF08",
          name: "Chi Tiết Sản Phẩm",
          path: "/wireframes/product",
          description: "Trang thông tin sản phẩm",
        },
        {
          id: "WF09",
          name: "Kết Quả Tìm Kiếm",
          path: "/wireframes/search",
          description: "Giao diện tìm kiếm sản phẩm",
        },
        {
          id: "WF10",
          name: "Thêm Sản Phẩm",
          path: "/wireframes/seller/add-product",
          description: "Biểu mẫu đăng bán sản phẩm",
        },
        {
          id: "WF11",
          name: "Quản Lý Sản Phẩm",
          path: "/wireframes/seller/product-management",
          description: "Quản lý sản phẩm của người bán",
        },
        {
          id: "WF12",
          name: "Tạo Đề Xuất",
          path: "/wireframes/buyer/create-offer",
          description: "Tạo đề xuất của người mua",
        },
        {
          id: "WF13",
          name: "Quản Lý Đề Xuất",
          path: "/wireframes/seller/offer-management",
          description: "Quản lý đề xuất của người bán",
        },
        {
          id: "WF14",
          name: "Chi Tiết Đề Xuất",
          path: "/wireframes/seller/offer",
          description: "Xem chi tiết đề xuất",
        },
        {
          id: "WF15",
          name: "Xem Xét & Ký Đề Xuất",
          path: "/wireframes/buyer/offer-review-sign",
          description: "Xem xét và ký đề xuất",
        },
        {
          id: "WF16",
          name: "Xử Lý Thanh Toán",
          path: "/wireframes/buyer/payment",
          description: "Giao diện cổng thanh toán",
        },
        {
          id: "WF17",
          name: "Xác Minh Thanh Toán",
          path: "/wireframes/accountant/payment-verify",
          description: "Xác minh thanh toán của kế toán",
        },
      ],
    },
    {
      title: "📄 Hợp Đồng & Pháp Lý",
      description: "Tạo hợp đồng, quản lý tài liệu pháp lý và tuân thủ",
      color: "bg-yellow-50 border-yellow-200",
      headerColor: "text-yellow-800",
      wireframes: [
        {
          id: "WF18",
          name: "Tạo Hợp Đồng",
          path: "/wireframes/contract-manager/create-contract",
          description: "Giao diện tạo hợp đồng",
        },
        {
          id: "WF32",
          name: "Mẫu Hợp Đồng",
          path: "/wireframes/legal/contract-templates",
          description: "Quản lý mẫu hợp đồng pháp lý",
        },
      ],
    },
    {
      title: "👤 Hồ Sơ & Cài Đặt",
      description: "Quản lý hồ sơ người dùng và cài đặt tài khoản",
      color: "bg-indigo-50 border-indigo-200",
      headerColor: "text-indigo-800",
      wireframes: [
        {
          id: "WF19",
          name: "Hồ Sơ Người Dùng",
          path: "/wireframes/profile",
          description: "Hiển thị hồ sơ người dùng",
        },
        {
          id: "WF27",
          name: "Quản Lý Hồ Sơ",
          path: "/wireframes/profile-management",
          description: "Quản lý hồ sơ toàn diện",
        },
        {
          id: "WF20",
          name: "Cài Đặt",
          path: "/wireframes/settings",
          description: "Cài đặt tài khoản và tùy chọn",
        },
      ],
    },
    {
      title: "⚙️ Quản Lý Hệ Thống",
      description: "Công cụ quản trị và kiểm duyệt nội dung",
      color: "bg-red-50 border-red-200",
      headerColor: "text-red-800",
      wireframes: [
        {
          id: "WF25",
          name: "Phê Duyệt KYC",
          path: "/wireframes/admin/admin-kyc-approval",
          description: "Giao diện phê duyệt KYC của quản trị",
        },
        {
          id: "WF26",
          name: "Kiểm Duyệt Sản Phẩm",
          path: "/wireframes/admin/admin-product-moderation",
          description: "Kiểm duyệt sản phẩm của quản trị",
        },
        {
          id: "WF33",
          name: "Phân Tích Nâng Cao",
          path: "/wireframes/admin/analytics",
          description: "Phân tích toàn diện nền tảng",
        },
        {
          id: "WF34",
          name: "Giám Sát Hệ Thống",
          path: "/wireframes/admin/system-monitoring",
          description: "Giám sát hiệu suất và bảo mật hệ thống",
        },
      ],
    },
    {
      title: "💼 Quản Lý Nâng Cao",
      description:
        "Giao diện quản lý nâng cao cho quản trị và vai trò chuyên biệt",
      color: "bg-red-50 border-red-200",
      headerColor: "text-red-800",
      wireframes: [
        {
          id: "WF35",
          name: "Quản Lý Hợp Đồng",
          path: "/wireframes/admin/contract-management",
          description: "Giám sát và quản lý hợp đồng của quản trị",
        },
        {
          id: "WF36",
          name: "Báo Cáo Tài Chính",
          path: "/wireframes/admin/financial-reports",
          description: "Phân tích và báo cáo tài chính",
        },
        {
          id: "WF37",
          name: "Quản Lý Vai Trò",
          path: "/wireframes/admin/role-management",
          description: "Quản lý vai trò và quyền hạn người dùng",
        },
        {
          id: "WF38",
          name: "Bảng Điều Khiển Kế Toán",
          path: "/wireframes/accountant/dashboard",
          description: "Bảng điều khiển chuyên biệt của kế toán",
        },
        {
          id: "WF39",
          name: "Bảng Điều Khiển Điều Hành",
          path: "/wireframes/moderator/dashboard",
          description: "Bảng điều khiển kiểm duyệt nội dung",
        },
      ],
    },
    {
      title: "🛍️ Tính Năng Nâng Cao Người Mua",
      description: "Giao diện nâng cao cho người mua và quản lý thư viện",
      color: "bg-blue-50 border-blue-200",
      headerColor: "text-blue-800",
      wireframes: [
        {
          id: "WF40",
          name: "Quản Lý Hợp Đồng Người Mua",
          path: "/wireframes/buyer/contract-management",
          description: "Quản lý danh mục hợp đồng của người mua",
        },
        {
          id: "WF41",
          name: "Theo Dõi Đề Xuất",
          path: "/wireframes/buyer/offer-tracking",
          description: "Theo dõi và phân tích đề xuất nâng cao",
        },
        {
          id: "WF44",
          name: "Thư Viện Kỹ Thuật Số",
          path: "/wireframes/buyer/library",
          description: "Thư viện sách kỹ thuật số cá nhân",
        },
      ],
    },
    {
      title: "📊 Công Cụ Nâng Cao Người Bán",
      description: "Phân tích nâng cao và quản lý hợp đồng cho người bán",
      color: "bg-green-50 border-green-200",
      headerColor: "text-green-800",
      wireframes: [
        {
          id: "WF42",
          name: "Quản Lý Hợp Đồng Người Bán",
          path: "/wireframes/seller/contract-management",
          description: "Quản lý hợp đồng và doanh thu của người bán",
        },
        {
          id: "WF43",
          name: "Phân Tích Đề Xuất",
          path: "/wireframes/seller/offer-analytics",
          description: "Phân tích hiệu suất đề xuất nâng cao",
        },
      ],
    },
    {
      title: "⚖️ Pháp Lý & Giao Tiếp",
      description: "Quản lý tài liệu pháp lý và trung tâm giao tiếp thống nhất",
      color: "bg-purple-50 border-purple-200",
      headerColor: "text-purple-800",
      wireframes: [
        {
          id: "WF45",
          name: "Trung Tâm Tài Liệu Pháp Lý",
          path: "/wireframes/legal/document-center",
          description: "Kho tài liệu pháp lý và mẫu",
        },
        {
          id: "WF46",
          name: "Giải Quyết Tranh Chấp",
          path: "/wireframes/legal/dispute-resolution",
          description: "Hệ thống quản lý tranh chấp hợp đồng",
        },
        {
          id: "WF47",
          name: "Trung Tâm Giao Tiếp",
          path: "/wireframes/communication-center",
          description: "Trung tâm nhắn tin và giao tiếp thống nhất",
        },
      ],
    },
    {
      title: "🔧 Hệ Thống & Hỗ Trợ",
      description: "Hệ thống hỗ trợ, thông báo và giao hàng tệp",
      color: "bg-cyan-50 border-cyan-200",
      headerColor: "text-cyan-800",
      wireframes: [
        {
          id: "WF28",
          name: "Giao Hàng & Tải Về",
          path: "/wireframes/system/delivery-download",
          description: "Hệ thống giao hàng và tải về tệp",
        },
        {
          id: "WF29",
          name: "Phiếu Hỗ Trợ",
          path: "/wireframes/system/support-tickets",
          description: "Hệ thống phiếu hỗ trợ khách hàng",
        },
        {
          id: "WF30",
          name: "Trung Tâm Thông Báo",
          path: "/wireframes/system/notification-center",
          description: "Quản lý thông báo người dùng",
        },
        {
          id: "WF31",
          name: "Mẫu Email",
          path: "/wireframes/system/email-templates",
          description: "Hệ thống quản lý mẫu email",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🏢 Copyright Hub - Bộ Sưu Tập Wireframes
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Thư viện wireframe toàn diện cho nền tảng thương mại điện tử kỹ
              thuật số
            </p>
            <div className="text-sm text-gray-500">
              Tổng cộng:{" "}
              <span className="font-semibold text-purple-600">
                47 Wireframes
              </span>{" "}
              trong 9 danh mục • Hoàn thành 100%
            </div>
          </div>
        </div>
      </div>

      {/* Wireframe Categories */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {wireframeCategories.map((category, categoryIndex) => (
            <div
              className={`${category.color} border-2 rounded-lg p-6`}
              key={categoryIndex}
            >
              <div className="mb-6">
                <h2
                  className={`text-2xl font-bold ${category.headerColor} mb-2`}
                >
                  {category.title}
                </h2>
                <p className="text-gray-700">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.wireframes.map((wireframe, wireframeIndex) => (
                  <Link
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-purple-300 transition-all duration-200 group"
                    key={wireframeIndex}
                    to={wireframe.path}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {wireframe.id.replace("WF", "")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {wireframe.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {wireframe.description}
                        </p>
                        <div className="text-xs text-purple-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          Nhấp để xem wireframe →
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
