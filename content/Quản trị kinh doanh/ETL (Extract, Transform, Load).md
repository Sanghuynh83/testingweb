---
MOC: "false"
Title: "ETL (Extract, Transform, Load)"
Alias:
- "ETL"
- "Quy trình ETL"
- "Trích xuất - Biến đổi - Tải"

# ---
## "Process" (Quy trình)
## "Definition" (Định nghĩa)
# ---
Concept_Type:
- "Process"
- "Definition"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Phân_tích_Dữ_liệu"
- "BI"
- "Dữ_liệu"
- "Kiến_trúc_Dữ_liệu"

Up: # Link tới MOC hoặc concept cha
- "[[Kho Dữ liệu (Data Warehouse)]]"
- "[[MOC - Phân tích Dữ liệu Kinh doanh]]"
Related: # Link tới các concept ngang hàng
- "[[Kho Dữ liệu (Data Warehouse)]]"
- "[[Database (Cơ sở dữ liệu)]]"
- "[[Data Lake]]"
- "[[ELT (Extract, Load, Transform)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Kho dữ liệu"
---

# [[ETL (Extract, Transform, Load)]]

## Định nghĩa

**ETL (Extract - Transform - Load)** là một quy trình gồm ba bước, được sử dụng để tích hợp dữ liệu từ nhiều nguồn khác nhau vào một kho lưu trữ trung tâm duy nhất, thường là [[Kho Dữ liệu (Data Warehouse)]].

Đây là quy trình nền tảng để chuẩn bị dữ liệu cho việc phân tích [[Business Intelligence (BI) là gì|BI]].

## 3 Bước của ETL

1.  **E - Extract (Trích xuất):**
    * *Mục tiêu:* Lấy (đọc) dữ liệu từ các hệ thống nguồn (source systems).
    * *Ví dụ nguồn:* [[Database (Cơ sở dữ liệu)|Database]] giao dịch (OLTP), hệ thống CRM, ERP, file Excel, API...

2.  **T - Transform (Biến đổi):**
    * *Mục tiêu:* Áp dụng các quy tắc, làm sạch (cleaning), chuẩn hóa (standardizing), và cấu trúc lại (structuring) dữ liệu đã trích xuất để nó phù hợp với định dạng của kho đích.
    * *Hoạt động:*
        * **Làm sạch:** Xử lý giá trị thiếu (null), định dạng sai (ví dụ: ngày tháng).
        * **Chuẩn hóa:** Đưa về cùng đơn vị, định dạng (ví dụ: "VNĐ", "VND", "đồng" $\rightarrow$ "VND").
        * **Tích hợp:** Kết hợp dữ liệu từ nhiều nguồn (ví dụ: join bảng).
        * **Tính toán:** Tạo các trường dữ liệu mới (ví dụ: tính Doanh thu = Số lượng * Đơn giá).
    * *Đây thường là bước phức tạp và tốn nhiều công sức nhất.*

3.  **L - Load (Tải):**
    * *Mục tiêu:* Ghi (write) dữ liệu đã được biến đổi vào hệ thống đích (target system), thường là [[Kho Dữ liệu (Data Warehouse)]].

## ETL vs. ELT
* **ETL:** Biến đổi dữ liệu *trước khi* tải vào Kho dữ liệu (phổ biến cho DWH).
* **[[ELT (Extract, Load, Transform)]]:** Tải dữ liệu thô vào trước (thường là [[Data Lake]]), rồi *mới biến đổi* sau (phổ biến cho [[Dữ liệu lớn (Big Data)]]).