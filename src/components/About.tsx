interface Props {
  about_title: string;
  about_text: string;
}

export default function About({ about_text, about_title }: Props) {
  return (
    <section
      id="about"
      className="w-full flex flex-col content h-screen items-center bg-white"
    >
      <div className="my-auto sm:mt-24">
        <h1 className="text-primary-blue text-center text-2xl lg:text-4xl font-bold">
          {about_title}
        </h1>
        <h3 className="text-xl max-w-3xl lg:text-2xl mt-10 text-center font-semibold text-primary-blue">
          {about_text}
        </h3>
      </div>
    </section>
  );
}
