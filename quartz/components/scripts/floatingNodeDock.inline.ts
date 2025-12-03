
// --- BẮT ĐẦU COMPONENT FloatingNodeDock ---
/**
 * Class quản lý toàn bộ logic của thanh điều hướng (Dock) dạng đồ thị nổi.
 * Bao gồm việc quản lý dữ liệu đồ thị, trạng thái lịch sử, và render giao diện.
 */
class FloatingNodeDock {

    // 1. Dữ liệu (Bản đồ tri thức)
    knowledgeGraph: Record<string, any> = {
        'Business': { name: 'Kinh Doanh', color: 'bg-gray-700', parent: null, related: ['Marketing', 'Sales', 'Finance', 'Product'] },
        'Marketing': { name: 'Marketing', color: 'bg-blue-500', parent: 'Business', related: ['Branding', 'Digital Ads', 'Market Research', 'Content Marketing', 'SEO'] },
        'Branding': { name: 'Thương Hiệu', color: 'bg-indigo-500', parent: 'Marketing', related: ['Brand Identity', 'Brand Voice', 'Logo Design', 'Positioning'] },
        'Digital Ads': { name: 'Quảng Cáo Số', color: 'bg-red-500', parent: 'Marketing', related: ['PPC', 'Social Ads', 'Display Ads', 'Ad Copy'] },
        'PPC': { name: 'PPC', color: 'bg-orange-500', parent: 'Digital Ads', related: ['Google Ads', 'Keyword Research', 'Bid Strategy', 'Landing Page'] },
        'Social Ads': { name: 'Social Ads', color: 'bg-blue-400', parent: 'Digital Ads', related: ['Facebook Ads', 'TikTok Ads', 'Targeting'] },
        'Market Research': { name: 'NC Thị Trường', color: 'bg-green-500', parent: 'Marketing', related: ['Surveys', 'Focus Groups', 'SWOT', 'Competitor Analysis'] },
        'Content Marketing': { name: 'Content MKT', color: 'bg-purple-500', parent: 'Marketing', related: ['Blog', 'Video', 'Podcast', 'Whitepaper'] },
        'SEO': { name: 'SEO', color: 'bg-teal-500', parent: 'Marketing', related: ['On-Page', 'Off-Page', 'Technical SEO', 'Keywords'] },
        'Sales': { name: 'Sales', color: 'bg-yellow-500', parent: 'Business', related: ['Lead Gen', 'CRM', 'Closing', 'Negotiation'] },
        'Finance': { name: 'Tài Chính', color: 'bg-lime-500', parent: 'Business', related: ['P&L', 'ROI', 'Budgeting', 'Forecasting'] },
        'Product': { name: 'Sản Phẩm', color: 'bg-cyan-500', parent: 'Business', related: ['Roadmap', 'UI/UX', 'Development', 'Features'] },
        'Logo Design': { name: 'Thiết Kế Logo', color: 'bg-indigo-300', parent: 'Branding', related: [] },
        'Brand Voice': { name: 'Brand Voice', color: 'bg-indigo-300', parent: 'Branding', related: [] },
        'Brand Identity': { name: 'Bộ Nhận Diện', color: 'bg-indigo-300', parent: 'Branding', related: [] },
        'Positioning': { name: 'Định Vị', color: 'bg-indigo-300', parent: 'Branding', related: [] },
        'Google Ads': { name: 'Google Ads', color: 'bg-orange-300', parent: 'PPC', related: [] },
        'Keyword Research': { name: 'NC Từ Khóa', color: 'bg-orange-300', parent: 'PPC', related: [] },
        'Bid Strategy': { name: 'Chiến Lược Bid', color: 'bg-orange-300', parent: 'PPC', related: [] },
        'Landing Page': { name: 'Landing Page', color: 'bg-orange-300', parent: 'PPC', related: [] },
        'Facebook Ads': { name: 'Facebook Ads', color: 'bg-blue-300', parent: 'Social Ads', related: [] },
        'TikTok Ads': { name: 'TikTok Ads', color: 'bg-blue-300', parent: 'Social Ads', related: [] },
        'Targeting': { name: 'Targeting', color: 'bg-blue-300', parent: 'Social Ads', related: [] },
        'Surveys': { name: 'Khảo Sát', color: 'bg-green-300', parent: 'Market Research', related: [] },
        'Focus Groups': { name: 'Phỏng Vấn Nhóm', color: 'bg-green-300', parent: 'Market Research', related: [] },
        'SWOT': { name: 'SWOT', color: 'bg-green-300', parent: 'Market Research', related: [] },
        'Competitor Analysis': { name: 'PT Đối Thủ', color: 'bg-green-300', parent: 'Market Research', related: [] },
        'Blog': { name: 'Blog', color: 'bg-purple-300', parent: 'Content Marketing', related: [] },
        'Video': { name: 'Video', color: 'bg-purple-300', parent: 'Content Marketing', related: [] },
        'Podcast': { name: 'Podcast', color: 'bg-purple-300', parent: 'Content Marketing', related: [] },
        'Whitepaper': { name: 'Whitepaper', color: 'bg-purple-300', parent: 'Content Marketing', related: [] },
        'On-Page': { name: 'On-Page', color: 'bg-teal-300', parent: 'SEO', related: [] },
        'Off-Page': { name: 'Off-Page', color: 'bg-teal-300', parent: 'SEO', related: [] },
        'Technical SEO': { name: 'Technical SEO', color: 'bg-teal-300', parent: 'SEO', related: [] },
        'Keywords': { name: 'Keywords', color: 'bg-teal-300', parent: 'SEO', related: [] },
        'Lead Gen': { name: 'Tạo Lead', color: 'bg-yellow-300', parent: 'Sales', related: [] },
        'CRM': { name: 'CRM', color: 'bg-yellow-300', parent: 'Sales', related: [] },
        'Closing': { name: 'Chốt Sale', color: 'bg-yellow-300', parent: 'Sales', related: [] },
        'Negotiation': { name: 'Đàm Phán', color: 'bg-yellow-300', parent: 'Sales', related: [] },
        'P&L': { name: 'P&L', color: 'bg-lime-300', parent: 'Finance', related: [] },
        'ROI': { name: 'ROI', color: 'bg-lime-300', parent: 'Finance', related: [] },
        'Budgeting': { name: 'Ngân Sách', color: 'bg-lime-300', parent: 'Finance', related: [] },
        'Forecasting': { name: 'Dự Báo', color: 'bg-lime-300', parent: 'Finance', related: [] },
        'Roadmap': { name: 'Roadmap', color: 'bg-cyan-300', parent: 'Product', related: [] },
        'UI/UX': { name: 'UI/UX', color: 'bg-cyan-300', parent: 'Product', related: [] },
        'Development': { name: 'Phát Triển', color: 'bg-cyan-300', parent: 'Product', related: [] },
        'Features': { name: 'Tính Năng', color: 'bg-cyan-300', parent: 'Product', related: [] },
        'Ad Copy': { name: 'Viết Ad Copy', color: 'bg-red-300', parent: 'Digital Ads', related: [] },
        'Display Ads': { name: 'Ads Hiển Thị', color: 'bg-red-300', parent: 'Digital Ads', related: [] },
        'Default': { name: 'Khái Niệm', color: 'bg-gray-400', parent: 'Business', related: ['Marketing', 'Sales', 'Finance', 'Product'] }
    };

