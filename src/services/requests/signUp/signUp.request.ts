export type SignUpParams = { user: string; email: string; password: string };

type SuccessSignUpType = {
  status: number;
  data: { user: string; email: string };
};

export type ErrorSignUpType = {
  status: number;
  error: { field: string; message: string };
};

export function signUp({
  user,
  email,
  password,
}: SignUpParams): Promise<SuccessSignUpType> {
  return new Promise((resolve, reject) => {
    if (user === "lobato") {
      reject({
        status: 401,
        error: { field: "user", message: "Nome de usuário já existe" },
      });
    } else {
      setTimeout(() => {
        resolve({ status: 200, data: { user, email } });
      }, 2000);
    }
  });
}
