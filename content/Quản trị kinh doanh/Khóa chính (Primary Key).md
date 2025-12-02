---
MOC: "false"
Title: "Khóa chính (Primary Key)"
Alias:
- "Primary Key"
- "PK"

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
- "[[Khóa ngoại (Foreign Key)]]"
- "[[Bảng (Table)]]"
- "[[Hàng (Row)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Cơ sở dữ liệu"
---

# [[Khóa chính (Primary Key)]]

## Định nghĩa

**Khóa chính (Primary Key - PK)** là một (hoặc một tổ hợp) **[[Cột (Column)|cột]]** trong một [[Bảng (Table)|bảng]] của [[CSDL Quan hệ (Relational DB)|cơ sở dữ liệu quan hệ]], được sử dụng để **định danh duy nhất (uniquely identify)** cho mỗi **[[Hàng (Row)|hàng]]** trong bảng đó. 🔑

## 2 Ràng buộc Quan trọng

Một cột được chọn làm khóa chính phải tuân thủ 2 ràng buộc cốt lõi:

1.  **Duy nhất (Unique):** Giá trị của khóa chính *phải là duy nhất* cho mỗi hàng. Không thể có hai hàng nào có cùng giá trị khóa chính.
2.  **Không được NULL (Not NULL):** Giá trị của khóa chính *không bao giờ* được phép để trống (NULL).

## Mục đích

* **Đảm bảo Tính duy nhất:** Ngăn chặn việc nhập trùng lặp dữ liệu.
* **Xác định Bản ghi:** Cho phép truy xuất chính xác một hàng cụ thể.
* **Tạo Mối quan hệ:** Khóa chính được [[Khóa ngoại (Foreign Key)|khóa ngoại]] ở bảng khác tham chiếu đến để tạo liên kết giữa các bảng.

## Ví dụ

* Trong bảng `SinhVien`, cột `MaSV` là ứng viên tốt nhất cho Khóa chính.
* Trong bảng `DonHang`, cột `SoDonHang` thường là Khóa chính.
* *Khóa chính Tổ hợp (Composite PK):* Đôi khi cần kết hợp nhiều cột để tạo ra tính duy nhất (ví dụ: trong bảng `ChiTietDonHang`, Khóa chính có thể là tổ hợp của `SoDonHang` và `MaSanPham`).