    // 2. Trạng thái (State)
    historyStack: string[] = [];
    currentNodeKey: string | null = null;

    // 3. Các thành phần DOM
    container: HTMLElement | null = null;
    leftNodesContainer: HTMLElement | null = null;
    mainNodeContainer: HTMLElement | null = null;
    rightNodesContainer: HTMLElement | null = null;
    backButton: HTMLButtonElement | null = null;

    /**
     * Khởi tạo Dock.
     * @param {string} dockElementId - ID của phần tử DOM chứa dock.
     */
    constructor(dockElementId: string) {
        this.container = document.getElementById(dockElementId);
        if (!this.container) {
            console.error("Không tìm thấy container cho dock!");
            return;
        }

        // Tìm các phần tử con
        this.leftNodesContainer = this.container.querySelector('#left-nodes');
        this.mainNodeContainer = this.container.querySelector('#main-node-container');
        this.rightNodesContainer = this.container.querySelector('#right-nodes');
        this.backButton = this.container.querySelector('#dock-back-button') as HTMLButtonElement;

        this._bindEvents();
    }

    /**
     * Gán các sự kiện lắng nghe (event listeners) cho các thành phần UI tĩnh.
     * @private
     */
    _bindEvents() {
        if (this.backButton) {
            this.backButton.addEventListener('click', () => this.goBack());
        }
    }

