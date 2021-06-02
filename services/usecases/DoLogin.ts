export function DoLogin({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
}
