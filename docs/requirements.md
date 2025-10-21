# PHASE 1: CORE FEATURES

# MVP (3-4 THÁNG)

---

## 1. TỔNG QUAN DỰ ÁN

### 1.1 Mục tiêu

Xây dựng nền tảng sàn thương mại điện tử chuyên biệt về mua bán bản quyền sở hữu trí tuệ, tập trung vào sách và tài liệu.

### 1.2 Phạm vi Phase 1

- **Thời gian**: 3-4 tháng
- **Loại bản quyền**: Sách, tài liệu, sách nói
- **Người dùng**: Biên tập viên, nhà xuất bản, tác giả, người mua bản quyền
- **Chức năng chính**: Upload catalog, quản lý offer, quy trình hợp đồng cơ bản, thanh toán

---

## 2. CÁC NHÓM NGƯỜI DÙNG VÀ VAI TRÒ

### 2.1 User Roles

| Vai trò | Mô tả | Quyền hạn chính |
| --- | --- | --- |
| **Admin** | Quản trị hệ thống | Full access, quản lý users, phân quyền, cấu hình hệ thống |
| **Seller (Người bán bản quyền)** | Tác giả, NXB, người sở hữu bản quyền | Upload catalog, quản lý sản phẩm, nhận offer, thương lượng |
| **Buyer (Người mua bản quyền)** | Biên tập viên, NXB, công ty media | Tìm kiếm, tạo offer, thương lượng, mua bản quyền |
| **Contract Manager** | Nhân viên xử lý hợp đồng | Tạo/chỉnh sửa template hợp đồng, kiểm duyệt hợp đồng |
| **Accountant** | Kế toán | Duyệt thanh toán, quản lý giao dịch tài chính |
| **Moderator** | Kiểm duyệt viên | Duyệt sản phẩm, KYC thủ công, kiểm tra thông tin |

### 2.2 User Journey

### Journey 1: Seller Upload Catalog

```
Đăng ký/Đăng nhập → KYC thủ công (nếu cần) → Upload PDF catalog →
Điền thông tin sách (metadata) → Submit để kiểm duyệt →
Moderator duyệt → Sản phẩm xuất hiện trên nền tảng →
Nhận offer từ buyer → Thương lượng → Xác nhận offer →
Contract Manager tạo hợp đồng → Review và ký → Nhận thanh toán

```

### Journey 2: Buyer Mua Bản Quyền

```
Đăng ký/Đăng nhập → KYC thủ công (nếu cần) →
Tìm kiếm sản phẩm (text search) → Xem chi tiết sản phẩm →
Tạo offer thủ công → Gửi cho seller → Thương lượng →
Đồng ý điều khoản → Contract Manager tạo hợp đồng →
Review và ký số → Thanh toán → Accountant duyệt →
Nhận thông báo hoàn tất → Nhận bản số hóa + giấy chứng nhận

```

---

## 3. CHỨC NĂNG CHI TIẾT

### 3.1 HỆ THỐNG XÁC THỰC & QUẢN LÝ NGƯỜI DÙNG

### 3.1.1 Đăng ký & Đăng nhập

**Tính năng:**

- Đăng ký bằng email/password
- Đăng nhập bằng email/password
- Quên mật khẩu (reset qua email)
- Xác thực email sau khi đăng ký

**Form đăng ký bắt buộc:**

- Email
- Mật khẩu (tối thiểu 8 ký tự, có chữ hoa, số, ký tự đặc biệt)
- Họ tên
- Số điện thoại
- Vai trò: Seller / Buyer
- Loại tổ chức: Cá nhân / Công ty
- Tên công ty (nếu là công ty)
- Mã giới thiệu (optional)

**Technical:**

- JWT token-based authentication
- Session timeout: 24h
- Refresh token mechanism

### 3.1.2 KYC Thủ công (Phase 1)

**Quy trình:**

1. User đăng ký → Status: "Pending Verification"
2. User upload tài liệu:
    - CMND/CCCD/Passport (cá nhân)
    - Giấy phép kinh doanh (công ty)
    - Giấy tờ chứng minh sở hữu bản quyền (cho seller)
3. Moderator review thủ công trong admin dashboard
4. Approve/Reject với ghi chú
5. User nhận email thông báo kết quả
6. Sau khi approved → Status: "Verified"

**Business Rules:**

- Chỉ verified users mới được upload catalog (seller) hoặc tạo offer (buyer)
- KYC timeout: 7 ngày, sau đó tự động reject và yêu cầu submit lại

