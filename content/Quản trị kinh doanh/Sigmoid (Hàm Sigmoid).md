---
MOC: "false"
Title: "Sigmoid (Hàm Sigmoid)"
Alias:
- "Sigmoid Function"
- "Logistic Function"
- "Hàm Logistic"

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
- "Phân_loại_Nhị_phân"

Up: # Link tới MOC hoặc concept cha
- "[[Hàm kích hoạt (Activation Function)]]"
Related: # Link tới các concept ngang hàng
- "[[ReLU]]"
- "[[Tanh]]"
- "[[Softmax]]"
- "[[Phân loại (Classification)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[Sigmoid (Hàm Sigmoid)]]

## Định nghĩa

**Hàm Sigmoid** (hay Hàm Logistic) là một [[Hàm kích hoạt (Activation Function)|hàm kích hoạt]] phi tuyến có dạng hình chữ "S".

## Công thức

> **σ(x) = 1 / (1 + e<sup>-x</sup>)**

* **e:** Hằng số Euler (khoảng 2.718).



## Đặc điểm

* **Đầu ra (Output):** Luôn nằm trong khoảng **(0, 1)**.
* **Diễn giải Xác suất:** Vì đầu ra nằm giữa 0 và 1, hàm Sigmoid rất phù hợp để sử dụng ở **lớp đầu ra (output layer)** của [[Mạng Nơ-ron (Neural Network)|mạng nơ-ron]] cho bài toán **[[Phân loại (Classification)|phân loại nhị phân (binary classification)]]**. Đầu ra có thể được diễn giải như là *xác suất* để mẫu đó thuộc về lớp "dương" (positive class).

## Nhược điểm

1.  **Vanishing Gradient:** Khi đầu vào (x) rất lớn (dương hoặc âm), đạo hàm của hàm Sigmoid tiến về 0. Trong [[Deep Learning|mạng nơ-ron rất sâu]], điều này có thể khiến gradient (tín hiệu lỗi lan truyền ngược) trở nên cực kỳ nhỏ ở các lớp đầu tiên, làm chậm hoặc dừng quá trình học của các lớp đó.
2.  **Đầu ra không Zero-centered:** Đầu ra luôn dương (0, 1). Điều này có thể làm chậm quá trình hội tụ của thuật toán tối ưu (gradient descent) ở một số trường hợp. Hàm [[Tanh]] (có đầu ra từ -1 đến 1) thường được ưa chuộng hơn ở các lớp ẩn.

Do các nhược điểm này, [[ReLU]] và các biến thể của nó thường được ưu tiên hơn Sigmoid cho các lớp ẩn.