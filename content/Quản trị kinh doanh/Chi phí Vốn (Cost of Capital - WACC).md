---
MOC: "false"
Title: "Chi phí Vốn (Cost of Capital - WACC)"
Alias:
- "Weighted Average Cost of Capital"
- "WACC"
- "Chi phí Vốn Bình quân Gia quyền"

# ---
## "Metric" (Chỉ số)
## "Definition" (Định nghĩa)
# ---
Concept_Type:
- "Metric"
- "Definition"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Tài_chính"
- "Định_giá"

Up: # Link tới MOC hoặc concept cha
- "[[MOC - Quản trị Tài chính]]"
- "[[MOC - Cấu trúc Vốn và Huy động vốn (Quyết định Tài trợ)]]"
Related: # Link tới các concept ngang hàng
- "[[Hiện giá Thuần (NPV)]]"
- "[[Tỷ suất Hoàn vốn Nội bộ (IRR)]]"
- "[[Cấu trúc Vốn]]"
- "[[Chi phí Vốn chủ sở hữu (Re)]]"
- "[[Chi phí Nợ (Rd)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Giáo trình Tài chính Doanh nghiệp"
---

# [[Chi phí Vốn (Cost of Capital - WACC)]]

## Định nghĩa

**Chi phí Vốn Bình quân Gia quyền (WACC)** là chi phí sử dụng vốn *bình quân* của một doanh nghiệp, được tính toán dựa trên tỷ trọng (weighted) của tất cả các nguồn vốn (như nợ vay và vốn chủ sở hữu) trong cấu trúc vốn của công ty.

Về cơ bản, WACC là **tỷ suất sinh lợi tối thiểu** mà công ty *phải* tạo ra từ các khoản đầu tư của mình để làm hài lòng tất cả các bên cung cấp vốn (chủ nợ và cổ đông).

## Công thức

$$WACC = (E/V) \times R_e + (D/V) \times R_d \times (1 - t)$$

Trong đó:
* **$E$**: Giá trị thị trường của Vốn chủ sở hữu (Equity).
* **$D$**: Giá trị thị trường của Nợ (Debt).
* **$V = E + D$**: Tổng giá trị thị trường của công ty.
* **$R_e$**: [[Chi phí Vốn chủ sở hữu (Re)]] (lợi nhuận cổ đông yêu cầu, thường tính bằng mô hình CAPM).
* **$R_d$**: [[Chi phí Nợ (Rd)]] (lãi suất vay trước thuế).
* **$(1 - t)$**: Lá chắn thuế (Tax Shield). Vì lãi vay được trừ trước khi tính thuế, chi phí nợ thực tế sẽ thấp hơn. `t` là thuế suất thuế thu nhập doanh nghiệp.

## Ứng dụng

WACC là một trong những chỉ số quan trọng nhất trong tài chính:
1.  **Làm Tỷ lệ Chiết khấu (Discount Rate):** WACC được sử dụng làm tỷ lệ `$r$` trong công thức tính [[Hiện giá Thuần (NPV)]] để chiết khấu các dòng tiền tương lai của dự án về hiện tại.
2.  **Làm Ngưỡng so sánh (Hurdle Rate):** WACC được dùng làm "ngưỡng" (rào cản) để so sánh với [[Tỷ suất Hoàn vốn Nội bộ (IRR)]] của một dự án.