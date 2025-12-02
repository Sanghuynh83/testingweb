---
MOC: "false"
Title: "DBMS (Hệ quản trị CSDL)"
Alias:
- "Hệ quản trị Cơ sở dữ liệu"
- "Database Management System"
- "DBMS"

# ---
## "Definition" (Định nghĩa)
## "Tool" (Công cụ)
# ---
Concept_Type:
- "Definition"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Phân_tích_Dữ_liệu"
- "Công_nghệ"
- "Dữ_liệu"
- "Database"

Up: # Link tới MOC hoặc concept cha
- "[[Database (Cơ sở dữ liệu)]]"
Related: # Link tới các concept ngang hàng
- "[[Database (Cơ sở dữ liệu)]]"
- "[[SQL]]"
- "[[CSDL Quan hệ (Relational DB)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Cơ sở dữ liệu"
---

# [[DBMS (Hệ quản trị CSDL)]]

## Định nghĩa

**Hệ quản trị Cơ sở dữ liệu (Database Management System - DBMS)** là một **phần mềm (software)** hệ thống, đóng vai trò như một giao diện (interface) giữa người dùng/ứng dụng và [[Database (Cơ sở dữ liệu)|cơ sở dữ liệu (database)]].

Nó cung cấp các công cụ và chức năng cần thiết để **tạo (create), truy xuất (retrieve), cập nhật (update), và quản lý (manage)** dữ liệu một cách hiệu quả và an toàn.

## Chức năng Chính

* **Định nghĩa Dữ liệu (Data Definition):** Cho phép định nghĩa cấu trúc của database (tạo bảng, xác định kiểu dữ liệu, ràng buộc).
* **Thao tác Dữ liệu (Data Manipulation):** Cung cấp ngôn ngữ (như [[SQL]]) để thêm, sửa, xóa, và truy vấn dữ liệu.
* **Kiểm soát Truy cập (Access Control):** Quản lý quyền của người dùng (ai được xem/sửa dữ liệu nào).
* **Đảm bảo Toàn vẹn (Integrity):** Đảm bảo dữ liệu tuân thủ các quy tắc (ví dụ: không để trùng mã khách hàng).
* **Sao lưu & Phục hồi (Backup & Recovery):** Bảo vệ dữ liệu khỏi mất mát.
* **Kiểm soát Đồng thời (Concurrency Control):** Quản lý việc nhiều người dùng truy cập dữ liệu cùng lúc mà không gây xung đột.

## Ví dụ về DBMS Phổ biến
* **[[CSDL Quan hệ (Relational DB)|CSDL Quan hệ (Relational)]]:** MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database.
* **CSDL NoSQL:** MongoDB (Document), Redis (Key-Value), Cassandra (Columnar).