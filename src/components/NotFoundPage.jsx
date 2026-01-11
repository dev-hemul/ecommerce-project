import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <section>
      <h1>404</h1>
      <p>Page not Found</p>

      <Link to="/">On Main</Link>
    </section>
  );
}