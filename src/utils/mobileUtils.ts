// 检测是否为移动设备
export const isMobile = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768; // md断点以下视为移动端
}

// 移动端按钮点击处理
export const handleMobileClick = (allowedAction?: () => void) => {
    if (isMobile()) {
        // 显示Desktop Required页面
        const event = new CustomEvent('showDesktopRequired');
        window.dispatchEvent(event);
    } else if (allowedAction) {
        allowedAction();
    }
}

// 允许的移动端操作（不显示Desktop Required页面）
export const handleAllowedMobileClick = (action: () => void) => {
    action();
} 