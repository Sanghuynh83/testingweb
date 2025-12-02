---
MOC: "false"
Title: "Kiểu dữ liệu (Data Type)"
Alias:
- "Data Type"

# ---
## "Definition" (Định nghĩa)
## "Principle" (Nguyên tắc)
# ---
Concept_Type:
- "Definition"
- "Principle"

tags:
- "Concept"
- "Phân_tích_Dữ_liệu"
- "Công_ngệ"
- "Dữ_liệu"
- "Database"
- "CSDL_Quan_hệ"

Up: # Link tới MOC hoặc concept cha
- "[[Cột (Column)]]"
- "[[CSDL Quan hệ (Relational DB)]]"
Related: # Link tới các concept ngang hàng
- "[[Cột (Column)]]"
- "[[Bảng (Table)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Cơ sở dữ liệu"
---

# [[Kiểu dữ liệu (Data Type)]]

## Định nghĩa

**Kiểu dữ liệu (Data Type)** là một thuộc tính (attribute) được gán cho mỗi **[[Cột (Column)|cột]]** trong một [[Bảng (Table)|bảng]] của [[CSDL Quan hệ (Relational DB)|cơ sở dữ liệu]], nhằm **xác định loại giá trị** mà cột đó có thể lưu trữ. 🏷️

## Mục đích

Việc định nghĩa kiểu dữ liệu cho mỗi cột giúp [[DBMS (Hệ quản trị CSDL)|hệ quản trị cơ sở dữ liệu]]:
1.  **Đảm bảo Tính toàn vẹn (Integrity):** Ngăn chặn việc nhập sai loại dữ liệu (ví dụ: không thể nhập chữ "ABC" vào cột `Tuoi` vốn là kiểu Số nguyên).
2.  **Tối ưu Lưu trữ (Storage Optimization):** Biết trước kiểu dữ liệu giúp DBMS cấp phát dung lượng lưu trữ hiệu quả hơn.
3.  **Tối ưu Truy vấn (Query Optimization):** DBMS có thể thực hiện các phép toán (ví dụ: cộng, trừ, so sánh) một cách chính xác và hiệu quả hơn.

## Các Kiểu dữ liệu Phổ biến trong [[SQL]]

* **Kiểu Số (Numeric):**
    * `INTEGER` (hoặc `INT`): Số nguyên (ví dụ: 10, -5, 0).
    * `DECIMAL` (hoặc `NUMERIC`): Số thập phân chính xác (ví dụ: 123.45 - thường dùng cho tiền tệ).
    * `FLOAT`, `REAL`: Số thực dấu phẩy động (có thể có sai số).
* **Kiểu Chuỗi (String / Text):**
    * `CHAR(n)`: Chuỗi ký tự có độ dài *cố định* n (ví dụ: `CHAR(2)` cho Mã Tỉnh).
    * `VARCHAR(n)`: Chuỗi ký tự có độ dài *thay đổi*, tối đa n (ví dụ: `VARCHAR(255)` cho Họ Tên).
    * `TEXT`: Chuỗi ký tự dài.
* **Kiểu Ngày giờ (Date/Time):**
    * `DATE`: Lưu ngày (YYYY-MM-DD).
    * `TIME`: Lưu giờ (HH:MM:SS).
    * `DATETIME` / `TIMESTAMP`: Lưu cả ngày và giờ.
* **Kiểu Logic (Boolean):**
    * `BOOLEAN`: Lưu giá trị `TRUE` hoặc `FALSE`.
* **Kiểu Nhị phân (Binary):**
    * `BLOB` (Binary Large Object): Lưu dữ liệu nhị phân lớn (ví dụ: hình ảnh, file).