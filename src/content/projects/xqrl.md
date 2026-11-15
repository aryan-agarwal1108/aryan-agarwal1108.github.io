---
title: Explainable Quantum Reinforcement Learning (XQRL)
summary: New metrics and a unified framework for explaining the decisions of quantum reinforcement-learning agents, tested on hybrid quantum-classical simulations.
result: First XQRL metrics · arXiv preprint
year: 2025
category: Quantum
tags: [Python, PennyLane, Qiskit, TensorFlow, SHAP, LIME]
featured: true
order: 4
role: Student Researcher
org: NYU Abu Dhabi, eBRAIN Lab
timeline: Aug 2025 – Mar 2026
status: Preprint on arXiv · submitted to IEEE TQE
---

<!--
  TODO (Aryan): add the arXiv link so recruiters can read the paper:
    links:
      paper: https://arxiv.org/abs/XXXX.XXXXX
  A figure comparing explanations would make a great cover image.
-->

## Overview

Quantum reinforcement learning (QRL) agents use parameterized quantum circuits to decide which action to take. Like many neural-network policies, they're hard to interpret: it isn't obvious *why* an agent picked a given action. At NYU Abu Dhabi's eBRAIN Lab, working with Dr. Nouhaila Innan, I helped make those decisions explainable.

## What I did

- Co-developed the **first Explainable Quantum Reinforcement Learning (XQRL) metrics** and a **unified framework** for explaining quantum reinforcement-learning policies
- Built **hybrid quantum-classical simulation pipelines** in **Python** using **PennyLane**, **TensorFlow**, and **Qiskit**
- Applied **LIME**, **SHAP**, and **feature occlusion** to explain **Quantum Q-Learning** and **Q-DQN** policies

## Approach

LIME, SHAP, and feature occlusion are standard explainable-AI methods. Each one estimates how much every input feature contributed to a model's output. Applying them to quantum policies, and defining metrics to compare the explanations, makes it possible to check what a quantum agent has actually learned.

## Publication

The work is **pre-published on arXiv** and has been **submitted to *IEEE Transactions on Quantum Engineering***.
