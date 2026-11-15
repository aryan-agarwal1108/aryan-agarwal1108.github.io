---
title: eVTOL UAV with Emergency Water-Landing Buoyancy
summary: An electric vertical-takeoff drone designed in SolidWorks, with a pneumatic flotation system that inflates in under 8 seconds if the aircraft has to come down on water.
result: Sub-8-second buoyancy deployment
year: 2025
category: Mechanical Design
tags: [SolidWorks, ANSYS Fluent, CFD, Pneumatics]
featured: true
order: 3
role: Visiting Researcher
org: NYU Abu Dhabi, CAIR Lab
timeline: Jan 2025 – Nov 2025
metrics:
  - { value: "<8 s", label: "Buoyancy deployment" }
---

<!--
  TODO (Aryan): this is a very visual project. Add SolidWorks renders and
  CFD contour plots (cover: /images/evtol.png), and a short "Results" and
  "What I'd do differently" section.
-->

## Overview

Small eVTOL drones increasingly fly over water, where a forced landing usually means losing the aircraft and its payload. At NYU Abu Dhabi's CAIR Lab, I designed an **eVTOL UAV** with an **emergency water-landing buoyancy system** built into the airframe.

## What I did

- Designed the eVTOL UAV in **SolidWorks**, integrating the aerodynamics with the emergency flotation system
- Engineered a **solenoid-actuated pneumatic buoyancy system** with **burst-diaphragm regulation**, reaching **sub-8-second deployment**
- Simulated **transient airflow and pressure distributions** in **ANSYS Fluent CFD** to characterize the inflation dynamics

## How the flotation system works

A solenoid valve releases stored gas into collapsed flotation chambers. A **burst diaphragm** is a membrane that ruptures at a set pressure, which regulates when and how the gas reaches the chambers. The transient CFD shows how pressure builds inside the system during that short window, which determines how fast and how evenly it inflates.
