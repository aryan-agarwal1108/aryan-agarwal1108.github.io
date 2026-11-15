---
title: Lab Telemetry Dashboard
summary: A real-time web dashboard that streams, plots, and records robot telemetry for the whole lab.
result: Used daily by 6 lab members
year: 2026
category: Software
tags: [TypeScript, React, WebSockets, Python, FastAPI]
featured: true
order: 3
role: Solo developer
timeline: 6 weeks
team: Solo
status: In daily use
links:
  github: https://github.com/aryan-agarwal1108
  demo: https://example.com
metrics:
  - { value: "60 fps", label: "Live plotting" }
  - { value: "6", label: "Daily users" }
  - { value: "<50 ms", label: "End-to-end latency" }
  - { value: "0", label: "Setup steps" }
---

## The problem

Debugging a test run meant SSH-ing into the robot, dumping a CSV, and plotting it in MATLAB afterwards. Nobody could see what was happening *while* it happened.

## Approach

A small **FastAPI** server on the robot subscribes to ROS topics and forwards them over a WebSocket. The **React** front end plots dozens of channels at 60 fps using a canvas renderer with a ring buffer, so memory stays flat no matter how long it runs.

- One-click recording to a timestamped file
- Shareable "views" saved as URLs
- Works on any laptop on the lab network with no install

## Results

The whole lab now uses it for every test run. Problems that used to take an afternoon of log digging are often spotted live.

## What I'd do differently

I'd define the message schema with Protocol Buffers up front instead of JSON. The bandwidth would have been about 4× lower.
