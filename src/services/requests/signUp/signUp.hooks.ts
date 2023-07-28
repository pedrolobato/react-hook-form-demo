import { useState } from "react";

import { SignUpParams, signUp as signUpRequest } from "./signUp.request";

export function useSignUp() {
  const [loading, setLoading] = useState(false);

  async function signUp({ user, email, password }: SignUpParams) {
    try {
      setLoading(true);
      const { data } = await signUpRequest({ user, email, password });
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    signUp,
  };
}
