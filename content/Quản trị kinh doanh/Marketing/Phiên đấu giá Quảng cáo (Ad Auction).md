---
MOC: "false"
Title: Phiên đấu giá Quảng cáo (Ad Auction)
Alias:
  - Ad Auction
  - Đấu giá Quảng cáo Google
Concept_Type:
  - Process
  - Concept
tags:
  - Concept
  - Quản_trị_Kinh_doanh
  - Marketing
  - Digital_Marketing
  - SEM
  - Google_Ads
Up:
  - "[[SEM (Marketing trên Công cụ Tìm kiếm)]]"
Related:
  - "[[Điểm Chất lượng (Quality Score)]]"
  - "[[PPC (Pay-Per-Click) là gì]]"
  - "[[Google Ads.md]]"
Created: 2025-11-05
Updated: 2025-11-05
Source: Google Ads Help
---

# [[Phiên đấu giá Quảng cáo (Ad Auction)]]

## 1. Định nghĩa

**Phiên đấu giá Quảng cáo (Ad Auction)** là một quy trình tự động mà [[Google Ads]] sử dụng để xác định những quảng cáo nào sẽ được hiển thị trên trang kết quả tìm kiếm (SERP) và theo thứ tự nào, *mỗi khi* có một người dùng thực hiện một truy vấn tìm kiếm.

Điều quan trọng cần hiểu là đây **không phải** là một phiên đấu giá truyền thống (ai trả giá cao nhất sẽ thắng). Google cân bằng giữa "Giá thầu" và "Chất lượng".

## 2. Quy trình Đấu giá (Xảy ra trong mili giây)

1.  **Truy vấn (Query):** Người dùng gõ "mua giày chạy bộ".
2.  **Lọc (Filter):** Google Ads tìm tất cả các nhà quảng cáo đang nhắm mục tiêu (bidding) cho từ khóa này.
3.  **Tính Ad Rank (Xếp hạng Quảng cáo):** Đây là bước cốt lõi. Google tính **Ad Rank** cho *mọi* nhà quảng cáo đủ điều kiện.
4.  **Xếp hạng (Ranking):** Google hiển thị các quảng cáo theo thứ tự Ad Rank từ cao xuống thấp.

## 3. Công thức Ad Rank

Công thức (đơn giản hóa) để xác định vị trí của bạn là:

**`Ad Rank (Thứ hạng QC) = Max CPC Bid (Giá thầu tối đa) x [[Điểm Chất lượng (Quality Score)|Quality Score]]`**

* **Max CPC Bid (Giá thầu tối đa):** Số tiền *tối đa* bạn sẵn sàng trả cho một cú nhấp chuột.
* **Quality Score (Điểm Chất lượng):** Thước đo 1-10 về mức độ liên quan của quảng cáo, từ khóa và trang đích của bạn.

*Hệ quả:* Như đã đề cập trong [[Điểm Chất lượng (Quality Score)]], một [[Điểm Chất lượng (Quality Score)|QS]] cao có thể giúp bạn vượt qua đối thủ có giá thầu (Bid) cao hơn.

## 4. Bạn Thực sự Trả bao nhiêu? (Actual CPC)

Bạn **không** trả mức giá thầu tối đa (Max CPC) của mình. Bạn chỉ trả mức giá *vừa đủ* để vượt qua Ad Rank của người xếp ngay dưới bạn (cộng thêm 0.01$).

**`Giá bạn trả (Actual CPC) = (Ad Rank của người dưới / QS của bạn) + 0.01$`**

* **Ví dụ:**
    * Bạn: Bid 5$, QS 10 -> **Ad Rank = 50**
    * Đối thủ A: Bid 8$, QS 2 -> **Ad Rank = 16**
* **Kết quả:** Bạn xếp hạng 1.
* **Giá bạn trả:** (Ad Rank của A / QS của bạn) + 0.01$ = (16 / 10) + 0.01$ = **1.61$**
* *Kết luận:* Bạn thắng phiên đấu giá, xếp hạng 1, và chỉ trả 1.61$ cho cú nhấp chuột, mặc dù bạn đã đặt thầu 5$ (và đối thủ của bạn đặt thầu 8$). Đây chính là lý do [[Điểm Chất lượng (Quality Score)]] là vua.