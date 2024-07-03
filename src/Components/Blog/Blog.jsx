import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          Blog
        </h1>
      </header>
      <section className="w-full max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6"></h2>
        <div className="grid grid-cols-1 gap-8">
          <article className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2"></h3>
            <p className="mb-4"></p>
          </article>
        </div>
      </section>
      <footer className="mt-12 text-center"></footer>
    </div>
  );
};

export default Blog;
