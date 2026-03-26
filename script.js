:root {

main {
  max-width: 900px;
  margin: auto;
}

#hero {
  text-align: center;
  padding: 5rem 2rem 3rem;
}

#hero h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

#hero p {
  color: var(--muted);
}

section {
  padding: 2rem;
}

h2 {
  font-size: 1.2rem;
  color: var(--muted);
  text-transform: lowercase;
  margin-bottom: 1rem;
}

.project {
  background: var(--panel);
  padding: 1.2rem;
  margin-top: 1rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  transition: transform 0.15s ease, border 0.15s ease;
}

.project:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.project h3 {
  margin: 0 0 0.3rem 0;
}

.project p {
  margin: 0;
  color: var(--muted);
}

footer {
  text-align: center;
  padding: 2rem;
  color: var(--muted);
  border-top: 1px solid var(--border);
  margin-top: 2rem;
}

