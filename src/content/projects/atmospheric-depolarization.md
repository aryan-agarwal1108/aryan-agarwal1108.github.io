---
title: Temperature & Atmospheric Depolarization
summary: An independent physics investigation. I built a polarimetry experiment with a milk–water "atmosphere" to measure how temperature changes how much polarized light gets scrambled by Mie scattering.
result: Degree of polarization fell from 0.984 to 0.861 between 25 °C and 65 °C
year: 2026
category: Optics
tags: [Experimental Physics, Polarimetry, Mie Scattering, Vernier LabQuest, Uncertainty Analysis, Data Analysis, Optics]
featured: false
order: 6
started: '2025-09'
ended: '2026-02'
role: Independent researcher
org: Dubai International Academy
timeline: 2025 – 2026
status: Complete
links:
  report: /files/Aryan_Agarwal_Atmospheric_Depolarization_Paper.pdf
gallery:
  - { src: /images/ee-setup-bench.jpg, alt: "Polarimeter bench with laser, two polarizing filters, a clamped beaker, light sensor and Vernier LabQuest", caption: "The setup on the bench: laser, two polarizing filters and the light sensor on a polarimeter rail, with the milk–water sample clamped in the beam and readings on the Vernier LabQuest." }
  - { src: /images/ee-setup-top.jpg, alt: "Top-down view of the polarimeter rail with the beaker clamped between the filters", caption: "Top-down view of the optical path. The beaker is clamped so the beam passes through its center, between the two polarizers." }
  - { src: /images/ee-dop-vs-temperature.svg, caption: "Degree of polarization against solution temperature. Each point is the average of five trials, with ±σ error bars. Note the y-axis starts at 0.84." }
  - { src: /images/ee-intensity-vs-temperature.svg, caption: "Average transmitted intensity with the polarizers parallel (0°) and crossed (90°). As the solution warms, light leaks through the crossed polarizers and the parallel signal drops, which is depolarization." }
metrics:
  - { value: "−12.5%", label: "Degree of polarization, 0.984 → 0.861" }
  - { value: "25–65 °C", label: "Temperature range" }
  - { value: "5 × 5", label: "Temperatures × trials" }
  - { value: "±0.005", label: "Largest DoP uncertainty" }
---


**[Read the full paper (PDF, 25 pages)](/files/Aryan_Agarwal_Atmospheric_Depolarization_Paper.pdf)**: the theory, derivation, raw data tables, uncertainty propagation, and evaluation.

## The question

**How does atmospheric temperature affect how much rectilinearly polarized light depolarizes as it goes through Mie scattering?**

Polarization is usually assumed to stay constant as light travels through air. That breaks down in systems that encode information in polarization, like free-space laser links and polarization-based quantum key distribution, where scattering can scramble the signal. Different regions see very different (and fast-changing) temperatures, so I wanted to know whether temperature itself makes this worse.

## The physics

Larger particles like dust and water droplets cause **Mie scattering**, which deflects light mostly forward but randomly, and each deflection rotates the direction the electric field oscillates. I measured the result as the **degree of polarization (DoP)**: the fraction of the light that's still polarized, from the intensities through parallel and crossed polarizers.

My hypothesis was that warmer particles move faster and scatter more irregularly, so DoP should drop as temperature rises. The counterargument is that hotter air is less dense, so there's less to scatter off. I argued the first effect dominates under normal atmospheric conditions.

## The experiment

- Used a **milk–water solution** (3 mL full-fat milk in 12 mL distilled water) as a scattering stand-in for the atmosphere
- Sent a **636 nm, 0.95 mW Vernier light source** through two polarizing filters and the sample, onto a light sensor read by a **Vernier LabQuest**, all fixed on a polarimeter tray
- Heated the sample on a **hot plate with a magnetic stirrer** to 25, 35, 45, 55 and 65 °C, and kept it mixed between readings
- At each temperature, recorded the light with the polarizers **parallel and crossed**, for **five trials**, then converted lux to intensity and calculated DoP with uncertainties
- Controlled distance (28 cm), room temperature, ambient light, beaker position and volumes. Swapped the test tube for a beaker after early trials, because the tube's curvature distorted the beam.

## Results

DoP fell steadily, from **0.984 ± 0.003 at 25 °C** to **0.861 ± 0.005 at 65 °C**, and the drop got steeper at higher temperatures. As the solution warmed, more light leaked through the crossed polarizers and less came through the parallel ones. I could see it too: by 45 °C convection streaks were forming and the laser spot started to flicker, and at 65 °C the spot was hazy and the mixture was visibly turbulent. The trend matched what scattering literature (Bohren & Huffman; Mishchenko et al.) describes.

## What I'd do differently

- Use a **temperature-controlled water bath and an insulated optical cell**, to separate the effect of temperature from convection and condensation on the beaker
- Lock down the optics, and use polarizers with **finer angle readouts** to reduce alignment and angle errors
- Test **more temperature points**, plus different particle sizes, concentrations, and **wavelengths**, to connect the results to real free-space optical and quantum communication links
