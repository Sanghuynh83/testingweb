import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/floatingNodeDock.inline"
import style from "./styles/floatingNodeDock.scss"

export default (() => {
    const FloatingNodeDock: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
        return (
            <div id="dock-container" class={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 ${displayClass ?? ""}`}>
                <div id="dock-content-wrapper" class="flex items-center justify-center p-3 bg-white/70 backdrop-blur-md rounded-full shadow-2xl space-x-4">

                    {/* Nút Quay Lại (Back) */}
                    <div class="flex-shrink-0">
                        <button id="dock-back-button" title="Quay lại" class="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-all opacity-30 cursor-not-allowed" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                    </div>

                    {/* Các nút phụ bên trái (Cha) */}
                    <div id="left-aux-nodes-container" class="flex-shrink-0 flex-1 min-w-0 max-w-[200px]">
                        <div id="left-nodes" class="flex flex-wrap justify-center gap-2">
                            {/* Các nút bên trái sẽ được JS chèn vào đây */}
                        </div>
                    </div>

                    {/* Nút Chính */}
                    <div id="main-node-container" class="relative flex-shrink-0">
                        {/* Nút chính sẽ được JS chèn vào đây */}
                    </div>

                    {/* Các nút phụ bên phải (Con/Liên quan) */}
                    <div id="right-aux-nodes-container" class="flex-shrink-0 flex-1 min-w-0 max-w-[200px]">
                        <div id="right-nodes" class="flex flex-wrap justify-center gap-2">
                            {/* Các nút bên phải sẽ được JS chèn vào đây */}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    FloatingNodeDock.css = style
    FloatingNodeDock.afterDOMLoaded = script

    return FloatingNodeDock
}) satisfies QuartzComponentConstructor
