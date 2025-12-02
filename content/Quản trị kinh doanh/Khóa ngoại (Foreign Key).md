---
MOC: "false"
Title: "Khóa ngoại (Foreign Key)"
Alias:
- "Foreign Key"
- "FK"

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
- "[[CSDL Quan hệ (Relational DB)]]"
- "[[Bảng (Table)]]"
Related: # Link tới các concept ngang hàng
- "[[Khóa chính (Primary Key)]]"
- "[[Bảng (Table)]]"
- "[[Tính toàn vẹn Tham chiếu (Referential Integrity)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Cơ sở dữ liệu"
---

# [[Khóa ngoại (Foreign Key)]]

## Định nghĩa

**Khóa ngoại (Foreign Key - FK)** là một (hoặc một tổ hợp) **[[Cột (Column)|cột]]** trong một [[Bảng (Table)|bảng]] (gọi là bảng con - child table), mà giá trị của nó **tham chiếu (references)** đến giá trị của **[[Khóa chính (Primary Key)|khóa chính (Primary Key)]]** trong một bảng khác (gọi là bảng cha - parent table). 🔗

Khóa ngoại là cơ chế chính để thiết lập và duy trì **mối quan hệ (relationship)** giữa các bảng trong [[CSDL Quan hệ (Relational DB)|cơ sở dữ liệu quan hệ]].

## Mục đích

* **Tạo Liên kết:** Liên kết các bảng có liên quan lại với nhau (ví dụ: liên kết bảng `DonHang` với bảng `KhachHang` thông qua `MaKhachHang`).
* **Đảm bảo [[Tính toàn vẹn Tham chiếu (Referential Integrity)]]:** Ngăn chặn việc tạo ra các "bản ghi mồ côi". Điều này có nghĩa là:
    * Giá trị trong cột Khóa ngoại *phải* tồn tại trong cột Khóa chính của bảng cha (hoặc là NULL nếu được phép).
    * Không thể xóa một hàng ở bảng cha nếu vẫn còn hàng ở bảng con tham chiếu đến nó (trừ khi có thiết lập đặc biệt như `ON DELETE CASCADE`).

## Ví dụ

* **Bảng `KhachHang`:**
    * `MaKH` (PK) 👈 (Khóa chính)
    * `TenKH`
* **Bảng `DonHang`:**
    * `SoDH` (PK)
    * `NgayDH`
    * `MaKH` (FK) → Tham chiếu đến `MaKH` của bảng `KhachHang`. (Đây là Khóa ngoại)