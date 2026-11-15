---
title: Model Rocket Flight & Data Analysis
summary: A model rocket I built and flew for AE 100. I simulated its flight path in OpenRocket before launch, then analyzed the recorded flight data in Python afterwards.
result: Simulated in OpenRocket, analyzed in Python
year: 2026
category: Rocketry
tags: [OpenRocket, Python, NumPy, Matplotlib]
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
  - Your Matplotlib plot of altitude / velocity vs. time (and the OpenRocket prediction on the same axes)
  - metrics: predicted vs. actual apogee, max velocity, flight time
  - A link to your analysis notebook or script under links: github:
-->

## Overview

As part of **AE 100** at UIUC, I built and flew a model rocket. The goal was to go through the full loop of a real flight program: predict the flight with simulation, fly the vehicle, then check the prediction against what actually happened.

## What I did

- Built and flew the model rocket
- Simulated the **flight path** in **OpenRocket** before launch
- Analyzed the **post-flight data** in **Python** using **NumPy** and **Matplotlib**

## Approach

OpenRocket models the rocket's mass, center of gravity, center of pressure, and motor thrust curve, then integrates the equations of motion to predict the trajectory: boost, coast to apogee, and recovery. After the flight, I processed the recorded data in Python and plotted it to see how the real flight compared with the simulation.
