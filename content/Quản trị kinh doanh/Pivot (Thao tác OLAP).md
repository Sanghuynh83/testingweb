---
MOC: "false"
Title: "Pivot (Thao tác OLAP)"
Alias:
- "Pivot"
- "Rotate"
- "Xoay trục"

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
- "[[Drill-down]]"
- "[[Roll-up]]"
- "[[Pivot Table (Excel)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Kho dữ liệu, BI"
---

# [[Pivot (Thao tác OLAP)]]

## Định nghĩa

**Pivot (Xoay trục)** là một thao tác cơ bản trong [[OLAP (Online Analytical Processing)|OLAP]], cho phép người dùng **thay đổi góc nhìn (orientation)** của [[Data Cube|khối dữ liệu]] bằng cách **xoay (rotate)** các chiều (dimensions) trên các trục của báo cáo. 🔄

Thao tác này tương tự như chức năng **Pivot Table** trong Excel.

## Mục đích

Pivot giúp người dùng xem xét mối quan hệ giữa các chiều dữ liệu theo những cách khác nhau mà *không* làm thay đổi dữ liệu gốc. Nó giúp khám phá các góc nhìn mới.

## Ví dụ

Giả sử bạn có một bảng (2 chiều) hiển thị Doanh số:
* **Chế độ xem 1:**
    * **Hàng:** Sản phẩm (A, B, C)
    * **Cột:** Thời gian (Quý 1, Quý 2)

| Sản phẩm | Quý 1 | Quý 2 |
|---|---|---|
| A | 100 | 120 |
| B | 150 | 160 |
| C | 80 | 90 |

* **Thực hiện Pivot:** Bạn xoay trục, đưa Thời gian xuống làm Hàng và Sản phẩm lên làm Cột.
* **Chế độ xem 2 (Sau Pivot):**
    * **Hàng:** Thời gian (Quý 1, Quý 2)
    * **Cột:** Sản phẩm (A, B, C)

| Thời gian | A | B | C |
|---|---|---|---|
| Quý 1 | 100 | 150 | 80 |
| Quý 2 | 120 | 160 | 90 |

Dữ liệu bên trong không đổi, chỉ có cách trình bày thay đổi để làm nổi bật các khía cạnh khác nhau (ví dụ: Chế độ xem 2 dễ so sánh doanh số giữa các sản phẩm *trong cùng một quý* hơn).