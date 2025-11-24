# Payment Modal Fix Summary

## 修復項目

### 1. Close Icon Duplication (關閉按鈕重複)
**問題**: Payment Modal 可能顯示多個關閉按鈕
**解決方案**:
- 保留自定義 header 中的一個 Close (X) 按鈕
- 使用 CSS `[&>button]:hidden` 隱藏 Dialog/Sheet 內建的關閉按鈕
- Close 按鈕規格：
  - 最小點擊區域：32×32px (`min-w-[32px] min-h-[32px]`)
  - Focus ring：`focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2`
  - Hover 效果：`hover:bg-gray-100`
- Esc 鍵關閉功能由 shadcn Dialog/Sheet 自動提供（透過 `onOpenChange` prop）

### 2. User Count Read-Only (座席數唯讀)
**問題**: 座席數欄位可編輯，但應該根據方案自動設定
**解決方案**:
- 將 `seats` 改為從 `planPricing` 讀取的唯讀值：
  ```typescript
  const planPricing = {
    free: { monthly: 0, yearly: 0, seats: 1 },
    basic: { monthly: 600, yearly: 6000, seats: 1 },
    pro: { monthly: 3000, yearly: 30000, seats: 3 },
    enterprise: { monthly: 0, yearly: 0, seats: null }
  };
  ```
- Input 欄位設定：
  - `type="text"` (避免數字增減箭頭)
  - `readOnly` 和 `disabled` 屬性
  - `className="bg-gray-100 text-gray-900 cursor-default"`
  - `tabIndex={-1}` (不可透過 Tab 聚焦)
- Enterprise 方案顯示文字說���而非輸入框：
  ```tsx
  <div className="px-3 py-2 bg-gray-100 border border-gray-200 rounded text-sm text-gray-600">
    {t.payment.contactSalesForSeats}
  </div>
  ```

### 3. Vertical Scrolling (垂直滾動)
**問題**: Modal 內容過多時無法滾動
**解決方案**:
- 設定 Modal 最大高度：`max-h-[88vh]`
- Content 區域：`flex-1 overflow-y-auto`
- Header 和 Footer 固定，內容區域可滾動
- 結構：
  ```tsx
  <div className="flex flex-col h-full">
    {/* Header - Fixed */}
    <div className="pb-4 border-b">...</div>
    
    {/* Scrollable Content */}
    <div className="flex-1 overflow-y-auto py-6 pr-2">
      <div className="space-y-6 pr-4">...</div>
    </div>
    
    {/* Footer - Fixed */}
    <div className="border-t pt-4 bg-white">...</div>
  </div>
  ```

### 4. Free Plan Routing (免費方案路由)
**問題**: 免費方案不應開啟付款 Modal
**解決方案**:
- 在 `PricingSection.tsx` 中處理 Free plan 點擊事件：
  ```tsx
  if (planType === 'free') {
    window.open('https://app.inviti.vip', '_blank', 'noopener,noreferrer');
  } else if (planType === 'enterprise') {
    window.location.href = plan.ctaLink;
  } else if (onPlanSelect) {
    onPlanSelect(planType); // Only Basic/Pro open modal
  }
  ```

## 測試檢查清單

- [x] Payment modal 只顯示一個 Close (X) 按鈕
- [x] Esc 鍵可關閉 modal
- [x] Close 按鈕有正確的 focus ring
- [x] 座席數欄位為唯讀（無 caret、無數字增減箭頭）
- [x] Free plan: 座席數 = 1
- [x] Basic plan: 座席數 = 1
- [x] Pro plan: 座席數 = 3
- [x] Enterprise plan: 顯示「由合約決定」文字
- [x] Monthly/Yearly 切換不影響座席數
- [x] Modal 內容可垂直滾動
- [x] Header 和 Footer 在滾動時保持可見
- [x] Free plan 的「Get Started」按鈕開啟 https://app.inviti.vip
- [x] Basic/Pro plan 的按鈕開啟 payment modal
- [x] Desktop、Tablet、Mobile 三種螢幕尺寸表現一致

## 檔案變更

### 修改的檔案
1. `/components/wireframe/PaymentModal.tsx`
   - 移除 seats state
   - 將 seats 改為從 planPricing 讀取
   - 更新 seats input 為 read-only/disabled
   - 優化 scrolling 結構
   - 隱藏 Dialog/Sheet 內建的關閉按鈕

2. `/components/wireframe/PricingSection.tsx`
   - 更新 Free plan 按鈕行為
   - 直接開啟 app.inviti.vip 而非 payment modal

3. `/components/wireframe/DemoBookingPage.tsx`
   - 新增 NavStack 和 FooterSection
   - 更新 props 以支援導航功能

4. `/App.tsx`
   - 為 DemoBookingPage 傳遞完整的 navigation props

5. `/locales/translations.ts`
   - 新增英文的 demoBooking 翻譯

## 技術細節

### 為什麼使用 `[&>button]:hidden`？
使用 Tailwind 的任意選擇器來選擇 DialogContent/SheetContent 的直接子元素 button（即內建的關閉按鈕），並隱藏它。這樣可以保持自定義的 header 關閉按鈕，同時移除重複的按鈕。

### 為什麼不需要自定義 Esc 鍵處理？
shadcn/ui 的 Dialog 和 Sheet 組件內部使用 Radix UI，已經實現了 Esc 鍵關閉功能。只需要正確設定 `onOpenChange` prop 即可。

### 為什麼使用 `type="text"` 而非 `type="number"`？
`type="number"` 的 input 會顯示數字增減箭頭（spinner），即使設定 `readOnly` 也可能在某些瀏覽器中顯示。使用 `type="text"` 可以完全避免這個問題，同時保持數值顯示。

## 響應式設計

- **Desktop (1440px)**: Dialog modal，最大寬度 720px，最大高度 88vh
- **Tablet (1024px)**: 同 Desktop
- **Mobile (390px)**: Sheet (bottom drawer)，高度 88vh

所有螢幕尺寸都使用相同的 ModalContent 組件，確保一致的行為和樣式。
