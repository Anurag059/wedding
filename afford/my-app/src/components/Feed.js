import React, { useEffect, useState } from 'react';

function Feed() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    async function loadFeed() {
      const userRes = await fetch('http://20.244.56.144/evaluation-services/users');
      const usersData = await userRes.json();
      setUsers(usersData);

      const postsData = {};
      const commentsData = {};

      for (let user of usersData) {
        const userPosts = await fetch(`http://20.244.56.144/evaluation-service/users/${user.id}/posts`)
          .then(res => res.json());

        postsData[user.id] = userPosts;

        for (let post of userPosts) {
          const postComments = await fetch(`http://20.244.56.144/evaluation-service/posts/${post.id}/comments`)
            .then(res => res.json());
          commentsData[post.id] = postComments;
        }
      }

      setPosts(postsData);
      setComments(commentsData);
    }

    loadFeed();
  }, []);

  return (
    <div className="feed">
      <h2>📰 Feed</h2>
      {users.map(user => (
        <div key={user.id} className="user-feed">
          <h3>{user.name} (@{user.username})</h3>
          {(posts[user.id] || []).map(post => (
            <div key={post.id} className="post">
              <strong>{post.title}</strong>
              <p>{post.content}</p>
              <p>Likes: {post.likes}</p>
              <div className="comments">
                <h4>Comments:</h4>
                <ul>
                  {(comments[post.id] || []).map(comment => (
                    <li key={comment.id}>{comment.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Feed;
