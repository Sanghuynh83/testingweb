---
MOC: "false"
Title: "Cột (Column)"
Alias:
- "Column"
- "Attribute"
- "Field"
- "Thuộc tính"
- "Trường"

# ---
## "Definition" (Định nghĩa)
# ---
Concept_Type:
- "Definition"

tags:
- "Concept"
- "Phân_tích_Dữ_liệu"
- "Công_ngệ"
- "Dữ_liệu"
- "Database"
- "CSDL_Quan_hệ"

Up: # Link tới MOC hoặc concept cha
- "[[Bảng (Table)]]"
- "[[CSDL Quan hệ (Relational DB)]]"
Related: # Link tới các concept ngang hàng
- "[[Bảng (Table)]]"
- "[[Hàng (Row)]]"
- "[[Kiểu dữ liệu (Data Type)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Cơ sở dữ liệu"
---

# [[Cột (Column)]]

## Định nghĩa

Trong [[CSDL Quan hệ (Relational DB)|cơ sở dữ liệu quan hệ]], **Cột (Column)**, còn gọi là **Thuộc tính (Attribute)** hoặc **Trường (Field)**, định nghĩa một **loại thông tin cụ thể** được lưu trữ trong một [[Bảng (Table)]]. 🏛️

Mỗi cột đại diện cho một đặc tính của thực thể mà bảng đó mô tả.

## Ví dụ

Trong bảng `SinhVien`, các cột có thể là:
* `MaSV` (Mã Sinh viên)
* `HoTen` (Họ và Tên)
* `NgaySinh` (Ngày Sinh)
* `DiaChi` (Địa chỉ)

## [[Kiểu dữ liệu (Data Type)]]
Mỗi cột được định nghĩa với một **[[Kiểu dữ liệu (Data Type)|kiểu dữ liệu]]** cụ thể (ví dụ: `INTEGER` cho MaSV, `VARCHAR(255)` cho HoTen, `DATE` cho NgaySinh). Điều này đảm bảo tính nhất quán và toàn vẹn của dữ liệu trong cột đó.