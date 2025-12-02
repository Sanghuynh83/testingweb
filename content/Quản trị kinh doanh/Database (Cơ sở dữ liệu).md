---
MOC: "false"
Title: "Database (Cơ sở dữ liệu)"
Alias:
- "CSDL"
- "Cơ sở dữ liệu"
- "Database"
- "DB"

# ---
## "Definition" (Định nghĩa)
# ---
Concept_Type:
- "Definition"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Phân_tích_Dữ_liệu"
- "Công_nghệ"
- "Dữ_liệu"

Up: # Link tới MOC hoặc concept cha
- "[[Kho Dữ liệu (Data Warehouse)]]"
- "[[ETL (Extract, Transform, Load)]]"
- "[[MOC - Phân tích Dữ liệu Kinh doanh]]"
Related: # Link tới các concept ngang hàng
- "[[Kho Dữ liệu (Data Warehouse)]]"
- "[[DBMS (Hệ quản trị CSDL)]]"
- "[[SQL]]"
- "[[OLTP (Online Transaction Processing)]]"
- "[[OLAP (Online Analytical Processing)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Cơ sở dữ liệu"
---

# [[Database (Cơ sở dữ liệu)]]

## Định nghĩa

**Cơ sở dữ liệu (Database - DB)** là một tập hợp các **dữ liệu có cấu trúc (structured data)**, được tổ chức và lưu trữ một cách có hệ thống trên máy tính, để có thể dễ dàng truy cập, quản lý và cập nhật.

## Mục đích

Database được thiết kế để phục vụ cho các **giao dịch hàng ngày (transactions)** và các hoạt động **tác nghiệp (operational)** của một ứng dụng hoặc hệ thống.

*Ví dụ:*
* Database của website bán hàng: Lưu thông tin sản phẩm, đơn hàng, khách hàng.
* Database của hệ thống quản lý nhân sự: Lưu thông tin nhân viên, chấm công, lương.

## Database vs. [[Kho Dữ liệu (Data Warehouse)]]

| Đặc điểm | **Database (CSDL)** | **[[Kho Dữ liệu (Data Warehouse)]]** |
| :--- | :--- | :--- |
| **Mục đích** | Giao dịch hàng ngày (**[[OLTP (Online Transaction Processing)]]**) | Phân tích, Báo cáo (**[[OLAP (Online Analytical Processing)]]**) |
| **Dữ liệu** | Hiện tại, Chi tiết | Lịch sử, Tổng hợp |
| **Cập nhật** | Thường xuyên (Đọc & Ghi) | Ít thường xuyên (Chủ yếu Đọc) |
| **Cấu trúc** | Tối ưu cho Ghi (Normalized) | Tối ưu cho Đọc (Denormalized - Star Schema) |
| **Người dùng** | Ứng dụng, Người dùng cuối | Nhà phân tích, Nhà quản trị |

Database là *nguồn* dữ liệu cho [[ETL (Extract, Transform, Load)]] để đưa vào Kho dữ liệu.

## [[DBMS (Hệ quản trị CSDL)]]
Để tạo, quản lý và truy vấn Database, người ta dùng **[[DBMS (Hệ quản trị CSDL)|Hệ quản trị Cơ sở dữ liệu (DBMS)]]** (ví dụ: MySQL, PostgreSQL, SQL Server, Oracle) và ngôn ngữ truy vấn như **[[SQL]]**.