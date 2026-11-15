---
title: FPGA Audio Synthesizer
summary: A polyphonic synthesizer written in Verilog, driven by a MIDI keyboard and output through an I²S DAC.
result: 8-voice polyphony on a $50 FPGA board
year: 2025
category: Embedded
tags: [Verilog, FPGA, I²S, MIDI, Python]
featured: false
order: 5
role: Digital design
timeline: Final project, 5 weeks
team: 2 students
status: Complete
links:
  github: https://github.com/aryan-agarwal1108
metrics:
  - { value: "8", label: "Voices" }
  - { value: "48 kHz", label: "Sample rate" }
  - { value: "24-bit", label: "Output" }
  - { value: "61%", label: "LUT usage" }
---

## The problem

For our digital systems final project, we wanted to build something you could actually *play*: a real-time synthesizer with no CPU in the loop.

## Approach

- A **UART MIDI parser** turns key presses into note-on and note-off events
- A **voice allocator** assigns up to 8 simultaneous notes
- Each voice is a phase-accumulator oscillator (saw, square or triangle) with an ADSR envelope
- A mixer sums the voices and streams the result to an **I²S DAC** at 48 kHz

I wrote a Python script to generate the lookup tables and a cocotb testbench to check the output against a software reference model.

## Results

The synth plays 8 voices cleanly at 48 kHz and uses 61% of the FPGA's logic.

## What I'd do differently

Add a digital filter stage. A resonant low-pass would make it sound like a real synth instead of a very enthusiastic doorbell.
