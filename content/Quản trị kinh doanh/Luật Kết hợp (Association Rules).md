---
MOC: "false"
Title: "Luật Kết hợp (Association Rules)"
Alias:
- "Association Rule Learning"
- "Phân tích Giỏ hàng (Market Basket Analysis)"

# ---
## "Definition" (Định nghĩa)
## "Process" (Quy trình)
## "Model" (Mô hình)
# ---
Concept_Type:
- "Definition"
- "Process"
- "Model"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Phân_tích_Dữ_liệu"
- "Học_máy"
- "ML"
- "Học_không_giám_sát"
- "Marketing"

Up: # Link tới MOC hoặc concept cha
- "[[Học không giám sát (Unsupervised)]]"
- "[[Khai phá Dữ liệu (Data Mining)]]"
Related: # Link tới các concept ngang hàng
- "[[Phân cụm (Clustering)]]"
- "[[Học không giám sát (Unsupervised)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu (Agrawal et al.)"
---

# [[Luật Kết hợp (Association Rules)]]

## Định nghĩa

**Luật Kết hợp** là một kỹ thuật thuộc [[Học không giám sát (Unsupervised)|Học không giám sát]] và [[Khai phá Dữ liệu (Data Mining)]], được sử dụng để khám phá các mối quan hệ thú vị, tiềm ẩn (dưới dạng quy tắc "Nếu... thì...") giữa các biến trong các tập dữ liệu lớn.

## Ứng dụng Kinh điển: Phân tích Giỏ hàng (Market Basket Analysis)

Đây là ứng dụng nổi tiếng nhất. Phân tích giỏ hàng xem xét dữ liệu giao dịch của khách hàng để tìm ra các mặt hàng nào thường được mua cùng nhau.

*Ví dụ:* Một siêu thị có thể phát hiện ra quy tắc:
> **Nếu** {Bia, Tã lót} **thì** {Snack} (Confidence=70%, Support=10%)

* **Quy tắc:** "Nếu khách hàng mua Bia và Tã lót, thì 70% khả năng họ cũng sẽ mua Snack."
* **Support (Độ hỗ trợ):** 10% tổng số giao dịch chứa cả 3 mặt hàng Bia, Tã lót, Snack. (Đo độ phổ biến của quy tắc).
* **Confidence (Độ tin cậy):** Trong số các giao dịch có chứa Bia và Tã lót, 70% cũng chứa Snack. (Đo độ mạnh của quy tắc).

## Ứng dụng khác
* **Web mining:** Trang web nào thường được truy cập cùng nhau?
* **Y tế:** Triệu chứng nào thường xuất hiện cùng nhau?
* **Phát hiện gian lận:** Hành vi nào thường đi kèm với gian lận?

## Thuật toán Phổ biến
* Apriori
* Eclat
* FP-Growth