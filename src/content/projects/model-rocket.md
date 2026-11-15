---
title: Model Rocket Flight & Data Analysis
summary: My AE 100 rocket. I simulated the flight in OpenRocket, built and flew it, then went through the flight data in Python.
result: Simulated in OpenRocket, analyzed in Python
year: 2026
category: Rocketry
tags: [OpenRocket, Flight Simulation, Python, NumPy, Matplotlib]
featured: false
order: 6
role: Builder & flight analyst
org: "AE 100: Intro to Aerospace Engineering, UIUC"
timeline: Fall 2026
status: Flown
---

<!--
  TODO (Aryan): this one is very visual. Good additions:
  - A launch photo as the cover: cover: /images/rocket.jpg
  - Your Matplotlib plot of altitude vs. time, with the OpenRocket prediction on the same axes, under `gallery:`
  - metrics: predicted vs. actual apogee, max velocity, flight time
  - A link to your analysis script under links: github:
-->

## The goal

For AE 100, I built and flew a model rocket, with a simulation before launch and data analysis after it.

## My part

- Built and flew the rocket
- Simulated the flight path in **OpenRocket** before launch
- Analyzed the flight data in **Python** with **NumPy** and **Matplotlib**

## How the simulation works

OpenRocket takes the rocket's mass, center of gravity, center of pressure, and the motor's thrust curve, then steps through the flight: boost, coast up to apogee, then recovery. After the flight I loaded the data into Python and plotted it to see how the real flight lined up with the prediction.
