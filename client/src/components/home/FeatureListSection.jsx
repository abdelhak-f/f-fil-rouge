// src/components/FeatureListSection.jsx
const FeatureListSection = () => {
  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Nos prestations de maintenance de
          </h1>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            véhicules particulier et industriel
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Feature 1 */}
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Prestations Pneumatiques
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Découvrez plus en détail nos prestations concernant la
                  réparation, le remplacement et le montage de pneumatiques sur
                  les véhicules de votre parc auto. Vous pouvez également
                  contacter un de nos experts pour en savoir plus.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Révision
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Découvrez notre offre Révision Expert dédiée aux entreprises,
                  afin d’entretenir les véhicules de vos Collaborateurs tout en
                  préservant votre garantie constructeur .
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Entretien Courant
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  L’entretien rigoureux de votre parc de véhicules de fonction
                  c’est la garantie de bénéficier d’une flotte de voitures dans
                  un excellent état mécanique, afin de garantir la sécurité et
                  la sérénité de vos Collaborateurs tout en s’affranchissant de
                  réparations inopinées.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Entretien Climatisation
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  L’entretien régulier de la climatisation et du circuit d’air
                  permet d’offrir un environnement de conduite sain et agréable
                  à vos Collaborateurs, été comme hiver. Profitez de l’expertise
                  de notre garage pour faire entretenir le circuit d’air et la
                  climatisation de vos véhicules d’entreprise au meilleur prix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureListSection;
