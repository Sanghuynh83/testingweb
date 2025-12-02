---
MOC: "false"
Title: "CSDL Quan hệ (Relational Database)"
Alias:
- "Relational Database"
- "Cơ sở dữ liệu Quan hệ"
- "RDB"
- "RDBMS"

# ---
## "Definition" (Định nghĩa)
## "Model" (Mô hình)
# ---
Concept_Type:
- "Definition"
- "Model"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Phân_tích_Dữ_liệu"
- "Công_nghệ"
- "Dữ_liệu"
- "Database"

Up: # Link tới MOC hoặc concept cha
- "[[DBMS (Hệ quản trị CSDL)]]"
- "[[SQL]]"
Related: # Link tới các concept ngang hàng
- "[[Database (Cơ sở dữ liệu)]]"
- "[[SQL]]"
- "[[NoSQL]]"
- "[[OLTP (Online Transaction Processing)]]"
- "[[Bảng (Table)]]"
- "[[Khóa chính (Primary Key)]]"
- "[[Khóa ngoại (Foreign Key)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Edgar F. Codd (Mô hình Quan hệ)"
---

# [[CSDL Quan hệ (Relational Database)]]

## Định nghĩa

**Cơ sở dữ liệu Quan hệ (Relational Database - RDB)** là loại hình [[Database (Cơ sở dữ liệu)|cơ sở dữ liệu]] phổ biến nhất, dựa trên **mô hình quan hệ (relational model)** do E.F. Codd đề xuất.

Trong mô hình này, dữ liệu được tổ chức thành các **[[Bảng (Table)|bảng (tables)]]** gồm các **hàng (rows)** và **cột (columns)**. Các bảng này có thể được liên kết (related) với nhau thông qua các **khóa (keys)**.

## Đặc điểm Cốt lõi

1.  **[[Bảng (Table)]]:** Dữ liệu được lưu trữ trong các bảng hai chiều.
    * **Cột (Column / Attribute):** Đại diện cho một thuộc tính (ví dụ: Tên khách hàng, Mã sản phẩm).
    * **Hàng (Row / Record / Tuple):** Đại diện cho một bản ghi cụ thể (ví dụ: thông tin của một khách hàng).
2.  **[[Khóa chính (Primary Key)]]:** Một (hoặc nhiều) cột dùng để **định danh duy nhất** cho mỗi hàng trong bảng (ví dụ: Mã sinh viên, Số CMND).
3.  **[[Khóa ngoại (Foreign Key)]]:** Một cột trong bảng này, dùng để **tham chiếu (link)** đến [[Khóa chính (Primary Key)|khóa chính]] của một bảng khác, tạo ra mối quan hệ giữa hai bảng.
4.  **[[SQL]]:** Ngôn ngữ [[SQL]] được sử dụng để truy vấn và thao tác dữ liệu.
5.  **ACID:** Các giao dịch trong RDB thường tuân thủ thuộc tính ACID (Atomicity, Consistency, Isolation, Durability) để đảm bảo tính toàn vẹn dữ liệu.

## Ưu điểm
* **Tính toàn vẹn Dữ liệu (Integrity):** Mô hình quan hệ và các ràng buộc (khóa chính/ngoại) giúp đảm bảo dữ liệu chính xác và nhất quán.
* **Linh hoạt (Flexibility):** Dễ dàng truy vấn và kết hợp dữ liệu từ nhiều bảng bằng [[SQL]].
* **Tính trưởng thành (Maturity):** Công nghệ rất phổ biến, ổn định, có nhiều công cụ hỗ trợ.

## Nhược điểm
* **Khả năng Mở rộng (Scalability):** Khó mở rộng theo chiều ngang (horizontal scaling) so với [[NoSQL]].
* **Xử lý Dữ liệu Phi cấu trúc:** Không phù hợp để lưu trữ dữ liệu phi cấu trúc (văn bản, hình ảnh).