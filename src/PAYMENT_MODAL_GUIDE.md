# 付款 Modal 使用指南

## 功能概覽

付款 Modal 已完整整合到 INVITI 網站中，支援所有四個定價方案：

1. **免費版 (Free)** - NT$0
2. **入門版 (Basic)** - 月付 NT$600 / 年付 NT$6,000
3. **專業版 (Pro)** - 月付 NT$3,000 / 年付 NT$30,000  
4. **企業版 (Enterprise)** - 客製化定價

## 如何測試

### 方案按鈕觸發
在 Pricing Section 中點擊以下任一按鈕：
- **Get Started** (免費版)
- **Try Basic** (入門版)
- **Upgrade to Pro** (專業版)
- **Contact Sales** (企業版)

點擊後會立即打開付款 Modal。

### 響應式設計
- **桌面/平板** (≥1024px): 使用居中 Dialog，寬度 720px
- **手機** (<1024px): 使用全屏 Sheet，從底部滑出

## 月付 vs 年付價格差異

### Basic (入門版)
- **月付**: NT$600 / month
- **年付**: NT$6,000 / Year（優惠價）
  - 原價: ~~NT$7,200 / Year~~（刪除線顯示）
  - 節省: NT$1,200 (17% 折扣)

### Pro (專業版)  
- **月付**: NT$3,000 / month
- **年付**: NT$30,000 / Year（優惠價）
  - 原價: ~~NT$36,000 / Year~~（刪除線顯示）
  - 節省: NT$6,000 (17% 折扣)

### Free & Enterprise
- **免費版**: 月付/年付都是 NT$0
- **企業版**: Contact sales（無固定價格）

## 座席數計算

總金額會根據選擇的座席數自動計算：

- **Basic**: 最多 3 個座席
- **Pro**: 最多 10 個座席
- **Enterprise**: 需聯繫業務

**範例計算**:
- Basic 月付 × 2 座席 = NT$1,200 / month
- Pro 年付 × 5 座席 = NT$150,000 / Year

## Modal 功能

### 1. 方案摘要
- 顯示選擇的方案 (Badge)
- 月付/年付切換按鈕
- 價格顯示（年付顯示優惠價 + 刪除線原價）
- 座席數選擇器

### 2. 帳號與帳單資訊
- Email（必填）
- 公司名稱（選填）
- 統編/VAT（選填）
- 帳單地址（街道、城市、郵遞區號、國家）

### 3. 付款方式
- **信用卡**（所有方案可用）
  - 卡號、到期日、CVC、持卡人姓名
  - 顯示支援品牌：VISA、MasterCard、AMEX
- **Bank Transfer/電匯**（僅 Enterprise 可用）

### 4. 身份驗證（選填）
- 發送驗證碼到 Email
- 6 位數驗證碼輸入框

### 5. 優惠券（選填）
- 輸入優惠券代碼
- Apply 按鈕

### 6. 同意條款
- 必須勾選同意服務條款和隱私權政策
- 自動續約說明文字

### 7. 確認區域
- 顯示應付總金額（月付/年付 × 座席數）
- "立即生效，按比例計算" 說明
- **立即升級** 按鈕（Basic/Pro）
- **Contact sales** 按鈕（Enterprise）
- **返回定價** 連結

## 互動行為

### Contact Sales (Enterprise)
點擊後開啟 mailto: contact@inviti.vip

### 返回定價
- 關閉 Modal
- 自動滾動回 Pricing Section
- 支援跨頁面導航（從其他頁面也能正確導航回 Pricing）

### 立即升級按鈕
- 需要勾選同意條款
- 需要填寫 Email
- 點擊後執行付款處理（目前為 Mock，實際需整合 PSP）

## 多語言支援

完整支援四種語言：
- 繁體中文（預設）
- English
- 日本語
- 简体中文

所有欄位標籤、按鈕文字、說明文字都會根據選擇的語言自動切換。

## 技術實現

### 組件結構
- `/components/wireframe/PaymentModal.tsx` - 主要 Modal 組件
- 使用 ShadCN Dialog（桌面）和 Sheet（手機）
- 整合到 `/App.tsx` 中

### 狀態管理
```typescript
const [showPaymentModal, setShowPaymentModal] = useState(false);
const [selectedPlan, setSelectedPlan] = useState<PlanType>('free');
```

### Props 傳遞
```typescript
<PricingSection 
  onPlanSelect={handlePlanSelect}
  // ... other props
/>

<PaymentModal
  isOpen={showPaymentModal}
  onClose={() => setShowPaymentModal(false)}
  selectedPlan={selectedPlan}
  isMobile={deviceView === 'mobile'}
  locale={locale}
/>
```

## 下一步開發

1. **整合真實支付服務商 (PSP)**
   - Stripe / TapPay / 綠界科技
   - 替換 Mock 處理邏輯

2. **表單驗證**
   - Email 格式驗證
   - 信用卡號碼驗證
   - 必填欄位檢查

3. **錯誤處理**
   - 支付失敗提示
   - 網路錯誤處理
   - 表單驗證錯誤顯示

4. **成功狀態**
   - 付款成功 Toast 通知
   - 自動導向儀表板或確認頁面

5. **優惠券系統**
   - 驗證優惠券代碼
   - 計算折扣金額
   - 顯示折扣後價格
