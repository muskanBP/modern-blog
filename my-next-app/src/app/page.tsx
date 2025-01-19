"use client";
import Navbar from "../components/Navbar";
import AuthoreCard from "@/components/AuthoreCard";
import Mega from "@/components/Mega";
import Feature from "../components/Feature";
import { Footer } from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Head section to include meta tags for responsiveness */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <header className="text-center py-6">
        <h1 className="text-4xl font-extrabold text-blue-600">
        WELCOME TO MY BLOG
        </h1>
      </header>

      <Navbar />
      <Feature />
      <Mega />
      <AuthoreCard />
      <Footer />
    </div>
  );
}
