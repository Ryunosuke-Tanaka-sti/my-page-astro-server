type CardBoxProps = {
  title: string;
  description: string;
  image: string;
};

export const CardBox = (props: CardBoxProps) => {
  const { title, description, image } = props;
  return (
    <div className="w-full flex flex-col md:flex-row p-7 font-kiwi gap-2 items-center md:items-start rounded shadow-lg hover:cursor-pointer transition hover:-translate-y-2 hover:opacity-80">
      <img src={image} className="h-64 w-auto object-contain rounded-lg" />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl">{title}</h2>
        <span className="text-sm md:text-lg">{description}</span>
      </div>
    </div>
  );
};
