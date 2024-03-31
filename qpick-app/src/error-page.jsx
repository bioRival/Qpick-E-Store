import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Опаньки!</h1>
      <p>Возникла неизвестная ошибка.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}