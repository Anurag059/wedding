import React, { useEffect, useState } from 'react';

function TrendingPosts() {
  const [users, setUsers] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('http://20.244.56.144/evaluation-services/users');
        const usersData = await res.json();
        setUsers(usersData);

        const allPosts = await Promise.all(usersData.map(user =>
          fetch(`http://20.244.56.144/evaluation-service/users/${user.id}/posts`).then(res => res.json())
        ));
        
        const flatPosts = allPosts.flat();
        const sortedPosts = flatPosts.sort((a, b) => b.likes - a.likes).slice(0, 5);
        setTrendingPosts(sortedPosts);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="trending-posts">
      <h2>🔥 Trending Posts</h2>
      <ul>
        {trendingPosts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.likes} likes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingPosts;
