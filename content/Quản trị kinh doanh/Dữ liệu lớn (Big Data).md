---
MOC: "false"
Title: "Dữ liệu lớn (Big Data)"
Alias:
- "Big Data"

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
- "Công_nghệ"
- "Dữ_liệu"

Up: # Link tới MOC hoặc concept cha
- "[[MOC - Phân tích Dữ liệu Kinh doanh]]"
Related: # Link tới các concept ngang hàng
- "[[Khai phá Dữ liệu (Data Mining)]]"
- "[[Học máy (Machine Learning)]]"
- "[[Kho Dữ liệu (Data Warehouse)]]"
- "[[Data Lake]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[Dữ liệu lớn (Big Data)]]

## Định nghĩa

**Dữ liệu lớn (Big Data)** là thuật ngữ mô tả các tập dữ liệu có **khối lượng cực lớn (volume)**, **tốc độ tạo ra rất nhanh (velocity)**, và **đa dạng về định dạng (variety)**, đến mức các công cụ xử lý dữ liệu truyền thống (như [[Database (Cơ sở dữ liệu)|database]] quan hệ) không thể thu thập, lưu trữ, quản lý và phân tích một cách hiệu quả.

## 3 Vs (Đặc trưng Cốt lõi)

Mô hình 3V (do Gartner đề xuất) thường được dùng để định nghĩa Big Data:

1.  **Volume (Khối lượng):**
    * *Mô tả:* Lượng dữ liệu khổng lồ, thường tính bằng Terabytes (TB), Petabytes (PB) hoặc lớn hơn.
    * *Ví dụ:* Dữ liệu giao dịch của sàn thương mại điện tử, dữ liệu từ cảm biến IoT, video từ camera an ninh.

2.  **Velocity (Tốc độ):**
    * *Mô tả:* Dữ liệu được tạo ra và cần được xử lý với tốc độ rất nhanh, đôi khi là theo thời gian thực (real-time).
    * *Ví dụ:* Dữ liệu từ mạng xã hội (tweets, posts), dữ liệu giao dịch chứng khoán, dữ liệu luồng (streaming data).

3.  **Variety (Đa dạng):**
    * *Mô tả:* Dữ liệu tồn tại dưới nhiều định dạng khác nhau.
    * *Ví dụ:*
        * **Có cấu trúc (Structured):** Dữ liệu trong bảng (database, Excel).
        * **Bán cấu trúc (Semi-structured):** Dữ liệu XML, JSON.
        * **Phi cấu trúc (Unstructured):** Văn bản (email, bài báo), hình ảnh, video, âm thanh. (Chiếm tỷ trọng lớn nhất trong Big Data).

## Mở rộng thành 5 Vs (hoặc hơn)
Ngoài 3V gốc, người ta thường bổ sung:
* **Veracity (Tính xác thực):** Mức độ tin cậy, chính xác của dữ liệu (Big Data thường nhiễu).
* **Value (Giá trị):** Khả năng khai thác được giá trị (insights) hữu ích từ dữ liệu.

Việc phân tích Big Data đòi hỏi các công nghệ và kỹ thuật mới như [[Khai phá Dữ liệu (Data Mining)]], [[Học máy (Machine Learning)]], và các hệ thống lưu trữ như [[Data Lake]].