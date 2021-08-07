import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import styled from 'styled-components'
import NavBar from './NavBar'

function App() {
  const Div = styled.div`
    background-color: #111;
  `

  return (
    <Div>
      <NavBar />
      <main>
        <Banner />
        <Row
          title='NETFLIX ORIGINALS'
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      </main>
    </Div>
  )
}

export default App
