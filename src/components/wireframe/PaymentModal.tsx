import React, { useState } from 'react';
import { X, CreditCard, Building } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '../ui/sheet';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';
import { WireframeButton } from './WireframeButton';
import { Locale, getTranslations } from '../../locales/translations';

type PlanType = 'free' | 'basic' | 'pro' | 'enterprise';
type BillingCycle = 'monthly' | 'yearly';
type PaymentMethod = 'credit-card' | 'bank-transfer';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PlanType;
  isMobile?: boolean;
  locale?: Locale;
  onNavigate?: (path: string) => void;
  onScrollToPricing?: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  isMobile = false,
  locale = 'tc',
  onNavigate,
  onScrollToPricing
}) => {
  const t = getTranslations(locale);
  
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit-card');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [email, setEmail] = useState('');

  // Plan pricing (mock data - matches pricing section)
  // Seats are now read-only per plan
  const planPricing = {
    free: { monthly: 0, yearly: 0, seats: 1 },
    basic: { monthly: 600, yearly: 6000, seats: 1 },
    pro: { monthly: 3000, yearly: 30000, seats: 3 },
    enterprise: { monthly: 0, yearly: 0, seats: null } // Custom/contract-based
  };

  const currentPlan = planPricing[selectedPlan];
  const price = billingCycle === 'monthly' ? currentPlan.monthly : currentPlan.yearly;
  const originalYearlyPrice = currentPlan.monthly * 12;
  const seats = currentPlan.seats || 1; // Read-only seats based on plan
  const totalAmount = price * seats;

  const getPlanDisplayName = (plan: PlanType) => {
    const names = {
      free: t.payment.freePlan,
      basic: t.payment.basicPlan,
      pro: t.payment.proPlan,
      enterprise: t.payment.enterprisePlan
    };
    return names[plan];
  };

  const handleBackToPricing = () => {
    onClose();
    if (onScrollToPricing) {
      onScrollToPricing();
    } else if (onNavigate) {
      onNavigate('/');
      setTimeout(() => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleContactSales = () => {
    window.location.href = 'mailto:contact@inviti.vip';
  };

  const handleUpgrade = () => {
    if (selectedPlan === 'enterprise') {
      handleContactSales();
    } else {
      // Mock payment processing
      console.log('Processing payment...', {
        plan: selectedPlan,
        billingCycle,
        seats,
        totalAmount,
        email
      });
      // TODO: Integrate with actual payment service provider
    }
  };

  const ModalContent = ({ 
    TitleComponent, 
    DescriptionComponent 
  }: { 
    TitleComponent: typeof DialogTitle | typeof SheetTitle;
    DescriptionComponent: typeof DialogDescription | typeof SheetDescription;
  }) => (
    <div className="flex flex-col h-full max-h-full overflow-hidden">
      {/* Header - Fixed */}
      <div className="flex-shrink-0 flex items-start justify-between pb-4 border-b border-gray-200">
        <div>
          <TitleComponent className="text-gray-900 mb-1">{t.payment.title}</TitleComponent>
          <DescriptionComponent className="text-sm text-gray-600">{t.payment.subtitle}</DescriptionComponent>
        </div>
        <button
          onClick={onClose}
          className="min-w-[32px] min-h-[32px] p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          aria-label={t.payment.close}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div 
        className="flex-1 overflow-y-auto overflow-x-hidden"
        style={{ minHeight: '40vh' }}
      >
        <div className={`space-y-6 ${isMobile ? 'py-4' : 'py-6'}`}>
          {/* Plan Summary */}
          <div className="space-y-3">
            <h3 className="text-sm text-gray-900">{t.payment.planSummaryTitle}</h3>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded space-y-3">
              <Badge className="bg-gray-900 text-white hover:bg-gray-800">
                {getPlanDisplayName(selectedPlan)}
              </Badge>
              
              {/* Monthly/Yearly Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`flex-1 px-3 py-2 text-sm border rounded transition-colors ${
                    billingCycle === 'monthly'
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {t.payment.monthly}
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`flex-1 px-3 py-2 text-sm border rounded transition-colors ${
                    billingCycle === 'yearly'
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {t.payment.yearly}
                </button>
              </div>

              {/* Price Display */}
              {selectedPlan !== 'free' && selectedPlan !== 'enterprise' && (
                <div className="text-sm">
                  {billingCycle === 'yearly' ? (
                    <>
                      <p className="text-gray-900">
                        NT${price.toLocaleString()} / Year
                      </p>
                      <p className="text-gray-500 line-through text-xs">
                        NT${originalYearlyPrice.toLocaleString()} / Year
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-900">
                      NT${price.toLocaleString()} / month
                    </p>
                  )}
                </div>
              )}

              {/* Seats Selector - Read-only */}
              <div className="space-y-2">
                <Label className="text-sm text-gray-700">{t.payment.seats}</Label>
                {selectedPlan === 'enterprise' ? (
                  <div className="px-3 py-2 bg-gray-100 border border-gray-200 rounded text-sm text-gray-600">
                    {t.payment.contactSalesForSeats}
                  </div>
                ) : (
                  <Input
                    type="text"
                    value={seats}
                    readOnly
                    disabled
                    className="bg-gray-100 text-gray-900 cursor-default"
                    tabIndex={-1}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Account & Billing Info */}
          <div className="space-y-3">
            <h3 className="text-sm text-gray-900">{t.payment.accountBillingTitle}</h3>
            <div className="space-y-3">
              <div>
                <Label className="text-sm text-gray-700">{t.payment.email}</Label>
                <Input
                  type="email"
                  placeholder={t.payment.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-sm text-gray-700">{t.payment.companyName}</Label>
                <Input
                  type="text"
                  placeholder={t.payment.companyNamePlaceholder}
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-sm text-gray-700">{t.payment.taxId}</Label>
                <Input
                  type="text"
                  placeholder={t.payment.taxIdPlaceholder}
                  className="mt-1"
                />
              </div>
              
              {/* Billing Address */}
              <div className="space-y-3 pt-2">
                <Label className="text-sm text-gray-900">{t.payment.billingAddress}</Label>
                <Input
                  type="text"
                  placeholder={t.payment.streetPlaceholder}
                  className="mt-1"
                />
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="text"
                    placeholder={t.payment.cityPlaceholder}
                  />
                  <Input
                    type="text"
                    placeholder={t.payment.postalCodePlaceholder}
                  />
                </div>
                <Input
                  type="text"
                  placeholder={t.payment.countryPlaceholder}
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-3">
            <h3 className="text-sm text-gray-900">{t.payment.paymentMethodTitle}</h3>
            
            {/* Payment Method Tabs */}
            <div className="flex gap-2 border-b border-gray-200">
              <button
                onClick={() => setPaymentMethod('credit-card')}
                className={`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition-colors ${
                  paymentMethod === 'credit-card'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                {t.payment.creditCard}
              </button>
              <button
                onClick={() => setPaymentMethod('bank-transfer')}
                disabled={selectedPlan !== 'enterprise'}
                className={`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition-colors ${
                  paymentMethod === 'bank-transfer'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                } ${selectedPlan !== 'enterprise' ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Building className="w-4 h-4" />
                {t.payment.bankTransfer}
              </button>
            </div>

            {/* Credit Card Form */}
            {paymentMethod === 'credit-card' && (
              <div className="space-y-3">
                <div>
                  <Label className="text-sm text-gray-700">{t.payment.cardNumber}</Label>
                  <Input
                    type="text"
                    placeholder={t.payment.cardNumberPlaceholder}
                    className="mt-1"
                    maxLength={19}
                  />
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs text-gray-400">VISA</span>
                    <span className="text-xs text-gray-400">MasterCard</span>
                    <span className="text-xs text-gray-400">AMEX</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-sm text-gray-700">{t.payment.expiration}</Label>
                    <Input
                      type="text"
                      placeholder={t.payment.expirationPlaceholder}
                      className="mt-1"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-700">{t.payment.cvc}</Label>
                    <Input
                      type="text"
                      placeholder={t.payment.cvcPlaceholder}
                      className="mt-1"
                      maxLength={4}
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm text-gray-700">{t.payment.nameOnCard}</Label>
                  <Input
                    type="text"
                    placeholder={t.payment.nameOnCardPlaceholder}
                    className="mt-1"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Verification (Optional) */}
          <div className="space-y-3">
            <h3 className="text-sm text-gray-900">{t.payment.verificationTitle}</h3>
            <button className="text-sm text-gray-600 hover:text-gray-900 underline">
              {t.payment.sendCode}
            </button>
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <Input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center"
                />
              ))}
            </div>
          </div>

          {/* Coupon */}
          <div className="space-y-3">
            <h3 className="text-sm text-gray-900">{t.payment.couponTitle}</h3>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder={t.payment.couponPlaceholder}
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1"
              />
              <WireframeButton variant="secondary">
                {t.payment.apply}
              </WireframeButton>
            </div>
          </div>

          {/* Agreement */}
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Checkbox
                id="agree-terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              />
              <label htmlFor="agree-terms" className="text-sm text-gray-700 leading-tight cursor-pointer">
                {t.payment.agreeTerms}{' '}
                <a href="#terms" className="text-gray-900 underline hover:text-gray-700">
                  {t.payment.termsLink}
                </a>
                {' '}&{' '}
                <a href="#privacy" className="text-gray-900 underline hover:text-gray-700">
                  {t.payment.privacyLink}
                </a>
              </label>
            </div>
            <p className="text-xs text-gray-500">{t.payment.autoRenewNote}</p>
          </div>
        </div>
      </div>

      {/* Footer - Fixed */}
      <div className="flex-shrink-0 border-t border-gray-200 pt-4 space-y-4 bg-white"
        style={{ paddingBottom: isMobile ? '16px' : '0' }}
      >
        {/* Summary */}
        {selectedPlan !== 'free' && selectedPlan !== 'enterprise' && (
          <div className="p-4 bg-gray-50 border border-gray-200 rounded space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">{t.payment.totalAmount}:</span>
              <span className="text-gray-900">
                NT${totalAmount.toLocaleString()} / {billingCycle === 'yearly' ? 'Year' : 'month'}
              </span>
            </div>
            <p className="text-xs text-gray-600">{t.payment.effectiveImmediately}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-2">
          {selectedPlan === 'enterprise' ? (
            <WireframeButton
              variant="primary"
              onClick={handleContactSales}
              className="w-full"
            >
              {t.payment.contactSales}
            </WireframeButton>
          ) : (
            <WireframeButton
              variant="primary"
              onClick={handleUpgrade}
              disabled={!agreeTerms || !email}
              className="w-full"
            >
              {t.payment.upgradeNow}
            </WireframeButton>
          )}
          <button
            onClick={handleBackToPricing}
            className="text-sm text-gray-600 hover:text-gray-900 underline py-2"
          >
            {t.payment.backToPricing}
          </button>
        </div>
      </div>
    </div>
  );

  // Mobile: Use Sheet
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent 
          side="bottom" 
          className="h-[88vh] max-h-[88vh] overflow-hidden p-6 flex flex-col [&>button]:hidden"
        >
          <ModalContent 
            TitleComponent={SheetTitle} 
            DescriptionComponent={SheetDescription}
          />
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop/Tablet: Use Dialog
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[720px] max-h-[88vh] overflow-hidden p-6 flex flex-col [&>button]:hidden"
      >
        <ModalContent 
          TitleComponent={DialogTitle} 
          DescriptionComponent={DialogDescription}
        />
      </DialogContent>
    </Dialog>
  );
};
