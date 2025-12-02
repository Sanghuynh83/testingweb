---
MOC: "false"
Title: "Softmax (Hàm Softmax)"
Alias:
- "Softmax Function"
- "Hàm Softmax"

# ---
## "Definition" (Định nghĩa)
## "Function" (Chức năng)
# ---
Concept_Type:
- "Definition"
- "Function"

tags:
- "Concept"
- "Phân_tích_Dữ_liệu"
- "Học_máy"
- "AI"
- "Deep_Learning"
- "Mạng_Nơ-ron"
- "Hàm_Kích_hoạt"
- "Phân_loại_Đa_lớp"

Up: # Link tới MOC hoặc concept cha
- "[[Hàm kích hoạt (Activation Function)]]"
Related: # Link tới các concept ngang hàng
- "[[Sigmoid]]"
- "[[Phân loại (Classification)]]"
- "[[Mạng Nơ-ron (Neural Network)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[Softmax (Hàm Softmax)]]

## Định nghĩa

**Hàm Softmax** là một [[Hàm kích hoạt (Activation Function)|hàm kích hoạt]] đặc biệt, thường được sử dụng ở **lớp đầu ra (output layer)** của [[Mạng Nơ-ron (Neural Network)|mạng nơ-ron]] cho bài toán **[[Phân loại (Classification)|phân loại đa lớp (multi-class classification)]]**.

## Chức năng

Softmax nhận đầu vào là một vector (vector $z$) chứa các giá trị số thực bất kỳ (scores) từ lớp trước đó, và biến đổi nó thành một **vector xác suất (probability distribution)**.

* Mỗi phần tử trong vector đầu ra nằm trong khoảng **[0, 1]**.
* **Tổng** của tất cả các phần tử trong vector đầu ra **bằng 1**.

## Công thức (Cho nơ-ron thứ $i$)

$$\text{Softmax}(z_i) = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}}$$

Trong đó:
* $z_i$: Giá trị đầu vào (score) của nơ-ron thứ $i$.
* $K$: Tổng số nơ-ron (tổng số lớp) ở lớp đầu ra.

## Ý nghĩa

Kết quả đầu ra của Softmax có thể được diễn giải là **xác suất** để mẫu đầu vào thuộc về từng lớp. Lớp có xác suất cao nhất sẽ là lớp được mô hình dự đoán.

*Ví dụ:* Dự đoán ảnh là "Mèo", "Chó", hay "Chim".
* Đầu vào Softmax (scores): `[2.0, 1.0, 0.1]`
* Đầu ra Softmax (xác suất): `[0.7, 0.2, 0.1]` (Tổng = 1.0)
* $\rightarrow$ Dự đoán: "Mèo" (vì có xác suất cao nhất là 0.7).

Softmax là phiên bản tổng quát hóa của hàm [[Sigmoid]] (Logistic) cho trường hợp nhiều hơn 2 lớp.