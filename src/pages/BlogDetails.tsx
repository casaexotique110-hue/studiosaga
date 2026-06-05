import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
// Hum data usi upar wali file se call kar rahe hain takki redundancy na ho
import { blogsData } from './BlogList'; 

const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Array se matched blog dhoondna
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F8F6F2] flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-serif text-[#1f1f1f] mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-[#B08B57] underline uppercase tracking-wider text-xs">
          Back to all articles
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#F8F6F2] py-32 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* BACK BUTTON */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-[#B08B57] transition-colors text-xs uppercase tracking-widest mb-12 font-bold">
          <ArrowLeft size={16} /> Back to Insights
        </Link>

        {/* METADATA */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-stone-400 uppercase tracking-widest mb-6 font-medium">
          <span className="flex items-center gap-1.5">
            <Tag size={14} className="text-[#B08B57]" /> {blog.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-[#B08B57]" /> {blog.date}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#1f1f1f] font-light font-serif leading-[1.15] mb-10">
          {blog.title}
        </h1>

        {/* HERO IMAGE */}
        <div className="w-full h-[350px] md:h-[480px] rounded-[32px] overflow-hidden shadow-xl mb-12">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* MAIN DESCRIPTION CONTENT */}
        <article className="prose prose-stone max-w-none">
          <p className="text-stone-700 text-lg md:text-xl leading-relaxed font-light mb-8 italic border-l-2 border-[#B08B57] pl-6 py-1">
            {blog.excerpt}
          </p>
          <div className="text-[#2c2c2c] text-base md:text-lg leading-relaxed font-light space-y-6">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        {/* FOOTER CALL TO ACTION */}
        <div className="mt-20 p-10 bg-white rounded-[24px] border border-stone-100 text-center shadow-sm">
          <h3 className="font-serif text-2xl text-[#1f1f1f] mb-3">Want custom designs for your home?</h3>
          <p className="text-stone-500 text-sm font-light mb-6">Let's build your dream project within your realistic timeline and budget layout.</p>
          <Link to="/Contact" className="inline-block bg-[#1d1d1d] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#B08B57] transition-colors duration-300">
            Book Free Consultation
          </Link>
        </div>

      </div>
    </main>
  );
};

export default BlogDetails;