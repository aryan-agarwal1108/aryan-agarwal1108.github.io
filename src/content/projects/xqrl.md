---
title: Explainable Quantum Reinforcement Learning (XQRL)
summary: We came up with the first metrics for explaining why quantum reinforcement-learning agents make the decisions they do, benchmarked them on CartPole and MNIST, and wrote them up as the ClearQRL framework.
result: First metrics for explaining quantum RL policies, written up as ClearQRL
year: 2025
category: Quantum
tags: [Python, PennyLane, Qiskit, TensorFlow, SHAP, LIME, Feature Occlusion, Quantum Machine Learning, Explainable AI, Quantum Circuits]
featured: true
order: 4
started: '2025-08'
ended: '2026-03'
role: Student Researcher
org: NYU Abu Dhabi, eBRAIN Lab
timeline: Aug 2025 – Mar 2026
links:
  paper: /files/ClearQRL_Quantum_RL_Explainability_First_Page.pdf
  paperLabel: 'Paper: first page (PDF)'
metrics:
  - { value: "QII", label: "Quantum Interpretability Index" }
  - { value: "2", label: "Benchmarks: CartPole & MNIST" }
---

<!--
  TODO (Aryan): a figure comparing explanations would make a good `gallery:` item.
-->

## The goal

Quantum reinforcement-learning agents use quantum circuits to pick their next action. Like a lot of machine learning, they work as a black box: you can see what they did, but not why. At NYU Abu Dhabi's eBRAIN Lab, working with Dr. Nouhaila Innan, I helped build ways to open that box.

## My part

- Co-developed the **first Explainable Quantum Reinforcement Learning (XQRL) metrics** and a framework that ties them together
- Benchmarked the metrics on **CartPole** and **MNIST**, applying them to **Quantum Q-Learning** and **Quantum Deep Q-Networks**
- Improved the interpretability of earlier XQRL models with **LIME**, **SHAP**, and **feature occlusion**
- Built **hybrid quantum-classical simulation pipelines** in **Python** with **PennyLane**, **TensorFlow**, and **Qiskit**
- Ran **quantum circuit simulations** and optimized **parameterized quantum gates** for near-term hardware

## The paper

We wrote the work up as **[ClearQRL: A Unified Interpretability and Explainability Framework for Quantum RL](/files/ClearQRL_Quantum_RL_Explainability_First_Page.pdf)** (Nouhaila Innan and Aryan Agarwal). The link opens the first page, with the abstract. It's also on my [Papers](/papers) page.

## How it works

LIME, SHAP, and feature occlusion are standard tools for explaining machine-learning models. Each one estimates how much every input mattered to a model's choice. ClearQRL pairs them with quantum information-theoretic diagnostics (von Neumann entropy, purity, fidelity between encoded states) and new quantum-aware metrics, such as how well the circuit's measurement outputs line up with the classical feature importances. These roll up into a single **Quantum Interpretability Index (QII)**, so you can compare how transparent a quantum policy is against a classical Deep Q-Network on the same task.
