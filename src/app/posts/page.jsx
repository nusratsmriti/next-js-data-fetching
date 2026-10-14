import React from 'react'

const getPosts = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
export default async function Posts() {
  const posts = await getPosts();
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();

  return (
    <div>
      <h1>Post Length { posts.length}</h1>
    </div>
  )
}
