import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>Tên Thương Hiệu Của Bạn</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  
  /* Thêm các dòng dưới đây để làm Sticky */
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: var(--light); /* Thêm màu nền để khi cuộn text không đè lên logo */
  padding: 10px 0; /* Tạo khoảng trống cho đẹp */
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