### 3.1.3 Profile Management

- Xem/chỉnh sửa thông tin cá nhân
- Đổi mật khẩu
- Upload avatar
- Xem lịch sử giao dịch

---

### 3.2 QUẢN LÝ SẢN PHẨM (CATALOG)

### 3.2.1 Upload Catalog (Seller)

**Quy trình:**

1. Seller đăng nhập (verified status)
2. Vào "My Products" → "Add New Product"
3. Upload PDF catalog (file size tối đa 50MB) hoặc import từ excel
4. Hệ thống lưu trữ PDF hoặc thông tin từ excel và tạo preview thumbnail (page 1)

**Metadata Form (điền thủ công):**

- **Thông tin sách:**
    - Tên sách (bắt buộc)
    - Tác giả (bắt buộc)
    - Loại sản phẩm: Sách in / Sách nói / Tài liệu / E-book (bắt buộc)
    - Thể loại: Văn học, Kinh tế, Khoa học, Giáo dục, etc. (dropdown, bắt buộc)
    - ISBN (optional)
    - Năm xuất bản
    - Nhà xuất bản gốc (nếu có)
    - Ngôn ngữ: Tiếng Việt / Tiếng Anh / Khác
    - Số trang (cho sách in/tài liệu)
    - Thời lượng (cho sách nói, format: HH:MM:SS)
- **Mô tả & Nội dung:**
    - Mô tả ngắn (tóm tắt, tối đa 500 ký tự)
    - Mô tả chi tiết (rich text editor, không giới hạn)
    - Keywords/Tags (để hỗ trợ tìm kiếm)
- **Thông tin bản quyền:**
    - Loại bản quyền đang sở hữu: Toàn bộ / In ấn / Phát hành số / Chuyển thể / Dịch thuật
    - Vùng lãnh thổ: Việt Nam / Toàn cầu / Khu vực (liệt kê)
    - Tình trạng bản quyền: Độc quyền / Phi độc quyền
    - Ngày hết hạn bản quyền hiện tại (nếu có)
- **Giá & Điều khoản:**
    - Giá đề xuất (VND)
    - Loại deal: Một lần / Chia sẻ doanh thu / Advance + Royalty
    - Ghi chú điều khoản đặc biệt (optional)
1. Submit → Status: "Pending Approval"
2. Moderator review trong 2-3 ngày làm việc
3. Approved → Hiển thị trên marketplace

**Quản lý sản phẩm:**

- Xem danh sách sản phẩm của mình
- Edit metadata (chỉ khi status = Draft hoặc Rejected)
- Không thể edit khi có offer đang active
- Có thể "Hide" sản phẩm tạm thời (không hiển thị trên marketplace)
- Xem lịch sử offers cho mỗi sản phẩm

### 3.2.2 Trang Thông Tin Sản Phẩm (Public)

**Hiển thị:**

- Thumbnail preview (từ PDF page 1)
- Tên sách
- Tác giả
- Loại sản phẩm
- Thể loại
- Mô tả ngắn
- Mô tả chi tiết
- Metadata: ISBN, năm xuất bản, số trang, ngôn ngữ, etc.
- Thông tin bản quyền: loại, vùng lãnh thổ, tình trạng
- Seller info: Tên, rating (Phase 2), verified badge
- Button: "Make an Offer" (chỉ hiển thị cho verified buyers)

**Không hiển thị:**

- File PDF đầy đủ (chỉ preview)
- Giá chính xác từ seller (giá sẽ thương lượng qua offer)

---

### 3.3 TÌM KIẾM & LỌC SẢN PHẨM

### 3.3.1 Tìm kiếm Text-based (Phase 1)

**Chức năng:**

- Full-text search trên: Tên sách, Tác giả, Mô tả, Keywords
- Tìm kiếm đơn giản: 1 search bar
- Tìm kiếm nâng cao (advanced filters):
    - Loại sản phẩm (checkbox)
    - Thể loại (multi-select dropdown)
    - Ngôn ngữ (dropdown)
    - Loại bản quyền (checkbox)
    - Vùng lãnh thổ (checkbox)
    - Năm xuất bản (range slider)
    - Giá (range slider - dựa trên giá đề xuất)

**Sắp xếp:**

- Mặc định: Mới nhất
- Tên A-Z
- Tên Z-A
- Giá thấp đến cao
- Giá cao đến thấp

**Pagination:**

- 20 sản phẩm/trang
- Load more hoặc pagination buttons

**Technical:**

