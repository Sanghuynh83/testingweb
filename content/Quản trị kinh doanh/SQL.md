---
MOC: "false"
Title: "SQL (Ngôn ngữ Truy vấn Cấu trúc)"
Alias:
- "SQL"
- "Structured Query Language"
- "Ngôn ngữ Truy vấn Cấu trúc"

# ---
## "Definition" (Định nghĩa)
## "Language" (Ngôn ngữ)
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
- "[[DBMS (Hệ quản trị CSDL)]]"
- "[[Database (Cơ sở dữ liệu)]]"
Related: # Link tới các concept ngang hàng
- "[[DBMS (Hệ quản trị CSDL)]]"
- "[[CSDL Quan hệ (Relational DB)]]"
- "[[NoSQL]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Cơ sở dữ liệu"
---

# [[SQL]]

## Định nghĩa

**SQL (Structured Query Language - Ngôn ngữ Truy vấn Cấu trúc)** là một **ngôn ngữ lập trình chuyên dụng (domain-specific language)**, được thiết kế để **quản lý và thao tác** dữ liệu trong các [[CSDL Quan hệ (Relational Database)|cơ sở dữ liệu quan hệ (Relational Database)]].

Đây là ngôn ngữ *tiêu chuẩn* được hầu hết các [[DBMS (Hệ quản trị CSDL)|hệ quản trị cơ sở dữ liệu quan hệ (RDBMS)]] hỗ trợ (mặc dù có thể có các biến thể nhỏ).

## Các Nhóm Lệnh Chính

SQL bao gồm các nhóm lệnh chính để tương tác với database:

1.  **DDL (Data Definition Language - Ngôn ngữ Định nghĩa Dữ liệu):**
    * *Mục đích:* Định nghĩa cấu trúc của database.
    * *Lệnh:* `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`.

2.  **DML (Data Manipulation Language - Ngôn ngữ Thao tác Dữ liệu):**
    * *Mục đích:* Thao tác với dữ liệu *bên trong* các bảng.
    * *Lệnh:*
        * `SELECT`: Truy vấn (lấy) dữ liệu. (Quan trọng nhất cho phân tích).
        * `INSERT`: Thêm dữ liệu mới.
        * `UPDATE`: Sửa dữ liệu hiện có.
        * `DELETE`: Xóa dữ liệu.

3.  **DCL (Data Control Language - Ngôn ngữ Điều khiển Dữ liệu):**
    * *Mục đích:* Quản lý quyền truy cập.
    * *Lệnh:* `GRANT`, `REVOKE`.

4.  **TCL (Transaction Control Language - Ngôn ngữ Điều khiển Giao dịch):**
    * *Mục đích:* Quản lý các giao dịch.
    * *Lệnh:* `COMMIT`, `ROLLBACK`.