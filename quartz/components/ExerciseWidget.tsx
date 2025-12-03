import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const ExerciseWidget: QuartzComponent = (props: QuartzComponentProps) => {
    return (
      <div style={{
        padding: "1rem",
        borderRadius: "12px",
        border: "1px solid var(--lightgray)",
        backgroundColor: "var(--light)",
        marginBottom: "1.5rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)"
      }}>
        <h3 style={{
          marginTop: 0,
          fontSize: "1rem",
          fontWeight: "bold",
          color: "var(--secondary)",
          marginBottom: "0.8rem",
          borderBottom: "2px solid var(--tertiary)",
          display: "inline-block",
          paddingBottom: "0.2rem"
        }}>
          ✍️ Góc Bài Tập & Tài Liệu
        </h3>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>

          {/* --- MỤC 1: CÂU HỎI (Dạng Folder) --- */}
          <li style={{ marginBottom: "0.8rem", borderBottom: "1px dashed var(--lightgray)", paddingBottom: "0.5rem" }}>
            <a
              href="/static/filevetinh/question-bang-chung-xa-hoi/"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "var(--dark)",
                fontSize: "0.9rem",
                fontWeight: 500,
                display: "block",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--secondary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--dark)"}
            >
              👉 Câu hỏi: Bằng chứng xã hội
            </a>
            <span style={{ fontSize: "0.75rem", color: "var(--gray)", fontStyle: "italic" }}>
              (Bài tập tự luận)
            </span>
          </li>

          {/* --- MỤC 2: QUIZZ (Dạng File HTML trực tiếp) --- */}
          {/* File này nằm ngay trong folder filevetinh, không có folder con */}
          <li style={{ marginBottom: "0.8rem", paddingBottom: "0.5rem" }}>
            <a
              href="/static/filevetinh/quizz-bang-chung-xa-hoi.html"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "var(--dark)",
                fontSize: "0.9rem",
                fontWeight: 500,
                display: "block",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--secondary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--dark)"}
            >
              🧩 Quiz: Bằng chứng xã hội
            </a>
            <span style={{ fontSize: "0.75rem", color: "var(--gray)", fontStyle: "italic" }}>
              (Trắc nghiệm HTML)
            </span>
          </li>

        </ul>
      </div>
    )
  }
  return ExerciseWidget
}) satisfies QuartzComponentConstructor