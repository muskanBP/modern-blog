/* eslint-disable @next/next/no-img-element */

import React from "react";



const AuthoreCard = () => {
  return (
    <div className="bg-white mt-12 shadow-lg rounded-lg p-6">
      <div className="flex items-center animate-bounce mt-4">
        <img
          src="/Images/pretty-emma-watson-portrait-p2vj24pedi7yifis.jpg" 
          alt="Author Image" 
          width={66} 
          height={66} 
          className="w-16 h-16 rounded-full mr-4 object-cover border-4 border-pink-400"
        />
        <div>
          <h3 className="text-xl font-bold">LisaBP

          </h3>
          <p className="text-green-500">Website Designer| Student of GOVERNOR HOUSE GENERATIVE AI </p>
        </div>
      </div>
      <p className="text-pretty font-dark text-gray-500 leading-relaxed"> The Governor House stands as a beacon of heritage and innovation, where the fusion of history and modernity creates an inspiring environment for IT students. This esteemed institution serves as a hub for learning, where cutting-edge technologies like generative AI are introduced to the next generation of tech enthusiasts. As students step into the Governor House, they are immersed in an atmosphere that encourages creativity and problem-solving, where the study of artificial intelligence, machine learning, and generative systems takes center stage. 
        The focus on practical application and real-world impact ensures that students not only gain knowledge but also develop the skills to shape the future of technology.
         Through collaboration, innovation, and a forward-thinking curriculum, the Governor House empowers IT students to lead in the rapidly evolving world of generative IT.

</p>
      <div className="mt-4 flex space-x-3">

        <a href="#"
        className="px-4 py-2 text-black bg-green-500 rounded-md hover:bg-green-300 transition-300">
          LinkedIn

        </a>
        <a href="#"
        className="px-4 py-2 text-black bg-green-500 rounded-md hover:bg-green-300 transition-300">
         Twitter

        </a>
        <a href="#"
        className="px-4 py-2 text-black bg-green-500 rounded-md hover:bg-green-300 transition-300">
          Facebook

        </a>
        <a href="#"
        className="px-4 py-2 text-black bg-green-500 rounded-md hover:bg-green-300 transition-300">
         Youtube

        </a>
      </div>

    </div>
  );
};

export default AuthoreCard;
