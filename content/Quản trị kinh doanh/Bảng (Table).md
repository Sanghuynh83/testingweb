---
MOC: "false"
Title: "Bảng (Table)"
Alias:
- "Table"
- "Relation (trong Mô hình Quan hệ)"

# ---
## "Definition" (Định nghĩa)
# ---
Concept_Type:
- "Definition"

tags:
- "Concept"
- "Phân_tích_Dữ_liệu"
- "Công_nghệ"
- "Dữ_liệu"
- "Database"
- "CSDL_Quan_hệ"

Up: # Link tới MOC hoặc concept cha
- "[[CSDL Quan hệ (Relational DB)]]"
Related: # Link tới các concept ngang hàng
- "[[CSDL Quan hệ (Relational DB)]]"
- "[[Hàng (Row)]]"
- "[[Cột (Column)]]"
- "[[Khóa chính (Primary Key)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Cơ sở dữ liệu"
---

# [[Bảng (Table)]]

## Định nghĩa

Trong [[CSDL Quan hệ (Relational DB)|cơ sở dữ liệu quan hệ]], **Bảng (Table)** là cấu trúc cơ bản nhất để lưu trữ dữ liệu. Nó bao gồm một tập hợp các **[[Hàng (Row)|hàng (rows)]]** và **[[Cột (Column)|cột (columns)]]**.

Trong lý thuyết mô hình quan hệ, Bảng còn được gọi là **Quan hệ (Relation)**.

## Cấu trúc

* **[[Cột (Column)]] (Thuộc tính - Attribute):** 🏛️
    * Định nghĩa một loại thông tin cụ thể sẽ được lưu trữ (ví dụ: `MaSinhVien`, `HoTen`, `NgaySinh`).
    * Mỗi cột có một **kiểu dữ liệu (data type)** (ví dụ: INTEGER, VARCHAR, DATE).
* **[[Hàng (Row)]] (Bản ghi - Record / Bộ - Tuple):** 🧍
    * Đại diện cho một thực thể hoặc một bản ghi dữ liệu cụ thể (ví dụ: thông tin của *một* sinh viên).
    * Mỗi hàng chứa một giá trị cho mỗi cột trong bảng.
* **Ô (Cell):** Giao điểm của một hàng và một cột, chứa một giá trị dữ liệu cụ thể.

## [[Khóa chính (Primary Key)]] 🔑
Mỗi bảng thường có một (hoặc nhiều) cột được chỉ định là **[[Khóa chính (Primary Key)]]**, dùng để **định danh duy nhất** cho mỗi hàng trong bảng đó. Điều này đảm bảo không có hai hàng nào hoàn toàn giống hệt nhau.