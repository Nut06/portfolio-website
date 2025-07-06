"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import emailjs from "emailjs-com"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  User,
  Code,
  Database,
  Brain,
  Palette,
  Globe,
  Network,
  Languages,
} from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"
import SplitText from "@/components/ui/splittext"
import GlareHover from "@/components/ui/glarehover"
import TiltedCard from "@/components/TiltedCard"
import BlurText from "@/components/BlurText"
import ShinyText from "@/components/ShinyText"
import WebShowcaseSection from "@/components/WebShowcase/WebShowcaseSection"

export default function Portfolio() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send(
        "service_h95igut",
        "template_nlw5y6q",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "D6eCmohk0xYspVgtF"
      )
      setSent(true)
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" })
    } catch (err) {
      alert("ส่งอีเมลไม่สำเร็จ กรุณาลองใหม่")
    }
    setSending(false)
  }
  const [language, setLanguage] = useState<"th" | "en">("th")

  const translations = {
    en: {
      hero: {
        greeting: "Hello, I'm Chet",
        description: "A 3rd year Computer Science student at KMITL passionate about development with a foundation in Software Engineering, Data Science, UX/UI, and Computer Network.",
        viewProjects: "View Projects",
        contactMe: "Contact Me",
      },
      about: {
        title: "About Me",
        paragraph1:
          "I'm a dedicated Computer Science student passionate about creating innovative solutions through technology. I have experience working on projects related to Software Engineering, Data Science, UX/UI, and Computer Network.",
        paragraph2:
          "I'm happy to provide consultation for business owners or those looking for websites designed and coded according to client requirements with security in mind.",
        paragraph3:
          "",
        uploadText: "",
      },
      projects: {
        title: "My Projects",
        code: "Code",
        demo: "Demo",
        items: [
          {
            category: "Object-Oriented Programming (OOP)",
            title: "2D Cross Road",
            description:
              "A road-crossing simulation game for the elderly, developed in Java using object-oriented principles (OOP). Implements interfaces using JLabel and other UI components.",
            demoLink: "",
            githubLink: "",
          },
          {
            category: "Data Communication and Network",
            title: "NAT Project",
            description:
              "Send packets and capture packets to devices on different networks using Socket Programming and capture packets with Wireshark.",
            demoLink: "",
            githubLink: "",
          },
          {
            category: "Data Mining",
            title: "Stress Prediction System",
            description:
              "Prepared over 300k data points and extracted insights to build a model for classifying individuals at risk of stress using data mining processes, deployed on a web application.",
            demoLink: "https://strescheck.streamlit.app/",
            githubLink: "https://github.com/Nut06/Mental-Health-Prediction-System",
          },
          {
            category: "Deep Learning",
            title: "Emotion Classification from Voice",
            description:
              "Extracted insights from 4,000 audio files from 4 different sources, designed and developed a neural network to classify emotions from voice, and deployed on a web application.",
            demoLink: "https://anne1133-audio-classification-app-ska7gr.streamlit.app/",
            githubLink: "https://github.com/Nut06/Speech-Emotion-Classification",
          },
          {
            category: "UX/UI",
            title: "Cinema App Design",
            description:
              "Designed the user interface and user experience for a movie ticket booking website using Figma and created a design system for the project.",
            demoLink: "",
            githubLink: "https://www.figma.com/design/uO91DJpRpF0z7Pjx8O48du/Cinego_HCI?node-id=4-3&t=GlCUHG6OYUBBBwAy-1",
          },
          {
            category: "UX/UI",
            title: "Mobile App Task Management for Students",
            description:
              "Comprehensive design for a mobile application for student task management, including wireframes, prototypes, and user experience focusing on accessibility and user experience.",
            demoLink: "",
            githubLink: "https://www.figma.com/design/wfzuTFtOB0qctoXelI3tNE/Education-app?node-id=1-2&t=PMs1K9jTSrI2B7yK-1",
          },
          {
            category: "Web Development",
            title: "E-commerce Platform",
            description:
              "A full-stack e-commerce web application with user authentication, product catalog, shopping cart, and payment integration.",
            demoLink: "",
            githubLink: "",
          },
        ],
      },
      contact: {
        title: "Contact Me",
        subtitle: "Let's Connect",
        description:
          "I'm always interested in new opportunities, collaborations, and conversations about technology. Don't hesitate to reach out if you'd like to discuss a project or just say hello!",
        email: "Email",
        phone: "Phone",
        location: "Location",
        sendMessage: "Send a Message",
        messageDescription: "I'll get back to you as soon as possible.",
        firstName: "First Name",
        lastName: "Last Name",
        subject: "Subject",
        message: "Message",
        messagePlaceholder: "Tell me about your project or just say hello!",
        sendButton: "Send Message",
      },
      footer: "Built with Next.js and Tailwind CSS.",
    },
    th: {
      hero: {
        greeting: "สวัสดีครับ ผม เจษ",
        description: "นักศึกษา Computer Science ชั้นปีที่ 3 KMTIL ที่มีความหลงใหลในการพัฒนาและมีความรู้พื้นฐานด้าน Software, Data-Sci และ Cybersecurity",
        viewProjects: "College Projects",
        contactMe: "Contact Me",
      },
      about: {
        title: "About Me",
        paragraph1:
          "ผมเป็นนักศึกษา Computer Science(วิทยาการคอมพิวเตอร์)ที่มุ่งมั่นและมีความหลงใหลในการสร้างโซลูชันที่เป็นนวัตกรรมและเทคโนโลยีใหม่ๆ ผมมีความรู้พื้นฐานและเคยทำ Project เกียวกับ Software Engineering, Data-Sci, Ux/Ui และ Computer Network",
        paragraph2:
          "ผมยินดีให้คำปรึกษาสำหรับเจ้าของธุรกิจหรือผู้ที่กำลังมองหาเว็บไซต์ที่ออกแบบและ Code ตามความต้องการของผู้ว่าจ้างและมีความปลอดภัย",
        paragraph3:
          "",
        uploadText: "",
      },
      projects: {
        title: "Projects",
        code: "โค้ด",
        demo: "ตัวอย่าง",
        items: [
          {
            category: "การเขียนโปรแกรมเชิงวัตถุ (OOP)",
            title: "2d cross road",
            demolink:"",
            description:
              "เป็นเกมส์จำลองการข้ามถนนสำหรับผู้สูงอายุพัฒนาด้วยภาษา Java โดยใช้หลักการเชิงวัตถุ(OOP) ในการออกแบบและพัฒนาเกมส์ Implment Interface โดยใช้ Jlabel และ User Interface อื่นๆ",
            demoLink: "",
            githubLink: "",
          },
          {
            category: "การสื่อสารข้อมูลและเครือข่าย",
            title: "NAT Project",
            description:
              "ส่ง Packet และดักจับ Packet ไปยัง Device ที่อยู่คนละ Network โดยใช้ Socket Programming และ ดักจับ Packet ผ่าน Wiresharks",
            demoLink: "",
            githubLink: "",
          },
          {
            category: "Data Mining",
            title: "ระบบทำนายผู้ที่อาจมีภาวะความเครียด",
            description:
              "เตรียมข้อมูลกว่า 300k และหา Insight ของข้อมูลเพื่อนำมาใช้ในการสร้าง Model จำแนกผู้ที่มีภาวะความเครียด โดยใช้กระบวนการทาง Data Mining และ Deploy บน Web application",
            demoLink: "https://strescheck.streamlit.app/",
            githubLink: "https://github.com/Nut06/Mental-Health-Prediction-System",
          },
          {
            category: "Deep Learning",
            title: "ระบบจำแนกอารมณ์จากเสียง",
            description:
              "หา Insight จากข้อมูลเสียงจาก 4,000 ไฟล์เสียงจาก 4 แหล่งที่แตกต่างกัน ทำการออกแบบและพัฒนา Neural network เพื่อใช้ในการจำแนกอารมณ์จากเสียง และ Deploy บน Web application",
            demoLink: "https://anne1133-audio-classification-app-ska7gr.streamlit.app/",
            githubLink: "https://github.com/Nut06/Speech-Emotion-Classification",
          },
          {
            category: "UX/UI",
            title: "Cinema app Design",
            description:
              "ออกแบบ User Interface, User experience เว็บจองตั๋วหนัง ผ่านโปรแกรม Figma และจัดทำ Design Systems สำหรับ Project",
            demoLink: "https://www.figma.com/design/uO91DJpRpF0z7Pjx8O48du/Cinego_HCI?node-id=4-3&t=GlCUHG6OYUBBBwAy-1",
            githubLink: "",
          },
          {
            category: "UX/UI",
            title: "ออกแบบแอป Mobile app Task management สำหรับนักศึกษา",
            description:
              "ออกแบบที่ครอบคลุมสำหรับแอปพลิเคชันมือถือสำหรับการบริหารจัดการงานสำหรับนักศึกษา รวมถึง Wireframe Prototype และ User experience เน้นการเข้าถึงและประสบการณ์ผู้ใช้",
            demoLink: "https://www.figma.com/design/wfzuTFtOB0qctoXelI3tNE/Education-app?node-id=1-2&t=PMs1K9jTSrI2B7yK-1",
            githubLink: "",
          },
          {
            category: "Web development",
            title: "แพลตฟอร์มอีคอมเมิร์ซ",
            description:
              "แอปพลิเคชันเว็บอีคอมเมิร์ซแบบ full-stack พร้อมการยืนยันตัวตนผู้ใช้ แคตตาล็อกสินค้า ตะกร้าสินค้า และการรวมระบบชำระเงิน",
            demoLink: "",
            githubLink: "",
          },
        ],
      },
      contact: {
        title: "Contact Me",
        subtitle: "มาเชื่อมต่อกัน",
        description:
          "ผมสนใจโอกาสใหม่ๆ การร่วมมือ และการสนทนาเกี่ยวกับเทคโนโลยีเสมอ อย่าลังเลที่จะติดต่อมาหากคุณต้องการหารือเกี่ยวกับโครงการหรือแค่ทักทายกัน!",
        email: "อีเมล",
        phone: "โทรศัพท์",
        location: "ที่อยู่",
        sendMessage: "ส่งข้อความ",
        messageDescription: "ผมจะตอบกลับให้เร็วที่สุด",
        firstName: "ชื่อ",
        lastName: "นามสกุล",
        subject: "หัวข้อ",
        message: "ข้อความ",
        messagePlaceholder: "บอกผมเกี่ยวกับโครงการของคุณหรือแค่ทักทายกัน!",
        sendButton: "ส่งข้อความ",
      },
      footer: "สร้างด้วย Next.js และ Tailwind CSS",
    },
  }

  const t = translations[language]

  const projects = [
    {
      category: "Object-Oriented Programming (OOP)",
      icon: <Code className="w-6 h-6" />,
      title: "Lane Rush",
      description:
        "A comprehensive library management system built using Java with object-oriented principles. Features include book cataloging, member management, and borrowing system.",
      technologies: ["Java", "MySQL", "JavaFX", "JDBC"],
      image: "/image/oop.png",
    },
    {
      category: "Data Communication and Network",
      icon: <Network className="w-6 h-6" />,
      title: "Network Protocol Analyzer",
      description:
        "A network packet analyzer tool that captures and analyzes network traffic. Implements various network protocols and provides real-time monitoring capabilities.",
      technologies: ["Python", "Wireshark", "Socket Programming", "TCP/IP"],
      image: "/image/datacom.png",
    },
    {
      category: "Data Mining",
      icon: <Database className="w-6 h-6" />,
      title: "Customer Segmentation Analysis",
      description:
        "A data mining project that analyzes customer behavior patterns using clustering algorithms. Provides insights for targeted marketing strategies.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "K-means"],
      image: "/image/datamining.png",
    },
    {
      category: "Deep Learning",
      icon: <Brain className="w-6 h-6" />,
      title: "Image Classification Model",
      description:
        "A convolutional neural network for image classification tasks. Trained on custom datasets with data augmentation and transfer learning techniques.",
      technologies: ["Python", "TensorFlow", "Keras", "CNN"],
      image: "/image/deep_learning.png",
    },
    {
      category: "UX/UI",
      icon: <Palette className="w-6 h-6" />,
      title: "Web Design System",
      description:
        "A comprehensive design system for a mobile application including wireframes, prototypes, and user journey mapping. Focus on accessibility and user experience.",
      technologies: ["Figma", "Principle", "User Research"],
      image: "/image/cinego pic.png",
    }
    ,
    {
      category: "UX/UI",
      icon: <Palette className="w-6 h-6" />,
      title: "Mobile App Design System",
      description:
        "A comprehensive design system for a mobile application including wireframes, prototypes, and user journey mapping. Focus on accessibility and user experience.",
      technologies: ["Figma", "Principle", "User Research"],
      image: "/image/Flow ly (1).png",
    },
    {
      category: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce web application with user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]


  const scrollToAnimation = (target:string) => {
    const targetsection = document.getElementById(target)
    if (targetsection) {
      targetsection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-transparent to-orange-600/20">
          <div className="absolute top-6 right-6 z-20">
            <Button
              onClick={() => setLanguage(language === "en" ? "th" : "en")}
              variant="outline"
              size="sm"
              className="bg-white/90 backdrop-blur-sm border-orange-200 text-orange-600 hover:bg-orange-50 flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === "en" ? "ไทย" : "EN"}
            </Button>
          </div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <SplitText
              text={t.hero.greeting}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-orange-500 bg-clip-text mb-6"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            {/* <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-6">
              {t.hero.greeting}
            </h1> */}
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg"
                onClick={() => scrollToAnimation("projects")}
              >
                {t.hero.viewProjects}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg"
                onClick={() => scrollToAnimation("webdev")}
              >
                ดูผลงาน Webdev 🌐
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg"
                onClick={() => scrollToAnimation("contact")}
              >
                {t.hero.contactMe}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-5 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            <ShinyText 
              text={t.about.title}
              disabled={false}
              speed={3}
              className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            />
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
                <p>{t.about.paragraph3}</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-2">
                  <div className="w-full h-full rounded-full bg-white p-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                      {/* <User className="w-32 h-32 text-gray-400" /> */}
                      <Image
                        src="/image/My_profile.jpg"
                        alt="my_profile"
                        width={420}
                        height={320}
                        className="w-full h-full object-contain rounded-full"
                      />
                      <div className="absolute inset-0 rounded-full border-4 border-orange-400/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Web Development Showcase Section */}
      <section id="webdev">
        <WebShowcaseSection language={language}/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-5 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            <ShinyText 
              text={t.projects.title}
              disabled={false}
              speed={3}
              className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
            />
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-md">
            {t.projects.items.map((project, index) => (
              <TiltedCard
                key={index}
                category={project.category}
                title={project.title}
                description={project.description}
                technologies={projects[index].technologies}
                image={projects[index].image}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                icon={projects[index].icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t.contact.subtitle}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{t.contact.description}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{t.contact.email}</p>
                    <p className="text-gray-600">chetsadakon.chumpia@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{t.contact.phone}</p>
                    <p className="text-gray-600">093-398-0547</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{t.contact.location}</p>
                    <p className="text-gray-600">Ladkrabang, Bangkok Thailand</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/Nut06" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                </a>
                <a href="https://www.linkedin.com/in/chetsadakon-chumpia-034a53343/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                </a>
              </div>
            </div>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">{t.contact.sendMessage}</CardTitle>
                <CardDescription>{t.contact.messageDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} >
                  <div className="grid grid-cols-2 gap-4 ">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">{t.contact.firstName}</label>
                      <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" className="border-orange-200 focus:border-orange-400" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">{t.contact.lastName}</label>
                      <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" className="border-orange-200 focus:border-orange-400" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">{t.contact.email}</label>
                    <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className="border-orange-200 focus:border-orange-400" />
                  </div>
                  <div className="mt-3">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">{t.contact.subject}</label>
                    <Input name="subject" value={form.subject} onChange={handleChange} placeholder="Project Collaboration" className="border-orange-200 focus:border-orange-400" />
                  </div>
                  <div className="mt-3">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">{t.contact.message}</label>
                    <Textarea name="message" value={form.message} onChange={handleChange} placeholder={t.contact.messagePlaceholder} rows={5} className="border-orange-200 focus:border-orange-400" />
                  </div >
                  <Button type="submit" disabled={sending} className="w-full mt-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    {sending ? "Sending..." : t.contact.sendButton}
                  </Button>
                  {sent && <p className="text-green-600 mt-2">ส่งข้อความสำเร็จ!</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-orange-100">
            © {new Date().getFullYear()} [Chetsadakon Chumpia]. {t.footer}
          </p>
        </div>
      </footer>
    </div>
  )
}
