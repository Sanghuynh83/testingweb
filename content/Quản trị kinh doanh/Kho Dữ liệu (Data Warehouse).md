---
MOC: "false"
Title: "Kho Dữ liệu (Data Warehouse)"
Alias:
- "Data Warehouse"
- "DWH"

# ---
## "Definition" (Định nghĩa)
## "Principle" (Nguyên tắc)
# ---
Concept_Type:
- "Definition"
- "Principle"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Phân_tích_Dữ_liệu"
- "BI"
- "Dữ_liệu"
- "Kiến_trúc_Dữ_liệu"

Up: # Link tới MOC hoặc concept cha
- "[[MOC - Phân tích Dữ liệu Kinh doanh]]"
- "[[Business Intelligence (BI) là gì]]"
Related: # Link tới các concept ngang hàng
- "[[Database (Cơ sở dữ liệu)]]"
- "[[ETL (Extract, Transform, Load)]]"
- "[[Dữ liệu lớn (Big Data)]]"
- "[[Data Lake]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Business Intelligence"
---

# [[Kho Dữ liệu (Data Warehouse)]]

## Định nghĩa

**Kho Dữ liệu (Data Warehouse - DWH)** là một hệ thống lưu trữ dữ liệu trung tâm, được thiết kế đặc biệt cho mục đích **phân tích (analytics)** và **báo cáo (reporting)** (chủ yếu là cho [[Business Intelligence (BI) là gì|BI]]).

Nó không phải là nơi dùng cho các giao dịch hàng ngày (như [[Database (Cơ sở dữ liệu)|database]] của website bán hàng), mà là nơi *tổng hợp* dữ liệu từ nhiều nguồn khác nhau.

## Quá trình [[ETL (Extract, Transform, Load)]]

Dữ liệu không được đưa thẳng vào DWH. Nó phải trải qua một quy trình gọi là **[[ETL (Extract, Transform, Load)]]**:
1.  **Extract (Trích xuất):** Lấy dữ liệu từ các nguồn (ví dụ: hệ thống CRM, ERP, website).
2.  **Transform (Biến đổi):** Làm sạch, chuẩn hóa, và cấu trúc lại dữ liệu (ví dụ: đổi "TP. HCM" và "HCM" thành một định dạng "Ho Chi Minh City").
3.  **Load (Tải):** Tải dữ liệu đã sạch vào Kho Dữ liệu.

## 4 Đặc điểm Cốt lõi

1.  **Hướng Chủ đề (Subject-Oriented):** Dữ liệu được tổ chức theo các chủ đề kinh doanh (ví dụ: Khách hàng, Sản phẩm, Doanh số) thay vì theo quy trình (như database).
2.  **Tích hợp (Integrated):** Dữ liệu từ nhiều nguồn khác nhau được làm sạch và thống nhất.
3.  **Bất biến (Non-volatile):** Dữ liệu trong DWH là "chỉ đọc" (read-only). Một khi đã được tải vào, nó không bị sửa đổi hay xóa (chỉ thêm mới).
4.  **Biến thiên theo Thời gian (Time-variant):** Dữ liệu trong DWH luôn được gắn với một mốc thời gian (ví dụ: doanh số Quý 1, Quý 2) để phân tích xu hướng.