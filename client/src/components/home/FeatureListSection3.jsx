const FeatureListSection3 = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Bienvenue chez Notre Top Garage
            <br className="hidden lg:inline-block" />
            entretien et réparation de véhicules
          </h1>
          <p className="mb-8 leading-relaxed">
            Top Garage est le premier réseau marocain indépendant spécialisé
            dans l'univers du garage automobile. Avec plus de 800 réparateurs
            experts en Maroc, Top Garage dispose d'une présence nationale, il y
            a forcément un garage près de chez vous ! Notre réseau de
            réparateurs automobiles toutes marques est à l'écoute de vos besoins
            en ce qui concerne la réparation ou l'entretien de votre voiture.
            Les garagistes Top Garage entretiennent, diagnostiquent et réparent
            votre véhicule avec les pièces d'origine, en respectant le cahier
            des charges constructeur pour maintenir la garantie.
          </p>
        </div>

        {/* Image Content */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="../public/images/pexels-entretien.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureListSection3;
