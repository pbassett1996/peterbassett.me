export type SkillDetail = {
  level: number;
  label: string;
  summary: string;
  highlights: readonly string[];
};

export const skillGroups = [
  {
    title: "Embedded & Robotics",
    skills: [
      "C/C++",
      "Linux Embedded",
      "PetaLinux",
      "Bare Metal",
      "Ardupilot",
      "OpenWRT",
      "Yocto",
      "Mavlink",
      "Matlab",
    ],
  },
  {
    title: "Frontend & Tooling",
    skills: [
      "React",
      "TypeScript",
      "Electron",
      "Websockets",
      "Webservers",
      "UX/UI Design",
      "PHP",
      "Laravel",
    ],
  },
  {
    title: "Backend & Delivery",
    skills: [
      "Golang",
      "Python",
      "Java",
      "CI/CD",
      "Docker & Containerization",
      "GitLab",
    ],
  },
];

export const skillDetails: Record<string, SkillDetail> = {
  "C/C++": {
    level: 4,
    label: "Advanced",
    summary:
      "Extensive experience building embedded firmware, drivers, and performance-critical modules.",
    highlights: [
      "Modern C++ for firmware architecture and hardware abstraction & interfacing",
      "Memory-safe patterns, static analysis, and communications",
      "Performance profiling and optimization on constrained devices",
    ],
  },
  "Linux Embedded": {
    level: 4,
    label: "Advanced",
    summary:
      "Deep experience with embedded Linux systems for production devices.",
    highlights: [
      "Device bring-up, driver integration, and kernel module development",
      "Network stacks and real-time telemetry",
      "Debugging and profiling on target hardware",
    ],
  },
  PetaLinux: {
    level: 4,
    label: "Advanced",
    summary:
      "Experience customising PetaLinux for embedded applications and production deployment.",
    highlights: [
      "Yocto-based builds and BSP configuration",
      "Bootloader and kernel customisation",
      "Hardware bring-up and network integration",
    ],
  },
  "Bare Metal": {
    level: 2,
    label: "Intermediate",
    summary:
      "Some experience developing firmware without an OS, handling low-level hardware directly.",
    highlights: [
      "Minimal system bring-up",
      "eFUSE programming for secure-boot",
      "Basic interrupt handling",
    ],
  },
  Ardupilot: {
    level: 4,
    label: "Advanced",
    summary: "Developed and customised Ardupilot for robotics and UAV control.",
    highlights: [
      "Mission planning and control",
      "Telemetry and sensor integration",
      "Simulation and HIL testing",
    ],
  },
  OpenWRT: {
    level: 4,
    label: "Advanced",
    summary:
      "Configured and maintained OpenWRT devices for networking and telemetry.",
    highlights: [
      "Package management and service customisation",
      "Network monitoring and routing configuration",
      "Firmware integration for embedded devices",
      "VPN client configuration and management",
    ],
  },
  Yocto: {
    level: 3,
    label: "Proficient",
    summary:
      "Worked with Yocto through PetaLinux for embedded image customisation.",
    highlights: [
      "Bitbake recipe tweaks and layer configuration",
      "Rootfs customisation and package management",
      "Integration with PetaLinux build and CI/CD pipelines",
    ],
  },
  Mavlink: {
    level: 4,
    label: "Advanced",
    summary:
      "Implemented Mavlink communication for UAVs and robotics telemetry.",
    highlights: [
      "Message encoding/decoding and protocol handling",
      "Integration with Ardupilot and embedded systems",
      "Telemetry validation and error handling",
    ],
  },
  Matlab: {
    level: 4,
    label: "Advanced",
    summary:
      "Used Matlab for algorithm development, simulation, and data analysis.",
    highlights: [
      "Navigation algorithm prototyping",
      "Data visualisation and analysis",
      "Signal processing and simulations",
    ],
  },
  React: {
    level: 5,
    label: "Expert",
    summary:
      "Built production-grade dashboards, desktop apps, and cloud interfaces for embedded and full-stack systems.",
    highlights: [
      "Embedded system dashboards and telemetry monitoring",
      "Electron desktop applications for tooling and production workflows",
      "Cloud-based web applications and internal tools",
      "Real time data visualisation and analysis",
    ],
  },
  TypeScript: {
    level: 4,
    label: "Advanced",
    summary:
      "Built type-safe front-end and tooling stacks for high-data, real-time systems.",
    highlights: [
      "Developed React applications combining functional and OOP patterns",
      "Handled telemetry streaming, high-velocity data, and video-style interfaces",
      "Decoded/encoded binary protocols and integrated Protobuf messages",
      "Integrated with REST APIs and back-end services",
    ],
  },
  Electron: {
    level: 4,
    label: "Advanced",
    summary:
      "Built cross-platform desktop applications for interfacing with and monitoring embedded devices.",
    highlights: [
      "Unified interfaces for devices over HTTP, TCP, UDP, and serial",
      "Real-time telemetry dashboards and configuration tooling",
      "Bridged Electron, Node.js, and native protocols for device communication",
      "Packaging, distribution, and auto-update workflows",
    ],
  },
  WebSockets: {
    level: 5,
    label: "Expert",
    summary:
      "Designed and implemented high-throughput realtime streaming for cloud services, desktop apps, and embedded devices.",
    highlights: [
      "Cloud-based telemetry streaming at high data rates",
      "WebSocket implementations in Go, TypeScript, and C/C++",
      "Embedded device ↔ cloud ↔ UI streaming architectures",
      "Connection lifecycle management, backpressure, and reconnection strategies",
      "WebRTC data channels for low-latency transport",
    ],
  },
  Webservers: {
    level: 5,
    label: "Expert",
    summary:
      "Designed and shipped RESTful web servers and APIs across embedded devices, services, and internal tooling.",
    highlights: [
      "Embedded and service-side REST API design",
      "Implementations across Go, C/C++, Python, and PHP",
      "Device configuration, control, and telemetry endpoints",
      "Performance tuning and resource-aware server design",
      "Authentication, security boundaries, and safe exposure of device APIs",
    ],
  },
  "UX/UI Design": {
    level: 3,
    label: "Proficient",
    summary:
      "Self-taught UI/UX design focused on clarity, usability, and data-dense interfaces.",
    highlights: [
      "Strong visual intuition and layout hierarchy",
      "Dashboard and tooling UX for complex, real-time data",
      "Experience applying Material Design, Bootstrap, and neobrutalist systems",
      "Consistent, accessible component and interaction patterns",
    ],
  },
  PHP: {
    level: 2,
    label: "Intermediate",
    summary:
      "Used PHP in production to support device provisioning and first-install workflows.",
    highlights: [
      "Backend logic for embedded device bring-up on corporate networks",
      "Form handling and request validation",
      "Persistence using SQLite",
    ],
  },

  Laravel: {
    level: 2,
    label: "Intermediate",
    summary:
      "Built a production Laravel app for provisioning and onboarding embedded devices.",
    highlights: [
      "Routing, controllers, and server-rendered views",
      "SQLite-backed state management for device installation flows",
      "Operational tooling for initial device configuration",
    ],
  },
  "C/C++ + Golang": {
    level: 4,
    label: "Advanced",
    summary:
      "Built device and cloud software combining Go networking with low-level C components.",
    highlights: [
      "Go-based embedded services with cgo for hardware-critical paths",
      "On-device APIs, telemetry, and control planes",
      "Live video and data streaming using LiveKit",
    ],
  },
  Python: {
    level: 4,
    label: "Advanced",
    summary: "Used Python for tooling, scripts, and prototypes.",
    highlights: [
      "Data processing and automation",
      "Prototyping front-end dashboards",
      "Simulation and testing scripts",
    ],
  },
  Java: {
    level: 2,
    label: "Familiar",
    summary:
      "Working knowledge of Java, primarily through collaboration, debugging, and code review.",
    highlights: [
      "Assisted with troubleshooting and reasoning through Java-based systems",
      "Code review and refactoring support",
      "Understanding of common backend patterns and pitfalls",
    ],
  },
  "CI/CD": {
    level: 3,
    label: "Proficient",
    summary:
      "Designed and maintained CI/CD pipelines across frontend, desktop, and embedded systems.",
    highlights: [
      "Automated builds for web apps, Electron applications, and embedded firmware",
      "Multi-pipeline workflows with artifact versioning",
      "CI for OpenWRT and PetaLinux-based systems",
      "Integration with Docker and GitLab for repeatable, reliable delivery",
    ],
  },
  "Docker & Containerization": {
    level: 5,
    label: "Expert",
    summary:
      "Used Docker extensively across embedded, robotics, and web systems to standardise builds and environments.",
    highlights: [
      "Containerised build environments for frontend, backend, and embedded firmware",
      "Cross-compilation and toolchain isolation for embedded and robotics workflows",
      "Docker-based test and development environments",
      "First-class integration with CI/CD pipelines for reproducible builds",
    ],
  },
  GitLab: {
    level: 4,
    label: "Advanced",
    summary: "Used GitLab for source control, CI/CD, and team collaboration.",
    highlights: [
      "Pipeline configuration and artifact management",
      "Merge request workflows and code review integration",
      "Automation of builds, tests, and deployments",
    ],
  },
};
