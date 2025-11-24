# Payment Modal Scroll Fix - Final Implementation

## 修正日期
2025-10-30

## 修正範圍
`/components/wireframe/PaymentModal.tsx` (Desktop Dialog & Mobile Sheet)  
`/components/wireframe/PricingSection.tsx` (Free Plan CTA routing)

---

## A. 強制可滾動內容結構

### 1. 三段式層級架構
```
Modal Container (max-h-88vh, overflow-hidden, flex-col)
├── Header (flex-shrink-0) → 固定不滾動
├── Content (flex-1, overflow-y-auto, min-h-40vh) → 可直向滾動
└── Footer (flex-shrink-0) → 固定不滾動
```

### 2. 關鍵 CSS 設定
- **Modal Root**: `h-full max-h-full overflow-hidden` + `flex flex-col`
- **Header**: `flex-shrink-0` (不參與 flex 伸縮)
- **Content**: `flex-1 overflow-y-auto overflow-x-hidden` + `min-height: 40vh`
- **Footer**: `flex-shrink-0` + iOS safe area (mobile: padding-bottom 16px)

### 3. 防止雙重滾動
- 只有 **Content 區** 設定 `overflow-y-auto`
- Modal 容器設為 `overflow-hidden`
- 移除內層不必要的滾動容器

---

## B. 單一關閉按鈕

✅ Header 僅保留**一個** X 按鈕 (右上角)  
✅ 點擊區域：`min-w-[32px] min-h-[32px]`  
✅ 鍵盤支援：Esc 鍵關閉 (由 Dialog/Sheet 元件處理)  
✅ ShadCN 預設關閉按鈕已隱藏：`[&>button]:hidden`

---

## C. 座席數唯讀設定

| Plan | 座席數 (Seats) | 欄位狀態 |
|------|---------------|---------|
| **Free** | 1 | Read-only, disabled, bg-gray-100 |
| **Basic** | 1 | Read-only, disabled, bg-gray-100 |
| **Pro** | 3 | Read-only, disabled, bg-gray-100 |
| **Enterprise** | null | 顯示「由合約決定」文字 (contactSalesForSeats) |

### 實作細節
```tsx
// Plan pricing with fixed seats
const planPricing = {
  free: { monthly: 0, yearly: 0, seats: 1 },
  basic: { monthly: 600, yearly: 6000, seats: 1 },
  pro: { monthly: 3000, yearly: 30000, seats: 3 },
  enterprise: { monthly: 0, yearly: 0, seats: null }
};

// Seats input - read-only
<Input
  type="text"
  value={seats}
  readOnly
  disabled
  className="bg-gray-100 text-gray-900 cursor-default"
  tabIndex={-1}
/>
```

✅ Monthly/Yearly 切換**不影響**座席數  
✅ 總金額計算綁定此唯讀值  
✅ Enterprise 顯示「聯絡銷售以確定座席數」

---

## D. Free Plan 路由邏輯

### PricingSection CTA 行為
```tsx
if (planType === 'free') {
  // ✅ Free: 直接開啟登入頁面，不開 Payment Modal
  window.open('https://app.inviti.vip', '_blank', 'noopener,noreferrer');
} else if (planType === 'enterprise') {
  // Enterprise: 聯絡銷售 (mailto 或 demo booking)
  window.location.href = plan.ctaLink;
} else {
  // Basic/Pro: 開啟 Payment Modal
  onPlanSelect(planType);
}
```

| Plan | CTA Text | 行為 |
|------|----------|------|
| **Free** | Get Started | 開啟 `https://app.inviti.vip` (新分頁) |
| **Basic** | Try Basic | 開啟 Payment Modal (預選 Basic) |
| **Pro** | Upgrade to Pro | 開啟 Payment Modal (預選 Pro) |
| **Enterprise** | Contact Sales | 發送 Email 或導向 Demo Booking |

---

## E. Mobile Sheet 專項調整

### Sheet 容器設定
```tsx
<SheetContent 
  side="bottom" 
  className="h-[88vh] max-h-[88vh] overflow-hidden p-6 flex flex-col [&>button]:hidden"
>
```

### Footer Safe Area
```tsx
<div 
  className="flex-shrink-0 border-t border-gray-200 pt-4 space-y-4 bg-white"
  style={{ paddingBottom: isMobile ? '16px' : '0' }}
>
```

