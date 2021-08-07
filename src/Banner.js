import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import requests from './requests'

const baseImageUrl = 'https://image.tmdb.org/t/p/original/'

function Banner() {
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      await fetch(requests.fetchNetflixOriginals)
        .then((res) => res.json())
        .then((res) => {
          setMovie(
            res.results[Math.floor(Math.random() * res.results.length - 1)]
          )
        })
    }

    fetchData()
  }, [])

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  const Banner = styled.div`
    background-size: cover;
    background-image: url(${baseImageUrl}${movie.backdrop_path});
    color: white;
    object-fit: contain;
    height: 448px;
  `

  const BannerContents = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
  `

  const Title = styled.h3`
    font-size: 3rem;
    padding-bottom: 0.3rem;
    font-weight: 800;
  `

  const ButtonComp = styled.div``

  const Button = styled.button`
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    padding-bottom: 0.5rem;

    &:hover {
      color: #000;
      background-color: #e6e6e6;
      transition: all 0.2s;
    }
  `

  const BannerDesc = styled.p`
    font-size: 0.8rem;
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    max-width: 360px;
    height: 80px;
  `

  const FadeBottom = styled.div`
    height: 7.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
  `

  return (
    <Banner>
      <BannerContents>
        <Title>{movie?.title || movie?.name || movie?.original_name} </Title>
        <ButtonComp>
          <Button>Play</Button>
          <Button>My List</Button>
        </ButtonComp>
        <BannerDesc> {truncate(movie?.overview, 150)} </BannerDesc>
      </BannerContents>
      <FadeBottom />
    </Banner>
  )
}

export default Banner
