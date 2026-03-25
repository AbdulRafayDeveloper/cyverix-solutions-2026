import type { LucideIcon } from "lucide-react";
import { Globe, Cpu, Bot, Settings, Layers, Layout, Smartphone } from "lucide-react";
import type { ServiceId } from "./services";

const MAP: Record<ServiceId, LucideIcon> = {
  website: Globe,
  software: Cpu,
  ai: Bot,
  automation: Settings,
  devops: Layers,
  uiux: Layout,
  mobile: Smartphone,
};

export function getServiceIcon(id: ServiceId): LucideIcon {
  return MAP[id];
}
