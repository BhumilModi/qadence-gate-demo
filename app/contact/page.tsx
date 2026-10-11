export default async function Contact({ searchParams }: { searchParams: Promise<{ sent?: string }> }) {
  const { sent } = await searchParams;
  if (sent) return <p role="status">Thanks, we will reply within a day.</p>;
  return (
    <form method="post" action="/api/contact">
      <h1>Contact</h1>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={4} required />
      <button type="submit">Send</button>
    </form>
  );
}
