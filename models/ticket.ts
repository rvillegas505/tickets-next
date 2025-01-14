export interface Ticket {
    id: string; // ID es string según el ejemplo
    title: string;
    body: string;
    priority: "low" | "medium" | "high"; // Puedes usar un tipo literal para prioridad
    user_email: string;
  }