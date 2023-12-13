import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [postsList, setPostsList] = useState([]);
  const [tags, setTags] = useState([]);

  async function getPosts() {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const posts = await response.json();
      setPostsList(posts);
    } catch (err) {
      console.error(err);
    }
  }

  async function getTags() {
    try {
      const response = await fetch("http://localhost:3000/tags");
      const tags = await response.json();
      setTags(tags);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPosts();
    getTags();
  }, []);

  return (
    <>
      {/* filters */}
      <ul className="flex justify-between my-4">
        <li className="hover:text-sky-400 text-gray-300">
          <button onClick={() => getPosts()}>Tutti i post</button>
        </li>
        {tags.map((el, index) => (
          <li className="hover:text-sky-400 text-gray-300" key={el.id}>
            <Link to={`/tagposts/${el.name}`}>
              <button>{el.name}</button>
            </Link>
          </li>
        ))}
      </ul>

      {/* all posts */}
      <div className="w-full grid grid-cols-4 gap-5 p-4">
        {postsList.map((el, index) => (
          <div
            style={{
              backgroundImage: `url(${el.image?.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className={`flex flex-col gap-5 items-center justify-center border h-[300px]`}
            key={el.id}
          >
            <h3>{el.title}</h3>
            <Link to={`/posts/${el.slug}`}>
              <button className="bg-sky-500 rounded-xl p-3 hover:bg-sky-800">
                See details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
