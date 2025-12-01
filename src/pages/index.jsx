import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const featuredProducts = [
  {
    category: 'Cartes Pokémon',
    items: [
      {
        name: 'Booster Base Set 2',
        price: '9,99 €',
        tag: 'Vintage',
        image: '/images/pokemoncard.png',
        badge: '/buttons/new.gif',
      },
      {
        name: 'Pikachu 1ère édition (repro)',
        price: '4,50 €',
        tag: 'Reprint',
        image: '/images/pokemoncard.png',
        badge: '/buttons/star.gif',
      },
      {
        name: 'Starter deck 2000',
        price: '24,90 €',
        tag: 'Collection',
        image: '/images/pokemoncard.png',
        badge: '/buttons/sale.gif',
      },
    ],
  },
  {
    category: 'Consoles & jeux',
    items: [
      {
        name: 'Nouvelle GBA SP',
        price: '99,00 €',
        tag: 'old-school',
        image: '/images/gbasp.png',
        badge: '/buttons/hot.gif', // petit clin d’œil “HOT!”
      },
      {
        name: 'Game Boy Color transparente',
        price: '79,00 €',
        tag: 'Best-seller',
        image: '/images/gameboy.png',
        badge: '/buttons/hot.gif',
      },
      {
        name: 'Tamagotchi classic',
        price: '29,90 €',
        tag: 'Nostalgie',
        image: '/images/tamagochi.png',
        badge: '/buttons/hot.gif',
      },
    ],
  },
  {
    category: 'Merch 2000s',
    items: [
      {
        name: 'T-shirt Linkin Park Hybrid Theory',
        price: '19,90 €',
        tag: 'Concert',
        image: '/images/linkinpark.png',
        badge: '/buttons/hot.gif',
      },
      {
        name: 'Poster Green Day 2001',
        price: '7,90 €',
        tag: 'Affiche',
        image: '/images/greenday.png',
        badge: '/buttons/star.gif',
      },
      {
        name: 'Baladeur CD anti-choc',
        price: '39,00 €',
        tag: 'Street',
        image: '/images/baladeur.png',
        badge: '/buttons/sale.gif',
      },
    ],
  },
];

