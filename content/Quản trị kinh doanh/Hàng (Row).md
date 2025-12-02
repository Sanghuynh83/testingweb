---
MOC: "false"
Title: "Hàng (Row)"
Alias:
- "Row"
- "Record"
- "Tuple"
- "Bản ghi"
- "Bộ"

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
- "[[Cột (Column)]]"
- "[[Khóa chính (Primary Key)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Cơ sở dữ liệu"
---

# [[Hàng (Row)]]

## Định nghĩa

Trong [[CSDL Quan hệ (Relational DB)|cơ sở dữ liệu quan hệ]], **Hàng (Row)**, còn gọi là **Bản ghi (Record)** hoặc **Bộ (Tuple)**, đại diện cho một **thực thể (entity)** hoặc một **mục dữ liệu đơn lẻ (single data item)** trong một [[Bảng (Table)]]. 🧍

Mỗi hàng chứa một tập hợp các giá trị, mỗi giá trị tương ứng với một [[Cột (Column)|cột]] của bảng.

## Ví dụ

Trong bảng `SinhVien` có các cột `MaSV`, `HoTen`, `NgaySinh`, thì một hàng có thể là:

| MaSV | HoTen | NgaySinh |
|---|---|---|
| SV001 | Nguyễn Văn A | 2003-01-15 |

Hàng này đại diện cho *toàn bộ* thông tin của sinh viên có mã SV001.

## [[Khóa chính (Primary Key)]]
Mỗi hàng trong bảng phải là duy nhất và thường được xác định bởi một [[Khóa chính (Primary Key)]].