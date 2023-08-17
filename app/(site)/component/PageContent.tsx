"use client";

import useOnPlay from "@/Hooks/useOnPlay";
import SongsItem from "@/components/SongsItem";
import { Song } from "@/types";
import React from "react";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No Songs</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {songs.map((item) => (
        <SongsItem
          key={item.id}
          data={item}
          onClick={(id: string) => onPlay(id)}
        />
      ))}
    </div>
  );
};

export default PageContent;
