// Language Switcher for 7Planner Website
// Supports Chinese (Simplified) and English

(function() {
    'use strict';
    
    // Language data storage
    const translations = {
        zh: {
            // Navigation
            'nav-home': '首页',
            'nav-support': '支持中心',
            'nav-privacy': '隐私政策',
            'nav-brand': '全能助理',
            
            // Privacy Policy
            'privacy-title': '全能助理 隐私政策',
            'privacy-effective': '生效日期：',
            'privacy-updated': '最后更新：',
            'privacy-version': '应用版本：',
            'privacy-languages': '支持语言：',
            'privacy-important': '重要提示：',
            'privacy-offline': '是一款完全离线的任务管理应用。我们不会收集、存储或传输您的任何个人数据到我们的服务器。本应用现已支持全球发布，包括中国和所有其他国家。🌍',
            'privacy-section1': '1. 信息收集',
            'privacy-section1-1': '1.1 我们收集的信息',
            'privacy-section1-1-desc': '在您的设备本地存储以下信息：',
            'privacy-section1-2': '1.2 我们不收集的信息',
            'privacy-section1-2-desc': '我们不会收集：',
            'privacy-section2': '2. 数据存储',
            'privacy-section2-1': '2.1 本地存储',
            'privacy-section2-1-desc': '所有数据都存储在您的设备本地：',
            'privacy-section2-2': '2.2 数据安全',
            'privacy-section2-2-desc': '我们采用以下措施保护您的数据：',
            'privacy-section3': '3. 数据使用',
            'privacy-section3-1': '3.1 使用目的',
            'privacy-section3-1-desc': '我们使用收集的数据仅用于：',
            'privacy-section3-2': '3.2 数据共享',
            'privacy-section3-2-desc': '我们不会与第三方共享您的数据：',
            'privacy-section4': '4. 第三方服务',
            'privacy-section4-1': '4.1 Apple 服务',
            'privacy-section4-1-desc': '使用以下 Apple 服务：',
            'privacy-section4-2': '4.2 权限使用',
            'privacy-section4-2-desc': '应用可能请求以下权限：',
            'privacy-section5': '5. 数据控制',
            'privacy-section5-1': '5.1 您的权利',
            'privacy-section5-1-desc': '您拥有以下权利：',
            'privacy-section5-2': '5.2 数据删除',
            'privacy-section5-2-desc': '您可以通过以下方式删除数据：',
            'privacy-section6': '6. 儿童隐私',
            'privacy-section7': '7. 隐私政策变更',
            'privacy-section8': '8. 下载应用',
            'privacy-section9': '9. 联系我们',
            'privacy-section10': '10. 法律声明',
            'privacy-section10-desc': '此隐私政策受中华人民共和国法律管辖。如果您不同意此隐私政策的任何条款，请不要使用我们的应用。',
            'privacy-section6-desc': '适合所有年龄段的用户使用。我们不会故意收集 13 岁以下儿童的个人信息。如果您是家长或监护人，发现您的孩子向我们提供了个人信息，请联系我们。',
            'privacy-section7-desc': '我们可能会不时更新此隐私政策。任何变更都会在此页面上发布，并更新"最后更新"日期。我们建议您定期查看此隐私政策以了解任何变更。',
            'privacy-section8-desc': '已在 App Store 免费上线！',
            'privacy-section8-button': '在 App Store 下载',
            'privacy-section9-desc': '如果您对此隐私政策有任何疑问或建议，请通过以下方式联系我们：',
            'privacy-section9-official': '官方网站：',
            'privacy-section9-support': '支持页面：',
            'privacy-section9-email': '邮箱：',
            'privacy-section9-feedback': '应用内反馈：',
            'privacy-section9-feedback-desc': '在应用设置中提交反馈',
            'privacy-data1': '任务数据：',
            'privacy-data1-desc': '您创建的任务、提醒、角色管理信息',
            'privacy-data2': '用户偏好：',
            'privacy-data2-desc': '应用设置、通知偏好、主题选择',
            'privacy-data3': '设备信息：',
            'privacy-data3-desc': '设备型号、操作系统版本（仅用于应用功能优化）',
            'privacy-data4': '账户信息：',
            'privacy-data4-desc': '邮箱或用户名（用于登录验证，仅在本地存储）',
            'privacy-no-collect1': '个人身份信息（姓名、邮箱、电话号码等）到外部服务器',
            'privacy-no-collect2': '位置信息',
            'privacy-no-collect3': '网络活动数据',
            'privacy-no-collect4': '任何敏感个人信息到服务器',
            'privacy-storage1': '使用 Hive 数据库进行本地数据存储',
            'privacy-storage2': '数据完全在您的设备上，不会上传到任何服务器',
            'privacy-storage3': '您可以随时通过应用内的数据管理功能导出或删除数据',
            'privacy-security1': '本地加密存储',
            'privacy-security2': '生物识别认证（Face ID/Touch ID）',
            'privacy-security3': 'Apple Sign-In 安全登录',
            'privacy-security4': '密码哈希加密存储',
            'privacy-usage1': '提供任务管理功能',
            'privacy-usage2': '发送本地通知提醒',
            'privacy-usage3': '改善应用性能和用户体验',
            'privacy-usage4': '提供多用户支持',
            'privacy-sharing1': '不会向第三方出售、交易或转让数据',
            'privacy-sharing2': '不会与广告商共享数据',
            'privacy-sharing3': '不会与数据分析公司共享数据',
            'privacy-apple1': 'Apple Sign-In：',
            'privacy-apple1-desc': '用于安全的用户身份验证',
            'privacy-apple2': '本地通知：',
            'privacy-apple2-desc': '用于发送任务提醒',
            'privacy-apple3': '生物识别认证：',
            'privacy-apple3-desc': '用于应用安全访问',
            'privacy-permission1': '通知权限：',
            'privacy-permission1-desc': '用于发送任务提醒',
            'privacy-permission2': '相机权限：',
            'privacy-permission2-desc': '用于头像拍照（可选）',
            'privacy-permission3': '相册权限：',
            'privacy-permission3-desc': '用于头像选择（可选）',
            'privacy-rights1': '查看和编辑您的数据',
            'privacy-rights2': '导出您的数据',
            'privacy-rights3': '删除您的数据',
            'privacy-rights4': '管理通知设置',
            'privacy-delete1': '在应用内删除特定任务或数据',
            'privacy-delete2': '重置应用数据',
            'privacy-delete3': '卸载应用（将删除所有本地数据）',
            'privacy-footer-updated': '本隐私政策最后更新于',
            'privacy-footer-back': '返回首页',
            'privacy-footer-support': '支持中心',
            
            // Marketing Page
            'marketing-title': '全能助理',
            'marketing-subtitle': '使命 · 角色 · 目标 · 任务管理应用',
            'marketing-tagline': '让生活更有序，让目标更清晰 | 现已全球发布 🌍 | 支持中文和英文',
            'marketing-feature1-title': '🎯 角色管理',
            'marketing-feature1-desc': '定义和管理您生活中的各个角色（家庭、工作、个人发展等），实现生活角色的平衡管理。',
            'marketing-feature2-title': '📋 智能任务规划',
            'marketing-feature2-desc': '创建和管理任务，支持日度、周度、月度、季度和年度任务规划，满足不同场景需求。',
            'marketing-feature3-title': '⏰ 智能提醒系统',
            'marketing-feature3-desc': '多层次的提醒系统，包括每日提醒、精确时间提醒和提前提醒，确保重要任务不遗漏。',
            'marketing-feature4-title': '📊 可视化规划',
            'marketing-feature4-desc': '提供年度、季度、月度和周度视图，直观展示您的任务安排和完成情况。',
            'marketing-feature5-title': '🔐 安全隐私',
            'marketing-feature5-desc': '完全离线存储，数据安全保存在您的设备本地，支持生物识别和Apple Sign-In安全登录。',
            'marketing-feature6-title': '👥 多用户支持',
            'marketing-feature6-desc': '支持多用户管理，每个用户可以独立管理自己的任务和角色，适合家庭共享使用。',
            'marketing-cta-title': '开始使用 全能助理',
            'marketing-cta-desc': '在 App Store 免费下载并开始规划您的生活',
            'marketing-cta-global': '🌍 现已支持全球发布，包括中国和所有其他国家',
            'marketing-cta-bilingual': '🌐 完整双语支持：中文（简体）和 English',
            'marketing-cta-version': '版本 1.0.5+12 - 国际发布版',
            'marketing-cta-download': '在 App Store 下载',
            'marketing-cta-support': '获取支持',
            'marketing-cta-privacy': '隐私政策',
            
            // Support Page
            'support-title': '全能助理 支持中心',
            'support-welcome': '欢迎使用',
            'support-quick-help': '快速帮助：',
            'support-quick-help-desc': '如果您在使用过程中遇到任何问题，请查看下面的常见问题解答或直接联系我们。',
            'support-faq': '📱 常见问题解答',
            'support-faq1-q': 'Q: 如何创建新任务？',
            'support-faq1-a': 'A: 点击主界面的"+"按钮，选择任务类型，填写任务详情，设置提醒时间即可。',
            'support-faq2-q': 'Q: 如何设置生活角色？',
            'support-faq2-a': 'A: 进入"角色管理"页面，点击"添加角色"，选择角色类型并自定义名称。',
            'support-faq3-q': 'Q: 如何开启通知提醒？',
            'support-faq3-a': 'A: 进入"设置" → "通知设置"，开启相应的提醒类型并设置提醒时间。',
            'support-faq4-q': 'Q: 如何切换用户？',
            'support-faq4-a': 'A: 双击应用图标或进入"个人中心" → "用户管理"进行用户切换。',
            'support-faq5-q': 'Q: 数据会丢失吗？',
            'support-faq5-a': 'A: 不会。所有数据都安全存储在您的设备本地，不会上传到任何服务器。',
            'support-guide': '🔧 功能指南',
            'support-troubleshoot': '🛠️ 故障排除',
            'support-download': '📥 下载应用',
            'support-contact': '📞 联系我们',
            'support-feedback': '📝 反馈建议',
            'support-changelog': '🔄 更新日志',
            'support-footer-updated': '最后更新：',
            'support-footer-tagline': '支持中心 - 让生活更有序 | 现已支持全球发布',
            
            // Common
            'lang-zh': '中文',
            'lang-en': 'English',
            'footer-official': '官方网站',
            'footer-privacy': '隐私政策',
            'footer-support': '支持中心',
            'footer-contact': '联系我们',
            'footer-rights': 'All rights reserved.'
        },
        en: {
            // Navigation
            'nav-home': 'Home',
            'nav-support': 'Support',
            'nav-privacy': 'Privacy Policy',
            'nav-brand': '7Planner',
            
            // Privacy Policy
            'privacy-title': '7Planner Privacy Policy',
            'privacy-effective': 'Effective Date:',
            'privacy-updated': 'Last Updated:',
            'privacy-version': 'App Version:',
            'privacy-languages': 'Supported Languages:',
            'privacy-important': 'Important Notice:',
            'privacy-offline': 'is a completely offline task management application. We do not collect, store, or transmit any of your personal data to our servers. This app now supports global release, including China and all other countries. 🌍',
            'privacy-section1': '1. Information Collection',
            'privacy-section1-1': '1.1 Information We Collect',
            'privacy-section1-1-desc': 'stores the following information locally on your device:',
            'privacy-section1-2': '1.2 Information We Do NOT Collect',
            'privacy-section1-2-desc': 'We do not collect:',
            'privacy-section2': '2. Data Storage',
            'privacy-section2-1': '2.1 Local Storage',
            'privacy-section2-1-desc': 'All data is stored locally on your device:',
            'privacy-section2-2': '2.2 Data Security',
            'privacy-section2-2-desc': 'We use the following measures to protect your data:',
            'privacy-section3': '3. Data Usage',
            'privacy-section3-1': '3.1 Purpose of Use',
            'privacy-section3-1-desc': 'We use collected data only for:',
            'privacy-section3-2': '3.2 Data Sharing',
            'privacy-section3-2-desc': 'We do not share your data with third parties:',
            'privacy-section4': '4. Third-Party Services',
            'privacy-section4-1': '4.1 Apple Services',
            'privacy-section4-1-desc': 'uses the following Apple services:',
            'privacy-section4-2': '4.2 Permission Usage',
            'privacy-section4-2-desc': 'The app may request the following permissions:',
            'privacy-section5': '5. Data Control',
            'privacy-section5-1': '5.1 Your Rights',
            'privacy-section5-1-desc': 'You have the following rights:',
            'privacy-section5-2': '5.2 Data Deletion',
            'privacy-section5-2-desc': 'You can delete data in the following ways:',
            'privacy-section6': '6. Children\'s Privacy',
            'privacy-section7': '7. Privacy Policy Changes',
            'privacy-section8': '8. Download App',
            'privacy-section9': '9. Contact Us',
            'privacy-section10': '10. Legal Statement',
            'privacy-section10-desc': 'This privacy policy is governed by the laws of the People\'s Republic of China. If you do not agree to any terms of this privacy policy, please do not use our app.',
            'privacy-section6-desc': 'is suitable for users of all ages. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and discover that your child has provided us with personal information, please contact us.',
            'privacy-section7-desc': 'We may update this privacy policy from time to time. Any changes will be posted on this page and the "Last Updated" date will be updated. We recommend that you review this privacy policy regularly to stay informed of any changes.',
            'privacy-section8-desc': 'is now available for free on the App Store!',
            'privacy-section8-button': 'Download on App Store',
            'privacy-section9-desc': 'If you have any questions or suggestions about this privacy policy, please contact us through the following methods:',
            'privacy-section9-official': 'Official Website:',
            'privacy-section9-support': 'Support Page:',
            'privacy-section9-email': 'Email:',
            'privacy-section9-feedback': 'In-App Feedback:',
            'privacy-section9-feedback-desc': 'Submit feedback in app settings',
            'privacy-data1': 'Task Data:',
            'privacy-data1-desc': 'Tasks, reminders, and role management information you create',
            'privacy-data2': 'User Preferences:',
            'privacy-data2-desc': 'App settings, notification preferences, theme selection',
            'privacy-data3': 'Device Information:',
            'privacy-data3-desc': 'Device model, operating system version (only for app functionality optimization)',
            'privacy-data4': 'Account Information:',
            'privacy-data4-desc': 'Email or username (for login verification, stored locally only)',
            'privacy-no-collect1': 'Personal identification information (name, email, phone number, etc.) to external servers',
            'privacy-no-collect2': 'Location information',
            'privacy-no-collect3': 'Network activity data',
            'privacy-no-collect4': 'Any sensitive personal information to servers',
            'privacy-storage1': 'Use Hive database for local data storage',
            'privacy-storage2': 'Data is completely on your device and will not be uploaded to any server',
            'privacy-storage3': 'You can export or delete data at any time through the data management function in the app',
            'privacy-security1': 'Local encrypted storage',
            'privacy-security2': 'Biometric authentication (Face ID/Touch ID)',
            'privacy-security3': 'Apple Sign-In secure login',
            'privacy-security4': 'Password hash encrypted storage',
            'privacy-usage1': 'Provide task management functionality',
            'privacy-usage2': 'Send local notification reminders',
            'privacy-usage3': 'Improve app performance and user experience',
            'privacy-usage4': 'Provide multi-user support',
            'privacy-sharing1': 'Do not sell, trade, or transfer data to third parties',
            'privacy-sharing2': 'Do not share data with advertisers',
            'privacy-sharing3': 'Do not share data with data analytics companies',
            'privacy-apple1': 'Apple Sign-In:',
            'privacy-apple1-desc': 'For secure user authentication',
            'privacy-apple2': 'Local Notifications:',
            'privacy-apple2-desc': 'For sending task reminders',
            'privacy-apple3': 'Biometric Authentication:',
            'privacy-apple3-desc': 'For secure app access',
            'privacy-permission1': 'Notification Permission:',
            'privacy-permission1-desc': 'For sending task reminders',
            'privacy-permission2': 'Camera Permission:',
            'privacy-permission2-desc': 'For taking profile photos (optional)',
            'privacy-permission3': 'Photo Library Permission:',
            'privacy-permission3-desc': 'For selecting profile photos (optional)',
            'privacy-rights1': 'View and edit your data',
            'privacy-rights2': 'Export your data',
            'privacy-rights3': 'Delete your data',
            'privacy-rights4': 'Manage notification settings',
            'privacy-delete1': 'Delete specific tasks or data within the app',
            'privacy-delete2': 'Reset app data',
            'privacy-delete3': 'Uninstall the app (will delete all local data)',
            'privacy-footer-updated': 'This privacy policy was last updated on',
            'privacy-footer-back': 'Back to Home',
            'privacy-footer-support': 'Support Center',
            
            // Marketing Page
            'marketing-title': '7Planner',
            'marketing-subtitle': 'Mission · Role · Goal · Task Management App',
            'marketing-tagline': 'Make life more organized, make goals clearer | Now globally released 🌍 | Supports Chinese and English',
            'marketing-feature1-title': '🎯 Role Management',
            'marketing-feature1-desc': 'Define and manage various roles in your life (family, work, personal development, etc.) to achieve balanced life role management.',
            'marketing-feature2-title': '📋 Smart Task Planning',
            'marketing-feature2-desc': 'Create and manage tasks with support for daily, weekly, monthly, quarterly, and yearly task planning to meet different scenario needs.',
            'marketing-feature3-title': '⏰ Smart Reminder System',
            'marketing-feature3-desc': 'Multi-level reminder system including daily reminders, exact time reminders, and advance reminders to ensure important tasks are not missed.',
            'marketing-feature4-title': '📊 Visual Planning',
            'marketing-feature4-desc': 'Provides yearly, quarterly, monthly, and weekly views to intuitively display your task arrangements and completion status.',
            'marketing-feature5-title': '🔐 Security & Privacy',
            'marketing-feature5-desc': 'Completely offline storage, data securely saved on your local device, supports biometric authentication and Apple Sign-In secure login.',
            'marketing-feature6-title': '👥 Multi-User Support',
            'marketing-feature6-desc': 'Supports multi-user management, each user can independently manage their own tasks and roles, suitable for family sharing.',
            'marketing-cta-title': 'Get Started with 7Planner',
            'marketing-cta-desc': 'Download for free on the App Store and start planning your life',
            'marketing-cta-global': '🌍 Now supports global release, including China and all other countries',
            'marketing-cta-bilingual': '🌐 Full bilingual support: Chinese (Simplified) and English',
            'marketing-cta-version': 'Version 1.0.5+12 - International Release',
            'marketing-cta-download': 'Download on App Store',
            'marketing-cta-support': 'Get Support',
            'marketing-cta-privacy': 'Privacy Policy',
            
            // Support Page
            'support-title': '7Planner Support Center',
            'support-welcome': 'Welcome to',
            'support-quick-help': 'Quick Help:',
            'support-quick-help-desc': 'If you encounter any issues while using the app, please check the FAQ below or contact us directly.',
            'support-faq': '📱 Frequently Asked Questions',
            'support-faq1-q': 'Q: How do I create a new task?',
            'support-faq1-a': 'A: Click the "+" button on the main interface, select task type, fill in task details, and set reminder time.',
            'support-faq2-q': 'Q: How do I set up life roles?',
            'support-faq2-a': 'A: Go to "Role Management" page, click "Add Role", select role type and customize the name.',
            'support-faq3-q': 'Q: How do I enable notification reminders?',
            'support-faq3-a': 'A: Go to "Settings" → "Notification Settings", enable the corresponding reminder types and set reminder times.',
            'support-faq4-q': 'Q: How do I switch users?',
            'support-faq4-a': 'A: Double-tap the app icon or go to "Personal Center" → "User Management" to switch users.',
            'support-faq5-q': 'Q: Will data be lost?',
            'support-faq5-a': 'A: No. All data is securely stored locally on your device and will not be uploaded to any server.',
            'support-guide': '🔧 Feature Guide',
            'support-troubleshoot': '🛠️ Troubleshooting',
            'support-download': '📥 Download App',
            'support-contact': '📞 Contact Us',
            'support-feedback': '📝 Feedback & Suggestions',
            'support-changelog': '🔄 Update Log',
            'support-footer-updated': 'Last Updated:',
            'support-footer-tagline': 'Support Center - Make life more organized | Now supports global release',
            
            // Common
            'lang-zh': '中文',
            'lang-en': 'English',
            'footer-official': 'Official Website',
            'footer-privacy': 'Privacy Policy',
            'footer-support': 'Support Center',
            'footer-contact': 'Contact Us',
            'footer-rights': 'All rights reserved.'
        }
    };
    
    // Get current language from localStorage or browser preference
    function getCurrentLanguage() {
        const saved = localStorage.getItem('7planner-lang');
        if (saved) return saved;
        
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) return 'zh';
        return 'en';
    }
    
    // Set language
    function setLanguage(lang) {
        localStorage.setItem('7planner-lang', lang);
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        updatePageContent(lang);
    }
    
    // Update page content based on language
    function updatePageContent(lang) {
        const t = translations[lang];
        if (!t) return;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.textContent = t[key];
            }
        });
        
        // Update elements with data-i18n-html attribute (for HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });
        
        // Update page title
        const pageTitle = document.querySelector('[data-i18n-title]');
        if (pageTitle && t[pageTitle.getAttribute('data-i18n-title')]) {
            document.title = t[pageTitle.getAttribute('data-i18n-title')];
        }
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && t['meta-description']) {
            metaDesc.setAttribute('content', t['meta-description']);
        }
    }
    
    // Initialize language on page load
    function initLanguage() {
        const lang = getCurrentLanguage();
        setLanguage(lang);
        
        // Update button text if exists
        updateLanguageButton(lang);
    }
    
    // Update language button text
    function updateLanguageButton(lang) {
        const langBtn = document.getElementById('current-lang');
        if (langBtn) {
            langBtn.textContent = lang === 'zh' ? '中文' : 'English';
        }
    }
    
    // Toggle language
    function toggleLanguage() {
        const current = getCurrentLanguage();
        const newLang = current === 'zh' ? 'en' : 'zh';
        setLanguage(newLang);
        updateLanguageButton(newLang);
    }
    
    // Export functions to window
    window.langSwitcher = {
        setLanguage: setLanguage,
        toggleLanguage: toggleLanguage,
        getCurrentLanguage: getCurrentLanguage
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguage);
    } else {
        initLanguage();
    }
})();

