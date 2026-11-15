---
title: CAN-Bus Sensor Node
summary: A 4-layer sensor board that puts every analog sensor on a student race car onto one shared CAN bus.
result: Cut harness weight 18% across 12 nodes
year: 2026
category: Hardware
tags: [KiCad, STM32, CAN, C, LTspice]
featured: true
order: 1
role: Hardware lead (PCB + firmware)
timeline: Sep 2025 – Mar 2026
team: 4 engineers
status: Racing on the 2026 car
links:
  github: https://github.com/aryan-agarwal1108
  report: /files/resume.pdf
metrics:
  - { value: "18%", label: "Lighter harness" }
  - { value: "12", label: "Nodes deployed" }
  - { value: "1 kHz", label: "Sample rate" }
  - { value: "$23", label: "BOM per board" }
---

## The problem

Every sensor on the car (brake pressure, suspension travel, coolant temperature) ran its own analog wire back to the data logger. The harness weighed **2.4 kg**, picked up noise from the motor controller, and took a full day to rewire whenever we added a sensor.

## Constraints

- Must survive **−10 °C to 85 °C** and constant vibration
- Fits inside a 50 × 35 mm enclosure
- Under $30 BOM per node, since we needed 12 of them
- Two months from schematic to car

## Approach

I picked an **STM32G4** for its built-in CAN-FD controller and 12-bit ADCs, so no external ADC was needed. The board is 4 layers: signal, ground, power, signal. That keeps a solid ground reference under the analog front end.

### Analog front end

Each channel has a second-order anti-aliasing filter at 400 Hz plus TVS protection. I simulated it in LTspice before committing to layout.

### Firmware

The firmware is bare-metal C. It does DMA-driven ADC sampling, a moving-average filter, and packs data into CAN frames at 1 kHz.

```c
void HAL_ADC_ConvCpltCallback(ADC_HandleTypeDef *hadc) {
    for (int ch = 0; ch < NUM_CH; ch++) {
        filtered[ch] = ema(filtered[ch], adc_buf[ch], ALPHA);
    }
    can_queue_frame(NODE_ID, filtered, NUM_CH);
}
```

## Results

All 12 nodes have run on the car for a full season without a field failure. The harness lost 18% of its weight, and adding a sensor now takes 10 minutes instead of a day.

## What I'd do differently

I'd add a **bootloader over CAN** from day one. Reflashing 12 boards with a probe each time the firmware changed got old fast.
