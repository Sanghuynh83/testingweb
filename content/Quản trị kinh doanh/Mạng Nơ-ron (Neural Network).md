---
MOC: "false"
Title: "Mạng Nơ-ron (Neural Network)"
Alias:
- "Neural Network"
- "NN"
- "Artificial Neural Network (ANN)"
- "Mạng Nơ-ron Nhân tạo"

# ---
## "Definition" (Định nghĩa)
## "Model" (Mô hình)
# ---
Concept_Type:
- "Definition"
- "Model"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Phân_tích_Dữ_liệu"
- "Học_máy"
- "AI"
- "Deep_Learning"

Up: # Link tới MOC hoặc concept cha
- "[[Deep Learning]]"
- "[[Học máy (Machine Learning)]]"
Related: # Link tới các concept ngang hàng
- "[[Deep Learning]]"
- "[[Neuron (Nơ-ron)]]"
- "[[Hàm kích hoạt (Activation Function)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[Mạng Nơ-ron (Neural Network)]]

## Định nghĩa

**Mạng Nơ-ron Nhân tạo (Artificial Neural Network - ANN)**, hay đơn giản là **Mạng Nơ-ron (NN)**, là một mô hình tính toán lấy cảm hứng từ cấu trúc và chức năng của mạng nơ-ron sinh học trong não người.

Đây là công nghệ cốt lõi đằng sau [[Deep Learning]].

## Cấu trúc Cơ bản

Một mạng nơ-ron bao gồm các lớp (layers) chứa các đơn vị xử lý gọi là **[[Neuron (Nơ-ron)|Nơ-ron (Neurons)]]** (hay nút - nodes):

1.  **Lớp Đầu vào (Input Layer):**
    * *Chức năng:* Tiếp nhận dữ liệu đầu vào (features). Mỗi nơ-ron tương ứng với một feature.

2.  **Lớp Ẩn (Hidden Layer(s)):**
    * *Chức năng:* Nằm giữa lớp Input và Output. Đây là nơi diễn ra các phép tính toán phức tạp. Một mạng nơ-ron có thể có *một hoặc nhiều* lớp ẩn. [[Deep Learning]] là khi có *nhiều* lớp ẩn.
    * *Hoạt động:* Mỗi nơ-ron trong lớp ẩn nhận tín hiệu từ các nơ-ron ở lớp trước, thực hiện phép tính (thường là tổng có trọng số - weighted sum), sau đó đưa qua một **[[Hàm kích hoạt (Activation Function)]]** để quyết định xem có "kích hoạt" (fire) và truyền tín hiệu đi tiếp hay không.

3.  **Lớp Đầu ra (Output Layer):**
    * *Chức năng:* Đưa ra kết quả dự đoán cuối cùng của mô hình. Số lượng nơ-ron ở lớp này phụ thuộc vào bài toán (ví dụ: 1 nơ-ron cho [[Hồi quy (Regression)]], nhiều nơ-ron cho [[Phân loại (Classification)]] đa lớp).



## Quá trình Học (Huấn luyện)
Trong quá trình huấn luyện, mạng nơ-ron điều chỉnh các **trọng số (weights)** kết nối giữa các nơ-ron để giảm thiểu sự khác biệt giữa kết quả dự đoán và "đáp án đúng" (trong [[Học có giám sát (Supervised)]]). Quá trình này thường sử dụng thuật toán lan truyền ngược (backpropagation).