✅ 避免 iOS 橡皮筋效應造成遮擋  
✅ Footer 固定在底部可見  
✅ Content 可完整滾動至底部

---

## QA 測試清單

### ✅ 滾動功能
- [x] Content 區可直向滾動（Desktop & Mobile）
- [x] Header 固定不移位
- [x] Footer 固定不移位
- [x] 滾動到底部時 Footer 保持可見
- [x] 無雙重滾動條（只有 Content 區滾動）

### ✅ 關閉機制
- [x] 僅一個 X 按鈕（Header 右上）
- [x] 點擊 X 可關閉
- [x] 按下 Esc 可關閉
- [x] 點擊 Overlay 外部可關閉

### ✅ 座席數邏輯
- [x] Free/Basic 顯示 1（唯讀）
- [x] Pro 顯示 3（唯讀）
- [x] Enterprise 顯示「由合約決定」
- [x] 無法編輯（disabled + cursor-default）
- [x] 切換 Monthly/Yearly 不改變座席數

### ✅ Free Plan 路由
- [x] Free CTA 開啟 `https://app.inviti.vip`
- [x] 在新分頁開啟（`_blank`）
- [x] **不開啟** Payment Modal
- [x] Basic/Pro 正常開啟 Payment Modal
- [x] Enterprise 走聯絡銷售流程

### ✅ 響應式設計
- [x] Desktop (Dialog): max-w-720px, max-h-88vh
- [x] Mobile (Sheet): h-88vh, bottom slide-up
- [x] Tablet 使用 Desktop 變體
- [x] 三種尺寸滾動行為一致

---

## 技術要點

### Flexbox 垂直佈局
```css
.modal-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: hidden; /* 防止容器滾動 */
}

.header, .footer {
  flex-shrink: 0; /* 不參與伸縮 */
}

.content {
  flex: 1; /* 佔據剩餘空間 */
  overflow-y: auto; /* 僅此處滾動 */
  min-height: 40vh; /* 確保有足夠空間 */
}
```

### 避免常見陷阱
1. ❌ 不要在 Modal 容器設 `overflow-y-auto`（會產生雙重滾動）
2. ❌ 不要讓 Content 區 `height: auto`（flex-1 才能正確伸展）
3. ❌ 不要忘記 Header/Footer 的 `flex-shrink-0`（會被壓縮）
4. ✅ 確保父容器有明確高度（Dialog/Sheet 設定 `h-[88vh]`）

---

## 檔案變更記錄

### `/components/wireframe/PaymentModal.tsx`
- Modal Root 增加 `max-h-full overflow-hidden`
- Header 增加 `flex-shrink-0`
- Content 移除 `pr-1/pr-2`，增加 `overflow-x-hidden` + `min-height: 40vh`
- Footer 增加 `flex-shrink-0` + mobile safe area
- Desktop Dialog 增加 `max-h-[88vh]`
- Mobile Sheet 增加 `max-h-[88vh]`

### `/components/wireframe/PricingSection.tsx`
- 無需變更（Free plan 路由已在前次修正）

---

## 驗證步驟

1. 在 Desktop 開啟 Payment Modal → 滾動 Content → Header/Footer 固定
2. 在 Mobile 開啟 Payment Modal → 滾動 Content → Header/Footer 固定
3. 點擊 Pricing Section 的「Get Started (Free)」→ 開啟 app.inviti.vip（不開 Modal）
4. 點擊「Try Basic」或「Upgrade to Pro」→ 開啟 Payment Modal
5. 檢查座席數欄位 → 唯讀且顯示正確值
6. 切換 Monthly/Yearly → 座席數不變
7. 按 Esc 或點擊 X → Modal 關閉

---

## 完成狀態

✅ **A. 可滾動內容** - Header/Content/Footer 三段結構完整  
✅ **B. 單一關閉按鈕** - 僅 Header 右上一個 X  
✅ **C. 唯讀座席數** - Free/Basic=1, Pro=3, Enterprise=契約  
✅ **D. Free Plan 路由** - 直達 app.inviti.vip，不開 Modal  
✅ **E. Mobile Safe Area** - Footer 底部 padding 16px  

**All requirements fulfilled. Ready for production.** 🎉
