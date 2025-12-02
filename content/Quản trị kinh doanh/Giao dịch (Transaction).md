---
MOC: "false"
Title: "Giao dịch (Transaction)"
Alias:
- "Transaction"
- "Database Transaction"

# ---
## "Definition" (Định nghĩa)
## "Process" (Quy trình)
# ---
Concept_Type:
- "Definition"
- "Process"

tags:
- "Concept"
- "Phân_tích_Dữ_liệu"
- "Công_ngệ"
- "Dữ_liệu"
- "Database"
- "CSDL_Quan_hệ"
- "OLTP"

Up: # Link tới MOC hoặc concept cha
- "[[OLTP (Online Transaction Processing)]]"
- "[[CSDL Quan hệ (Relational DB)]]"
Related: # Link tới các concept ngang hàng
- "[[OLTP (Online Transaction Processing)]]"
- "[[ACID]]"
- "[[SQL]]"

Created: "2025-10-29"
Updated: "2025-10-29"
Source: "Kiến thức Cơ sở dữ liệu"
---

# [[Giao dịch (Transaction)]]

## Định nghĩa

Trong ngữ cảnh [[Database (Cơ sở dữ liệu)|cơ sở dữ liệu]], **Giao dịch (Transaction)** là một **đơn vị công việc (unit of work)** logic, bao gồm **một hoặc nhiều thao tác [[SQL]]** (ví dụ: `INSERT`, `UPDATE`, `DELETE`), được thực thi như một **khối duy nhất, không thể chia nhỏ (atomic)**. 💼

## Mục đích

Mục đích chính của giao dịch là đảm bảo **tính nhất quán (consistency)** và **toàn vẹn (integrity)** của dữ liệu, ngay cả khi có nhiều người dùng truy cập đồng thời hoặc xảy ra lỗi hệ thống.

## Thuộc tính ACID

Để đảm bảo các mục đích trên, các giao dịch trong [[CSDL Quan hệ (Relational DB)|CSDL quan hệ]] thường phải tuân thủ 4 thuộc tính **[[ACID]]**:

1.  **Atomicity (Tính Nguyên tử):**
    * *Định nghĩa:* Một giao dịch phải được thực hiện **hoàn toàn (all)** hoặc **không gì cả (nothing)**. Nếu bất kỳ thao tác nào trong giao dịch thất bại, toàn bộ giao dịch sẽ bị hủy bỏ (rollback) về trạng thái ban đầu.
    * *Ví dụ:* Chuyển tiền (Gồm 2 bước: Trừ tiền TK A, Cộng tiền TK B). Nếu bước 2 thất bại, bước 1 cũng phải bị hủy.
2.  **Consistency (Tính Nhất quán):**
    * *Định nghĩa:* Một giao dịch phải đảm bảo đưa cơ sở dữ liệu từ một trạng thái hợp lệ này sang một trạng thái hợp lệ khác. Nó không được vi phạm các ràng buộc toàn vẹn (như [[Khóa ngoại (Foreign Key)|khóa ngoại]]).
3.  **Isolation (Tính Cô lập):**
    * *Định nghĩa:* Các giao dịch đồng thời phải được thực thi một cách cô lập với nhau, như thể chúng đang chạy tuần tự. Kết quả trung gian của một giao dịch chưa hoàn thành không được phép ảnh hưởng đến giao dịch khác.
4.  **Durability (Tính Bền vững):**
    * *Định nghĩa:* Một khi giao dịch đã được **cam kết (committed)** thành công, kết quả của nó phải được lưu trữ vĩnh viễn và không bị mất ngay cả khi hệ thống gặp sự cố (ví dụ: mất điện).

Các lệnh [[SQL]] như `COMMIT` (lưu thay đổi) và `ROLLBACK` (hủy bỏ thay đổi) được dùng để quản lý giao dịch.