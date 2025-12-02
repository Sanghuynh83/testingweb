import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

export default (() => {
  const HomeLists: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData, allFiles } = props

    // Dòng quan trọng: Chỉ hiển thị nếu đây là trang chủ (index)
    // Nếu là bài viết khác thì ẩn đi (trả về rỗng)
    if (fileData.slug !== "index") {
      return <></>
    }

    // LOGIC 1: Lấy 5 bài viết mới nhất (trừ trang chủ và trang tag ra)
    const recentNotes = allFiles
      .filter((f) => f.slug !== "index" && !f.slug?.startsWith("tags/"))
      .sort((a, b) => {
        const dateA = a.dates?.modified || a.dates?.created || new Date(0)
        const dateB = b.dates?.modified || b.dates?.created || new Date(0)
        return dateB.getTime() - dateA.getTime()
      })
      .slice(0, 5)

    // LOGIC 2: Lấy bài viết có tag #Marketing (hoặc #marketing) và Random
    const marketingNotes = allFiles
      .filter((f) => 
        f.frontmatter?.tags?.includes("Marketing") || 
        f.frontmatter?.tags?.includes("marketing") ||
        f.frontmatter?.tags?.includes("Quản_trị_Kinh_doanh")
      )
      .sort(() => 0.5 - Math.random()) // Thuật toán xáo trộn ngẫu nhiên
      .slice(0, 5)

    return (
      <div class="home-lists">
        <div class="list-group">
          <h3>🔥 Bài viết mới cập nhật</h3>
          <ul>
            {recentNotes.map((file) => (
              <li>
                <a href={resolveRelative(fileData.slug!, file.slug!)} class="internal">
                  {file.frontmatter?.title || file.slug}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div class="list-group" style={{ marginTop: "2rem" }}>
          <h3>🎯 Góc Marketing (Ngẫu nhiên)</h3>
          <ul>
            {marketingNotes.length > 0 ? (
              marketingNotes.map((file) => (
                <li>
                  <a href={resolveRelative(fileData.slug!, file.slug!)} class="internal">
                    {file.frontmatter?.title || file.slug}
                  </a>
                </li>
              ))
            ) : (
              <li>Currently no notes with #Marketing tag.</li>
            )}
          </ul>
        </div>
      </div>
    )
  }

  return HomeLists
}) satisfies QuartzComponentConstructor
```

### Bước 2: Đăng ký Component mới
Bạn vừa tạo file xong, giờ phải báo cho hệ thống biết sự tồn tại của nó.

1.  Vẫn ở thư mục `quartz/components`.
2.  Tìm file tên là **`index.ts`** (đây là danh mục các linh kiện).
3.  Bấm ✏️ (Edit).
4.  Thêm dòng này vào cuối cùng (trước dấu `}` đóng ngoặc nếu có, hoặc chỉ cần thêm vào danh sách export):

```typescript
export { default as HomeLists } from "./HomeLists"
```
*(Mẹo: Bạn nhìn các dòng trên viết sao thì viết y chang vậy).*

### Bước 3: Gắn vào giao diện (Layout)
Giờ chúng ta sẽ đưa cái linh kiện `HomeLists` này vào trang web.

1.  Quay ra thư mục gốc, tìm file **`quartz.layout.ts`**.
2.  Bấm ✏️ (Edit).
3.  Ở phần đầu file, tìm chỗ `import * as Component from "./quartz/components"`. Bạn không cần sửa gì ở đây.
4.  Kéo xuống tìm phần **`export const defaultContentPageLayout`**.
5.  Tìm mục `afterBody: [...]` (nghĩa là phần nằm dưới nội dung bài viết).
6.  Thêm `Component.HomeLists(),` vào trong đó.

Ví dụ nó sẽ trông như thế này:
```typescript
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [ ... ], // Giữ nguyên
  left: [ ... ],       // Giữ nguyên
  right: [ ... ],      // Giữ nguyên
  afterBody: [
    Component.HomeLists(), // <--- THÊM DÒNG NÀY VÀO
    // Component.Backlinks(), // (Có thể có sẵn dòng này)
  ],
}
