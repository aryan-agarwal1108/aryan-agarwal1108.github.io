---
title: Compliant Robotic Gripper
summary: A 3D-printed, cable-driven gripper with flexure fingers that conform to irregular objects.
result: Picks 9 of 10 test objects first try
year: 2025
category: CAD
tags: [SolidWorks, FEA, 3D Printing, Arduino]
featured: true
order: 4
role: Mechanical design
timeline: 8 weeks (course project)
team: 3 students
status: Complete
links:
  report: /files/resume.pdf
metrics:
  - { value: "90%", label: "Grasp success" }
  - { value: "112 g", label: "Total mass" }
  - { value: "1", label: "Actuator" }
  - { value: "$18", label: "Material cost" }
---

## The problem

Our course challenge was to build a gripper that could pick up a test set of household objects: an egg, a pen, a tennis ball, a coffee mug. It had to use **a single motor** and cost under $25.

## Approach

Rather than rigid jointed fingers, I designed **flexure-based fingers** printed in TPU. A single tendon pulls all three fingers closed, and they wrap around whatever shape they touch.

I ran FEA in SolidWorks Simulation to size the flexure thickness. Too thin and they fatigued; too thick and they couldn't wrap around small objects.

## Results

The gripper picked up 9 of the 10 test objects on the first try, including the raw egg, which survived. Our team placed **1st of 14** in the course demo.

## What I'd do differently

The mug handle defeated us. A fourth, opposing "thumb" finger would probably have solved it.
