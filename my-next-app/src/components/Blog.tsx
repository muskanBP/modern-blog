import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; imageUrl: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105 ${
        isDarkBackground ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      {/* Image */}
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={400}
        height={250}
        className="rounded-t-lg w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
        priority
      />
      
      {/* Title */}
      <CardTitle className={`text-2xl font-extrabold mt-4 text-center ${isDarkBackground ? 'text-gray-200' : 'text-gray-800'}`}>
        {post.title}
      </CardTitle>
      
      {/* Description */}
      <CardContent className="text-center mt-4 px-4">
        <p className={`text-base leading-relaxed ${isDarkBackground ? 'text-gray-400' : 'text-gray-600'}`}>{post.description}</p>
      </CardContent>
      
      {/* Date and Read More */}
      <div className="flex flex-col items-center mt-6 space-y-3">
        <p className={`text-xs font-medium ${isDarkBackground ? 'text-gray-500' : 'text-gray-500'}`}>
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 py-3 text-md font-semibold rounded-lg transition-all shadow-md hover:shadow-lg ${
            isDarkBackground ? 'bg-blue-500 hover:bg-blue-400' : 'bg-indigo-500 hover:bg-indigo-400'
          } text-white text-center`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
