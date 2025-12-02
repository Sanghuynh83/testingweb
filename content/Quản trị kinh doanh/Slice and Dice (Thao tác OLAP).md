---
MOC: "false"
Title: "Slice and Dice (Thao tác OLAP)"
Alias:
- "Slice and Dice"
- "Cắt lát và Cắt khối"

# ---
## "Definition" (Định nghĩa)
## "Process" (Quy trình)
# ---
Concept_Type:
- "Definition"
- "Process"

tags:
- "Concept"
- "Phân_tích_Dữ_liệu"
- "Công_ngệ"
- "BI"
- "OLAP"
- "Data_Cube"

Up: # Link tới MOC hoặc concept cha
- "[[OLAP (Online Analytical Processing)]]"
- "[[Data Cube]]"
Related: # Link tới các concept ngang hàng
- "[[Drill-down]]"
- "[[Roll-up]]"
- "[[Pivot]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Kho dữ liệu, BI"
---

# [[Slice and Dice]]

## Định nghĩa

**Slice (Cắt lát)** và **Dice (Cắt khối)** là hai thao tác cơ bản trong [[OLAP (Online Analytical Processing)|OLAP]], cho phép người dùng xem các tập con (subsets) cụ thể của [[Data Cube|khối dữ liệu đa chiều (Data Cube)]] từ các góc độ khác nhau. 🔪🧊

## 1. Slice (Cắt lát)

* **Hành động:** Chọn *một giá trị cụ thể* cho *một chiều* duy nhất, tạo ra một "lát cắt" mỏng hơn của khối dữ liệu (giảm số chiều đi 1).
* **Mục đích:** Tập trung vào một phần cụ thể của dữ liệu.
* **Ví dụ:** Từ khối dữ liệu Doanh số (Thời gian, Địa điểm, Sản phẩm), thực hiện **Slice** theo `Thời gian = Năm 2024`. Kết quả là một bảng (2 chiều) Doanh số của năm 2024 theo Địa điểm và Sản phẩm.



## 2. Dice (Cắt khối / Cắt hạt lựu)

* **Hành động:** Chọn *một dải giá trị* (hoặc *nhiều giá trị*) cho *hai hoặc nhiều chiều*. Thao tác này tạo ra một "khối con" (subcube) nhỏ hơn từ khối dữ liệu gốc.
* **Mục đích:** Xem xét một tập hợp dữ liệu rất cụ thể, được lọc theo nhiều tiêu chí.
* **Ví dụ:** Từ khối dữ liệu gốc, thực hiện **Dice** theo `Thời gian = (Quý 1/2024, Quý 2/2024)`, `Địa điểm = (Hà Nội, TP.HCM)`, và `Sản phẩm = (Sản phẩm A)`. Kết quả là một khối con chỉ chứa Doanh số của Sản phẩm A tại HN & TPHCM trong 2 quý đầu năm 2024.