    /**
     * Khởi chạy ứng dụng với một node bắt đầu.
     * @param {string} initialNodeKey - Key của node đầu tiên để hiển thị (ví dụ: 'Marketing').
     */
    init(initialNodeKey: string) {
        this.setActiveNode(initialNodeKey);
    }

    /**
     * Thiết lập node trung tâm mới và cập nhật toàn bộ giao diện dock.
     * @param {string} nodeKey - Key của node cần hiển thị ở trung tâm.
     * @param {boolean} [isGoingBack=false] - Cờ đánh dấu nếu đây là hành động quay lại (để không push vào history stack).
     */
    setActiveNode(nodeKey: string, isGoingBack = false) {
        const nodeData = this.knowledgeGraph[nodeKey] || this.knowledgeGraph['Default'];

        // Quản lý History Stack: Chỉ push vào stack nếu không phải đang quay lại và node hiện tại tồn tại
        if (!isGoingBack && this.currentNodeKey) {
            this.historyStack.push(this.currentNodeKey);
        }
        this.currentNodeKey = nodeKey;

        // Cập nhật giao diện
        this._render(nodeData);
        this._updateBackButton();
    }

    /**
     * Quay lại node trước đó trong lịch sử duyệt (Stack LIFO).
     * Nếu stack rỗng, không làm gì cả.
     */
    goBack() {
        if (this.historyStack.length === 0) return;

        const prevKey = this.historyStack.pop();
        if (prevKey) {
            this.setActiveNode(prevKey, true); // Đặt isGoingBack = true
        }
    }

    // --- CÁC HÀM NỘI BỘ (PRIVATE) ---

    /**
     * Cập nhật trạng thái hiển thị (disabled/opacity) của nút Back dựa trên history stack.
     * @private
     */
    _updateBackButton() {
        if (!this.backButton) return;

        if (this.historyStack.length === 0) {
            this.backButton.disabled = true;
            this.backButton.classList.add('opacity-30', 'cursor-not-allowed');
        } else {
            this.backButton.disabled = false;
            this.backButton.classList.remove('opacity-30', 'cursor-not-allowed');
        }
    }

    /**
     * Quyết định màu chữ (Đen hoặc Trắng) dựa trên màu nền để đảm bảo độ tương phản.
     * @param {string} bgColor - Class Tailwind màu nền (ví dụ: 'bg-blue-500').
     * @returns {string} - Class Tailwind cho màu chữ.
     * @private
     */
    _getTextColor(bgColor: string) {
        // Các màu nền tối cần chữ sáng
        const lightTextColors = [
            'bg-gray-700', 'bg-blue-500', 'bg-indigo-500', 'bg-red-500',
            'bg-purple-500', 'bg-teal-500', 'bg-green-500', 'bg-orange-500'
        ];
        if (lightTextColors.some(c => bgColor.includes(c))) {
            return 'text-white/95'; // Chữ trắng, hơi trong
        }
        // Các màu nền sáng dùng chữ tối
        return 'text-black/80';
    }

    /**
     * Tạo một phần tử DOM biểu diễn cho một node.
     * @param {string} nodeKey - Key định danh của node.
     * @param {Object} nodeData - Dữ liệu của node (tên, màu sắc, v.v.).
     * @param {boolean} [isMain=false] - True nếu đây là node chính ở giữa.
     * @returns {HTMLElement} - Phần tử div đã được tạo.
     * @private
     */
    _createNodeElement(nodeKey: string, nodeData: any, isMain = false) {
        const nodeEl = document.createElement('div');
        const sizeClass = isMain ? 'w-[70px] h-[70px] text-[0.85rem]' : 'aux-node';
        const mainClasses = isMain ? 'main-node-animate border-4 border-white shadow-lg' : 'opacity-80 hover:opacity-100 hover:scale-110';
        const textColor = this._getTextColor(nodeData.color); // Tối ưu màu chữ

        nodeEl.id = nodeKey;
        nodeEl.className = `node ${sizeClass} ${nodeData.color} ${textColor} rounded-full flex items-center justify-center p-1 text-center font-semibold cursor-pointer ${mainClasses}`;
        nodeEl.textContent = nodeData.name;

        if (!isMain) {
            nodeEl.addEventListener('click', () => {
                this.setActiveNode(nodeKey);
            });
        }

        return nodeEl;
    }

