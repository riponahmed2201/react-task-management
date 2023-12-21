
//Data Transfer Object
import { LoginDto } from "../dto/login";
import { RegisterDto } from "../dto/register";

//Base URL
import { baseUrl } from "../utils/api-url";


// Register Auth API
export const registerApi = async (fields: RegisterDto) => {

  const response = await fetch(`${baseUrl}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields)
  });

  return response;
};

// Login Auth API
export const loginApi = async (fields: LoginDto) => {

  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields)
  });

  return response;
};