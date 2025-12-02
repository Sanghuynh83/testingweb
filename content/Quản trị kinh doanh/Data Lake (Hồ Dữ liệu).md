---
MOC: "false"
Title: "Data Lake (Hồ Dữ liệu)"
Alias:
- "Hồ Dữ liệu"
- "Data Lake"

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
- "Dữ_liệu_lớn"
- "Kiến_trúc_Dữ_liệu"

Up: # Link tới MOC hoặc concept cha
- "[[Dữ liệu lớn (Big Data)]]"
- "[[MOC - Phân tích Dữ liệu Kinh doanh]]"
Related: # Link tới các concept ngang hàng
- "[[Kho Dữ liệu (Data Warehouse)]]"
- "[[ETL (Extract, Transform, Load)]]"
- "[[ELT (Extract, Load, Transform)]]"
- "[[Dữ liệu lớn (Big Data)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[Data Lake]]

## Định nghĩa

**Data Lake (Hồ Dữ liệu)** là một kho lưu trữ trung tâm, có khả năng lưu trữ một lượng lớn **dữ liệu thô (raw data)** ở **định dạng gốc (native format)**, không cần cấu trúc trước (schema-on-read).

Nó giống như một "hồ nước" tự nhiên, nơi bạn có thể đổ mọi loại dữ liệu (có cấu trúc, bán cấu trúc, phi cấu trúc) vào mà không cần xử lý trước.

## Data Lake vs. [[Kho Dữ liệu (Data Warehouse)]]

Đây là hai kiến trúc lưu trữ dữ liệu khác nhau:

| Đặc điểm | **Data Lake** | **[[Kho Dữ liệu (Data Warehouse)]]** |
| :--- | :--- | :--- |
| **Dữ liệu** | Thô (Raw), Định dạng gốc | Đã xử lý (Processed), Có cấu trúc |
| **Schema** | Schema-on-Read (Đọc rồi mới định nghĩa cấu trúc) | Schema-on-Write (Phải định nghĩa cấu trúc *trước khi* ghi) |
| **Quy trình** | **[[ELT (Extract, Load, Transform)]]** (Tải trước, biến đổi sau) | **[[ETL (Extract, Transform, Load)]]** (Biến đổi trước, tải sau) |
| **Người dùng** | Nhà khoa học Dữ liệu (Data Scientists) | Nhà phân tích Kinh doanh (Business Analysts) |
| **Mục đích** | Khám phá, [[Học máy (Machine Learning)|Học máy]], [[Khai phá Dữ liệu (Data Mining)]] | Báo cáo [[Business Intelligence (BI) là gì|BI]], [[Dashboard]] |
| **Linh hoạt** | Rất linh hoạt | Kém linh hoạt (do cấu trúc cứng) |

## Ưu điểm
* **Linh hoạt:** Lưu trữ được mọi loại dữ liệu.
* **Chi phí Thấp (Lưu trữ):** Thường dùng các công nghệ lưu trữ rẻ hơn (như Hadoop HDFS).
* **Phù hợp [[Dữ liệu lớn (Big Data)]]:** Xử lý tốt Volume, Velocity, Variety.

## Nhược điểm
* **"Đầm lầy Dữ liệu" (Data Swamp):** Nếu không được quản lý tốt (metadata, data governance), Data Lake có thể trở thành một mớ hỗn độn, khó tìm kiếm và khai thác (giống đầm lầy).