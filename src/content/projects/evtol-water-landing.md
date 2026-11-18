---
title: eVTOL Drone with Emergency Water-Landing Floats
summary: A multicopter drone I designed at NYU Abu Dhabi that inflates its own floats from ambient air in under 8 seconds if it has to come down on water.
result: Floats deploy in under 8 seconds
year: 2025
category: Mechanical Design
tags: [SolidWorks, ANSYS Fluent, CFD, Transient Simulation, Pneumatics, Mechanical Design, Reinforcement Learning]
featured: true
order: 3
started: '2025-01'
ended: '2025-11'
role: Visiting Researcher
org: NYU Abu Dhabi, CAIR Lab
timeline: Jan 2025 – Nov 2025
metrics:
  - { value: "<8 s", label: "Float deployment" }
  - { value: "UAE gov't", label: "Presented to the UAE government" }
  - { value: "TECHSPO", label: "Slated for TECHSPO Dubai 2026" }
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
- Engineered a **rapid-deployment pneumatic buoyancy system** that inflates from **ambient-air intake** in **under 8 seconds**, using **solenoid-controlled burst-diaphragm regulators** to control inflation
- Ran transient **CFD in ANSYS Fluent** to validate how air and pressure move through the system as it inflates
- **Presented the project to the UAE government**. It's slated for **TECHSPO Dubai 2026**.

## How the floats inflate

The system doesn't carry a gas cartridge. It draws in ambient air to fill the folded floats. Solenoid-controlled regulators with burst diaphragms (thin membranes that rupture at a set pressure) control when and how fast air reaches each float. The CFD showed how pressure builds during those few seconds, which decides how quickly and evenly the floats fill.
