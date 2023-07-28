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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, data: { user, email } });
    }, 2000);
  });
}

export type VerifyUserNameParams = { user: string };
type SuccessVerifyUserNameType = {
  status: number;
};

export function verifyUserName({
  user,
}: VerifyUserNameParams): Promise<SuccessVerifyUserNameType> {
  return new Promise((resolve, reject) => {
    if (user === "lobato") {
      setTimeout(() => {
        reject({
          status: 400,
          error: { field: "user", message: "Nome de usuário já existe" },
        });
      }, 2000);
    } else {
      setTimeout(() => {
        resolve({ status: 201 });
      }, 2000);
    }
  });
}