- PostgreSQL full-text search hoặc Elasticsearch (recommend Elasticsearch cho scale)
- Index các fields: title, author, description, keywords
- Cache search results (Redis, 5 phút)

---

### 3.4 QUY TRÌNH OFFER & THƯƠNG LƯỢNG

### 3.4.1 Tạo Offer (Buyer → Seller)

**Quy trình:**

1. Buyer xem sản phẩm → Click "Make an Offer"
2. Form tạo offer (điền thủ công):
    - **Thông tin cơ bản:**
        - Loại bản quyền muốn mua: In ấn / Phát hành số / Chuyển thể / Dịch thuật / Toàn bộ
        - Vùng lãnh thổ: Việt Nam / Toàn cầu / Khu vực cụ thể (text input)
        - Thời hạn: 1 năm / 3 năm / 5 năm / Vĩnh viễn / Khác (custom)
        - Độc quyền: Có / Không
    - **Điều khoản tài chính:**
        - Loại deal: Mua đứt một lần / Advance + Royalty / Chia sẻ doanh thu
        - Giá đề xuất (VND) - cho deal một lần
        - Advance payment (VND) - cho Advance + Royalty
        - Royalty rate (%) - cho Advance + Royalty
        - Revenue share (%) - cho chia sẻ doanh thu
        - Điều khoản thanh toán: Một lần / Chia nhiều đợt (nhập schedule)
    - **Điều khoản khác:**
        - Yêu cầu đặc biệt (text area, optional)
        - Thời hạn offer valid (ngày hết hạn, mặc định 14 ngày)
3. Review và submit
4. Hệ thống gửi notification cho seller
5. Status: "Pending" (chờ seller phản hồi)

**Business Rules:**

- 1 buyer có thể gửi nhiều offers cho 1 sản phẩm (nếu offer trước bị reject)
- Offer có expiry date (mặc định 14 ngày)
- Sau khi expired, offer tự động chuyển sang "Expired" status

### 3.4.2 Quản lý Offer (Seller)

**Chức năng:**

- Dashboard xem tất cả offers nhận được
- Filter theo: Status (Pending/Accepted/Rejected/Negotiating/Expired), Sản phẩm, Ngày
- Xem chi tiết offer
- Actions:
    - **Accept**: Đồng ý toàn bộ điều khoản → Chuyển sang Contract Creation
    - **Reject**: Từ chối với lý do (text input) → Buyer nhận notification
    - **Counter Offer**: Đề xuất điều khoản mới

**Counter Offer:**

- Seller chỉnh sửa các fields trong offer gốc
- Đánh dấu fields nào đã thay đổi (highlight)
- Thêm ghi chú giải thích
- Gửi lại cho buyer
- Status: "Negotiating"

### 3.4.3 Thương lượng (Negotiation Loop)

**Quy trình:**

1. Buyer gửi offer → Seller counter offer → Buyer counter lại → ... (tối đa 5 rounds)
2. Mỗi lần counter, bên kia nhận notification
3. Chat box đơn giản trong trang offer detail (text only, không upload file)
4. History log tất cả versions của offer (version control)
5. Khi 1 bên Accept → End negotiation → Move to Contract

**Business Rules:**

- Tối đa 5 rounds negotiation per offer
- Mỗi round có timeout 7 ngày, nếu không phản hồi → Offer expired
- Chỉ 2 bên (buyer & seller) tham gia, admin không can thiệp giai đoạn này (trừ khi có dispute)

---

### 3.5 QUY TRÌNH HỢP ĐỒNG

### 3.5.1 Tạo Hợp Đồng (Contract Manager)

**Trigger:**

- Khi offer được Accept (bởi seller hoặc buyer sau negotiation)
- Hệ thống tự động tạo contract record, status: "Draft"
- Assign cho Contract Manager (manual hoặc round-robin auto-assign)

**Quy trình:**

1. Contract Manager nhận notification
2. Vào dashboard xem offer details
3. Chọn template hợp đồng phù hợp (pre-defined templates)
4. Hệ thống tự động fill các fields từ offer data:
    - Thông tin buyer (tên, địa chỉ, CMND/MST)
    - Thông tin seller (tên, địa chỉ, CMND/MST)
    - Thông tin sản phẩm (tên sách, tác giả, ISBN)
    - Điều khoản bản quyền (loại, vùng, thời hạn, độc quyền)
    - Điều khoản tài chính (giá, royalty, payment schedule)
