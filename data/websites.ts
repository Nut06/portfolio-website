export interface Website {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  category: string;
  featured: boolean;
  createdAt: string;
}

const techstack = {
  ReactJS:"ReactJS",
  Figma:"Figma",
  TailwindCSS:"TailwindCSS",
  TypeScript:"TypeScript",
  HTML:"HTML",
  SQL:"SQL",
  ExpressJS:"ExpressJS",
  Supabase:"Supabase",
  JS:"JavaScript"
}

const category = {
  LandingPage: "Landing Page",
  WebApp: "Web App",
  Ecom: "E-commerce"
}


export const websites: Website[] = [
  {
    id: "1",
    slug: "ecommerce-store",
    title: "E-commerce Store",
    description: "ร้านค้าออนไลน์แบบครบครันพร้อมระบบตะกร้าสินค้า ชำระเงิน และจัดการสินค้าหลังบ้าน (Backend)",
    technologies: [techstack.ReactJS, techstack.TailwindCSS, techstack.TypeScript, techstack.SQL, techstack.ExpressJS, techstack.Supabase],
    image: "/images/websites/thumbnail/ecom_thumbnail.png",
    demoUrl: "/demos/ecommerce-store/index.html",
    category: category.Ecom,
    featured: true,
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    slug: "restaurant",
    title: "Restaurant Landing Page",
    description: "หน้าเว็บไซต์ร้านอาหารที่สวยงามพร้อมเมนู การจองโต๊ะ และแสดงรีวิว",
    technologies: [techstack.Figma, techstack.HTML, techstack.TailwindCSS, techstack.JS],
    image: "/images/websites/thumbnail/restaurance_thumbnail.png", 
    demoUrl: "/demos/restaurant/index.html",
    category: category.LandingPage,
    featured: true,
    createdAt: "2024-02-10"
  },
  {
    id: "3",
    slug: "cafe",
    title: "Cafe Website",
    description: "หน้าเว็บไซต์ร้านกาแฟนหรือคาเฟ่มีเมนูสำหรับสั่งซื้อ และจองเพื่อรับประทานที่ร้าน ออกแบบ ให้Responsiveรองรับทุกหน้าจอ",
    technologies: [techstack.Figma, techstack.HTML, techstack.TailwindCSS, techstack.JS],
    image: "/images/websites/thumbnail/cafe_thumbnail.png",
    demoUrl: "/demos/cafe/index.html",
    category: category.LandingPage,
    featured: true,
    createdAt: "2024-03-05"
  },
  {
    id: "4",
    slug: "barber",
    title: "Barber Website",
    description: "เว็บไซต์ Portfolio แบบ responsive พร้อม animations และ modern design",
    technologies: [techstack.Figma, techstack.HTML, techstack.TailwindCSS, techstack.JS],
    image: "/images/websites/thumbnail/barber_thumbnail.png",
    demoUrl: "/demos/barber/index.html",
    category: category.LandingPage,
    featured: true,
    createdAt: "2024-03-20"
  },
  {
    id: "5",
    slug: "gym",
    title: "Gym website",
    description: "แพลตฟอร์มบล็อกพร้อมระบบจัดการเนื้อหา และ SEO optimization",
    technologies: [techstack.Figma, techstack.HTML, techstack.TailwindCSS, techstack.JS],
    image: "/images/websites/thumbnail/gymweb_thumbnail.png",
    demoUrl: "/demos/gym/index.html",
    category: category.LandingPage,
    featured: true,
    createdAt: "2024-04-01"
  },
  {
    id: "6",
    slug: "realestate",
    title: "Real Estate Website",
    description: "แอปพลิเคชันจัดการงานพร้อม drag & drop และ real-time updates",
    technologies: [techstack.Figma, techstack.HTML, techstack.TailwindCSS, techstack.JS, techstack.SQL],
    image: "/images/websites/thumbnail/realestate_thumbnail.png",
    demoUrl: "/demos/real_estate/index.html",
    category: category.WebApp,
    featured: true,
    createdAt: "2024-04-15"
  },
  {
    id: "7",
    slug: "clinic",
    title: "Dental Clinic Website",
    description: "เว็บ clinick สำหรับธุรกิจความงามและสุขภาพ",
    technologies: ["Figma", "Framer"],
    image: "/images/websites/thumbnail/Dentalclinic_thumbnail.png",
    demoUrl: "/demos/task-manager/index.html",
    category: category.LandingPage,
    featured: false,
    createdAt: "2024-04-15"
  }
]; 