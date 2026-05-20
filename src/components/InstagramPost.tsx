import React from 'react';

// Post के डेटा के लिए TypeScript Interface
interface PostData {
  id: string;
  profileHandle: string;
  profileAvatarUrl: string; // Optional: Add if you have avatar images
  postMediaUrl: string; // Video Thumbnail/Image URL
  caption: string;
  likesCount: number;
  postLink: string; // Link to "View more on Instagram" or the full post
}

// Component के Props के लिए TypeScript Interface
interface InstagramPostProps {
  post: PostData;
}

const InstagramPost: React.FC<InstagramPostProps> = ({ post }) => {
  // यहाँ पर आप Like State और onClick handlers भी जोड़ सकते हैं
  // For demonstration, we'll keep it simple and static.

  return (
    <div style={{
      border: '1px solid #dbdbdb',
      borderRadius: '3px',
      margin: '10px',
      maxWidth: '350px',
      backgroundColor: '#fff'
    }}>
      {/* 1. Header (Profile) */}
      <div style={{
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Avatar Area (If you use it) */}
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#ccc', // Placeholder for avatar
            marginRight: '10px'
          }}>{/* If you use an avatar image: <img src={post.profileAvatarUrl} alt="Avatar" /> */}</div>
          <div>
            <div style={{ fontWeight: 'bold' }}>{post.profileHandle}</div>
            {/* Optional: Add followers count here if available */}
          </div>
        </div>
        {/* 'View profile' Button */}
        <a href={`https://www.instagram.com/${post.profileHandle}`} target="_blank" rel="noopener noreferrer" style={{
          textDecoration: 'none',
          color: '#0095f6',
          fontWeight: 'bold',
          fontSize: '14px',
          padding: '5px 10px',
          border: '1px solid #dbdbdb',
          borderRadius: '3px'
        }}>
          View profile
        </a>
      </div>

      {/* 2. Media Area (Video/Image) */}
      <div style={{ position: 'relative' }}>
        <img
          src={post.postMediaUrl}
          alt="Instagram Post"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        {/* 'Watch on Instagram' Overlay (Play Button and Text) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          cursor: 'pointer'
        }}
        onClick={() => window.open(post.postLink, '_blank')}>
          {/* Play Icon - Use an SVG or simple Unicode for quick placeholder */}
          <span style={{ fontSize: '60px', color: 'white', opacity: 0.8 }}>▶</span>
          <p style={{ color: 'white', fontWeight: 'bold', margin: '5px 0' }}>
            Watch on Instagram
          </p>
        </div>
      </div>

      {/* 3. Actions (Like, Comment, Share) */}
      <div style={{ padding: '8px 10px' }}>
        <div style={{ marginBottom: '5px' }}>
          {/* Use Icons from a library like react-icons or use SVGs/simple text */}
          <button style={{ background: 'none', border: 'none', fontSize: '24px', marginRight: '10px', cursor: 'pointer' }}>❤️</button>
          <button style={{ background: 'none', border: 'none', fontSize: '24px', marginRight: '10px', cursor: 'pointer' }}>💬</button>
          <button style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>💾</button>
        </div>
        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
          {post.likesCount} likes
        </div>
        <a href={post.postLink} target="_blank" rel="noopener noreferrer" style={{
          textDecoration: 'none',
          color: '#00376b',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          View more on Instagram
        </a>
      </div>
      
       {/* 4. Add a comment section */}
       <div style={{ 
          borderTop: '1px solid #efefef',
          padding: '10px',
          color: '#8e8e8e',
          fontSize: '14px'
        }}>
          Add a comment...
       </div>
    </div>
  );
};

export default InstagramPost ;