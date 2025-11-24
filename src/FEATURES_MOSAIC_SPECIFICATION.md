# Features Mosaic Grid Specification

## Overview
This document outlines the Notion-style mosaic grid system for the INVITI Product Features section, ensuring consistent card heights, fixed aspect ratios, and proper alignment across all breakpoints.

---

## Grid System

### Desktop (1440px, ≥1024px)
- **Columns**: 12
- **Gutter**: 24px
- **Container max-width**: 1120px
- **Row height**: 280px (reference)

### Tablet (1024px, 768px-1023px)
- **Columns**: 8
- **Gutter**: 24px
- **Container max-width**: 1120px
- **Row height**: 280px (reference)

### Mobile (390px, <768px)
- **Columns**: 1
- **Card width**: 343px (centered)
- **Gap**: 16px
- **Stack order**: A → B → C → D → E

---

## Card Layout Map

### Desktop (12 columns)
```
┌─────────────────┬─────────────────┐
│                 │                 │
│   A (Large)     │   B (Medium)    │
│   6×2           │   6×1           │
│                 ├─────┬─────┬─────┤
│                 │  C  │  D  │  E  │
└─────────────────┴─────┴─────┴─────┘
```

| Card | Size   | Span (Desktop) | Span (Tablet) |
|------|--------|----------------|---------------|
| A    | Large  | 6 cols × 2 rows | 8 cols × 2 rows |
| B    | Medium | 6 cols × 1 row  | 8 cols × 1 row  |
| C    | Medium | 4 cols × 1 row  | 4 cols × 1 row  |
| D    | Small  | 4 cols × 1 row  | 4 cols × 1 row  |
| E    | Small  | 4 cols × 1 row  | 4 cols × 1 row  |

### Card Gap
- **Desktop/Tablet**: 24px (matches gutter)
- **Mobile**: 16px

---

## Card Components

### Image Aspect Ratios (Fixed)
- **Large**: 16:9
- **Medium**: 4:3
- **Small**: 1:1

### Image Display Mode
- **Object-fit**: `contain` (not crop)
- **Safe margin**: 8px padding inside image container
- **Background**: #F7F7F7

### Card Structure
```
Card (border-radius: 12px, padding: 20px desktop / 16px mobile)
├── Tag (optional, top-left)
├── Corner Doodle (bottom-right, 80% opacity)
└── Content (gap: 12px)
    ├── Screenshot (aspect-ratio: fixed)
    ├── Icon (32×32, bg: #F7F7F7)
    ├── Title (line-clamp: 2, line-height: 150%)
    ├── Description (line-clamp: 2, line-height: 150%, flex-grow)
    └── Learn More Link (mt-auto)
```

### Text Clamping Rules
- **Title**: Maximum 2 lines, `line-clamp-2`
- **Description**: Maximum 2 lines, `line-clamp-2`
- **Line height**: 150% for both
- **Overflow**: `text-overflow: ellipsis`

### Card Padding & Spacing
- **Card padding**: 20px (desktop), 16px (mobile)
- **Content gap**: 12px (consistent)
- **Card-to-card gap**: 24px (desktop/tablet), 16px (mobile)

---

## Content Mapping

| Position | Feature | Icon | Title (tc) | Description (tc) |
|----------|---------|------|------------|------------------|
| A (Large) | Event/Session Management | Calendar | 活動與場次管理 | 多場次設定、時間與場地集中管理、與郵件變數連動。 |
| B (Medium) | Automated Invitations | Mail | 自動化邀請與追蹤 | 批量寄送、回覆處理、即時狀態更新。 |
| C (Medium) | Guest Database | Database | 中央貴賓資料庫 | 標籤、去重、跨活動重複使用。 |
| D (Small) | Roles & Permissions | Users | 角色與權限 | 協作、存取控制、稽核軌跡。 |
| E (Small) | Email Templates | FileText | 郵件模板 | 多版本管理、快速套用變數。 |

---

## Interactions

### Card Click
- **Action**: Navigate to Feature Detail page
- **Target**: `onFeatureClick(featureId)`
- **Visual feedback**: 
  - Hover: `border-[#DADADA]`, `shadow-md`
  - Active: `border-[#C9C9C9]`, `bg-[#FAFAFA]`

### Screenshot Click
- **Action**: Open Lightbox modal
- **Target**: `onScreenshotClick()`
- **Lightbox max-width**: 960px
- **Background**: Black 80% opacity with blur
- **Close**: Click backdrop, X button, or ESC key

### Hover States
- **Card**: Subtle elevation shadow
- **Screenshot**: 
  - Scale: 105%
  - Overlay: Black 20% opacity
  - Zoom icon: Fade in with scale animation

---

## Responsive Behavior

### Desktop (≥1024px)
- 12-column grid
- Cards maintain aspect ratio and line clamping
- All 5 cards visible in mosaic layout

### Tablet (768px-1023px)
- 8-column grid
- Large card: full width (8 cols)
- Medium/Small cards: 4 cols each
- Same aspect ratios and clamping

### Mobile (<768px)
- Single column stack
- Card width: 343px (centered)
- Gap: 16px
- All cards same width, aspect ratios preserved
- Order: A → B → C → D → E

---

## Multi-Language Support

### Line Clamping Consistency
- All languages use same 2-line limit
- If content exceeds 2 lines → truncate with ellipsis
- Non-primary languages (en/ja/zh-hans) may reduce font-size by 1 step if needed

### Tested Languages
- Traditional Chinese (tc) - Primary
- English (en)
- Japanese (ja)
- Simplified Chinese (zh-hans)

---

## Quality Checklist

- [ ] All cards align to grid (no jagged edges)
- [ ] Card heights consistent within same row
- [ ] Image aspect ratios correct (16:9, 4:3, 1:1)
- [ ] Images use `object-contain` with 8px safe margin
- [ ] Title and description clamp at 2 lines
- [ ] 24px gap between cards (desktop/tablet)
- [ ] 20px padding on all cards (desktop)
- [ ] Screenshot lightbox opens at 960px max-width
- [ ] Mobile: 343px card width, 16px gap
- [ ] Language switching doesn't break layout
- [ ] "View All Features" button visible and functional
- [ ] Hover and click interactions smooth

---

## Component Files

- `/components/wireframe/FeaturesSection.tsx` - Main section container
- `/components/wireframe/FeatureMosaicCard.tsx` - Individual card component
- `/components/wireframe/ImageLightbox.tsx` - Screenshot lightbox modal

## CSS Utilities Used

- `line-clamp-2` - Text truncation at 2 lines
- `aspect-ratio: 16/9 | 4/3 | 1/1` - Fixed image ratios
- `object-contain` - Image fit mode (with safe margins)
- `grid-auto-rows: 280px` - Reference row height
- `gap-6` (24px) - Card spacing
- `max-w-[1120px]` - Container width
- `rounded-xl` (12px) - Card border radius

---

## Notes

- Row height (280px) is a **reference** for visual alignment, not a strict constraint
- Cards can grow vertically if content + padding exceeds row height, but clamping prevents this
- Padding and gaps are **fixed** - do not allow individual card customization
- All cards share same border, shadow, and hover styles
- Corner doodle is decorative and optional (currently enabled on all cards)
