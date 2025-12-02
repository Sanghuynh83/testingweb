import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"

export default (() => {
  const HomeLists: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData, allFiles } = props

    // =========================================================
    // PHẦN 1: LOGIC LỌC BÀI VIẾT
    // =========================================================

    // 1. Lọc 10 bài mới nhất (Bỏ trang chủ, bỏ tag, bỏ bài nháp)
    const recentNotes = allFiles
      .filter((f: any) =>
        f.slug !== "index" &&
        !f.slug?.startsWith("tags/") &&
        !f.frontmatter?.draft
      )
      .sort((a: any, b: any) => {
        const dateA = a.dates?.modified || a.dates?.created || new Date(0)
        const dateB = b.dates?.modified || b.dates?.created || new Date(0)
        return dateB.getTime() - dateA.getTime()
      })
      .slice(0, 10)

    // 2. Lọc 10 bài Marketing (Ngẫu nhiên)
    const marketingNotes = allFiles
      .filter((f: any) =>
        (f.frontmatter?.tags?.includes("Marketing") ||
          f.frontmatter?.tags?.includes("marketing") ||
          f.frontmatter?.tags?.includes("Quản_trị_Kinh_doanh")) &&
        !f.frontmatter?.draft
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 10)

    // 3. Danh sách toàn bộ (Dùng để kiểm tra nếu cần)
    const fullInventory = allFiles
      .filter((f: any) => f.slug !== "index")
      .sort((a: any, b: any) => (a.slug || "").localeCompare(b.slug || ""))

    // =========================================================
    // PHẦN 2: GIAO DIỆN HTML (CARD UI V5)
    // =========================================================
    return (
      <div class="home-lists">

        {/* --- KHU VỰC ADMIN: KIỂM TRA FILE (Ẩn gọn gàng) --- */}
        <div style={{
          marginBottom: "2rem",
          padding: "0.5rem 1rem",
          background: "rgba(0,0,0,0.03)",
          borderRadius: "8px",
          fontSize: "0.8rem",
          border: "1px dashed #ccc"
        }}>
          <details>
            <summary style={{ cursor: "pointer", opacity: 0.7 }}>
              🛠 <strong>Admin Check:</strong> Hệ thống nhận diện {allFiles.length} file (Bấm để xem)
            </summary>
            <div style={{ marginTop: "10px", maxHeight: "200px", overflowY: "auto" }}>
              <ul>
                {fullInventory.map((f: any) => (
                  <li>
                    <span style={{ fontFamily: "monospace" }}>{f.slug}</span>
                    {f.frontmatter?.draft ? <span style={{ color: "red" }}> (DRAFT)</span> : ""}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>

        {/* --- KHỐI 1: BÀI VIẾT MỚI (Giao diện Card) --- */}
        <div class="list-group">
          <h3>✨ Mới cập nhật</h3>
          <ul>
            {recentNotes.length > 0 ? (
              recentNotes.map((file: any) => {
                // Xử lý ngày tháng kiểu Việt Nam (03/12/2025)
                const dateVal = file.dates?.modified || file.dates?.created
                const dateStr = dateVal ? new Date(dateVal).toLocaleDateString('vi-VN') : ""

                return (
                  <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                    <a href={resolveRelative(fileData.slug!, file.slug!)} class="internal" style={{ fontWeight: "500" }}>
                      {file.frontmatter?.title || file.slug}
                    </a>
                    <span style={{ fontSize: "0.75rem", color: "var(--gray)", whiteSpace: "nowrap", fontFamily: "var(--codeFont)" }}>
                      {dateStr}
                    </span>
                  </li>
                )
              })
            ) : (
              <li style={{ fontStyle: "italic", color: "var(--gray)" }}>Chưa có bài viết mới nào.</li>
            )}
          </ul>
        </div>

        {/* --- KHỐI 2: MARKETING (Giao diện Card) --- */}
        <div class="list-group">
          <h3>💡 Góc Marketing</h3>
          <ul>
            {marketingNotes.length > 0 ? (
              marketingNotes.map((file: any) => (
                <li>
                  <a href={resolveRelative(fileData.slug!, file.slug!)} class="internal">
                    {file.frontmatter?.title || file.slug}
                  </a>
                </li>
              ))
            ) : (
              <li style={{ fontStyle: "italic", color: "var(--gray)" }}>
                Chưa tìm thấy bài viết có tag #Marketing.
              </li>
            )}
          </ul>
        </div>

      </div>
    )
  }

  return HomeLists
}) satisfies QuartzComponentConstructor