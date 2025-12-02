---
tags: dashboard
up: [[DashBoard Kinh doanh]]


---

## 📊 Dashboard Marketing

(Thống kê cho folder: `"Quản trị kinh doanh/Marketing"`)
[[IPO - Quản trị Kinh doanh]]
[[MOC - Marketing căn bản]]
[[Dashboard MOC Marketing]]
[[DashBoard Kinh doanh]]


---

## 📊 Dashboard Marketing

(Lọc theo tag `"Marketing"` từ toàn bộ folder `"Quản trị kinh doanh"`)

### Thống kê Tổng quan

Truy vấn này sẽ đếm chính xác 136 file (hoặc bất kỳ file nào có tag "Marketing").

Code snippet

```dataview
LIST
  "**Tổng số file**: " + length(rows) + "
" + "**Số lượng Định nghĩa**: " + length(filter(rows, (r) => r.Concept_Type AND contains(r.Concept_Type, "Definition"))) + "
" + "**Số lượng Tags duy nhất**: " + length(unique(flat(rows.tags))) + "
" + "**File thiếu Nguồn (Source)**: " + length(filter(rows, (r) => !r.Source)) + "
" + "**File thiếu liên kết Cha (Up)**: " + length(filter(rows, (r) => !r.Up))
FROM "Quản trị kinh doanh"
WHERE contains(tags, "Marketing") AND file.name != this.file.name
GROUP BY ""
```

---

### 📚 Danh sách Toàn bộ Khái niệm (Marketing)

#### Thống kê các Loại Concept

Code snippet

```dataview
TABLE length(rows) as "Số lần sử dụng"
FROM "Quản trị kinh doanh"
WHERE contains(tags, "Marketing") AND file.name != this.file.name AND Concept_Type
FLATTEN Concept_Type as LoaiConcept
GROUP BY LoaiConcept
SORT length(rows) DESC
```


#### Danh sách chi tiết

Code snippet

```dataview
TABLE
    Title,
    Concept_Type as "Loại Concept",
    Up as "Concept Cha",
    file.folder as "Vị trí File"
FROM "Quản trị kinh doanh"
WHERE contains(tags, "Marketing") AND MOC = "false" AND file.name != this.file.name
SORT file.name ASC
```

---

### 🏷️ Thống kê Tags (Liên quan đến Marketing)

Tất cả các tags xuất hiện _cùng_ với tag "Marketing".

Code snippet

```
TABLE length(rows) as "Số lượng"
FROM "Quản trị kinh doanh"
WHERE contains(tags, "Marketing") AND file.name != this.file.name
FLATTEN tags as Tag
GROUP BY Tag
SORT length(rows) DESC
```

---

### 🛠️ Cần Chú ý / Bảo trì (File Marketing)

#### File thiếu Concept Cha (Up)

Code snippet

```
LIST Title
FROM "Quản trị kinh doanh"
WHERE contains(tags, "Marketing") AND !Up AND MOC = "false" AND file.name != this.file.name
```

#### File thiếu Nguồn (Source)

Code snippet

```
LIST Title
FROM "Quản trị kinh doanh"
WHERE contains(tags, "Marketing") AND !Source AND MOC = "false" AND file.name != this.file.name
```

#### File thiếu Loại Concept (Concept_Type)

Code snippet

```
LIST Title
FROM "Quản trị kinh doanh"
WHERE contains(tags, "Marketing") AND !Concept_Type AND MOC = "false" AND file.name != this.file.name
```

---

### ⏱️ Hoạt động Gần đây (File Marketing)

10 file (có tag Marketing) được cập nhật gần đây nhất.

Code snippet

```
TABLE
    Title,
    file.mtime as "Ngày cập nhật"
FROM "Quản trị kinh doanh"
WHERE contains(tags, "Marketing") AND MOC = "false" AND file.name != this.file.name
SORT file.mtime DESC
LIMIT 10
```

---
### Thư mục Marketing
```dataview
TABLE file.folder as "Thư mục hiện tại", file.mtime as "Sửa lần cuối"
FROM "Quản trị kinh doanh" AND -"Quản trị kinh doanh/Marketing"
WHERE contains(file.tags, "#marketing")
SORT file.mtime desc
```

#### xử lý tag
```dataview
TABLE file.folder AS "Đang nằm ở đâu", file.mtime AS "Ngày sửa"
FROM #marketing AND -"Quản trị kinh doanh/Marketing"
SORT file.folder ASC
```
#### các tag marketing mà chứa các tags khác
```dataview
TABLE WITHOUT ID
    (tag) AS "Tag Phụ",
    length(rows) AS "Số lần sử dụng"
FROM #marketing
FLATTEN file.tags AS tag
WHERE tag != "#marketing" AND !contains(tag, "marketing/")
GROUP BY tag
SORT length(rows) DESC
```
#### 1. `#marketing` và `#Digital_Marketing`

Code snippet

```dataview
TABLE file.folder AS "Thư mục", file.mtime AS "Sửa lần cuối"
FROM #marketing AND #Digital_Marketing
SORT file.mtime DESC
```


#### 2. `#marketing` và `#Concept`

Code snippet

```
TABLE file.folder AS "Thư mục", file.mtime AS "Sửa lần cuối"
FROM #marketing AND #Concept
SORT file.mtime DESC
```

#### 3. `#marketing` và `#Chiến_lược_Sản_phẩm`

Code snippet

```
TABLE file.folder AS "Thư mục", file.mtime AS "Sửa lần cuối"
FROM #marketing AND #Chiến_lược_Sản_phẩm
SORT file.mtime DESC
```

#### 4. `#marketing` và `#Chiến_lược_Chiêu_thị`

Code snippet

```
TABLE file.folder AS "Thư mục", file.mtime AS "Sửa lần cuối"
FROM #marketing AND #Chiến_lược_Chiêu_thị
SORT file.mtime DESC
```

#### 5. `#marketing` và `#Chiến_lược_giá`

Code snippet

```
TABLE file.folder AS "Thư mục", file.mtime AS "Sửa lần cuối"
FROM #marketing AND #Chiến_lược_giá
SORT file.mtime DESC
```

#### 6. `#marketing` và `#Chiến_lược_Phân_phối`

_(Tôi giả định tag bạn muốn là `#Chiến_lược_Phân_phối`)_

Code snippet

```
TABLE file.folder AS "Thư mục", file.mtime AS "Sửa lần cuối"
FROM #marketing AND #Chiến_lược_Phân_phối
SORT file.mtime DESC
```