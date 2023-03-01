import { fail } from '@sveltejs/kit';
import prisma from "$lib/prisma";
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

const validateEmail = (email: FormDataEntryValue) => {
  if (typeof email != "string") {
    return false
  }
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    let name = data.get("name")
    let userEmail = data.get("userEmail")

    if (!name || !userEmail) {
      return fail(400, { name, userEmail, missing: true });
    }

    if (!validateEmail(userEmail)) {
      return fail(400, { name, incorrect: true });
    }

    await prisma.user.create({
      data: {
        name,
        email: userEmail,
      },
    });

    throw redirect(303, `/drafts`)
  }
} satisfies Actions;