5. Contract Manager review và adjust text (rich text editor)
6. Có thể upload attachments (VD: appendix, scan tài liệu gốc)
7. Preview PDF hợp đồng (generate từ HTML template)
8. Submit cho buyer & seller review
9. Status: "Pending Review"

### 3.5.2 Template Hợp Đồng

**Quản lý templates:**

- Admin/Contract Manager tạo và quản lý templates
- Templates dạng HTML với placeholders (VD: `{{buyer_name}}`, `{{product_title}}`)
- Các loại templates phổ biến:
    - Template mua đứt bản quyền in ấn
    - Template Advance + Royalty
    - Template chia sẻ doanh thu
    - Template độc quyền toàn cầu
    - Template phi độc quyền khu vực
- Version control cho templates (track changes)

**Fields có thể customize:**

- Điều khoản pháp lý chuẩn (boilerplate)
- Điều khoản đặc biệt (custom clauses)
- Điều khoản thanh toán chi tiết
- Điều khoản chấm dứt hợp đồng
- Luật điều chỉnh và giải quyết tranh chấp

### 3.5.3 Review & Ký Hợp Đồng

**Quy trình:**

1. Buyer & Seller nhận email notification + in-app notification
2. Đăng nhập vào dashboard → "Contracts Pending My Review"
3. Xem chi tiết hợp đồng (PDF preview)
4. Actions:
    - **Approve**: Đồng ý hợp đồng → Chuyển sang bước ký
    - **Request Changes**: Yêu cầu sửa đổi (text input ghi chú) → Contract Manager adjust
5. Khi cả 2 bên Approve → Status: "Approved, Awaiting Signatures"

**Chữ ký số (Phase 1 - Simple):**

- Sử dụng OTP qua SMS hoặc Email để xác nhận
- Buyer ký → Seller ký (hoặc ngược lại, không bắt buộc thứ tự)
- Mỗi lần ký, hệ thống ghi nhận:
    - User ID
    - Timestamp
    - IP address
    - User agent (device info)
- Generate signed PDF có watermark "Digitally Signed" và timestamp
- Status: "Fully Executed"

**Phase 2 consideration (không triển khai Phase 1):**

- Tích hợp chữ ký số chuẩn (VD: VNPT CA, Viettel CA)
- Hoặc dùng dịch vụ bên thứ 3: DocuSign, SignNow

### 3.5.4 Dashboard Hợp Đồng

**Cho tất cả users:**

- Xem danh sách hợp đồng của mình
- Filter theo status, date, product
- Download PDF hợp đồng đã ký
- Xem timeline/history của hợp đồng (offer → contract → signed → paid)

**Cho Contract Manager:**

- Dashboard tổng quan: số hợp đồng pending, approved, executed
- Assign contracts cho các managers khác
- Bulk actions (approve nhiều contracts cùng lúc - nếu cần)

---

### 3.6 THANH TOÁN & KẾ TOÁN

### 3.6.1 Tạo Yêu Cầu Thanh Toán

**Trigger:**

- Sau khi hợp đồng fully executed (đã ký đầy đủ)
- Hệ thống tự động tạo payment request
- Status: "Pending Payment"

**Thông tin payment:**

- Contract ID (reference)
- Buyer thông tin
- Seller thông tin ngân hàng (nhập trước trong profile)
- Số tiền (từ hợp đồng)
- Payment method: Bank transfer / E-wallet / Khác

### 3.6.2 Thanh Toán (Buyer)

**Phase 1 - Manual Bank Transfer:**

1. Buyer nhận notification về payment due
2. Vào "My Payments" dashboard
3. Xem chi tiết payment (số tiền, thông tin TK nhận)
4. Thực hiện chuyển khoản thủ công qua ngân hàng
5. Upload biên lai/chứng từ (ảnh hoặc PDF)
6. Submit → Status: "Pending Verification"

**Phase 2 consideration (không triển khai Phase 1):**

- Tích hợp payment gateway: VNPay, MoMo, Stripe
- Auto-verify payment

### 3.6.3 Duyệt Thanh Toán (Accountant)

**Quy trình:**

1. Accountant nhận notification
2. Vào "Payments to Verify" dashboard
3. Xem chi tiết:
    - Contract info
    - Số tiền
    - Biên lai buyer upload
    - Thông tin TK ngân hàng seller
4. Check biên lai (manual verification):
    - Số tiền khớp
    - Ngày giao dịch
    - Nội dung chuyển khoản
5. Actions:
    - **Approve**: Xác nhận đã nhận tiền → Status: "Paid"
    - **Reject**: Từ chối với lý do → Buyer cần upload lại hoặc transfer lại

