---
tags: dashboard
---

## 📊 Dashboard Quản trị Kinh doanh

(Thống kê cho toàn bộ folder: `"Quản trị kinh doanh"`)

### Thống kê Tổng quan

Code snippet

```dataview
LIST
  "**Tổng số file**: " + length(rows) + "
" + "**Số lượng Định nghĩa**: " + length(filter(rows, (r) => r.Concept_Type AND contains(r.Concept_Type, "Definition"))) + "
" + "**Số lượng Tags duy nhất**: " + length(unique(flat(rows.tags))) + "
" + "**File thiếu Nguồn (Source)**: " + length(filter(rows, (r) => !r.Source)) + "
" + "**File thiếu liên kết Cha (Up)**: " + length(filter(rows, (r) => !r.Up))
FROM "Quản trị kinh doanh"
WHERE file.name != this.file.name
GROUP BY ""
```

---

### 📚 Danh sách Toàn bộ Khái niệm

#### Thống kê các Loại Concept

Code snippet

```dataview
TABLE length(rows) as "Số lần sử dụng"
FROM "Quản trị kinh doanh"
WHERE file.name != this.file.name AND Concept_Type
FLATTEN Concept_Type as LoaiConcept
GROUP BY LoaiConcept
SORT length(rows) DESC
```

#### Danh sách chi tiết

Danh sách tất cả các file không phải là MOC (Map of Content).

Code snippet

```dataview
TABLE
    Title,
    Concept_Type as "Loại Concept",
    Up as "Concept Cha",
    Created as "Ngày tạo"
FROM "Quản trị kinh doanh"
WHERE MOC = "false" AND file.name != this.file.name
SORT file.name ASC
```

---

### 🏷️ Thống kê Tags (Toàn bộ)

Tất cả các tags đang được sử dụng trong folder này.

Code snippet

```dataview
TABLE length(rows) as "Số lượng"
FROM "Quản trị kinh doanh"
WHERE file.name != this.file.name
FLATTEN tags as Tag
GROUP BY Tag
SORT length(rows) DESC
```

---


Thống kê:

### 🛠️ Cần Chú ý / Bảo trì (Maintenance)

Các file này đang thiếu thông tin YAML quan trọng.

#### File thiếu Concept Cha (Up)

Code snippet

```dataview
LIST Title
FROM "Quản trị kinh doanh"
WHERE !Up AND MOC = "false" AND file.name != this.file.name
```

#### File thiếu Nguồn (Source)

Code snippet

```dataview
LIST Title
FROM "Quản trị kinh doanh"
WHERE !Source AND MOC = "false" AND file.name != this.file.name
```

#### File thiếu Loại Concept (Concept_Type)

Code snippet

```dataview
LIST Title
FROM "Quản trị kinh doanh"
WHERE !Concept_Type AND MOC = "false" AND file.name != this.file.name
```

---

### ⏱️ Hoạt động Gần đây

10 file được cập nhật (Updated) gần đây nhất.

Code snippet

```dataview
TABLE
    Title,
    file.mtime as "Ngày cập nhật"
FROM "Quản trị kinh doanh"
WHERE MOC = "false" AND file.name != this.file.name
SORT file.mtime DESC
LIMIT 10
```


---

Sau khi bạn hài lòng với dashboard tổng quan này, bạn hãy cho tôi biết và chúng ta sẽ làm dashboard "Marketing" (theo cách lọc bằng tag như đã bàn) nhé.