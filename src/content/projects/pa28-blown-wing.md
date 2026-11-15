---
title: PA-28 Blown-Wing Aerodynamic Model
summary: Python models of a Piper PA-28 blown wing, built on blade-element momentum theory, to predict how propeller slipstream changes lift and takeoff performance.
result: Thrust, power-loading & takeoff analysis
year: 2026
category: Aerodynamics
tags: [Python, BEMT, Aerodynamic Modeling]
featured: true
order: 1
role: Undergraduate Researcher
org: Midwest Nice Aerospace Group
timeline: Aug 2026 – Present
status: In progress
---

<!--
  TODO (Aryan): flesh this page out when you can. Good additions:
  - A plot from your model (lift vs. airspeed, blown vs. unblown) as the cover: cover: /images/pa28.png
  - Key numbers in `metrics:` above (e.g. lift increase, takeoff-distance change)
  - A "Results" and a "What I'd do differently" section
-->

## Overview

On a **blown wing**, propellers sit ahead of the wing so their slipstream speeds up the air flowing over it. That raises the lift the wing can make at low flight speeds, which is valuable for short takeoffs and distributed-propulsion aircraft.

With the Midwest Nice Aerospace Group, I'm building aerodynamic models of this effect on a **Piper PA-28** wing.

## What I did

- Developed **Python** aerodynamic models of the PA-28 blown wing using **blade-element momentum theory (BEMT)**
- Simulated the **propeller slipstream** and the resulting **lift augmentation** across the wing
- Analyzed **thrust**, **power loading**, and **takeoff performance** from the model outputs

## Approach

Blade-element momentum theory combines two views of a propeller. Blade-element theory splits each blade into small airfoil sections and adds up their lift and drag. Momentum theory treats the rotor as a disk that speeds up the air passing through it. Solving the two together at each radius gives the thrust distribution and the induced velocity in the slipstream, and that velocity is the input for estimating extra lift on the section of wing behind the propeller.
