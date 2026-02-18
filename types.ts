export interface NavLink {
  label: string;
  href: string;
}

export interface EventType {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Activity {
  label: string;
  image: string;
  icon: React.ReactNode;
}
