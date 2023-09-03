import { useEffect, useState } from "react";

type MediaListProps = {
  media: { src: string; alt?: string }[];
};

const MediaList: React.FC<MediaListProps> = ({ media }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {media.map((item, index) => (
        <div key={index}>
          <img className="h-auto max-w-full rounded-lg" src={item} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MediaList;
