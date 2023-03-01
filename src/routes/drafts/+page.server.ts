import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const response = await prisma.post.findMany({
    where: { published: false },
    include: { author: true },
  })

  return { drafts: response };
}) satisfies PageServerLoad;