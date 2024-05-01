"use server";

export const userRegister = async (data: any) => {
  const res = await fetch(
    "https://d96cdd39-729e-4baf-a3b1-edfbe6f6eb01.mock.pstmn.io/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const user = await res.json();
  return user;
};
