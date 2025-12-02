---
MOC: "false"
Title: "Roll-up (Thao tác OLAP)"
Alias:
- "Roll-up"
- "Consolidate"
- "Drill-up"
- "Tổng hợp lên"

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
- "[[Pivot]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Kho dữ liệu, BI"
---

# [[Roll-up]]

## Định nghĩa

**Roll-up** (hay **Drill-up**, **Consolidate**) là một thao tác cơ bản trong [[OLAP (Online Analytical Processing)|OLAP]], thực hiện việc **tổng hợp (aggregating)** dữ liệu dọc theo một hoặc nhiều cấp bậc (hierarchies) của các chiều (dimensions) trong [[Data Cube]]. ⬆️

Đây là thao tác **ngược lại** của [[Drill-down]].

## Mục đích

Roll-up giúp người dùng xem xét dữ liệu ở mức độ **tổng quan hơn**, giảm bớt độ chi tiết. Nó trả lời câu hỏi: "Nhìn ở bức tranh lớn hơn thì sao?"

## Ví dụ

Giả sử bạn đang xem Doanh số theo `Thành phố`:
* **Bước 1 (Drill-down thấp nhất):** Xem Doanh số theo từng Thành phố (Hà Nội, Đà Nẵng, TP.HCM...).
* **Bước 2 (Roll-up lần 1):** Bạn **Roll-up** theo chiều Địa điểm, tổng hợp Doanh số lên cấp Vùng (Vùng Miền Bắc, Vùng Miền Trung, Vùng Miền Nam).
* **Bước 3 (Roll-up lần 2):** Bạn **Roll-up** tiếp lên cấp Quốc gia (Tổng Doanh số Việt Nam).

Roll-up có thể thực hiện bằng cách:
1.  **Leo lên cấp bậc (Climbing up a hierarchy):** Như ví dụ trên (Thành phố $\rightarrow$ Vùng $\rightarrow$ Quốc gia).
2.  **Giảm bớt chiều (Reducing dimensions):** Ví dụ: Đang xem Doanh số theo (Tháng, Sản phẩm), Roll-up bằng cách bỏ đi chiều Sản phẩm $\rightarrow$ Chỉ còn xem Tổng Doanh số theo Tháng.