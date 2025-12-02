---
MOC: "false"
Title: "ELT (Extract, Load, Transform)"
Alias:
- "ELT"
- "Quy trình ELT"
- "Trích xuất - Tải - Biến đổi"

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
- "Dữ_liệu_lớn"
- "Kiến_trúc_Dữ_liệu"
- "Data_Lake"

Up: # Link tới MOC hoặc concept cha
- "[[ETL (Extract, Transform, Load)]]"
- "[[Data Lake]]"
- "[[MOC - Phân tích Dữ liệu Kinh doanh]]"
Related: # Link tới các concept ngang hàng
- "[[ETL (Extract, Transform, Load)]]"
- "[[Data Lake]]"
- "[[Kho Dữ liệu (Data Warehouse)]]"
- "[[Dữ liệu lớn (Big Data)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Kho dữ liệu hiện đại"
---

# [[ELT (Extract, Load, Transform)]]

## Định nghĩa

**ELT (Extract - Load - Transform)** là một quy trình tích hợp dữ liệu, tương tự như [[ETL (Extract, Transform, Load)|ETL]], nhưng với thứ tự các bước khác đi. Trong ELT, dữ liệu được **tải (Load)** vào hệ thống đích (thường là [[Data Lake]]) *trước khi* được **biến đổi (Transform)**.

## Quy trình ELT

1.  **E - Extract (Trích xuất):**
    * *Giống ETL:* Lấy dữ liệu thô từ các hệ thống nguồn.

2.  **L - Load (Tải):**
    * *Khác ETL:* Tải dữ liệu **thô (raw)**, **chưa qua xử lý** vào một kho lưu trữ có khả năng xử lý dữ liệu phi cấu trúc, thường là **[[Data Lake]]**.

3.  **T - Transform (Biến đổi):**
    * *Khác ETL:* Các bước làm sạch, chuẩn hóa, cấu trúc dữ liệu được thực hiện **sau khi** dữ liệu đã nằm trong Data Lake, thường là "theo yêu cầu" (on-demand) khi cần phân tích. Việc biến đổi này tận dụng sức mạnh tính toán của hệ thống đích (như Hadoop, Spark).

## ETL vs. ELT

| Đặc điểm | **[[ETL (Extract, Transform, Load)]]** | **ELT (Extract, Load, Transform)** |
| :--- | :--- | :--- |
| **Thứ tự** | Biến đổi $\rightarrow$ Tải | Tải $\rightarrow$ Biến đổi |
| **Nơi Biến đổi** | Trên một máy chủ trung gian (staging server) | **Bên trong** hệ thống đích (Data Lake/DWH hiện đại) |
| **Dữ liệu Tải vào** | Đã xử lý, có cấu trúc | Thô, định dạng gốc |
| **Hệ thống Đích** | Thường là [[Kho Dữ liệu (Data Warehouse)]] truyền thống | Thường là [[Data Lake]] hoặc Kho dữ liệu đám mây |
| **Schema** | Schema-on-Write | Schema-on-Read |
| **Phù hợp với** | Dữ liệu có cấu trúc, báo cáo BI | [[Dữ liệu lớn (Big Data)], dữ liệu phi cấu trúc, Khoa học Dữ liệu |

ELT đang ngày càng phổ biến hơn nhờ sự phát triển của công nghệ lưu trữ và xử lý dữ liệu lớn trên đám mây.