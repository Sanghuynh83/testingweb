---
MOC: "false"
Title: "Drill-down (Thao tác OLAP)"
Alias:
- "Drill-down"
- "Đi sâu vào chi tiết"

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
- "[[Slice_and_Dice]]"
- "[[Roll-up]]"
- "[[Pivot]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Kho dữ liệu, BI"
---

# [[Drill-down]]

## Định nghĩa

**Drill-down** là một thao tác cơ bản trong [[OLAP (Online Analytical Processing)|OLAP]], cho phép người dùng điều hướng từ dữ liệu **tổng hợp (summarized)** xuống dữ liệu **chi tiết hơn (more detailed)**. 🔍

Nó hoạt động dựa trên các cấp bậc (hierarchies) được định nghĩa sẵn trong các chiều (dimensions) của [[Data Cube]].

## Mục đích

Drill-down giúp người dùng khám phá dữ liệu, tìm hiểu sâu hơn về nguyên nhân của các con số tổng hợp. Nó trả lời câu hỏi: "Con số này được tạo thành từ những thành phần chi tiết nào?"

## Ví dụ

Giả sử bạn đang xem Doanh số theo `Thời gian`:
* **Bước 1 (Roll-up cao nhất):** Xem Tổng Doanh số theo Năm (ví dụ: Năm 2024).
* **Bước 2 (Drill-down lần 1):** Nhấp vào Năm 2024, bạn **Drill-down** xuống xem Doanh số theo Quý (Quý 1, Quý 2, Quý 3, Quý 4 của năm 2024).
* **Bước 3 (Drill-down lần 2):** Nhấp vào Quý 1, bạn **Drill-down** xuống xem Doanh số theo Tháng (Tháng 1, Tháng 2, Tháng 3).
* **Bước 4 (Drill-down lần 3):** Nhấp vào Tháng 1, bạn **Drill-down** xuống xem Doanh số theo Ngày.

Thao tác ngược lại của Drill-down là **[[Roll-up]]** (đi từ chi tiết lên tổng hợp).