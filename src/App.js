import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './App.css';
import Sankey from './component/sankey'
import IndiaBatting from './component/india_batting';
import NetworkGraph from './component/network_graph';
import BoundaryGraph from './component/boundary_graph';
import WicketDistribution from './component/wicket_distribution';
import WicketsinWanderers from './component/wanderers_wickets';
import PakistanPerformance from './component/pakistan_performance';
import JoginderPerf from './component/joghinder_perf'
import ImageGallery from './component/image_gallery';
import image1 from './images/MV5BMjM0ZGE3YTktZTFiNC00ZWM2LWEwYjEtZmU0YzFiODhiYTFlXkEyXkFqcGc@._V1_QL75_UX1640_.jpg'
import image2 from './images/MV5BNWE2NmJjNWItMTZhZi00OGRiLTg1MWUtZmRlMzc2NDZkYWQyXkEyXkFqcGc@._V1_QL75_UX1640_.jpg'
import image3 from './images/MV5BYmJhODk2MjAtYzRlYi00Yzk3LWIzNGYtMjYxNmU0ODMyNGEyXkEyXkFqcGc@._V1_QL75_UX1640_.jpg'
import image4 from './images/MV5BZWE1YjAzMzItM2RiNy00ZDQ4LWFhYWYtOTcxMjU0YzRkM2E0XkEyXkFqcGc@._V1_QL75_UX1640_.jpg'
import image5 from './images/MV5BZmI1ZjczNTUtOWE4My00OWM2LTkxYmItZDIxYjIzYjQ0OGZkXkEyXkFqcGc@._V1_QL75_UX1640_.jpg'

function App() {

  const [data, setData] = useState([]);
 useEffect(() => {
   // Fetch or load your CSV data
   d3.dsv(",", "graph_summary.csv", d => ({
     source: d.source,
     target: d.target,
     value: d.value,
   })).then(setData);
 }, []);


  const images = [
    image1, image2, image3, image4, image5
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Thrilling Finale</h1>
        <h2>India vs. Pakistan in the 2007 ICC T20 World Cup</h2>

        <p className='authors'>Authors: Mohamed Aamir, Neel Kothari, Krishnav Singhal, Nandha Sundaravadivel</p>
        <p className='subtitle'>On this page, we'll bring the iconic India vs. Pakistan match to life through dynamic visualizations, uncovering key moments, stats, and insights from this unforgettable game. From the explosive batting of Gautam Gambhir and the fearless bowling of Ishant Sharma, we’ll break down the key moments and stats that made this match a legend. Join us as we explore how India clinched the inaugural T20 World Cup in a game that had the world on the edge of its seat!</p>
        <div style={{ width: '100%', margin: '0 auto' }}><ImageGallery images={images}/></div>
      <br/>
      <div className="background">
        <h3>Background</h3>
        <h4>The Game of Cricket</h4>
        <p>Cricket is a bat-and-ball sport played between two teams of 11 players each. The game is divided into innings, with one team batting and the other fielding. The batting team aims to score runs by hitting the ball and running between wickets, while the fielding team tries to dismiss the batsmen by getting them out in various ways. The match is typically played over a set number of overs (a set number of balls per team), and the team with the most runs at the end wins.</p>
        <p>In the context of the T20 format (which was used in the 2007 World Cup), each team gets 20 overs to bat, making for a fast-paced, action-packed game.</p>
        <p>For more in-depth information, feel free to explore the <a href="https://en.wikipedia.org/wiki/Cricket" target="_blank" rel="noopener noreferrer">Cricket Wikipedia page</a>.</p>
        <h4>Data</h4>
        <p>We obtained all of our match data from <a href='https://cricsheet.org/'>Cricsheets</a>. In their own words, "Cricsheet is a collection of projects which collectively provide data for various aspects of cricket. The current projects provide ball-by-ball match data for Men’s and Women’s Test Matches, One-day internationals, Twenty20 Internationals, some other international T20s [and more]"</p>
        <p>Images were obtained from <a href="https://www.imdb.com/title/tt9056606/mediaindex/?ref_=tt_mv_close">IMDB</a> </p>
      </div>
      <h4>Well then, It’s time to take guard!</h4><br/>

      <p className='subtitle'>A young, underdog Indian team faced Pakistan in the finals of the inaugural T20 World Cup. Click around and explore the each player and their years of experience.</p>
      <p>An Indian upset seems unlikely, no?</p>
        <IndiaBatting style={{height: '800px'}}/>
        <NetworkGraph/>
        <BoundaryGraph/>
        <WicketDistribution/>
        <WicketsinWanderers style={{height: '400px'}}/>
        <PakistanPerformance/>
        <JoginderPerf/>
      </header>


    </div>
  );
}

export default App;