/* eslint-disable @next/next/no-img-element */

"use client"
import React,{useEffect,useState} from "react";
import CommentSection from "@/components/CommentSection";
import AuthoreCard from "@/components/AuthoreCard";

const posts = [
  {
    id: '1',
    title: "HTML: The Foundation of the Web",
    description: "HTML (Hypertext Markup Language) serves as the backbone of web development. It structures the content of web pages and defines elements like headings, paragraphs, links, and images. Without HTML, the web as we know it wouldn't exist. Learn how to build your first webpage by understanding the basic structure of HTML tags and attributes. This post will take you step-by-step through HTML essentials, including the structure of a simple webpage, the importance of semantic HTML, and how to ensure accessibility for all users.",
    date: "28/11/2024",
    image: "/images/1.jpg",
  },
  {
    id: '2',
    title: "CSS Secrets for Stunning Websites",
    description: "CSS (Cascading Style Sheets) controls the layout and appearance of a webpage, turning a plain HTML structure into a visually appealing design. This blog post will reveal advanced CSS techniques that can help you create stunning, responsive websites. From mastering Flexbox and Grid for layout design to using animation and transitions for a dynamic user experience, we'll dive deep into CSS features that elevate your web design skills to the next level.",
    date: "29/11/2024",
    image: "/images/2.jpg",
  },
  {
    id: '3',
    title: "JavaScript: The Brain of the Browser",
    description: "JavaScript is a programming language that powers interactivity on the web. It adds logic, animations, and real-time data updates, allowing developers to create dynamic web applications. This blog post will introduce you to JavaScript fundamentals, including variables, functions, loops, and DOM manipulation. You'll also learn how JavaScript interacts with HTML and CSS to enhance user experience, making web pages more engaging and interactive.",
    date: "30/11/2024",
    image: "/images/3.jpg",
  },
  {
    id: '4',
    title: "Responsive Design with Flexbox & Grid",
    description: "Responsive web design is the key to providing an optimal viewing experience across a wide range of devices. In this post, we’ll explore two powerful CSS layout tools: Flexbox and CSS Grid. Flexbox simplifies the creation of flexible layouts, while Grid allows for complex, multi-dimensional designs. Learn how to use these tools together to build responsive and adaptive websites that look great on desktops, tablets, and mobile devices.",
    date: "01/12/2024",
    image: "/images/4.png",
  },
  {
    id: '5',
    title: "Exploring the World of Robotic Engineering",
    description: "Robotics is a rapidly growing field that combines mechanical engineering, computer science, and artificial intelligence. This post will take you on a journey through the world of robotics, explaining how robots are designed, built, and programmed to perform tasks in various industries. From industrial robots on factory floors to autonomous vehicles, robotics is transforming the future of technology. Get a deep dive into the fundamentals of robotic engineering, including sensors, actuators, and AI-driven systems.",
    date: "02/12/2024",
    image: "/images/5.png",
  },
  {
    id: '6',
    title: "TypeScript: Strong Typing for JavaScript",
    description: "TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors during development. This post will introduce you to TypeScript's features, including its type system, interfaces, and decorators. You'll learn how TypeScript improves code readability and maintainability, helping developers write more robust applications. By the end of this post, you’ll understand why TypeScript has become essential in large-scale web development projects.",
    date: "03/12/2024",
    image: "/images/6.jpg",
  },
  {
    id: '7',
    title: "Tailwind CSS: Faster UI Design",
    description: "Tailwind CSS is a utility-first CSS framework that enables developers to design websites quickly and efficiently. In this post, you’ll learn how to build responsive and customizable user interfaces using Tailwind's predefined utility classes. Unlike traditional CSS frameworks, Tailwind doesn't dictate how your site should look, but rather provides you with the building blocks to create unique designs without writing custom CSS. We’ll cover everything from basic usage to advanced configuration options.",
    date: "04/12/2024",
    image: "/images/7.png",
  },
  {
    id: '8',
    title: "Next.js: Building the Future of the Web",
    description: "Next.js is a powerful React framework for building fast, server-rendered applications. In this post, you’ll discover the advantages of using Next.js for building modern web applications. Learn how server-side rendering (SSR) and static site generation (SSG) can improve performance and SEO. Whether you're building a blog, an e-commerce site, or a complex web app, Next.js simplifies the development process with built-in features like routing, API routes, and more.",
    date: "05/12/2024",
    image: "/images/8.jpg",
  },
  {
    id: '9',
    title: "SEO Best Practices for Developers",
    description: "Search Engine Optimization (SEO) is crucial for ensuring that your website ranks high in search engine results. This post will guide you through SEO best practices specifically for developers. Learn how to structure your website, optimize metadata, and use semantic HTML to improve your site's visibility. We’ll also discuss how to use tools like Google Search Console and performance optimization techniques to boost your website’s SEO.",
    date: "06/12/2024",
    image: "/images/9.jpg",
  },
  {
    id: '10',
    title: "Web Security Essentials",
    description: "Web security is a critical aspect of modern web development. In this post, we’ll explore essential security practices to protect your websites from common threats such as cross-site scripting (XSS), SQL injection, and data breaches. Learn how to implement HTTPS, sanitize user inputs, and follow the principle of least privilege to secure your applications. We’ll also dive into authentication and authorization strategies, such as JWT (JSON Web Tokens) and OAuth.",
    date: "07/12/2024",
    image: "/images/10.jpg",
  },
];


export default function Post({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchParams() {
      const unwrappedParams = await params;
      setId(unwrappedParams.id);
    }
    fetchParams();
  }, [params]);

  if (!id) {
    return (
      <div className="text-2xl font-bold text-center mt-10">
        Loading...
      </div>
    );
  }

  const post = posts.find((p) => p.id === id);
  if (!post) {
    return (
      <div className="text-2xl font-bold text-center mt-10">
        Post Not Found
      </div>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-emerald-400">
        {post.title}
      </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto mt-4"
        />
      )}
      {renderParagraphs(post.description)}
      <CommentSection postId={post.id} />
      <AuthoreCard />
    </div>
  );
}