import data from "../add.json";
// const res = JSON.parse(data);
const PostList = () => {
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </>
        );
      })}
    </div>
  );
};
export default PostList;
