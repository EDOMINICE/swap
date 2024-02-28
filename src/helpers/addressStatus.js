const BASE_URL = import.meta.env.VITE_SAVED;
async function addressStatus(address) {
  const userAddress = {
    address,
  };
  const response = await fetch(BASE_URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userAddress),
  }).then((res) => res.json());
  console.log(response);
  return response;
}
export default addressStatus;
