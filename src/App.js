import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './App.css';
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
import DashEmbed from './component/dash_embed';

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
        <div style={{ width: '100%', margin: '0 auto' }}><ImageGallery images={images} /></div>
        <br />
        <div className="background">
          <h3>Background</h3>
          <h4>The Game of Cricket</h4>
          <p>Cricket is a bat-and-ball sport played between two teams of 11 players each. The game is divided into innings, with one team batting and the other fielding. The batting team aims to score runs by hitting the ball and running between wickets, while the fielding team tries to dismiss the batsmen by getting them out in various ways. The match is typically played over a set number of overs (each with a set number of balls), and the team with the most runs at the end wins.  A player getting out is reffered to as losing a wicket.</p>
          <p>The batting team plays until they are out of overs or all of the batting players are out (all wickets are lost). Once finished, the fielding team will have a chance at batting to try to beat the other team's score. This is often called "chasing"</p>
          <p>
            In cricket, points (runs) are scored by hitting the ball to the boundary (4 runs if the ball touches the ground before crossing the boundary, or 6 runs if it clears the boundary without touching the ground) or by running between the wickets (1, 2, 3, etc.).</p>
          <p>A wicket can fall in many ways. The most common occur when the bowled ball makes contact with the wicket stumps, the ball is caught after it is hit by the batting player, or if the batting player blocks the wicket stumps with their legs (called an LBW). Refer to the Wikipedia page for an exhaustive list.</p>
          <p>In the context of the T20 format (which was used in the 2007 World Cup), each team gets 20 overs to bat (with 6 balls per over), making for a fast-paced, action-packed game.</p>
          <p>For more in-depth information, feel free to explore the <a href="https://en.wikipedia.org/wiki/Cricket" target="_blank" rel="noopener noreferrer">Cricket Wikipedia page</a>.</p>
          <h4>Data</h4>
          <p>We obtained all of our match data from <a href='https://cricsheet.org/'>Cricsheets</a>. In their own words, "Cricsheet is a collection of projects which collectively provide data for various aspects of cricket. The current projects provide ball-by-ball match data for Men’s and Women’s Test Matches, One-day internationals, Twenty20 Internationals, some other international T20s [and more]"</p>
          <p>Images were obtained from <a href="https://www.imdb.com/title/tt9056606/mediaindex/?ref_=tt_mv_close">IMDB</a> </p>
          <p>The approximate positions of balls on the Gautam Gambhir boundary chart were extracted from this <a href='https://youtu.be/tan8K10AzXY'>video</a></p>
        </div>
        <h4>Well then, It’s time to take guard!</h4><br />
        <p className='subtitle'>The inaugural ICC T20 World Cup was a step into uncharted territory for international cricket. Teams approached this format with different strategies, some with experienced veterans and others with youthful energy. Among them was the Indian cricket team, led by a young captain, MS Dhoni. The squad was filled with relatively unknown players, many of whom had little experience on the global stage.</p>
        <p className='subtitle'>Critics doubted their chances. How could a team with so few matches under their belt challenge seasoned sides? Yet, with every game, India defied expectations. They showcased fearless cricket, pulling off sensational wins and capturing the imagination of fans. Their road to the final wasn’t easy, but they had earned their place, setting up a dream clash against arch-rivals Pakistan.</p>
        <h3>The Final Showdown Begins</h3>
        <p className='subtitle'>The Wanderers Stadium buzzed with excitement as India won the toss and chose to bat. The opening overs reflected cautious optimism. Runs came in singles and doubles, interspersed with occasional boundaries. But as momentum began to build, disaster struck. A quick succession of wickets silenced the crowd, leaving fans anxious.
        </p>
        <IndiaBatting style={{ height: '800px' }} />
        <p className='tutorial'>This visualization shows how many points (runs) different Indian batsmen scored, broken down by the type of shot they played. Each bar represents a batsman, and the colored segments within each bar correspond to the runs scored from specific types of shots:</p>
        <ul className='tutorial-list'>
          <li><strong>0:</strong> Dots (no runs scored on that ball)</li>
          <li><strong>1:</strong> Singles</li>
          <li><strong>2:</strong> Doubles</li>
          <li><strong>3:</strong> Triples</li>
          <li><strong>4:</strong> Boundaries (four runs scored by hitting the ball to the boundary)</li>
          <li><strong>6:</strong> Sixes (six runs scored by hitting the ball over the boundary without touching the ground)</li>
        </ul>
        <p className='tutorial'>From the chart:</p>
        <ul className='tutorial-list'>
          <li><strong>Gautam Gambhir:</strong> scored the most runs, relying heavily on fours (green segment) and singles (orange).</li>
          <li><strong>Rohit Sharma:</strong> contributed with a balanced mix, including sixes (yellow) and singles.</li>
          <li><strong>Other batsmen:</strong> Like Yuvraj Singh and MS Dhoni, had smaller contributions but used a variety of shots.</li>
        </ul>
        <br />

        <p className='subtitle'>In walked Gautam Gambhir, calm and composed. As wickets fell around him, Gambhir stood like a rock. His stroke play was a masterclass in controlled aggression, finding gaps in the field and sending the ball racing to the boundary. Each shot brought a surge of hope. Gambhir’s innings was supported by vital contributions from Rohit Sharma and Yuvraj Singh, who kept the scoreboard ticking in the final overs.
        </p><p className='subtitle'>India finished their innings with a defendable total—enough to spark belief but not enough to guarantee victory.</p>
        <BoundaryGraph />
        <p className='tutorial'>This visualization highlights the boundaries (fours and sixes) scored by Gautam Gambhir during his innings.</p>
        <ul className='tutorial-list'>
          <li><strong>Blue lines:</strong> Represent fours (shots that reached the boundary along the ground or after a bounce).</li>
          <li><strong>Red lines:</strong> Represent sixes (shots that went over the boundary without touching the ground).</li>
        </ul>

        <p className='tutorial'>Each line shows the trajectory of the ball from the pitch (center) to the boundary, giving an idea of Gambhir's shot placement. The distribution of these trajectories demonstrates how Gambhir scored boundaries across different areas of the field, indicating his ability to play diverse and effective shots in multiple directions.</p>
        <p className='tutorial'></p>

        <h3>The Chase: Pakistan’s Battle for Glory</h3>
        <p className='subtitle'>Pakistan began their chase with confidence, their openers crafting steady partnerships. The Wanderers pitch offered some movement, but the batters adapted, chipping away at the target. Early breakthroughs from RP Singh and Irfan Pathan, however, threw Pakistan’s plans into disarray.
        </p>
        <WicketsinWanderers style={{ height: '400px' }} />
        <p className='tutorial'>This treemap shows the number of wickets taken by bowlers at the Wanderers Stadium, categorized by their bowling style (e.g., pace, spin, left arm, right arm). The size and color of each rectangle represent the number of wickets taken, with darker shades indicating more wickets. For example, SL Malinga, a right-arm pace bowler, took the most wickets (9), while other bowlers like DL Vettori and RP Singh also had notable performances.</p>
        <WicketDistribution />
        <p className='tutorial'>This chart shows the distribution of different types of wickets taken at three stadiums during the tournament (excluding the final game). Each bar represents a stadium, and the colored segments show the proportion of wickets taken by various dismissal types:</p>
        <ul className='tutorial-list'>
          <li><strong>Bowled (blue):</strong> When the ball hits the stumps directly.</li>
          <li><strong>Caught (orange):</strong> When a fielder catches the ball before it hits the ground.</li>
          <li><strong>Caught and bowled (red):</strong> When the bowler catches the ball from the batter's shot.</li>
          <li><strong>Hit wicket (teal):</strong> When the batter accidentally hits their stumps while playing a shot.</li>
          <li><strong>LBW (green):</strong> Leg Before Wicket, when the batter is out because the ball hits their leg in front of the stumps.</li>
          <li><strong>Run out (yellow):</strong> When the batter fails to complete a run before the stumps are broken.</li>
          <li><strong>Stumped (purple):</strong> When the wicketkeeper removes the stumps while the batter is out of their crease.</li>
        </ul>
        <p className='tutorial'><b>Key insights:</b></p>
        <ul className='tutorial-list'>
          <li><b>Caught</b> is the most common dismissal type across all three stadiums.</li>
          <li><b>Bowled</b> also occurs frequently, contributing significantly to the total wickets.</li>
          <li>Other dismissal types like run out and <b>LBW</b> have a smaller but consistent presence.</li>
          <li>The trends are fairly similar across all three venues, showing no major variations in how wickets were taken.</li>
        </ul>
        <br />



        <p className='subtitle'>Yet Pakistan refused to back down. Their middle order steadied the innings, partnerships forming and rebuilding the chase. Runs flowed, boundaries came, and the equation began to favor Pakistan. With every over, the tension grew.
        </p>


        <PakistanPerformance />
        <p className='tutorial'>The above graph summarizes how the Pakistan team performaned in their batting phase. The first column represents the batters, the second represents the bowler that bowled the balls to the batter, the third shows the result of the ball, and the last column shows the total number of points scored from each bowled ball.</p>
        <p className='tutorial'>&#9432; <b>Extras scored</b> refers to a special type of point scored for the batting team which result from errors of the fielding team. Common methods of error include "No-balls" (when the bowler performs an illegal action such as overstepping a boundary or the ball bouncing more than once.), "Wide ball" (the ball is too far from the batter), "Leg byes" (the ball hits the batter's body), or "Byes" (the wicketkeeper, the fielding player behind the batter, fails to catch balls that are not hit by the batter).</p>

        <h3>A Twist of Fate</h3>
        <p className='subtitle'>The turning point came late in the game. Wickets tumbled as India’s bowlers delivered under pressure. Harbhajan Singh spun webs around the batters, and Sreesanth’s pace added to Pakistan’s woes. Yet, Pakistan’s hopes rested on one man—Misbah-ul-Haq. Calm under pressure, Misbah had carried his team single-handedly to the brink of victory.</p>
        <p className='subtitle'>With 13 runs needed in the final over, Dhoni faced a crucial decision. The obvious choice would have been Harbhajan Singh, India’s most experienced bowler. Instead, Dhoni handed the ball to Joginder Sharma. The move shocked the commentators and crowd alike. What could Joginder, with limited experience, possibly bring to this high-pressure situation?</p>

        <JoginderPerf />
        <p className='tutorial'>The above graph shows the performance of Indian bowlers Harbhajan (Blue) and Joginder (Orange) in all matches leading up to the final. We can observe that the Average Strike Rate of batters against Harbhajan is higher than that against Joginder. Furthermore, Joginder generally has a better Average Economy Rate and Dot Ball Percentage as shown by the increased presence of Orange circles to the right of the median divider and Blue circles to the left of the divider. While Joginder is likely to bowl dot balls, Joginder is still a risky choice, since he generally conceded more sixes! This makes Dhoni’s decision of picking Joginder a risky but bold choice!</p>
        <h3>The Final Over</h3>
        <p className='subtitle'>The first ball was a wide, sending shockwaves through the Indian fans. The second was a dot, bringing momentary relief. On the third delivery, Misbah stepped forward and launched the ball over long-on for six. The stadium erupted. Pakistan now needed just seven runs off four balls.
        </p>
        <p className='subtitle'>The next ball was slower, deceptive. Misbah misjudged it and played defensively. Three balls remained. Then came the moment etched in cricketing history. Misbah attempted an audacious scoop shot over fine leg—a high-risk, high-reward gamble. Time seemed to slow as the ball sailed into the air, a hush falling over the crowd.</p>
        <p className='subtitle'>Sreesanth, positioned perfectly at short fine leg, steadied himself. As he cupped his hands around the ball, Wanderers Stadium exploded in celebration. Misbah’s gamble had failed. India had won.</p>

        <h1>The End!</h1>
        <p className='subtitle'>Oh you're still here? Interested in analyzing the tournament in its entirety? We have just the thing for you.</p>
        <NetworkGraph />
        <p className='tutorial'>The drop down menu lists all of the Indian team players and players from teams that faced India in the tournament. The nodes in the graph represent the players and an edge between two nodes shows that those two players have faced off at some point in the tournament. The directed edges of the network graph go from bowler to batter. All Indian players are shown in blue.</p>

        <p className='tutorial'>The node corresponding to the player selected in the dropdown is highlighted in orange. Clicking on a player highlights all players that the clicked player has faced off. Clicking on any one of the connected nodes gives a summary of all the balls in their face-off.</p>

        <p className='tutorial'>To view the summary of a new player pair, click on a random node to clear settings (may have to do multiple times). To remove the orange from a node, move your mouse over it.</p>



        <div className='dashboard'>
          <DashEmbed />
        </div>
        <p>Filter and hover to explore batting performance of the teams over all 20 overs yourself!</p>
        <br />
      </header>


    </div>
  );
}

export default App;