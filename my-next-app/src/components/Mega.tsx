import React, { useEffect, useState } from "react";
import BlogCard from "../components/Blog";

export default function Mega() {
  const [processTitle, setProcessTitle] = useState("Exploring The New AI World");

  useEffect(() => {
    // Set the title dynamically after the component mounts on the client side
    if (typeof window !== "undefined" && window.process && window.process.title) {
      setProcessTitle(`Exploring ${window.process.title}`); // Fixed string interpolation
    }
  }, []);

  const posts = [
    {
      id: '3',
      title: "JavaScript: The Brain of the Browser",
      description: "Learn how JavaScript adds interactivity and logic to your web pages with real-world examples.",
      date: "30/11/2024",
      imageUrl: "/Images/3.jpg",
    },
    {
      id: '1',
      title: "HTML: The Foundation of the Web",
      description: "Discover the core structure behind every webpage and how HTML forms the web's backbone.",
      date: "28/11/2024",
      imageUrl: "/Images/11 (2).jpg",
    },
    {
      id: '2',
      title: "CSS Secrets for Stunning Websites",
      description: "Unveil tips and tricks to craft visually captivating websites using modern CSS techniques.",
      date: "29/11/2024",
      imageUrl: "/Images/2.jpg",
    },

   
    {
      id: '5',
      title: "Exploring the World of Robotic Engineering",
      description: "Dive into the future of robotics, where machines and AI are transforming industries.",
      date: "02/12/2024",
      imageUrl: "/Images/5.png",
    },
    {
      id: '6',
      title: "TypeScript: Strong Typing for JavaScript",
      description: "Understand the power of TypeScript and how it enhances JavaScript development.",
      date: "03/12/2024",
      imageUrl: "/Images/11 (3).jpg",
    },
    {
      id: '4',
      title: "Responsive Design with Flexbox & Grid",
      description: "Master the art of building responsive layouts using CSS Flexbox and Grid for any screen size.",
      date: "01/12/2024",
      imageUrl: "/Images/11 (1).jpg",
    },
    {
      id: '7',
      title: "Tailwind CSS: Faster UI Design",
      description: "Learn how to quickly build beautiful, modern UIs using the Tailwind CSS utility framework.",
      date: "04/12/2024",
      imageUrl: "/Images/7.png",
    },
    {
      id: '8',
      title: "Next.js: Building the Future of the Web",
      description: "Discover how to create lightning-fast, server-rendered React apps using Next.js.",
      date: "05/12/2024",
      imageUrl: "/Images/8.jpg",
    },
    {
      id: '9',
      title: "SEO Best Practices for Developers",
      description: "Implement SEO-friendly practices to ensure your website ranks higher on search engines.",
      date: "06/12/2024",
      imageUrl: "/Images/pexels-fotios-photos-1957478.jpg",
    },
  
  ];

  return (
    <div className="my-8">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center my-8 animate-colorChange">
        {processTitle}
      </h1>

      {/* Blog Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={post.id} className="animate-fadeIn">
            {/* Blog Card */}
            <div className="flex flex-col justify-between border p-4 rounded-lg shadow-lg h-full transform transition-transform duration-300 hover:scale-105">
              {/* Blog Card Content */}
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
