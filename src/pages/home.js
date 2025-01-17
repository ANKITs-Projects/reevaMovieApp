import React, { useEffect, useState } from 'react'
import BannerHome from '../components/bannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import axios from 'axios'
import useFetch from '../Hooks/useFetch'



const Home = () => {
  const trendingData = useSelector(state => state.reevamovieData.bannerData)
  const {data: nowPlayingData } =useFetch("/movie/now_playing")
  const {data: topRatedData } =useFetch("/movie/top_rated")
  const {data: popularTvShow } =useFetch("/tv/popular")
  const {data: onTheAirTvShow } =useFetch("/tv/on_the_air")



  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trendingData} heading={'Trending Movies'} trending={true}/>
      <HorizontalScrollCard data={nowPlayingData} heading={'Now Playing'} media_type={"movie"}/>
      <HorizontalScrollCard data={topRatedData} heading={'Top Rated Movies'} media_type={"movie"}/>
      <HorizontalScrollCard data={popularTvShow} heading={'Popular TV Show'} media_type={"tv"}/>
      <HorizontalScrollCard data={onTheAirTvShow} heading={'On The Air'} media_type={"tv"}/>
    </div>
  )
}

export default Home