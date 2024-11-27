

export default function App() {

  const testPost = {
    id: 1,
    text: 'Hello world! Currently testing React.',
    timestamp: 'a minute ago',
    author: {
      username: 'John Doe'
    }
  }

  return (
      <>
        <h1>Microblog</h1>
        <p>
          <b>{testPost.author.username}</b> &mdash; {testPost.timestamp}
          <br />
          {testPost.text}
        </p>
      </>
  );
}