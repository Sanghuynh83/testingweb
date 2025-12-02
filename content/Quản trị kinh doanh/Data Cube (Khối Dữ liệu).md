---
MOC: "false"
Title: "Data Cube (Khối Dữ liệu)"
Alias:
- "Khối Dữ liệu"
- "OLAP Cube"
- "Multidimensional Cube"
- "Khối Đa chiều"

# ---
## "Definition" (Định nghĩa)
## "Model" (Mô hình)
# ---
Concept_Type:
- "Definition"
- "Model"

tags:
- "Concept"
- "Phân_tích_Dữ_liệu"
- "Công_ngệ"
- "BI"
- "Data_Warehouse"
- "OLAP"

Up: # Link tới MOC hoặc concept cha
- "[[OLAP (Online Analytical Processing)]]"
- "[[Kho Dữ liệu (Data Warehouse)]]"
Related: # Link tới các concept ngang hàng
- "[[OLAP (Online Analytical Processing)]]"
- "[[Slice_and_Dice]]"
- "[[Drill-down]]"
- "[[Lược đồ Hình sao (Star Schema)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Kho dữ liệu, BI"
---

# [[Data Cube (Khối Dữ liệu)]]

## Định nghĩa

**Data Cube (Khối Dữ liệu)**, hay **OLAP Cube**, là một cấu trúc dữ liệu **đa chiều (multidimensional)** được sử dụng trong [[OLAP (Online Analytical Processing)|OLAP]] và [[Kho Dữ liệu (Data Warehouse)|Kho dữ liệu]] để lưu trữ dữ liệu đã được **tổng hợp trước (pre-aggregated)**. 🧊

Mục đích chính của Data Cube là cho phép **truy vấn (query)** và **phân tích (analysis)** dữ liệu một cách *cực kỳ nhanh chóng* từ nhiều góc độ (chiều) khác nhau.

## Cấu trúc Đa chiều

Trong khi [[CSDL Quan hệ (Relational DB)|database quan hệ]] thường là 2 chiều (bảng), Data Cube có thể hình dung như một khối Rubik, với nhiều hơn 2 chiều.

* **Facts (Sự kiện):** Các *số liệu* cần đo lường (measures), thường là các giá trị số.
    * *Ví dụ:* Doanh số bán hàng, Số lượng bán, Lợi nhuận.
* **Dimensions (Chiều):** Các *thuộc tính* mô tả sự kiện, là các góc độ để phân tích.
    * *Ví dụ:* Thời gian (Năm, Quý, Tháng), Địa điểm (Vùng, Tỉnh, Cửa hàng), Sản phẩm (Ngành hàng, Nhãn hiệu).



Một ô (cell) trong khối cube chứa giá trị Fact (ví dụ: Doanh số) tương ứng với giao điểm của các chiều (ví dụ: Doanh số của Sản phẩm A, tại Hà Nội, trong Quý 1 năm 2024).

## Ưu điểm
* **Tốc độ Truy vấn Nhanh:** Do dữ liệu đã được tính toán và tổng hợp sẵn, các truy vấn OLAP (như [[Slice_and_Dice]], [[Drill-down]]) rất nhanh.
* **Dễ Phân tích:** Cấu trúc đa chiều trực quan, dễ hiểu cho người dùng cuối (business users).

## Nhược điểm
* **Kém Linh hoạt:** Cấu trúc cube thường được định nghĩa trước, khó thay đổi.
* **"Bùng nổ Chiều" (Dimensionality Explosion):** Khi số chiều tăng lên, kích thước của cube có thể tăng theo cấp số nhân.