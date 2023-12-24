import { useContext, useEffect } from 'react';
import { header as Header, sidebar as Sidebar, container as Container, Row } from './components'
import Main from './pages/main';
import { TubeCloneContext } from './context/context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Video } from './pages';

function App() {
  const { videos } = useContext(TubeCloneContext);
  useEffect(() => {
    console.log(videos);
  }, [videos]); // Add a dependency array to useEffect
  return (
    <Container>
      {/* Header */}
      <Header />
      {/* Sidebar Menu and Main */}
      <Row>
        <div className="d-flex flex-row gap-2 text-white w-100">
          <div className="sidebar hide">
            <Sidebar />
          </div>
          <div className="main w-100">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="video/:id" element={<Video />} />
                <Route path="*/:id" element={<h1>No Result</h1>} />
                <Route path="*" element={<h1>No Page</h1>} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </Row>
      {/* Main */}
    </Container>
  );
}

export default App;
