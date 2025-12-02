---
MOC: "false"
Title: "Mô hình Đặt hàng Kinh tế (EOQ)"
Alias:
- "Economic Order Quantity"
- "EOQ"
- "Mô hình Lượng đặt hàng Tối ưu"

# ---
## "Model" (Mô hình)
## "Metric" (Chỉ số)
# ---
Concept_Type:
- "Model"
- "Metric"

tags:
- "Concept"
- "Quản_trị_Kinh_doanh"
- "Vận_hành"
- "Hàng_tồn_kho"
- "Chuỗi_Cung_ứng"

Up: # Link tới MOC hoặc concept cha
- "[[MOC - Quản trị Hàng tồn kho]]"
- "[[MOC - Quản trị Vận hành]]"
Related: # Link tới các concept ngang hàng
- "[[Just-in-Time (JIT)]]"
- "[[Điểm Tái đặt hàng (ROP)]]"
- "[[Hàng tồn kho an toàn (Safety Stock)]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Giáo trình Quản trị Vận hành"
---

# [[Mô hình Đặt hàng Kinh tế (EOQ)]]

## Định nghĩa

**Mô hình Đặt hàng Kinh tế (EOQ)** là một mô hình quản trị hàng tồn kho cổ điển, được sử dụng để tính toán **lượng đặt hàng tối ưu (optimal order quantity)** nhằm **tối thiểu hóa tổng chi phí tồn kho** của doanh nghiệp.

## Hai loại Chi phí Cân bằng

EOQ tìm kiếm điểm cân bằng hoàn hảo giữa hai loại chi phí đối nghịch nhau:

1.  **Chi phí Đặt hàng (Ordering Costs):**
    * *Mô tả:* Chi phí phát sinh mỗi khi thực hiện một đơn đặt hàng (phí hành chính, vận chuyển, xử lý...).
    * *Xu hướng:* Càng đặt hàng *nhiều lần* (với lượng nhỏ), tổng chi phí này *càng cao*.

2.  **Chi phí Lưu kho (Holding Costs / Carrying Costs):**
    * *Mô tả:* Chi phí để lưu trữ một đơn vị hàng tồn kho trong một kỳ (phí kho bãi, bảo hiểm, hư hỏng, chi phí vốn bị trói buộc).
    * *Xu hướng:* Càng đặt hàng *lượng lớn* (tồn kho trung bình cao), tổng chi phí này *càng cao*.

**Điểm Tối ưu (EOQ):** Chính là lượng đặt hàng mà tại đó, *Tổng Chi phí Đặt hàng = Tổng Chi phí Lưu kho*.

## Công thức (Cơ bản)

$$EOQ = \sqrt{\frac{2 \times D \times S}{H}}$$

Trong đó:
* **$D$**: Nhu cầu hàng năm (Tổng số lượng đơn vị cần trong năm).
* **$S$**: Chi phí đặt hàng (Chi phí cố định cho *mỗi một lần* đặt hàng).
* **$H$**: Chi phí lưu kho (Chi phí để giữ *một đơn vị* hàng tồn kho trong *một năm*).

## Giả định

Mô hình EOQ cơ bản hoạt động dựa trên các giả định: Nhu cầu không đổi và biết trước, chi phí đặt hàng và lưu kho không đổi, không xảy ra thiếu hàng, hàng được giao ngay lập tức.