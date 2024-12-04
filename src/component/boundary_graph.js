import React, { useEffect } from 'react';
import * as d3 from 'd3';
import './boundary_graph.css'

const BoundaryGraph = () => {
  useEffect(() => {
    // Set up the SVG canvas
    const svg = d3.select("#cricket-visualization");
    const width = 800, height = 600;
    const centerX = width / 2, centerY = height / 2;
    const radius = 250;  // Radius of the cricket ground boundary

    // Clear any existing content before adding new SVG elements
    svg.selectAll("*").remove();

    // Draw the cricket ground (as a circle)
    svg.append("circle")
      .attr("cx", centerX)
      .attr("cy", centerY)
      .attr("r", radius)
      .attr("class", "ground");

    // Draw the boundary (circle outline)
    svg.append("circle")
      .attr("cx", centerX)
      .attr("cy", centerY)
      .attr("r", radius)
      .attr("class", "boundary");

    // Draw the pitch (rectangle in the center)
    const pitchWidth = 30; // Width of the pitch
    const pitchHeight = 90; // Height of the pitch
    svg.append("rect")
      .attr("x", centerX - pitchWidth / 2)
      .attr("y", centerY - pitchHeight / 2)
      .attr("width", pitchWidth)
      .attr("height", pitchHeight)
      .attr("class", "pitch");

    // Sample data for 8 boundaries and 2 sixes (in polar coordinates)
    const ballTrajectories = [
      { angle: 110, height: 50 },
      { angle: 30, height: 60 },
      { angle: 20, height: 55 },
      { angle: 220, height: 70 },
      { angle: 210, height: 50 },
      { angle: 310, height: 80 },
      { angle: 330, height: 40 },
      { angle: 340, height: 65 },
    ];

    const sixes = [
      { angle: 195, height: 40 },
      { angle: 230, height: 65 },
    ];

    // Draw ball trajectories with animation
    ballTrajectories.forEach((trajectory) => {
      const x1 = centerX;
      const y1 = centerY - pitchHeight * 0.4;
      const x2 = centerX + radius * Math.cos((trajectory.angle * Math.PI) / 180);
      const y2 = centerY - radius * Math.sin((trajectory.angle * Math.PI) / 180);

      // Draw the trajectory line
      svg.append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("class", "trajectory")
        .on("mouseover", function () {
          d3.select(this).attr("stroke", "orange").attr("stroke-width", 4);
        })
        .on("mouseout", function () {
          d3.select(this).attr("stroke", "blue").attr("stroke-width", 2);
        });

      // Draw and animate the ball at the end of each trajectory
      svg.append("circle")
        .attr("cx", x1)
        .attr("cy", y1)
        .attr("r", 5)
        .attr("class", "ball ball-3d")
        .transition()
        .duration(2000)
        .ease(d3.easeBounce)
        .attr("cx", x2)
        .attr("cy", y2)
        .on("end", function () {
          d3.select(this).attr("r", 6).attr("class", "ball ball-3d");
        });
    });

    sixes.forEach((trajectory) => {
      const x1 = centerX;
      const y1 = centerY - pitchHeight * 0.4;
      let x2 = 0;
      let y2 = 0;

      if (trajectory.angle === 195) {
        x2 = centerX + radius * Math.cos((trajectory.angle * Math.PI) / 180) * 1.3;
        y2 = centerY - radius * Math.sin((trajectory.angle * Math.PI) / 180) * 1.3;
      } else {
        x2 = centerX + radius * Math.cos((trajectory.angle * Math.PI) / 180) * 1.1;
        y2 = centerY - radius * Math.sin((trajectory.angle * Math.PI) / 180) * 1.1;
      }

      // Draw the trajectory line
      svg.append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("class", "six")
        .on("mouseover", function () {
          d3.select(this).attr("stroke", "orange").attr("stroke-width", 4);
        })
        .on("mouseout", function () {
          d3.select(this).attr("stroke", "red").attr("stroke-width", 2);
        });

      // Draw and animate the ball at the end of each trajectory
      svg.append("circle")
        .attr("cx", x1)
        .attr("cy", y1)
        .attr("r", 5)
        .attr("class", "ball ball-3d")
        .transition()
        .duration(2000)
        .ease(d3.easeBounce)
        .attr("cx", x2)
        .attr("cy", y2)
        .on("end", function () {
          d3.select(this).attr("r", 6).attr("class", "ball ball-3d");
        });
    });

    // Add a legend
    const legend = svg.append("g")
      .attr("class", "legend")
      .attr("transform", "translate(100, 70)");

    // Add legend items for 'four' and 'six'
    legend.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", "blue")
      .attr("class", "legend-color-box");

    legend.append("text")
      .attr("x", 30)
      .attr("y", 15)
      .text("Fours")
      .attr("class", "text")

    legend.append("rect")
      .attr("x", 0)
      .attr("y", 30)
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", "red")
      .attr("class", "legend-color-box");

    legend.append("text")
      .attr("x", 30)
      .attr("y", 45)
      .text("Sixes")
      .attr("class", "text")  

  }, []);

  return (
    <div>
      <svg id="cricket-visualization" width="800" height="600"></svg>
    </div>
  );
};

export default BoundaryGraph;