    /**
     * Hàm render chính: Xóa dock cũ và vẽ lại các node mới (Trái, Giữa, Phải).
     * @param {Object} nodeData - Dữ liệu của node hiện tại đang active.
     * @private
     */
    _render(nodeData: any) {
        this._clearDock().then(() => {
            const parentKey = nodeData.parent;
            const relatedKeys = nodeData.related || [];

            // Hiển thị nút cha (bên trái)
            if (parentKey && this.knowledgeGraph[parentKey] && this.leftNodesContainer) {
                const parentData = this.knowledgeGraph[parentKey];
                const el = this._createNodeElement(parentKey, parentData, false);
                el.classList.add('hidden-node');
                this.leftNodesContainer.appendChild(el);
                setTimeout(() => el.classList.remove('hidden-node'), 0);
            }

            // Hiển thị nút chính
            if (this.mainNodeContainer && this.currentNodeKey) {
                const mainEl = this._createNodeElement(this.currentNodeKey, nodeData, true);
                mainEl.id = 'main-node-element';
                mainEl.classList.add('hidden-node');
                this.mainNodeContainer.appendChild(mainEl);
                setTimeout(() => mainEl.classList.remove('hidden-node'), 0);
            }

            // Hiển thị các nút liên quan (bên phải)
            if (this.rightNodesContainer) {
                const shuffledRelated = relatedKeys.sort(() => 0.5 - Math.random());
                const numRight = Math.min(shuffledRelated.length, 3 + Math.floor(Math.random() * 3)); // 3-5 nút
                const nodesToShow = shuffledRelated.slice(0, numRight);

                nodesToShow.forEach((key: string, index: number) => {
                    if (this.knowledgeGraph[key]) {
                        const data = this.knowledgeGraph[key];
                        const el = this._createNodeElement(key, data, false);
                        el.classList.add('hidden-node');
                        this.rightNodesContainer!.appendChild(el);
                        setTimeout(() => el.classList.remove('hidden-node'), index * 70);
                    }
                });
            }
        });
    }

    /**
     * Xóa sạch các node hiện tại trên dock với hiệu ứng biến mất.
     * @returns {Promise} - Promise giải quyết (resolve) sau khi hiệu ứng biến mất hoàn tất (300ms).
     * @private
     */
    _clearDock() {
        return new Promise<void>(resolve => {
            if (!this.leftNodesContainer || !this.mainNodeContainer || !this.rightNodesContainer) {
                resolve();
                return;
            }

            const childrenToClear = [
                ...Array.from(this.leftNodesContainer.children),
                ...Array.from(this.mainNodeContainer.children),
                ...Array.from(this.rightNodesContainer.children)
            ];

            if (childrenToClear.length === 0) {
                resolve();
                return;
            }

            childrenToClear.forEach(child => child.classList.add('hidden-node'));

            setTimeout(() => {
                if (this.leftNodesContainer) this.leftNodesContainer.innerHTML = '';
                if (this.mainNodeContainer) this.mainNodeContainer.innerHTML = '';
                if (this.rightNodesContainer) this.rightNodesContainer.innerHTML = '';
                resolve();
            }, 300); // Phải khớp với transition CSS
        });
    }
}
// --- KẾT THÚC COMPONENT ---


// --- Khởi tạo và Chạy Ứng dụng ---
document.addEventListener('nav', () => {
    const initDock = () => {
        console.log("Floating Dock: Initializing now...", new Date().toLocaleTimeString());
        // Lấy container chính của dock
        const appDock = new FloatingNodeDock('dock-content-wrapper');
        // Khởi chạy với nút 'Marketing'
        appDock.init('Marketing');
    };

    console.log("Floating Dock: Script loaded, waiting for idle...", new Date().toLocaleTimeString());

    if ('requestIdleCallback' in window) {
        // @ts-ignore
        requestIdleCallback(() => {
            console.log("Floating Dock: Idle detected. Starting 3s test delay...");
            setTimeout(initDock, 3000); // Thêm delay 3s để test
        });
    } else {
        setTimeout(initDock, 3000);
    }
});
