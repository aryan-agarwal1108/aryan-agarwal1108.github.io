---
title: PA-28 Blown-Wing Aerodynamic Model
summary: Python models that predict how much extra lift a Piper PA-28's wing gets when propellers blow faster air over it, and what that does for takeoff.
result: Models lift gain, thrust, and takeoff performance
year: 2026
category: Aerodynamics
tags: [Python, BEMT, Aerodynamic Modeling]
featured: true
order: 1
role: Undergraduate Researcher
org: Midwest Nice Aerospace Group
timeline: Aug 2026 – Present
status: In progress
supervisor: Dr. Elle Wroblewski
interactive: airfoil
---

<!--
  TODO (Aryan): flesh this page out when you can. Good additions:
  - A plot from your model (lift vs. airspeed, blown vs. unblown), added under `gallery:` with a caption
  - Key numbers in `metrics:` (e.g. lift increase, takeoff-distance change)
  - A "Results" and a "What I'd do differently" section
-->

## The goal

On a blown wing, the propellers sit in front of the wing and push faster-moving air over it, so the wing makes more lift at low speed. That matters for short takeoffs, and for newer aircraft designs that spread lots of small electric propellers along the wing. With the Midwest Nice Aerospace Group, supervised by Dr. Elle Wroblewski, I'm modeling how much of a difference this makes on a Piper PA-28.

## My part

- Wrote Python aerodynamic models of the blown wing using **blade-element momentum theory (BEMT)**
- Simulated the **propeller slipstream** and the extra lift it creates
- Used the results to look at **thrust**, **power loading**, and **takeoff performance**

## How the model works

BEMT treats each propeller blade as a stack of thin airfoil slices and works out the lift and drag on each one. It pairs that with momentum theory, which treats the whole propeller as a disk that speeds up the air passing through it. Solving the two together gives the thrust and the speed of the slipstream, and that slipstream speed is what drives the extra lift on the part of the wing behind each propeller.
