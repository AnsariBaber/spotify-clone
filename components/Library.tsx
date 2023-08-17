"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/Hooks/useAuthModal";
import { useUser } from "@/Hooks/useUser";
import useUploadModal from "@/Hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/Hooks/useOnPlay";

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModel = useAuthModal();
  const uploadModal = useUploadModal();
  const onPlay = useOnPlay(songs);
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModel.onOpen();
    }
    // check for subscription
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          size={20}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((item) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            data={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
