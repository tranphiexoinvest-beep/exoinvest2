import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    /*{, getAsset
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        
        {
          text: 'Article',
          href: getPermalink('gioi-thieu-nuoc-mam-truyen-thong-cana', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
        {
          text: 'Mô Hình Hoạt Động',
          href: getPermalink('gioi-thieu-nuoc-mam-truyen-thong-cana', 'post'),
        },
        {
          text: 'Hệ Sinh Thái',
          href: getPermalink('gioi-thieu-nuoc-mam-truyen-thong-cana', 'post'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },*/

    {
      text: 'Sản phẩm',
      href: getPermalink('/homes/SanPham'),
    },
    {
      text: 'Mua hàng',
      href: getPermalink('/homes/muahang'),
    },
    /*{
      text: 'Startup',
      href: getPermalink('/homes/startup'),
    },*/
    {
      text: 'Blog EXO',
      href: getBlogPermalink(),
    },
  ],
  /*actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],*/
  actions: [{ text: 'Tài khoản', href: 'https://exoinvest.vn', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Liên kết nhanh',
      links: [
        { text: 'Trang chủ', href: '#' },
        { text: 'Về chúng tôi', href: '#' },
        { text: 'Dự án', href: '#' },
        { text: 'Tin tức & Blog', href: getBlogPermalink() },
        { text: 'Liên hệ', href: '#' },
      ],
    },
    {
      title: 'Hỗ trợ',
      links: [{ text: 'Hướng dẫn', href: '#' }],
    },
    {
      title: 'Kinh doanh',
      links: [
        { text: 'Zalo', href: 'https://zalo.me/g/cvjyuf753' },
        { text: '+84.931.437.682', href: 'tell:+84931437682' },
      ],
    },
    {
      title: 'Giấy tờ',
      links: [
        { text: 'Điều khoản sử dụng', href: getPermalink('/terms') },
        { text: 'Chính sách bảo mật', href: getPermalink('/privacy') },
        { text: 'Mẫu hợp đồng', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Công Ty TNHH EXO Invest' },
    { text: 'MST: 0318908107' },
    //{ text: 'Terms', href: getPermalink('/terms') },
    //{ text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    /*{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },*/
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    © 2025 <a class="text-blue-600 underline dark:text-muted" href="#"> EXO Invest </a> · Đầu tư minh bạch, phát triển bền vững.
  `,
};
