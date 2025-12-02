---
MOC: "false"
Title: "Phân loại (Classification)"
Alias:
- "Classification"
- "Bài toán Phân loại"

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
- "Học_có_giám_sát"

Up: # Link tới MOC hoặc concept cha
- "[[Học có giám sát (Supervised)]]"
- "[[Khai phá Dữ liệu (Data Mining)]]"
Related: # Link tới các concept ngang hàng
- "[[Hồi quy (Regression)]]"
- "[[Phân cụm (Clustering)]]"
- "[[Dữ liệu có nhãn (Labeled Data)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[Phân loại (Classification)]]

## Định nghĩa

**Phân loại (Classification)** là một bài toán thuộc [[Học có giám sát (Supervised)|Học có giám sát (Supervised Learning)]], trong đó mục tiêu là xây dựng một mô hình có khả năng **gán (assign)** một đối tượng mới vào một trong các **lớp (class)** hoặc **hạng mục (category)** đã được xác định trước.

Đầu ra (Output/Label) của bài toán phân loại là **rời rạc (discrete)**.

## Câu hỏi Phân loại
Bài toán này trả lời câu hỏi: "**Loại nào?**"

## Ví dụ
* **Phân loại Nhị phân (Binary Classification):** Chỉ có 2 lớp.
    * Email là "Spam" hay "Không Spam"?
    * Giao dịch là "Gian lận" hay "Không Gian lận"?
    * Khách hàng sẽ "Rời bỏ (Churn)" hay "Không Rời bỏ"?
* **Phân loại Đa lớp (Multi-class Classification):** Có nhiều hơn 2 lớp.
    * Nhận dạng chữ viết tay (Lớp 0, 1, 2,..., 9).
    * Phân loại cảm xúc văn bản ("Tích cực", "Tiêu cực", "Trung tính").
    * Chẩn đoán bệnh (Bệnh A, Bệnh B, Bệnh C, Khỏe mạnh).

## Thuật toán Phổ biến
* Hồi quy Logistic (Logistic Regression) - (Dùng cho phân loại, tên gây nhầm lẫn).
* Máy Vector Hỗ trợ (Support Vector Machine - SVM).
* Cây Quyết định (Decision Tree).
* Rừng Ngẫu nhiên (Random Forest).
* [[Mạng Nơ-ron (Neural Network)]].