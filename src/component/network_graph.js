import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './network_graph.css'

const GraphVisualization = () => {
  const svgRef = useRef(null);
  const indianPlayers = [
    'G Gambhir', 'RV Uthappa', 'V Sehwag', 'Yuvraj Singh', 'KD Karthik', 'MS Dhoni', 'IK Pathan',
    'Harbhajan Singh', 'AB Agarkar', 'S Sreesanth', 'RP Singh', 'Joginder Sharma', 'RG Sharma', 'YK Pathan'
  ];

  const data = [
    {
      "source": "Mohammad Asif",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '0', '0', '1', '1', '1', '1', '1', 'W', 'wd']"
    },
    {
      "source": "Mohammad Asif",
      "target": "RV Uthappa",
      "info": "['0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '4', '4']"
    },
    {
      "source": "Mohammad Asif",
      "target": "V Sehwag",
      "info": "['W']"
    },
    {
      "source": "Mohammad Asif",
      "target": "Yuvraj Singh",
      "info": "['1', 'W']"
    },
    {
      "source": "Mohammad Asif",
      "target": "KD Karthik",
      "info": "['0', '0', '0', '0', '2', '4', '4', 'W', 'wd']"
    },
    {
      "source": "Mohammad Asif",
      "target": "MS Dhoni",
      "info": "['0', '0']"
    },
    {
      "source": "Mohammad Asif",
      "target": "YK Pathan",
      "info": "['1', '3', '4', '6', 'W']"
    },
    {
      "source": "Umar Gul",
      "target": "RV Uthappa",
      "info": "['0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '2', '2', '4', 'wd']"
    },
    {
      "source": "Umar Gul",
      "target": "V Sehwag",
      "info": "['1', '4']"
    },
    {
      "source": "Umar Gul",
      "target": "Yuvraj Singh",
      "info": "['0', '1', '1lb', 'W', 'wd']"
    },
    {
      "source": "Umar Gul",
      "target": "KD Karthik",
      "info": "['1']"
    },
    {
      "source": "Umar Gul",
      "target": "AB Agarkar",
      "info": "['0', '1', '4', '4']"
    },
    {
      "source": "Umar Gul",
      "target": "MS Dhoni",
      "info": "['0', '0', '0', '0nb', '1', '1', 'W']"
    },
    {
      "source": "Umar Gul",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '1', '1', '1', '1', '1', '1', '4', '4', '6', 'W']"
    },
    {
      "source": "Umar Gul",
      "target": "RG Sharma",
      "info": "['0', '1', '1', '1', '1']"
    },
    {
      "source": "Yasir Arafat",
      "target": "RV Uthappa",
      "info": "['0', '0', '1', '2', '2', '2', '6', '6']"
    },
    {
      "source": "Yasir Arafat",
      "target": "MS Dhoni",
      "info": "['0', '1', '1', '1lb', '4', '4', '6', 'W']"
    },
    {
      "source": "Yasir Arafat",
      "target": "Harbhajan Singh",
      "info": "['0', '0', '1']"
    },
    {
      "source": "Yasir Arafat",
      "target": "AB Agarkar",
      "info": "['1', '1']"
    },
    {
      "source": "Yasir Arafat",
      "target": "S Sreesanth",
      "info": "['0', '1', 'W']"
    },
    {
      "source": "Yasir Arafat",
      "target": "RG Sharma",
      "info": "['1', '1', '1', '2', '4', '4']"
    },
    {
      "source": "Yasir Arafat",
      "target": "G Gambhir",
      "info": "['0', '1', '1', '2']"
    },
    {
      "source": "Yasir Arafat",
      "target": "IK Pathan",
      "info": "['0', '2']"
    },
    {
      "source": "Sohail Tanvir",
      "target": "MS Dhoni",
      "info": "['0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '4', 'wd']"
    },
    {
      "source": "Sohail Tanvir",
      "target": "RV Uthappa",
      "info": "['0', '0', '0', '1', '1', '1', '1', '1', '2', 'W', 'W', 'wd']"
    },
    {
      "source": "Sohail Tanvir",
      "target": "IK Pathan",
      "info": "['0', '0', '0', '1', '1', '1', '1']"
    },
    {
      "source": "Sohail Tanvir",
      "target": "YK Pathan",
      "info": "['0', '0', '1']"
    },
    {
      "source": "Sohail Tanvir",
      "target": "G Gambhir",
      "info": "['0', '1', '1', '1', '1', '1', '4', 'wd']"
    },
    {
      "source": "Sohail Tanvir",
      "target": "Yuvraj Singh",
      "info": "['0', '0']"
    },
    {
      "source": "Sohail Tanvir",
      "target": "RG Sharma",
      "info": "['1', '2', '2', '2', '6']"
    },
    {
      "source": "Shahid Afridi",
      "target": "MS Dhoni",
      "info": "['0', '0', '1', '1', '1', '1', '1', '1', '1', '2', '2']"
    },
    {
      "source": "Shahid Afridi",
      "target": "RV Uthappa",
      "info": "['0', '1', '2', '4', '4']"
    },
    {
      "source": "Shahid Afridi",
      "target": "IK Pathan",
      "info": "['0', '0', '0', '1', '1', '3', '6', '6', 'W']"
    },
    {
      "source": "Shahid Afridi",
      "target": "Harbhajan Singh",
      "info": "['W']"
    },
    {
      "source": "Shahid Afridi",
      "target": "AB Agarkar",
      "info": "['1', '1', '1']"
    },
    {
      "source": "Shahid Afridi",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '1', '1', '1', '1', '1lb', '2', '4', '6']"
    },
    {
      "source": "Shahid Afridi",
      "target": "Yuvraj Singh",
      "info": "['0', '0', '1', '1', '1', '1', '1', '4']"
    },
    {
      "source": "RP Singh",
      "target": "Salman Butt",
      "info": "['0', '0', '0', '0', '0', '0', '1', '1', '1', '1', 'wd', 'wd']"
    },
    {
      "source": "RP Singh",
      "target": "Imran Nazir",
      "info": "['0', '0', '0', '0', '0', '1', '1', '1', '1nb', '4', '4', '4', 'W', 'wd']"
    },
    {
      "source": "RP Singh",
      "target": "Kamran Akmal",
      "info": "['0', '0', '0', '0', '0', '1', '1', '1lb', '2lb', '4', '6', 'W']"
    },
    {
      "source": "RP Singh",
      "target": "L Vincent",
      "info": "['1', '1', 'W']"
    },
    {
      "source": "RP Singh",
      "target": "BB McCullum",
      "info": "['0', '0', '0', '0', '1', '1', '1lb', '1lb', '4', '4', '4', '4', 'wd']"
    },
    {
      "source": "RP Singh",
      "target": "PG Fulton",
      "info": "['1', '1', '1lb', 'wd']"
    },
    {
      "source": "RP Singh",
      "target": "DL Vettori",
      "info": "['W']"
    },
    {
      "source": "RP Singh",
      "target": "SE Bond",
      "info": "['4', 'W']"
    },
    {
      "source": "RP Singh",
      "target": "CD McMillan",
      "info": "['1']"
    },
    {
      "source": "RP Singh",
      "target": "MR Gillespie",
      "info": "['W']"
    },
    {
      "source": "RP Singh",
      "target": "JS Patel",
      "info": "['W']"
    },
    {
      "source": "RP Singh",
      "target": "DL Maddy",
      "info": "['1', '1', '1lb', '2', '4']"
    },
    {
      "source": "RP Singh",
      "target": "VS Solanki",
      "info": "['0', '0', '0', '1', '1', '4', '4']"
    },
    {
      "source": "RP Singh",
      "target": "PD Collingwood",
      "info": "['0', '1', '1', '1', 'W']"
    },
    {
      "source": "RP Singh",
      "target": "KP Pietersen",
      "info": "['1', '1', '1']"
    },
    {
      "source": "RP Singh",
      "target": "OA Shah",
      "info": "['0', '0', '2wd', 'W']"
    },
    {
      "source": "RP Singh",
      "target": "LJ Wright",
      "info": "['1']"
    },
    {
      "source": "RP Singh",
      "target": "HH Gibbs",
      "info": "['W']"
    },
    {
      "source": "RP Singh",
      "target": "AB de Villiers",
      "info": "['1']"
    },
    {
      "source": "RP Singh",
      "target": "GC Smith",
      "info": "['0', 'W']"
    },
    {
      "source": "RP Singh",
      "target": "JM Kemp",
      "info": "['0', '0', '0', '0', '1']"
    },
    {
      "source": "RP Singh",
      "target": "MV Boucher",
      "info": "['0', '0', '0', '1lb', '2', '4', 'W', 'wd', 'wd']"
    },
    {
      "source": "RP Singh",
      "target": "SM Pollock",
      "info": "['W', 'wd']"
    },
    {
      "source": "RP Singh",
      "target": "JA Morkel",
      "info": "['0', '2', 'W']"
    },
    {
      "source": "RP Singh",
      "target": "JJ van der Wath",
      "info": "['0', '1lb']"
    },
    {
      "source": "RP Singh",
      "target": "M Morkel",
      "info": "['0', '0']"
    },
    {
      "source": "RP Singh",
      "target": "AC Gilchrist",
      "info": "['0', '0', '0', '0', '0', '0', '1', '1', '4', '4', '6', '6', 'wd']"
    },
    {
      "source": "RP Singh",
      "target": "ML Hayden",
      "info": "['0', '0', '0', '1', '1lb', '4']"
    },
    {
      "source": "RP Singh",
      "target": "BJ Haddin",
      "info": "['0', '0', '0', '0nb', '1', '2']"
    },
    {
      "source": "RP Singh",
      "target": "MEK Hussey",
      "info": "['1']"
    },
    {
      "source": "RP Singh",
      "target": "Mohammad Hafeez",
      "info": "['0', '1', 'W']"
    },
    {
      "source": "RP Singh",
      "target": "Younis Khan",
      "info": "['0', '1', '1', '1', '4']"
    },
    {
      "source": "RP Singh",
      "target": "Misbah-ul-Haq",
      "info": "['0', '1', '1lb']"
    },
    {
      "source": "RP Singh",
      "target": "Umar Gul",
      "info": "['1b', 'W']"
    },
    {
      "source": "RP Singh",
      "target": "Mohammad Asif",
      "info": "['4']"
    },
    {
      "source": "S Sreesanth",
      "target": "Salman Butt",
      "info": "['0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '4', '4', 'wd']"
    },
    {
      "source": "S Sreesanth",
      "target": "Imran Nazir",
      "info": "['0', '0', '0nb', '1', '3', '4', '4', '6', '6']"
    },
    {
      "source": "S Sreesanth",
      "target": "Kamran Akmal",
      "info": "['0', '1', '1']"
    },
    {
      "source": "S Sreesanth",
      "target": "Yasir Arafat",
      "info": "['1']"
    },
    {
      "source": "S Sreesanth",
      "target": "Misbah-ul-Haq",
      "info": "['0', '0', '1', '2', '4', '4', 'W']"
    },
    {
      "source": "S Sreesanth",
      "target": "L Vincent",
      "info": "['0', '1', '1lb']"
    },
    {
      "source": "S Sreesanth",
      "target": "BB McCullum",
      "info": "['0', '0', '0', '0', '1', '4', '4', '4', '4']"
    },
    {
      "source": "S Sreesanth",
      "target": "CD McMillan",
      "info": "['1', '6', '6']"
    },
    {
      "source": "S Sreesanth",
      "target": "JDP Oram",
      "info": "['0', '6', 'W']"
    },
    {
      "source": "S Sreesanth",
      "target": "DL Maddy",
      "info": "['0', '0', '1', '1', '1', '1', '4']"
    },
    {
      "source": "S Sreesanth",
      "target": "VS Solanki",
      "info": "['0', '0', '1', '1', '1', '1', '1']"
    },
    {
      "source": "S Sreesanth",
      "target": "KP Pietersen",
      "info": "['1', '2', '2', '4']"
    },
    {
      "source": "S Sreesanth",
      "target": "PD Collingwood",
      "info": "['1', '4', '6']"
    },
    {
      "source": "S Sreesanth",
      "target": "OA Shah",
      "info": "['0', '0', '4', 'wd']"
    },
    {
      "source": "S Sreesanth",
      "target": "HH Gibbs",
      "info": "['0', '1', '4wd', 'wd']"
    },
    {
      "source": "S Sreesanth",
      "target": "GC Smith",
      "info": "['0', '0', '0', '4']"
    },
    {
      "source": "S Sreesanth",
      "target": "AB de Villiers",
      "info": "['0', '0', 'W']"
    },
    {
      "source": "S Sreesanth",
      "target": "MV Boucher",
      "info": "['0', '0', '1', '1', 'W', 'wd', 'wd', 'wd', 'wd']"
    },
    {
      "source": "S Sreesanth",
      "target": "JM Kemp",
      "info": "['0', '0', '0', '0', '0', '0', '4']"
    },
    {
      "source": "S Sreesanth",
      "target": "JA Morkel",
      "info": "['1']"
    },
    {
      "source": "S Sreesanth",
      "target": "VD Philander",
      "info": "['0', '1']"
    },
    {
      "source": "S Sreesanth",
      "target": "ML Hayden",
      "info": "['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2lb', '4', 'W']"
    },
    {
      "source": "S Sreesanth",
      "target": "AC Gilchrist",
      "info": "['W']"
    },
    {
      "source": "S Sreesanth",
      "target": "BJ Hodge",
      "info": "['0', '0', '1']"
    },
    {
      "source": "S Sreesanth",
      "target": "A Symonds",
      "info": "['0', '0', '1', '4']"
    },
    {
      "source": "S Sreesanth",
      "target": "MEK Hussey",
      "info": "['1']"
    },
    {
      "source": "S Sreesanth",
      "target": "Younis Khan",
      "info": "['0', '0', '0', '0', '0', '0', '0', '4', '4', 'W', 'wd']"
    },
    {
      "source": "S Sreesanth",
      "target": "Shoaib Malik",
      "info": "['0', '0']"
    },
    {
      "source": "S Sreesanth",
      "target": "Sohail Tanvir",
      "info": "['1lb', '6', '6', 'W', 'wd']"
    },
    {
      "source": "AB Agarkar",
      "target": "Salman Butt",
      "info": "['2', 'W']"
    },
    {
      "source": "AB Agarkar",
      "target": "Younis Khan",
      "info": "['0', '1', '1']"
    },
    {
      "source": "AB Agarkar",
      "target": "Kamran Akmal",
      "info": "['1']"
    },
    {
      "source": "AB Agarkar",
      "target": "Shoaib Malik",
      "info": "['0', '0', '0', '1', '4']"
    },
    {
      "source": "AB Agarkar",
      "target": "Misbah-ul-Haq",
      "info": "['0', '1', '1', '1', '2', '4', '4']"
    },
    {
      "source": "AB Agarkar",
      "target": "Shahid Afridi",
      "info": "['0', '1']"
    },
    {
      "source": "AB Agarkar",
      "target": "Yasir Arafat",
      "info": "['1', '2', '4', '4']"
    },
    {
      "source": "AB Agarkar",
      "target": "PG Fulton",
      "info": "['0', '0', '0', '0', '0', '0', '0', '1', '1', '2', '6']"
    },
    {
      "source": "AB Agarkar",
      "target": "BB McCullum",
      "info": "['1']"
    },
    {
      "source": "AB Agarkar",
      "target": "JDP Oram",
      "info": "['1', '1', '2']"
    },
    {
      "source": "AB Agarkar",
      "target": "CD McMillan",
      "info": "['0', '1', '1', '2', '6']"
    },
    {
      "source": "AB Agarkar",
      "target": "DL Vettori",
      "info": "['3', '4', '4', '4']"
    },
    {
      "source": "IK Pathan",
      "target": "Younis Khan",
      "info": "['0', '0', '0', 'W', 'W']"
    },
    {
      "source": "IK Pathan",
      "target": "Misbah-ul-Haq",
      "info": "['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '4', 'wd']"
    },
    {
      "source": "IK Pathan",
      "target": "Shoaib Malik",
      "info": "['0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '4', '4', 'W', 'W']"
    },
    {
      "source": "IK Pathan",
      "target": "PG Fulton",
      "info": "['0', '1', '1', '4', 'wd']"
    },
    {
      "source": "IK Pathan",
      "target": "BB McCullum",
      "info": "['0', '0', '1', '1', '2', '4']"
    },
    {
      "source": "IK Pathan",
      "target": "LRPL Taylor",
      "info": "['0', '1']"
    },
    {
      "source": "IK Pathan",
      "target": "DL Maddy",
      "info": "['0', '2', '6', 'W']"
    },
    {
      "source": "IK Pathan",
      "target": "VS Solanki",
      "info": "['0', '1', '4', 'W']"
    },
    {
      "source": "IK Pathan",
      "target": "KP Pietersen",
      "info": "['1', '1', '1', '1']"
    },
    {
      "source": "IK Pathan",
      "target": "PD Collingwood",
      "info": "['0', '0', '0', '1', '1', '1']"
    },
    {
      "source": "IK Pathan",
      "target": "LJ Wright",
      "info": "['1', '4', '6', 'W', 'wd']"
    },
    {
      "source": "IK Pathan",
      "target": "A Flintoff",
      "info": "['1', '4']"
    },
    {
      "source": "IK Pathan",
      "target": "MV Boucher",
      "info": "['0', '0', '0', '0', '1', '1', '1', '1', '1', '1lb', '1lb']"
    },
    {
      "source": "IK Pathan",
      "target": "JA Morkel",
      "info": "['0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '2', '4', 'wd']"
    },
    {
      "source": "IK Pathan",
      "target": "BJ Hodge",
      "info": "['0', '0', '1', '2', 'W']"
    },
    {
      "source": "IK Pathan",
      "target": "ML Hayden",
      "info": "['0', '1', '1', '1', '2', '2', '4', '6', 'wd']"
    },
    {
      "source": "IK Pathan",
      "target": "A Symonds",
      "info": "['0', '1', '1', '1', '4', '6', 'W']"
    },
    {
      "source": "IK Pathan",
      "target": "MEK Hussey",
      "info": "['1', '6']"
    },
    {
      "source": "IK Pathan",
      "target": "MJ Clarke",
      "info": "['1', '2']"
    },
    {
      "source": "IK Pathan",
      "target": "Shahid Afridi",
      "info": "['W', 'wd']"
    },
    {
      "source": "IK Pathan",
      "target": "Yasir Arafat",
      "info": "['0', '0', '1', '1', '4', 'W']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "Shoaib Malik",
      "info": "['1', '1', '1', '1']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "Misbah-ul-Haq",
      "info": "['0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1lb', '2', '2', '2', '4', '4', '6', '6', '6', '6', 'wd']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "Shahid Afridi",
      "info": "['0', '0', '1', '1', '2', '2', 'W']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "PG Fulton",
      "info": "['0', '0', '0', '3', 'W']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "BB McCullum",
      "info": "['1', '1lb', 'W']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "LRPL Taylor",
      "info": "['0', '1', '1', '6']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "SB Styris",
      "info": "['1', 'W']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "CD McMillan",
      "info": "['0', '0', '0', '1', '1', '1lb', '2']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "JDP Oram",
      "info": "['1', '1', '4', 'wd']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "KP Pietersen",
      "info": "['1', '1', '1', '1lb', '2', 'W']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "VS Solanki",
      "info": "['1', '1', '1', '1', '1', '2lb', '4']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "OA Shah",
      "info": "['1', '1', '4', 'wd']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "PD Collingwood",
      "info": "['1', '1']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "LJ Wright",
      "info": "['0', '1', '1', '2', '4wd']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "A Flintoff",
      "info": "['1', '2']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "MV Boucher",
      "info": "['0', '0', '1', '1', '1', '1', '4', '4', '4']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "JA Morkel",
      "info": "['1', '1', '1', '2', '2']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "VD Philander",
      "info": "['0', '1', 'W']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "JJ van der Wath",
      "info": "['0', '1', '1', 'W']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "M Morkel",
      "info": "['1']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "M Ntini",
      "info": "['1lb', '4']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "ML Hayden",
      "info": "['0', '0', '0', '0', '1', '1', '1', '2', '2']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "A Symonds",
      "info": "['0', '0', '1', '1', '1', '1', '2', '2', '6']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "MJ Clarke",
      "info": "['W']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "BJ Haddin",
      "info": "['1', '1']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "MEK Hussey",
      "info": "['0', '0', '1']"
    },
    {
      "source": "Harbhajan Singh",
      "target": "Yasir Arafat",
      "info": "['1', '1', '1', '2', '4']"
    },
    {
      "source": "Yuvraj Singh",
      "target": "SB Styris",
      "info": "['0', '1']"
    },
    {
      "source": "Yuvraj Singh",
      "target": "LRPL Taylor",
      "info": "['0', '2', 'W']"
    },
    {
      "source": "Yuvraj Singh",
      "target": "CD McMillan",
      "info": "['0', '1', '1', '2', '2', '4', '6']"
    },
    {
      "source": "Yuvraj Singh",
      "target": "JDP Oram",
      "info": "['1', '1', '1', '4', '6', '6']"
    },
    {
      "source": "SE Bond",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '0', '0', '1', '1', '1', '2', '2', '4', '4', '4', '6']"
    },
    {
      "source": "SE Bond",
      "target": "V Sehwag",
      "info": "['1']"
    },
    {
      "source": "SE Bond",
      "target": "MS Dhoni",
      "info": "['1', '1', '1']"
    },
    {
      "source": "SE Bond",
      "target": "S Sreesanth",
      "info": "['0', '1', '1', '4', '4']"
    },
    {
      "source": "SE Bond",
      "target": "Harbhajan Singh",
      "info": "['W']"
    },
    {
      "source": "MR Gillespie",
      "target": "V Sehwag",
      "info": "['0', '0', '0', '1', '1', '4', '4', '6', 'wd']"
    },
    {
      "source": "MR Gillespie",
      "target": "G Gambhir",
      "info": "['0', '1', '2', '4', 'wd']"
    },
    {
      "source": "MR Gillespie",
      "target": "Harbhajan Singh",
      "info": "['0', '0', '1', '2', '4']"
    },
    {
      "source": "MR Gillespie",
      "target": "AB Agarkar",
      "info": "['W']"
    },
    {
      "source": "MR Gillespie",
      "target": "S Sreesanth",
      "info": "['0', '1', '2lb', '4', '4']"
    },
    {
      "source": "MR Gillespie",
      "target": "RP Singh",
      "info": "['1']"
    },
    {
      "source": "JS Patel",
      "target": "V Sehwag",
      "info": "['1', '4', '4', '4', '6']"
    },
    {
      "source": "JS Patel",
      "target": "G Gambhir",
      "info": "['1']"
    },
    {
      "source": "JS Patel",
      "target": "Yuvraj Singh",
      "info": "['1', 'W']"
    },
    {
      "source": "JS Patel",
      "target": "MS Dhoni",
      "info": "['1', '1', '4']"
    },
    {
      "source": "JS Patel",
      "target": "KD Karthik",
      "info": "['0', '1', '1']"
    },
    {
      "source": "JS Patel",
      "target": "IK Pathan",
      "info": "['0', '1', '4', '4']"
    },
    {
      "source": "JDP Oram",
      "target": "G Gambhir",
      "info": "['1', '1', '1', '4']"
    },
    {
      "source": "JDP Oram",
      "target": "V Sehwag",
      "info": "['0', '4', 'W']"
    },
    {
      "source": "JDP Oram",
      "target": "RV Uthappa",
      "info": "['0']"
    },
    {
      "source": "JDP Oram",
      "target": "MS Dhoni",
      "info": "['0', '1', '1', '1']"
    },
    {
      "source": "DL Vettori",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '1', '1', '6', 'W']"
    },
    {
      "source": "DL Vettori",
      "target": "RV Uthappa",
      "info": "['W']"
    },
    {
      "source": "DL Vettori",
      "target": "MS Dhoni",
      "info": "['0', '1', '1']"
    },
    {
      "source": "DL Vettori",
      "target": "Yuvraj Singh",
      "info": "['1']"
    },
    {
      "source": "DL Vettori",
      "target": "IK Pathan",
      "info": "['0', '0', '0', '1', '1', 'W']"
    },
    {
      "source": "DL Vettori",
      "target": "KD Karthik",
      "info": "['0', '1', '1', '4', 'W']"
    },
    {
      "source": "DL Vettori",
      "target": "AB Agarkar",
      "info": "['1']"
    },
    {
      "source": "SB Styris",
      "target": "MS Dhoni",
      "info": "['1', '1', '1', '1', '1', '1', '4']"
    },
    {
      "source": "SB Styris",
      "target": "G Gambhir",
      "info": "['1', '1', '1']"
    },
    {
      "source": "SB Styris",
      "target": "Yuvraj Singh",
      "info": "['0', '1', '1', '1']"
    },
    {
      "source": "SB Styris",
      "target": "KD Karthik",
      "info": "['1', '4', '4', 'W']"
    },
    {
      "source": "JM Anderson",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '2', '2', '2', '4', 'wd', 'wd']"
    },
    {
      "source": "JM Anderson",
      "target": "V Sehwag",
      "info": "['0', '0', '0', '1', '1', '1', '1', '1', '1lb', '4lb', 'wd', 'wd']"
    },
    {
      "source": "SCJ Broad",
      "target": "V Sehwag",
      "info": "['0', '0', '0', '0', '0', '1', '1', '1', '1', '2', '3', '4', 'wd', 'wd']"
    },
    {
      "source": "SCJ Broad",
      "target": "G Gambhir",
      "info": "['0', '0', '1', '1', '1', '6']"
    },
    {
      "source": "SCJ Broad",
      "target": "Yuvraj Singh",
      "info": "['6', '6', '6', '6', '6', '6']"
    },
    {
      "source": "A Flintoff",
      "target": "V Sehwag",
      "info": "['0', '0', '0', '0', '0', '1', '1', '2', '2', '2', 'wd']"
    },
    {
      "source": "A Flintoff",
      "target": "G Gambhir",
      "info": "['0', '1']"
    },
    {
      "source": "A Flintoff",
      "target": "MS Dhoni",
      "info": "['1', '1', '1', '2']"
    },
    {
      "source": "A Flintoff",
      "target": "Yuvraj Singh",
      "info": "['0', '1', '1', '2', '4', '4', '6', 'W']"
    },
    {
      "source": "AD Mascarenhas",
      "target": "V Sehwag",
      "info": "['1', '1', '2', '4', '6']"
    },
    {
      "source": "AD Mascarenhas",
      "target": "G Gambhir",
      "info": "['1']"
    },
    {
      "source": "CT Tremlett",
      "target": "V Sehwag",
      "info": "['0', '0', '0', '1', '1', '1', '2', '4', '6', 'W']"
    },
    {
      "source": "CT Tremlett",
      "target": "G Gambhir",
      "info": "['0', '1', '1', '1lb', '1nb', '1wd', '4', '4', '4']"
    },
    {
      "source": "CT Tremlett",
      "target": "RV Uthappa",
      "info": "['1', '1', '4', 'W', 'wd']"
    },
    {
      "source": "CT Tremlett",
      "target": "MS Dhoni",
      "info": "['1']"
    },
    {
      "source": "CT Tremlett",
      "target": "Yuvraj Singh",
      "info": "['0', '4']"
    },
    {
      "source": "PD Collingwood",
      "target": "V Sehwag",
      "info": "['1', '1', '4', '6']"
    },
    {
      "source": "PD Collingwood",
      "target": "G Gambhir",
      "info": "['0', '1']"
    },
    {
      "source": "DL Maddy",
      "target": "G Gambhir",
      "info": "['0', '1', '1lb', '2', '4', '4', '4', 'W']"
    },
    {
      "source": "DL Maddy",
      "target": "V Sehwag",
      "info": "['1']"
    },
    {
      "source": "DL Maddy",
      "target": "MS Dhoni",
      "info": "['0', '2', '2']"
    },
    {
      "source": "Joginder Sharma",
      "target": "DL Maddy",
      "info": "['0', '0', '1', '4']"
    },
    {
      "source": "Joginder Sharma",
      "target": "VS Solanki",
      "info": "['0', '1', '1', '2', '4', '6']"
    },
    {
      "source": "Joginder Sharma",
      "target": "KP Pietersen",
      "info": "['1', '1', '2', '4', '4', '6']"
    },
    {
      "source": "Joginder Sharma",
      "target": "PD Collingwood",
      "info": "['1', '1', '3', '4']"
    },
    {
      "source": "Joginder Sharma",
      "target": "OA Shah",
      "info": "['1', '1lb', '4', '6']"
    },
    {
      "source": "Joginder Sharma",
      "target": "MV Boucher",
      "info": "['0', '1', '1', '1', '1', '1', '1', '1', '4lb', 'wd']"
    },
    {
      "source": "Joginder Sharma",
      "target": "JA Morkel",
      "info": "['0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '2', '4', '6']"
    },
    {
      "source": "Joginder Sharma",
      "target": "BJ Hodge",
      "info": "['1', '6']"
    },
    {
      "source": "Joginder Sharma",
      "target": "ML Hayden",
      "info": "['0', '1', '4', '6']"
    },
    {
      "source": "Joginder Sharma",
      "target": "MEK Hussey",
      "info": "['0', '0', '1', '2', 'W']"
    },
    {
      "source": "Joginder Sharma",
      "target": "A Symonds",
      "info": "['1', '2', '2', '4', 'wd']"
    },
    {
      "source": "Joginder Sharma",
      "target": "B Lee",
      "info": "['2', 'W']"
    },
    {
      "source": "Joginder Sharma",
      "target": "MG Johnson",
      "info": "['4']"
    },
    {
      "source": "Joginder Sharma",
      "target": "Younis Khan",
      "info": "['0', '0', '1', '1', '4', 'W']"
    },
    {
      "source": "Joginder Sharma",
      "target": "Shoaib Malik",
      "info": "['0', '0', '0', '1', '1', '1']"
    },
    {
      "source": "Joginder Sharma",
      "target": "Misbah-ul-Haq",
      "info": "['0', '0', '0', '0', '0', '1', '2', '6', 'W', 'wd', 'wd']"
    },
    {
      "source": "SM Pollock",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '0', '0', '1', '1', '2', '4', 'W']"
    },
    {
      "source": "SM Pollock",
      "target": "V Sehwag",
      "info": "['0', '0', '1', '1', '1', '1', '2']"
    },
    {
      "source": "SM Pollock",
      "target": "KD Karthik",
      "info": "['W']"
    },
    {
      "source": "SM Pollock",
      "target": "RG Sharma",
      "info": "['1']"
    },
    {
      "source": "SM Pollock",
      "target": "RV Uthappa",
      "info": "['0', '0', '0', '0', '2']"
    },
    {
      "source": "M Ntini",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '0', '0', '1', '2', '4', '4', 'wd', 'wd']"
    },
    {
      "source": "M Ntini",
      "target": "V Sehwag",
      "info": "['1', '1b', '4', 'W']"
    },
    {
      "source": "M Ntini",
      "target": "RG Sharma",
      "info": "['0', '0', '1', '4', '4']"
    },
    {
      "source": "M Ntini",
      "target": "RV Uthappa",
      "info": "['0', '0']"
    },
    {
      "source": "M Ntini",
      "target": "MS Dhoni",
      "info": "['0', '0', '1', '2']"
    },
    {
      "source": "JJ van der Wath",
      "target": "RG Sharma",
      "info": "['0', '0', '0', '0', '0', '1', '1', '1', '4', '4', '4', '6', '6']"
    },
    {
      "source": "JJ van der Wath",
      "target": "RV Uthappa",
      "info": "['0', '0', '1', '1', '6']"
    },
    {
      "source": "JJ van der Wath",
      "target": "MS Dhoni",
      "info": "['0', '1', '2', '4', 'W+1']"
    },
    {
      "source": "JJ van der Wath",
      "target": "IK Pathan",
      "info": "['1b']"
    },
    {
      "source": "M Morkel",
      "target": "RG Sharma",
      "info": "['0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1lb', '4']"
    },
    {
      "source": "M Morkel",
      "target": "RV Uthappa",
      "info": "['0', '1', '4', 'W']"
    },
    {
      "source": "M Morkel",
      "target": "MS Dhoni",
      "info": "['0', '1', '1', '1', '1', '2', '4', '4nb', '6']"
    },
    {
      "source": "VD Philander",
      "target": "MS Dhoni",
      "info": "['0', '0', '1', '1', '1', '1', '2', '4wd']"
    },
    {
      "source": "VD Philander",
      "target": "RG Sharma",
      "info": "['0', '0', '0', '1', '1', 'wd']"
    },
    {
      "source": "JA Morkel",
      "target": "MS Dhoni",
      "info": "['0', '0', '0', '1', '1', '1', '1', '4']"
    },
    {
      "source": "JA Morkel",
      "target": "RG Sharma",
      "info": "['0', '1', '1lb', '4']"
    },
    {
      "source": "B Lee",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '0', '1', '4']"
    },
    {
      "source": "B Lee",
      "target": "V Sehwag",
      "info": "['0', '0', '0', '0', '0', '1']"
    },
    {
      "source": "B Lee",
      "target": "Yuvraj Singh",
      "info": "['0', '0', '1', '1', '2', '2', '6']"
    },
    {
      "source": "B Lee",
      "target": "RV Uthappa",
      "info": "['1', '2']"
    },
    {
      "source": "B Lee",
      "target": "MS Dhoni",
      "info": "['1', '1', '2']"
    },
    {
      "source": "NW Bracken",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '0', '0', '1', '1', '4', '4']"
    },
    {
      "source": "NW Bracken",
      "target": "V Sehwag",
      "info": "['1', '1', '1lb']"
    },
    {
      "source": "NW Bracken",
      "target": "RV Uthappa",
      "info": "['1', '1', '1lb']"
    },
    {
      "source": "NW Bracken",
      "target": "Yuvraj Singh",
      "info": "['1', '1', '4']"
    },
    {
      "source": "NW Bracken",
      "target": "RG Sharma",
      "info": "['0', '1', '6']"
    },
    {
      "source": "NW Bracken",
      "target": "MS Dhoni",
      "info": "['1', '4', '6']"
    },
    {
      "source": "SR Clark",
      "target": "V Sehwag",
      "info": "['1', '1']"
    },
    {
      "source": "SR Clark",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '1', '1', '1', '4']"
    },
    {
      "source": "SR Clark",
      "target": "RV Uthappa",
      "info": "['0', '0', '0', '0', '0', '1']"
    },
    {
      "source": "SR Clark",
      "target": "Yuvraj Singh",
      "info": "['0', '1', '2', '2', '2', '4', '4', '6', '6', 'wd']"
    },
    {
      "source": "MG Johnson",
      "target": "V Sehwag",
      "info": "['4', 'W']"
    },
    {
      "source": "MG Johnson",
      "target": "RV Uthappa",
      "info": "['0', '0', '0', '0', '1', '1', '4', '6', '6', 'W']"
    },
    {
      "source": "MG Johnson",
      "target": "G Gambhir",
      "info": "['1', '1', 'W']"
    },
    {
      "source": "MG Johnson",
      "target": "MS Dhoni",
      "info": "['0', '0', '1', '1', '2', '2']"
    },
    {
      "source": "MG Johnson",
      "target": "Yuvraj Singh",
      "info": "['1']"
    },
    {
      "source": "MG Johnson",
      "target": "RG Sharma",
      "info": "['W']"
    },
    {
      "source": "MG Johnson",
      "target": "IK Pathan",
      "info": "['4lb']"
    },
    {
      "source": "A Symonds",
      "target": "RV Uthappa",
      "info": "['0', '0', '1', '1', '1', '1', '6']"
    },
    {
      "source": "A Symonds",
      "target": "Yuvraj Singh",
      "info": "['0', '1', '1', '1', '1', '4', '4', '6']"
    },
    {
      "source": "A Symonds",
      "target": "MS Dhoni",
      "info": "['1', '4', '4']"
    },
    {
      "source": "MJ Clarke",
      "target": "MS Dhoni",
      "info": "['1', '1', '4']"
    },
    {
      "source": "MJ Clarke",
      "target": "Yuvraj Singh",
      "info": "['6', 'W']"
    },
    {
      "source": "MJ Clarke",
      "target": "RG Sharma",
      "info": "['1']"
    },
    {
      "source": "V Sehwag",
      "target": "A Symonds",
      "info": "['1', '1']"
    },
    {
      "source": "V Sehwag",
      "target": "ML Hayden",
      "info": "['1', '2', '2nb', '6', '6']"
    },
    {
      "source": "Mohammad Hafeez",
      "target": "G Gambhir",
      "info": "['0', '0', '0', '1', '1', '1', '2', '4', '4', '4', '4']"
    },
    {
      "source": "Mohammad Hafeez",
      "target": "Yuvraj Singh",
      "info": "['0', '0', '0', '0', '1', '1', '2']"
    },
    {
      "source": "YK Pathan",
      "target": "Younis Khan",
      "info": "['1', '1', '1']"
    },
    {
      "source": "YK Pathan",
      "target": "Shoaib Malik",
      "info": "['0', '1', '1']"
    }
  ];

  const playerCountries = { "Mohammad Asif": "Pakistan", "G Gambhir": "India", "RV Uthappa": "India", "Umar Gul": "Pakistan", "V Sehwag": "India", "Yuvraj Singh": "India", "KD Karthik": "India", "MS Dhoni": "India", "Yasir Arafat": "Pakistan", "Sohail Tanvir": "Pakistan", "Shahid Afridi": "Pakistan", "IK Pathan": "India", "Harbhajan Singh": "India", "AB Agarkar": "India", "S Sreesanth": "India", "RP Singh": "India", "Salman Butt": "Pakistan", "Imran Nazir": "Pakistan", "Kamran Akmal": "Pakistan", "Younis Khan": "Pakistan", "Misbah-ul-Haq": "Pakistan", "Shoaib Malik": "Pakistan", "L Vincent": "New Zealand", "BB McCullum": "New Zealand", "PG Fulton": "New Zealand", "LRPL Taylor": "New Zealand", "SB Styris": "New Zealand", "CD McMillan": "New Zealand", "JDP Oram": "New Zealand", "DL Vettori": "New Zealand", "SE Bond": "New Zealand", "MR Gillespie": "New Zealand", "JS Patel": "New Zealand", "JM Anderson": "England", "SCJ Broad": "England", "A Flintoff": "England", "AD Mascarenhas": "England", "CT Tremlett": "England", "PD Collingwood": "England", "DL Maddy": "England", "VS Solanki": "England", "Joginder Sharma": "India", "KP Pietersen": "England", "OA Shah": "England", "LJ Wright": "England", "SM Pollock": "South Africa", "M Ntini": "South Africa", "RG Sharma": "India", "JJ van der Wath": "South Africa", "M Morkel": "South Africa", "VD Philander": "South Africa", "JA Morkel": "South Africa", "HH Gibbs": "South Africa", "GC Smith": "South Africa", "AB de Villiers": "South Africa", "JM Kemp": "South Africa", "MV Boucher": "South Africa", "B Lee": "Australia", "NW Bracken": "Australia", "SR Clark": "Australia", "MG Johnson": "Australia", "A Symonds": "Australia", "MJ Clarke": "Australia", "AC Gilchrist": "Australia", "ML Hayden": "Australia", "BJ Hodge": "Australia", "MEK Hussey": "Australia", "BJ Haddin": "Australia", "YK Pathan": "India", "Mohammad Hafeez": "Pakistan" };

  useEffect(() => {
    if (!data) return;

    const links = data;
    const nodes = {};

    // Compute the distinct nodes from the links.
    links.forEach((link) => {
      link.source = nodes[link.source] || (nodes[link.source] = { name: link.source });
      link.target = nodes[link.target] || (nodes[link.target] = { name: link.target });
    });

    const width = 1200;
    const height = 700;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Add edge info text
    // const edgeInfoText = svg.append('text')
    //   .attr('id', 'edge-info')
    //   .attr('transform', `translate(${width * 0.75}, 30)`)
    //   .text('');

    // Create arrow markers
    const defs = svg.append('defs');
    defs.append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 15)
      .attr('refY', 0)
      .attr('orient', 'auto')
      .attr('markerWidth', 8)
      .attr('markerHeight', 8)
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5');

    // Add the links (curved paths)
    const path = svg.append('g')
      .selectAll('path')
      .data(links)
      .enter()
      .append('path')
      .attr('class', (d) => `link ${d.type}`)
      .attr('marker-end', 'url(#arrowhead)');

    // Add the nodes (circles with labels)
    const node = svg.selectAll('.node')
      .data(Object.values(nodes))  // Use Object.values() here
      .enter().append('g')
      .attr('class', 'node')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    node.append('circle')
      .attr('id', (d) => d)
      .attr('r', 8)
      .attr('fill', (d) => indianPlayers.includes(d.name) ? 'rgb(21, 115, 158)' : 'rgb(228, 226, 215)');

    node.append('text')
      .attr('class', 'label')
      .attr('x', 0)
      .attr('y', -15)
      .text((d) => d.name)
      .style('opacity', 0)
      .style('pointer-events', 'none');

    let firstClickIndex = -1;
    let secondClickIndex = -1;

    // Handle click events on nodes
    node.on('click', function (event, d) {
      const firstClick = d3.select('body').classed('first');
      if (!firstClick) {
        d3.select('body').classed('first', true);
        firstClickIndex = d;

        path.filter((linkData) => linkData.source.name === d.name || linkData.target.name === d.name)
          .attr('marker-end', 'url(#arrowhead)')
          .classed('selected', true);

        // Change the opacity of other nodes to be lesser
        let desiredIndices = [firstClickIndex.name];
        path.each(function (linkData) {
          if (linkData.source.name == firstClickIndex.name) {
            desiredIndices.push(linkData.target.name);
          } else if (linkData.target.name == firstClickIndex.name) {
            desiredIndices.push(linkData.source.name);
          }
        });
        node.selectAll("circle").attr("opacity", d => (desiredIndices.includes(d.name) ? 1 : 0.2));

        //Change the opacity of other edges to be lesser
        path.filter(function (linkData) {
          return linkData.source.name != firstClickIndex.name && linkData.target.name != firstClickIndex.name;
        }).attr("opacity", 0.2);

        d3.select(this).select('.label').style('opacity', 1);
      } else {
        const secondClick = d3.select('body').classed('second');
        if (!secondClick) {
          let validSecondNode = false;
          path.each(function (linkData) {
            if ((linkData.source.name === d.name && linkData.target.name === firstClickIndex.name) ||
              (linkData.target.name === d.name && linkData.source.name === firstClickIndex.name)) {
              validSecondNode = true;
            }
          });

          if (!validSecondNode) return;

          secondClickIndex = d;
          d3.select(this).select('.label').style('opacity', 1);

          // let infoToDisplay = null;
          // path.each(function (linkData) {
          //   if ((linkData.source.name === secondClickIndex.name && linkData.target.name === firstClickIndex.name) ||
          //     (linkData.target.name === secondClickIndex.name && linkData.source.name === firstClickIndex.name)) {
          //     infoToDisplay = linkData.info;
          //   }
          // });

          let infoToDisplay = "";
          path.each(function (linkData) {
            if (linkData.source.name === secondClickIndex.name && linkData.target.name === firstClickIndex.name ||
              linkData.target.name == secondClickIndex.name && linkData.source.name == firstClickIndex.name) {
              infoToDisplay += `<p> ${linkData.source.name} (${playerCountries[linkData.source.name]}) to ${linkData.target.name} (${playerCountries[linkData.target.name]}): ${formatEdgeInfo(linkData.info)} </p>`;
            }
          });

          // Unselect all edges except the one we desire
          path.classed("selected", false).attr("marker-end", null);
          path.filter(function (linkData) {
            return linkData.source.name == firstClickIndex.name && linkData.target.name == secondClickIndex.name ||
              linkData.source.name == secondClickIndex.name && linkData.target.name == firstClickIndex.name;
          }).attr("marker-end", "url(#arrowhead)")
            .classed("selected", true);

          // edgeInfoText.text(infoToDisplay);
          d3.select("#edge-info").html(infoToDisplay);
          d3.select('body').classed('second', true);
        } else {
          path.attr('marker-end', null);
          d3.select('body').classed('first', false);
          d3.select('body').classed('second', false);
          path.classed('selected', false);
          d3.selectAll('.label').style('opacity', 0);
          node.selectAll("circle").attr("opacity", 1);
          path.attr("opacity", 1);
          // edgeInfoText.text('');
          d3.select("#edge-info").html("");
          firstClickIndex = -1;
          secondClickIndex = -1;
        }
      }
    })
      .on('mouseover', function (event, d) {
        d3.select(this).select('.label').style('opacity', 1);
      })
      .on('mouseout', function (event, d) {
        d3.select(this).select("circle").attr("fill", (indianPlayers.includes(d.name) ? "rgb(21, 115, 158)" : "rgb(228, 226, 215)"));
        if (d !== firstClickIndex && d !== secondClickIndex) {
          d3.select(this).select('.label').style('opacity', 0);
        }
      });

    let dropdown = d3.select("#dropdown");
    let listOfPlayers = [];
    node.each(d => listOfPlayers.push(d.name));
    listOfPlayers.sort((a, b) => `${playerCountries[a]}${a}`.localeCompare(`${playerCountries[b]}${b}`));
    listOfPlayers.forEach(function (d) {
      dropdown.append("option")
        .attr("value", d)
        .text(`${d} - ${playerCountries[d]}`);
    });

    dropdown.on("change", function () {
      var selectedPlayer = this.value;

      console.log(firstClickIndex);

      // Basically clear all
      if (selectedPlayer == "") {
        node.selectAll("circle").attr("fill", d => (indianPlayers.includes(d.name) ? "rgb(21, 115, 158)" : "rgb(228, 226, 215)"));
        node.filter(d => d.index != firstClickIndex.index && d.index != secondClickIndex.index).selectAll(".label").style("opacity", 0);
      }

      // Color selected node orange
      node.selectAll("circle").attr("fill", d => (indianPlayers.includes(d.name) ? "rgb(21, 115, 158)" : "rgb(228, 226, 215)"));
      node.filter(d => d.name == selectedPlayer).selectAll("circle").attr("fill", "orange");

      // Displaying the label
      node.filter(d => d.index != firstClickIndex.index && d.index != secondClickIndex.index).selectAll(".label").style("opacity", 0);
      node.filter(d => d.name == selectedPlayer).selectAll(".label").style("opacity", 1);
    });


    function tick() {
      path.attr('d', (d) => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy);
        return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
      });

      node.attr('transform', (d) => `translate(${d.x},${d.y})`);
    }

    const force = d3.forceSimulation(Object.values(nodes))  // Use Object.values() here
      .force('link', d3.forceLink(links).distance(200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX())
      .force('y', d3.forceY())
      .force('charge', d3.forceManyBody().strength(-250))
      .on('tick', tick);

    function dragstarted(event, d) {
      if (!event.active) force.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) force.alphaTarget(0);
      if (d.fixed) {
        d.fx = d.x;
        d.fy = d.y;
      } else {
        d.fx = null;
        d.fy = null;
      }
    }
    document.addEventListener("click", function(event) {
      if (event.target.tagName.toLowerCase() !== "circle") {
      path.attr('marker-end', null);
          d3.select('body').classed('first', false);
          d3.select('body').classed('second', false);
          path.classed('selected', false);
          d3.selectAll('.label').style('opacity', 0);
          node.selectAll("circle").attr("opacity", 1);
          path.attr("opacity", 1);
          // edgeInfoText.text('');
          d3.select("#edge-info").html("");
          firstClickIndex = -1;
          secondClickIndex = -1;
      }
    });

    function formatEdgeInfo(info) {
      info = JSON.parse(info.replaceAll("'", "\""));

      let curr = info[0];
      let count = 0;
      let result = `<br> [(Score type) - Number of score type]`;
      result += `<br> (${curr}) - `;
      for (let i = 0; i < info.length; i++) {
        if (curr !== info[i]) {
          result += `${count} <br> (${info[i]}) - `;
          count = 1;
          curr = info[i];
        } else {
          count++;
        }
      }
      result += count;
      return result;
    }

    return () => {
      // Cleanup if necessary (remove SVG, event listeners, etc.)
      svg.selectAll('*').remove();
    };
  }, [data]);

  return (<div>
    <div id="dropdown-container">
      <select id="dropdown">
        <option value="">Select Player</option>
      </select>
    </div>
    <div id="edge-info"></div>
    <svg ref={svgRef}></svg>
  </div>);
};

export default GraphVisualization;
