---
title: Explainable Quantum Reinforcement Learning (XQRL)
summary: We came up with the first metrics for explaining why quantum reinforcement-learning agents make the decisions they do, and tested them on hybrid quantum-classical simulations.
result: First metrics for explaining quantum RL policies
year: 2025
category: Quantum
tags: [Python, PennyLane, Qiskit, TensorFlow, SHAP, LIME, Feature Occlusion, Quantum Machine Learning, Explainable AI]
featured: true
order: 4
role: Student Researcher
org: NYU Abu Dhabi, eBRAIN Lab
timeline: Aug 2025 – Mar 2026
---

<!--
  TODO (Aryan): a figure comparing explanations would make a good `gallery:` item.
-->

## The goal

Quantum reinforcement-learning agents use quantum circuits to pick their next action. Like a lot of machine learning, they work as a black box: you can see what they did, but not why. At NYU Abu Dhabi's eBRAIN Lab, working with Dr. Nouhaila Innan, I helped build ways to open that box.

## My part

- Co-developed the **first Explainable Quantum Reinforcement Learning (XQRL) metrics** and a framework that ties them together
- Built **hybrid quantum-classical simulation pipelines** in **Python** with **PennyLane**, **TensorFlow**, and **Qiskit**
- Used **LIME**, **SHAP**, and **feature occlusion** to explain **Quantum Q-Learning** and **Q-DQN** policies

## How it works

LIME, SHAP, and feature occlusion are standard tools for explaining machine-learning models. Each one estimates how much every input mattered to a model's choice. We applied them to quantum agents and defined metrics for comparing the explanations, so you can check what an agent has actually learned.
