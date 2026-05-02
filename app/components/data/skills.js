import { PiMonitorPlay, PiCircuitry, PiHardHat } from "react-icons/pi";

export const skillGroups = [
  {
    title: "CAD & Simulation",
    Icon: PiMonitorPlay,
    accent: "from-[#7FFFD4]/85 via-[#00C896]/70 to-[#00C896]/95",
    skills: ["SolidWorks", "AutoCAD", "Solid Edge", "Ansys", "Comsole Multiphysics", "Matlab", "Simscape", "Simulink", "Fluidsim"],
  },
  {
    title: "Programming & Electronics",
    Icon: PiCircuitry,
    accent: "from-[#7FFFD4]/80 via-[#00C896]/65 to-[#00C896]/90",
    skills: ["Python", "C++", "PLC Programming", "Arduino", "Raspberry Pi", "Proteus", "ROS"],
  },
  {
    title: "Engineering Operations",
    Icon: PiHardHat,
    accent: "from-[#00C896]/80 via-[#7FFFD4]/55 to-[#7FFFD4]/80",
    skills: ["Engineering Designs", "Machine Commissioning", "Machine Maintenance", "Process Optimization", "Project Handling", "Automation", "SAP"],
  },
];
