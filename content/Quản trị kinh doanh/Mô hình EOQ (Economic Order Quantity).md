---
MOC: "false"
Title: "Mô hình EOQ (Economic Order Quantity)"
Alias:
- "Economic Order Quantity"
- "Số lượng Đặt hàng Kinh tế"
Concept_Type:
- "Model"
tags:
- "Concept"
- "Quản_trị_Vận_hành"
- "Quản_lý_Tồn_kho"
- "Tối_ưu_hóa"
Up:
- "[[Quản lý Tồn kho]]"
- "[[MOC - Quản trị Vận hành]]"
Related:
- "[[Chi phí Vốn (Cost of Capital - WACC)]]"
- "[[Chi phí Cơ hội]]"
Created: "YYYY-MM-DD"
Updated: "YYYY-MM-DD"
Source: "Ford W. Harris (1913)"
---

# [[Mô hình EOQ (Economic Order Quantity)]]

## Định nghĩa

**Mô hình EOQ (Economic Order Quantity)** là một mô hình toán học cổ điển trong [[Quản lý Tồn kho]], dùng để xác định *số lượng đặt hàng tối ưu* cho mỗi lần đặt hàng nhằm *tối thiểu hóa tổng chi phí* tồn kho (Tổng chi phí = Chi phí Đặt hàng + Chi phí Lưu kho).



[Image of EOQ model graph showing Holding Costs, Ordering Costs, and Total Costs]


## Công thức

Công thức tính EOQ:
$$
EOQ = Q^* = \sqrt{\frac{2DS}{H}}
$$

Trong đó:
* $Q^*$ = Số lượng đặt hàng tối ưu (EOQ)
* $D$ = Nhu cầu hàng năm (tính bằng đơn vị sản phẩm)
* $S$ = Chi phí cho *một lần* đặt hàng
* $H$ = Chi phí lưu kho cho *một đơn vị* sản phẩm trong *một năm*

## Các Giả định của Mô hình

Mô hình EOQ hoạt động dựa trên một số giả định đơn giản hóa:
1.  **Nhu cầu không đổi:** Nhu cầu (D) được biết trước và không đổi theo thời gian.
2.  **Thời gian giao hàng không đổi (Lead time):** Thời gian từ lúc đặt hàng đến lúc nhận hàng là cố định.
3.  **Chi phí không đổi:** Chi phí đặt hàng (S) và chi phí lưu kho (H) là không đổi.
4.  **Không thiếu hàng:** Mô hình giả định không xảy ra tình trạng thiếu hàng (stockout).
5.  Hàng được giao *một lần* đủ số lượng đặt.