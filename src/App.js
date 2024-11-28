import Container from 'react-bootstrap/Container';
import Header from './components/Header';

export default function App() {

  const testPosts = [
      {
          id: 1,
          text: 'Hello world! Currently testing React.',
          timestamp: 'a minute ago',
          author: {
              username: 'John Doe'
          },
      },
      {
          id: 2,
          text: 'This is a second post',
          timestamp: 'a year ago',
          author: {
              username: 'Jane Doe'
          },
      },
      {
          id: 3,
          text: 'Hello from the beginning of time.',
          timestamp: 'an epoch ago',
          author: {
              username: 'Linus Torvalds'
          },
      },
  ]

  return (
      <Container fluid className="App">
        <Header />
          <Container>
              {testPosts.length === 0 ?
                  <p>There are no blog posts.</p>
                  :
                  testPosts.map(testPost => {
                      return (
                          <p key={testPost.id}>
                              <b>{testPost.author.username}</b> &mdash; {testPost.timestamp}
                              <br/>
                              {testPost.text}
                          </p>
                      );
                  })
              }
          </Container>
      </Container>
  );
}