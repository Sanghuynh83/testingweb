---
MOC: "false"
Title: "Phân cụm (Clustering)"
Alias:
- "Clustering"
- "Bài toán Phân cụm"
- "Gom cụm"

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

Up: # Link tới MOC hoặc concept cha
- "[[Học không giám sát (Unsupervised)]]"
- "[[Khai phá Dữ liệu (Data Mining)]]"
Related: # Link tới các concept ngang hàng
- "[[Phân loại (Classification)]]"
- "[[Học không giám sát (Unsupervised)]]"
- "[[Dữ liệu không nhãn (Unlabeled Data)]]"
- "[[Phân khúc Thị trường]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Khoa học Dữ liệu"
---

# [[Phân cụm (Clustering)]]

## Định nghĩa

**Phân cụm (Clustering)** là một bài toán thuộc [[Học không giám sát (Unsupervised)|Học không giám sát (Unsupervised Learning)]], trong đó mục tiêu là **tự động nhóm (grouping)** các đối tượng dữ liệu *tương tự nhau* vào các **cụm (clusters)**.

* **Trong cùng một cụm:** Các đối tượng có đặc điểm *giống nhau* (high intra-class similarity).
* **Giữa các cụm khác nhau:** Các đối tượng có đặc điểm *khác nhau* (low inter-class similarity).

Thuật toán tự tìm ra cấu trúc nhóm mà không cần biết trước các nhóm là gì ([[Dữ liệu không nhãn (Unlabeled Data)]]).

## Câu hỏi Phân cụm
Bài toán này trả lời câu hỏi: "**Những cái nào trông giống nhau?**"

## Phân biệt với Phân loại (Classification)
* **[[Phân loại (Classification)]] (Học có giám sát):** *Biết trước* các lớp là gì (ví dụ: "Mèo", "Chó"). Mục tiêu là gán đối tượng mới vào lớp đã biết.
* **Phân cụm (Học không giám sát):** *Không biết trước* các nhóm. Mục tiêu là để máy *tự khám phá* ra các nhóm tiềm ẩn dựa trên sự tương đồng.

## Ví dụ
* **[[Phân khúc Thị trường]]:** Tự động nhóm các khách hàng có hành vi mua sắm hoặc đặc điểm nhân khẩu học tương tự nhau.
* **Phát hiện Bất thường (Anomaly Detection):** Các điểm dữ liệu không thuộc về bất kỳ cụm nào có thể là các trường hợp bất thường cần xem xét.
* Phân loại tài liệu: Nhóm các bài báo có cùng chủ đề.
* Phân tích mạng xã hội: Tìm các cộng đồng người dùng có tương tác chặt chẽ.

## Thuật toán Phổ biến
* K-Means Clustering.
* Phân cụm Phân cấp (Hierarchical Clustering).
* DBSCAN.