---
MOC: "false"
Title: "Học máy (Machine Learning)"
Alias:
- "Machine Learning"
- "ML"
- "Máy học"

# ---
## "Definition" (Định nghĩa)
## "Process" (Quy trình)
# ---
Concept_Type:
- "Definition"
- "Process"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Phân_tích_Dữ_liệu"
- "Công_nghệ"
- "AI"

Up: # Link tới MOC hoặc concept cha
- "[[Khai phá Dữ liệu (Data Mining)]]"
- "[[Business Analytics (BA) là gì]]"
- "[[MOC - Phân tích Dữ liệu Kinh doanh]]"
Related: # Link tới các concept ngang hàng
- "[[Trí tuệ Nhân tạo (AI)]]"
- "[[Khai phá Dữ liệu (Data Mining)]]"
- "[[Học có giám sát (Supervised)]]"
- "[[Học không giám sát (Unsupervised)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[Học máy (Machine Learning)]]

## Định nghĩa

**Học máy (Machine Learning - ML)** là một nhánh của [[Trí tuệ Nhân tạo (AI)]], tập trung vào việc phát triển các thuật toán (algorithms) cho phép máy tính **"học" (learn)** từ dữ liệu mà **không cần được lập trình tường minh (explicitly programmed)** cho từng trường hợp.

Thay vì viết code theo quy tắc "Nếu A thì B", chúng ta "dạy" máy tính bằng cách cho nó xem rất nhiều ví dụ (dữ liệu), và nó sẽ tự tìm ra quy luật (mô hình - model) để dự đoán hoặc phân loại dữ liệu mới.

## Học máy Hoạt động như thế nào?
1.  **Thu thập Dữ liệu (Data Collection):** Càng nhiều, càng tốt.
2.  **Huấn luyện Mô hình (Model Training):** Cho thuật toán "xem" dữ liệu huấn luyện (training data). Thuật toán sẽ điều chỉnh các tham số nội bộ của nó để tìm ra mối liên hệ giữa đầu vào (features) và đầu ra (label - nếu có).
3.  **Đánh giá Mô hình (Model Evaluation):** Dùng một tập dữ liệu riêng (test data) để kiểm tra xem mô hình dự đoán tốt đến đâu.
4.  **Triển khai (Deployment):** Sử dụng mô hình đã huấn luyện để dự đoán trên dữ liệu mới, thực tế.

## 2 Loại Hình Học máy Phổ biến

1.  **[[Học có giám sát (Supervised Learning)]]:**
    * *Dữ liệu huấn luyện:* Có "nhãn" (labeled) - tức là biết trước kết quả đúng (ví dụ: ảnh con mèo được gán nhãn "mèo").
    * *Mục tiêu:* Học cách dự đoán nhãn cho dữ liệu mới.
    * *Bài toán:* [[Khai phá Dữ liệu (Data Mining)|Phân loại (Classification)]], [[Khai phá Dữ liệu (Data Mining)|Hồi quy (Regression)]].

2.  **[[testingweb/content/Quản trị kinh doanh/Học không giám sát (Unsupervised Learning)]]:**
    * *Dữ liệu huấn luyện:* *Không* có nhãn.
    * *Mục tiêu:* Tự tìm ra cấu trúc hoặc mẫu tiềm ẩn trong dữ liệu.
    * *Bài toán:* [[Khai phá Dữ liệu (Data Mining)|Phân cụm (Clustering)]], [[Khai phá Dữ liệu (Data Mining)|Luật Kết hợp (Association Rules)]].