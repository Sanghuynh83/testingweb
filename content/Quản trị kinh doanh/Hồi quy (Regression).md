---
MOC: "false"
Title: "Hồi quy (Regression)"
Alias:
- "Regression"
- "Bài toán Hồi quy"
- "Dự báo Số"

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
- "Thống_kê"

Up: # Link tới MOC hoặc concept cha
- "[[Học có giám sát (Supervised)]]"
- "[[Khai phá Dữ liệu (Data Mining)]]"
Related: # Link tới các concept ngang hàng
- "[[Phân loại (Classification)]]"
- "[[Học có giám sát (Supervised)]]"
- "[[Dữ liệu có nhãn (Labeled Data)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu, Thống kê"
---

# [[Hồi quy (Regression)]]

## Định nghĩa

**Hồi quy (Regression)** là một bài toán thuộc [[Học có giám sát (Supervised)|Học có giám sát (Supervised Learning)]], trong đó mục tiêu là xây dựng một mô hình có khả năng **dự đoán (predict)** một giá trị **liên tục (continuous)**.

Đầu ra (Output/Label) của bài toán hồi quy là một *con số*.

## Câu hỏi Hồi quy
Bài toán này trả lời câu hỏi: "**Bao nhiêu?**"

## Phân biệt với Phân loại (Classification)
* **[[Phân loại (Classification)]]:** Dự đoán *loại* (rời rạc). Ví dụ: "Nóng" hay "Lạnh"?
* **Hồi quy:** Dự đoán *con số* (liên tục). Ví dụ: Nhiệt độ ngày mai là *bao nhiêu* độ C?

## Ví dụ
* Dự báo giá nhà (dựa trên diện tích, vị trí...).
* Dự báo doanh số bán hàng (dựa trên chi tiêu quảng cáo, mùa vụ...).
* Dự báo giá cổ phiếu.
* Dự đoán tuổi của một người dựa trên ảnh.

## Thuật toán Phổ biến
* Hồi quy Tuyến tính (Linear Regression).
* Hồi quy Đa thức (Polynomial Regression).
* Cây Quyết định Hồi quy (Decision Tree Regression).
* Rừng Ngẫu nhiên Hồi quy (Random Forest Regression).
* [[Mạng Nơ-ron (Neural Network)]].