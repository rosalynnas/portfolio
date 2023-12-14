export function Bio() {
  return (
    <section className="py-64 px-16 md:pb-48 xl:pt-32 xl:px-20 xl:pb-20 text-blue-950 leading-relaxed">
      <div className="container flex flex-col gap-10">
        <div>
          <h1 className="text-4xl font-serif font-light">
            <span className="block">Hey, I'm Rosalynn—a</span>
            <span>Montreal-based software engineer.</span>
          </h1>
        </div>
        <div className="w-auto lg:w-[38rem] flex flex-col gap-6">
          <p>
            I'm a back end developer, Rubyist, and amateur hydroponic gardener.
            My past projects include{" "}
            <a className="underline" href="https://lesproduitsduquebec.com">
              Les Produits Du Québec
            </a>
            ,{" "}
            <a className="underline" href="https://www.quebecsanstabac.ca">
              Québec Sans Tabac
            </a>
            , and the SaaS platform{" "}
            <a className="underline" href="https://www.ifiveme.com/en/home">
              IFiveMe
            </a>
            . I'm also the creator of{" "}
            <a className="underline" href="https://sezia.co">
              Sezia
            </a>
            , a cosmetic ingredient analyzer for fungal skin disorders.
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
      </div>
    </section>
  );
}
