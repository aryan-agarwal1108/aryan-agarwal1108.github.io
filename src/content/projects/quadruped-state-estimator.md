---
title: Quadruped State Estimator
summary: Sensor-fusion firmware that estimates a walking robot's body pose from an IMU and leg kinematics.
result: Reduced drift 35% vs. the lab's previous filter
year: 2026
category: Research
tags: [C++, ROS 2, Eigen, Python, EKF]
featured: true
order: 2
role: Undergraduate researcher
timeline: Aug 2026 – Present
team: 2 students + PhD mentor
status: Ongoing
links:
  github: https://github.com/aryan-agarwal1108
metrics:
  - { value: "35%", label: "Less drift" }
  - { value: "500 Hz", label: "Update rate" }
  - { value: "0.8 ms", label: "Compute / step" }
  - { value: "40+", label: "Test runs" }
---

## The problem

The lab's quadruped estimated its position by integrating the IMU alone. After 30 seconds of walking it had drifted almost half a metre, which made closed-loop control experiments unreliable.

## Constraints

- Must run at **500 Hz** on the robot's onboard ARM computer
- No external motion capture during outdoor tests
- Has to plug into the existing ROS 2 control stack

## Approach

I implemented an **Extended Kalman Filter** that fuses IMU data with leg-odometry measurements. Whenever a foot is in contact with the ground, its velocity is assumed to be zero, and that constraint corrects the body velocity estimate.

| Signal | Rate | Used for |
|---|---|---|
| IMU (accel + gyro) | 1 kHz | Prediction step |
| Joint encoders | 500 Hz | Foot kinematics |
| Contact sensors | 500 Hz | Measurement gating |

## Results

Across 40 recorded walking trials, final position drift dropped by **35%** compared with the previous filter. The estimator uses about 0.8 ms of compute per step.

## What I'd do differently

I spent too long hand-tuning the noise covariances. Next time I'd set up an automated tuning pipeline against motion-capture ground truth from the start.
