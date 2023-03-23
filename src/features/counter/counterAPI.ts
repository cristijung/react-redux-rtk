// Uma função mokada para imitar a realização de uma solicitação assíncrona de dados.
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
