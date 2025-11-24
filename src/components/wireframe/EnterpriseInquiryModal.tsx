import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '../ui/sheet';
import { WireframeButton } from './WireframeButton';
import { Locale, getTranslations } from '../../locales/translations';
import { toast } from 'sonner@2.0.3';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface EnterpriseInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: Locale;
  isMobile?: boolean;
}

interface FormData {
  companyName: string;
  companyWebsite: string;
  contactName: string;
  jobTitle: string;
  email: string;
  phone: string;
  currentTool: string;
  currentToolOther: string;
  eventsPerQuarter: string;
  guestListSize: string;
  integrationNeeds: string[];
  consent: boolean;
}

interface FormErrors {
  companyName?: string;
  contactName?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  currentTool?: string;
  currentToolOther?: string;
  consent?: string;
}

export const EnterpriseInquiryModal: React.FC<EnterpriseInquiryModalProps> = ({
  isOpen,
  onClose,
  locale = 'tc',
  isMobile = false
}) => {
  const t = getTranslations(locale);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    companyWebsite: '',
    contactName: '',
    jobTitle: '',
    email: '',
    phone: '',
    currentTool: '',
    currentToolOther: '',
    eventsPerQuarter: '',
    guestListSize: '',
    integrationNeeds: [],
    consent: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        companyName: '',
        companyWebsite: '',
        contactName: '',
        jobTitle: '',
        email: '',
        phone: '',
        currentTool: '',
        currentToolOther: '',
        eventsPerQuarter: '',
        guestListSize: '',
        integrationNeeds: [],
        consent: false
      });
      setErrors({});
    }
  }, [isOpen]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = t.enterpriseInquiry.required;
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName = t.enterpriseInquiry.required;
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = t.enterpriseInquiry.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.enterpriseInquiry.required;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.enterpriseInquiry.invalidEmail;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.enterpriseInquiry.required;
    }

    if (!formData.currentTool) {
      newErrors.currentTool = t.enterpriseInquiry.selectOption;
    }

    // If "other" is selected, require the currentToolOther field
    if (formData.currentTool === 'other' && !formData.currentToolOther.trim()) {
      newErrors.currentToolOther = t.enterpriseInquiry.enterDescription;
    }

    if (!formData.consent) {
      newErrors.consent = t.enterpriseInquiry.consentError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Mock submission - in production this would send to contact@inviti.vip
    setTimeout(() => {
      // Build current tool display string
      let currentToolDisplay = '';
      if (formData.currentTool === 'other') {
        currentToolDisplay = `${t.enterpriseInquiry.currentToolOptions.other}：${formData.currentToolOther}`;
      } else {
        const toolOptionsMap: Record<string, string> = {
          spreadsheet: t.enterpriseInquiry.currentToolOptions.spreadsheet,
          crm: t.enterpriseInquiry.currentToolOptions.crm,
          selfBuilt: t.enterpriseInquiry.currentToolOptions.selfBuilt,
          none: t.enterpriseInquiry.currentToolOptions.none
        };
        currentToolDisplay = toolOptionsMap[formData.currentTool] || formData.currentTool;
      }

      // Mock email content
      const emailSubject = `INVITI 企業方案詢問｜${formData.companyName}`;
      const emailBody = `
公司名稱：${formData.companyName}
公司網站/社群：${formData.companyWebsite || 'N/A'}

聯絡人姓名：${formData.contactName}
職稱：${formData.jobTitle}
Email：${formData.email}
聯絡電話：${formData.phone}

貴單位目前使用的公關名單管理工具：${currentToolDisplay}
每季活動數量：${formData.eventsPerQuarter || 'N/A'}
單場貴賓名單規模：${formData.guestListSize || 'N/A'}
系統整合需求：${formData.integrationNeeds.length > 0 ? formData.integrationNeeds.join(', ') : 'N/A'}

提交時間：${new Date().toLocaleString(locale === 'tc' ? 'zh-TW' : locale === 'en' ? 'en-US' : locale === 'ja' ? 'ja-JP' : 'zh-CN')}
      `.trim();

      console.log('Enterprise Inquiry Submitted:', {
        subject: emailSubject,
        body: emailBody,
        to: 'contact@inviti.vip',
        cc: formData.email
      });

      setIsSubmitting(false);
      onClose();
      toast.success(t.enterpriseInquiry.successMessage, {
        duration: 5000,
        action: {
          label: t.enterpriseInquiry.viewInbox,
          onClick: () => window.open(`mailto:${formData.email}`, '_blank')
        }
      });
    }, 1000);
  };

  const handleIntegrationToggle = (value: string) => {
    setFormData(prev => ({
      ...prev,
      integrationNeeds: prev.integrationNeeds.includes(value)
        ? prev.integrationNeeds.filter(v => v !== value)
        : [...prev.integrationNeeds, value]
    }));
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
          <TitleComponent className="text-gray-900 mb-1">{t.enterpriseInquiry.title}</TitleComponent>
          <DescriptionComponent className="text-sm text-gray-600">
            {t.enterpriseInquiry.subtitle || '填寫以下資料，我們的團隊將盡快與您聯繫'}
          </DescriptionComponent>
        </div>
        <button
          onClick={onClose}
          className="min-w-[32px] min-h-[32px] p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          aria-label={t.enterpriseInquiry.close}
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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company & Contact Section */}
            <div className="space-y-4">
              <h3 className="text-sm text-gray-900">{t.enterpriseInquiry.companyInfoTitle || '公司資訊'}</h3>
              
              {/* Company Name */}
              <div>
                <label className="block text-sm mb-1.5 text-gray-700">
                  {t.enterpriseInquiry.companyName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => {
                    setFormData({ ...formData, companyName: e.target.value });
                    if (errors.companyName) {
                      setErrors({ ...errors, companyName: undefined });
                    }
                  }}
                  placeholder={t.enterpriseInquiry.companyNamePlaceholder}
                  className={`w-full px-3 py-2 border rounded text-sm ${
                    errors.companyName ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-gray-300`}
                />
                {errors.companyName && (
                  <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>
                )}
              </div>

              {/* Company Website */}
              <div>
                <label className="block text-sm mb-1.5 text-gray-700">
                  {t.enterpriseInquiry.companyWebsite}
                </label>
                <input
                  type="text"
                  value={formData.companyWebsite}
                  onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                  placeholder={t.enterpriseInquiry.companyWebsitePlaceholder}
                  className="w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              {/* Contact Name */}
              <div>
                <label className="block text-sm mb-1.5 text-gray-700">
                  {t.enterpriseInquiry.contactName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.contactName}
                  onChange={(e) => {
                    setFormData({ ...formData, contactName: e.target.value });
                    if (errors.contactName) {
                      setErrors({ ...errors, contactName: undefined });
                    }
                  }}
                  placeholder={t.enterpriseInquiry.contactNamePlaceholder}
                  className={`w-full px-3 py-2 border rounded text-sm ${
                    errors.contactName ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-gray-300`}
                />
                {errors.contactName && (
                  <p className="text-xs text-red-500 mt-1">{errors.contactName}</p>
                )}
              </div>

              {/* Job Title - Now Required */}
              <div>
                <label className="block text-sm mb-1.5 text-gray-700">
                  {t.enterpriseInquiry.jobTitle} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => {
                    setFormData({ ...formData, jobTitle: e.target.value });
                    if (errors.jobTitle) {
                      setErrors({ ...errors, jobTitle: undefined });
                    }
                  }}
                  placeholder={t.enterpriseInquiry.jobTitlePlaceholder}
                  className={`w-full px-3 py-2 border rounded text-sm ${
                    errors.jobTitle ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-gray-300`}
                />
                {errors.jobTitle && (
                  <p className="text-xs text-red-500 mt-1">{errors.jobTitle}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-1.5 text-gray-700">
                  {t.enterpriseInquiry.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) {
                      setErrors({ ...errors, email: undefined });
                    }
                  }}
                  placeholder={t.enterpriseInquiry.emailPlaceholder}
                  className={`w-full px-3 py-2 border rounded text-sm ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-gray-300`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone - Now Required */}
              <div>
                <label className="block text-sm mb-1.5 text-gray-700">
                  {t.enterpriseInquiry.phone} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) {
                      setErrors({ ...errors, phone: undefined });
                    }
                  }}
                  placeholder={t.enterpriseInquiry.phonePlaceholder}
                  className={`w-full px-3 py-2 border rounded text-sm ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-gray-300`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Use Case & Scale Section */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-sm text-gray-900">{t.enterpriseInquiry.useCaseTitle || '使用情境'}</h3>
              
              {/* Current Tool - Now Required with Select Component */}
              <div>
                <label className="block text-sm mb-1.5 text-gray-700">
                  {t.enterpriseInquiry.currentTool} <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.currentTool}
                  onValueChange={(value) => {
                    setFormData({ ...formData, currentTool: value, currentToolOther: '' });
                    if (errors.currentTool) {
                      setErrors({ ...errors, currentTool: undefined, currentToolOther: undefined });
                    }
                  }}
                >
                  <SelectTrigger 
                    className={`w-full ${
                      errors.currentTool ? 'border-red-500' : ''
                    }`}
                  >
                    <SelectValue placeholder={t.enterpriseInquiry.currentToolPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spreadsheet">
                      {t.enterpriseInquiry.currentToolOptions.spreadsheet}
                    </SelectItem>
                    <SelectItem value="crm">
                      {t.enterpriseInquiry.currentToolOptions.crm}
                    </SelectItem>
                    <SelectItem value="selfBuilt">
                      {t.enterpriseInquiry.currentToolOptions.selfBuilt}
                    </SelectItem>
                    <SelectItem value="other">
                      {t.enterpriseInquiry.currentToolOptions.other}
                    </SelectItem>
                    <SelectItem value="none">
                      {t.enterpriseInquiry.currentToolOptions.none}
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.currentTool && (
                  <p className="text-xs text-red-500 mt-1">{errors.currentTool}</p>
                )}
              </div>

              {/* Current Tool Other - Conditional Field */}
              {formData.currentTool === 'other' && (
                <div>
                  <label className="block text-sm mb-1.5 text-gray-700">
                    {t.enterpriseInquiry.currentToolOther} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.currentToolOther}
                    onChange={(e) => {
                      setFormData({ ...formData, currentToolOther: e.target.value });
                      if (errors.currentToolOther) {
                        setErrors({ ...errors, currentToolOther: undefined });
                      }
                    }}
                    placeholder={t.enterpriseInquiry.currentToolOtherPlaceholder}
                    className={`w-full px-3 py-2 border rounded text-sm ${
                      errors.currentToolOther ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-gray-300`}
                  />
                  {errors.currentToolOther && (
                    <p className="text-xs text-red-500 mt-1">{errors.currentToolOther}</p>
                  )}
                </div>
              )}

              {/* Events Per Quarter */}
              <div>
                <label className="block text-sm mb-1.5 text-gray-700">
                  {t.enterpriseInquiry.eventsPerQuarter}
                </label>
                <div className="space-y-2">
                  {['range1', 'range2', 'range3', 'range4'].map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="eventsPerQuarter"
                        value={range}
                        checked={formData.eventsPerQuarter === range}
                        onChange={(e) => setFormData({ ...formData, eventsPerQuarter: e.target.value })}
                        className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-2 focus:ring-gray-300"
                      />
                      <span className="text-sm text-gray-700">
                        {t.enterpriseInquiry.eventsPerQuarterOptions[range as keyof typeof t.enterpriseInquiry.eventsPerQuarterOptions]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Guest List Size */}
              <div>
                <label className="block text-sm mb-1.5 text-gray-700">
                  {t.enterpriseInquiry.guestListSize}
                </label>
                <div className="space-y-2">
                  {['small', 'medium', 'large', 'extraLarge'].map((size) => (
                    <label key={size} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="guestListSize"
                        value={size}
                        checked={formData.guestListSize === size}
                        onChange={(e) => setFormData({ ...formData, guestListSize: e.target.value })}
                        className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-2 focus:ring-gray-300"
                      />
                      <span className="text-sm text-gray-700">
                        {t.enterpriseInquiry.guestListSizeOptions[size as keyof typeof t.enterpriseInquiry.guestListSizeOptions]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Integration Needs */}
              <div>
                <label className="block text-sm mb-1.5 text-gray-700">
                  {t.enterpriseInquiry.integrationNeeds}
                </label>
                <div className="space-y-2">
                  {['ticketing', 'crm', 'email', 'other'].map((integration) => (
                    <label key={integration} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.integrationNeeds.includes(integration)}
                        onChange={() => handleIntegrationToggle(integration)}
                        className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-gray-300"
                      />
                      <span className="text-sm text-gray-700">
                        {t.enterpriseInquiry.integrationOptions[integration as keyof typeof t.enterpriseInquiry.integrationOptions]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="pt-4 border-t border-gray-200">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => {
                    setFormData({ ...formData, consent: e.target.checked });
                    if (errors.consent) {
                      setErrors({ ...errors, consent: undefined });
                    }
                  }}
                  className={`w-4 h-4 mt-0.5 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-gray-300 ${
                    errors.consent ? 'border-red-500' : ''
                  }`}
                />
                <span className={`text-sm ${errors.consent ? 'text-red-500' : 'text-gray-700'}`}>
                  {t.enterpriseInquiry.consent} <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-red-500 mt-1 ml-6">{errors.consent}</p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Footer - Fixed */}
      <div className="flex-shrink-0 border-t border-gray-200 pt-4 space-y-3 bg-white"
        style={{ paddingBottom: isMobile ? '16px' : '0' }}
      >
        <WireframeButton
          variant="primary"
          size={isMobile ? 'sm' : 'md'}
          className="w-full"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? t.enterpriseInquiry.submitting : t.enterpriseInquiry.submit}
        </WireframeButton>
        <p className="text-xs text-center text-gray-500">
          {t.enterpriseInquiry.orEmail}
        </p>
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
