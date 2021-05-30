export function RegisterUser({
  email,
  username,
  password,
  confirmationPassword,
}: {
  email: string;
  username: string;
  password: string;
  confirmationPassword: string;
}) {
  return fetch("/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, username, password }),
  });
}
