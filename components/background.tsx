import { Suspense } from "react";
import { list } from "@vercel/blob";
import Image from "next/image";

import poster from "../public/poster.png";

async function Video({ prefix }: { prefix: string }) {
  const { blobs } = await list({ prefix, limit: 1 });
  const { url } = blobs[0];

  return (
    <video
      className="fixed inset-0 w-full h-full object-cover"
      preload="none"
      autoPlay
      muted
      loop
      playsInline
      controls={false}
    >
      <source src={url} type="video/mp4" />
    </video>
  );
}

export default function Background() {
  return (
    <Suspense
      fallback={
        <Image
          className="fixed inset-0 w-full h-full object-cover"
          src={poster}
          alt="Poster"
          width={1214}
          height={2160}
          placeholder="blur"
          sizes="100vw"
          priority
        />
      }
    >
      <Video prefix="IMG_7170-nOqHfkiTopRM3JVs55jWyvku7qVuno.mp4" />
    </Suspense>
  );
}
