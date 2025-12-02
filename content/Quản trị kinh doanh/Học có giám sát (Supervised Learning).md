---
MOC: "false"
Title: "Học có giám sát (Supervised Learning)"
Alias:
- "Supervised Learning"
- "Học có giám sát"

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

Up: # Link tới MOC hoặc concept cha
- "[[Học máy (Machine Learning)]]"
Related: # Link tới các concept ngang hàng
- "[[Học không giám sát (Unsupervised)]]"
- "[[Phân loại (Classification)]]"
- "[[Hồi quy (Regression)]]"
- "[[Dữ liệu có nhãn (Labeled Data)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[Học có giám sát (Supervised Learning)]]

## Định nghĩa

**Học có giám sát** là loại hình [[Học máy (Machine Learning)|học máy]] phổ biến nhất, trong đó thuật toán học từ một tập **[[Dữ liệu có nhãn (Labeled Data)]]**.

## [[Dữ liệu có nhãn (Labeled Data)]] là gì?

Dữ liệu có nhãn là tập dữ liệu huấn luyện (training data) mà mỗi điểm dữ liệu đầu vào (Input - *Features*) đều đi kèm với một kết quả đầu ra (Output - *Label* hay "đáp án đúng").

*Ví dụ:* Để huấn luyện mô hình nhận diện giá nhà:
* **Input (Features):** Diện tích, Số phòng ngủ, Vị trí.
* **Output (Label):** Giá nhà (ví dụ: 5 tỷ).

## Cách thức Hoạt động

Mô hình được "dạy" bằng cách cho xem hàng ngàn cặp (Input, Output). Nhiệm vụ của nó là học ra một "quy tắc" (hàm $f$) có thể ánh xạ $Input \rightarrow Output$ một cách chính xác.

> $Output \approx f(Input)$

Sau khi huấn luyện, mô hình có thể *dự đoán* Output (Label) cho các Input mới mà nó chưa từng thấy.

## 2 Bài toán Chính

1.  **[[Phân loại (Classification)]]:**
    * *Mục tiêu:* Dự đoán một *nhãn rời rạc* (hạng mục, category).
    * *Câu hỏi:* "Loại nào?"
    * *Ví dụ:* Email này là "Spam" hay "Không Spam"? Bệnh nhân "U lành" hay "U ác"?

2.  **[[Hồi quy (Regression)]]:**
    * *Mục tiêu:* Dự đoán một *giá trị liên tục* (con số).
    * *Câu hỏi:* "Bao nhiêu?"
    * *Ví dụ:* Giá nhà ngày mai là "bao nhiêu"? Doanh số tháng tới là "bao nhiêu"?