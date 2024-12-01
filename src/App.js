import React, { useState } from 'react';
import './App.css';
import Sankey from './component/sankey'
import IndiaBatting from './component/india_batting';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>The Thrilling Finale</h1>
        <h2>India vs. Pakistan in the 2007 ICC T20 World Cup</h2>

        <p className='authors'>Authors: Mohamed Aamir, Neel Kothari, Krishnav Singhal, Nandha Sundaravadivel</p>
        <p className='subtitle'>On this page, we'll bring the iconic India vs. Pakistan match to life through dynamic visualizations, uncovering key moments, stats, and insights from this unforgettable game. From the explosive batting of Gautam Gambhir and the fearless bowling of Ishant Sharma, we’ll break down the key moments and stats that made this match a legend. Join us as we explore how India clinched the inaugural T20 World Cup in a game that had the world on the edge of its seat!</p>
      <div className="background">
        <h3>Background</h3>
        <h4>The Game of Cricket</h4>
        <p>Cricket is a bat-and-ball sport played between two teams of 11 players each. The game is divided into innings, with one team batting and the other fielding. The batting team aims to score runs by hitting the ball and running between wickets, while the fielding team tries to dismiss the batsmen by getting them out in various ways. The match is typically played over a set number of overs (a set number of balls per team), and the team with the most runs at the end wins.</p>
        <p>In the context of the T20 format (which was used in the 2007 World Cup), each team gets 20 overs to bat, making for a fast-paced, action-packed game.</p>
        <p>For more in-depth information, feel free to explore the <a href="https://en.wikipedia.org/wiki/Cricket" target="_blank" rel="noopener noreferrer">Cricket Wikipedia page</a>.</p>
        <h4>Data</h4>
        <p>We obtained all of our match data from <a href='https://cricsheet.org/'>Cricsheets</a>. In their own words, "Cricsheet is a collection of projects which collectively provide data for various aspects of cricket. The current projects provide ball-by-ball match data for Men’s and Women’s Test Matches, One-day internationals, Twenty20 Internationals, some other international T20s [and more]"</p>
      </div>
      <h4>Well then, It’s time to take guard!</h4><br/>

      <p className='subtitle'>A young, underdog Indian team faced Pakistan in the finals of the inaugural T20 World Cup. Click around and explore the each player and their years of experience.</p>
      <Sankey/>
      <p>An Indian upset seems unlikely, no?</p>
        <IndiaBatting/>
      </header>


    </div>
  );
}

export default App;