**Sau khi Approved:**

- Seller nhận notification "Payment received"
- Hệ thống gửi email receipt cho buyer
- Contract status: "Payment Completed"

### 3.6.4 Giải Ngân cho Seller

**Quy trình:**

- Sau khi accountant approve payment
- Accountant thực hiện chuyển khoản cho seller (thủ công qua ngân hàng)
- Upload chứng từ chuyển khoản trong hệ thống
- Mark contract as "Paid to Seller"
- Seller nhận notification

**Business Rules:**

- Platform fee (nếu có): Tính % trên mỗi giao dịch, khấu trừ trước khi trả seller
- Tax handling (nếu có): Giữ lại % thuế, seller tự kê khai

### 3.6.5 Dashboard Kế Toán

**Tổng quan:**

- Tổng doanh thu (total payments received)
- Tổng đã giải ngân (total paid to sellers)
- Pending payments (chờ duyệt)
- Overdue payments (quá hạn thanh toán)

**Reports:**

- Báo cáo giao dịch theo ngày/tháng/năm
- Báo cáo theo seller/buyer
- Export Excel/CSV

---

### 3.7 GIAO HÀNG (DELIVERY)

### 3.7.1 Quy Trình Giao Hàng Số Hóa

**Sau khi payment completed:**

1. Hệ thống tự động trigger delivery process
2. Admin/Contract Manager nhận notification
3. Admin chuẩn bị package giao cho buyer:
    - **Bản số hóa**: File PDF/EPUB/MOBI (cho sách), file MP3/M4A (cho sách nói)
    - **Giấy chứng nhận bản quyền**: PDF có chữ ký số, seal của platform
    - **Hợp đồng đã ký**: PDF copy

**Upload và gửi:**
4. Admin upload các files vào hệ thống (secure storage)
5. Hệ thống generate download link (one-time hoặc có expiry)
6. Gửi email + in-app notification cho buyer với download links
7. Buyer download files
8. Status: "Delivered"

**Business Rules:**

- Download link valid trong 30 ngày
- Buyer có thể re-download trong khoảng thời gian này
- Sau 30 ngày, phải request lại link (free)

### 3.7.2 Xác Nhận và Follow-up

**Phase 1 - Manual:**

1. Buyer nhận files → Download → Review
2. Nếu có vấn đề, mở support ticket (text-based ticket system)
3. Admin/Contract Manager xử lý

**Phase 2 - Automated (không triển khai Phase 1):**

- Buyer upload bản scan hoặc ảnh chụp sản phẩm đã xuất bản (proof of usage)
- AI tự động verify xem có tuân thủ điều khoản hợp đồng không
- Alert nếu phát hiện vi phạm

---

### 3.8 ADMIN DASHBOARD

### 3.8.1 Tổng Quan Hệ Thống (Admin)

**Metrics:**

- Tổng users (theo role)
- Tổng sản phẩm (active/pending/rejected)
- Tổng offers (theo status)
- Tổng contracts (theo status)
- Tổng doanh thu (total payments)
- Graphs: Số lượng offers/contracts theo thời gian

### 3.8.2 Quản Lý Users

**Chức năng:**

- Xem danh sách tất cả users
- Search users (theo email, tên, vai trò)
- Filter theo: Role, Status (Active/Suspended/Pending KYC), Verified/Unverified
- Xem chi tiết user:
    - Profile info
    - KYC status và tài liệu
    - Lịch sử giao dịch (offers, contracts, payments)
- Actions:
    - Edit user info
    - Verify user (manual KYC approval)
    - Suspend/Unsuspend account
    - Reset password (admin-initiated)
    - Assign roles (change role từ Buyer sang Seller hoặc ngược lại)

### 3.8.3 Quản Lý Sản Phẩm

**Chức năng:**

- Xem danh sách tất cả sản phẩm
- Filter theo: Status (Pending/Approved/Rejected/Hidden), Loại, Thể loại, Seller
- Xem chi tiết sản phẩm
- Actions (Moderator):
    - Approve product
    - Reject product (với lý do)
    - Edit metadata (nếu cần correct lỗi)
    - Hide/Unhide product

### 3.8.4 Quản Lý Offers

**Chức năng:**

- Xem danh sách tất cả offers (read-only trong Phase 1)
- Filter theo: Status, Buyer, Seller, Product, Date range
- Xem chi tiết negotiation history
- Export báo cáo offers

### 3.8.5 Quản Lý Contracts

**Contract Manager Dashboard:**

