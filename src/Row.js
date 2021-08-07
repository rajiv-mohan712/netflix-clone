import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const baseImageUrl = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      await fetch(fetchUrl)
        .then((res) => res.json())
        .then((res) => setMovies(res.results))
    }

    fetchData()
  }, [fetchUrl])

  const handleClick = (movie) => {
    if (trailerUrl) setTrailerUrl(null)
    else {
      movieTrailer(
        movie?.title || movie?.name || movie?.original_name || ''
      ).then((resp) => {
        const urlParams = new URLSearchParams(new URL(resp).search)
        setTrailerUrl(urlParams.get('v'))
      })
    }
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const Section = styled.section`
    margin-left: 20px;
    color: white;
  `

  const Posters = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  `

  const Image = styled.img`
    object-fit: contain;
    width: 100%;
    max-height: 100px;
    transition: transform 450ms;
    cursor: pointer;
    padding: 5px;

    &:hover {
      transform: scale(1.08);
    }
  `

  const LargeImage = styled(Image)`
    max-height: 250px;
    &:hover {
      transform: scale(1.09);
    }
  `

  return (
    <Section>
      <h2>{title}</h2>
      <Posters>
        {movies.map((movie) =>
          isLargeRow ? (
            <LargeImage
              src={baseImageUrl + movie.poster_path}
              alt={movie.name}
              key={movie.id}
              onClick={() => handleClick(movie)}
            />
          ) : (
            <Image
              src={baseImageUrl + movie.backdrop_path}
              alt={movie.name}
              key={movie.id}
              onClick={() => handleClick(movie)}
            />
          )
        )}
      </Posters>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Section>
  )
}

export default Row
