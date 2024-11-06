import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, width = 500, height = 300 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Set up the margins and dimensions
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Select the SVG element and set up the chart container
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('border', '1px solid #ddd')
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Set up the scales
    const x = d3.scaleBand()
      .domain(data.map(d => d.name)) // Use the name property of the data for x-axis
      .range([0, chartWidth])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)]) // Use the max value for y-axis
      .nice() // Smooth out the domain of the y-axis
      .range([chartHeight, 0]);

    // Add x-axis
    svg.append('g')
      .selectAll('.x-axis')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(x));

    // Add y-axis
    svg.append('g')
      .selectAll('.y-axis')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y));

    // Add bars
    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', d => chartHeight - y(d.value))
      .attr('fill', '#69b3a2');

    return () => {
      // Cleanup: Remove the previous chart on rerender
      svg.selectAll('*').remove();
    };
  }, [data, width, height]);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
