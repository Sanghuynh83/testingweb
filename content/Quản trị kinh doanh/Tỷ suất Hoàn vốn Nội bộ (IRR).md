---
MOC: "false"
Title: "Tỷ suất Hoàn vốn Nội bộ (IRR)"
Alias:
- "Internal Rate of Return"
- "IRR"
- "Tỷ suất Sinh lợi Nội bộ"

# ---
## "Metric" (Chỉ số)
# ---
Concept_Type:
- "Metric"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Tài_chính"
- "Đánh_giá_Dự_án"

Up: # Link tới MOC hoặc concept cha
- "[[MOC - Quản trị Tài chính]]"
- "[[MOC - Hoạch định Ngân sách Vốn (Quyết định Đầu tư)]]"
Related: # Link tới các concept ngang hàng
- "[[Hiện giá Thuần (NPV)]]"
- "[[Giá trị Thời gian của Tiền (Time Value of Money)]]"
- "[[Chi phí Vốn (Cost of Capital - WACC)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Giáo trình Tài chính Doanh nghiệp"
---

# [[Tỷ suất Hoàn vốn Nội bộ (IRR)]]

## Định nghĩa

**Tỷ suất Hoàn vốn Nội bộ (IRR)** là một tỷ lệ chiết khấu (lãi suất) đặc biệt mà tại đó, **[[Hiện giá Thuần (NPV)]] của một dự án đầu tư bằng chính xác 0 (không)**.

Nói cách khác, IRR chính là tỷ suất sinh lợi *ước tính* (dưới dạng %) của chính dự án đó, dựa trên dòng tiền của nó. Nó trả lời câu hỏi: "Nếu tôi đầu tư vào dự án này, tôi dự kiến sẽ kiếm được bao nhiêu % lợi nhuận mỗi năm?"

## Quy tắc Ra Quyết định

Quy tắc cơ bản là so sánh IRR với "ngưỡng" lợi nhuận yêu cầu, chính là [[Chi phí Vốn (Cost of Capital - WACC)]].

* **IRR > WACC:** Chấp nhận dự án. (Dự án sinh lợi cao hơn chi phí bỏ ra).
* **IRR < WACC:** Từ chối dự án. (Dự án sinh lợi thấp hơn chi phí).
* **IRR = WACC:** Hòa vốn (tương đương NPV = 0).

## Ưu điểm và Nhược điểm

* **Ưu điểm:** Trực quan, dễ hiểu. Các nhà quản lý thường thích nói về tỷ suất sinh lợi (%) hơn là một con số giá trị tuyệt đối (như NPV).
* **Nhược điểm:**
    1.  **Nhiều IRR:** Nếu dòng tiền của dự án đổi dấu nhiều lần (ví dụ: âm, dương, âm, dương), có thể tồn tại nhiều giá trị IRR, gây khó khăn khi ra quyết định.
    2.  **Giả định Tái đầu tư:** IRR ngầm giả định rằng các dòng tiền thu được trong tương lai sẽ được tái đầu tư với lãi suất *bằng chính IRR*. Điều này thường phi thực tế. (Ngược lại, NPV giả định tái đầu tư bằng WACC, thực tế hơn).

*Lưu ý:* Khi có xung đột giữa NPV và IRR (ví dụ: khi so sánh các dự án loại trừ lẫn nhau), **[[Hiện giá Thuần (NPV)]] luôn được ưu tiên** vì nó đo lường giá trị gia tăng tuyệt đối cho công ty.