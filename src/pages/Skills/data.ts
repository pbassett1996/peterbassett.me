export const skillGroups = [
  {
    title: 'Embedded Stack',
    skills: ['C/C++', 'RTOS (FreeRTOS/Zephyr)', 'Bare-metal', 'Drivers', 'OTA'],
  },
  {
    title: 'Hardware & Protocols',
    skills: ['ARM Cortex-M', 'SPI/I2C/UART', 'CAN/LIN', 'BLE/Wi-Fi', 'JTAG'],
  },
  {
    title: 'Frontend & Tooling',
    skills: ['React', 'TypeScript', 'WebSockets', 'Node.js', 'Storybook'],
  },
  {
    title: 'Quality & Delivery',
    skills: ['CI/CD', 'Static analysis', 'Unit + HIL testing', 'MISRA', 'Docs'],
  },
]

export type SkillDetail = {
  level: number
  label: string
  summary: string
  highlights: readonly string[]
}

export const skillDetails: Record<string, SkillDetail> = {
  'C/C++': {
    level: 5,
    label: 'Expert',
    summary:
      'Extensive experience building embedded firmware, drivers, and performance-critical modules.',
    highlights: [
      'Modern C++ for firmware architecture and hardware abstraction',
      'Memory-safe patterns, static analysis, and unit testing',
      'Performance profiling and optimization on constrained devices',
    ],
  },
  'RTOS (FreeRTOS/Zephyr)': {
    level: 5,
    label: 'Expert',
    summary:
      'Designed real-time systems with task scheduling, IPC, and power-aware architectures.',
    highlights: [
      'Task/thread orchestration, timers, and event-driven systems',
      'Queues, semaphores, mutexes, and ISR-safe patterns',
      'Board bring-up with Zephyr and FreeRTOS',
    ],
  },
  'Bare-metal': {
    level: 4,
    label: 'Advanced',
    summary:
      'Developed bare-metal firmware with deterministic timing and minimal overhead.',
    highlights: [
      'Startup code, bootloaders, and linker scripts',
      'Low-level register programming and interrupt handling',
      'Power optimization for battery-powered devices',
    ],
  },
  Drivers: {
    level: 5,
    label: 'Expert',
    summary:
      'Built robust peripheral drivers across sensors, connectivity, and custom hardware.',
    highlights: [
      'I2C, SPI, UART, CAN, and DMA integrations',
      'Error recovery, diagnostics, and telemetry hooks',
      'Test harnesses for hardware-in-loop validation',
    ],
  },
  OTA: {
    level: 4,
    label: 'Advanced',
    summary:
      'Implemented secure OTA workflows for production devices and factory provisioning.',
    highlights: [
      'Signed firmware, rollback protection, and A/B updates',
      'Network resiliency and partial update support',
      'Fleet monitoring and rollout gating',
    ],
  },
  'ARM Cortex-M': {
    level: 5,
    label: 'Expert',
    summary:
      'Deep experience across Cortex-M families for industrial and consumer devices.',
    highlights: [
      'Startup/boot, low-power modes, and exception handling',
      'Peripheral mapping and clock tree configuration',
      'Debugging with SWD/JTAG and ETM traces',
    ],
  },
  'SPI/I2C/UART': {
    level: 5,
    label: 'Expert',
    summary:
      'Extensive serial protocol work for sensors, radios, and peripheral devices.',
    highlights: [
      'DMA-based transfers and interrupt-driven IO',
      'Bus recovery, error handling, and timing analysis',
      'Multi-device arbitration and addressing strategies',
    ],
  },
  'CAN/LIN': {
    level: 4,
    label: 'Advanced',
    summary: 'Built CAN/LIN stacks for automotive-adjacent and industrial applications.',
    highlights: [
      'Message scheduling and real-time constraints',
      'Diagnostics, filtering, and bus-off recovery',
      'Interoperability testing with external tools',
    ],
  },
  'BLE/Wi-Fi': {
    level: 4,
    label: 'Advanced',
    summary:
      'Connected devices via BLE and Wi-Fi with security and power constraints in mind.',
    highlights: [
      'GATT services, provisioning flows, and OTA transport',
      'Secure pairing, encryption, and key management',
      'Power-aware connection strategies',
    ],
  },
  JTAG: {
    level: 4,
    label: 'Advanced',
    summary: 'Debugged complex embedded issues using JTAG/SWD tooling and trace.',
    highlights: [
      'Hardware bring-up and failure analysis',
      'Scripted debug workflows for teams',
      'Integration with CI/HIL pipelines',
    ],
  },
  React: {
    level: 4,
    label: 'Advanced',
    summary:
      'Built internal tools and dashboards that surface embedded telemetry clearly.',
    highlights: [
      'Component-driven UI design and state management',
      'Realtime data streaming and visualization',
      'Design systems with a neobrutalist aesthetic',
    ],
  },
  TypeScript: {
    level: 4,
    label: 'Advanced',
    summary:
      'Type-safe UI and tooling stacks that improve reliability and collaboration.',
    highlights: [
      'Shared types between front-end and services',
      'Strict typing for complex data flows',
      'Developer tooling and linting setup',
    ],
  },
  WebSockets: {
    level: 3,
    label: 'Proficient',
    summary: 'Realtime communication for dashboards and device monitoring.',
    highlights: [
      'Streaming telemetry and event ingestion',
      'Connection health and reconnection strategies',
      'Message schemas for embedded data',
    ],
  },
  'Node.js': {
    level: 3,
    label: 'Proficient',
    summary: 'Built APIs and tooling pipelines that support firmware delivery.',
    highlights: [
      'Device provisioning services',
      'CI automation and build tooling',
      'Data pipelines for device analytics',
    ],
  },
  Storybook: {
    level: 3,
    label: 'Proficient',
    summary: 'Documented UI systems for internal tools and product teams.',
    highlights: [
      'Component documentation and testing',
      'Design collaboration workflows',
      'Theme and accessibility reviews',
    ],
  },
  'CI/CD': {
    level: 4,
    label: 'Advanced',
    summary: 'Automated firmware builds, testing, and deployment workflows.',
    highlights: [
      'Multi-target build pipelines and artifact management',
      'Automated regression testing with hardware rigs',
      'Release orchestration and gating checks',
    ],
  },
  'Static analysis': {
    level: 4,
    label: 'Advanced',
    summary: 'Applied static analysis to enforce safety and maintainability.',
    highlights: [
      'MISRA and CERT compliance strategies',
      'Automated linting and quality gates',
      'Issue triage and codebase remediation',
    ],
  },
  'Unit + HIL testing': {
    level: 4,
    label: 'Advanced',
    summary: 'Built test suites spanning unit, integration, and hardware-in-loop.',
    highlights: [
      'Test harness design for embedded systems',
      'Automated test runners and reporting',
      'Validation across production hardware',
    ],
  },
  MISRA: {
    level: 3,
    label: 'Proficient',
    summary: 'Experienced applying MISRA guidelines in safety-focused projects.',
    highlights: [
      'Compliance documentation and audits',
      'Coding standards enforcement',
      'Risk assessments and deviation management',
    ],
  },
  Docs: {
    level: 4,
    label: 'Advanced',
    summary: 'Clear documentation for firmware, tooling, and cross-team communication.',
    highlights: [
      'Architecture diagrams and API references',
      'Onboarding guides for new engineers',
      'Release notes and troubleshooting runbooks',
    ],
  },
}
