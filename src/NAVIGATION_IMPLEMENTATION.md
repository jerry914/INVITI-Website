# Global Navigation with Cross-Page Scrolling

## Implementation Summary

This document describes how the global navigation system works when navigating from any page (Blog, Help Center, etc.) to the Homepage with automatic scrolling to specific sections.

## Architecture

### 1. State Management (App.tsx)

```typescript
const [scrollTarget, setScrollTarget] = useState<string>('');
```

- `scrollTarget`: Stores the target section ID when navigating from other pages
- Empty string means no pending scroll action

### 2. Navigation Flow

#### From Any Page → Homepage with Scroll

**User Action:** Click "Features" or "Pricing" in navigation bar from Blog/Help Center/Blog Post

**Flow:**
1. `WireframeNav.handleSmoothScroll(sectionId)` is called
2. Check if section exists on current page: `document.getElementById(sectionId)`
3. **If section exists** (already on homepage):
   - Calculate NavStack height (Nav + Banner)
   - Scroll directly to section with smooth behavior
4. **If section doesn't exist** (on different page):
   - Call `onSetScrollTarget(sectionId)` → Sets App.scrollTarget
   - Call `onNavigate('/')` → Navigates to homepage
   - App.useEffect triggers when `scrollTarget` is set and `currentView === 'wireframe'`
   - After 350ms delay (for DOM render), scroll to target section
   - Clear scrollTarget after scrolling

### 3. Component Props Chain

```
App.tsx
  └─ NavStack (+ onSetScrollTarget)
       └─ WireframeNav (+ onSetScrollTarget)
            └─ navItems.action → handleSmoothScroll()
```

All pages pass the same props:
- HelpCenterPage
- BlogPage  
- BlogPostPage

### 4. Scroll Offset Calculation

All scroll functions calculate the NavStack height dynamically:

```typescript
const navHeight = 64; // h-16 = 64px (fixed)
const bannerHeight = isMobile ? 56 : 48;
const isBannerDismissed = localStorage.getItem('banner-dismissed') === 'true';
const totalNavHeight = isBannerDismissed ? navHeight : navHeight + bannerHeight;
```

**Desktop:**
- Nav: 64px
- Banner: 48px (if visible)
- Total: 112px (with banner) or 64px (without)

**Mobile:**
- Nav: 64px  
- Banner: 56px (if visible)
- Total: 120px (with banner) or 64px (without)

### 5. Special Cases

#### Pricing from Footer

Uses separate `handleScrollToPricing(focusCard?)` function:
- Supports highlighting specific pricing card
- Already implemented cross-view navigation
- Used by Footer links

#### Home Button

`handleHomeClick()`:
- If already on homepage: scroll to top
- If on other page: navigate to '/'

## Test Scenarios

✅ **Scenario 1:** From Help Center → Click "Features"
- Result: Navigate to Homepage → Scroll to Features section

✅ **Scenario 2:** From Blog → Click "Pricing"  
- Result: Navigate to Homepage → Scroll to Pricing section

✅ **Scenario 3:** From Blog Post → Click "Features"
- Result: Navigate to Homepage → Scroll to Features section

✅ **Scenario 4:** On Homepage → Click "Features"
- Result: Smooth scroll to Features (no navigation)

✅ **Scenario 5:** On Homepage → Click "Pricing"
- Result: Smooth scroll to Pricing (no navigation)

✅ **Scenario 6:** From any page → Click Footer "定價"
- Result: Navigate to Homepage → Scroll to Pricing (with optional card highlight)

✅ **Scenario 7:** Banner dismissed → Any scroll action
- Result: Correct offset calculation (64px instead of 112px/120px)

## Files Modified

1. `/App.tsx`
   - Added `scrollTarget` state
   - Added useEffect for auto-scroll
   - Updated all page components to pass `onSetScrollTarget`

2. `/components/wireframe/NavStack.tsx`
   - Added `onSetScrollTarget` prop
   - Passed to WireframeNav

3. `/components/wireframe/WireframeNav.tsx`
   - Added `onSetScrollTarget` prop
   - Updated `handleSmoothScroll` to check if section exists
   - If not exists: set scroll target and navigate to home

4. `/components/helpcenter/HelpCenterPage.tsx`
   - Added `onSetScrollTarget` prop
   - Passed to NavStack

5. `/components/blog/BlogPage.tsx`
   - Added `onSetScrollTarget` prop
   - Passed to NavStack

6. `/components/blog/BlogPostPage.tsx`
   - Added `onSetScrollTarget` prop
   - Passed to NavStack

## Key Benefits

- ✅ Consistent navigation behavior across all pages
- ✅ Smooth scrolling with proper offset for fixed NavStack
- ✅ Dynamic height calculation based on banner visibility
- ✅ No page refresh needed
- ✅ Works on Desktop, Tablet, and Mobile views
- ✅ Maintains Notion-style UX patterns
