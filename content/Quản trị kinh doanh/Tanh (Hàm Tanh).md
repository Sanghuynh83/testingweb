---
MOC: "false"
Title: "Tanh (Hàm Tanh)"
Alias:
- "Hyperbolic Tangent Function"
- "Hàm Tanh"

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

Up: # Link tới MOC hoặc concept cha
- "[[Hàm kích hoạt (Activation Function)]]"
Related: # Link tới các concept ngang hàng
- "[[ReLU]]"
- "[[Sigmoid]]"
- "[[Mạng Nơ-ron (Neural Network)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[Tanh (Hàm Tanh)]]

## Định nghĩa

**Hàm Tanh (Hyperbolic Tangent)** là một [[Hàm kích hoạt (Activation Function)|hàm kích hoạt]] phi tuyến, có dạng hình chữ "S" tương tự như [[Sigmoid]], nhưng có phạm vi đầu ra khác.

## Công thức

> **tanh(x) = (e<sup>x</sup> - e<sup>-x</sup>) / (e<sup>x</sup> + e<sup>-x</sup>)**
> *(Cũng có thể viết là: tanh(x) = 2 * [[Sigmoid]](2x) - 1)*



## Đặc điểm

* **Đầu ra (Output):** Nằm trong khoảng **(-1, 1)**.
* **Zero-centered:** Khác với [[Sigmoid]] (đầu ra 0 đến 1), đầu ra của Tanh đối xứng quanh 0. Đặc tính này thường giúp quá trình hội tụ (convergence) của thuật toán tối ưu (gradient descent) diễn ra **nhanh hơn** khi sử dụng Tanh ở các lớp ẩn.

## Ưu điểm và Nhược điểm

* **Ưu điểm:**
    * **Zero-centered:** Thường hiệu quả hơn Sigmoid ở các lớp ẩn.
* **Nhược điểm:**
    * **Vanishing Gradient:** Tương tự Sigmoid, Tanh cũng gặp vấn đề Vanishing Gradient khi đầu vào (x) có giá trị tuyệt đối lớn (đạo hàm tiến về 0).
    * **Tính toán:** Phức tạp hơn [[ReLU]].

Do vấn đề Vanishing Gradient, [[ReLU]] và các biến thể của nó thường được ưu tiên hơn Tanh cho các lớp ẩn trong mạng nơ-ron sâu hiện đại.