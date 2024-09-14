import PostTitle from "../PostTitle/PostTitle";

const Post = ({ post }) => {
  return (
    <div>
      <PostTitle>{post.title}</PostTitle>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
