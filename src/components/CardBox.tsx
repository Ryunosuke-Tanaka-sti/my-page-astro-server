type CardBoxProps = {
  title: string;
  description: string;
  image: string;
  url: string
};

export const CardBox = (props: CardBoxProps) => {
  const { title, description, image, url } = props;
  return (
    <a
      className="w-full flex flex-col md:flex-row p-7 font-kiwi gap-2 items-center md:items-start rounded shadow-lg hover:cursor-pointer transition hover:-translate-y-2 hover:opacity-80"
      href={url}
      target="_blank" rel="noopener noreferrer"
    >
      <img src={image} className="h-64 w-auto object-contain rounded-lg" alt="" />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl">{title}</h2>
        <span className="text-sm md:text-lg">{description}</span>
      </div>
    </a>
  );
};
