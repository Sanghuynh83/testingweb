import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/types" // <--- Thêm dòng này để lấy kiểu dữ liệu chuẩn

export default (() => {
  const HomeLists: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData, allFiles } = props

    // 1. Logic cho danh sách bài mới (Top 10)
    // Đã thêm định nghĩa kiểu (f: QuartzPluginData) để sửa lỗi "implicitly has any type"
    const recentNotes = allFiles
      .filter((f: QuartzPluginData) =>
        f.slug !== "index" &&
        !f.slug?.startsWith("tags/") &&
        !f.frontmatter?.draft
      )
      .sort((a: QuartzPluginData, b: QuartzPluginData) => {
        const dateA = a.dates?.modified || a.dates?.created || new Date(0)
        const dateB = b.dates?.modified || b.dates?.created || new Date(0)
        return dateB.getTime() - dateA.getTime()
      })
      .slice(0, 10)

    // 2. Logic cho bài Marketing (Top 10 Random)
    const marketingNotes = allFiles
      .filter((f: QuartzPluginData) =>
        (f.frontmatter?.tags?.includes("Marketing") ||
          f.frontmatter?.tags?.includes("marketing") ||
          f.frontmatter?.tags?.includes("Quản_trị_Kinh_doanh")) &&
        !f.frontmatter?.draft
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 10)

    // 3. LOGIC MỚI: Danh sách kiểm kê toàn bộ
    const fullInventory = allFiles
      .filter((f: QuartzPluginData) => f.slug !== "index")
      .sort((a: QuartzPluginData, b: QuartzPluginData) => {
        // Kiểm tra an toàn để tránh lỗi nếu slug bị null
        const slugA = a.slug || ""
        const slugB = b.slug || ""
        return slugA.localeCompare(slugB)
      })

    return (
      <div class="home-lists">
        {/* --- KHU VỰC DEBUG & KIỂM KÊ --- */}
        <div style={{
          padding: "15px",
          background: "#f5f5f5",
          border: "1px solid #ddd",
          marginBottom: "30px",
          borderRadius: "8px",
          fontSize: "0.9rem"
        }}>
          <p style={{ margin: "0 0 10px 0" }}>
            <strong>🛠 Công cụ kiểm tra file:</strong> Hệ thống đang nhận diện tổng cộng <b>{allFiles.length}</b> file.
          </p>

          <details>
            <summary style={{ cursor: "pointer", fontWeight: "bold", color: "#284b63" }}>
              🔻 Bấm vào đây để xem danh sách toàn bộ file ({fullInventory.length})
            </summary>
            <div style={{
              marginTop: "10px",
              maxHeight: "400px",
              overflowY: "auto",
              borderTop: "1px solid #ccc",
              paddingTop: "10px"
            }}>
              <p><em>Mẹo: Bấm <b>Ctrl + F</b> để tìm tên file.</em></p>
              <ol style={{ paddingLeft: "20px" }}>
                {fullInventory.map((f: QuartzPluginData) => (
                  <li style={{ marginBottom: "5px", borderBottom: "1px dashed #eee" }}>
                    <span style={{ fontFamily: "monospace", color: "#d63384" }}>{f.slug}</span>
                    <br />
                    <span>Title: <b>{f.frontmatter?.title || "(Không có tiêu đề)"}</b></span>
                    {f.frontmatter?.draft && <span style={{ color: "red", fontWeight: "bold", marginLeft: "10px" }}>[DRAFT - Đang ẩn]</span>}
                  </li>
                ))}
              </ol>
            </div>
          </details>
        </div>

        {/* --- GIAO DIỆN CHÍNH --- */}
        <div class="list-group">
          <h3>🔥 Bài viết mới cập nhật (Top 10)</h3>
          <ul>
            {recentNotes.length > 0 ? (
              recentNotes.map((file: QuartzPluginData) => (
                <li>
                  <a href={resolveRelative(fileData.slug!, file.slug!)} class="internal">
                    {file.frontmatter?.title || file.slug}
                  </a>
                </li>
              ))
            ) : (<li>Chưa có bài viết mới.</li>)}
          </ul>
        </div>

        <div class="list-group" style={{ marginTop: "2rem" }}>
          <h3>🎯 Góc Marketing (Ngẫu nhiên)</h3>
          <ul>
            {marketingNotes.length > 0 ? (
              marketingNotes.map((file: QuartzPluginData) => (
                <li>
                  <a href={resolveRelative(fileData.slug!, file.slug!)} class="internal">
                    {file.frontmatter?.title || file.slug}
                  </a>
                </li>
              ))
            ) : (
              <li>Chưa có bài viết tag #Marketing.</li>
            )}
          </ul>
        </div>
      </div>
    )
  }

  return HomeLists
}) satisfies QuartzComponentConstructor
