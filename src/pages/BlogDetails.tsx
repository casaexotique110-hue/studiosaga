import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogsData } from './BlogList';

const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Current matched blog dhoondna
  const blog = blogsData.find((b) => b.slug === slug);

  // Jab bhi koi naye blog par click karega, screen apne aap top par scroll ho jayegi
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

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

  // Related Blogs: Current blog ko chhod kar baki sabhi blogs filter karna
  const recommendedBlogs = blogsData.filter((b) => b.slug !== slug);

  return (
    <main className="bg-[#F8F6F2] py-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        

        {/* BACK BUTTON */}
        <Link to="/blogs" className="inline-flex items-center gap-2 text-stone-500 hover:text-[#B08B57] transition-colors text-xs uppercase tracking-widest mb-12 font-bold">
          <ArrowLeft size={16} /> Back to Insights
        </Link>

        {/* MAIN LAYOUT: 12-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* LEFT SIDE: MAIN BLOG CONTENT (8 Columns) */}
          <div className="lg:col-span-8 bg-white p-6 md:p-12 rounded-[32px] border border-stone-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
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
            <h1 className="text-3xl md:text-5xl text-[#1f1f1f] font-light font-serif leading-[1.2] mb-8">
              {blog.title}
            </h1>

            {/* HERO IMAGE */}
            <div className="w-full h-[280px] md:h-[420px] rounded-[24px] overflow-hidden shadow-sm mb-10">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* MAIN TEXT */}
            <article className="prose prose-stone max-w-none">
              <p className="text-stone-700 text-lg leading-relaxed font-light mb-8 italic border-l-2 border-[#B08B57] pl-6 py-1">
                {blog.excerpt}
              </p>

              {/* DYNAMIC MARKDOWN AND WPS/WORD STYLE TABLES RENDERING */}
              <div className="text-[#2c2c2c] text-base md:text-lg leading-relaxed font-light space-y-6 blog-markdown-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // WPS / MS Word Style Exact Grid Table Styling Custom Override
                    table: ({ children }) => (
                      <div className="my-8 overflow-x-auto rounded-xl border border-stone-300 shadow-sm">
                        <table className="w-full border-collapse border border-stone-300 text-sm text-left bg-white">
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead className="bg-stone-50 border-b border-stone-300 text-stone-900 font-medium">
                        {children}
                      </thead>
                    ),
                    th: ({ children }) => (
                      <th className="px-5 py-3 font-semibold border-r border-stone-300 text-xs uppercase tracking-wider text-stone-900">
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className="px-5 py-3 border-b border-stone-200 border-r border-stone-300 text-stone-600 font-light">
                        {children}
                      </td>
                    ),
                    tr: ({ children }) => (
                      <tr className="hover:bg-stone-50/40 transition-colors">
                        {children}
                      </tr>
                    ),
                    // Standard tags override to maintain luxury spacing
                    h3: ({ children }) => (
                      <h3 className="text-2xl font-serif font-normal text-stone-900 mt-10 mb-4 pt-4 border-t border-stone-100">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="text-lg font-serif font-medium text-stone-800 mt-6 mb-2">
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p className="text-stone-600 font-light leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 space-y-2 text-stone-600 font-light my-4">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-base">
                        {children}
                      </li>
                    )
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>
            </article>
          </div>

          {/* RIGHT SIDE: SUGGESTED BLOGS SIDEBAR (4 Columns) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
            <div className="bg-white p-8 rounded-[28px] border border-stone-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">

              <h2 className="font-serif text-2xl text-[#1f1f1f] mb-6 flex items-center gap-3">
                Read Next
                <span className="w-8 h-[1px] bg-[#B08B57]"></span>
              </h2>

              {/* LIST OF SUGGESTIONS */}
              <div className="space-y-6">
                {recommendedBlogs.map((recBlog) => (
                  <Link
                    key={recBlog.slug}
                    to={`/blog/${recBlog.slug}`}
                    className="group flex gap-4 items-center p-2 rounded-xl hover:bg-[#F8F6F2] transition-all duration-300"
                  >
                    {/* Small Thumb image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100">
                      <img
                        src={recBlog.image}
                        alt={recBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Text block */}
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] uppercase tracking-widest text-[#B08B57] font-semibold mb-1">
                        {recBlog.category}
                      </span>
                      <h3 className="text-sm font-normal text-[#1f1f1f] leading-snug font-sans line-clamp-2 group-hover:text-[#B08B57] transition-colors duration-300">
                        {recBlog.title}
                      </h3>
                      <p className="text-[10px] text-stone-400 mt-1">{recBlog.date}</p>
                    </div>
                  </Link>
                ))}
              </div>

            </div>

            {/* QUICK STUDIO CONTACT BANNER */}
            <div className="bg-[#1d1d1d] text-white p-8 rounded-[28px] text-center relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] w-[150px] h-[150px] rounded-full bg-[#c8a46a]/15 blur-2xl pointer-events-none" />
              <h3 className="font-serif text-xl mb-2">Consult Our Team</h3>
              <p className="text-stone-400 text-xs font-light mb-6">Let's blueprint your dream space within your timeline and budget scale.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#B08B57] text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Book Now <ArrowRight size={12} />
              </Link>
            </div>
          </aside>

        </div>

      </div>
    </main>
  );
};

export default BlogDetails; 
