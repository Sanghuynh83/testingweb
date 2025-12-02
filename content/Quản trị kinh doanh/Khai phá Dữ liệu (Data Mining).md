---
MOC: "false"
Title: "Khai phá Dữ liệu (Data Mining)"
Alias:
- "Data Mining"
- "Khai thác Dữ liệu"
- "Phát hiện Tri thức (KDD)"

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
- "Thống_kê"
- "Học_máy"

Up: # Link tới MOC hoặc concept cha
- "[[MOC - Phân tích Dữ liệu Kinh doanh]]"
- "[[Business Analytics (BA) là gì]]"
Related: # Link tới các concept ngang hàng
- "[[Dữ liệu lớn (Big Data)]]"
- "[[Học máy (Machine Learning)]]"
- "[[Kho Dữ liệu (Data Warehouse)]]"
- "[[Trực quan hóa Dữ liệu (Data Visualization)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[Khai phá Dữ liệu (Data Mining)]]

## Định nghĩa

**Khai phá Dữ liệu (Data Mining)** là một quy trình liên ngành (sử dụng thống kê, AI, [[Học máy (Machine Learning)]]) nhằm **khám phá (discover)** các **mẫu (patterns)**, **liên kết (associations)**, và **tri thức (insights)** tiềm ẩn có giá trị từ các tập [[Dữ liệu lớn (Big Data)|dữ liệu lớn]] mà trước đây chưa được biết đến.

Nó không chỉ là *truy vấn (query)* dữ liệu (việc đó chỉ lấy ra cái bạn đã biết), mà là *phát hiện* ra những điều bạn *chưa* biết.

## Mục tiêu

Mục tiêu của Data Mining là biến dữ liệu thô (raw data) thành thông tin hữu ích để hỗ trợ [[Ra Quyết định]], thường là cho [[MOC - Phân tích Dự báo (Predictive)|phân tích dự báo]].

## Các Kỹ thuật Phổ biến

1.  **Phân loại (Classification):** (Học có giám sát)
    * *Mô tả:* Xây dựng mô hình để *phân loại* dữ liệu mới vào các nhóm đã biết.
    * *Ví dụ:* Lọc email (Spam / Không Spam), Phê duyệt tín dụng (Rủi ro / An toàn).

2.  **Hồi quy (Regression):** (Học có giám sát)
    * *Mô tả:* Dự đoán một giá trị *số liên tục*.
    * *Ví dụ:* Dự đoán giá nhà, dự báo doanh số.

3.  **Phân cụm (Clustering):** (Học không giám sát)
    * *Mô tả:* Tự động *nhóm* các đối tượng tương tự nhau lại thành cụm, mà không biết trước các nhóm.
    * *Ví dụ:* [[Phân khúc Thị trường]] (nhóm các khách hàng có hành vi giống nhau).

4.  **Luật Kết hợp (Association Rules):** (Học không giám sát)
    * *Mô tả:* Tìm ra các quy tắc kết hợp (ví dụ: "Nếu... thì...").
    * *Ví dụ kinh điển:* "Nếu khách hàng mua [Bia] thì 80% sẽ mua [Tã lót]" (Phân tích giỏ hàng).