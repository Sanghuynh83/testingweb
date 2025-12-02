import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

export default (() => {
  const HomeLists: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData, allFiles } = props

    // Logic: Lấy 5 bài viết mới nhất (trừ trang chủ và trang tag)
    const recentNotes = allFiles
      .filter((f) => f.slug !== "index" && !f.slug?.startsWith("tags/"))
      .sort((a, b) => {
        const dateA = a.dates?.modified || a.dates?.created || new Date(0)
        const dateB = b.dates?.modified || b.dates?.created || new Date(0)
        return dateB.getTime() - dateA.getTime()
      })
      .slice(0, 5)

    // Logic: Lấy bài viết Marketing ngẫu nhiên
    const marketingNotes = allFiles
      .filter((f) => 
        f.frontmatter?.tags?.includes("Marketing") || 
        f.frontmatter?.tags?.includes("marketing") ||
        f.frontmatter?.tags?.includes("Quản_trị_Kinh_doanh")
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 5)

    return (
      <div class="home-lists">
        <div class="list-group">
          <h3>🔥 Bài viết mới cập nhật</h3>
          <ul>
            {recentNotes.length > 0 ? (
              recentNotes.map((file) => (
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
              marketingNotes.map((file) => (
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