- Xem contracts assigned cho mình
- Xem all contracts (nếu là admin)
- Filter theo: Status, Buyer, Seller, Date range
- Bulk approve contracts (nếu cần)
- Reassign contracts cho managers khác

### 3.8.6 Quản Lý Thanh Toán

**Accountant Dashboard:**

- Pending payments (cần verify)
- Paid payments (history)
- Overdue payments (highlight)
- Filter theo: Date range, Buyer, Seller, Amount range
- Export financial reports

### 3.8.7 Quản Lý Templates

**Admin/Contract Manager:**

- Xem danh sách templates
- Create new template (HTML editor)
- Edit existing template
- Version control (track changes)
- Preview template với sample data
- Archive old templates (không xóa, chỉ ẩn)

### 3.8.8 Phân Quyền (Role Management)

**Admin only:**

- Define custom roles (nếu cần thêm roles mới)
- Assign permissions cho mỗi role:
    - View/Edit/Delete products
    - View/Edit/Delete users
    - Approve contracts
    - Approve payments
    - Manage templates
    - View reports
- Assign roles cho users

---

### 3.9 HỆ THỐNG THÔNG BÁO (NOTIFICATIONS)

### 3.9.1 Loại Thông Báo

**Email Notifications:**

- Welcome email sau khi đăng ký
- Email xác thực tài khoản
- KYC approved/rejected
- Nhận offer mới (cho seller)
- Offer accepted/rejected/counter (cho buyer)
- Contract ready for review
- Contract signed by other party
- Payment due reminder
- Payment received/verified
- Delivery notification (download links)

**In-app Notifications:**

- Real-time notifications trong app (icon badge với số lượng)
- Dropdown list hiển thị notifications gần nhất
- Click vào notification → Navigate đến trang liên quan
- Mark as read/unread
- Archive notifications

**SMS Notifications (optional, Phase 2):**

- OTP cho chữ ký số
- Payment reminders
- Critical updates

### 3.9.2 Notification Settings

**User có thể config:**

- Bật/tắt email notifications cho từng loại event
- Bật/tắt in-app notifications
- Frequency: Real-time / Daily digest / Weekly digest

---

### 3.10 SUPPORT & DISPUTE

### 3.10.1 Ticket System (Phase 1 - Basic)

**Tạo ticket:**

- User vào "Support" → "Create Ticket"
- Form:
    - Category: Technical issue / Payment issue / Contract dispute / Other
    - Subject
    - Description (text area)
    - Attachments (optional, max 5 files, 10MB each)
- Submit → Status: "Open"

**Quản lý ticket:**

- Admin/Support team xem tất cả tickets
- Filter theo: Status (Open/In Progress/Resolved/Closed), Category, User, Date
- Assign ticket cho staff member
- Reply to ticket (internal comments + customer-facing replies)
- Mark as Resolved/Closed
- Customer có thể reopen nếu issue chưa solved

**Timeline:**

- Track tất cả interactions (messages, status changes, assignments)

---

### 3.11 BÁO CÁO & PHÂN TÍCH (REPORTS)

### 3.11.1 Báo Cáo Dành cho Admin

**Dashboards:**

- **Overview Dashboard**:
    - Total users, products, offers, contracts, revenue (current month vs last month)
    - Conversion funnel: Products → Offers → Contracts → Payments (%)
    - Top sellers (by revenue)
    - Top buyers (by spending)
    - Top categories (by number of deals)
- **User Analytics**:
    - New signups over time (graph)
    - User retention rate
    - KYC approval rate và time-to-approve
- **Product Analytics**:
    - Total products by category, type
    - Product approval rate
    - Average time-to-approval
- **Transaction Analytics**:
    - Offers per day/week/month
    - Average negotiation time (từ offer → accepted)
    - Contract completion rate (signed → paid)
    - Average payment processing time
- **Financial Reports**:
    - Revenue by month/quarter/year
    - Revenue by category
    - Average deal value
    - Platform fees collected (nếu có)
    - Pending payments value
    - Cash flow (money in vs money out)

**Export:**

- Tất cả reports có thể export Excel/CSV
- Date range selector

### 3.11.2 Báo Cáo Dành cho Sellers

**My Performance Dashboard:**

- Total products listed
- Total offers received
- Offer acceptance rate
- Total revenue earned
- Revenue by product
- Top performing products

### 3.11.3 Báo Cáo Dành cho Buyers

**My Purchases Dashboard:**

- Total offers sent
- Offer success rate
- Total spent
- Purchases by category
- Active contracts