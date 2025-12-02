---
MOC: "false"
Title: "ReLU (Rectified Linear Unit)"
Alias:
- "ReLU"
- "Rectified Linear Unit"
- "Hàm ReLU"

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
- "[[Deep Learning]]"
Related: # Link tới các concept ngang hàng
- "[[Sigmoid]]"
- "[[Tanh]]"
- "[[Leaky ReLU]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[ReLU (Rectified Linear Unit)]]

## Định nghĩa

**ReLU** là một [[Hàm kích hoạt (Activation Function)|hàm kích hoạt]] phi tuyến, rất phổ biến và hiệu quả, đặc biệt là trong các lớp ẩn (hidden layers) của [[Deep Learning|mạng nơ-ron sâu]].

## Công thức

> **ReLU(x) = max(0, x)**

* **Nếu Đầu vào (x) > 0:** Đầu ra (y) = x (Tuyến tính).
* **Nếu Đầu vào (x) <= 0:** Đầu ra (y) = 0.



## Ưu điểm

1.  **Tính toán Nhanh:** Phép tính `max(0, x)` đơn giản hơn nhiều so với các hàm mũ (như [[Sigmoid]], [[Tanh]]), giúp quá trình huấn luyện mạng nơ-ron nhanh hơn.
2.  **Tránh Vanishing Gradient:** Đối với các giá trị đầu vào dương, đạo hàm của ReLU là 1. Điều này giúp giảm bớt vấn đề *Vanishing Gradient* (gradient quá nhỏ khiến các lớp đầu không học được) thường gặp ở Sigmoid và Tanh khi mạng rất sâu.
3.  **Tính thưa (Sparsity):** Khi đầu vào âm, đầu ra là 0. Điều này có nghĩa là một số nơ-ron sẽ "không kích hoạt", tạo ra một biểu diễn thưa (sparse) trong mạng, có thể hiệu quả hơn về mặt tính toán.

## Nhược điểm

* **"Dying ReLU":** Nếu một nơ-ron ReLU bị "mắc kẹt" ở vùng đầu vào âm (ví dụ: do learning rate quá lớn), nó sẽ luôn có đầu ra là 0 và gradient cũng là 0. Nơ-ron đó coi như "chết" và không còn học được gì nữa. Các biến thể như [[Leaky ReLU]] được tạo ra để giải quyết vấn đề này.