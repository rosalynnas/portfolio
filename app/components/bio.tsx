export function Bio() {
  return (
    <section className="h-screen p-32 text-blue-950 leading-relaxed">
      <div className="container flex flex-col gap-10">
        <div>
          <h1 className="text-4xl font-serif font-light">
            <span className="block">Hey, I'm Rosalynn—a</span>
            <span>Montreal-based software engineer.</span>
          </h1>
        </div>
        <div className="w-[38rem] flex flex-col gap-6">
          <p>
            I'm a full stack developer, Rubyist, and amateur hydroponic
            gardener. My past projects include Les Produits Du Québec, Québec
            Sans Tabac, and the SaaS platform IFiveMe. I'm also the creator
            Sezia, a cosmetic ingredient analyzer for fungal skin disorders.
          </p>
          <p>
            Whether I'm optimizing response loads or improving my hydroponic
            basil yields, I'm curious to learn what things are like and how they
            work. Checkout my{" "}
            <a className="underline" href="https://github.com/rosalynnas">
              GitHub projects
            </a>{" "}
            to see what's caught my interest lately.
          </p>
        </div>
        <div className="flex gap-14">
          <p className="flex items-center">
            <span className="bullet bg-[#94a8d4]"></span>Backend Engineering
          </p>
          <p className="flex items-center">
            <span className="bullet bg-[#F9FDFD]"></span>Frontend Engineering
          </p>
          <p className="flex items-center">
            <span className="bullet bg-[#FFFAD3]"></span>Data Science
          </p>
        </div>
      </div>
    </section>
  );
}
