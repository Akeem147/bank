"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
  try {
    
  } catch (error) {
    console.error("Error message:", error)
  }
}

export const signUp = async (userData: SignUpParams) => {
  const {email, password, firstName, lastName} = userData
  try {
    const { account } = await createAdminClient();
    console.log(account);
    

    const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
    console.log("New user account created:", newUserAccount);
    const session = await account.createEmailPasswordSession(email, password);
  
    const cookiesInstance = await cookies(); 

    cookiesInstance.set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount)

  } catch (error) {
    console.error("Error message:", error)
  }
}

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch{
    return null;
  }
}
