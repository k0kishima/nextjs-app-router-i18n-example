export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;

  return (
    <main>
      <div className="m-5">{lang}</div>
    </main>
  );
}
