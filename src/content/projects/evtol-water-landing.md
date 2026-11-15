---
title: eVTOL Drone with Emergency Water-Landing Floats
summary: A multicopter drone I designed at NYU Abu Dhabi that inflates its own floats in under 8 seconds if it has to come down on water.
result: Floats deploy in under 8 seconds
year: 2025
category: Mechanical Design
tags: [SolidWorks, ANSYS Fluent, CFD, Transient Simulation, Pneumatics, Mechanical Design, Reinforcement Learning]
featured: true
order: 3
role: Visiting Researcher
org: NYU Abu Dhabi, CAIR Lab
timeline: Jan 2025 – Nov 2025
metrics:
  - { value: "<8 s", label: "Float deployment" }
  - { value: "National", label: "Symposium presentation" }
---

<!--
  TODO (Aryan): this is a very visual project. Add SolidWorks renders and
  CFD contour plots under `gallery:` with captions, and short "Results" and
  "What I'd do differently" sections.
-->

## The goal

Small eVTOL drones fly over water more and more, and if one has to land there you usually lose the aircraft and whatever it's carrying. At NYU Abu Dhabi's CAIR Lab, I designed a multicopter eVTOL with an emergency flotation system built into the airframe.

## My part

- Designed the drone in **SolidWorks**, fitting the flotation system around the aerodynamics
- Developed the eVTOL with a **reinforcement learning** system
- Engineered a **solenoid-triggered pneumatic flotation system** with a **burst diaphragm** to control inflation, deploying in **under 8 seconds**
- Ran transient **CFD in ANSYS Fluent** to see how air and pressure move through the system as it inflates
- Presented the project at a **national symposium**

## How the floats inflate

When the system is triggered, a solenoid valve releases stored gas toward the folded floats. A burst diaphragm, a thin membrane that ruptures at a set pressure, controls when the gas gets through. The CFD showed how pressure builds during those few seconds, which decides how quickly and evenly the floats fill.
