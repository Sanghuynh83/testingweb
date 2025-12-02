---
MOC: "false"
Title: "Hiện giá Thuần (NPV)"
Alias:
- "Net Present Value"
- "NPV"
- "Giá trị Hiện tại Ròng"

# ---
## "Metric" (Chỉ số)
## "Framework" (Khung sườn)
# ---
Concept_Type:
- "Metric"
- "Framework"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Tài_chính"
- "Đánh_giá_Dự_án"

Up: # Link tới MOC hoặc concept cha
- "[[MOC - Quản trị Tài chính]]"
- "[[MOC - Hoạch định Ngân sách Vốn (Quyết định Đầu tư)]]"
Related: # Link tới các concept ngang hàng
- "[[Giá trị Thời gian của Tiền (Time Value of Money)]]"
- "[[Tỷ suất Hoàn vốn Nội bộ (IRR)]]"
- "[[Chi phí Vốn (Cost of Capital - WACC)]]"
- "[[Chiết khấu (Discounting)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Giáo trình Tài chính Doanh nghiệp"
---

# [[Hiện giá Thuần (NPV)]]

## Định nghĩa

**Hiện giá Thuần (Net Present Value - NPV)** là một phương pháp thẩm định dự án đầu tư, đo lường chênh lệch giữa *giá trị hiện tại của các dòng tiền vào* (cash inflows) trong tương lai và *giá trị hiện tại của các dòng tiền ra* (cash outflows - chi phí đầu tư ban đầu).

NPV trả lời câu hỏi: "Nếu thực hiện dự án này, giá trị của công ty sẽ tăng thêm (hoặc giảm đi) chính xác là bao nhiêu tiền *ngay hôm nay*?"

## Công thức

$$NPV = \sum_{t=1}^{n} \frac{CF_t}{(1 + r)^t} - C_0$$

Trong đó:
* `$CF_t$`: Dòng tiền ròng (Thu - Chi) tại thời điểm $t$.
* `$r$`: Tỷ lệ chiết khấu (Discount Rate), thường là [[Chi phí Vốn (Cost of Capital - WACC)]] hoặc [[Chi phí Cơ hội]].
* `$n$`: Tổng số kỳ của dự án.
* `$C_0$`: Chi phí đầu tư ban đầu (tại $t=0$).

## Quy tắc Ra Quyết định

Việc tính toán NPV dựa trên nguyên tắc [[Giá trị Thời gian của Tiền (Time Value of Money)]].
* **NPV > 0:** Chấp nhận dự án. Dự án tạo ra giá trị, lợi nhuận kỳ vọng lớn hơn chi phí vốn.
* **NPV < 0:** Từ chối dự án. Dự án phá hủy giá trị.
* **NPV = 0:** Hòa vốn. Dự án tạo ra lợi nhuận đúng bằng tỷ suất sinh lợi yêu cầu (chi phí vốn).

NPV được coi là tiêu chuẩn vàng trong hoạch định ngân sách vốn vì nó đo lường trực tiếp giá trị gia tăng cho cổ đông.