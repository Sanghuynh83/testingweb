---
MOC: "false"
Title: "Tính toàn vẹn Tham chiếu (Referential Integrity)"
Alias:
- "Referential Integrity"
- "Toàn vẹn Tham chiếu"

# ---
## "Principle" (Nguyên tắc)
## "Definition" (Định nghĩa)
# ---
Concept_Type:
- "Principle"
- "Definition"

tags:
- "Concept"
- "Phân_tích_Dữ_liệu"
- "Công_ngệ"
- "Dữ_liệu"
- "Database"
- "CSDL_Quan_hệ"

Up: # Link tới MOC hoặc concept cha
- "[[Khóa ngoại (Foreign Key)]]"
- "[[CSDL Quan hệ (Relational DB)]]"
Related: # Link tới các concept ngang hàng
- "[[Khóa ngoại (Foreign Key)]]"
- "[[Khóa chính (Primary Key)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Cơ sở dữ liệu"
---

# [[Tính toàn vẹn Tham chiếu (Referential Integrity)]]

## Định nghĩa

**Tính toàn vẹn Tham chiếu** là một **quy tắc (rule)** hoặc một **ràng buộc (constraint)** trong [[CSDL Quan hệ (Relational DB)|cơ sở dữ liệu quan hệ]], đảm bảo rằng các **mối quan hệ (relationships)** giữa các [[Bảng (Table)|bảng]] luôn **nhất quán (consistent)**.

## Quy tắc Cốt lõi

Quy tắc này được thực thi thông qua [[Khóa ngoại (Foreign Key)|khóa ngoại (Foreign Key)]] và nói rằng:

> Giá trị của **[[Khóa ngoại (Foreign Key)|khóa ngoại]]** trong bảng con (child table) **phải** tương ứng (match) với một giá trị **[[Khóa chính (Primary Key)|khóa chính]]** tồn tại trong bảng cha (parent table), *hoặc* giá trị của khóa ngoại đó phải là **NULL** (nếu cột đó cho phép NULL).

## Mục đích: Ngăn chặn "Bản ghi Mồ côi" (Orphan Records)

Tính toàn vẹn tham chiếu ngăn chặn việc tạo ra các "bản ghi mồ côi", tức là các bản ghi ở bảng con tham chiếu đến một bản ghi không còn tồn tại ở bảng cha.

*Ví dụ:* Nếu có ràng buộc toàn vẹn tham chiếu giữa `DonHang` (bảng con) và `KhachHang` (bảng cha) thông qua `MaKH`:
1.  **Khi Thêm/Sửa Đơn hàng:** Bạn *không thể* tạo một đơn hàng với `MaKH` là 'KH999' nếu 'KH999' *không* tồn tại trong bảng `KhachHang`.
2.  **Khi Xóa Khách hàng:** Bạn *không thể* xóa khách hàng 'KH001' nếu vẫn còn đơn hàng nào đó trong bảng `DonHang` có `MaKH` là 'KH001' (trừ khi có thiết lập đặc biệt).

Điều này giúp đảm bảo dữ liệu luôn chính xác và có ý nghĩa.