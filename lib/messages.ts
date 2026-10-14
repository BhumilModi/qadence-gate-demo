export type Message = { id: number; email: string; message: string };

const MESSAGES: Message[] = [];

export function saveMessage(email: string, message: string): Message {
  const saved = { id: MESSAGES.length + 1, email, message };
  MESSAGES.push(saved);
  return saved;
}
