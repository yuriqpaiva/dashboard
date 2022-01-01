const updateChamada = (id: number, estado: string): Promise<Response> => {
  return fetch(
    `http://191.252.93.122/desafio-front-end/api/update.php/${id}/${estado}`
  );
};

export { updateChamada };
