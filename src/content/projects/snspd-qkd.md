---
title: SNSPD Optics & Polarization-Based QKD
summary: Built and aligned a superconducting nanowire single-photon detector (SNSPD) setup for the UAE's satellite QKD ground station, automated it in Python, and researched polarization-encoded quantum key distribution.
result: Single-photon detection for a polarization-based QKD link, demoed at GITEX
year: 2024
category: Quantum
art: Detector
tags: [Quantum Optics, Polarization Optics, QKD, BB84, Single-Photon Detection, SNSPD, SolidWorks, Python, Raspberry Pi, Nanopositioners, Cryogenics, Photonics]
featured: false
order: 5
started: '2024-07'
ended: '2024-08'
role: Junior Research Intern
org: Technology Innovation Institute (ADQOGS)
timeline: Jul 2024 – Aug 2024
metrics:
  - { value: "Youngest", label: "Quantum researcher at TII" }
  - { value: "BB84", label: "Polarization-encoded QKD protocol" }
  - { value: "150K+", label: "GITEX visitors at the demo" }
---

<!--
  TODO (Aryan): add a CAD render of the opto-mechanical interfaces under `gallery:`,
  and any detail you're allowed to share about the photon-absorption mechanism.
-->

## The goal

Quantum key distribution (QKD) lets two parties share an encryption key whose security comes from quantum mechanics: measuring a photon disturbs its state, so an eavesdropper leaves detectable errors behind. In **polarization-based BB84**, each bit is encoded in one of four photon polarization states drawn from two conjugate bases, horizontal/vertical (H/V) and diagonal/anti-diagonal (D/A). On a satellite-to-ground link, the receiver has to resolve those states at the single-photon level after the light has crossed the atmosphere.

At TII, as the institute's youngest quantum researcher, I worked on this for the **Abu Dhabi Quantum Optical Ground Station (ADQOGS)**.

## My part

- Built a **superconducting nanowire single-photon detector (SNSPD)** setup for ADQOGS
- **Aligned the optics with nanopositioners** to couple light onto the detector
- Programmed a **Raspberry Pi in Python** to automate the setup
- Designed and fabricated **custom opto-mechanical interfaces in SolidWorks** to integrate the detector with the **cryostat**
- Researched **polarization-based QKD**, focusing on **BB84 receivers**, and investigated a **novel photon-absorption mechanism** for the detector
- Presented at the Quantum Research Center's **demo at GITEX**, which drew **150K+ visitors**

## The physics behind it

An SNSPD is a thin superconducting nanowire, cooled in a cryostat and biased just below its critical current. When a single photon is absorbed, it breaks superconductivity in a small hotspot, the wire briefly turns resistive, and that produces a voltage pulse: a detection event. How well the optics couple light onto the nanowire, and how efficiently the wire absorbs it, set the detector's **system detection efficiency**. That is why sub-micron alignment with nanopositioners and rigid opto-mechanical mounts matter so much. Its **dark-count rate** (clicks with no photon) and **timing jitter** set the noise floor.

In polarization-based QKD, every lost photon lowers the key rate, and every false click or polarization error raises the **quantum bit error rate (QBER)**, which limits how much secure key can be distilled. Satellite links feel both effects most, because so few photons reach the ground. The same problem, polarization getting scrambled on its way through the air, is what my [Extended Essay](/projects/atmospheric-depolarization) looks at.
