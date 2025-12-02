---
MOC: "false"
Title: "OLAP (Online Analytical Processing)"
Alias:
- "Online Analytical Processing"
- "OLAP"
- "Xử lý Phân tích Trực tuyến"

# ---
## "Definition" (Định nghĩa)
## "Process" (Quy trình)
# ---
Concept_Type:
- "Definition"
- "Process"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Phân_tích_Dữ_liệu"
- "Công_nghệ"
- "BI"
- "Data_Warehouse"

Up: # Link tới MOC hoặc concept cha
- "[[OLTP (Online Transaction Processing)]]"
- "[[Kho Dữ liệu (Data Warehouse)]]"
- "[[Business Intelligence (BI) là gì]]"
Related: # Link tới các concept ngang hàng
- "[[OLTP (Online Transaction Processing)]]"
- "[[Kho Dữ liệu (Data Warehouse)]]"
- "[[Data Cube]]"
- "[[Drill-down]]"
- "[[Slice_and_Dice]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Kho dữ liệu, BI"
---

# [[OLAP (Online Analytical Processing)]]

## Định nghĩa

**OLAP (Xử lý Phân tích Trực tuyến)** là một loại công nghệ xử lý thông tin, cho phép người dùng **phân tích (analyze)** dữ liệu đa chiều (multidimensional data) từ nhiều góc độ khác nhau một cách nhanh chóng và linh hoạt. 📊

Mục tiêu chính của OLAP là hỗ trợ [[Business Intelligence (BI) là gì|Business Intelligence (BI)]], giúp các nhà quản trị và nhà phân tích khám phá insights từ dữ liệu lịch sử và tổng hợp.

## Đặc điểm

* **Tập trung vào Phân tích:** Xử lý các truy vấn phức tạp, tổng hợp dữ liệu lớn (ví dụ: "Tính tổng doanh số theo từng vùng, theo từng quý trong 3 năm qua?").
* **Truy vấn Phức tạp, Đọc nhiều:** Các truy vấn thường phức tạp, liên quan đến nhiều bảng/chiều và lượng dữ liệu lớn. Chủ yếu là thao tác đọc (read).
* **Cập nhật Ít thường xuyên:** Dữ liệu thường được tải vào định kỳ (ví dụ: hàng đêm) từ hệ thống [[OLTP (Online Transaction Processing)|OLTP]].
* **Dữ liệu Lịch sử, Tổng hợp:** Tập trung vào dữ liệu quá khứ, đã được tổng hợp (aggregated).
* **Tối ưu cho Đọc (Read-optimized):** Cấu trúc dữ liệu thường được phi chuẩn hóa (denormalized), ví dụ như mô hình **[[Data Cube|Khối Dữ liệu (Data Cube)]]** hoặc **Lược đồ Hình sao (Star Schema)**, để tăng tốc độ truy vấn.
* **Hệ thống Đích:** OLAP thường chạy trên [[Kho Dữ liệu (Data Warehouse)]].

## Các Thao tác OLAP Phổ biến

* **[[Slice_and_Dice|Slice (Cắt lát)]]:** Xem một "lát cắt" của khối dữ liệu (ví dụ: xem doanh số chỉ của năm 2024).
* **[[Slice_and_Dice|Dice (Cắt khối)]]:** Xem một "khối con" nhỏ hơn (ví dụ: doanh số năm 2024, chỉ ở Hà Nội, chỉ cho sản phẩm A).
* **[[Drill-down]]:** Đi từ dữ liệu tổng hợp xuống dữ liệu chi tiết hơn (ví dụ: từ doanh số năm $\rightarrow$ quý $\rightarrow$ tháng).
* **Roll-up:** Ngược lại với Drill-down, đi từ chi tiết lên tổng hợp.
* **Pivot (Xoay):** Thay đổi góc nhìn (ví dụ: xem doanh số theo vùng rồi xoay sang xem theo sản phẩm).