import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const response = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  })

  return { feed: response };
}) satisfies PageServerLoad;