const tcgAndGadgets = [
  {
    name: 'Deck Yu-Gi-Oh! nostalgie',
    description: 'Le deck que tu sortais dans la cour pour tenter d’invoquer Exodia.',
    image: '/images/yugioh.png',
    badge: '/buttons/yugi.gif',
  },
  {
    name: 'Booster Magic: The Gathering 7e édition',
    description: 'Pour retrouver l’odeur du carton neuf et des points de vie mal comptés.',
    image: '/images/mtg.png',
    badge: '/buttons/star.gif',
  },
  {
    name: 'Poster Tokio Hotel 2005',
    description: 'À accrocher sur la porte de ta chambre d’ado intérieure.',
    image: '/images/tokio-hotel.png',
    badge: '/buttons/new.gif',
  },
  {
    name: 'Nokia 3310 indestructible',
    description: 'Batterie infinie, Snake 2, et zéro écran cassé.',
    image: '/images/nokia.png',
    badge: '/buttons/explosion.gif',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>NéoRétro 2001 – Objets néo-rétro en 2025</title>
        <meta
          name="description"
          content="NéoRétro – Le faux site e-commerce des années 2000, codé avec des technos modernes."
        />
      </Head>

      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.logo}>
              <span className={styles.logoPixel}>N</span>
              <span>éo</span>
              <span className={styles.logoAccent}>Rétro</span>
            </div>
            <p className={styles.tagline}>
              Boutique néo-rétro : le site que tu rêvais de consulter en 2001… codé en 2025.
            </p>
            <img
              src="/buttons/new.gif"
              alt="Nouveau !"
              className={styles.headerNewBadge}
            />
          </div>

          <nav className={styles.nav}>
            <a href="#featured">Accueil</a>
            <a href="#pokemon">Cartes Pokémon</a>
            <a href="#consoles">Consoles & jeux</a>
            <a href="#merch">Merch 2000s</a>
            <a href="#tcg">Yu-Gi-Oh, MTG & gadgets</a>
            <a href="#about">À propos</a>
          </nav>

<div className={styles.marqueeWrapper} aria-hidden="true">
  <div className={styles.marqueeTrack}>
    💾 Offre spéciale : livraison offerte pour toute commande payée en chèques cadeaux 2003 •
    🎮 Nouveau : rayon Game Boy Advance SP •
    📼 Les années 2000 ne meurent jamais chez NéoRétro •
  </div>
</div>


        </header>

        <main className={styles.main}>
          <section className={styles.hero} id="featured">
            <div className={styles.heroContent}>
              <h1>
                Bienvenue sur <span className={styles.heroHighlight}>NéoRétro</span>
              </h1>
              <p>
                Néo-boutique rétro qui vend, en théorie, tout ce que tu voulais dans les années 2000 :
                cartes Pokémon, consoles portables, merch de concerts… Le tout présenté comme un vieux site,
                mais propulsé par un code moderne, responsive et propre.
              </p>
              <ul className={styles.heroList}>
                <li>Design old school (bordures, liens bleus, gifs…)</li>
                <li>HTML sémantique, Next.js &amp; SCSS modules</li>
                <li>Compatible mobile (ce que les vrais sites de 2001 n’étaient pas 😅)</li>
              </ul>
              <div className={styles.heroIconsRow}>
                <img src="/buttons/pokemon.gif" alt="Pokémon" />
                <img src="/buttons/yugi.gif" alt="Yu-Gi-Oh!" />
                <img src="/buttons/underconstruction.gif" alt="Hot deals" />
              </div>
            </div>

            <aside className={styles.heroAside}>
              <div className={styles.crtFrame}>
                <p className={styles.crtTitle}>Sélection du moment</p>
                <ul>
                  <li>⭐ Booster Pokémon Base Set (repro)</li>
                  <li>⭐ Game Boy Color “clear purple”</li>
                  <li>⭐ T-shirt Linkin Park 2001</li>
                </ul>
                <p className={styles.crtHint}>Clique pas, c’est un faux site 😉</p>
              </div>
            </aside>
          </section>

          {/* Pokémon */}
          <section className={styles.section} id="pokemon">
            <h2>
              Cartes Pokémon &amp; trading cards
              <img
                src="/buttons/pokemon.gif"
                alt="Pokémon animé"
                className={styles.inlineGif}
              />
            </h2>
            <p className={styles.sectionIntro}>
              Tu te souviens des classeurs remplis de cartes qu’on échangeait dans la cour ?  
              On a recréé l’ambiance, sans les disputes sur “c’est toi qui as triché”.
            </p>

            <div className={styles.grid}>
              {featuredProducts[0].items.map((item) => (
                <article key={item.name} className={styles.card}>
                  <header className={styles.cardHeader}>
                    <span className={styles.cardTag}>{item.tag}</span>
                    {item.badge && (
                      <img
                        src={item.badge}
                        alt={item.tag}
                        className={styles.badgeGif}
                      />
                    )}
                  </header>
                  <div className={styles.cardBody}>
                    <div className={styles.productTop}>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className={styles.productImage}
                        />
                      )}
                      <h3>{item.name}</h3>
                    </div>
                    <p className={styles.cardPrice}>{item.price}</p>
                    <a href="#!" className={styles.cardLink}>
                      Voir le détail (faux lien)
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Consoles */}
          <section className={styles.section} id="consoles">
            <h2>Consoles &amp; jeux rétro</h2>
            <p className={styles.sectionIntro}>
              Game Boy Color, GBA SP, Tamagotchi… Ouais c’est à cause de ça ta myopie !
            </p>

            <div className={styles.grid}>
              {featuredProducts[1].items.map((item) => (
                <article key={item.name} className={styles.card}>
                  <header className={styles.cardHeader}>
                    <span className={styles.cardTag}>{item.tag}</span>
                    {item.badge && (
                      <img
                        src={item.badge}
                        alt={item.tag}
                        className={styles.badgeGif}
                      />
                    )}
                  </header>
                  <div className={styles.cardBody}>
                    <div className={styles.productTop}>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className={styles.productImage}
                        />
                      )}
                      <h3>{item.name}</h3>
                    </div>
                    <p className={styles.cardPrice}>{item.price}</p>
                    <a href="#!" className={styles.cardLink}>
                      Ajouter au panier (qui n’existe pas)
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Merch */}
          <section className={styles.section} id="merch">
            <h2>Merch &amp; concerts 2000s</h2>
            <p className={styles.sectionIntro}>
              Posters, t-shirts de concerts, baladeurs CD anti-choc…  
              Tout ce qu’il faut pour faire croire que tu vas à la boom ce soir (nuit blanche jusqu’à 22h).
            </p>

            <div className={styles.grid}>
              {featuredProducts[2].items.map((item) => (
                <article key={item.name} className={styles.card}>
                  <header className={styles.cardHeader}>
                    <span className={styles.cardTag}>{item.tag}</span>
                    {item.badge && (
                      <img
                        src={item.badge}
                        alt={item.tag}
                        className={styles.badgeGif}
                      />
                    )}
                  </header>
                  <div className={styles.cardBody}>
                    <div className={styles.productTop}>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className={styles.productImage}
                        />
                      )}
                      <h3>{item.name}</h3>
                    </div>
                    <p className={styles.cardPrice}>{item.price}</p>
                    <a href="#!" className={styles.cardLink}>
                      Voir la fiche produit (promis c’est faux)
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Yu-Gi-Oh, MTG & gadgets */}
          <section className={styles.section} id="tcg">
            <h2>
              Yu-Gi-Oh!, Magic &amp; gadgets
              <img
                src="/buttons/yugi.gif"
                alt="Yu-Gi-Oh animé"
                className={styles.inlineGif}
              />
            </h2>
            <p className={styles.sectionIntro}>
              Les trucs que tu posais fièrement sur ton bureau : decks, posters, téléphone Nokia,
              parce qu’il fallait bien montrer ton alignement élémentaire au collège.
            </p>

            <div className={styles.iconGrid}>
              {tcgAndGadgets.map((item) => (
                <article key={item.name} className={styles.iconCard}>
                  <header className={styles.iconHeader}>
                    <img
                      src={item.badge}
                      alt=""
                      aria-hidden="true"
                      className={styles.iconBadge}
                    />
                    <h3>{item.name}</h3>
                  </header>
                  <div className={styles.iconBody}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.iconImage}
                    />
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* À propos */}
          <section className={styles.section} id="about">
            <h2>Un vrai faux site, pour un vrai dev</h2>
            <div className={styles.aboutBox}>
              <p>
                Néo Rétro est un projet perso conçu en quelques instants comme un clin d’oeil à ma jeunsesse, au web des années 2000 :
                bordures grises, liens bleus, bandeau jaune… mais avec un code 100% moderne. En fait j’avais pas internet début 2000, mais en vrai, ça m’a fait marrer.
              </p>
              <p>
                Le but : montrer que l’on peut créer des univers graphiques marqués, s’amuser avec
                la nostalgie, tout en respectant les standards actuels (accessibilité, responsive,
                performances).
              </p>
              <p className={styles.aboutNote}>
                Projet fictif : rien n’est réellement à vendre ici.  
                Par contre, je fais de vrais sites vitrines modernes pour de vrais clients. 😉
              </p>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <p className={styles.footerTitle}>NéoRétro 2001–2025</p>
            <p className={styles.footerLinks}>
              <a href="#featured">Accueil</a> ·{' '}
              <a href="#pokemon">Pokémon</a> ·{' '}
              <a href="#consoles">Consoles</a> ·{' '}
              <a href="#merch">Merch</a> ·{' '}
              <a href="#tcg">Yu-Gi-Oh &amp; MTG</a>
            </p>
            <div className={styles.footerBadges}>
              <img
                src="/buttons/underconstruction.gif"
                alt="Under construction"
              />
              <img src="/buttons/star.gif" alt="Star" />
              <img src="/buttons/explosion.gif" alt="Explosion retro" />
            </div>
            <p className={styles.footerTiny}>
              Site rétro fictif / Best viewed on un écran cathodique 1024×768
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
