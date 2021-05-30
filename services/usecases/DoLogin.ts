export function DoLogin({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}
