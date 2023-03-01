import prisma from "$lib/prisma";
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ params: { id } }) => {
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: { author: true },
  });

  return { post };
}) satisfies PageServerLoad;

export const actions = {
  publishPost: async ({ params: { id } }) => {
    await prisma.post.update({
      where: { id: Number(id) },
      data: {
        published: true,
      },
    });

    throw redirect(303, `/p/${id}`);
  },

  deletePost: async ({ params: { id } }) => {
    await prisma.post.delete({
      where: { id: Number(id) },
    });

    throw redirect(303, '/')
  }
} satisfies Actions;